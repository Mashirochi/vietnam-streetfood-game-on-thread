# 🥖 Bánh Mì Bé Xíu (Vietnamese Bread Simulator)

**Bánh Mì Bé Xíu** là game mô phỏng kinh doanh xe bánh mì vỉa hè Việt Nam cực kỳ dễ thương và chân thực. Người chơi sẽ trải nghiệm hành trình khởi nghiệp từ một xe đẩy nhỏ ven đường đến khi phát triển thành tiệm bánh mì nổi tiếng.

---

## 🎮 Tính Năng Trò Chơi

* 🥪 **Pha chế bánh mì chuẩn vị Việt**: Rạch bánh, quết pate thơm béo, kẹp chả lụa, thịt nướng, đồ chua, dưa leo, ngò và gói giấy báo theo từng yêu cầu riêng của khách hàng.
* 👥 **Khách hàng đa dạng**: Phục vụ nhiều đối tượng khách quen thuộc (học sinh Mai, Chú Ba xe ôm, Chị Vy công sở, Bà Năm...). Khách hàng có độ kiên nhẫn và khẩu vị khác nhau.
* 📦 **Quản lý hạn sử dụng & Tồn kho**: Bánh mì chỉ giòn trong ngày, thịt nướng và rau củ có hạn bảo quản riêng. Cần tính toán nhập hàng hợp lý để tối ưu lợi nhuận và tránh hư hỏng.
* ⭐ **Hệ thống đánh giá & Lên cấp**: Tích lũy điểm kinh nghiệm (XP), nâng sao đánh giá để mở khóa thêm các loại nhân mới và nâng cấp xe đẩy thành quán phố.
* 🎛️ **Mod Menu tích hợp sẵn (`mod_menu.js`)**: Công cụ hỗ trợ người phát triển/người chơi thử nghiệm (chỉnh sửa tiền, tăng tốc độ khách, làm đầy nguyên liệu, mở khóa cấp độ ngay lập tức).

---

## 📁 Cấu Trúc Thư Mục

```text
banh-mi/
├── index.html            # Khung HTML chạy game
├── game.js               # Logic cốt lõi (nhập hàng, phục vụ, tính tiền, lên cấp)
├── styles.css            # Giao diện responsive phong cách hoạt hình Retro
├── mod_menu.js           # Menu công cụ hỗ trợ / cheat menu
├── manifest.webmanifest  # Cấu hình PWA cài đặt ứng dụng
└── assets/               # Hình ảnh nguyên liệu, nhân vật, favicon, sprite sheet
```

---

## 🚀 Hướng Dẫn Khởi Chạy

### Cách 1: Sử dụng VS Code Live Server (Khuyên dùng)
* Mở thư mục dự án trên VS Code.
* Chuột phải vào `banh-mi/index.html` và chọn **Open with Live Server**.

### Cách 2: Sử dụng Node.js CLI
```bash
cd banh-mi
npx serve .
# hoặc
npx http-server -p 5501
```

### Cách 3: Sử dụng Python Server
```bash
cd banh-mi
python -m http.server 5501
```
Mở trình duyệt tại `http://localhost:5501` để trải nghiệm game.
