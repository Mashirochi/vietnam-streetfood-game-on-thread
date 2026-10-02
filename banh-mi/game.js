/**
 * ============================================================================
 * GAME: BÁNH MÌ BÉ XÍU
 * Mô tả: Game mô phỏng quản lý xe bánh mì vỉa hè Việt Nam
 * Website gốc: https://banhmiday.vercel.app/
 * Bản mã nguồn: Deobfuscated & Annotated (Đã gỡ nén & chú thích chi tiết)
 * ============================================================================
 */

/* ==========================================================================
   1. SELECTORS & DOM HELPERS
   ========================================================================== */
const $ = selector => document.querySelector(selector);
const app = $('#app');

/* ==========================================================================
   2. CẤU HÌNH & HẰNG SỐ DỮ LIỆU GAME (GAME CONFIG & ITEMS)
   ========================================================================== */
/**
 * Danh sách các loại nguyên liệu trong quán
 * - name: Tên hiển thị tiếng Việt
 * - cost: Giá vốn nhập vào (đơn vị: nghìn đồng / k)
 * - shelf: Hạn bảo quản (1: dùng trong ngày, 99: không hết hạn)
 * - sprite: Tên lớp sprite trong spritesheet (assets/ingredients.png)
 */
const ITEMS = {
  bread:    { name: 'Bánh mì',    cost: 2.5, shelf: 1,  sprite: 'bread' },
  cha:      { name: 'Chả lụa',    cost: 5.0, shelf: 3,  sprite: 'cha' },
  pork:     { name: 'Thịt nướng', cost: 8.0, shelf: 1,  sprite: 'pork' },
  pate:     { name: 'Pate',       cost: 3.0, shelf: 3,  sprite: 'pate' },
  cucumber: { name: 'Dưa leo',    cost: 1.0, shelf: 2,  sprite: 'cucumber' },
  pickle:   { name: 'Đồ chua',    cost: 1.5, shelf: 4,  sprite: 'pickle' },
  cilantro: { name: 'Ngò',        cost: 1.0, shelf: 1,  sprite: 'cilantro' },
  paper:    { name: 'Giấy gói',   cost: 0.5, shelf: 99, sprite: 'paper' }
};

/**
 * Danh sách hình mẫu khách hàng quen thuộc: [Tên, Xưng hô, Câu mở đầu]
 */
const CUSTOMERS = [
  ['Mai', 'em', 'Cho em'],
  ['Chú Ba', 'chú', 'Cho chú'],
  ['Chị Vy', 'chị', 'Cho chị'],
  ['Bà Năm', 'bà', 'Cho bà']
];

/**
 * Dữ liệu trạng thái ban đầu khi bắt đầu chơi mới
 */
const defaultState = {
  day: 1,           // Ngày hiện tại
  cash: 400,        // Số tiền khởi nghiệp (400k)
  xp: 0,            // Điểm kinh nghiệm
  level: 1,         // Cấp độ tiệm (1-2: Xe đẩy, 3+: Quán phố)
  rating: 4.0,      // Điểm đánh giá sao trung bình (1 - 5)
  reviews: 0,       // Tổng số lượt đánh giá
  reviewLog: [],    // Lịch sử nhận xét của khách
  totalProfit: 0,   // Tổng lợi nhuận tích lũy
  totalSold: 0,     // Tổng số ổ bánh đã bán
  stock: {},        // Số lượng nguyên liệu tồn kho trong ngày
  cart: {           // Giỏ hàng nhập nguyên liệu mặc định
    bread: 15,
    cha: 10,
    pork: 5,
    pate: 10,
    cucumber: 10,
    pickle: 10,
    cilantro: 10,
    paper: 15
  },
  upgrades: [],     // Danh sách id nâng cấp đã sở hữu
  music: false      // Cài đặt âm nhạc
};

/**
 * Ngân hàng nhận xét của thực khách phân loại từ 1 sao đến 5 sao
 */
const REVIEW_BANK = {
  5: [
    'Cắn một miếng mà linh hồn tui tự bật nhạc đám cưới. Đỉnh!',
    'Bánh giòn tới mức hàng xóm tưởng nhà đang sửa mái tôn.',
    'Pate béo thơm, ăn xong muốn xin chủ quán nhận làm con nuôi.',
    'Ngon dữ thần! Cái miệng nói no mà cái tay vẫn đặt thêm ổ nữa.',
    'Ổ bánh này cứu tui khỏi một buổi sáng mặt như cái mâm.',
    'Thịt thơm đến mức con mèo đầu hẻm nhìn tui bằng ánh mắt đòi chia tài sản.',
    'Ăn xong tỉnh hơn ba ly cà phê, chạy deadline như bị chủ nợ dí.',
    'Không biết bỏ gì trong pate mà tui ăn xong yêu đời ngang.'
  ],
  4: [
    'Ngon nha, trừ một sao vì ổ bánh biến mất nhanh hơn lương đầu tháng.',
    'Bánh ổn áp, ngò hơi nhiều nhưng chưa tới mức biến tui thành chậu cây.',
    'Thịt ngon, sốt vừa miệng. Ăn xong vụn bánh rơi đầy áo như tuyết mùa hè.',
    'Khá cuốn. Định ăn nửa ổ mà tỉnh lại thấy còn mỗi tờ giấy gói.',
    'Bánh giòn, nhân đầy. Thiếu mỗi người đút là thành dịch vụ năm sao.',
    'Ngon nhưng tương ớt làm môi tui đỏ hơn filter điện thoại.'
  ],
  3: [
    'Ăn được. Không bay lên thiên đường nhưng cũng chưa phải gọi cấp cứu vị giác.',
    'Bánh hơi mềm, cảm giác như nó cũng đang buồn ngủ giống tui.',
    'Nhân ổn, rau ổn, cuộc đời tui thì chưa ổn.',
    'Một ổ bánh mì rất... bánh mì. Ăn xong vẫn nhớ mật khẩu Wi‑Fi.',
    'Không tệ, nhưng pate mỏng tới mức phải dùng kính lúp tìm.',
    'Đói thì ngon, no rồi thì cần họp hội đồng để đánh giá thêm.'
  ],
  2: [
    'Bánh dai tới mức hàm tui vừa gửi đơn xin nghỉ việc.',
    'Tương ớt nhiều quá, ăn xong lưỡi bật chế độ báo cháy.',
    'Nhân ít như tiền trong ví tui cuối tháng.',
    'Ngò nhiều tới mức tưởng đang gặm hàng rào nhà hàng xóm.',
    'Ổ bánh nhìn đầy hy vọng, cắn vào nghe tiếng hy vọng vỡ vụn.',
    'Ăn xong phải uống nước nhiều tới mức cá trong bụng cũng có nhà mới.'
  ],
  1: [
    'Bánh cháy đen như lịch sử tìm kiếm lúc 2 giờ sáng của tui.',
    'Cắn một miếng, cái răng và ổ bánh lập tức xảy ra tranh chấp đất đai.',
    'Khô tới mức ăn xong môi tui nứt thành bản đồ hành chính.',
    'Đây là bánh mì hay cục gạch có nhân vậy trời?',
    'Miếng đầu tiên khiến tui nhớ lại mọi quyết định sai lầm trong đời.',
    'Ổ bánh này không làm tui no, nó làm tui trưởng thành.',
    'Xin lỗi nhưng cái bánh có vẻ đã trải qua nhiều chuyện hơn cả tui.'
  ]
};

