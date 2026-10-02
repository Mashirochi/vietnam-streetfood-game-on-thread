# 🏪 Bộ Sưu Tập Game Mô Phỏng Ẩm Thực Đường Phố Việt Nam

Bộ sưu tập các tựa game Web / Progressive Web App (PWA) mô phỏng kinh doanh quán ăn, quán nước vỉa hè Việt Nam đặc sắc, đi kèm hệ thống **Server Lưu Trữ Đám Mây (Cloud Save)** dùng chung.

---

## 🎮 Danh Sách Các Tựa Game Trong Dự Án

| Tựa Game | Thư Mục | Thể Loại & Điểm Nổi Bật | Hướng Dẫn Chi Tiết |
| :--- | :--- | :--- | :--- |
| 🧋 **Tiệm Trà Nhỏ** | [`tiem-tra-nho/`](tiem-tra-nho/README.md) | Quản lý quán trà sữa, pha chế topping đường đá, bán online, máy dán nắp tự động. | [Xem README](tiem-tra-nho/README.md) |
| 🥖 **Bánh Mì Bé Xíu** | [`banh-mi/`](banh-mi/README.md) | Quản lý xe bánh mì vỉa hè, kẹp pate, chả lụa, thịt nướng, tích hợp sẵn Mod Menu. | [Xem README](banh-mi/README.md) |
| 🍜 **Tiệm Mì Cay** | [`tiem-my-cay/`](tiem-my-cay/README.md) | Quán mì cay 7 cấp độ, nấu thố mì sôi sùng sục, nhạc nền BGM sống động, báo lỗi tự động. | [Xem README](tiem-my-cay/README.md) |
| 🍚 **Tiệm Xôi Bà Tám** | [`tiem-xoi/`](tiem-xoi/README.md) | Gánh xôi gấc, xôi xéo, xôi khúc truyền thống vẽ trên nền Canvas 2D Pixel Art Retro. | [Xem README](tiem-xoi/README.md) |
| ☁️ **Cloud Server** | [`server/`](server/README.md) | Backend Hono siêu nhẹ hỗ trợ lưu/khôi phục tiến trình qua mã 8 số và ghi log lỗi. | [Xem README](server/README.md) |

---

## 📁 Cấu Trúc Tổng Thể

```text
.
├── tiem-tra-nho/           # 🧋 Game Tiệm Trà Nhỏ (HTML/CSS/JS + PWA)
├── banh-mi/                # 🥖 Game Bánh Mì Bé Xíu (+ Mod Menu tích hợp)
├── tiem-my-cay/            # 🍜 Game Tiệm Mì Cay (+ BGM Music)
├── tiem-xoi/               # 🍚 Game Tiệm Xôi Bà Tám (HTML5 Canvas Engine)
├── server/                 # ☁️ Server Backend (Node.js + Hono Framework)
├── HUONG_DAN_PHUC_DUNG.md  # 📖 Tài liệu kỹ thuật dịch ngược & phục dựng mã nguồn
└── README.md               # 📌 File điều hướng tổng quan dự án
```

---

## 🚀 Hướng Dẫn Khởi Chạy Nhanh

### 1. Khởi Động Server Backend (Dùng chung cho các game)
Server cung cấp API Cloud Save (mã 8 chữ số) và nhận báo cáo lỗi từ các game.

```bash
cd server
npm install    # Chỉ cần chạy ở lần đầu
npm start
# Server sẽ chạy tại: http://localhost:8787
```

---

### 2. Khởi Động & Chơi Từng Game

Mỗi game nằm trong thư mục riêng và có thể chạy độc lập bằng bất kỳ Static Web Server nào:

#### 🔹 Chơi Tiệm Trà Nhỏ:
* **VS Code**: Chuột phải vào `tiem-tra-nho/index.html` chọn **Open with Live Server**.
* **Terminal**: `npx serve tiem-tra-nho -p 5500` -> Mở `http://localhost:5500`

#### 🔹 Chơi Bánh Mì Bé Xíu:
* **VS Code**: Chuột phải vào `banh-mi/index.html` chọn **Open with Live Server**.
* **Terminal**: `npx serve banh-mi -p 5501` -> Mở `http://localhost:5501`

#### 🔹 Chơi Tiệm Mì Cay:
* **VS Code**: Chuột phải vào `tiem-my-cay/index.html` chọn **Open with Live Server**.
* **Terminal**: `npx serve tiem-my-cay -p 5502` -> Mở `http://localhost:5502`

#### 🔹 Chơi Tiệm Xôi Bà Tám:
* **VS Code**: Chuột phải vào `tiem-xoi/index.html` chọn **Open with Live Server**.
* **Terminal**: `npx serve tiem-xoi -p 5503` -> Mở `http://localhost:5503`

---

## ☁️ Cơ Chế Kết Nối Server (Cloud Save & APIs)

Backend (`http://localhost:8787`) hỗ trợ:
* **`POST /save` & `POST /api/save`**: Lưu ván chơi của bất kỳ game nào và tạo mã 8 số.
* **`GET /load?code=...` & `GET /api/load?code=...`**: Khôi phục ván chơi từ mã 8 số.
* **`POST /api/err`**: Tự động nhận log sự cố và crash report từ client.
* **`GET /`**: Báo cáo tình trạng server và số lượng bản sao lưu của từng game.

---

## 🛠️ Công Nghệ Nền Tảng

* **Frontend**: HTML5, CSS3, Modern JavaScript (ES6+), HTML5 Canvas 2D Rendering, Web Audio API, Service Worker / PWA Offline.
* **Backend**: Node.js, [Hono.js](https://hono.dev/) (Siêu nhẹ, tốc độ cao, hỗ trợ cả Node.js và Cloudflare Workers), CORS Middleware.
* **Lưu Trữ**: LocalStorage / IndexedDB trên máy người chơi & `saves.json` / Cloudflare KV trên đám mây.
