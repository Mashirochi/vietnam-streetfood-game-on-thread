# 🍚 Tiệm Xôi Bà Tám (Sticky Rice Simulator)

**Tiệm Xôi Bà Tám** là tựa game mô phỏng bán xôi vỉa hè truyền thống Việt Nam với phong cách đồ họa Pixel Art / Retro Canvas hoài niệm và hấp dẫn.

---

## 🎮 Tính Năng Trò Chơi

* 🌾 **Đa dạng các loại xôi truyền thống**: Nấu và bán các món xôi trứ danh: Xôi Gấc đỏ thắm, Xôi Xéo thơm lừng đậu xanh phi hành, Xôi Khúc lá chuối, Xôi Bắp dẻo ngọt...
* 🥓 **Topping & Đồ ăn kèm phong phú**: Rắc chà bông (ruốc), hành phi giòn rụm, lạp xưởng, chả lụa, mỡ hành, đậu phộng rang theo đúng yêu cầu từng khách hàng.
* 🎮 **Đồ họa Canvas 2D Retro**: Toàn bộ cảnh quán, quầy xôi, khách đi lại và biểu cảm nhân vật được vẽ trực tiếp trên thẻ `<canvas>` hiệu năng cao, mượt mà trên cả máy yếu.
* 📱 **Tương thích hoàn hảo di động**: Tối ưu vùng chạm, hỗ trợ tai thỏ / thanh trạng thái (Safe-area) và cài đặt thành ứng dụng qua PWA.
* ⚙️ **Tùy chỉnh âm thanh & Trạng thái**: Lưu cài đặt âm lượng BGM, hiệu ứng SFX và tiến trình ngày chơi vào bộ nhớ máy.

---

## 📁 Cấu Trúc Thư Mục

```text
tiem-xoi/
├── index.html            # File HTML chính chứa khung Canvas và UI
├── js/
│   └── app.js            # Engine game: xử lý render canvas, âm thanh, logic bán xôi
├── css/
│   └── style.css         # Phong cách giao diện cổ điển, typography và hiệu ứng
├── manifest.webmanifest  # Cấu hình PWA
└── assets/               # Hình ảnh xôi, topping, nhân vật, icon và audio
    ├── img/
    ├── icons/
    └── sfx/
```

---

## 🚀 Hướng Dẫn Khởi Chạy

### Cách 1: Sử dụng VS Code Live Server (Khuyên dùng)
* Mở thư mục dự án trên VS Code.
* Chuột phải vào `tiem-xoi/index.html` và chọn **Open with Live Server**.

### Cách 2: Sử dụng Node.js CLI
```bash
cd tiem-xoi
npx serve .
# hoặc
npx http-server -p 5503
```

### Cách 3: Sử dụng Python Server
```bash
cd tiem-xoi
python -m http.server 5503
```
Mở trình duyệt tại `http://localhost:5503` để thưởng thức game.