/* ==========================================================================
   3. BIẾN TRẠNG THÁI RUNTIME (GLOBAL RUNTIME STATE)
   ========================================================================== */
let state = load();           // Dữ liệu người chơi từ LocalStorage
let phase = 'home';           // Pha hiện tại: 'home' | 'prep' | 'game' | 'summary'
let customer = null;          // Khách hàng đang phục vụ ở quầy
let queue = [];               // Hàng đợi khách đang đứng chờ
let build = {};               // Ổ bánh mì hiện tại đang được làm { bread, cha, pate... }
let cooking = false;          // Cờ kiểm tra lò nướng đang hoạt động
let cookStart = 0;            // Mốc thời gian bắt đầu nướng (performance.now())
let cookRAF = null;           // RequestAnimationFrame ID cho kim lò nướng
let patienceTimer = null;     // Bộ đếm giảm thanh kiên nhẫn của khách
let served = 0;               // Số khách đã phục vụ xong trong ngày
let perfect = 0;              // Số khách đánh giá 5 sao trong ngày
let lost = 0;                 // Số khách giận dỗi bỏ về trong ngày
let revenue = 0;              // Doanh thu bán bánh trong ngày
let spend = 0;                // Chi phí nhập hàng trong ngày
let toastTimer = null;        // Timer ẩn thông báo toast

/* ==========================================================================
   4. QUẢN LÝ LƯU TRỮ (PERSISTENCE) & TIỆN ÍCH TÍNH TOÁN
   ========================================================================== */
/**
 * Tải dữ liệu lưu trữ từ LocalStorage
 */
function load() {
  try {
    const raw = localStorage.getItem('banhMiGame');
    const data = { ...defaultState, ...(raw ? JSON.parse(raw) : {}) };
    data.reviewLog = Array.isArray(data.reviewLog) ? data.reviewLog : [];
    return data;
  } catch (err) {
    console.warn('Lỗi đọc localStorage, khôi phục mặc định:', err);
    return structuredClone(defaultState);
  }
}

/**
 * Lưu trạng thái hiện tại vào LocalStorage
 */
function save() {
  localStorage.setItem('banhMiGame', JSON.stringify(state));
}

/**
 * Định dạng tiền tệ hiển thị (ví dụ 400 -> "400k")
 */
function money(n) {
  return `${Math.round(n)}k`;
}

/**
 * Tính kinh nghiệm cần thiết để lên cấp tiếp theo
 */
function maxXp() {
  return 120 + state.level * 60;
}

/* ==========================================================================
   5. BỐ CỤC CHUNG & CỬA SỔ POPUP (LAYOUT & MODAL HELPERS)
   ========================================================================== */
/**
 * Render khung giao diện chung (Top header bar + nội dung chính)
 */
function layout(content) {
  app.innerHTML = `
    <div class="shell">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark">🥖</div>
          <div>
            <strong>Bánh Mì Bé Xíu</strong>
            <small>Cấp ${state.level} · ${state.level < 3 ? 'Xe đẩy đầu hẻm' : 'Quán phố nhỏ'}</small>
          </div>
        </div>
        <div class="stat">
          <div class="stat-label">Ngày</div>
          <div class="stat-value">${state.day}</div>
        </div>
        <div class="stat">
          <div class="stat-label">Két</div>
          <div class="stat-value">${money(state.cash)}</div>
        </div>
        <div class="stat">
          <div class="stat-label">Danh tiếng</div>
          <div class="stat-value stars">★ ${state.rating.toFixed(1)}</div>
        </div>
        <button class="icon-btn" data-help title="Cách chơi">?</button>
      </header>
      ${content}
    </div>
  `;
  $('[data-help]')?.addEventListener('click', showHelp);
}

/**
 * Hiển thị thông báo Toast nhanh góc dưới màn hình
 */
function toast(msg) {
  clearTimeout(toastTimer);
  document.querySelector('.toast')?.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  toastTimer = setTimeout(() => t.remove(), 2200);
}

/**
 * Hiển thị hộp thoại Modal tuỳ chỉnh
 */
