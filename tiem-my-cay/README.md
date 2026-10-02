# 🍜 Tiệm Mì Cay (Spicy Noodle Simulator)

**Tiệm Mì Cay** (Tiệm Mì Cay 2) là game mô phỏng quản lý quán mì cay Hàn Quốc 7 cấp độ nổi tiếng tại Việt Nam.

---

## 🎮 Tính Năng Trò Chơi

* 🍲 **Nấu mì theo yêu cầu & Cấp độ cay**: Nấu mì kim chi, mì hải sản, mì bò Mỹ kết hợp topping (xúc xích, tôm, mực, bò viên, cá viên, nấm kim châm, phô mai) với cấp độ cay tùy chỉnh từ cấp 0 đến cấp 7.
* 🕒 **Căn thời gian & Phục vụ nhanh**: Quản lý nhiều thố mì đất đang sôi cùng lúc, chú ý không để mì bị nhừ hoặc cháy khét.
* 📦 **Quản lý nguyên liệu & Bảng giá**: Điều chỉnh menu, tính toán giá bán, nhập sỉ nguyên liệu và tối ưu chi phí đầu tư.
* 🎵 **Âm nhạc & Hiệu ứng sinh động**: Tích hợp nhạc nền vui tươi và âm thanh nấu nướng sống động trong thư mục `music/`.
* 🛡️ **Hệ thống phục hồi & Báo lỗi (`/api/err`)**: Tự động lưu tiến trình vào `localStorage` và gửi báo cáo sự cố về máy chủ Backend để gỡ lỗi.

---

## 📁 Cấu Trúc Thư Mục

```text
tiem-my-cay/
├── index.html            # Giao diện chính của game
├── game.js               # Toàn bộ logic nấu mì, xử lý đơn và tính toán doanh thu
├── music/                # File âm thanh, nhạc nền BGM
├── package.json          # Cấu hình script khởi chạy
├── sw.js                 # Service worker hỗ trợ PWA
├── manifest.webmanifest  # Cấu hình ứng dụng di động
└── og.jpg, icon-*.png    # Hình ảnh banner và biểu tượng ứng dụng
```

---

## 🚀 Hướng Dẫn Khởi Chạy

### Cách 1: Sử dụng `npm start`
```bash
cd tiem-my-cay
npm start
```

### Cách 2: Sử dụng VS Code Live Server
* Chuột phải vào `tiem-my-cay/index.html` và chọn **Open with Live Server**.

### Cách 3: Sử dụng Python Server
```bash
cd tiem-my-cay
python -m http.server 5502
```
Truy cập trình duyệt tại `http://localhost:5502`.
