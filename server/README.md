# ☁️ Server Lưu Trữ Đám Mây & Báo Lỗi Đa Game (Hono Backend)

Backend siêu nhẹ viết bằng **Hono** phục vụ toàn bộ các web game trong bộ sưu tập (Tiệm Trà Nhỏ, Bánh Mì Bé Xíu, Tiệm Mì Cay, Tiệm Xôi Bà Tám).

---

## 🌟 1. Tính Năng & API Endpoints

* **`POST /save`** hoặc **`POST /api/save`**: Lưu tiến trình game và sinh mã 8 số ngẫu nhiên (hoặc cập nhật bản lưu cũ nếu thiết bị đã có mã). Hỗ trợ truyền tên game (`game: 'tiem-tra-nho' | 'banh-mi' | 'tiem-my-cay' | 'tiem-xoi'`).
* **`GET /load?code=12345678`** hoặc **`GET /api/load?code=12345678`**: Lấy lại dữ liệu tiến trình game theo mã 8 số để khôi phục màn chơi.
* **`POST /api/err`**: Nhận báo cáo sự cố / crash report từ game (như Tiệm Mì Cay) và ghi nhật ký vào `client_errors.log`.
* **`GET /`** & **`GET /api/status`**: Kiểm tra trạng thái máy chủ, thời gian hoạt động và thống kê số lượng bản sao lưu của từng game.
* **Cơ chế lưu trữ (Persistence)**: Lưu trực tiếp vào file `saves.json`, tự động phục hồi khi restart server.
* **Hỗ trợ CORS toàn diện**: Cho phép kết nối từ mọi cổng frontend (`localhost:3000`, `localhost:5500`, `localhost:8080`,...).

---

## 🚀 2. Cách Khởi Động Server

```bash
cd server
npm install    # Chỉ cần chạy lần đầu
npm start
# Server sẽ lắng nghe tại http://localhost:8787
```

---

## 🌐 3. Cách Deploy Lên Cloudflare Workers (Miễn phí)

Nếu bạn muốn đưa backend này lên Internet để bạn bè cùng chơi:
1. Cài đặt Wrangler CLI: `npm i -g wrangler`
2. Tạo file `wrangler.toml`:
   ```toml
   name = "tiem-vietnam-api"
   main = "server.js"
   compatibility_date = "2026-09-25"
   ```
3. Đổi cơ chế lưu sang **Cloudflare KV**:
   - Tạo KV namespace: `wrangler kv:namespace create SAVES`
   - Thay thế việc đọc/ghi `saves.json` bằng `env.SAVES.put(code, data)` và `env.SAVES.get(code)`.
4. Deploy: `wrangler deploy` -> bạn sẽ nhận được một domain miễn phí dạng `https://tiem-vietnam-api.<username>.workers.dev`.
5. Đổi biến cấu hình API trong frontend game sang domain vừa tạo.