function modal(content) {
  const w = document.createElement('div');
  w.className = 'modal-wrap';
  w.innerHTML = `<div class="modal">${content}</div>`;
  document.body.appendChild(w);

  w.querySelector('[data-close]')?.addEventListener('click', () => w.remove());
  w.addEventListener('click', e => {
    if (e.target === w) w.remove();
  });
}

/**
 * Modal hiển thị hướng dẫn cách chơi
 */
function showHelp() {
  modal(`
    <div class="eyebrow" style="color:var(--red)">Cách chơi</div>
    <h2>Một ngày ở tiệm</h2>
    <p><b>Buổi sáng:</b> nhập bánh, nhân và rau. Đừng mua quá nhiều vì đồ tươi sẽ hỏng cuối ngày.</p>
    <p><b>Khi mở cửa:</b> đọc đơn, chọn đúng bánh–nhân–rau–sốt, sau đó nướng. Bấm lấy bánh khi kim chạy vào vùng xanh.</p>
    <p><b>Giao món:</b> món càng đúng, khách càng vui, cho nhiều sao và tip. Đừng để thanh kiên nhẫn cạn.</p>
    <p><b>Cuối ngày:</b> nhận XP, hoàn thành nhiệm vụ và mua nâng cấp để phục vụ nhanh hơn.</p>
    <button class="primary full" data-close>Hiểu rồi, mở tiệm thôi!</button>
  `);
}

/* ==========================================================================
   6. MÀN HÌNH CHÍNH (HOME SCREEN)
   ========================================================================== */
function home() {
  phase = 'home';
  const isFreshGame = state.day === 1 && state.totalSold === 0;

  layout(`
    <main class="screen home">
      <div class="home-copy">
        <div class="eyebrow">Một ổ nóng giòn, một ngày thật vui</div>
        <h1>Bánh Mì<br>Bé Xíu</h1>
        <p>Tự tay làm bánh, chiều lòng khách và biến chiếc xe đầu hẻm thành tiệm bánh mì được yêu thích nhất phố.</p>
        <div class="home-actions">
          <button class="primary" id="start">
            ${isFreshGame ? 'Mở tiệm mới' : 'Tiếp tục ngày ' + state.day}
          </button>
          <button class="secondary" id="how">Cách chơi</button>
        </div>
      </div>
    </main>
  `);

  $('#start').onclick = () => prep();
  $('#how').onclick = showHelp;
}

/* ==========================================================================
   7. MÀN HÌNH CHUẨN BỊ BUỔI SÁNG (PREPARATION PHASE)
   ========================================================================== */
/**
 * Render màn hình chuẩn bị (Quản lý kho, giá bán, nâng cấp, đánh giá, sổ sách)
 */
function prep(tab = 'Kho') {
  phase = 'prep';
  let body = '';
  if (tab === 'Kho') body = inventoryHTML();
  else if (tab === 'Giá bán') body = priceHTML();
  else if (tab === 'Nâng cấp') body = upgradesHTML();
  else if (tab === 'Đánh giá') body = reviewsHTML();
  else if (tab === 'Sổ sách') body = booksHTML();

  const expectedCustomers = 12 + state.level * 2;
  const tabNames = ['Kho', 'Giá bán', 'Nâng cấp', 'Đánh giá', 'Sổ sách'];

  layout(`
    <main class="screen prep">
      <section>
        <h1 class="section-title">Chuẩn bị buổi sáng</h1>
        <p class="sub">Khách dự kiến hôm nay: <b>${expectedCustomers}</b> người · Chọn hàng vừa đủ để tránh lãng phí.</p>
        <nav class="tabs">
          ${tabNames.map(x => `<button class="tab ${x === tab ? 'active' : ''}" data-tab="${x}">${x}</button>`).join('')}
        </nav>
        <div id="tabbody">${body}</div>
      </section>
      <aside class="side-stack">
        <div class="card">
          <div class="eyebrow" style="color:var(--red)">Nhiệm vụ hôm nay</div>
          ${missionHTML()}
        </div>
        <div class="card">
          <div class="notice">💡 Bánh, thịt nướng và rau thơm chỉ tươi trong ngày. Hàng dư sẽ bị bỏ khi đóng cửa.</div>
          <div class="big-total">
            <span>Tiền nhập hàng</span>
            <strong id="total">${money(cartTotal())}</strong>
          </div>
          <button class="primary full" id="open" style="margin-top:14px">Nhập hàng & mở cửa</button>
        </div>
      </aside>
    </main>
  `);

  document.querySelectorAll('[data-tab]').forEach(b => {
    b.onclick = () => prep(b.dataset.tab);
  });
  bindPrep(tab);
}

/**
 * Tab 1: Kho hàng - Chọn số lượng nguyên liệu nhập mỗi sáng
 */
