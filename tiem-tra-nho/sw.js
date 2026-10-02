// Lưu game vào máy để mở được cả khi không có mạng. Đổi VERSION mỗi lần cập nhật game.
const VERSION = 'trasua-3.11.1';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-180.png', './img/bg.jpg', './img/bg2.jpg', './img/cathead.png', './img/cup.png', './img/faces.webp', './img/ship.webp', './img/star.webp', './img/ic_angry.png', './img/ic_book.png', './img/ic_box.png', './img/ic_calendar.png', './img/ic_chart.png', './img/ic_chartdown.png', './img/ic_chartup.png', './img/ic_clock.png', './img/ic_cupempty.png', './img/ic_cupfull.png', './img/ic_gift.png', './img/ic_hourglass.png', './img/ic_lock.png', './img/ic_money.png', './img/ic_moon.png', './img/ic_pause.png', './img/ic_pearlbowl.png', './img/ic_pen.png', './img/ic_people.png', './img/ic_phone.png', './img/ic_price.png', './img/ic_receipt.png', './img/ic_reload.png', './img/ic_sad.png', './img/ic_set.png', './img/ic_star.png', './img/ic_strawberry.png', './img/ic_teapot.png', './img/ic_tools.png', './img/ic_trash.png', './img/ic_trophy.png', './img/ic_upbulb.png', './img/ic_upchair.png', './img/ic_upcups.png', './img/ic_upmega.png', './img/ic_upsnow.png', './img/ic_warn.png', './img/kho.jpg', './img/lanL.png', './img/lanR.png', './img/lid.png', './img/pattern.jpg', './img/splash2.jpg', './img/stk_berry.png', './img/stk_cloud.png', './img/stk_cup.png', './img/stk_heart.png', './img/stk_leaf.png', './img/stk_pearl.png', './img/stk_star.png', './snd/bell.mp3', './snd/cash.mp3', './snd/levelup.mp3', './snd/m_dong.mp3', './snd/m_he.mp3', './snd/m_thu.mp3', './snd/m_xuan.mp3', './snd/pour.wav', './snd/rain.mp3', './img/brand/b00.png', './img/brand/b01.png', './img/brand/b02.png', './img/brand/b03.png', './img/brand/b04.png', './img/brand/b05.png', './img/brand/b06.png', './img/brand/b07.png', './img/brand/b08.png', './img/brand/b09.png', './img/brand/b10.png', './img/brand/b11.png', './img/brand/b12.png', './img/brand/b13.png', './img/brand/b14.png', './img/brand/b15.png', './img/brand/b16.png', './img/brand/b17.png', './img/brand/b18.png', './img/brand/b19.png', './img/brand/b20.png', './img/brand/b21.png', './img/brand/b22.png', './img/brand/b23.png', './img/brand/b24.png', './img/brand/b25.png', './img/brand/b26.png', './img/brand/b27.png', './img/brand/b28.png', './img/brand/b29.png', './img/brand/b30.png', './img/brand/b31.png', './img/brand/b32.png', './img/brand/b33.png', './img/brand/b34.png', './img/brand/b35.png', './img/brand/b36.png', './img/brand/b37.png', './img/brand/b38.png', './img/brand/b39.png', './img/brand/b40.png', './img/brand/b41.png', './img/brand/b42.png', './img/brand/b43.png', './img/brand/b44.png', './img/brand/b45.png', './img/brand/b46.png', './img/brand/b47.png', './img/brand/b48.png', './img/brand/b49.png'];
self.addEventListener('install', e => {
  // tải từng file, file nào lỗi thì bỏ qua (không làm hỏng cả bộ)
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(FILES.map(f => fetch(f, {cache: 'reload'}).then(r => r.ok ? c.put(f, r) : null).catch(() => null)))));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const q = e.request;
  if (q.method !== 'GET') return;
  const u = new URL(q.url);
  if (u.origin !== location.origin) return; // phông chữ Google… để trình duyệt tự lo
  if (q.mode === 'navigate') {
    // trang game: có mạng thì lấy bản mới, mất mạng thì dùng bản đã lưu
    e.respondWith(fetch(q).then(r => { if (r.ok) { const c = r.clone(); caches.open(VERSION).then(x => x.put('./index.html', c)); } return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  // hình, nhạc: dùng bản đã lưu; chưa có thì tải và chỉ lưu khi tải thành công
  e.respondWith(caches.open(VERSION).then(x => x.match(q, {ignoreSearch: true}).then(hit => hit || fetch(q).then(r => { if (r.ok) x.put(q, r.clone()); return r; }))));
});
