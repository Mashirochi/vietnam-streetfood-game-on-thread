/**
 * ==============================================================================
 *  BÁNH MÌ BÉ XÍU - HACK MOD MENU VIP (CHEAT ENGINE)
 *  Author: Antigravity AI
 *  Description:
 *    - Floating Draggable Icon với hiệu ứng VIP Neon Gold Glassmorphism
 *    - Hack Tiền mặt, Cấp độ, Kinh nghiệm, Danh tiếng 5 sao
 *    - Auto-Craft kẹp đúng đơn hàng 100%
 *    - Nướng siêu tốc Perfect không cần canh kim
 *    - 1-Click Auto-Serve: Làm bánh + Nướng + Giao 5 sao + Tip 18%
 *    - Đóng băng thanh kiên nhẫn khách hàng
 *    - Vô hạn nguyên liệu kho hàng (999 items)
 *    - Mở khoá toàn bộ nâng cấp tiệm
 *    - Hoàn thành ngày tức thì & Tua thời gian
 * ==============================================================================
 */

(function () {
  'use strict';

  // Biến lưu trữ cấu hình Hack toàn cục
  window._modHacks = window._modHacks || {
    freezePatience: false,
    always5Stars: false,
    infiniteStock: false,
    instantCook: false
  };

  // Đọc cài đặt hacks từ LocalStorage nếu có
  try {
    const savedHacks = JSON.parse(localStorage.getItem('banhmi_mod_settings') || '{}');
    Object.assign(window._modHacks, savedHacks);
  } catch (_) {}

  function saveModSettings() {
    try {
      localStorage.setItem('banhmi_mod_settings', JSON.stringify(window._modHacks));
    } catch (_) {}
  }

  // Chờ DOM và Game Engine sẵn sàng
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModMenu);
  } else {
    initModMenu();
  }

  function initModMenu() {
    if (document.getElementById('banhmi-mod-container')) return;

    injectModStyles();
    createModElements();
    setupModInteractions();
    console.log('[Bánh Mì Bé Xíu] Hack Mod Menu VIP đã kích hoạt!');
  }

  /* ==========================================================================
     1. GIAO DIỆN CSS GLASSMORPHISM NỔI BẬT
     ========================================================================== */
  function injectModStyles() {
    const style = document.createElement('style');
    style.id = 'banhmi-mod-styles';
    style.textContent = `
      /* Container gốc của Mod */
      #banhmi-mod-container {
        position: fixed;
        z-index: 999999;
        font-family: "Be Vietnam Pro", -apple-system, BlinkMacSystemFont, sans-serif;
        user-select: none;
        -webkit-user-select: none;
      }

      /* Nút Floating Icon kéo thả */
      #banhmi-mod-btn {
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: linear-gradient(135deg, #2b170c, #4a2614);
        border: 2px solid #ffd05a;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6), 0 0 16px rgba(255, 208, 90, 0.45);
        cursor: grab;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
        touch-action: none;
        z-index: 999999;
      }
      #banhmi-mod-btn:hover {
        transform: scale(1.08);
        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.7), 0 0 24px rgba(255, 208, 90, 0.65);
      }
      #banhmi-mod-btn:active {
        cursor: grabbing;
        transform: scale(0.95);
      }
      #banhmi-mod-btn .mod-badge {
        position: absolute;
        top: -4px;
        right: -4px;
        background: linear-gradient(135deg, #e94835, #ba2b1a);
        color: #fff;
        font-size: 9px;
        font-weight: 900;
        padding: 2px 5px;
        border-radius: 8px;
        border: 1px solid #ffd05a;
        letter-spacing: 0.5px;
      }

      /* Modal Bảng điều khiển Hack Mod */
      #banhmi-mod-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.95);
        width: min(440px, 92vw);
        max-height: 85vh;
        background: rgba(22, 15, 11, 0.94);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        border: 1.5px solid rgba(255, 208, 90, 0.38);
        border-radius: 24px;
        box-shadow: 0 25px 80px rgba(0, 0, 0, 0.85), 0 0 30px rgba(242, 181, 68, 0.18);
        color: #fff4dc;
        display: flex;
        flex-direction: column;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 1000000;
        overflow: hidden;
      }
      #banhmi-mod-modal.active {
        opacity: 1;
        pointer-events: auto;
        transform: translate(-50%, -50%) scale(1);
      }

      /* Header của Modal */
      .mod-header {
        padding: 16px 18px;
        background: linear-gradient(180deg, rgba(255, 208, 90, 0.12), transparent);
        border-bottom: 1px solid rgba(255, 208, 90, 0.2);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .mod-title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 800;
        font-size: 15px;
        color: #ffd05a;
        letter-spacing: 0.3px;
      }
      .mod-close-btn {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 208, 90, 0.25);
        color: #ffd05a;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-size: 14px;
        cursor: pointer;
        transition: 0.15s;
      }
      .mod-close-btn:hover {
        background: #e94835;
        color: #fff;
        border-color: #e94835;
      }

      /* Quick Toggles Bar */
      .mod-quick-toggles {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        padding: 12px 16px;
        background: rgba(0, 0, 0, 0.3);
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      }
      .toggle-chip {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 7px 11px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        transition: 0.18s;
      }
      .toggle-chip.active {
        background: rgba(255, 208, 90, 0.18);
        border-color: #ffd05a;
        color: #ffd05a;
      }
      .toggle-chip .switch {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #555;
        transition: 0.2s;
      }
      .toggle-chip.active .switch {
        background: #ffd05a;
        box-shadow: 0 0 8px #ffd05a;
      }

      /* Navigation Tabs */
      .mod-tabs {
        display: flex;
        padding: 8px 12px 0;
        gap: 6px;
        background: rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        overflow-x: auto;
        scrollbar-width: none;
      }
      .mod-tabs::-webkit-scrollbar { display: none; }
      .mod-tab-btn {
        padding: 8px 12px;
        border-radius: 10px 10px 0 0;
        background: transparent;
        border: 0;
        color: #b59f8c;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        white-space: nowrap;
        transition: 0.18s;
      }
      .mod-tab-btn.active {
        background: rgba(255, 208, 90, 0.15);
        color: #ffd05a;
        border-bottom: 2px solid #ffd05a;
      }

      /* Tab Content Panels */
      .mod-body {
        padding: 16px;
        overflow-y: auto;
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .mod-panel {
        display: none;
        flex-direction: column;
        gap: 12px;
      }
      .mod-panel.active {
        display: flex;
      }

      /* Nhóm chức năng (Section Card) */
      .mod-card {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 16px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .mod-card-title {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        color: #ffd05a;
        font-weight: 800;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .mod-btn-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
      }
      .mod-btn-grid.cols-3 {
        grid-template-columns: repeat(3, 1fr);
      }
      .mod-btn-grid.cols-1 {
        grid-template-columns: 1fr;
      }

      /* Action Buttons */
      .mod-action-btn {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
        border: 1px solid rgba(255, 255, 255, 0.12);
        color: #fff4dc;
        padding: 9px 8px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        transition: 0.15s transform, 0.15s background, 0.15s border-color;
        text-align: center;
      }
      .mod-action-btn:hover {
        background: rgba(255, 208, 90, 0.22);
        border-color: #ffd05a;
        color: #ffd05a;
        transform: translateY(-1px);
      }
      .mod-action-btn:active {
        transform: translateY(1px);
      }
      .mod-action-btn.vip {
        background: linear-gradient(135deg, rgba(242, 181, 68, 0.25), rgba(201, 72, 53, 0.25));
        border-color: #ffd05a;
        color: #ffe6a3;
      }
      .mod-action-btn.danger {
        background: rgba(233, 72, 53, 0.18);
        border-color: rgba(233, 72, 53, 0.4);
        color: #ff9d93;
      }
      .mod-action-btn.danger:hover {
        background: #e94835;
        color: #fff;
      }

      /* Input row */
      .mod-input-row {
        display: flex;
        gap: 8px;
      }
      .mod-input {
        flex: 1;
        background: rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: #fff;
        padding: 8px 12px;
        border-radius: 10px;
        font-size: 12px;
        outline: none;
      }
      .mod-input:focus {
        border-color: #ffd05a;
      }

      /* Toast Notification của Mod Menu */
      .mod-toast {
        position: fixed;
        top: 24px;
        left: 50%;
        transform: translateX(-50%) translateY(-20px);
        background: linear-gradient(135deg, #2b170c, #4a2614);
        border: 1.5px solid #ffd05a;
        color: #ffd05a;
        font-weight: 800;
        font-size: 12px;
        padding: 10px 20px;
        border-radius: 999px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7), 0 0 18px rgba(255, 208, 90, 0.35);
        z-index: 1000001;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .mod-toast.show {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    `;
    document.head.appendChild(style);
  }

  /* ==========================================================================
     2. TẠO CÁC PHẦN TỬ DOM (HTML STRUCTURE)
     ========================================================================= */
  function createModElements() {
    const container = document.createElement('div');
    container.id = 'banhmi-mod-container';

    container.innerHTML = `
      <!-- Nút Floating Icon -->
      <div id="banhmi-mod-btn" title="Mở Hack Mod Menu VIP">
        🥖
        <span class="mod-badge">VIP</span>
      </div>

      <!-- Modal Bảng điều khiển Hack Mod -->
      <div id="banhmi-mod-modal">
        <div class="mod-header">
          <div class="mod-title">
            <span>⚡ BÁNH MÌ BÉ XÍU</span>
            <small style="color:#b59f8c; font-size:10px; font-weight:600">v2.0 MOD VIP</small>
          </div>
          <button class="mod-close-btn" id="banhmi-mod-close" title="Đóng Menu">✕</button>
        </div>

        <!-- Quick Toggles -->
        <div class="mod-quick-toggles">
          <div class="toggle-chip ${window._modHacks.freezePatience ? 'active' : ''}" data-hack="freezePatience">
            <span>❄️ Băng kiên nhẫn</span>
            <span class="switch"></span>
          </div>
          <div class="toggle-chip ${window._modHacks.always5Stars ? 'active' : ''}" data-hack="always5Stars">
            <span>⭐ Luôn 5 sao</span>
            <span class="switch"></span>
          </div>
          <div class="toggle-chip ${window._modHacks.infiniteStock ? 'active' : ''}" data-hack="infiniteStock">
            <span>♾️ Vô hạn kho</span>
            <span class="switch"></span>
          </div>
          <div class="toggle-chip ${window._modHacks.instantCook ? 'active' : ''}" data-hack="instantCook">
            <span>🔥 Nướng giòn 100%</span>
            <span class="switch"></span>
          </div>
        </div>

        <!-- Tabs Navigation -->
        <div class="mod-tabs">
          <button class="mod-tab-btn active" data-tab="finance">💰 Tài chính</button>
          <button class="mod-tab-btn" data-tab="kitchen">🥖 Bếp thần tốc</button>
          <button class="mod-tab-btn" data-tab="customer">👥 Khách hàng</button>
          <button class="mod-tab-btn" data-tab="upgrade">🛠️ Nâng cấp & Kho</button>
          <button class="mod-tab-btn" data-tab="system">⚙️ Hệ thống</button>
        </div>

        <!-- Tab Body Content -->
        <div class="mod-body">
          <!-- TAB 1: TÀI CHÍNH & CẤP ĐỘ -->
          <div class="mod-panel active" id="tab-finance">
            <div class="mod-card">
              <div class="mod-card-title">💵 Hack Tiền mặt vào Két</div>
              <div class="mod-btn-grid">
                <button class="mod-action-btn" data-action="add-cash" data-val="100">+100k</button>
                <button class="mod-action-btn" data-action="add-cash" data-val="500">+500k</button>
                <button class="mod-action-btn" data-action="add-cash" data-val="2000">+2,000k</button>
                <button class="mod-action-btn vip" data-action="add-cash" data-val="999999">Max Két (999k)</button>
              </div>
              <div class="mod-input-row" style="margin-top:4px">
                <input type="number" id="custom-cash-input" class="mod-input" placeholder="Nhập số tiền k (ví dụ: 10000)">
                <button class="mod-action-btn" id="btn-custom-cash">Đặt tiền</button>
              </div>
            </div>

            <div class="mod-card">
              <div class="mod-card-title">⭐ Cấp độ & Danh tiếng tiệm</div>
              <div class="mod-btn-grid cols-3">
                <button class="mod-action-btn" data-action="set-level" data-val="3">Cấp 3</button>
                <button class="mod-action-btn" data-action="set-level" data-val="5">Cấp 5</button>
                <button class="mod-action-btn vip" data-action="set-level" data-val="10">Cấp 10 (Max)</button>
              </div>
              <div class="mod-btn-grid" style="margin-top:4px">
                <button class="mod-action-btn" data-action="max-reputation">★ Khóa 5.0 Sao</button>
                <button class="mod-action-btn" data-action="clean-reviews">🧹 Xóa review xấu</button>
              </div>
            </div>
          </div>

          <!-- TAB 2: BẾP THẦN TỐC & AUTO-PLAY -->
          <div class="mod-panel" id="tab-kitchen">
            <div class="mod-card">
              <div class="mod-card-title">🚀 Siêu hỗ trợ làm bánh</div>
              <div class="mod-btn-grid cols-1">
                <button class="mod-action-btn vip" data-action="super-auto-serve">
                  ⚡ 1-CLICK AUTO-SERVE (Kẹp + Nướng + Giao 5★ + Tip 18%)
                </button>
              </div>
              <div class="mod-btn-grid">
                <button class="mod-action-btn" data-action="auto-craft">
                  🥪 Tự kẹp đúng món
                </button>
                <button class="mod-action-btn" data-action="instant-perfect-toast">
                  🔥 Nướng vàng giòn ngay
                </button>
              </div>
              <div class="mod-btn-grid">
                <button class="mod-action-btn" data-action="serve-now">
                  ✓ Giao ngay cho khách
                </button>
                <button class="mod-action-btn danger" data-action="clear-sandwich">
                  🗑️ Làm lại ổ bánh
                </button>
              </div>
            </div>

            <div class="mod-card">
              <div class="mod-card-title">💡 Giải thích Auto</div>
              <p style="font-size:11px; color:#b59f8c; margin:0; line-height:1.5">
                • <b>Auto-Craft:</b> Quét mắt nhìn khách muốn ăn chả hay thịt, có pate hay ngò không rồi tự kẹp chính xác 100%.<br>
                • <b>Nướng vàng giòn:</b> Bỏ qua canh kim, biến bánh thành vàng giòn hoàn hảo tức thì.
              </p>
            </div>
          </div>

          <!-- TAB 3: THAO TÚNG KHÁCH HÀNG -->
          <div class="mod-panel" id="tab-customer">
            <div class="mod-card">
              <div class="mod-card-title">😊 Tâm trạng & Đơn hàng</div>
              <div class="mod-btn-grid cols-1">
                <button class="mod-action-btn" data-action="refill-patience">
                  💖 Hồi đầy 100% Kiên nhẫn khách hiện tại
                </button>
                <button class="mod-action-btn" data-action="skip-customer">
                  ⏩ Đổi khách khác (Skip Customer)
                </button>
                <button class="mod-action-btn" data-action="add-reviews-bulk">
                  💬 Bơm 5 Đánh giá 5 sao khen ngợi
                </button>
              </div>
            </div>
          </div>

          <!-- TAB 4: NÂNG CẤP & KHO -->
          <div class="mod-panel" id="tab-upgrade">
            <div class="mod-card">
              <div class="mod-card-title">🛠️ Trang thiết bị tiệm</div>
              <div class="mod-btn-grid cols-1">
                <button class="mod-action-btn vip" data-action="unlock-all-upgrades">
                  🌟 Mở khóa toàn bộ 4 nâng cấp tiệm
                </button>
              </div>
              <p style="font-size:10px; color:#b59f8c; margin:0">
                (Lò nướng xịn, Biển đèn đầu hẻm, Tủ lạnh nhỏ, Bé Tí phụ bếp)
              </p>
            </div>

            <div class="mod-card">
              <div class="mod-card-title">📦 Tồn kho nguyên liệu</div>
              <div class="mod-btn-grid cols-1">
                <button class="mod-action-btn" data-action="fill-stock-999">
                  📦 Đổ đầy kho 999 tất cả nguyên liệu
                </button>
              </div>
            </div>
          </div>

          <!-- TAB 5: HỆ THỐNG & THỜI GIAN -->
          <div class="mod-panel" id="tab-system">
            <div class="mod-card">
              <div class="mod-card-title">⏩ Điều khiển ca bán & Ngày</div>
              <div class="mod-btn-grid cols-1">
                <button class="mod-action-btn vip" data-action="instant-end-day">
                  🏆 Hoàn thành ngày tức thì (Full 8 khách 5★)
                </button>
              </div>
              <div class="mod-btn-grid">
                <button class="mod-action-btn" data-action="advance-day" data-val="1">+1 Ngày</button>
                <button class="mod-action-btn" data-action="advance-day" data-val="5">+5 Ngày</button>
              </div>
            </div>

            <div class="mod-card">
              <div class="mod-card-title" style="color:#ff877a">⚠️ Quản trị dữ liệu</div>
              <div class="mod-btn-grid cols-1">
                <button class="mod-action-btn danger" data-action="factory-reset">
                  🔄 Reset Game về Ngày 1
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mod Toast Container -->
      <div id="banhmi-mod-toast" class="mod-toast"></div>
    `;

    document.body.appendChild(container);
  }

  /* ==========================================================================
     3. SỰ KIỆN KÉO THẢ (DRAG & DROP) & GẮN NÚT BẤM
     ========================================================================== */
  function setupModInteractions() {
    const btn = document.getElementById('banhmi-mod-btn');
    const modal = document.getElementById('banhmi-mod-modal');
    const closeBtn = document.getElementById('banhmi-mod-close');
    if (!btn || !modal) return;

    // Khôi phục toạ độ đã lưu
    try {
      const pos = JSON.parse(localStorage.getItem('banhmi_mod_btn_pos'));
      if (pos && typeof pos.x === 'number' && typeof pos.y === 'number') {
        const maxX = window.innerWidth - 65;
        const maxY = window.innerHeight - 65;
        const curX = Math.min(Math.max(10, pos.x), maxX);
        const curY = Math.min(Math.max(10, pos.y), maxY);
        btn.style.left = curX + 'px';
        btn.style.top = curY + 'px';
        btn.style.right = 'auto';
        btn.style.bottom = 'auto';
      }
    } catch (_) {}

    // Xử lý kéo thả Floating Button (chuột & chạm)
    let isDragging = false;
    let startX = 0, startY = 0;
    let initialLeft = 0, initialTop = 0;
    let hasMoved = false;

    function onPointerDown(e) {
      isDragging = true;
      hasMoved = false;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      startX = clientX;
      startY = clientY;

      const rect = btn.getBoundingClientRect();
      initialLeft = rect.left;
      initialTop = rect.top;

      document.addEventListener('mousemove', onPointerMove);
      document.addEventListener('mouseup', onPointerUp);
      document.addEventListener('touchmove', onPointerMove, { passive: false });
      document.addEventListener('touchend', onPointerUp);
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const dx = clientX - startX;
      const dy = clientY - startY;

      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
        hasMoved = true;
        if (e.cancelable) e.preventDefault();
      }

      let newX = initialLeft + dx;
      let newY = initialTop + dy;
      const maxX = window.innerWidth - btn.offsetWidth - 8;
      const maxY = window.innerHeight - btn.offsetHeight - 8;

      newX = Math.max(8, Math.min(newX, maxX));
      newY = Math.max(8, Math.min(newY, maxY));

      btn.style.left = newX + 'px';
      btn.style.top = newY + 'px';
      btn.style.right = 'auto';
      btn.style.bottom = 'auto';
    }

    function onPointerUp() {
      if (!isDragging) return;
      isDragging = false;
      document.removeEventListener('mousemove', onPointerMove);
      document.removeEventListener('mouseup', onPointerUp);
      document.removeEventListener('touchmove', onPointerMove);
      document.removeEventListener('touchend', onPointerUp);

      // Lưu toạ độ
      if (hasMoved) {
        const rect = btn.getBoundingClientRect();
        try {
          localStorage.setItem('banhmi_mod_btn_pos', JSON.stringify({ x: rect.left, y: rect.top }));
        } catch (_) {}
      } else {
        // Nếu chỉ là click mà không kéo -> Bật/Tắt Menu
        modal.classList.toggle('active');
      }
    }

    btn.addEventListener('mousedown', onPointerDown);
    btn.addEventListener('touchstart', onPointerDown, { passive: true });

    // Đóng Modal khi bấm nút X
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    // Đóng Modal khi bấm ra ngoài
    document.addEventListener('click', e => {
      if (modal.classList.contains('active') && !modal.contains(e.target) && !btn.contains(e.target)) {
        modal.classList.remove('active');
      }
    });

    // Chuyển Tab
    document.querySelectorAll('.mod-tab-btn').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        document.querySelectorAll('.mod-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.mod-panel').forEach(p => p.classList.remove('active'));
        tabBtn.classList.add('active');
        const targetPanel = document.getElementById('tab-' + tabBtn.dataset.tab);
        if (targetPanel) targetPanel.classList.add('active');
      });
    });

    // Quick Toggles
    document.querySelectorAll('.toggle-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const hackKey = chip.dataset.hack;
        window._modHacks[hackKey] = !window._modHacks[hackKey];
        chip.classList.toggle('active', window._modHacks[hackKey]);
        saveModSettings();
        showModToast(`⚡ ${chip.querySelector('span').textContent}: ${window._modHacks[hackKey] ? 'BẬT' : 'TẮT'}`);
      });
    });

    // Action Buttons
    document.querySelectorAll('.mod-action-btn[data-action]').forEach(actionBtn => {
      actionBtn.addEventListener('click', () => {
        const action = actionBtn.dataset.action;
        const val = actionBtn.dataset.val;
        executeHack(action, val);
      });
    });

    // Custom Cash Input
    document.getElementById('btn-custom-cash').addEventListener('click', () => {
      const input = document.getElementById('custom-cash-input');
      const amount = parseFloat(input.value);
      if (!isNaN(amount) && amount >= 0) {
        executeHack('set-cash', amount);
        input.value = '';
      } else {
        showModToast('⚠️ Vui lòng nhập số tiền hợp lệ');
      }
    });
  }

  /* ==========================================================================
     4. LOGIC XỬ LÝ HACK ENGINE (CHEAT FUNCTIONS)
     ========================================================================== */
  function getEngine() {
    return window.gameEngine || null;
  }

  function executeHack(action, param) {
    const engine = getEngine();
    if (!engine) {
      showModToast('⚠️ Đang tải game, vui lòng thử lại sau giây lát!');
      return;
    }

    const state = engine.getState();

    switch (action) {
      // 1. Hack Tiền mặt
      case 'add-cash': {
        const addAmount = parseFloat(param);
        state.cash += addAmount;
        engine.save();
        refreshCurrentScreen();
        showModToast(`💵 Đã cộng +${engine.money(addAmount)} vào két!`);
        break;
      }
      case 'set-cash': {
        state.cash = parseFloat(param);
        engine.save();
        refreshCurrentScreen();
        showModToast(`💵 Đã đặt tiền két: ${engine.money(state.cash)}!`);
        break;
      }

      // 2. Hack Cấp độ & Danh tiếng
      case 'set-level': {
        state.level = parseInt(param, 10);
        state.xp = 0;
        engine.save();
        refreshCurrentScreen();
        showModToast(`⭐ Đã nâng tiệm lên Cấp ${state.level}!`);
        break;
      }
      case 'max-reputation': {
        state.rating = 5.0;
        state.reviews = Math.max(state.reviews, 999);
        engine.save();
        refreshCurrentScreen();
        showModToast('★ Đã khóa danh tiếng tiệm 5.0 Sao tuyệt đối!');
        break;
      }
      case 'clean-reviews': {
        state.reviewLog = state.reviewLog.filter(r => r.stars >= 4);
        engine.save();
        refreshCurrentScreen();
        showModToast('🧹 Đã dọn sạch tất cả review tiêu cực!');
        break;
      }

      // 3. Bếp Thần Tốc: Auto-Craft (Kẹp đúng đơn hàng 100%)
      case 'auto-craft': {
        if (engine.getPhase() !== 'game') {
          showModToast('⚠️ Hãy vào ca bán hàng để kẹp bánh!');
          return;
        }
        const cust = engine.getCustomer();
        if (!cust) {
          showModToast('⚠️ Đang không có khách nào ở quầy!');
          return;
        }

        // Tự động xây dựng đúng bánh theo yêu cầu
        const newBuild = {
          bread: true,
          cha: cust.type === 'cha',
          pork: cust.type === 'pork',
          pate: cust.pate,
          pickle: cust.pickle,
          cilantro: cust.cilantro,
          spicy: cust.spicy
        };
        engine.setBuild(newBuild);
        engine.updateKitchen();
        showModToast(`🥪 Đã kẹp đúng 100% đơn của ${cust.name}!`);
        break;
      }

      // 4. Bếp Thần Tốc: Nướng vàng giòn ngay
      case 'instant-perfect-toast': {
        if (engine.getPhase() !== 'game') {
          showModToast('⚠️ Hãy vào ca bán hàng để nướng bánh!');
          return;
        }
        const build = engine.getBuild();
        if (!build.bread) {
          showModToast('⚠️ Cần có bánh mì trước khi nướng!');
          return;
        }
        engine.setCooking(false);
        build.cooked = 'perfect';
        engine.updateCookUI('finish');
        showModToast('🔥 Ổ bánh đã đạt độ Vàng Giòn Hoàn Hảo ✨');
        break;
      }

      // 5. ⚡ SUPER AUTO-SERVE (1-Click Thần Thánh: Kẹp + Nướng + Giao)
      case 'super-auto-serve': {
        if (engine.getPhase() !== 'game') {
          showModToast('⚠️ Hãy vào ca bán hàng để phục vụ!');
          return;
        }
        const cust = engine.getCustomer();
        if (!cust) {
          showModToast('⚠️ Không có khách nào để giao bánh!');
          return;
        }

        // Bước 1: Kẹp đúng đơn hàng
        const newBuild = {
          bread: true,
          cha: cust.type === 'cha',
          pork: cust.type === 'pork',
          pate: cust.pate,
          pickle: cust.pickle,
          cilantro: cust.cilantro,
          spicy: cust.spicy,
          cooked: 'perfect'
        };
        engine.setBuild(newBuild);
        engine.setCooking(false);
        engine.updateKitchen();
        engine.updateCookUI('finish');

        // Bước 2: Giao bánh ngay
        setTimeout(() => {
          engine.serve();
          showModToast(`⚡ Đã phục vụ ${cust.name} thành công 5★ + Tip 18%!`);
        }, 150);
        break;
      }

      case 'serve-now': {
        if (engine.getPhase() !== 'game') {
          showModToast('⚠️ Cần ở trong ca bán hàng!');
          return;
        }
        engine.serve();
        break;
      }

      case 'clear-sandwich': {
        if (engine.getPhase() !== 'game') return;
        engine.setBuild({});
        engine.setCooking(false);
        engine.updateKitchen();
        showModToast('🗑️ Đã làm lại ổ bánh mới.');
        break;
      }

      // 6. Thao túng Khách hàng
      case 'refill-patience': {
        const cust = engine.getCustomer();
        if (cust) {
          cust.patience = 100;
          const p = document.getElementById('patience');
          if (p) p.style.width = '100%';
          showModToast(`💖 Khách ${cust.name} đã hồi đầy 100% kiên nhẫn!`);
        } else {
          showModToast('⚠️ Không có khách ở quầy!');
        }
        break;
      }

      case 'skip-customer': {
        if (engine.getPhase() !== 'game') return;
        engine.nextCustomer();
        showModToast('⏩ Đã mời khách tiếp theo vào quầy!');
        break;
      }

      case 'add-reviews-bulk': {
        const niceTexts = [
          'Bánh ngon thần sầu, ăn xong muốn gả con gái cho chủ quán!',
          'Pate béo ngậy chuẩn vị Sài Gòn xưa, 10 điểm không có nhưng!',
          'Đỉnh chóp luôn, bánh giòn rụm thịt thơm nức mũi cả xóm!',
          'Sáng nào không ăn bánh ở đây là cả ngày bứt rứt không yên!',
          'Quán ruột của cả công ty tui, vote 5 sao triệu like!'
        ];
        niceTexts.forEach(txt => {
          state.reviewLog.push({
            name: 'Thực khách sành ăn',
            stars: 5,
            text: txt,
            day: state.day,
            item: 'Bánh mì đặc biệt VIP'
          });
        });
        state.reviews += 5;
        state.rating = Math.min(5, (state.rating * (state.reviews - 5) + 25) / state.reviews);
        engine.save();
        refreshCurrentScreen();
        showModToast('💬 Đã bơm 5 đánh giá 5 sao siêu khen ngợi!');
        break;
      }

      // 7. Nâng cấp & Kho hàng
      case 'unlock-all-upgrades': {
        state.upgrades = ['toaster', 'sign', 'fridge', 'helper'];
        engine.save();
        refreshCurrentScreen();
        showModToast('🌟 Đã sở hữu toàn bộ 4 nâng cấp VIP!');
        break;
      }

      case 'fill-stock-999': {
        const items = engine.getItems();
        Object.keys(items).forEach(k => {
          state.stock[k] = 999;
          state.cart[k] = 999;
        });
        engine.save();
        refreshCurrentScreen();
        showModToast('📦 Đã đổ đầy 999 tất cả nguyên liệu trong kho!');
        break;
      }

      // 8. Hệ thống & Thời gian
      case 'instant-end-day': {
        if (engine.getPhase() !== 'game') {
          showModToast('⚠️ Tính năng này dùng trong lúc đang mở cửa bán hàng!');
          return;
        }
        engine.setServed(8);
        engine.setPerfect(8);
        engine.setLost(0);
        engine.endDay();
        showModToast('🏆 Đã hoàn thành ngày bán với thành tích hoàn hảo!');
        break;
      }

      case 'advance-day': {
        const skip = parseInt(param, 10);
        state.day += skip;
        engine.save();
        refreshCurrentScreen();
        showModToast(`📅 Đã tua nhanh thời gian tới Ngày ${state.day}!`);
        break;
      }

      case 'factory-reset': {
        if (confirm('Bạn có chắc chắn muốn xoá toàn bộ dữ liệu để chơi lại từ Ngày 1 không?')) {
          localStorage.removeItem('banhMiGame');
          location.reload();
        }
        break;
      }
    }
  }

  /**
   * Cập nhật lại màn hình hiện tại để phản ánh trạng thái mới
   */
  function refreshCurrentScreen() {
    const engine = getEngine();
    if (!engine) return;
    const phase = engine.getPhase();
    if (phase === 'prep') {
      engine.prep();
    } else if (phase === 'game') {
      engine.renderGame();
      engine.updateKitchen();
    } else if (phase === 'home') {
      engine.home();
    }
  }

  /**
   * Thông báo nhanh Toast của Mod Menu
   */
  let modToastTimer = null;
  function showModToast(msg) {
    const toast = document.getElementById('banhmi-mod-toast');
    if (!toast) return;
    clearTimeout(modToastTimer);
    toast.textContent = msg;
    toast.classList.add('show');
    modToastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

})();