function inventoryHTML() {
  return `
    <div class="card inventory">
      ${Object.entries(ITEMS).map(([k, v]) => `
        <div class="item">
          <div class="sprite s-${v.sprite}"></div>
          <div>
            <div class="item-name">${v.name}</div>
            <div class="item-note">
              ${money(v.cost)}/phần · ${v.shelf === 99 ? 'không hết hạn' : v.shelf === 1 ? 'dùng trong ngày' : v.shelf + ' ngày'}
            </div>
          </div>
          <div class="stepper">
            <button data-minus="${k}">−</button>
            <b id="q-${k}">${state.cart[k] || 0}</b>
            <button data-plus="${k}">+</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * Tab 2: Giá bán - Menu các món chính và giá gợi ý
 */
function priceHTML() {
  const menu = [
    ['Bánh mì chả', 25],
    ['Bánh mì thịt', 32],
    ['Thêm pate', 5]
  ];
  return `
    <div class="card">
      <p class="sub">Giá cao tăng lợi nhuận nhưng khách sẽ mất kiên nhẫn nhanh hơn.</p>
      ${menu.map(([name, price]) => `
        <div class="item" style="margin:10px 0">
          <div style="font-size:30px">🥖</div>
          <div>
            <div class="item-name">${name}</div>
            <div class="item-note">Giá gợi ý</div>
          </div>
          <b>${money(price)}</b>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * Tab 3: Nâng cấp - Cải tiến lò nướng, biển quảng cáo, phụ bếp
 */
function upgradesHTML() {
  return `
    <div class="card upgrade-list">
      ${upgradeData().map(u => `
        <div class="upgrade">
          <div style="font-size:29px">${u.icon}</div>
          <div>
            <b>${u.name}</b>
            <div class="item-note">${u.desc}</div>
          </div>
          ${state.upgrades.includes(u.id)
            ? '<b>Đã có ✓</b>'
            : `<button data-buy="${u.id}" ${state.level < u.level ? 'disabled' : ''}>
                 ${state.level < u.level ? 'Cấp ' + u.level : money(u.cost)}
               </button>`}
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * Tab 4: Sổ sách - Báo cáo tài chính, tổng ổ bán và chi phí cố định
 */
function booksHTML() {
  const maintenanceCost = state.upgrades.length ? ` · bảo trì ${state.upgrades.length * 3}k` : '';
  return `
    <div class="card">
      <div class="summary-grid">
        <div class="summary-box">
          <span>Tổng lợi nhuận</span>
          <strong>${money(state.totalProfit)}</strong>
        </div>
        <div class="summary-box">
          <span>Đã bán</span>
          <strong>${state.totalSold} ổ</strong>
        </div>
        <div class="summary-box">
          <span>Kinh nghiệm</span>
          <strong>${state.xp}/${maxXp()}</strong>
        </div>
      </div>
      <p class="notice">
        Chi phí cố định mỗi ngày: mặt bằng 30k · điện và gas 12k${maintenanceCost}.
      </p>
    </div>
  `;
}

/**
 * Tab 5: Đánh giá - Xem phản hồi và lời phê bình của khách hàng
 */
function reviewsHTML() {
  const list = state.reviewLog.length
    ? state.reviewLog.slice().reverse().map(r => `
        <article class="review-card">
          <div class="review-head">
            <b>${r.name}</b>
            <span>${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</span>
          </div>
          <p>${r.text}</p>
          <small>Ngày ${r.day} · ${r.item}</small>
        </article>
      `).join('')
    : `
        <div class="empty-reviews">
          <div>🗯️</div>
          <b>Chưa ai mở khẩu nghiệp</b>
          <p>Bán ổ bánh đầu tiên để nhận đánh giá từ khách.</p>
        </div>
      `;

  const starCount = Math.round(state.rating);
  return `
    <div class="rating-hero">
      <div>
        <span>Điểm quán</span>
        <strong>${state.reviews ? state.rating.toFixed(1) : '–'}</strong>
      </div>
      <div>
        <span>${state.reviews} đánh giá</span>
        <b class="stars">${'★'.repeat(starCount)}${'☆'.repeat(5 - starCount)}</b>
      </div>
    </div>
    <div class="review-list">${list}</div>
  `;
}

/**
 * Danh sách nhiệm vụ hằng ngày
 */
function missionHTML() {
  return `
    <div class="mission">
      <div class="mission-icon">🥖</div>
      <div>
        <b>Bán 6 ổ bánh</b>
        <div class="item-note">Thưởng 25k · 25 XP</div>
      </div>
    </div>
    <div class="mission">
      <div class="mission-icon">⭐</div>
      <div>
        <b>3 khách chấm 5 sao</b>
        <div class="item-note">Thưởng 30k · 30 XP</div>
      </div>
    </div>
    <div class="mission">
      <div class="mission-icon">😊</div>
      <div>
        <b>Không ai bỏ về</b>
        <div class="item-note">Thưởng 20k · 20 XP</div>
      </div>
    </div>
  `;
}

/**
 * Tính tổng chi phí giỏ hàng nhập ngày hôm nay
 */
function cartTotal() {
  return Object.entries(state.cart).reduce((sum, [key, count]) => {
    return sum + ITEMS[key].cost * count;
  }, 0);
}

/**
 * Gắn sự kiện tương tác cho màn hình chuẩn bị
 */
function bindPrep(tab) {
  if (tab === 'Kho') {
    document.querySelectorAll('[data-plus]').forEach(btn => {
      btn.onclick = () => changeCart(btn.dataset.plus, 5);
    });
    document.querySelectorAll('[data-minus]').forEach(btn => {
      btn.onclick = () => changeCart(btn.dataset.minus, -5);
    });
  }
  document.querySelectorAll('[data-buy]').forEach(btn => {
    btn.onclick = () => buyUpgrade(btn.dataset.buy);
  });
  $('#open').onclick = openDay;
}

/**
 * Tăng/giảm số lượng nguyên liệu đặt mua (+-5 đơn vị)
 */
function changeCart(key, delta) {
  state.cart[key] = Math.max(0, (state.cart[key] || 0) + delta);
  $('#q-' + key).textContent = state.cart[key];
  $('#total').textContent = money(cartTotal());
}

/**
 * Danh mục các gói nâng cấp thiết bị và phụ trợ
 */
function upgradeData() {
  return [
    { id: 'toaster', name: 'Lò nướng xịn',     icon: '🔥', desc: 'Vùng bánh vàng giòn rộng hơn',   cost: 180, level: 1 },
    { id: 'sign',    name: 'Biển đèn đầu hẻm', icon: '💡', desc: 'Thêm 2 khách mỗi ngày',          cost: 220, level: 2 },
    { id: 'fridge',  name: 'Tủ lạnh nhỏ',      icon: '🧊', desc: 'Giảm 50% nguyên liệu hỏng',      cost: 280, level: 2 },
    { id: 'helper',  name: 'Bé Tí phụ bếp',    icon: '🧑‍🍳', desc: 'Tự thêm pate đúng yêu cầu',     cost: 350, level: 3 }
  ];
}

/**
 * Mua một món nâng cấp
 */
function buyUpgrade(id) {
  const u = upgradeData().find(x => x.id === id);
  if (!u) return;
  if (state.cash < u.cost) {
    return toast('Chưa đủ tiền rồi!');
  }
  state.cash -= u.cost;
  state.upgrades.push(id);
  save();
  prep('Nâng cấp');
  toast('Đã mua ' + u.name);
}

/**
 * Xác nhận nhập hàng và bắt đầu mở cửa tiệm đón khách
 */
function openDay() {
  const total = cartTotal();
  if (total > state.cash) {
    return toast('Không đủ tiền nhập hàng');
  }
  const breadCount = state.cart.bread || 0;
  const meatCount = (state.cart.cha || 0) + (state.cart.pork || 0);
  if (breadCount < 5 || meatCount < 5) {
    return toast('Cần ít nhất 5 bánh và 5 phần nhân');
  }

  state.cash -= total;
  spend = total;
  state.stock = { ...state.cart };
  served = 0;
  perfect = 0;
  lost = 0;
  revenue = 0;
  save();
  startService();
}

/* ==========================================================================
   8. VÒNG LẶP PHỤC VỤ & NHÀ BẾP (GAMEPLAY: SERVICE & KITCHEN)
   ========================================================================== */
/**
 * Bắt đầu ca bán bánh: Khởi tạo hàng khách chờ và hiển thị giao diện
 */
function startService() {
  phase = 'game';
  queue = [];
  build = {};
  for (let i = 0; i < 3; i++) {
    queue.push(makeCustomer(i));
  }
  renderGame();
  selectCustomer(0);
}

/**
 * Tạo dữ liệu một khách hàng ngẫu nhiên
 */
function makeCustomer(i) {
  const profile = CUSTOMERS[(i + state.day) % CUSTOMERS.length];
  const meatType = Math.random() < 0.52 ? 'cha' : 'pork';
  return {
    name: profile[0],
    idx: (i + state.day) % 4,
    type: meatType,
    pate: Math.random() < 0.55,
    pickle: Math.random() < 0.75,
    cilantro: Math.random() < 0.65,
    spicy: Math.random() < 0.55,
    patience: 100 // 100% độ kiên nhẫn
  };
}

/**
 * Tạo câu thoại gọi món bằng tiếng Việt theo thói quen của từng khách
 */
function orderText(c) {
  const bits = [`bánh mì <strong>${c.type === 'cha' ? 'chả lụa' : 'thịt nướng'}</strong>`];
  if (c.pate) bits.push('<strong>thêm pate</strong>');
  if (c.pickle) bits.push('có đồ chua');
  if (c.cilantro) bits.push('có ngò');
  else bits.push('<strong>không ngò</strong>');
  bits.push(c.spicy ? '<strong>có tương ớt</strong>' : '<strong>không cay</strong>');

  const greeting = c.name === 'Bà Năm' ? 'Cho bà' : c.name === 'Chú Ba' ? 'Cho chú' : c.name === 'Mai' ? 'Cho em' : 'Cho chị';
  return `${greeting} một ổ ${bits.join(', ')} nha!`;
}

/**
 * Render toàn bộ giao diện phục vụ quán (Khách xếp hàng + Quầy bếp làm bánh)
 */
function renderGame() {
  const timeFormatted = String(served * 8 + 5).padStart(2, '0');
  const bubbleHtml = customer
    ? `<b>${customer.name}</b>
       <div>${orderText(customer)}</div>
       <div class="patience"><i id="patience" style="width:${customer.patience}%"></i></div>`
    : 'Đang chờ khách...';

  layout(`
    <main class="screen game">
      <div class="day-progress">☀️ 11:${timeFormatted} · Đã bán ${served}/8</div>
      <section class="street">
        <div class="queue">
          ${queue.map((c, i) => `
            <div class="customer c${c.idx + 1} ${i === 0 ? 'active' : ''}" data-customer="${i}" aria-label="${c.name}"></div>
          `).join('')}
        </div>
        <div class="order-bubble" id="bubble">${bubbleHtml}</div>
      </section>
      <section class="kitchen">
        <div class="station">
          <h3>1 · Chọn bánh & nhân</h3>
          <div class="ingredient-buttons">
            ${foodBtn('bread', 'Bánh mì')}
            ${foodBtn('cha', 'Chả lụa')}
            ${foodBtn('pork', 'Thịt nướng')}
            ${foodBtn('pate', 'Pate')}
          </div>
        </div>
        <div class="station center">
          <h3>Ổ bánh đang làm</h3>
          <div class="bread-work">
            <div class="sandwich" id="sandwich">${build.bread ? '🥖' : '🍽️'}</div>
            <div class="build-tags" id="buildTags">${buildTagsHTML()}</div>
            <div id="cookSlot">
              ${cooking ? '<div class="cookbar"><i class="needle" id="needle"></i></div>' : ''}
            </div>
            <div class="item-note" id="buildStatus">
              ${cooking ? 'Bấm Vớt bánh trong vùng xanh' : 'Lắp đúng món rồi nướng vàng giòn'}
            </div>
          </div>
        </div>
        <div class="station">
          <h3>2 · Rau, sốt & hoàn thiện</h3>
          <div class="ingredient-buttons">
            ${foodBtn('pickle', 'Đồ chua')}
            ${foodBtn('cilantro', 'Ngò')}
            ${foodBtn('spicy', 'Tương ớt', true)}
          </div>
          <div class="station-actions" style="margin-top:10px">
            <button class="action hot" id="cook">${cooking ? '🔥 Lấy bánh ra' : '🔥 Nướng bánh'}</button>
            <button class="action good" id="serve">✓ Gói & giao khách</button>
            <button class="action" id="trash">Làm lại</button>
          </div>
        </div>
      </section>
    </main>
  `);

  document.querySelectorAll('[data-customer]').forEach(x => {
    x.onclick = () => selectCustomer(+x.dataset.customer);
  });
  bindKitchen();
}

/**
 * Tạo danh sách tag hiển thị các món đã kẹp vào bánh
 */
function buildTagsHTML() {
  return Object.keys(build)
    .filter(k => build[k] && k !== 'cooked')
    .map(k => `<span class="tag">${ITEMS[k]?.name || ({ spicy: 'Tương ớt' }[k])}</span>`)
    .join('');
}

/**
 * Gắn sự kiện cho quầy bếp (chọn nguyên liệu, nướng, giao, vứt bỏ)
 */
function bindKitchen() {
  document.querySelectorAll('[data-food]').forEach(x => {
    x.onclick = () => toggleFood(x.dataset.food);
  });
  $('#cook').onclick = toggleCook;
  $('#serve').onclick = serve;
  $('#trash').onclick = () => {
    build = {};
    cooking = false;
    cancelAnimationFrame(cookRAF);
    updateKitchen();
  };
}

/**
 * Cập nhật giao diện bếp khi thêm/bớt nguyên liệu
 */
function updateKitchen() {
  document.querySelectorAll('[data-food]').forEach(btn => {
    const k = btn.dataset.food;
    const stock = k === 'spicy' ? '∞' : (state.stock[k] || 0);
    btn.classList.toggle('selected', !!build[k]);
    btn.disabled = stock === 0;
    const small = btn.querySelector('small');
    if (small) small.textContent = stock;
  });

  const sandwich = $('#sandwich');
  if (sandwich) {
    sandwich.textContent = build.bread ? '🥖' : '🍽️';
    sandwich.classList.remove('bump');
    void sandwich.offsetWidth; // Force reflow kích hoạt animation
    sandwich.classList.add('bump');
  }

  const tags = $('#buildTags');
  if (tags) {
    tags.innerHTML = buildTagsHTML();
  }
}

/**
 * Nút chọn nguyên liệu
 */
function foodBtn(k, label, noStock = false) {
  const spr = k === 'spicy' ? 'chili' : ITEMS[k].sprite;
  const stock = noStock ? '∞' : (state.stock[k] || 0);
  return `
    <button class="food-btn ${build[k] ? 'selected' : ''}" data-food="${k}" ${stock === 0 ? 'disabled' : ''}>
      <div class="sprite s-${spr}"></div>
      ${label}<br>
      <small>${stock}</small>
    </button>
  `;
}

/**
 * Chọn khách hàng để phục vụ và bắt đầu đếm ngược thanh kiên nhẫn
 */
function selectCustomer(i) {
  if (i > 0) {
    return toast('Hãy phục vụ khách đầu hàng trước nhé');
  }
  customer = queue[0];
  clearInterval(patienceTimer);

  patienceTimer = setInterval(() => {
    if (phase !== 'game' || !customer) return;

    // Hack Mod: Đóng băng độ kiên nhẫn nếu được bật
    if (window._modHacks && window._modHacks.freezePatience) {
      customer.patience = 100;
      const p = $('#patience');
      if (p) p.style.width = '100%';
      return;
    }

    const decayRate = state.upgrades.includes('sign') ? 0.45 : 0.65;
    customer.patience -= decayRate;
    const p = $('#patience');
    if (p) p.style.width = customer.patience + '%';

    // Khi khách đợi quá lâu hết kiên nhẫn
    if (customer.patience <= 0) {
      clearInterval(patienceTimer);
      lost++;
      toast(customer.name + ' đã bỏ về 😢');
      nextCustomer();
    }
  }, 180);

  renderGame();
}

/**
 * Kẹp hoặc gỡ một nguyên liệu vào ổ bánh
 */
function toggleFood(k) {
  if (cooking) return toast('Bánh đang nướng!');
  const isInfStock = window._modHacks && window._modHacks.infiniteStock;
  if (!isInfStock && k !== 'spicy' && !build[k] && (!state.stock[k] || state.stock[k] <= 0)) {
    return toast('Hết ' + ITEMS[k].name);
  }

  const adding = !build[k];
  const source = document.querySelector(`[data-food="${k}"]`);
  if (adding && source) {
    animateIngredient(k, source);
  }

  if (adding) {
    build[k] = true;
    if (k !== 'spicy' && !isInfStock) state.stock[k]--;
  } else {
    build[k] = false;
    if (k !== 'spicy' && !isInfStock) state.stock[k]++;
  }
  updateKitchen();
}

/* ==========================================================================
   9. HỆ THỐNG NƯỚNG BÁNH (TOASTING & COOKING MECHANIC)
   ========================================================================== */
/**
 * Bắt đầu nướng hoặc lấy bánh ra khỏi lò
 */
function toggleCook() {
  if (!build.bread || (!build.cha && !build.pork)) {
    return toast('Cần bánh và nhân trước');
  }

  // Hack Mod: Nướng siêu tốc Perfect ngay lập tức
  if (window._modHacks && window._modHacks.instantCook) {
    cooking = false;
    cancelAnimationFrame(cookRAF);
    build.cooked = 'perfect';
    updateCookUI('finish');
    toast('Vàng giòn hoàn hảo! ✨ (Hack Mod)');
    return;
  }

  if (!cooking) {
    // Bật lò nướng
    cooking = true;
    cookStart = performance.now();
    updateCookUI('start');
    animateNeedle();
  } else {
    // Lấy bánh ra khỏi lò: Tính toán vị trí kim lò
    const elapsed = (performance.now() - cookStart) % 4000;
    const pos = (elapsed / 4000) * 100;
    // Nâng cấp "toaster" mở rộng vùng vàng giòn từ 70% lên 78%
    const perfectMax = state.upgrades.includes('toaster') ? 78 : 70;

    build.cooked = (pos >= 50 && pos <= perfectMax)
      ? 'perfect'
      : pos < 50
      ? 'soft'
      : 'burnt';

    cooking = false;
    cancelAnimationFrame(cookRAF);
    updateCookUI('finish');

    const resultMessage = build.cooked === 'perfect'
      ? 'Vàng giòn hoàn hảo! ✨'
      : build.cooked === 'burnt'
      ? 'Hơi cháy rồi!'
      : 'Bánh còn mềm';
    toast(resultMessage);
  }
}

/**
 * Cập nhật giao diện lò nướng và ổ bánh theo trạng thái nướng
 */
function updateCookUI(stage) {
  const slot = $('#cookSlot');
  const status = $('#buildStatus');
  const button = $('#cook');
  const sandwich = $('#sandwich');

  if (stage === 'start') {
    slot.innerHTML = '<div class="cookbar"><i class="needle" id="needle"></i></div>';
    status.textContent = 'Canh kim vào vùng xanh rồi lấy bánh ra!';
    button.textContent = '🥖 Lấy bánh ra';
    sandwich.classList.remove('bread-out', 'cooked-perfect', 'cooked-soft', 'cooked-burnt');
    sandwich.classList.add('bread-toasting');
  } else {
    slot.innerHTML = '';
    status.textContent = build.cooked === 'perfect'
      ? 'Vàng giòn hoàn hảo ✨'
      : build.cooked === 'burnt'
      ? 'Bánh hơi cháy khét'
      : 'Bánh còn hơi mềm';
    button.textContent = '🔥 Nướng lại';
    sandwich.classList.remove('bread-toasting');
    sandwich.classList.add('bread-out', 'cooked-' + build.cooked);
    setTimeout(() => sandwich?.classList.remove('bread-out'), 520);
  }
}

/**
 * Hoạt ảnh kim chạy qua lại trên thanh nhiệt độ
 */
function animateNeedle() {
  const needle = $('#needle');
  if (!needle || !cooking) return;
  const pos = (((performance.now() - cookStart) % 4000) / 4000) * 100;
  needle.style.left = `calc(${pos}% - 2px)`;
  cookRAF = requestAnimationFrame(animateNeedle);
}

/* ==========================================================================
   10. GIAO BÁNH, TÍNH ĐIỂM & ĐÁNH GIÁ (SERVE & REVIEWS)
   ========================================================================== */
/**
 * Gói bánh và giao cho khách: Kiểm tra đối chiếu yêu cầu, chấm điểm sao, nhận tiền
 */
function serve() {
  if (cooking) return toast('Lấy bánh khỏi lò trước');
  if (!build.cooked) return toast('Bạn chưa nướng bánh');

  // Đơn hàng mong muốn của khách
  const wanted = {
    bread: true,
    [customer.type]: true,
    pate: customer.pate,
    pickle: customer.pickle,
    cilantro: customer.cilantro,
    spicy: customer.spicy
  };

  // Đếm số lượng sai sót so với yêu cầu
  let errors = Object.entries(wanted).filter(([k, v]) => !!build[k] !== v).length;
  if (build.cha && build.pork) errors++; // Kẹp cả 2 loại thịt tính thêm 1 lỗi

  // Hack Mod: Khách luôn chấm 5 sao tuyệt đối
  if (window._modHacks && window._modHacks.always5Stars) {
    errors = 0;
    build.cooked = 'perfect';
  }

  // Tính số sao: 5 sao trừ đi số lỗi và trừ 1 nếu không đạt độ giòn hoàn hảo
  const stars = Math.max(1, 5 - errors - (build.cooked === 'perfect' ? 0 : 1));

  // Tính giá bán cơ bản
  let price = customer.type === 'pork' ? 32 : 25;
  if (build.pate) price += 5;

  // Tiền tip (thưởng 18% nếu đạt điểm 5 sao tuyệt đối)
  const tip = stars === 5 ? Math.round(price * 0.18) : 0;
  const earned = price + tip;

  // Cập nhật tài chính và thống kê
  state.cash += earned;
  revenue += earned;
  served++;
  state.totalSold++;
  if (stars === 5) perfect++;

  // Cập nhật điểm sao trung bình của tiệm
  state.rating = (state.rating * state.reviews + stars) / (state.reviews + 1);
  state.reviews++;
  state.xp += 10 + (stars === 5 ? 8 : 0);

  addReview(customer, stars);
  save();
  scoreBurst(stars, earned);
  clearInterval(patienceTimer);
  setTimeout(nextCustomer, 430);
}

/**
 * Thêm một đánh giá từ khách hàng vào lịch sử quán
 */
function addReview(c, stars) {
  const bank = REVIEW_BANK[stars];
  const text = bank[Math.floor(Math.random() * bank.length)];
  state.reviewLog.push({
    name: c.name,
    stars,
    text,
    day: state.day,
    item: c.type === 'pork' ? 'Bánh mì thịt nướng' : 'Bánh mì chả lụa'
  });
  if (state.reviewLog.length > 40) {
    state.reviewLog = state.reviewLog.slice(-40);
  }
}

/**
 * Hiệu ứng nguyên liệu bay từ khay vào ổ bánh
 */
function animateIngredient(k, source) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const r = source.getBoundingClientRect();
  const f = document.createElement('div');
  const spr = k === 'spicy' ? 'chili' : ITEMS[k].sprite;
  f.className = `flying-food s-${spr}`;
  f.style.left = (r.left + r.width / 2 - 24) + 'px';
  f.style.top = (r.top + r.height / 2 - 24) + 'px';
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 500);
}

/**
 * Hiệu ứng nổ sao và tiền khi giao bánh thành công
 */
function scoreBurst(stars, earned) {
  const b = document.createElement('div');
  b.className = 'score-burst';
  b.textContent = `${'★'.repeat(stars)}  +${money(earned)}`;
  document.body.appendChild(b);

  for (let i = 0; i < 10; i++) {
    const s = document.createElement('i');
    s.className = 'spark';
    s.style.left = (50 + Math.random() * 8 - 4) + '%';
    s.style.top = (49 + Math.random() * 4 - 2) + '%';
    s.style.background = ['#ffd05a', '#e9573f', '#7aa75d', '#fff2c2'][i % 4];
    s.style.setProperty('--dx', (Math.random() * 150 - 75) + 'px');
    s.style.setProperty('--dy', (Math.random() * -120 - 15) + 'px');
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 850);
  }
  setTimeout(() => b.remove(), 950);
}

