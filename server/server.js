import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_FILE = path.join(__dirname, 'saves.json');
const LOG_FILE = path.join(__dirname, 'client_errors.log');

// Danh sách các game được hỗ trợ
const SUPPORTED_GAMES = {
  'tiem-tra-nho': 'Tiệm Trà Nhỏ (Milk Tea Simulator)',
  'banh-mi': 'Bánh Mì Bé Xíu (Vietnamese Bread Simulator)',
  'tiem-my-cay': 'Tiệm Mì Cay (Spicy Noodle Simulator)',
  'tiem-xoi': 'Tiệm Xôi Bà Tám (Sticky Rice Simulator)'
};

// Đọc dữ liệu đã lưu từ file JSON
let saves = {};
if (fs.existsSync(DB_FILE)) {
  try {
    saves = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    console.log(`[Database] Đã tải ${Object.keys(saves).length} bản sao lưu từ saves.json`);
  } catch (e) {
    console.error('[Database] Lỗi đọc saves.json, tạo mới:', e.message);
  }
}

// Lưu dữ liệu ra file
function persist() {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(saves, null, 2), 'utf8');
  } catch (e) {
    console.error('[Database] Lỗi ghi saves.json:', e.message);
  }
}

// Ghi log lỗi từ client
function logClientError(errData) {
  try {
    const line = `[${new Date().toISOString()}] ${JSON.stringify(errData)}\n`;
    fs.appendFileSync(LOG_FILE, line, 'utf8');
  } catch (e) {
    console.error('[ErrorLogger] Lỗi ghi file log:', e.message);
  }
}

// Hàm sinh mã 8 số ngẫu nhiên không trùng lặp
function generate8DigitCode() {
  let code;
  let attempts = 0;
  do {
    code = Math.floor(10000000 + Math.random() * 90000000).toString();
    attempts++;
    if (attempts > 10000) break;
  } while (saves[code]);
  return code;
}

const app = new Hono();

// Cho phép tất cả các domain gọi API (CORS)
app.use('*', cors());

// Trang chủ / Health check
app.get('/', (c) => {
  const savesList = Object.values(saves);
  const stats = {};
  for (const key of Object.keys(SUPPORTED_GAMES)) {
    stats[key] = savesList.filter(s => (s.game || 'tiem-tra-nho') === key).length;
  }

  return c.json({
    status: 'online',
    message: 'Máy chủ Cloud Storage đa game (Tiệm Trà Nhỏ, Bánh Mì, Mì Cay, Tiệm Xôi)',
    supportedGames: SUPPORTED_GAMES,
    totalSaves: Object.keys(saves).length,
    statsPerGame: stats,
    endpoints: {
      save: 'POST /save hoặc POST /api/save',
      load: 'GET /load?code=... hoặc GET /api/load?code=...',
      errorReport: 'POST /api/err',
      status: 'GET /api/status'
    }
  });
});

app.get('/api/status', (c) => {
  return c.json({
    status: 'ok',
    uptime: process.uptime(),
    totalSaves: Object.keys(saves).length,
    timestamp: new Date().toISOString()
  });
});

// Endpoint xử lý lưu tiến trình (Hỗ trợ cả /save và /api/save)
async function handleSave(c) {
  try {
    const body = await c.req.json();
    const { key, code, data, game = 'tiem-tra-nho' } = body;

    if (!data) {
      return c.json({ error: 'Thiếu dữ liệu màn chơi (data)' }, 400);
    }
    if (!key) {
      return c.json({ error: 'Thiếu khóa xác thực thiết bị (key)' }, 400);
    }

    let targetCode = code;

    // Nếu người chơi đã có mã 8 số từ trước -> Cập nhật bản ghi cũ
    if (targetCode && /^\d{8}$/.test(targetCode)) {
      if (saves[targetCode]) {
        // Kiểm tra xem mã này có đúng do thiết bị này tạo không
        if (saves[targetCode].key && saves[targetCode].key !== key) {
          return c.json({ error: 'Mã 8 số này thuộc về thiết bị khác' }, 403);
        }
        saves[targetCode].data = data;
        saves[targetCode].game = game;
        saves[targetCode].updatedAt = new Date().toISOString();
      } else {
        saves[targetCode] = {
          game,
          key,
          data,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
      }
    } else {
      // Tạo mã 8 số mới hoàn toàn
      targetCode = generate8DigitCode();
      saves[targetCode] = {
        game,
        key,
        data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
    }

    persist();
    return c.json({ code: targetCode, game });
  } catch (err) {
    return c.json({ error: 'Lỗi xử lý lưu: ' + err.message }, 500);
  }
}

app.post('/save', handleSave);
app.post('/api/save', handleSave);

// Endpoint xử lý tải tiến trình (Hỗ trợ cả /load và /api/load)
function handleLoad(c) {
  const codeParam = c.req.query('code');
  if (!codeParam) {
    return c.json({ error: 'Vui lòng cung cấp mã 8 số (?code=...)' }, 400);
  }

  const cleanCode = codeParam.replace(/[\s.-]/g, '');
  if (!/^\d{8}$/.test(cleanCode)) {
    return c.json({ error: 'Mã phải gồm 8 chữ số' }, 400);
  }

  const record = saves[cleanCode];
  if (!record || !record.data) {
    return c.json({ error: 'Không tìm thấy dữ liệu cho mã ' + cleanCode }, 404);
  }

  return c.json({
    data: record.data,
    game: record.game || 'tiem-tra-nho',
    updatedAt: record.updatedAt
  });
}

app.get('/load', handleLoad);
app.get('/api/load', handleLoad);

// Endpoint nhận báo cáo lỗi từ client (Tiệm Mì Cay, v.v.)
app.post('/api/err', async (c) => {
  try {
    let payload;
    const contentType = c.req.header('content-type') || '';
    if (contentType.includes('application/json')) {
      payload = await c.req.json();
    } else {
      payload = await c.req.text();
    }
    logClientError(payload);
    return c.json({ ok: true });
  } catch (err) {
    return c.json({ ok: false, error: err.message }, 400);
  }
});

export default app;

// Khởi động server trên cổng 8787 khi chạy trực tiếp qua node
const PORT = process.env.PORT || 8787;
serve({
  fetch: app.fetch,
  port: Number(PORT)
}, (info) => {
  console.log(`🍵 Server Cloud Storage API đang chạy tại: http://localhost:${info.port}`);
  console.log(`🎮 Hỗ trợ: ${Object.values(SUPPORTED_GAMES).join(', ')}`);
});
