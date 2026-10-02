// Tiệm Mì Cay không còn chuyển nhà: tự gỡ service worker cũ khỏi máy người chơi rồi tải lại trang
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(self.registration.unregister().then(()=>self.clients.matchAll()).then(cs=>cs.forEach(c=>c.navigate(c.url))))});