/**
 * Chuyển sang khách hàng tiếp theo trong hàng đợi
 */
function nextCustomer() {
  build = {};
  cooking = false;
  customer = null;
  queue.shift();

  // Đã phục vụ hoặc để lỡ tổng cộng 8 khách trong ngày -> Đóng cửa kết thúc ngày
  if (served + lost >= 8) {
    return setTimeout(endDay, 650);
  }

  // Bổ sung khách mới vào cuối hàng đợi
  queue.push(makeCustomer(served + lost + 2));
  setTimeout(() => {
    customer = queue[0];
    renderGame();
    selectCustomer(0);
  }, 600);
}

/* ==========================================================================
   11. KẾT THÚC NGÀY & TỔNG KẾT TÀI CHÍNH (END DAY & SUMMARY)
   ========================================================================== */
/**
 * Đóng tiệm, tính thưởng nhiệm vụ, trừ chi phí cố định và tính lãi ròng
 */
function endDay() {
  phase = 'summary';
  clearInterval(patienceTimer);

  let bonus = 0;
  let bonusXp = 0;

  // Thưởng nhiệm vụ 1: Bán từ 6 ổ trở lên
  if (served >= 6) {
    bonus += 25;
    bonusXp += 25;
  }
  // Thưởng nhiệm vụ 2: Đạt 3 khách 5 sao
  if (perfect >= 3) {
    bonus += 30;
    bonusXp += 30;
  }
  // Thưởng nhiệm vụ 3: Không ai giận bỏ về
  if (lost === 0) {
    bonus += 20;
    bonusXp += 20;
  }

  // Chi phí cố định: 42k (mặt bằng 30k + điện gas 12k) + 3k bảo trì cho mỗi nâng cấp
  const fixed = 42 + state.upgrades.length * 3;
  state.cash += (bonus - fixed);
  state.xp += bonusXp;

  // Lợi nhuận = Doanh thu + Thưởng - Chi phí nhập hàng - Chi phí cố định
  const profit = revenue + bonus - spend - fixed;
  state.totalProfit += profit;

  // Kiểm tra thăng cấp độ
  while (state.xp >= maxXp()) {
    state.xp -= maxXp();
    state.level++;
  }

  state.day++;
  save();

  layout(`
    <main class="screen" style="padding:30px">
      <div class="modal" style="margin:30px auto">
        <div class="eyebrow" style="color:var(--red)">Đóng cửa rồi!</div>
        <h2>Hôm nay ổn áp đó 🥖</h2>
        <p>Con hẻm đã yên, mình cùng đếm lại tiền và chuẩn bị cho ngày mai nhé.</p>
        <div class="summary-grid">
          <div class="summary-box">
            <span>Đã bán</span>
            <strong>${served} ổ</strong>
          </div>
          <div class="summary-box">
            <span>5 sao</span>
            <strong>${perfect} khách</strong>
          </div>
          <div class="summary-box">
            <span>Lợi nhuận</span>
            <strong>${profit >= 0 ? '+' : ''}${money(profit)}</strong>
          </div>
        </div>
        <div class="notice">
          Doanh thu ${money(revenue)} · thưởng ${money(bonus)} · nhập hàng ${money(spend)} · chi phí ${money(fixed)}
        </div>
        <button class="primary full" id="next" style="margin-top:18px">Sang ngày ${state.day}</button>
      </div>
    </main>
  `);

  $('#next').onclick = () => prep();
}

