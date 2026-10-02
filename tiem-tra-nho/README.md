# 🧋 Tiệm Trà Nhỏ (Milk Tea Shop Simulator)

**Tiệm Trà Nhỏ** là web game mô phỏng quản lý quán trà sữa được xây dựng bằng JavaScript thuần, hỗ trợ chơi trực tiếp trên trình duyệt hoặc cài đặt như ứng dụng độc lập trên điện thoại/máy tính (PWA).

---

## 🎮 Tính Năng Trò Chơi

* 🍵 **Pha chế trà sữa**: Tự tay chọn loại trà (Trà sữa truyền thống, Trà lài, Trà Ô Long, Trà Thái...), kết hợp trân châu đen, thạch, phô mai, siro, căn chỉnh đường và đá theo yêu cầu của từng khách.
* 📦 **Quản lý kho nguyên liệu**: Tính toán và nhập nguyên liệu mỗi đầu ngày, nấu trân châu, bảo quản đồ uống tránh hư hỏng.
* 🛵 **Bán hàng đa kênh**: Phục vụ khách tại quán, khách mua mang về, và nhận đơn giao tận nơi qua các ứng dụng đặt đồ ăn online.
* 🏬 **Nâng cấp tiệm**: Mở rộng menu món mới, mua máy dán nắp tự động, sắm tablet nhận đơn, thuê nhân viên phụ quầy và bảo vệ trông xe.
* ☁️ **Lưu trữ đám mây (Cloud Save)**: Đồng bộ dữ liệu tiến trình game qua mã sao lưu 8 số kết nối với server backend.
* 🎨 **Đổi màu giao diện (Theme)**: Tùy biến bảng màu quán theo phong cách bạn thích (Kem sữa, Matcha, Trà Thái, Hồng dâu, Cam đào,...).

---

## 📁 Cấu Trúc Thư Mục

```text
tiem-tra-nho/
├── index.html            # Khung HTML giao diện game
├── game.js               # Mã nguồn logic chính của game
├── style.css             # Định kiểu giao diện, theme, hiệu ứng
├── sw.js                 # Service Worker (hỗ trợ PWA & Offline)
├── manifest.webmanifest  # Cấu hình PWA
├── img/                  # Thư mục chứa hình ảnh icon, nguyên liệu, đồ trang trí
└── snd/                  # Thư mục chứa hiệu ứng âm thanh và nhạc nền
```

---

## 🚀 Hướng Dẫn Chạy Game

### Cách 1: Sử dụng VS Code Live Server (Khuyên dùng)
1. Mở thư mục dự án trên VS Code.
2. Chuột phải vào file `index.html` và chọn **Open with Live Server**.

### Cách 2: Sử dụng Node.js CLI
```bash
# Cài đặt và chạy server tĩnh
npx serve .
# hoặc
npx http-server -p 5500
```

### Cách 3: Sử dụng Python Server
```bash
python -m http.server 5500
```
Truy cập trình duyệt tại `http://localhost:5500`.

---

## ☁️ Kết Nối Cloud Save Với Server

Trong file `game.js`, game kết nối tới server API:
```javascript
const CLOUD = window.CUSTOM_CLOUD_API || 'http://localhost:8787';
```
Khi server backend ở thư mục `../server` đang chạy, bạn có thể:
1. Nhấn nút **Cài đặt ⚙️** góc trên bên trái.
2. Chọn **"Tạo mã sao lưu"** để lấy mã 8 số.
3. Ở thiết bị khác, chọn **"Khôi phục bằng mã"** và nhập mã để tiếp tục ván chơi.