/* ==========================================================================
   12. KHỞI ĐỘNG GAME (BOOTSTRAP)
   ========================================================================== */
home();

/* ==========================================================================
   13. EXPOSE ENGINE BRIDGE (CHO HACK MOD MENU & DEBUG)
   ========================================================================== */
window.gameEngine = {
  getState: () => state,
  setState: (s) => { state = s; save(); },
  getItems: () => ITEMS,
  getBuild: () => build,
  setBuild: (b) => { build = b; },
  getCustomer: () => customer,
  getQueue: () => queue,
  getPhase: () => phase,
  getCooking: () => cooking,
  setCooking: (c) => { cooking = c; },
  getServed: () => served,
  setServed: (s) => { served = s; },
  getLost: () => lost,
  setLost: (l) => { lost = l; },
  getPerfect: () => perfect,
  setPerfect: (p) => { perfect = p; },
  getRevenue: () => revenue,
  setRevenue: (r) => { revenue = r; },
  getSpend: () => spend,
  setSpend: (s) => { spend = s; },
  save,
  load,
  renderGame,
  updateKitchen,
  toggleFood,
  toggleCook,
  updateCookUI,
  serve,
  nextCustomer,
  endDay,
  prep,
  home,
  toast,
  modal,
  showHelp,
  money,
  maxXp,
  cartTotal,
  upgradeData,
  buyUpgrade,
  openDay,
  startService,
  makeCustomer,
  orderText
};

