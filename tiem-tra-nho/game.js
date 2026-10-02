window.tsHostOk = () => true;

function ico(n,c){return `<img class="ico${c?' '+c:''}" src="img/ic_${n}.png" alt="" decoding="sync">`}

/* ---------- DATA ---------- */
/* ===== DANH MỤC: [khóa, tên, tên ngắn, màu, hạn dùng (ngày), giá nhập, giá bán, giá mở khóa] ===== */
const ITEMS={};
const mk=(type,g)=>(k,n,sn,c,life,cost,sell,unlock)=>{ITEMS[k]={n,s:sn||n,type,g,c,life,cost,sell,unlock}};
const B=mk('base'),F=mk('flav');
B('tra','Trà sữa','Trà sữa','#c8986a',3,4500,25000,0);
B('matcha','Matcha','Matcha','#8fb866',3,6000,30000,0);
B('hong','Hồng trà','Hồng trà','#b5563c',3,1500,22000,150000);
B('luc','Lục trà','Lục trà','#b9c46a',3,1500,22000,150000);
B('olong','Trà olong','Olong','#a9744a',3,2500,28000,250000);
B('thai','Trà sữa Thái','Thái','#e8894a',3,5000,30000,300000);
F('f_vai','Vải','','#f3dcd4',7,3000,8000,200000);
F('f_dao','Đào','','#f5b66b',7,3000,8000,200000);
F('f_dau','Dâu','','#f07c95',7,3000,8000,200000);
F('f_nho','Nho','','#8e5aa8',7,3500,9000,250000);
F('f_oi','Ổi','','#f4a3a0',1,3000,8000,250000);
F('f_xoai','Xoài','','#f2c14e',7,3500,9000,250000);
F('f_mang','Mãng cầu','','#cfe3b0',1,4000,10000,300000);
F('f_tao','Táo','','#d8e36b',7,3000,8000,220000);
F('f_chanh','Chanh','','#e6e27a',1,1500,5000,120000);
F('f_me','Me','','#9c6b3c',7,2500,7000,200000);
F('f_dua','Dưa gang','','#f6c79a',7,4000,10000,300000);
F('f_choco','Chocolate','','#5b3a29',7,4000,10000,350000);
const TC=mk('top','tc'),TH=mk('top','thach'),FO=mk('top','foam'),PM=mk('top','pm');
TC('tcden','Trân châu đen','TC đen','#2b1d14',1,2000,6000,0);
TC('tcvang','Trân châu hoàng kim','TC h.kim','#e0a526',1,2500,8000,200000);
TC('tcsoi','Trân châu sợi','TC sợi','#6b4a38',1,2500,8000,250000);
TC('popping','Trân châu popping','Popping','#f28fb0',3,3500,9000,300000);
TC('thach','Trân châu trắng','TC trắng','#f4efe4',3,1500,5000,0);
TH('cunang','Thạch củ năng','Củ năng','#9fd49a',3,2000,7000,200000);
TH('thachtc','Thạch trái cây','Trái cây','#f5a0b8',3,2000,6000,200000);
TH('suongsao','Sương sáo','Sương sáo','#1f2a24',3,1500,6000,150000);
TH('thachcf','Thạch cà phê','Cà phê','#5a3a26',3,2000,7000,200000);
FO('cheese','Foam cheese','F.cheese','#f7d35c',2,3500,10000,300000);
FO('fmatcha','Foam matcha','F.matcha','#b6d48f',2,4000,10000,350000);
FO('fsalt','Foam muối','F.muối','#f4efe4',2,3000,9000,300000);
FO('fube','Foam ube','F.ube','#b894d8',2,4500,12000,400000);
PM('pmvien','Phô mai viên','PM viên','#f7d56b',3,4000,10000,350000);
PM('pmtuoi','Phô mai tươi','PM tươi','#fff1c2',3,5000,12000,400000);
PM('thachpm','Thạch phô mai','Thạch PM','#f5e3a0',3,3000,9000,300000);
ITEMS.cup={n:'Ly + ống hút',s:'Ly',type:'supply',life:0,cost:1500,unlock:0};
const BASE_KEYS=Object.keys(ITEMS).filter(k=>ITEMS[k].type==='base');
const FLAV_KEYS=Object.keys(ITEMS).filter(k=>ITEMS[k].type==='flav');
const TOP_KEYS=Object.keys(ITEMS).filter(k=>ITEMS[k].type==='top');
const TGROUPS=[{g:'tc',n:'Trân châu',i:ico('pearlbowl')},{g:'thach',n:'Thạch',i:'🟫'},{g:'foam',n:'Foam',i:'☁️'},{g:'pm',n:'Phô mai',i:'🧀'}];
const SLOW_G=['thach','foam','pm'];
const slowN=o=>o.tops.filter(t=>ITEMS[t]&&SLOW_G.includes(ITEMS[t].g)).length;
const DEF_SELL={L:7000};[...BASE_KEYS,...FLAV_KEYS,...TOP_KEYS].forEach(k=>DEF_SELL[k]=ITEMS[k].sell);
const OLD_NAMES={khoaimon:'Khoai môn',dau:'Sữa dâu',dao:'Trà đào',tctrang:'Trân châu trắng',pudding:'Pudding',kemtrung:'Kem trứng',L:'Phụ thu size L'};
const iname=k=>ITEMS[k]?ITEMS[k].n:(OLD_NAMES[k]||k);
const low=n=>n.toLowerCase().replace('3q','3Q').replace('thái','Thái');
const dname=o=>ITEMS[o.base].n+(o.flav&&ITEMS[o.flav]?' '+low(ITEMS[o.flav].n):'');
const PIECE={thachtc:['#ffffff','#e34b4b','#f39a3a'],thachpm:['radial-gradient(circle,#fffaf0 0 34%,#8a5a3b 40%)']};
const pieceBg=(t,i)=>PIECE[t]?PIECE[t][i%PIECE[t].length]:ITEMS[t].c;
/* ---------- HÌNH TRÁI CÂY + FOAM ---------- */
const FEMO={f_dao:'🍑',f_dau:'🍓',f_nho:'🍇',f_xoai:'🥭',f_tao:'🍏',f_dua:'🍈',f_choco:'🍫'};
const FSVG={
  f_vai:'<circle cx="12" cy="13.5" r="8.5" fill="#d64553"/><g fill="#9e2c38"><circle cx="9" cy="11" r="1"/><circle cx="13" cy="10" r="1"/><circle cx="16" cy="13" r="1"/><circle cx="10.5" cy="15" r="1"/><circle cx="14" cy="17" r="1"/><circle cx="7.5" cy="15.5" r=".9"/><circle cx="12" cy="13" r=".9"/></g><path d="M12 5.5c1-2.5 3.5-3 5-2.5-1 2-3 3-5 2.5z" fill="#5fa84a"/>',
  f_oi:'<circle cx="12" cy="12" r="9.5" fill="#8cc152"/><circle cx="12" cy="12" r="7" fill="#f7a1a0"/><g fill="#fff3d6"><circle cx="12" cy="9" r=".9"/><circle cx="14.6" cy="11" r=".9"/><circle cx="14" cy="14.3" r=".9"/><circle cx="10" cy="14.3" r=".9"/><circle cx="9.4" cy="11" r=".9"/></g>',
  f_mang:'<ellipse cx="12" cy="13.5" rx="8" ry="9" fill="#8fbf5a"/><g fill="none" stroke="#5e8f36" stroke-width="1.1"><path d="M7 11q2 1.5 4 0t4 0 4 0"/><path d="M5.5 14.5q2 1.5 4 0t4 0 4 0 3 0"/><path d="M7 18q2 1.5 4 0t4 0 3 0"/></g><path d="M12 4.5v-2" stroke="#6b4a38" stroke-width="1.6" stroke-linecap="round"/>',
  f_me:'<path d="M3.5 15.5C5 8.5 13 5.5 20.5 8.5c1 .5.8 2.3-.4 2.4C14 10.5 9 12.5 6.5 17.5c-.8 1.4-3.3.7-3-2z" fill="#9a6435"/><g stroke="#6e4322" stroke-width="1" fill="none"><path d="M8 11.8l1.4 2.2"/><path d="M11.5 9.8l1 2.3"/><path d="M15.5 8.8l.6 2.3"/></g>',
  f_chanh:'<circle cx="12" cy="12" r="9.5" fill="#5fae3a"/><circle cx="12" cy="12" r="7.6" fill="#c9ec8a"/><g stroke="#f4fbe6" stroke-width="1.1"><path d="M12 4.6v14.8M4.6 12h14.8M6.8 6.8l10.4 10.4M17.2 6.8L6.8 17.2"/></g><circle cx="12" cy="12" r="1.3" fill="#f4fbe6"/>'
};
function flavIcon(k,sz){sz=sz||22;if(FEMO[k])return `<span class="fic" style="font-size:${Math.round(sz*.9)}px">${FEMO[k]}</span>`;
  if(FSVG[k])return `<svg class="fic" width="${sz}" height="${sz}" viewBox="0 0 24 24" aria-hidden="true">${FSVG[k]}</svg>`;
  return `<span class="dot" style="background:${ITEMS[k]?ITEMS[k].c:'#999'}"></span>`}
const cloudSvg=(c,w,h)=>`<svg width="${w}" height="${h}" viewBox="0 0 26 18" aria-hidden="true"><path d="M7 16.5h12.5a4.5 4.5 0 0 0 .8-8.93A6 6 0 0 0 8.9 6.2 5.2 5.2 0 0 0 7 16.5z" fill="${c}" stroke="rgba(0,0,0,.28)" stroke-width="1"/></svg>`;
function topIcon(k,big){const it=ITEMS[k];if(!it)return '';const b=big?' lg':'';
  if(k==='tcsoi')return `<span class="ti2 soi${b}"><i style="background:${it.c}"></i><i style="background:${it.c}"></i></span>`;
  if(PIECE[k])return `<span class="ti2 g-${it.g}${b}">${(k==='thachtc'?[0,1,2]:[0,0]).map(i=>`<i style="background:${pieceBg(k,i)}"></i>`).join('')}</span>`;
  return it.g==='foam'?`<span class="ti2 g-foam${b}">${big?cloudSvg(it.c,30,21):cloudSvg(it.c,22,15)}</span>`:`<span class="ti2 g-${it.g}${b}"><i style="background:${it.c}"></i><i style="background:${it.c}"></i></span>`}
const UPG=[
  {id:'sealer',n:'Máy dán nắp tự động',d:'Pha đúng món là máy tự dán nắp và giao ly, khách tip thêm 30%',cost:3000000,i:ico('upcups')},
  {id:'sign',n:'Biển hiệu đèn LED',d:'Thêm 20% khách ghé quán',cost:400000,i:ico('upbulb')},
  {id:'seats',n:'Bàn ghế cho khách ngồi',d:'Khách chịu chờ lâu hơn 25%',cost:500000,i:ico('upchair')},
  {id:'ads',n:'Quảng cáo mạng xã hội',d:'Thêm 25% khách ghé quán',cost:600000,i:ico('upmega')},
  {id:'slot4',n:'Mở rộng quầy',d:'Phục vụ cùng lúc 4 khách',cost:800000,i:'🧱'},
  {id:'ac',n:'Máy lạnh',d:'Khách ít chê khi phải chờ',cost:900000,i:ico('upsnow')}
];
const STAFF=[
  {id:'staff1',n:'Nhân viên phụ quầy',d:'Bạn lấy ly, bỏ topping và dán nắp. Nhân viên rót trà, cho hương, đường và đá. Không thuê cùng lúc với nhân viên phụ quầy 2.',cost:500000,wage:'wage1',from:1},
  {id:'staff2',n:'Nhân viên pha chế',d:'Khi có từ 2 khách, nhận trọn đơn của khách chờ lâu nhất và pha hết các ly. Làm quá 22:00 thì trả tăng ca 40k/giờ.',cost:1000000,wage:'wage2',from:30},
  {id:'staffOn',n:'Nhân viên đơn online',d:'Chỉ làm đơn online: nhận trọn đơn và pha hết các ly, mỗi ly khoảng 1 giây. Hiếm khi làm hỏng ly (0,5%), hỏng thì đổ bỏ làm lại.',cost:2000000,wage:'wageOn',from:1,need:()=>!!S.online,needT:'Cần mở đơn online'},
  {id:'staff3',n:'Nhân viên phụ quầy 2',d:'Làm như nhân viên phụ quầy, thêm múc topping. Bạn lấy ly và dán nắp. Không thuê cùng lúc với nhân viên phụ quầy.',cost:750000,wage:'wage3',from:1}
];
const BRAND_COST=5000000;
const BRAND_ICONS=Array.from({length:50},(_,i)=>'b'+String(i).padStart(2,'0'));
/* Màu nền tem + màu chữ tương phản */
const BRAND_BGS=[
  {c:'#ffffff',t:'#5a4030'},{c:'#fde9cf',t:'#7a5030'},{c:'#fcd9e2',t:'#b8406a'},
  {c:'#cdeee2',t:'#2b7d63'},{c:'#a9744e',t:'#fff6ea'},{c:'#3a2f3a',t:'#ffe9c7'},
  {c:'#ffe08a',t:'#8a5a1a'},{c:'#e0cdf2',t:'#6a3fa0'}
];
const BRAND_FRAMES=[{id:'round',n:'Tròn'},{id:'rounded',n:'Bo góc'},{id:'ribbon',n:'Ruy băng'}];
const BRAND_SLOGANS=['Trà sữa mỗi ngày','Ngon từ giọt đầu','Pha bằng cả tim','Ủ trà thật, vị thật','Nhỏ mà có võ','Chill cùng trà sữa'];
const SUGAR=[30,50,70,100], ICE=['Không đá','Ít đá','Đá thường'];
const FACES=['🧑','👩','👨','👧','🧔','👩‍🦰','👵','🧑‍🎓','👦','👱‍♀️','🧑‍💼','👴','👩‍💻','🧑‍🔧','👩‍🎓','👨‍🍳','👩‍🎨','🧑‍🎤','👱','👩‍🦱','👨‍🦱','🧕','👲','🧒','👸','🤵','👷‍♀️','🧑‍🚀','🥷','🧑‍🌾'];
/* khách ngôi sao (tên hư cấu): 30 ngày ghé 1 lần vào ngày ngẫu nhiên, trả gấp 3, luôn 5 sao */
const STAR_TXT={
  kr:{hi:[['안녕하세요! 여기 밀크티가 유명하다고 들었어요.','Xin chào! Nghe nói trà sữa ở đây nổi tiếng lắm.'],['촬영 끝나고 왔어요. 시원한 거 마시고 싶어요!','Quay hình xong mới ghé. Muốn uống gì đó mát mát!']],
    rv:[['진짜 맛있어요! 다음에 멤버들이랑 또 올게요 💜','Ngon thật sự! Lần sau sẽ dẫn cả nhóm tới nữa 💜'],['사장님 너무 친절하세요. 최고예요!','Chủ quán dễ thương quá. Tuyệt nhất luôn!']]},
  th:{hi:[['สวัสดี{p} ได้ยินว่าชานมที่นี่อร่อยมาก','Xin chào, nghe nói trà sữa ở đây ngon lắm.'],['มาเที่ยวเวียดนามครั้งแรก{p}','Lần đầu mình du lịch Việt Nam.']],
    rv:[['อร่อยมาก{p} จะกลับมาอีกแน่นอน','Ngon lắm, nhất định sẽ quay lại.'],['ร้านน่ารักมาก ชานมหอมสุดๆ','Quán dễ thương quá, trà sữa thơm cực kỳ.']]},
  cn:{hi:[['你好！听说这里的奶茶很好喝。','Xin chào! Nghe nói trà sữa ở đây rất ngon.'],['拍完戏过来的，想喝点冰的。','Quay phim xong ghé qua, muốn uống gì đó mát lạnh.']],
    rv:[['太好喝了！下次还会再来的 ❤️','Ngon quá! Lần sau nhất định lại tới ❤️'],['老板人很好，奶茶很香。','Chủ quán dễ thương, trà sữa rất thơm.']]}};
const STARS=[
  {n:'Baek Si-woo',t:'Idol Kpop · NOVA7',l:'kr',m:1,f:0},{n:'Kang Ha-jun',t:'Idol Kpop · STARLIGHT',l:'kr',m:1,f:1},{n:'Yoon Seo-ah',t:'Idol Kpop · MOONBEAM',l:'kr',m:0,f:2},
  {n:'Nong Thanakorn',t:'Diễn viên Thái',l:'th',m:1,f:3},{n:'Nong Praewa',t:'Diễn viên Thái',l:'th',m:0,f:4},{n:'Nong Sirilada',t:'Diễn viên Thái',l:'th',m:0,f:4},
  {n:'Nong Kittiphat',t:'Diễn viên Thái',l:'th',m:1,f:7},{n:'Lâm Tử Hàn',t:'Diễn viên Trung',l:'cn',m:1,f:6},{n:'Liễu Như Yên',t:'Diễn viên Trung',l:'cn',m:0,f:5},{n:'Tô Vân Hi',t:'Diễn viên Trung',l:'cn',m:0,f:5}];
const starLine=(st,kind)=>{const x=rnd(STAR_TXT[st.l][kind]);return [x[0].replace('{p}',st.m?'ครับ':'ค่ะ'),x[1]]};
function starBg(row,e,w,h){return `background-image:url(${IMG}star.webp);background-size:${w*3}px ${h*8}px;background-position:${-e*w}px ${-row*h}px;background-repeat:no-repeat`}
const PERSONA=[
  {o:['Dạ cho em','Chị ơi, cho em','Cho em'],e:[' ạ!',' nha!',' nhé, em cảm ơn!']},
  {o:['Cho em','Dạ cho em','Làm giúp em'],e:[' ạ!',' nha!',' nhé, cảm ơn nha!']},
  {o:['Cho anh','Em ơi, cho anh','Làm cho anh'],e:[' nha em!',' nhé!',' nha, cảm ơn em!']},
  {o:['Cho chị','Em ơi, cho chị','Làm giúp chị'],e:[' nha em!',' nhé!',' nha, cảm ơn em!']},
  {o:['Cho em','Dạ cho em','Bán cho em'],e:[' ạ!',' nha!',' nhé!']},
  {o:['Cho chú','Cháu ơi, cho chú','Làm cho chú'],e:[' nha cháu!',' nhé!',' nha, cảm ơn cháu!']},
  {o:['Cho bà','Cháu ơi, cho bà','Làm cho bà'],e:[' nghen cháu!',' nha con!',' nha, bà cảm ơn!']},
  {o:['Dạ cho em','Cho em','Cho em xin'],e:[' ạ!',' nha!',' ạ, em cảm ơn!']},
  {o:['Dạ cho em','Cho em','Cho em xin'],e:[' ạ!',' nha!',' ạ, em cảm ơn!']}
];
const NM_NU=["An", "Anh", "Ánh", "Bảo Anh", "Bảo Châu", "Bảo Ngọc", "Bích", "Cẩm", "Cát Tường", "Châu", "Chi", "Diệp", "Diệu", "Diễm", "Dung", "Duyên", "Gia Hân", "Giang", "Hà", "Hạ", "Hải Yến", "Hân", "Hằng", "Hạnh", "Hiền", "Hoa", "Hoài", "Hồng", "Huệ", "Hương", "Huyền", "Khánh Linh", "Khánh Vy", "Khuê", "Kiều", "Kim", "Lam", "Lan", "Lan Anh", "Liên", "Linh", "Loan", "Ly", "Mai", "Mai Anh", "Minh Thư", "My", "Mỹ", "Nga", "Ngân", "Nghi", "Ngọc", "Ngọc Hân", "Nguyệt", "Nhã", "Nhàn", "Nhi", "Nhung", "Như", "Oanh", "Phương", "Phương Anh", "Quế", "Quyên", "Quỳnh", "Quỳnh Anh", "Sa", "Tâm", "Thanh", "Thảo", "Thi", "Thơ", "Thu", "Thùy", "Thủy", "Thư", "Thy", "Tiên", "Trà My", "Trâm", "Trang", "Trinh", "Trúc", "Tuyết", "Uyên", "Vân", "Vi", "Việt Hà", "Vy", "Xuân", "Yến", "Ý", "Hoàng Anh", "Thục Anh", "Khả Hân", "Minh Châu", "Tường Vy", "Hồng Nhung", "Thanh Hà", "Thu Trang", "Bích Ngọc", "Ngọc Trâm", "Diễm My", "Thảo Vy", "An Nhiên", "Hạ Vy", "Hải Đường", "Mộc Miên", "Thiên Kim", "Kim Ngân", "Như Ý", "Bảo Vy", "Tú Anh", "Tố Như", "Thanh Trúc", "Phương Linh", "Yến Nhi", "Mỹ Duyên", "Ngọc Diệp", "Quế Anh", "Lệ Quyên", "Hoàng Yến"],NM_NAM=["An", "Bảo", "Bình", "Cường", "Công", "Danh", "Đạt", "Dũng", "Duy", "Dương", "Đăng", "Đông", "Đức", "Gia Bảo", "Hải", "Hào", "Hậu", "Hiếu", "Hiển", "Hòa", "Hoàng", "Huy", "Hùng", "Hưng", "Khang", "Khải", "Khánh", "Khoa", "Khôi", "Kiên", "Kiệt", "Lâm", "Lộc", "Long", "Luân", "Mạnh", "Minh", "Nam", "Nghĩa", "Nguyên", "Nhân", "Nhật", "Phát", "Phong", "Phúc", "Phước", "Quân", "Quang", "Quốc", "Sang", "Sơn", "Tài", "Tâm", "Tân", "Thái", "Thắng", "Thành", "Thiện", "Thịnh", "Thông", "Tiến", "Toàn", "Trí", "Trọng", "Trung", "Tú", "Tuấn", "Tùng", "Văn", "Việt", "Vinh", "Vũ", "Minh Khang", "Gia Huy", "Đức Anh", "Hoàng Nam", "Quốc Bảo", "Thành Đạt", "Minh Quân", "Tuấn Kiệt", "Nhật Minh", "Hải Đăng", "Anh Khoa", "Bảo Long", "Thiên Ân", "Trung Kiên", "Việt Hoàng", "Quang Huy", "Đình Phong"],NM_BE=["Bé Na", "Bơ", "Mít", "Sữa", "Su Su", "Bin", "Tôm", "Cún", "Mèo Mun", "Kem", "Na Na", "Gấu", "Bống", "Bi", "Xoài", "Chuối", "Heo", "Cà Rốt", "Bắp", "Ốc", "Nấm", "Mochi", "Khoai", "Đậu", "Sóc", "Thỏ", "Kẹo", "Bánh Bao", "Cốm", "Gạo", "Nếp", "Tí", "Tèo", "Bo", "Ken", "Ben", "Bông", "Mận", "Dâu", "Chôm Chôm", "Cam", "Quýt", "Mơ", "Táo", "Nho", "Ruby", "Coca", "Pepsi", "Sushi", "Pudding", "Bột", "Mì", "Tủn", "Hạt Tiêu", "Gừng", "Sả", "Bắp Cải", "Củ Cải", "Su Hào", "Xíu"],NM_CHU=["Hùng", "Tâm", "Phong", "Lâm", "Thành", "Dũng", "Sơn", "Bình", "Tư", "Năm", "Sáu", "Bảy", "Tám", "Hai", "Ba", "Lực", "Quý", "Phúc", "Lộc", "Thọ", "Tài", "Nghĩa", "Trung", "Hiếu", "Hậu", "Đức", "Thắng", "Lợi", "Kha", "Minh", "Hòa", "Thuận", "Vĩnh", "Khương", "Tùng", "Bách", "Trường", "Cảnh", "Toàn", "Chiến"],NM_BA=["Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy", "Tám", "Chín", "Mười", "Út", "Lan", "Cúc", "Mai", "Đào", "Hồng", "Huệ", "Sen", "Thơm", "Tý", "Nhàn", "Hạnh", "Phúc", "Xuân", "Thu", "Liên", "Mận", "Na", "Sương", "Hiền", "Tâm"];
const NM_HO=['Nguyễn','Trần','Lê','Phạm','Hoàng','Huỳnh','Phan','Vũ','Võ','Đặng','Bùi','Đỗ','Hồ','Ngô','Dương','Lý','Trương','Đinh','Lâm','Mai'];
function uniqName(gen){const h=S.nameLog||(S.nameLog=[]),used=new Set([...h,...(R&&R.slots?[...R.slots.filter(Boolean),...(R.online||[])].map(c=>c.name):[])]);
  let n=gen();for(let t=0;t<40&&used.has(n);t++)n=gen();h.push(n);if(h.length>380)h.splice(0,h.length-380);return n}
const HN=L=>rnd(NM_HO)+' '+rnd(L);
const PNAME={0:()=>uniqName(()=>Math.random()<.5?rnd(NM_NU):HN(NM_NU)),1:()=>uniqName(()=>Math.random()<.5?rnd(NM_NU):rnd(NM_BE)),3:()=>uniqName(()=>'Chị '+rnd(NM_NU)),
  4:()=>uniqName(()=>Math.random()<.6?rnd(NM_BE):'Bé '+rnd(Math.random()<.5?NM_NU:NM_NAM)),7:()=>uniqName(()=>rnd(NM_NU)),8:()=>uniqName(()=>HN(NM_NU)),
  2:()=>uniqName(()=>Math.random()<.5?'Anh '+rnd(NM_NAM):HN(NM_NAM)),5:()=>uniqName(()=>'Chú '+rnd(Math.random()<.4?NM_CHU:NM_NAM)),6:()=>uniqName(()=>'Bà '+rnd(Math.random()<.3?NM_BA:NM_NU))};
const OPEN=['Cho mình','Em ơi, cho chị','Bán cho anh','Làm giúp mình','Cho em','Cho tui'],ENDS=[' nha!',' nhé!','.',' nha, cảm ơn!',' nhé em!'];
const N_LAST=['Anh','Trâm','Vy','Linh','Hân','Nhi','My','Thảo','Ngân','Trang','Hương','Uyên','Quyên','Hà','Châu','Duyên','Khuê','Yến','Tú','Nam','Huy','Khoa','Phúc','Bảo','Tuấn','Long','Khang','Đạt','Minh','Hiếu','Quân','Thịnh','Sơn','Tài','Vinh','Kiệt','Duy','Lộc','Toàn','Trí','Ngọc','Thư','Giang','Phương','Nga','Loan','Quang','Tâm','Hưng','Phát'];
const N_MID=['Minh','Ngọc','Thu','Gia','Bảo','Khánh','Hoàng','Thanh','Quỳnh','Tuấn','Hải','Phương','Mai','Đức','Kim','Nhật','Tường','Hồng','Diệu','Anh','Thiên','Xuân','Như','Cát'];
const N_NICK=['Bé Na','Bơ','Mít','Sữa','Su Su','Bin','Tôm','Cún','Mèo Mun','Kem','Na Na','Gấu','Bống','Bi','Xoài','Chuối','Heo Hồng','Cà Rốt','Bắp','Ốc','Nấm','Mochi','Tiểu Muội','Khoai','Đậu'];
function genName(){return uniqName(()=>Math.random()<.5?rnd(NM_HO)+' '+rnd(NM_NU):rnd(NM_HO)+' '+rnd(NM_NAM))}
const SAVE='tsShop2', OWNER_SAVE='tsOwner';
/* ===== PHIÊN BẢN GAME: mỗi lần cập nhật, tăng số và thêm một mục lên ĐẦU danh sách ===== */
const GAME_VERSION='3.11';
const CHANGELOG=[
  {v:'3.11',d:'24/09/2026',items:['Hương mua theo chai ở Nâng cấp > Hương: 200k một chai dùng cho 45 ly, hạn 7 ngày kể từ ngày mua. Mua bao nhiêu chai thì 45 ly nhân lên. Hết chai phải mua chai mới, chai quá hạn bị đổ bỏ. Kho không còn nấu hương theo phần','Đơn online Soppi: cần mua tablet (7 triệu, ở Trang bị) thì đơn mới đổ về. Quán đã mở online được tặng sẵn 1 tablet','Đơn online nhận thêm tối đa bằng số chỗ ở quầy: 3 khách, mở rộng quầy thì 4 (tổng 6 hoặc 8 khách). Đơn online khoảng 20% tổng khách. Tài xế chờ tối đa 1 phút 30 giây, có tài xế nam và nữ','Mỗi 30 ngày có 1 đơn lớn Soppi 5–10 ly vào ngày ngẫu nhiên','Nhân viên đơn online (thuê 2 triệu, lương 250k/ngày): chỉ làm đơn online, mỗi ly khoảng 1 giây','Vay ngân hàng tối đa 1 triệu, lãi 25%/năm','Máy dán nắp tự động dán nhanh hơn','Hướng dẫn thêm trang Đường và đá (Cài đặt > Hướng dẫn)','Khách ngôi sao: cứ 30 ngày có 1 idol Kpop hoặc diễn viên Thái, Trung ghé quán vào ngày ngẫu nhiên. Nói tiếng nước mình kèm [Tự động dịch], trả gấp 3 tiền và luôn để 5 sao','Mã sao lưu còn 8 số, mỗi quán một mã riêng không trùng ai. Sao lưu lại vẫn giữ nguyên mã. Khôi phục bằng 8 số cần có mạng, mã dài cũ vẫn dùng được','Tem thương hiệu hiện đủ tên quán. Chọn được kiểu chữ thẳng hàng, cong phía trên hoặc cong phía dưới']},
  {v:'3.10',d:'24/09/2026',items:['Thêm Nhân viên phụ quầy 2 (thuê 750k, lương 150k/ngày): làm như nhân viên phụ quầy, thêm múc topping. Không thuê cùng lúc với nhân viên phụ quầy, thuê người này thì người kia tự nghỉ (gọi đi làm lại không tốn tiền)','Sửa lỗi trên iPhone: sau khi bật bàn phím (trả lời đánh giá, đặt tên quán…) rồi tắt, quầy pha bị thu nhỏ còn nửa màn hình và nút Mở cửa nhảy lên giữa màn hình. Game giờ tự nhận ra và trả về đủ màn hình','Sửa lỗi đánh giá đầy 2.500 thì như đứng yên: bộ nhớ lưu game bị đầy nên đánh giá và tiến trình mới có thể không được lưu. Bản lưu nay gọn hơn và tự dọn bản dự phòng cũ khi thiếu chỗ','Số đánh giá trên đầu màn hình giờ là tổng số đánh giá từ trước tới nay, vẫn tăng khi đã quá 2.500 (tab Đánh giá vẫn giữ 2.500 đánh giá mới nhất)']},
  {v:'3.9',d:'23/09/2026',items:['Nhân viên phụ quầy: bạn lấy ly, bỏ topping và dán nắp (có máy dán nắp tự động thì máy tự dán). Nhân viên rót trà, cho hương, đường và đá. Bỏ topping được ngay trong lúc nhân viên đang pha']},
  {v:'3.8',d:'23/09/2026',items:['Nhân viên pha chế làm nhanh như nhân viên phụ quầy, mỗi ly khoảng 3 giây. Đơn nhân viên đang làm không còn chặn khách mới, bạn luôn có khách để làm','Thông báo lúc bán hiện lâu hơn. Nhân viên làm sai thì báo rõ sai gì (chữ nền đỏ, hiện 5 giây)','Quầy pha chừa khoảng trống ở mép dưới, đỡ bị vuốt nhầm sang app khác trên iPhone','Game tự lưu 3 cuối ngày gần nhất, lấy lại trong Cài đặt > Khôi phục bản tự lưu','Máy chặn lưu tiến trình (ví dụ iPhone bật Chặn tất cả cookie) thì game báo ngay, kèm cách sửa','Mở game trên máy mới: màn hình chào có nút khôi phục bằng mã sao lưu. Cứ 7 ngày game nhắc tạo mã sao lưu một lần']},
  {v:'3.7',d:'23/09/2026',items:['Tới 22:00 quán đóng cửa: không nhận khách mới, nhân viên phụ quầy nghỉ, bạn làm nốt cho khách đang trong quán rồi mới tổng kết. Đơn online ngưng nhận từ 21:30, đơn đang có vẫn phải làm nốt','Nhân viên pha chế nhận trọn đơn của một khách (có ký hiệu trên mặt khách) và làm hết các ly, bạn không cần đụng vào khách đó. Không còn bị trùng ly phải đổ bỏ. Ly nào hết món thì khách nhận các ly còn lại rồi về','Lương nhân viên pha chế 200k/ngày. Làm quá 22:00 thì trả tăng ca 40k/giờ, tính tròn mỗi 30 phút là 20k','Bỏ món khỏi menu trong Nâng cấp: khách không gọi món đó nữa, thêm lại lúc nào cũng được, không mất tiền. Hàng trong kho vẫn giữ, hết hạn thì tự đổ bỏ','Hạn dùng mới: hương ổi, mãng cầu, chanh 1 ngày, các hương khác 7 ngày; foam 2 ngày; phô mai tươi 3 ngày','Hương và topping: để giá trên 20k thì 80% khách không gọi món đó, trên 30k thì không khách nào gọi (xem cảnh báo trong Giá bán)','Lọc đánh giá theo số sao, hoặc chỉ xem đánh giá chưa trả lời','Chọn thời gian bán mỗi ngày 4, 5 hoặc 6 phút trong Cài đặt','Khách tăng đều theo số sao, không còn tăng vọt khi quán lên 4 sao. 10 ngày đầu khách tăng từ từ cho quen tay','Vừa chơi vừa nghe nhạc YouTube, Spotify được','Bộ nhận diện thương hiệu: hình logo sắc nét, không bị cắt, nằm giữa; ô chọn hình chỉ cuộn dọc; tem không còn bị méo, logo hiện rõ trên ly','Giao diện Đêm dịu sáng hơn, dễ nhìn quầy pha','Sửa lỗi tên quán ở trên cùng bị mờ trên iPhone','Bản cài vào máy: sửa lỗi mất hình khách và ly']},
  {v:'3.6',d:'22/09/2026',items:['Sửa lỗi còn dư một vệt kệ nhỏ phía dưới khay đá viên, nước đường khi chưa mở hết foam/phô mai','Đơn từ 3 ly trở lên: chỉ chặn khách mới ghé khi đơn đó còn từ 3 ly chưa giao (trước đây tính cả những ly đã giao xong)','Khách đặt nhiều ly mà quán hết món giữa chừng: nếu đã được giao một số ly trước đó thì đánh giá nhẹ nhàng hơn, có nhắc tới việc đã uống được vài ly','Bộ nhận diện thương hiệu (Nâng cấp > Trang bị, 5 triệu): tự thiết kế tem in lên mọi ly — chọn màu nền, kiểu khung (tròn, bo góc, ruy băng), 1 trong 50 hình dễ thương và khẩu hiệu; tên quán tự hiện lên tem']},
  {v:'3.5',d:'22/09/2026',items:['Sao lưu tiến trình bằng mã (Cài đặt > Sao lưu tiến trình), bị mất thì khôi phục lại từ mã hoặc file','Từ ngày 30, một khách mua được tối đa 5 ly, mỗi ly tới 4 topping','Ly trên 120k (trước là 100k) thì 60% khách bỏ đi','Món nào (trà, hương, topping) để giá trên 50k thì khách chê mắc, quán vắng 80% khách','Thạch 3Q đổi thành trân châu trắng cho đúng hình khay','Máy dán nắp tự động: khi chưa dán được thì báo rõ lý do (dư topping, dư đường, dư đá, sai siro, trà còn ít…)','Sửa lỗi bảng QUẦY TRÀ bị một vệt màu che, số trên khay đang khoá bị lộ ra','Trà để giá từ 40k là đắt, riêng matcha từ 50k','Giá nhập trà mới: matcha 6k, trà sữa 4,5k, trà sữa Thái 5k, trà olong 2,5k, hồng trà và lục trà 1,5k','Không còn đánh giá chê ly đổ, rỉ ra ngoài khi ly không bị tràn; ly không topping hoặc không đá thì khách không nhắc tới topping, đá','Đánh giá khớp với đơn thật: chỉ chê đắt khi quán đang để giá đắt, chỉ chê chờ lâu khi khách thật sự chờ lâu, chỉ chê sai món khi làm sai (đúng chỗ sai)','Quầy pha đổi màu theo màu giao diện chọn trong Cài đặt','Đơn từ 3 ly: khách khác chờ quán làm xong đơn đó mới ghé, không phải đứng chờ lâu','Ngày 1–5 có khách chỉ gọi trà, không topping']},
  {v:'3.4',d:'22/09/2026',items:['Có ngày khách khó ở (dễ rớt sao, nhiều khách hãm), có ngày khách vui vẻ, không báo trước','Sửa lỗi quầy pha bị lệch lên trên, che mất hàng khách và hũ trà','Sửa lỗi trang bị đẩy lên sau khi gõ phím trên iPhone (mở từ màn hình chính)','Sửa lỗi game bị thu nhỏ khi Chrome Android bật chế độ trang web cho máy tính','Sửa lỗi quầy pha bị đen khi mở trong ứng dụng khác (Threads, Instagram…) ở chế độ tối']},
  {v:'3.3',d:'22/09/2026',items:['Khách chờ lâu hơn (khoảng 1 phút), không giảm dần theo ngày','Đánh giá dễ thở hơn: pha đúng và nhanh gần như chắc 5 sao','Hướng dẫn chi tiết từng bước, có hình quầy pha','Chỉ dẫn từng bước cho khách đầu tiên của ngày có cách chơi mới (ngày 1, 6, 30, 60), chỉnh trong Cài đặt','Báo trước và hướng dẫn khi mở đường đá (ngày 6), ly 2 topping, đơn nhiều ly','Máy dán nắp tự động: mua rồi thì pha đúng món là tự dán nắp và giao','Sửa lỗi chữ bị cắt trong Kho','Thuê nhân viên (Nâng cấp > Nhân viên): phụ quầy tự rót trà, bỏ topping, đường và đá, pha chế tự làm cho khách chờ lâu nhất','Tổng kết có thêm lương nhân viên','Máy dán nắp tự động giá 3 triệu, theo giá thực tế','Có thuê nhân viên thì tiền tip là của nhân viên, quán không nhận','Sự kiện mỗi ngày: trời nóng, trời mưa, cuối tuần, học sinh tan học, food reviewer, món hot, nhà cung cấp giảm giá, ngày lễ','Sự kiện tặng tiền: lì xì, trả ví cho khách, giải quán đẹp, nhãn hàng tài trợ…','Nhạc nền và âm thanh: rót trà, múc topping, dán nắp, tiền vào két… (bật tắt trong Cài đặt)','Nhạc nền đổi theo mùa ngoài đời: thu, đông, xuân, hạ (chọn mùa trong Cài đặt)','Tắt nhạc, tắt âm thanh trong Cài đặt hoặc ngay trong bảng Tạm dừng','Nút × trên mặt khách bị hết món để mời khách về','Hơn 500 tên khách và hơn 500 câu đánh giá, không lặp lại','Chọn màu giao diện trong Cài đặt: 12 màu, có nâu cà phê như trước','Khách bước vào quán, khách tới theo giờ cao điểm, có lúc vắng để nghỉ tay','Thông báo lúc bán hiện ở dưới, không che đơn của khách','Giảm lag khi bán và khi rót trà','Vay ngân hàng khi két sắp cạn (dưới 200k), trả góp 10 ngày','Ly trên 100k (gồm hương, topping, size) thì 60% khách bỏ đi','Topping trong ly xếp dày như ly thật','Âm thanh thật: tiếng rót trà, chuông cửa, máy tính tiền, nhạc lên cấp','Nhạc nền mới cho 4 mùa và nhạc riêng cho ngày mưa','Ngày mưa có mưa rơi trên mái hiên quán','Thỉnh thoảng có khách hãm: khách hối, khách đổi ý, khách trả giá, khách khó tính, và hiếm hơn là khách bùng tiền','Nhân viên cho nghỉ thì gọi đi làm lại không tốn tiền thuê','Đơn nhiều ly tự chuyển sang ly kế tiếp']},
  {v:'3.2',d:'21/09/2026',items:['Sửa lỗi ly biến mất khi đang rót trà','Sửa lỗi đồng hồ và hình trên màn hình nhấp nháy','Game chạy mượt hơn, bớt giật khi bán','Màn hình chuẩn bị không còn giật khi bấm thêm bớt món, đổi tab, nấu hàng hay mua món mới']},
  {v:'3.1',d:'21/09/2026',items:['Sửa lỗi hình mèo ở màn hình chào','Hướng dẫn dùng hình khách chibi thay biểu tượng','Đặt tên quán: tiêu đề nằm trên ô nhập','Quầy pha chỉ hiện chai hương và thùng foam đã mua','Tạm dừng có thêm nút Đóng cửa hôm nay (cùng cỡ nút Chơi tiếp) để tổng kết sớm','Mèo ở màn hình chào ngọ nguậy đầu','Trả lời đánh giá của khách ngay trong mục Đánh giá']},
  {v:'3.0',d:'21/09/2026',items:['Quầy pha mới vẽ tay kiểu chibi: hũ trà, khay topping, thùng foam, kệ siro','Nhấn giữ hũ trà để rót, thả tay đúng vạch xanh','Chạm khay, chai, thùng để bỏ vào ly, chạm máy dán nắp để giao','9 khách chibi, vui hay giận tùy ly pha','Giữ lại tất cả đánh giá từ ngày đầu, chia trang 15 đánh giá','Quán mở cửa từ 11:00 đến 22:00, một ngày bán khoảng 4 phút, đủ cho 20–30 đơn','Khay thạch trái cây dùng hình mới']},
  {v:'2.7',d:'21/09/2026',items:['Pha xong ly tự đưa cho khách, không cần chạm vào khách','Ly pha xong mà sai món vẫn bị tính sai và đổ bỏ','Hương vị hiện bằng hình trái cây, foam hiện bằng hình đám mây','Foam cheese màu vàng']},
  {v:'2.6',d:'21/09/2026',items:['Hình topping mới: trân châu sợi, thạch củ năng xanh lá, thạch trái cây 3 màu, thạch phô mai có nhân','Trà hiện bằng hình ly đúng màu','Đánh giá không còn lặp câu, kể cả khi nhiều khách bỏ về liên tiếp','Thêm nhận xét dài, chi tiết như review thật']},
  {v:'2.5',d:'21/09/2026',items:['Đánh giá phong phú hơn, không lặp câu','Bàn pha tự bỏ qua bước Hương hoặc Topping khi khách không gọi','Tổng kết gọn hơn, hướng dẫn nói rõ hạn dùng']},
  {v:'2.4',d:'21/09/2026',items:['Dưới 4 sao: mất 40% khách (ghi trong hướng dẫn)','Chưa nấu trà, topping hoặc chưa có ly thì không mở cửa được','Món hết hàng tự báo hết: khách mới đổi món hoặc bỏ về, không chấm 1 sao','Đánh giá đa dạng hơn: có thêm 2, 3, 4 sao']},
  {v:'2.3',d:'21/09/2026',items:['Nút ⚙️ Cài đặt: hướng dẫn, có gì mới, chơi lại từ đầu','Thanh bước pha gọn hơn','Đưa sai món hoặc đổ ly thì ly bị bỏ, mất luôn nguyên liệu','Tổng kết có thêm số ly làm hỏng']},
  {v:'2.2',d:'21/09/2026',items:['Menu ghi đủ tên món, chia 2 cột','Sửa lỗi game tự phóng to khi chạm nhanh 2 lần hoặc khi gõ số']},
  {v:'2.1',d:'21/09/2026',items:['Màn hình chào khi mở game','Hướng dẫn bằng hình cho người mới, xem lại bất cứ lúc nào ở nút 📖 Hướng dẫn']},
  {v:'2.0',d:'21/09/2026',items:['Thêm trà: hồng trà, lục trà, trà olong, trà sữa Thái','Thêm 12 hương vị pha cùng trà (hồng trà dâu, lục trà vải...)','Topping mới chia 4 nhóm: trân châu, thạch, foam, phô mai','Thạch dừa đổi tên thành thạch 3Q','Bàn pha theo từng bước: Trà + Size, Hương, Topping, Đường, Đá','Đơn có foam, thạch, phô mai được chờ lâu hơn','Kho, Nâng cấp, Giá bán có thêm tab Hương','Món cũ đã bỏ (khoai môn, trân châu trắng, pudding, kem trứng) được hoàn tiền mua']},
  {v:'1.4',d:'21/09/2026',items:['Nâng cấp chia tab Trà, Topping, Trang bị, Online, vuốt trái phải để chuyển','Giá bán chia tab Trà, Topping, Tăng size','Mục mở đơn online chuyển vào Nâng cấp','Bỏ hiển thị cấp độ trên màn hình chính']},
  {v:'1.3',d:'21/09/2026',items:['Chọn loại trà trước, size sau','Bàn pha dùng hình thay chữ','Đánh giá sinh động hơn, có hình ly khách đã uống','Tên khách đa dạng hơn','Bớt chữ ở kho, cấp độ, tạm dừng, cuối ngày','Sửa lỗi nội dung chạy lên thanh trạng thái điện thoại']},
  {v:'1.2',d:'21/09/2026',items:['Hiện số phiên bản trong game','Thêm mục "Có gì mới" để xem lịch sử cập nhật']},
  {v:'1.1',d:'21/09/2026',items:['Chia 4 cấp độ theo ngày: ngày 1–5 đơn giản, ngày 6 thêm đường đá, ngày 30 ly 2 topping, ngày 60 đơn 2–3 ly','Đơn nhiều ly có thời gian chờ dài hơn','Đơn online mở từ ngày 60, cần lời từ 15 triệu và giữ từ 4,0 sao','Tiền hiển thị theo đơn vị k (1k = 1.000đ)']},
  {v:'1.0',d:'21/09/2026',items:['Bản đầu tiên cho bạn bè chơi thử','Tự nấu nguyên liệu, có hạn dùng và đổ bỏ','Tổng kết theo ngày, tuần, tháng kèm thuế hộ kinh doanh','Đặt tên quán, nút tạm dừng, giá riêng từng topping']}
];
/* ===== CẤU HÌNH CỦA CHỦ GAME (người chơi không chỉnh được) ===== */
const DEFAULT_CONFIG={
  ownerPin:'2468',          // mã vào bảng chủ game
  dayMin:4,                 // phút thật cho một ngày bán (11:00–22:00 trong game)
  startMoney:400000,        // vốn ban đầu
  commission:20,            // % phí app giao hàng
  wage1:90000, wage2:200000, wage3:150000,
  wageG1:200000, wageG2:300000, wageOn:250000, // bảo vệ 1 (6tr/tháng), bảo vệ 2 (9tr/tháng), nhân viên đơn online
  bottle:200000, bottleN:45, bottleLife:7, // chai hương: giá, số ly mỗi chai, hạn dùng (ngày)
  tablet:7000000,           // mỗi tablet chạy 1 app giao hàng
  bankMax:1000000, bankRate:25, hotMax:3000000, hotRate:45, // vay ngân hàng / vay nóng: tối đa, lãi %/năm (360 ngày)
  priceCap:120000,          // 1 ly (gồm hương, topping, size) trên mức này thì 60% khách bỏ đi
  teaCap:40000,             // trà (trừ matcha) từ mức này là đắt
  teaCapMatcha:50000,       // matcha từ mức này là đắt
  itemCap:50000,            // 1 món (trà, hương, topping) trên mức này: khách chê mắc, quán vắng 80%
  sizeCap:50000,            // phụ thu size L tối đa; để đúng mức này thì không ai chọn size L, quán vắng 80%
  sizeWarn:20000,
  thiefMoney:100000000, thiefDay:30, thiefLeft:500000, // két trên mức này trước ngày này thì bị trộm, chừa lại thiefLeft           // phụ thu size L trên mức này là đắt, 90% khách không chọn size L
  loanLow:200000,           // két dưới mức này thì cho vay ngân hàng // lương mỗi ngày: nhân viên phụ quầy, nhân viên pha chế
  rent:40000,               // tiền mặt bằng mỗi ngày
  utilBase:20000,           // điện nước cơ bản mỗi ngày
  utilPerUpg:8000,          // điện nước tăng thêm cho mỗi trang bị
  taxThreshold:1000000000,  // ngưỡng doanh thu năm không chịu thuế (hộ kinh doanh, 2026)
  vat:3, pit:1.5,           // % thuế GTGT và TNCN trên doanh thu, nhóm dịch vụ ăn uống
  online:{minProfit:15000000,fromDay:60,minRating:4.0}, // cả 3 điều kiện để mở đơn online; phải giữ đủ sao để tiếp tục nhận đơn
  levels:{l2:6,l3:30,l4:60}, // ngày bắt đầu mỗi cấp độ
  cost:{},                  // giá nhập mỗi phần nguyên liệu
  life:{}                   // hạn dùng (ngày), 0 = không hết hạn
};
Object.keys(ITEMS).forEach(k=>{DEFAULT_CONFIG.cost[k]=ITEMS[k].cost;DEFAULT_CONFIG.life[k]=ITEMS[k].life});
let CFG=JSON.parse(JSON.stringify(DEFAULT_CONFIG));
try{const o=JSON.parse(localStorage.getItem(OWNER_SAVE));if(o){CFG={...CFG,...o,online:{...CFG.online,...o.online},levels:{...CFG.levels,...o.levels},cost:{...CFG.cost,...o.cost},life:{...CFG.life,...o.life}}}}catch(e){}
if(!(CFG.cfgVer>=31)){CFG.dayMin=4}if(!(CFG.cfgVer>=33)){CFG.wage1=90000;CFG.wage2=100000;CFG.cfgVer=33;try{localStorage.setItem(OWNER_SAVE,JSON.stringify(CFG))}catch(e){}}
if(!(CFG.cfgVer>=35)){CFG.priceCap=120000;CFG.itemCap=CFG.itemCap||50000;CFG.sizeCap=CFG.sizeCap||50000;}
if(!(CFG.cfgVer>=37)){CFG.sizeWarn=CFG.sizeWarn||20000;CFG.thiefMoney=CFG.thiefMoney||100000000;CFG.thiefDay=CFG.thiefDay||30;CFG.thiefLeft=CFG.thiefLeft||500000}
if(!(CFG.cfgVer>=36)){CFG.teaCap=CFG.teaCap||40000;CFG.teaCapMatcha=CFG.teaCapMatcha||50000;Object.assign(CFG.cost,{tra:4500,matcha:6000,thai:5000,hong:1500,luc:1500,olong:2500})}
if(!(CFG.cfgVer>=37)){CFG.cfgVer=37;try{localStorage.setItem(OWNER_SAVE,JSON.stringify(CFG))}catch(e){}}
const LIFE_OLD={f_vai:3,f_dao:3,f_dau:3,f_nho:3,f_xoai:1,f_tao:3,f_me:3,f_dua:1,f_choco:3,cheese:1,fmatcha:1,fsalt:1,fube:1,pmtuoi:1};
if(!(CFG.cfgVer>=38)){Object.keys(LIFE_OLD).forEach(k=>CFG.life[k]=ITEMS[k].life);CFG.wage2=200000;CFG.cfgVer=38;try{localStorage.setItem(OWNER_SAVE,JSON.stringify(CFG))}catch(e){}}
/* hương: mua theo chai, giá mỗi ly = giá chai / số ly, hạn dùng theo chai */
FLAV_KEYS.forEach(k=>{CFG.cost[k]=Math.round(CFG.bottle/CFG.bottleN);CFG.life[k]=CFG.bottleLife});
function saveCfg(){try{localStorage.setItem(OWNER_SAVE,JSON.stringify(CFG))}catch(e){}}
const TXT={"great": ["Trà thơm, sữa béo vừa phải, uống một hơi là hết ly", "{mon} ở đây ngon nhất khu này rồi", "Lần đầu ghé mà ưng liền, chắc chắn quay lại", "{top} dai mềm, nấu vừa tới, không bị cứng", "Nhân viên dễ thương, làm nước nhanh ghê", "Ly {mon} đậm vị trà, không bị ngọt gắt", "Uống xong thấy tỉnh cả người, 10 điểm", "Quán nhỏ mà xinh, nước lại ngon", "Trời nóng mà có ly {mon} này là hết sảy", "Giá hợp lý, ly đầy đặn, topping nhiều", "Mình khó tính trà sữa lắm mà quán này qua được", "Mới đi học về ghé làm ly, đã khát ghê", "Đặt đúng mức đường mình thích, quá ưng", "Vị trà thơm tự nhiên, không bị mùi hương liệu", "{top} ở đây ngon hơn mấy chỗ nổi tiếng", "Ghé quán lần thứ ba trong tuần rồi", "Ly to, uống no luôn, rất đáng tiền", "Sữa béo mà không ngấy, uống tới giọt cuối vẫn ngon", "Pha nhanh mà vẫn chuẩn vị, phục ghê", "Đi ngang thấy quán dễ thương nên ghé, không hối hận", "Bạn giới thiệu nên ghé thử, giờ thành khách quen", "Nước ngon, quán sạch, nhạc nghe chill", "{mon} đúng kiểu mình thích, trà đậm sữa thơm", "Hôm nay mệt mà uống ly này vui hẳn lên", "Trân châu nóng hổi mới nấu, thơm mùi đường đen", "Topping cho nhiều, không keo kiệt chút nào", "Uống thử một lần là ghiền luôn", "Quán làm ly nào ra ly đó, ổn định lắm", "Ly trà sữa đúng chuẩn tuổi thơ", "Vị ngọt thanh, uống không bị khát nước", "Đá vừa đủ, không bị nhạt khi để lâu", "Nhân viên nhớ luôn món mình hay gọi, dễ thương ghê", "Cho 5 sao vì quá đỉnh", "Mua mang về cho cả nhà ai cũng khen", "Mê cái mùi trà rang của quán", "Không gian nhỏ xinh, ngồi học bài được", "Ly {mon} này xứng đáng 5 sao", "Trà sữa ngon, giá sinh viên, còn gì bằng", "Nhìn ly nước thôi đã thấy thèm, uống vô còn ngon hơn", "Giờ cao điểm mà vẫn làm nhanh, giỏi quá", "Đây là quán ruột của mình từ giờ", "Uống {mon} với {top} đúng là cặp bài trùng", "Vị ổn định, lần nào ghé cũng ngon như nhau", "Sẽ rủ đám bạn cùng lớp tới", "Ngon xuất sắc, không có gì để chê", "Trà thơm dịu, hậu vị ngọt nhẹ rất dễ chịu", "Quán dán nắp kỹ, mang đi không bị đổ", "Được tặng thêm nụ cười của chị chủ, ngọt hơn cả trà", "Mới thử {mon} lần đầu mà mê luôn", "Ly nước làm cẩn thận, nhìn là biết có tâm", "Ngon tới mức muốn gọi thêm ly thứ hai", "Chấm điểm tuyệt đối cho quán", "Ngọt vừa miệng, béo vừa đủ, thơm đúng chất", "Uống xong muốn quay lại liền ngày mai", "Topping {top} dai giòn sần sật, thích ghê", "Buổi chiều ghé làm ly là chuẩn bài", "Quán dễ thương, nước ngon, giá mềm", "Đậm đà mà không đắng, cân vị tốt", "Ly {mon} size L uống cả buổi chiều", "Thơm mùi trà nhài nhẹ nhàng, mê", "Nước ra đúng giờ, không phải đợi lâu", "Đi làm về ghé mua một ly, bao mệt mỏi bay đi", "Mình uống nhiều quán rồi, quán này top đầu", "Khen nhiệt tình, xứng đáng được biết đến nhiều hơn", "Ly {mon} hôm nay còn ngon hơn lần trước", "Chủ quán dễ thương, còn hỏi mình uống có vừa không", "Mua cho người yêu, bạn ấy khen nức nở", "Không ngờ quán nhỏ mà pha ngon vậy", "Topping tươi, nhìn là biết mới làm trong ngày", "Trà sữa kiểu này uống mỗi ngày cũng được", "Tuyệt vời, cho quán thêm chục sao nếu được", "Mát lạnh, thơm béo, đúng thứ mình cần hôm nay", "Quán gần trường, ngon mà rẻ, học sinh mê lắm", "Lần nào ghé cũng thấy đông, giờ hiểu vì sao rồi", "Uống một ngụm là biết trà pha chuẩn", "{top} mềm dẻo, ăn không bị dính răng", "Hương vị hài hoà, ai uống cũng dễ thích", "Ngồi quán nghe nhạc, uống trà, chill cả buổi", "Vừa miệng từ lần đầu, không cần dặn thêm", "Tới quán nào mình cũng gọi {mon}, ở đây ngon nhất", "Cho quán 5 sao và một cái like thật to", "Mẹ mình không uống trà sữa mà uống ở đây khen ngon", "Mua về văn phòng, cả phòng tranh nhau uống", "Nhân viên tư vấn món rất có tâm", "Uống vào thấy yêu đời hơn hẳn", "Cảm ơn quán vì ly nước ngon", "Mình sẽ quay lại thử hết menu", "Trà sữa quán này làm mình quên luôn quán cũ", "Ly nước đẹp, chụp hình sống ảo cũng xinh", "Chuẩn vị trà sữa truyền thống, đúng gu", "Ngon, nhanh, sạch sẽ, đủ cả ba", "Không cần review nhiều, cứ tới uống là biết", "Hôm nay đổi món thử {mon}, quyết định đúng", "Cực kỳ hài lòng từ ly nước tới thái độ phục vụ", "Uống ở đây một lần là nhớ hoài", "Trà không bị chát, sữa không bị lợ", "Đá viên tròn đẹp, tan chậm, nước không bị nhạt", "Đỉnh của chóp", "Ngon tới mức mình viết review liền khi đang uống", "Giữa trưa nắng uống ly này mát cả ruột gan", "Lượng đường vừa khéo, không cần chỉnh gì", "Thích cách quán gói ly, cẩn thận lắm", "Quán mở nhạc hay, nước ngon, sẽ ghé thường xuyên", "Ngon và rẻ hơn mấy chuỗi lớn", "Mới mở mà đã ngon vậy, chúc quán đông khách", "Nói chung là mê, không có gì để chê", "Uống cùng bạn thân, hai đứa đều gật gù khen", "Cái vị trà này làm mình nhớ quê", "Không gian ấm cúng, giống ở nhà", "Mua ba ly cho cả nhóm, ai cũng khen", "Tuần nào cũng phải ghé một lần", "Ly {mon} hôm nay cứu cả ngày của mình", "Đậm, thơm, béo, đủ cả", "Cảm giác được chăm chút từng ly", "Uống xong vẫn còn thơm miệng lâu", "Trân châu đen bóng, dẻo thơm, ăn cuốn", "Rất đáng tiền, không có gì phải nghĩ", "Quán nhỏ mà có võ", "Làm nhanh gọn, giao đúng món, ưng", "Mình chọn ít đường mà vẫn đủ ngọt, khéo ghê", "Ly trà ngon nhất tuần này", "Hôm nào buồn là ghé quán uống ly cho vui", "Rủ crush đi uống, crush khen quán xinh", "Cảm ơn nhân viên đã làm lại đúng ý mình", "Chắc chắn là quán quen mới của mình", "Trà sữa ở đây làm mình hết bị ngán ngọt", "Uống một ly năng lượng cả buổi chiều", "Đúng gu từ vị trà tới độ béo", "Ly nước sạch sẽ, dán nắp chắc chắn", "Ngồi đợi chưa tới 5 phút đã có nước", "Quán bán bằng cái tâm, cảm nhận rõ luôn", "Không sợ uống bị đau bụng vì nguyên liệu sạch", "{mon} vừa miệng, {top} ngon, 10 trên 10", "Mê luôn cái cách nhân viên chào khách", "Quán này phải nổi tiếng mới đúng", "Ngon tới nỗi mình rủ cả gia đình tới", "Đang giảm cân mà vẫn phải ghé", "Xứng đáng là quán trà sữa yêu thích", "Quá tuyệt cho một buổi chiều cuối tuần", "Nhỏ xinh mà chất lượng, ủng hộ dài dài", "Uống ly này rồi quên mấy quán khác luôn", "Mình đã tìm được chân ái trà sữa", "Khách quen rồi mà lần nào cũng thấy ngon", "Không gian thơm mùi trà, vào là thấy dễ chịu", "Pha chế đẹp mắt, nhìn cũng vui", "Chưa từng thất vọng lần nào", "Ngon hơn mong đợi rất nhiều", "Giá tốt mà chất lượng như quán sang", "Mình cho 5 sao không chút đắn đo", "Món mới ra mà làm rất chuẩn", "Tối nào đi dạo cũng ghé mua một ly", "Ngon quá nên mình mua thêm ly mang về", "Mỗi lần uống là một lần thấy vui", "Ly nước làm mình mỉm cười cả buổi", "Quán nhỏ xinh như tiệm trong phim", "Ngon đến mức muốn xin công thức", "Thơm lừng từ lúc mở nắp", "Một ly là đủ vui cả ngày", "Trà ngon, người dễ thương, quán đáng yêu", "Uống rồi mới biết trà sữa ngon là thế nào", "Ghé một lần, nhớ cả tuần", "Mình chấm quán này điểm mười", "Hương trà thoang thoảng, rất dễ chịu"], "ok": ["Ngon, nhưng mình thấy hơi ngọt một chút", "Uống ổn, lần sau thử món khác", "{mon} khá ngon, {top} hơi ít", "Vị ổn áp, giá hợp lý", "Ngon nha, chỉ là đá hơi nhiều", "Khá ưng, sẽ ghé lại", "Tạm ổn, cho 4 sao", "Nước ngon, quán hơi nhỏ", "Trà thơm, sữa hơi nhạt so với mình", "Được, nhưng mong quán có thêm món mới", "Uống được, giá chấp nhận được", "Ngon, nhưng lần sau mình sẽ chọn ít đường hơn", "Khá ổn cho một ly trà sữa bình dân", "{top} ngon, trà hơi nhạt xíu", "Vị dễ uống, không có gì để chê nhiều", "Nhân viên thân thiện, nước ổn", "Ly hơi nhỏ so với mình nghĩ, nhưng ngon", "Ngon, chờ hơi lâu chút xíu thôi", "Khá ngon, cải thiện chút nữa là 5 sao", "Ổn định, lần nào uống cũng giống nhau", "Mình thích, nhưng bạn mình thấy hơi ngọt", "Uống vui miệng, giá ok", "{mon} được, chưa tới mức mê", "Nước ngon, chỗ để xe hơi chật", "Ngon nhưng topping hơi mềm", "Vị trà ổn, sữa hơi béo với mình", "Tạm hài lòng, sẽ ghé thử thêm", "Mua mang đi, về nhà uống vẫn ngon", "Ổn, đúng như mình mong đợi", "Được đấy, cho quán 4 sao khích lệ", "Ngon, mong quán giữ phong độ", "Không quá xuất sắc nhưng dễ uống", "Vị ngọt vừa, trà hơi nhạt", "Nhìn chung là ổn, đáng thử", "Ngon, nhưng quán nên có thêm size nhỏ", "Uống tạm được, không có gì đặc biệt lắm", "Ly nước ổn, phục vụ nhanh", "Mình thích {top} hơn là trà", "Ngon, hơi đông nên phải chờ chút", "Quán xinh, nước khá ngon", "Vừa miệng, nhưng đá tan hơi nhanh", "4 sao vì còn chờ hơi lâu", "Khá ngon, giá mềm", "Trà ổn, lần sau thử thêm topping khác", "Uống được, sẽ quay lại khi đi ngang", "Ngon vừa, hợp để uống giải khát", "Nhân viên hơi bận nhưng vẫn vui vẻ", "Ổn so với giá tiền", "Ly {mon} ổn, mong có thêm hương vị lạ", "Ngon, mình sẽ giới thiệu bạn bè", "Chưa đến mức ghiền nhưng ổn", "Vị hơi nhạt, mình phải chọn thêm đường", "Uống ổn, không bị đau bụng", "Khá ổn cho buổi trưa", "Đồ uống ổn, không gian dễ chịu", "Ngon nhưng ước gì topping nhiều hơn", "Tạm được, sẽ thử lại lần nữa", "Vị ổn, lần sau thử trà khác xem sao", "Nước ngon, ống hút hơi nhỏ", "Được, nhưng mình thích béo hơn chút", "Ngon lành, giá sinh viên", "Uống ổn, nhân viên dễ thương", "Khá hài lòng với ly {mon} hôm nay", "Ok, không chê được gì nhiều", "Ngon, 4 sao vì hơi ngọt", "Vị trà dịu, hợp người mới uống", "Ổn, chỉ là đợi lâu một xíu", "Mình sẽ quay lại thử {top}", "Uống được, không quá đặc sắc", "Ngon, nhưng quán hơi ồn", "Tạm ổn, mong quán thêm chỗ ngồi", "Được, nhìn chung là vui", "Khá ngon, chưa phải xuất sắc", "Ổn áp, đi ngang sẽ ghé", "Vị ổn, ly hơi ít đá như mình muốn", "Ngon, lần sau mình gọi size L", "Trà sữa ổn, giá phải chăng", "Được, hợp với buổi chiều", "Uống ngon, nhưng phải đợi xếp hàng", "Cho 4 sao, còn chỗ để cải thiện", "Ngon ở mức vừa phải"], "meh": ["Bình thường, không có gì đặc biệt", "Hơi ngọt so với khẩu vị mình", "Trà hơi nhạt, uống không rõ vị", "{mon} tạm được thôi", "Đá nhiều quá, uống một lúc là nhạt", "Uống được, nhưng chắc không quay lại", "Topping hơi ít so với giá", "Cũng thường thôi, chưa thấy gì nổi bật", "{top} hơi mềm, không được dai", "Vị hơi lạ, chưa quen lắm", "Ly hơi nhỏ, uống vài ngụm là hết", "Sữa hơi loãng, không béo như mình nghĩ", "Tạm chấp nhận, mong quán cải thiện", "Uống một lần biết vậy thôi", "Trà hơi đắng hậu vị", "Không tệ nhưng cũng không ngon", "Hơi phí tiền một chút", "Chưa hợp khẩu vị lắm", "Vị trà không rõ, toàn vị đường", "Nước ổn nhưng phải đợi lâu", "Mình nghĩ quán nên nấu {top} kỹ hơn", "3 sao, bình thường", "Không có gì để khen cũng không có gì để chê", "Quán hơi nóng, ngồi không thoải mái", "Uống được, nhưng mình có lựa chọn tốt hơn", "Vị ngọt gắt, uống xong khát nước", "Topping bị lạnh cứng", "Trà hơi chát, sữa lại ít", "Chắc hôm nay quán pha vội", "Mong quán cải thiện vị trà", "Ly nước hơi đổ ra ngoài khi nhận", "Không như review trên mạng", "Tạm thôi, không quá ấn tượng", "Giá này mình mong ngon hơn", "Uống nửa ly thì ngán", "Hương liệu hơi nồng", "Đường hơi nhiều dù đã dặn ít", "Lần trước ngon hơn lần này", "{mon} không đậm như mong đợi", "Được cái nhanh, còn vị thì bình thường", "Quán cần thêm chỗ ngồi", "Vị hơi nhạt nhẽo", "Mình không ấn tượng lắm", "Tạm được cho một lần thử", "Không tệ, nhưng chưa đủ để quay lại", "Uống tạm để giải khát thôi", "Hơi thất vọng so với kỳ vọng", "Cần cải thiện độ béo của sữa", "{top} nấu chưa tới", "Nước ổn, thái độ nhân viên hơi vội"], "bad": ["Không hợp khẩu vị, uống không hết", "{top} bị cứng như để từ hôm qua", "{mon} không như mong đợi chút nào", "Vị lạ quá, không thích", "Trà bị đắng, sữa loãng", "Uống xong hơi mệt bụng", "Tiếc tiền ghê", "Ly nước nhạt như nước lã", "Ngọt quá mức, uống không nổi", "Mùi trà bị khét", "Không quay lại nữa", "Topping ít mà còn dở", "Thất vọng với ly nước hôm nay", "Đá tan hết, nước nhạt thếch", "Vị hương liệu nồng quá", "Mình phải bỏ nửa ly", "Không đáng với giá tiền", "Sữa có vị lạ, không yên tâm", "Mong quán xem lại chất lượng", "Lần đầu cũng là lần cuối", "{top} bị chua, không ăn được", "Uống không ra vị trà", "Ly nước bị rỉ ra ngoài, dính hết tay", "Không ngon như lời bạn giới thiệu", "Tệ hơn mình nghĩ nhiều", "Pha ẩu, vị không đều", "Hơi buồn vì ly nước này", "Không khuyến khích ai thử", "Trân châu bị nát", "Vị đắng khó chịu ở cuối"], "wait": ["Ngon nhưng chờ hơi lâu", "Đông khách quá, đợi mỏi chân", "Nước ngon, mà đứng đợi lâu quá", "Làm chậm xíu, bù lại {mon} ngon", "Giờ cao điểm hơi lâu nha quán", "Mong quán thêm người vào giờ đông", "Chờ gần mười phút mới có nước", "Nước ngon nhưng tốc độ cần cải thiện", "Đợi hơi lâu nên đá tan bớt", "Trừ một sao vì chờ lâu", "Lần sau chắc ghé giờ vắng", "Ngon, nhưng đứng chờ nắng quá", "Quán một mình pha nên hơi đuối", "Đợi lâu nhưng cũng đáng", "Khách tới sau được làm trước, hơi buồn", "Ngon, chỉ tiếc là phải đợi", "Nước ra chậm, mong quán nhanh tay hơn", "Chờ lâu mà ly nước vẫn ổn", "Hôm nay quán đông quá, đợi hoài", "Mình đợi hơi lâu, còn lại ok", "Nhân viên cố gắng rồi nhưng đông quá", "Chờ mãi mới tới lượt, may mà nước ngon", "Nếu nhanh hơn thì 5 sao", "Đợi lâu tới mức suýt bỏ về", "Giờ tan học quán đông kinh khủng", "Pha kỹ nên hơi lâu, chấp nhận được", "Chờ cũng lâu, nhưng thái độ nhân viên tốt", "Mong quán mua thêm máy móc cho nhanh", "Đợi nước lâu hơn uống nước", "Nước ngon, thời gian chờ thì chưa"], "timeout": ["Đợi mãi không ai làm, bỏ về", "Chờ lâu quá, đi quán khác luôn", "Đứng cả buổi không tới lượt", "Không ai để ý mình, về luôn", "Chờ muốn mọc rễ luôn", "Order xong không thấy nước đâu", "Trễ giờ học nên không đợi nổi", "Hết kiên nhẫn, bỏ về tay không", "Đứng đợi mỏi chân mà vẫn chưa có nước", "Quán đông mà làm chậm quá", "Chờ gần hai mươi phút, thôi khỏi", "Mất thời gian ghê, lần sau không ghé", "Gọi hai ba lần vẫn chưa được làm", "Bỏ về vì chờ lâu quá", "Hẹn bạn mà đợi nước trễ luôn giờ hẹn", "Chờ hoài không thấy, buồn ghê", "Quán làm không kịp, khách phải về", "Tiếc thời gian đứng chờ", "Đứng xếp hàng mà hàng không nhúc nhích", "Mình về trước khi được phục vụ", "Đợi lâu tới mức hết thèm luôn", "Chờ mãi rồi đi mua chỗ khác", "Quán cần thêm người phụ", "Không đợi nổi nữa", "Đứng nắng chờ lâu quá, về thôi", "Nhân viên cứ lo ly khác, quên mình", "Mất nửa tiếng mà không có ly nào", "Thất vọng vì chờ quá lâu", "Hàng dài mà làm chậm, bỏ về", "Tới giờ đi làm rồi, không chờ được"], "wrong": ["Làm sai món, phải đổi lại", "Gọi một đằng ra một nẻo", "Kêu {mon} mà đưa nhầm món khác", "Quán nhầm đơn, lần sau cẩn thận nha", "Bị làm sai, hơi buồn", "Dặn ít đường mà đưa ly ngọt lịm", "Sai topping, phải chờ làm lại", "Đưa nhầm ly của người khác", "Mình dặn kỹ mà vẫn làm sai", "Nhân viên cần tập trung hơn", "Sai size, mình gọi size khác", "Làm lộn món, mất thời gian ghê", "Đưa sai mà không xin lỗi", "Ly bị thiếu topping", "Mong quán đọc kỹ đơn hơn", "Lần thứ hai bị làm sai rồi", "Kêu không đá mà đưa đầy đá", "Sai vị, uống không đúng món mình gọi", "Làm lại lần hai mới đúng", "Nhầm món làm mình trễ hẹn"], "soldout": ["Quán hết % rồi, tiếc ghê", "Tới mua mà hết %, chuẩn bị nhiều hơn nha", "Hết % sớm quá", "Muốn uống % mà hết mất tiêu", "Tới nơi mới biết hết %", "Chạy xe cả đoạn tới mà hết %", "Quán nên nấu thêm %", "Mới trưa đã hết %, buồn ghê", "Lần sau tới sớm hơn vậy, hết % rồi", "Thèm % mà quán hết, đành về", "Hết % nên mình đổi ý về luôn", "Mong quán chuẩn bị đủ %", "Quán vui vẻ báo hết %, cũng dễ chịu", "Hết món mình thích, hơi tiếc", "Tới trễ nên hết %, không sao lần sau ghé", "Hết % hoài, lần thứ hai rồi", "Đi cả nhóm mà hết %, cả đám về", "Quán xin lỗi vì hết %, thôi lần sau", "Tiếc ghê, % hết rồi", "Mình sẽ quay lại khi có %"], "soldoutPartial": ["Nhóm mình gọi nhiều ly, được uống mấy ly rồi mới hết %", "Ly đầu ngon lành, tiếc là hết % nên ly sau phải bỏ", "Được phục vụ trước mấy ly, đến lượt cuối thì hết %", "Uống được nửa đơn thì quán báo hết %", "Đơn nhiều ly, quán ráng làm được kha khá rồi mới báo hết %", "Tiếc là chưa đủ ly vì hết %, nhưng mấy ly đã có cũng ổn", "Được vài ly trước khi hết %, coi như đỡ tiếc", "Hết % giữa chừng đơn, may là được uống trước vài ly", "Ly đầu ngon, chỉ tiếc đơn không đủ vì hết %", "Quán báo hết % sau khi đã đưa được mấy ly, cũng thông cảm được", "Không đủ % cho cả đơn, nhưng ít nhất được uống vài ly", "Được ly đầu rồi mới nghe hết %, hơi tiếc cho phần còn lại", "Nhóm đông người, chỉ đủ % cho một nửa đơn thôi", "Uống dở đơn thì hết %, đành chia nhau mấy ly có sẵn", "Đơn nhiều ly mà quán hết % giữa chừng, thông cảm vì cũng được uống vài ly rồi"], "soldoutOnl": ["Đặt app mà quán báo hết %, bị huỷ đơn","Order qua app xong mới biết hết %, tiếc ghê","Đặt giao hàng mà quán hết %, đành đặt chỗ khác","Chờ đơn một hồi thì quán huỷ vì hết %","App vẫn hiện % mà quán lại hết, nên cập nhật menu nha","Đặt online bị huỷ vì hết %, hơi buồn","Quán nên tắt món % trên app khi hết hàng","Đơn bị huỷ giữa chừng vì hết %, lần sau đặt sớm hơn","Thèm % mà đặt app không được, quán báo hết","Quán huỷ đơn lịch sự, báo hết %, thôi lần sau","Đặt ship trà sữa mà hết %, đổi quán khác vậy","Quán hết % nên huỷ đơn, mong quán nhập thêm"], "refused": ["Quán không bán cho mình, hơi buồn", "Bị từ chối, lần sau không ghé", "Tự nhiên không bán, kỳ ghê", "Đứng chờ rồi bị từ chối", "Không hiểu sao quán mời về", "Quán bảo không làm được món mình gọi", "Mất công ghé mà không mua được", "Chưa kịp gọi đã bị mời về", "Hơi hụt hẫng vì bị từ chối", "Quán từ chối khéo, nhưng vẫn buồn", "Không mua được gì, đành về", "Mong quán giải thích rõ hơn", "Bị mời về dù đã chờ khá lâu", "Quán lịch sự nhưng mình vẫn tiếc", "Lần sau chắc gọi món khác"], "late": ["Tài xế chờ lâu quá, nước nhạt hết", "Giao trễ, lần sau đặt quán khác", "Đặt app mà chờ gần tiếng", "Shipper phải đợi quán lâu quá", "Tới tay thì đá tan hết rồi", "Đơn làm chậm, tài xế huỷ luôn", "Đặt online mà mãi không thấy giao", "Chờ đơn lâu tới mức hết thèm", "Quán nên ưu tiên đơn online hơn", "Giao trễ, trà sữa nhạt thếch", "App báo quán đang chuẩn bị cả buổi", "Đơn bị huỷ vì quán làm chậm", "Tài xế nói đợi quán lâu lắm", "Đặt lúc trưa mà chiều mới tới", "Mình không đặt quán này qua app nữa", "Trễ quá nên mình huỷ", "Đặt về văn phòng mà trễ mất giờ nghỉ", "Đơn online bị bỏ quên", "Nước tới nơi không còn lạnh", "Mong quán tăng tốc cho đơn giao hàng"], "cheap": ["Giá rẻ mà ngon, quá hời", "Giá sinh viên, chất lượng xịn", "Rẻ vậy mà ly to, ủng hộ dài dài", "Tiền này mà ngon vầy là quá được", "{mon} rẻ bất ngờ, ghé hoài", "Giá mềm hơn mấy quán xung quanh", "Rẻ mà topping nhiều, quá hời", "Học sinh như mình uống mỗi ngày được", "Giá dễ thương như chủ quán", "Rẻ mà không hề dở", "Đáng đồng tiền bát gạo", "Mua ba ly mà chưa tới trăm nghìn", "Giá tốt nhất khu này", "Rẻ bất ngờ, ngon bất ngờ", "Giá hạt dẻ, chất lượng hạt kim cương", "Ví mỏng vẫn uống được thoải mái", "Giá này mà có {top} ngon vậy là quá được", "Quán bán giá tâm lý ghê", "Uống rẻ mà vẫn ngon, mê", "Túi tiền sinh viên cảm ơn quán", "Giá quá hợp lý, sẽ ghé thường", "Rẻ hơn mong đợi, ngon hơn mong đợi", "Giá vậy mà ly to đầy", "Mua nhiều ly cho cả lớp vẫn không tốn", "Chất lượng vượt xa giá tiền"], "pricey": ["Giá hơi chát so với chất lượng", "Đắt quá, chắc không quay lại", "{mon} ngon mà giá cao quá", "Giá này thì mong ly to hơn", "Ví mình khóc rồi", "Giá cao hơn mấy quán gần đây", "Ngon nhưng không đáng giá này", "Topping tính tiền hơi mạnh tay", "Giá ngang quán lớn mà ly nhỏ hơn", "Giảm giá chút là mình ghé thường", "Hơi đắt cho một ly trà sữa", "Mong quán xem lại bảng giá", "Giá này chỉ uống thỉnh thoảng thôi", "Size L tính thêm hơi nhiều", "Học sinh uống giá này hơi khó", "Tiền ly này mua được hai ly quán khác", "Ngon nhưng ví mỏng quá", "Giá hơi cao so với khu dân cư", "Đắt mà topping ít", "Mong có khuyến mãi cho khách quen", "Giá hơi làm mình chùn tay", "Uống ngon nhưng tính ra hơi đắt", "Thấy giá xong muốn đổi ý", "Nên có size nhỏ giá mềm hơn", "Đắt xắt ra miếng thì còn chịu, đằng này bình thường"]};
const PARTS={
  great:[['{mon} thơm lừng','{mon} đậm vị','Trà thơm','Vị vừa miệng','{top} dai giòn','{top} ngon xỉu','Ly {mon} mát lạnh','Nước ngon','Uống đã khát','{mon} chuẩn vị','Ngọt thanh dễ uống','Mới thử {mon}'],
         ['nhân viên dễ thương','làm nhanh ghê','sẽ quay lại','ghiền luôn rồi','10 điểm không có nhưng','giá hợp lý','quán xinh xắn','rủ bạn tới liền','uống hoài không chán','đáng tiền lắm','mai ghé tiếp','chấm điểm tuyệt đối']],
  ok:[['Ngon','Uống ổn','{mon} khá ngon','Vị ổn áp','Ngon nha','{top} được','Khá ưng'],
      ['nhưng hơi ngọt','nhưng {top} hơi ít','lần sau thử món khác','sẽ ghé lại','giá ok','đá hơi nhiều xíu','chờ cũng hơi lâu','mong có thêm món mới']],
  meh:[['Bình thường','Tạm được','{mon} hơi nhạt','Hơi ngọt so với mình','Cũng thường thôi','{top} hơi mềm'],
       ['không có gì đặc biệt','chắc không quay lại','{top} hơi ít','mong quán cải thiện','uống một lần biết thôi','giá này hơi phí']],
  bad:[['Không hợp khẩu vị','{top} hơi cứng','{mon} không như mong đợi','Vị lạ quá','Trà bị đắng'],
       ['uống không hết','hơi thất vọng','không quay lại đâu','tiếc tiền ghê']],
  wait:[['Ngon nhưng chờ hơi lâu','Đợi hơi lâu','Giờ cao điểm hơi chậm','Đông khách quá','Chờ muốn mỏi chân'],
        ['bù lại {mon} ngon','lần sau làm nhanh hơn nha','cũng đáng chờ','mong quán thêm người','nước vẫn ngon']],
  timeout:[['Đợi mãi không ai làm','Chờ lâu quá','Đứng cả buổi không tới lượt','Không ai để ý mình','Chờ muốn mọc rễ','Xếp hàng mỏi chân','Đợi gần chục phút','Quán đông mà làm chậm','Gọi món xong không thấy đâu','Chờ hoài không có nước'],
            ['bỏ về luôn','đi quán khác','thôi khỏi uống','hết kiên nhẫn','lần sau không ghé','buồn ghê','mất hứng luôn','về tay không','tiếc thời gian','quá thất vọng']],
  wrong:[['Làm sai món','Gọi một đằng ra một nẻo','Kêu {mon} mà đưa nhầm','Quán nhầm đơn','Đưa sai ly','Làm lộn topping'],
         ['phải chờ làm lại','lần sau cẩn thận nha','hơi bực','mất thời gian ghê','không vui lắm','nhân viên cần tập trung hơn']],
  cheap:[['Giá rẻ mà ngon','Giá sinh viên','Rẻ bất ngờ','{mon} giá mềm','Ly to mà rẻ','Giá dễ thương'],
         ['quá hời','ủng hộ dài dài','chất lượng xịn','mai rủ bạn tới','đáng đồng tiền','ghé hoài luôn']],
  soldout:[['Quán hết %','Tới mua mà hết %','Hết % sớm quá','Muốn uống % mà hết','Tới nơi mới biết hết %'],
           ['tiếc ghê','chuẩn bị nhiều hơn nha','lần sau tới sớm vậy','buồn xíu','đành uống món khác','hụt hẫng ghê']],
  soldoutPartial:[['Được vài ly đầu ngon lành','Uống dở đơn thì hết %','Nhóm mình chỉ đủ % cho một nửa','Ly đầu ổn, tới lượt sau thì hết %','Quán làm được kha khá ly rồi mới hết %'],
           ['tiếc là chưa đủ đơn','cũng đỡ tiếc phần nào','đành chia nhau vậy','thông cảm được','mong quán chuẩn bị dư ra']],
  soldoutOnl:[['Đặt app mà quán hết %','Đơn online bị huỷ vì hết %','Order qua app mới biết hết %','Quán báo hết % sau khi nhận đơn'],
           ['tiếc ghê','đành đặt quán khác','mong quán cập nhật menu','lần sau đặt sớm hơn','hơi buồn']],
  refused:[['Quán không bán cho mình','Bị từ chối','Tự nhiên không bán','Đứng chờ rồi bị từ chối'],
           ['hơi buồn','lần sau không ghé','kỳ ghê','không hiểu sao luôn','mất công ghé']],
  late:[['Tài xế chờ lâu quá','Giao trễ','Đặt app mà chờ lâu','Shipper phải đợi quán','Đơn làm chậm'],
        ['nước nhạt hết','lần sau đặt quán khác','đá tan hết rồi','mất hứng','không đặt nữa']],
  pricey:[['Giá hơi chát','{mon} ngon mà hơi đắt','Giá cao so với khu này','Ly nhỏ mà giá cao'],
          ['chắc không quay lại','mong giảm giá chút','uống một lần thôi','ví mỏng quá']]
};
/* Nhận xét dài kiểu Google Maps: câu mở + chi tiết + câu kết (tự viết, không lấy từ đánh giá thật) */
const LONG={
  great:[['Lần đầu ghé {shop} mà ưng dữ lắm.','Đi ngang thấy quán xinh nên ghé thử.','Được bạn giới thiệu nên hôm nay qua uống thử.','Quán ruột của mình mấy tháng nay rồi.','Hôm nay trời nóng ghé làm ly {mon} cho mát.','Order {mon} size lớn mang đi.','Ghé quán sau giờ tan làm.','Mình khó tính chuyện trà sữa lắm mà quán này qua được vòng gửi xe.'],
    ['{Mon} vị trà đậm, ngọt vừa phải chứ không bị gắt, {top} dai mềm vừa tới.','Trà thơm, sữa béo mà không bị ngấy, uống tới giọt cuối vẫn thấy ngon.','{Top} nấu vừa chín, không bị cứng, ăn chung với trà rất hợp.','Nhân viên nhiệt tình, nhớ luôn mức đường mình hay uống.','Làm nước nhanh, đông khách mà chờ chưa tới 5 phút.','Ly đầy đặn, đá không bị nhiều quá, uống đã khát.','Quán sạch sẽ, có chỗ để xe, nhạc nhẹ ngồi chill rất ok.','Giá hợp lý so với chất lượng, size L mà uống no luôn.'],
    ['Chắc chắn sẽ quay lại.','Sẽ rủ hội bạn ghé tiếp.','5 sao không có nhưng.','Recommend món này cho ai lần đầu tới.','Mong quán giữ được chất lượng như vầy.','Tuần sau ghé thử thêm món khác.']],
  ok:[['Ghé quán buổi chiều, không đông lắm.','Uống thử {mon} theo lời giới thiệu.','Quán gần nhà nên hay ghé.','Order mang đi cho cả nhà.'],
    ['Nước ngon, nhưng mình thấy hơi ngọt dù đã chọn ít đường.','{Top} ổn, chỉ là hơi ít so với giá.','Vị ổn định, không có gì để chê nhiều.','Nhân viên dễ thương nhưng làm hơi chậm xíu.','Đá hơi nhiều nên uống một lúc là nhạt.'],
    ['Nhìn chung vẫn ok, sẽ quay lại.','Cho 4 sao, lần sau thử món khác xem sao.','Tạm hài lòng.','Cải thiện chút nữa là 5 sao liền.']],
  meh:[['Lần đầu ghé thử.','Nghe review khen nên tới thử.','Ghé mua mang về.'],
    ['{Mon} hơi nhạt, vị trà không rõ lắm.','{Top} hơi mềm, không được dai như mong đợi.','Ngọt khá gắt so với khẩu vị của mình.','Ly hơi nhỏ so với giá tiền.','Không gian bình thường, hơi nóng.'],
    ['Chắc không quay lại lắm.','Cũng tạm, không có gì đặc biệt.','Mong quán cải thiện thêm.','Uống một lần biết thôi.']],
  bad:[['Hơi thất vọng với lần ghé này.','Mua về mà uống không hết.','Lần này uống không được như lần trước.'],
    ['{Top} bị cứng, cảm giác như để từ hôm qua.','{Mon} có vị lạ, không giống lần trước uống.','Trà bị đắng, sữa thì loãng.','Ly đưa ra bị đổ ra ngoài, dính tay.'],
    ['Không quay lại.','Tiếc tiền ghê.','Mong quán xem lại chất lượng.']],
  wait:[['Giờ cao điểm quán đông kinh khủng.','Ghé buổi trưa, khách xếp hàng dài.','Order xong đứng chờ khá lâu.'],
    ['Chờ gần 15 phút mới có nước, nhân viên có vẻ không kịp tay.','Quán có một bạn pha nên hơi đuối, nhưng nước ra vẫn đúng vị.','Đợi lâu nên đá tan bớt, vị hơi nhạt so với lần trước.','Khách online với khách tại quầy chen nhau nên hơi rối.','Nước thì ngon nhưng chờ lâu quá, đứng mỏi cả chân.','{Mon} vẫn ngon như mọi lần, chỉ là phải đợi hơi lâu.'],
    ['Mong quán thêm người vào giờ đông.','Trừ 1 sao vì chờ lâu.','Lần sau chắc ghé giờ vắng hơn.']],
  timeout:[['Đứng chờ mãi mà không tới lượt.','Order xong không ai làm cho mình.','Quán đông mà nhân viên xoay không kịp.'],
    ['Chờ gần 20 phút vẫn chưa thấy nước đâu nên đành bỏ về.','Nhìn quầy thấy ly của mình nằm đó mà không ai làm tiếp.','Đứng muốn mỏi chân, cuối cùng phải đi mua chỗ khác.','Trễ giờ học nên không đợi nổi nữa.','Gọi hai ba lần mà nhân viên cứ lo ly khác.','Khách tới sau còn được làm trước, hơi bực.','Hỏi thì nhân viên bảo chờ xíu, xíu mãi không thấy.'],
    ['Thất vọng, không quay lại.','Mất thời gian ghê.','Lần sau đi quán khác.']],
  wrong:[['Order {mon} mà đưa nhầm món khác.','Kêu ít đường mà đưa ly ngọt lịm.','Đưa nhầm ly của bàn bên cạnh.','Mình dặn rõ mà vẫn làm sai.'],
    ['Phải đứng chờ làm lại thêm một lúc.','Topping bị lộn, mức đường cũng không đúng.','Nhân viên có xin lỗi nhưng vẫn hơi mất vui.'],
    ['Mong quán cẩn thận hơn.','Trừ sao vì làm sai.','Lần sau chắc phải dặn kỹ hơn.']],
  pricey:[['Giá hơi cao so với mặt bằng chung.','Ly {mon} giá khá chát.'],
    ['Vị thì ổn nhưng không tới mức đáng giá như vậy.','Size L mà ly nhỏ hơn quán khác, topping cũng ít.'],
    ['Chắc thỉnh thoảng mới ghé.','Mong quán điều chỉnh giá.','Hợp túi tiền hơn chút là quay lại liền.']],
  cheap:[['Giá quá hợp lý luôn.','Đang tìm quán rẻ mà ngon thì gặp {shop}.'],
    ['{Mon} size L mà giá mềm hơn chỗ khác, topping đầy đặn.','Sinh viên như mình uống mỗi ngày cũng được.'],
    ['Sẽ ủng hộ dài dài.','Rủ cả lớp tới liền.','Quá hời, 5 sao.']],
  late:[['Đặt qua app mà chờ lâu quá.','Tài xế báo phải đợi quán làm nước.'],
    ['Tới tay thì đá tan hết, trà nhạt thếch.','Gần một tiếng mới nhận được ly.'],
    ['Lần sau đặt quán khác.','Không đặt nữa.','Mong quán ưu tiên đơn online hơn.']]
};
const TAIL_MOOD={pos:[' 😍',' 🥰',' 🔥',' 💯',' 🧋',' ✨',' 😋',' 🤩',' ❤️',' 👏'],ok:[' 👍',' 🙂',' 😋',' 👌',''],mid:[' 😐',' 🤔',' 😅',''],neg:[' 😞',' 😤',' 💔',' 😢',' 🙁']};
const MOOD={great:'pos',cheap:'pos',ok:'ok',meh:'mid',wait:'mid',pricey:'mid',bad:'neg',wrong:'neg',timeout:'neg',soldout:'neg',soldoutPartial:'mid',soldoutOnl:'neg',refused:'neg',late:'neg'};
const TAIL={5:['',' 😍',' 🥰',' 🔥',' 💯',' 🧋',' ✨',' 😋'],4:['',' 👍',' 🙂',' 😋'],3:['',' 😐',' 🤔'],2:['',' 😞',' 😤'],1:['',' 😞',' 😤',' 💔']};

/* ---------- STATE ---------- */
const $=id=>document.getElementById(id);
const fmt=n=>(Math.round(n/100)/10).toLocaleString('vi-VN',{maximumFractionDigits:1})+'k';
const fmtBig=n=>n>=1e9?(n/1e9).toLocaleString('vi-VN',{maximumFractionDigits:2})+' tỷ':n>=1e6?(n/1e6).toLocaleString('vi-VN',{maximumFractionDigits:2})+' triệu':fmt(n);
const rnd=a=>a[Math.floor(Math.random()*a.length)];
const wpick=(arr,w)=>{let r=Math.random()*w.reduce((a,b)=>a+b,0);for(let i=0;i<arr.length;i++){r-=w[i];if(r<=0)return arr[i]}return arr[0]};
const newRec=d=>({spoil:{n:0,v:0},day:d,sales:{},tips:0,onl:0,fee:0,equip:[],ing:{},waste:{},rent:0,util:0,tax:0,served:0,lost:0,starSum:0,starN:0});
function fresh(){
  const s={lifeV:2,off:{},badPlan:mkBadPlan(1),money:CFG.startMoney,day:1,stock:{},unlocked:{},upg:{},sell:{...DEF_SELL},reviews:[],served:0,best:0,totalRev:0,totalProfit:0,online:false,shopName:'',history:[],cur:newRec(1),yearRev:0,taxYear:0};
  Object.keys(ITEMS).forEach(k=>{s.stock[k]=[];s.unlocked[k]=ITEMS[k].unlock===0});
  return s;
}
let S, R={mode:'prep',tab:'kho',plan:{}}, cup, timer=null, uid=0;
function migrate(d){const u=d.unlocked||{};
  if(u.dao&&!u.f_dao){S.unlocked.hong=true;S.unlocked.f_dao=true}
  if(u.dau&&!u.f_dau)S.unlocked.f_dau=true;
  const refund={khoaimon:250000,tctrang:200000,pudding:250000,kemtrung:400000};
  Object.keys(refund).forEach(k=>{if(u[k])S.money+=refund[k]});
  ['khoaimon','dau','dao','tctrang','pudding','kemtrung'].forEach(k=>{delete S.stock[k];delete S.unlocked[k];delete S.sell[k]});
}
function loadFrom(d){const f=fresh();Object.keys(d.stock).forEach(k=>{if(typeof d.stock[k]==='number'){const q=d.stock[k];d.stock[k]=[];addStock(k,q,{day:d.day||1,stock:d.stock})}});S={...f,...d,stock:{...f.stock,...d.stock},sell:{...f.sell,...d.sell},unlocked:{...f.unlocked,...d.unlocked}};migrate(d);if(!d.cur)S.cur=newRec(S.day);if(S.seenLv==null)S.seenLv=levelOf(Math.max(1,S.day-1));if(S.evDay!==S.day)rollDay(S.day);S.hired=S.hired||{};STAFF.forEach(x=>{if(S.upg[x.id])S.hired[x.id]=true});if(S.upg.staff1&&S.upg.staff3)S.upg.staff1=false;if(S.upg.guard1&&S.upg.guard2)S.upg.guard1=false;if(S.online&&S.tablets==null)S.tablets=1;S.apps=S.apps||{};syncFlav();if(d.totalProfit==null)S.totalProfit=(S.history||[]).reduce((a,r)=>a+recRev(r)-recCost(r),0);if(!(d.lifeV>=2)){Object.keys(LIFE_OLD).forEach(k=>{const d=ITEMS[k].life-LIFE_OLD[k];(S.stock[k]||[]).forEach(b=>{if(b.exp<99999)b.exp+=d})});S.lifeV=2;save()}try{sanitize()}catch(e){}(S.reviews||[]).forEach(r=>{if(!r.k)r.k=(r.t||'').replace(/\p{Extended_Pictographic}|\uFE0F/gu,'').trim()});if(!d.badPlan){S.badPlan=mkBadPlan(S.day);save()}}
function load(){let raw=null;try{raw=localStorage.getItem(SAVE)}catch(e){}
  if(raw){try{const d=JSON.parse(raw);if(d&&d.stock){loadFrom(d);return true}}catch(e){}
    /* đọc lỗi: cất bản cũ riêng, không ghi đè */try{localStorage.setItem(SAVE+'_rescue',raw)}catch(e){}R.loadErr=true}
  S=fresh();return false}
/* ---------- KHO THEO MẺ, CÓ HẠN DÙNG ---------- */
function addStock(k,q,st=S){if(!q)return;const l=CFG.life[k],exp=l?st.day+l-1:99999,b=st.stock[k].find(x=>x.exp===exp);if(b)b.q+=q;else{st.stock[k].push({q,exp});st.stock[k].sort((a,c)=>a.exp-c.exp)}}
const qty=k=>S.stock[k].reduce((a,b)=>a+b.q,0);
/* hương có trong menu khi còn hàng trong chai */
function syncFlav(){FLAV_KEYS.forEach(k=>{if(S.off)delete S.off[k];S.unlocked[k]=qty(k)>0})}
const bottleCost=k=>Math.round(CFG.bottle*(evIs('sale')&&ev().k===k?.7:1));
function take(k){const b=S.stock[k].find(x=>x.q>0);if(!b)return false;b.q--;S.stock[k]=S.stock[k].filter(x=>x.q>0);return true}
function expireStock(){const out=[];Object.keys(S.stock).forEach(k=>{let q=0;S.stock[k]=S.stock[k].filter(b=>{if(b.exp<=S.day){q+=b.q;return false}return true});if(q)out.push({k,q,v:q*CFG.cost[k]})});return out}
function lifeTxt(k){const l=CFG.life[k];return l?(l===1?'Dùng trong ngày':'Để được '+l+' ngày'):'Không hết hạn'}
const revCount=()=>Math.max(S.revTotal||0,S.reviews.length);
/* bản lưu gọn: bỏ khoá chống trùng của đánh giá (tự tính lại khi mở game), bản dự phòng chỉ giữ 300 đánh giá mới nhất */
function pack(maxRev){return JSON.stringify(S,function(k,v){if(this===S&&k==='reviews'){const a=maxRev?v.slice(0,maxRev):v;return a.map(r=>{const{k:_k,...o}=r;return o})}return v})}
function dropBaks(){['tsBak3','tsBak2','tsBak1',SAVE+'_rescue'].forEach(k=>{try{localStorage.removeItem(k)}catch(e){}})}
function save(){let js;/* tsHostOk check bypassed */try{js=pack()}catch(e){R.noStore=true;return}
  try{localStorage.setItem(SAVE,js);R.noStore=false;return}catch(e){}
  /* đầy bộ nhớ: xoá bản dự phòng cũ rồi thử lại */
  dropBaks();try{localStorage.setItem(SAVE,js);R.noStore=false}catch(e){R.noStore=true}}
/* thử xem máy có cho lưu không */
function storeOk(){try{localStorage.setItem('tsT','1');const ok=localStorage.getItem('tsT')==='1';localStorage.removeItem('tsT');return ok}catch(e){return false}}
function autoBak(){try{const cur=pack(300);const b1=localStorage.getItem('tsBak1'),b2=localStorage.getItem('tsBak2');
  try{if(b2)localStorage.setItem('tsBak3',b2);if(b1)localStorage.setItem('tsBak2',b1);localStorage.setItem('tsBak1',cur)}
  catch(e){/* đầy bộ nhớ: bỏ dự phòng cũ, ưu tiên giữ bản chính */['tsBak3','tsBak2'].forEach(k=>{try{localStorage.removeItem(k)}catch(e){}});try{localStorage.setItem('tsBak1',cur)}catch(e){try{localStorage.removeItem('tsBak1')}catch(e){}}}}catch(e){}}
const newCup=()=>({cost:0,size:null,sugar:null,ice:null,base:null,flav:null,tops:[],cheese:false,used:false});

/* ---------- ECONOMY ---------- */
const sellMax=k=>k==='L'?CFG.sizeCap:CFG.itemCap*2;
const ADD_WARN=20000,ADD_CAP=30000;/* hương, topping: trên 20k thì 80% khách không gọi, trên 30k thì không ai gọi */
const addOk=k=>sv(S.sell,k)<=ADD_CAP,addSkip=k=>sv(S.sell,k)>ADD_WARN&&Math.random()>=.2;
const sv=(sell,k)=>{const v=+sell[k];return isFinite(v)&&v>0?Math.min(v,sellMax(k)):0};
const price=(o,sell=S.sell)=>sv(sell,o.base)+(o.flav&&ITEMS[o.flav]?sv(sell,o.flav):0)+o.tops.reduce((a,t)=>a+sv(sell,t),0)+(o.cheese?sv(sell,'cheese'):0)+(o.size==='L'?sv(sell,'L'):0);
function sanitize(){
  Object.keys(S.sell).forEach(k=>{let v=+S.sell[k];if(!isFinite(v)||v<0)v=DEF_SELL[k]||0;S.sell[k]=Math.min(v,sellMax(k))});
  let bad=false;const fix=r=>{if(!r||!r.sales)return;let f=false;
    Object.entries(r.sales).forEach(([k,x])=>{if(x&&x.q>0&&!(x.a/x.q<=sellMax(k))){x.a=x.q*Math.min(DEF_SELL[k]||sellMax(k),sellMax(k));f=true}});
    if(f){bad=true;const sl=Object.values(r.sales).reduce((a,x)=>a+x.a,0);r.onl=Math.min(r.onl||0,sl);r.fee=Math.round(r.onl*CFG.commission/100);r.tax=Math.min(r.tax||0,Math.round(sl*(CFG.vat+CFG.pit)/100))}};
  (S.history||[]).forEach(fix);fix(S.cur);
  const cap=CFG.startMoney+S.day*15000000;
  if(bad||!isFinite(S.money)||S.money>cap){
    const H=S.history||[],prof=H.reduce((a,r)=>a+recRev(r)-recCost(r),0);
    S.totalProfit=prof;S.totalRev=H.reduce((a,r)=>a+recRev(r),0);S.yearRev=Math.min(S.yearRev||0,S.totalRev);
    if(!isFinite(S.money))S.money=cap+1;if(S.money>cap||bad)cheatHit();
    if(!isFinite(S.cur.tips)||S.cur.tips>cap)S.cur.tips=0;
    save()}}
const unitCost=o=>CFG.cost[o.base]+(o.flav&&ITEMS[o.flav]?CFG.cost[o.flav]:0)+o.tops.reduce((a,t)=>a+CFG.cost[t],0)+(o.cheese?CFG.cost.cheese:0)+CFG.cost.cup;
const priceIdx=o=>price(o)/price(o,DEF_SELL);
const overCap=o=>price(o)>CFG.priceCap;
const pricyItems=()=>[...BASE_KEYS.filter(k=>S.unlocked[k]&&S.sell[k]>CFG.itemCap),...(S.sell.L>=CFG.sizeCap?['L']:[])];
const lPricey=()=>S.sell.L>CFG.sizeWarn;
const lChance=()=>S.sell.L>=CFG.sizeCap?0:lPricey()?.035:.35;
const upgCount=()=>UPG.filter(u=>S.upg[u.id]).length;
const wageDay=()=>STAFF.reduce((a,x)=>a+(S.upg[x.id]?CFG[x.wage]:0),0);
const fixed=()=>({rent:CFG.rent,util:CFG.utilBase+upgCount()*CFG.utilPerUpg});
function rating(){const r=S.reviews.slice(0,40);if(!r.length)return 4;return r.reduce((a,x)=>a+x.s,0)/r.length}
function starStr(v){const f=Math.round(v);return '★'.repeat(f)+'☆'.repeat(5-f)}
/* ---------- SỰ KIỆN ---------- */
const EVS={
  hot:{n:'Trời nóng',d:'Khách đông hơn 30%, nhiều người gọi thêm đá',ic:'upsnow',mul:1.3},
  rain:{n:'Trời mưa',d:'Khách tại quán ít hơn 30%, đơn online nhiều hơn',ic:'warn',mul:.7},
  weekend:{n:'Cuối tuần',d:'Khách đông hơn 25%, nhiều người mua 2 ly',ic:'calendar',mul:1.25},
  students:{n:'Học sinh tan học',d:'Giữa ngày có một nhóm học sinh ghé cùng lúc',ic:'people',mul:1},
  reviewer:{n:'Food reviewer ghé quán',d:'Một khách đặc biệt: pha đúng được 3 đánh giá tốt, pha sai hoặc để chờ lâu bị 3 đánh giá xấu',ic:'star',mul:1},
  trend:{n:'Món hot trên mạng',d:'% được gọi nhiều gấp đôi, nhớ nấu thêm',ic:'chartup',mul:1.1},
  sale:{n:'Nhà cung cấp giảm giá',d:'Nhập % rẻ hơn 30% trong hôm nay',ic:'price',mul:1},
  holiday:{n:'Ngày lễ',d:'Khách đông gấp đôi, tip gấp đôi',ic:'gift',mul:2}
};
const GIFTS=[
  {n:'Lì xì từ mạnh thường quân',d:'Một vị khách quen thích quán nên gửi tặng',min:50000,max:200000},
  {n:'Trả lại ví cho khách',d:'Bạn nhặt được ví khách để quên và trả lại, khách gửi tiền cảm ơn',min:50000,max:150000},
  {n:'Giải quán đẹp khu phố',d:'Quán được bình chọn là quán dễ thương nhất khu',min:200000,max:300000,need:()=>upgCount()>=2},
  {n:'Nhãn hàng trà tài trợ',d:'Quán được đánh giá cao nên được nhãn hàng tài trợ',min:400000,max:600000,need:()=>S.reviews.length>=20&&rating()>=4.5},
  {n:'Bán ve chai, thùng carton',d:'Dọn kho bán được ít tiền',min:20000,max:60000},
  {k:'bung',n:'Công an trả tiền khách bùng',d:'Công an phường bắt được nhóm khách ôm ly bỏ chạy hôm trước, trả lại tiền cho quán',min:50000,max:200000,need:()=>(S.bungN||0)>0},
  {n:'Vé số trúng giải',d:'Một khách trả tiền trà sữa bằng tờ vé số, ai ngờ trúng giải',min:100000,max:500000},
  {n:'Nhà cung cấp hoàn tiền',d:'Lô nguyên liệu tuần trước giao thiếu, nhà cung cấp gửi trả lại tiền',min:50000,max:250000},
  {n:'Quán được bình chọn',d:'Quán được bình chọn trên mạng là quán trà sữa được yêu thích, nhận tiền thưởng',min:200000,max:500000,need:()=>S.reviews.length>=50&&rating()>=4.3},
  {n:'Cọc tiệc công ty',d:'Một công ty gần đây đặt trà sữa cho tiệc cuối tháng, gửi trước tiền cọc',min:150000,max:400000,need:()=>S.day>=15}
];
const ev=()=>S.ev&&S.evDay===S.day?S.ev:null;
const evIs=id=>{const e=ev();return !!e&&e.id===id};
const evText=e=>EVS[e.id].d.replace('%',e.k&&ITEMS[e.k]?low(ITEMS[e.k].n):'');
function rollDay(d){
  let e=null;
  if(d>1&&d%30===0)e={id:'holiday'};
  else if(d>1&&(d%7===6||d%7===0))e={id:'weekend'};
  else if(d>2&&Math.random()<.25){const pool=['hot','rain','students','reviewer','trend','sale'];const id=rnd(pool);e={id};
    if(id==='trend'){const b=BASE_KEYS.filter(k=>S.unlocked[k]);e.k=rnd(b)}
    if(id==='sale'){const b=[...BASE_KEYS,...TOP_KEYS,...FLAV_KEYS].filter(k=>S.unlocked[k]);e.k=rnd(b)}}
  S.ev=e;S.evDay=d;
  {/* khách khó ở: đúng 2 ngày ngẫu nhiên trong mỗi 60 ngày, lặp lại */
   const blk=Math.floor((d-1)/60);if(!S.moodPlan||S.moodPlan.blk!==blk){const a=[],lo=Math.max(3,blk*60+1);while(a.length<2){const x=lo+Math.floor(Math.random()*(blk*60+61-lo));if(!a.includes(x))a.push(x)}S.moodPlan={blk,days:a}}
   S.mood=S.moodPlan.days.includes(d)?'kho':(d>2&&Math.random()<.1?'vui':null)}
  if(d>2&&Math.random()<.1){const g=GIFTS.filter(x=>!x.need||x.need());const bg=g.find(x=>x.k==='bung');const x=bg&&Math.random()<.5?bg:rnd(g);S.gift={k:x.k||null,n:x.n,d:x.d,v:Math.round((x.min+Math.random()*(x.max-x.min))/5000)*5000}}else S.gift=null}
/* vay: ngân hàng (S.loan) và vay nóng (S.hot), trả góp 10 ngày, lãi tính theo năm 360 ngày */
const LOANS=[{id:'loan',n:'Vay ngân hàng',max:()=>CFG.bankMax,rate:()=>CFG.bankRate,opts:()=>[200000,500000,CFG.bankMax]},
  {id:'hot',n:'Vay nóng',max:()=>CFG.hotMax,rate:()=>CFG.hotRate,opts:()=>[1000000,2000000,CFG.hotMax],hide:1}];
const debts=()=>LOANS.filter(L=>S[L.id]&&S[L.id].left>0);
const inDebt=()=>debts().length>0;
function loanCard(){const ds=debts(),free=LOANS.filter(L=>!L.hide&&!(S[L.id]&&S[L.id].left>0));let h='';
  if(ds.length)h+=`<div class="evc loan"><span>${ico('money')}</span><div><b>Đang nợ</b><small>${ds.map(L=>{const x=S[L.id];return `${L.n}: còn ${x.left} ngày, mỗi ngày ${fmt(x.pay+x.int)} (lãi ${fmt(x.int)})`}).join('<br>')}<br>Đang nợ thì chưa mua được nâng cấp.</small></div><button class="sbtn" id="loanPay">Trả hết</button></div>`;
  if(free.length&&S.money<CFG.loanLow)h+=`<div class="evc loan"><span>${ico('money')}</span><div><b>Két sắp cạn tiền</b><small>${free.map(L=>L.n+' tối đa '+fmtTr(L.max())+', lãi '+L.rate()+'%/năm').join(' · ')}. Trả góp 10 ngày.</small></div><button class="sbtn pri" id="loanGo">Vay</button></div>`;
  return h}
function bindLoan(){const g=$('loanGo'),p=$('loanPay');
  if(g)g.onclick=()=>{const free=LOANS.filter(L=>!L.hide&&!(S[L.id]&&S[L.id].left>0)),btn=[];
    free.forEach(L=>L.opts().forEach(v=>{const d=Math.round(v/10),it=Math.round(v*L.rate()/100/360);btn.push([`${L.n} ${fmtTr(v)} · trả ${fmt(d+it)}/ngày`,()=>{S[L.id]={left:10,pay:d,int:it,amt:v};S.money+=v;save();toast('Đã nhận '+fmt(v));head();refreshPrep()},1])}));
    ask(`<div class="pbig">${ico('money')}</div><h2>Vay ngân hàng</h2><p>Trả góp trong 10 ngày, tiền trả tự trừ vào cuối mỗi ngày. Lãi tính theo năm (1 năm trong game là 360 ngày).</p><div class="lvs">${free.map(L=>`<div><b>${L.n}:</b> tối đa ${fmtTr(L.max())}, lãi ${L.rate()}%/năm</div>`).join('')}</div>`,[['Huỷ',()=>{}],...btn])};
  if(p)p.onclick=()=>{const due=debts().reduce((a,L)=>a+S[L.id].pay*S[L.id].left,0);ask(`<h2>Trả hết nợ?</h2><p>Trả ${fmt(due)} tiền gốc còn lại, không phải trả lãi những ngày sau.</p>`,[['Huỷ',()=>{}],['Trả hết',()=>{if(S.money<due){toast('Két không đủ tiền');return}S.money-=due;S.cur.loanOut=(S.cur.loanOut||0)+due;LOANS.forEach(L=>S[L.id]=null);save();toast('Đã trả hết nợ');head();refreshPrep()},1]])}}
const ecost=k=>CFG.cost[k]*(evIs('sale')&&ev().k===k?.7:1);
function evCard(){const e=ev();
  if(!e)return '';return `<div class="evc"><span>${ico(EVS[e.id].ic)}</span><div><b>Hôm nay: ${EVS[e.id].n}</b><small>${evText(e)}</small></div></div>`}
/* sự cố mất tiền: gian lận thì mất gần hết; người chơi thật 0–2 lần trong 90 ngày, mất dưới 1 triệu */
const BAD=[
  {id:'trom',n:'Trộm ghé quán!',ic:'sad',all:'Đêm qua trộm cạy két, lấy sạch tiền.',some:'Đêm qua trộm cạy két, lấy mất %.'},
  {id:'thue',n:'Rắc rối về thuế',ic:'receipt',all:'Cơ quan thuế phát hiện doanh thu không khớp sổ sách. Chủ quán trốn thuế, tài sản bị tịch thu.',some:'Nộp thuế chậm, quán bị phạt %.'},
  {id:'qltt',n:'Quản lý thị trường kiểm tra',ic:'warn',all:'Tiền mặt trong két quá lớn mà không chứng minh được nguồn gốc, bị tạm giữ toàn bộ.',some:'Đoàn kiểm tra nhắc lỗi vệ sinh quầy pha, quán bị phạt %.'},
  {id:'lua',n:'Bị lừa qua điện thoại',ic:'phone',all:'Kẻ gian giả danh ngân hàng gọi tới, chủ quán lỡ chuyển hết tiền trong két.',some:'Kẻ gian giả danh ngân hàng gọi tới, chủ quán lỡ chuyển %.'},
  {id:'coin',n:'"Đầu tư" tiền ảo',ic:'chartdown',all:'Chủ quán dồn hết tiền vào một sàn tiền ảo lạ. Sàn sập, mất trắng.',some:'Chủ quán thử "đầu tư" tiền ảo trên một sàn lạ, lỗ %.'}];
function mkBadPlan(start){const r=Math.random(),n=r<.3?0:r<.7?1:2,ids=BAD.map(b=>b.id).sort(()=>Math.random()-.5),days=[];
  while(days.length<n){const d=start+10+Math.floor(Math.random()*80);if(!days.includes(d))days.push(d)}
  days.sort((a,b)=>a-b);return {start,ev:days.map((d,i)=>({d,id:ids[i],done:false}))}}
/* két gian lận: gọi từ sanitize() lúc mở game hoặc luật "trước ngày X két trên Y" */
function cheatHit(){const keep=(1+Math.floor(Math.random()*9))*100000,lost=Math.max(0,S.money-keep);S.money=keep;S.cur.stolen=(S.cur.stolen||0)+lost;S.badNow={id:rnd(BAD).id,all:1,v:lost,keep};save()}
function badCheck(){
  if(S.day<CFG.thiefDay&&S.money>CFG.thiefMoney)cheatHit();
  if(!S.badNow&&S.badPlan){const e=S.badPlan.ev.find(x=>!x.done&&x.d<=S.day);
    if(e){e.done=true;if(S.day-e.d<=1){const v=Math.min(Math.round((200000+Math.random()*700000)/50000)*50000,Math.floor(S.money/3/1000)*1000);
      if(v>=10000){S.money-=v;S.cur.bad=(S.cur.bad||0)+v;S.badNow={id:e.id,v}}}save()}}
  const b=S.badNow;if(!b)return false;S.badNow=null;save();sfx('bad');const t=BAD.find(x=>x.id===b.id)||BAD[0];
  ask(`<div class="pbig">${ico(t.ic)}</div><h2>${t.n}</h2><p>${b.all?t.all:t.some.replace('%','<b>'+fmt(b.v)+'</b>')}</p>${b.all?`<p class="warnline">Trong két chỉ còn ${fmt(b.keep)}.</p>`:''}`,[['Buồn ghê',()=>{head();if(R.mode==='prep')refreshPrep()},1]]);return true}
/* chờ hết màn hình chào và hộp thoại khác rồi mới báo trộm / quà */
function prepChecks(){if(R.mode!=='prep'||!$('splash').hidden)return;if(!$('modal').hidden){clearTimeout(R.pcT);R.pcT=setTimeout(prepChecks,500);return}
  if(storeCheck())return;if(!badCheck()&&S.gift){giftCheck();return}bakRemind()}
function storeCheck(){
  if(R.loadErr){R.loadErr=false;ask(`<div class="pbig">${ico('warn')}</div><h2>Không đọc được tiến trình cũ</h2><p>Bản lưu trong máy bị lỗi nên game mở quán mới. Bản cũ vẫn được giữ lại, không bị xoá.</p><p>Vào <b>Cài đặt > Khôi phục bản tự lưu</b> để lấy lại, hoặc dán mã sao lưu nếu có.</p>`,[['Để sau',()=>{}],['Khôi phục ngay',autoRestoreDlg,1]]);return true}
  if((R.noStore||!storeOk())&&!R.noStoreWarned){R.noStore=true;R.noStoreWarned=true;
    ask(`<div class="pbig">${ico('warn')}</div><h2>Máy đang chặn lưu tiến trình</h2><p>Game chạy bình thường nhưng <b>tắt app là mất hết tiến trình</b>, mở lại sẽ về ngày 1.</p>
      <div class="lvs"><div><b>iPhone:</b> Cài đặt > Safari > tắt <b>Chặn tất cả cookie</b>. Không mở game bằng tab ẩn danh.</div><div>Kiểm tra thêm: Thời gian sử dụng > Giới hạn nội dung & quyền riêng tư, và bộ nhớ máy còn trống.</div><div>Trong lúc chưa sửa được, hãy <b>tạo mã sao lưu</b> trước khi tắt app để giữ tiến trình.</div></div>`,[['Đã hiểu',()=>{}],['Tạo mã sao lưu',backupDlg,1]]);return true}
  return false}
function bakRemind(){if(R.noStore||S.day<8||S.day-(S.bakDay||0)<7||S.day-(S.bakAsk||0)<7)return;S.bakAsk=S.day;save();
  ask(`<div class="pbig">${ico('box')}</div><h2>Sao lưu tiến trình nhé?</h2><p>Tạo mã sao lưu để giữ quán khi đổi máy, xoá app hay máy tự dọn dữ liệu. Chỉ mất vài giây.</p>`,[['Để sau',()=>{}],['Tạo mã',backupDlg,1]])}
function autoRestoreDlg(){$('card').onchange=null;
  const list=[['tsBak1','Cuối ngày gần nhất'],['tsBak2','Một ngày trước đó'],['tsBak3','Hai ngày trước đó'],[SAVE+'_rescue','Bản bị lỗi lúc mở game']].map(([k,n])=>{try{const r=localStorage.getItem(k);if(!r)return null;const d=JSON.parse(r);return d&&d.stock?{k,n,d}:null}catch(e){return null}}).filter(Boolean);
  if(!list.length){ask(`<h2>Chưa có bản tự lưu</h2><p>Game tự lưu mỗi cuối ngày. Nếu có mã sao lưu, dùng Khôi phục từ mã.</p>`,[['Đóng',showSettings],['Khôi phục từ mã',()=>restoreDlg(),1]]);return}
  ask(`<h2>Khôi phục bản tự lưu</h2><p>Chọn bản muốn lấy lại. Tiến trình hiện tại (ngày ${S.day}) sẽ bị thay thế.</p>`,[['Huỷ',showSettings],...list.map(x=>[`${x.n}: ${esc(x.d.shopName||'Tiệm Trà Nhỏ')} · Ngày ${x.d.day} · ${fmt(x.d.money||0)}`,()=>applyRestore(x.d),1])])}
function applyRestore(d){try{localStorage.setItem(SAVE,JSON.stringify(d))}catch(e){}try{loadFrom(d)}catch(e){toast('Bản này bị lỗi, thử bản khác');return}save();R.plan={};R.tab='kho';document.title=shopName();renderPrep();toast('Đã khôi phục ngày '+S.day+(R.noStore?' (máy đang chặn lưu, nhớ tạo mã sao lưu)':''))}
function giftCheck(){if(!S.gift)return;sfx('lvup');const g=S.gift;S.gift=null;if(g.k==='bung')S.bungN=0;S.money+=g.v;S.cur.gift=(S.cur.gift||0)+g.v;save();
  ask(`<div class="pbig">${ico('gift')}</div><h2>${g.n}</h2><p>${g.d}</p><p class="lvup">+${fmt(g.v)} vào két</p>`,[['Tuyệt quá',()=>{head();refreshPrep()},1]])}
function traffic(){
  const r=rating(),rf=(.55+(r-1)/4*.9)*Math.min(1,Math.max(.6,.6+(r-3.5)*.4))*(S.day<10?.8+.02*S.day:1);/* tăng khách mượt theo sao, 10 ngày đầu tăng từ từ */
  const boost=1+(S.upg.sign?.2:0)+(S.upg.ads?.25:0)+Math.min(S.day,40)*.012;
  const avgIdx=BASE_KEYS.filter(k=>S.unlocked[k]).reduce((a,k)=>a+S.sell[k]/DEF_SELL[k],0)/BASE_KEYS.filter(k=>S.unlocked[k]).length;
  const e=ev();return rf*boost*(e?EVS[e.id].mul:1)/Math.max(.85,Math.min(1,avgIdx)**2);
}
const RX={fast:/nhanh|chưa tới 5 phút|đúng giờ|không phải đợi/,
  wait:/chờ|đợi|lâu|chậm|mỏi chân|xếp hàng|hàng dài|quán đông|đông quá|đông khách|đông kinh|kịp tay|đuối|bận|cao điểm|trễ/,
  pNeg:/đắt|giá hơi|giá này|giá cao|hơi phí|phí tiền|tiếc tiền|chát so|giá khá chát|ví mình|ví mỏng|so với giá|mạnh tay|chùn tay|đáng với giá|đáng giá|túi tiền hơn|điều chỉnh giá|bảng giá|giảm giá|khuyến mãi|hai ly quán khác/,
  pPos:/giá hợp lý|giá sinh viên|giá mềm|giá tốt|rẻ|đáng tiền|giá ok|giá phải chăng|giá chấp nhận|hạt dẻ|hời|giá dễ thương|giá tâm lý|túi tiền sinh viên|chưa tới trăm/,
  wrong:/sai|nhầm|lộn|làm lại|đổi lại|thiếu topping|dặn kỹ|dặn rõ|một đằng/,
  k:{size:/size/,sugar:/đường|ngọt lịm/,ice:/đá/,tops:/topping/,mon:/nhầm|một đằng|sai vị|món khác/}};
function reviewFits(t,why,c){const f=c&&c.rf;if(!f)return true;const L=t.toLowerCase();
  if(RX.fast.test(L)){if(f.wait)return false}else if(RX.wait.test(L)&&!f.wait&&!['wait','timeout','late'].includes(why))return false;
  if(RX.pNeg.test(L)&&!f.pricey)return false;
  if(RX.pPos.test(L)&&f.pricey)return false;
  if(RX.wrong.test(L)&&!f.wrong)return false;
  if(/đổ ra|rỉ ra|dính (hết )?tay|tràn/.test(L)&&!f.spill)return false;
  if(c.cups&&c.cups.every(o=>!o.tops.length)&&/topping|trân châu|thạch|foam|phô mai|sương sáo|cặp bài trùng/.test(L))return false;
  if(c.cups&&c.cups.every(o=>o.ice==null||o.ice==='Không đá')&&/đá (hơi nhiều|nhiều quá|tan|vừa đủ|viên)|ít đá như/.test(L))return false;
  if(/size l|ly to|ly nhỏ/.test(L)&&c.cups&&!c.cups.some(o=>o.size==='L'))return false;
  if(why==='wrong'&&c.wk){for(const k in RX.k)if(!c.wk[k]&&RX.k[k].test(L))return false}
  return true}
function reviewText(why,c,st,extra){
  const o=c&&c.cups?c.cups[0]:null,mon=o?low(dname(o)):'trà sữa';
  const top=o&&o.tops.length?low(ITEMS[o.tops[0]].n):'topping';
  const strip=t=>t.replace(/\p{Extended_Pictographic}|️/gu,'').trim();
  const recent=new Set(S.reviews.slice(0,60).map(r=>strip(r.t)));
  const cap=x=>x.charAt(0).toUpperCase()+x.slice(1);
  const fill=t=>{t=t.replace(/\{Mon\}/g,cap(mon)).replace(/\{Top\}/g,cap(top)).replace(/\{shop\}/g,'quán '+shopName()).replace(/\{mon\}/g,mon).replace(/\{top\}/g,top).replace('%',extra||mon);return t.charAt(0).toUpperCase()+t.slice(1)};
  const make=()=>{const L=LONG[why];if(L&&Math.random()<.5)return fill(L.map(x=>rnd(x)).join(' '));const P=PARTS[why];if(P)return fill(rnd(P[0])+', '+rnd(P[1]));return fill(rnd(TXT[why]))};
  const used=new Set(S.reviews.map(r=>r.k||strip(r.t)));
  const fits=x=>reviewFits(x,why,c);
  const pool=(TXT[why]||[]).map(fill).filter(x=>!used.has(strip(x))&&fits(x));
  let t=pool.length&&Math.random()<.75?rnd(pool):make();for(let n=0;n<80&&(used.has(strip(t))||!fits(t));n++)t=n<40&&pool.length?rnd(pool):make();
  if(!fits(t)){const any=(TXT[why]||[]).map(fill).filter(fits);t=any.length?rnd(any):t}
  if(!/\p{Extended_Pictographic}/u.test(t)){const lastTail=(S.reviews[0]&&S.reviews[0].t.match(/\p{Extended_Pictographic}+$/u)||[''])[0];
    const pool=TAIL_MOOD[MOOD[why]||'ok'].filter(x=>x.trim()!==lastTail);t+=rnd(pool.length?pool:TAIL_MOOD.ok)}
  return {t,k:strip(t)};
}
function addReview(st,why,online,c,extra){const sr=c&&c.star!=null;if(sr)st=5;const r=sr?(x=>({t:x[0]+' [Tự động dịch] '+x[1],k:'★'+c.star+Math.random()}))(starLine(STARS[c.star],'rv')):reviewText(why,c,st,extra),o=c&&c.cups?c.cups[0]:null;
  S.reviews.unshift({s:st,t:r.t,k:r.k,d:S.day,o:!!online,...(sr?{st:c.star,tg:STARS[c.star].t}:{}),n:c?c.name:'Khách',f:(c&&c.face)||'🙂',b:o?o.base:null,fl:o?o.flav:null,tp:o?o.tops:[],ch:o?!!o.cheese:false,sz:o?o.size:'M'});
  S.revTotal=Math.max(S.revTotal||0,S.reviews.length-1)+1;if(S.reviews.length>2500)S.reviews.length=2500;R.today.stars.push(st)}

/* ---------- HEADER ---------- */
const esc=t=>String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shopName=()=>S.shopName||'Tiệm Trà Nhỏ';
function setName(v){v=String(v||'').replace(/\s+/g,' ').trim().slice(0,30);S.shopName=v;document.title=shopName();save()}
function renameDlg(){
  ask(`<h2>Đặt tên quán</h2><p>Tối đa 30 ký tự. Tên sẽ hiện trên biển hiệu, đánh giá và tổng kết.</p><input id="nameIn" class="pinbox nm" maxlength="30" value="${esc(S.shopName)}" placeholder="Ví dụ: Trà Sữa Nhà Mèo" aria-label="Tên quán">`,
    [['Huỷ',()=>{}],['Lưu tên',()=>{setName($('nameIn').value);toast('Đã đổi tên quán');renderPrep()},1]]);
  setTimeout(()=>{const i=$('nameIn');if(i){i.focus();i.select()}},50);
}
const dayLen=()=>(R&&R.running&&R.dayLen)||S.dayLen||CFG.dayMin;
function gameClock(){const tot=dayLen()*60,el=Math.max(0,1-R.t/tot),m=11*60+Math.floor(el*660/5)*5;return String(Math.floor(m/60)%24).padStart(2,'0')+':'+String(m%60).padStart(2,'0')}
const _hd={};
function setTxt(id,v){if(_hd[id]!==v){_hd[id]=v;$(id).textContent=v}}
function head(){
  setTxt('hName',shopName());
  setTxt('hDay',String(S.day));
  const sub=R.mode==='sell'?'sell':'prep';
  if(_hd.subMode!==sub){_hd.subMode=sub;_hd.clk=null;$('hSub').innerHTML=sub==='sell'?ico('clock')+' <span id="hClk"></span>':'Chuẩn bị'}
  if(sub==='sell'){const c=gameClock();if(_hd.clk!==c){_hd.clk=c;$('hClk').textContent=c}}
  setTxt('hMoney',fmt(S.money));
  const r=rating();setTxt('hStars',starStr(r));setTxt('hRate',r.toFixed(1).replace('.',',')+' · '+revCount()+' đánh giá');
}

/* ---------- PREP VIEW ---------- */
const kv=v=>(v%1000?(v/1000).toFixed(1).replace('.',','):v/1000)+'k';
function menuBoard(){
  const cell=(k,plus)=>`<div class="it"><span>${ITEMS[k].n}</span><span>${plus?'+':''}${kv(S.sell[k])}</span></div>`;
  const it=BASE_KEYS.filter(k=>S.unlocked[k]).map(k=>cell(k)).join('');
  const fl=FLAV_KEYS.filter(k=>S.unlocked[k]),tp=TOP_KEYS.filter(k=>S.unlocked[k]);
  const tops=TGROUPS.map(G=>{const ks=tp.filter(k=>ITEMS[k].g===G.g);return ks.length?(tp.length>4?`<div class="tgb">${G.i} ${G.n}</div>`:'')+ks.map(k=>cell(k,1)).join(''):''}).join('');
  return `<div class="sign"><button id="rename" aria-label="Đổi tên quán">${esc(shopName())}<small>${ico('pen')}</small></button></div><div class="board"><h2>${ico('cupfull')} Menu hôm nay</h2><div class="items">${it}</div>${fl.length?`<div class="btop">Hương vị</div><div class="items">${fl.map(k=>cell(k,1)).join('')}</div>`:''}<div class="btop">Topping</div><div class="items top">${tops}</div><div class="extra">Size L +${kv(S.sell.L)}</div></div>`;
}
const levelOf=d=>{const L=CFG.levels;return d>=L.l3?3:d>=L.l2?2:1};
const level=()=>levelOf(S.day);
const LV_TXT={1:'Khách gọi size, loại trà và 1 topping',2:'Khách chọn thêm mức đường và đá',3:'Khách có thể mua 2–5 ly một lần, mỗi ly tới 4 topping'};
/* app giao hàng: hiện chỉ có Soppi, mở theo điều kiện đơn online, cần 1 tablet */
const APPS=[{id:'sp',n:'Soppi',c:'#f08a4b',w:20,rows:[0,1]}];
const appJoined=a=>a.id==='sp'?!!S.online:!!(S.apps||{})[a.id];
const appMinRate=a=>a.id==='sp'?CFG.online.minRating:a.rate;
/* app đang nhận đơn: đã mở, có tablet, đủ sao */
function appsOn(){let tb=S.tablets||0;const r=rating();return APPS.filter(a=>{if(!appJoined(a))return false;if(tb<=0)return false;tb--;return r>=appMinRate(a)})}
const onlineActive=()=>appsOn().length>0;
function verLine(){return `<div class="verl"><button id="guide">${ico('book')} Hướng dẫn</button><button id="whatsnew">Phiên bản ${GAME_VERSION} · Có gì mới</button></div>`}
function showNews(isNew){
  ask(`<h2>${isNew?'🎉 Đã cập nhật lên '+GAME_VERSION:'Lịch sử cập nhật'}</h2><div class="news">${CHANGELOG.map((c,i)=>`<div class="nv${i?'':' cur'}"><div class="nh"><b>Phiên bản ${c.v}</b>${i?'':'<span class="tag">Hiện tại</span>'}<small>${c.d}</small></div><ul>${c.items.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div>`).join('')}</div>`,[['Đã hiểu',()=>{},1]]);
}
const LV_ALL={1:'🍵 🥤 🍡',2:'🍵 🥤 🍡 🍬 🧊',3:'🧋🧋🧋 🍡🍡🍡🍡 🍬 🧊'},LV_NEW={2:'🍬 🧊',3:'🧋🧋🧋 🍡🍡🍡🍡'};
function levelCard(){const lv=level(),nx={1:CFG.levels.l2,2:CFG.levels.l3}[lv];
  return `<div class="lvl"><b>${ico('star')} Cấp ${lv}</b><span class="lvi">${LV_ALL[lv]}</span>${nx?`<small>${ico('calendar')} ${nx} ➜ ${LV_NEW[lv+1]}</small>`:''}</div>`}
function levelCardOld(){const lv=level(),nx={1:CFG.levels.l2,2:CFG.levels.l3}[lv];
  return `<div class="lvl"><b>Cấp ${lv}</b> · ${LV_TXT[lv]}${nx?`<small>Ngày ${nx}: ${LV_TXT[lv+1].toLowerCase()}</small>`:''}</div>`}
const fmtTr=n=>Math.abs(n)>=1e6?(n/1e6).toLocaleString('vi-VN',{maximumFractionDigits:1})+'tr':fmt(n);
function onlineCheck(){
  const o=CFG.online,r=rating(),pf=S.totalProfit||0;
  return [
    {t:'Lợi nhuận tích luỹ',v:fmtTr(pf)+'/'+fmtTr(o.minProfit),p:Math.max(0,pf)/o.minProfit,ok:pf>=o.minProfit},
    {t:'Mở cửa tới ngày',v:S.day+'/'+o.fromDay,p:S.day/o.fromDay,ok:S.day>=o.fromDay},
    {t:'Điểm đánh giá',v:r.toFixed(1).replace('.',',')+'/'+o.minRating.toFixed(1).replace('.',','),p:r/o.minRating,ok:S.reviews.length>0&&r>=o.minRating}
  ];
}
function onlineCard(){
  const mr=CFG.online.minRating.toFixed(1).replace('.',','),r=rating(),on=appsOn(),tb=S.tablets||0,joined=APPS.filter(appJoined);
  const f1=v=>v.toFixed(1).replace('.',',');
  let h='';
  if(!S.online){const ic=[ico('money'),ico('calendar'),ico('star')];
    h+=`<div class="goalc"><div class="gh">${ico('phone')} Mở đơn online (Soppi)</div><div class="wl">${ico('money')} lợi nhuận · ${ico('calendar')} ngày · ${ico('star')} đánh giá</div>${onlineCheck().map((c,i)=>`<div class="gr2${c.ok?' ok':''}"><span class="gi">${c.ok?'✅':ic[i]}</span><div class="gb"><i style="width:${Math.min(100,c.p*100)}%"></i></div><span class="gv">${c.v}</span></div>`).join('')}</div>`}
  h+=`<div class="note">Cần 1 tablet (mua ở Trang bị) thì đơn Soppi mới đổ về. Đơn online chiếm khoảng 20% tổng khách. Phí app −${CFG.commission}%.</div>`;
  h+=APPS.map(a=>{const j=appJoined(a),act=on.includes(a),idx=joined.indexOf(a),noTb=j&&idx>=tb;
    let st;
    if(a.id==='sp')st=!S.online?`<span class="wl">Chưa đủ điều kiện</span>`:act?'<span class="okline">✓ Đang nhận đơn</span>':noTb?'<span class="wl">Cần tablet</span>':`<span class="wl">Tạm ngưng · cần ${ico('star')} ${mr}</span>`;
    else if(j)st=act?'<span class="okline">✓ Đang nhận đơn</span>':noTb?'<span class="wl">Cần tablet</span>':`<span class="wl">Đóng · cần ${ico('star')} ${f1(a.rate)}</span>`;
    else{const ok=S.online&&S.day>=a.day&&S.money>=a.money&&r>=a.rate;
      st=ok?`<button class="sbtn pri" data-join="${a.id}" ${S.money<a.fee?'disabled':''}><b>${fmtTr(a.fee)}</b>Gia nhập</button>`:`<span class="wl">Chưa đủ điều kiện</span>`}
    const cond=a.id==='sp'?`Từ ngày ${CFG.online.fromDay} · lợi nhuận ${fmtTr(CFG.online.minProfit)} · ${ico('star')} ${mr} trở lên · không mất phí. Dưới ${mr} sao thì tạm ngưng`:`Từ ngày ${a.day} · két ${fmtTr(a.money)} · ${ico('star')} ${f1(a.rate)} trở lên · phí ${fmtTr(a.fee)}. Dưới ${f1(a.rate)} sao thì ${a.n} đóng, không nhận đơn`;
    return `<div class="rowi"><span class="icon"><i class="appdot" style="background:${a.c}"></i><i class="tfc" style="${shipBg(a.rows[0],0,40,39)}"></i></span><div><div class="nm">${a.n}</div><div class="sub">${cond}</div></div>${st}</div>`}).join('');
  return h;
}
function bindBoard(){const bt=document.querySelector('.board h2');if(bt)bt.onclick=()=>{R.taps=(R.taps||0)+1;clearTimeout(R.tapT);R.tapT=setTimeout(()=>R.taps=0,1500);if(R.taps>=5){R.taps=0;ownerLogin()}}}
/* ---------- TAB CON VUỐT NGANG ---------- */
function subTabs(id,tabs){R.sub=R.sub||{};const cur=Math.min(R.sub[id]||0,tabs.length-1);
  return `<div class="stabs${tabs.length>5?' w3':''}" data-st="${id}">${tabs.map((t,i)=>`<button class="stab${i===cur?' on':''}" data-si="${i}">${t[0]}</button>`).join('')}</div><div class="swipe" id="sw-${id}">${tabs.map(t=>`<div class="spage">${t[1]}</div>`).join('')}</div>`}
function bindSub(id){
  const sw=$('sw-'+id),bar=document.querySelector(`[data-st="${id}"]`);if(!sw)return;
  const fit=i=>{const p=sw.children[i];if(p)sw.style.height=p.offsetHeight+'px'};
  const i0=R.sub[id]||0;sw.scrollLeft=i0*sw.clientWidth;fit(i0);sw._fit=()=>fit(R.sub[id]||0);
  if(window.ResizeObserver){const ro=new ResizeObserver(()=>fit(R.sub[id]||0));[...sw.children].forEach(c=>ro.observe(c))}
  bar.onclick=e=>{const b=e.target.closest('[data-si]');if(!b)return;e.stopPropagation();sw.scrollTo({left:+b.dataset.si*sw.clientWidth,behavior:'smooth'})};
  let tm;sw.onscroll=()=>{const i=Math.round(sw.scrollLeft/sw.clientWidth);
    if(i!==R.sub[id]){R.sub[id]=i;bar.querySelectorAll('.stab').forEach((b,j)=>b.classList.toggle('on',j===i));fit(i)}
    clearTimeout(tm);tm=setTimeout(()=>fit(R.sub[id]||0),120)};
}
function renderPrep(){
  R.mode='prep';if(AU.ctx)musSync();document.body.classList.remove('selling');
  const tabs=[['kho','box','Kho'],['nangcap','tools','Nâng cấp'],['gia','price','Giá bán'],['danhgia','star','Đánh giá'],['tongket','chart','Tổng kết']];
  $('view').innerHTML=menuBoard()+
    `<div class="tabs" role="tablist">${tabs.map(([k,ic,l])=>`<button class="tab${R.tab===k?' on':''}" data-tab="${k}" role="tab"><span class="ti">${ico(ic)}</span>${l}</button>`).join('')}</div>
     <div class="pane" id="pane"></div>
     <div class="openbar" id="obar"></div>`;
  $('view').querySelector('.tabs').onclick=e=>{const b=e.target.closest('[data-tab]');if(b&&b.dataset.tab!==R.tab)switchTab(b.dataset.tab)};
  $('rename').onclick=renameDlg;
  bindBoard();
  ({kho:paneKho,nangcap:paneUpg,gia:paneGia,danhgia:paneRev,tongket:paneSum})[R.tab]();
  renderObar(true);head();
  setTimeout(prepChecks,300);
}
function refreshPrep(board){if(board){const b=document.querySelector('.board'),sg=document.querySelector('.sign');if(b&&sg){const t=document.createElement('div');t.innerHTML=menuBoard();sg.replaceWith(t.querySelector('.sign'));b.replaceWith(t.querySelector('.board'));$('rename').onclick=renameDlg;bindBoard()}}
  ({kho:paneKho,nangcap:paneUpg,gia:paneGia,danhgia:paneRev,tongket:paneSum})[R.tab]();renderObar();head()}
function obarHTML(){const t=planTotal();return t?`<button class="big" id="cook" ${t>S.money?'disabled':''}>${t>S.money?'Không đủ tiền · ':'Nấu & nhập · '}${fmt(t)}</button>`:(missingPrep().length?`<button class="big blocked" id="open">${ico('warn')} Chưa nấu ${missingPrep().map(m=>m[0]).join(' · ')}</button>`:`<button class="big" id="open">Mở cửa ngày ${S.day}</button>`)}
function renderObar(force){const b=$('obar');if(!b)return;const h=obarHTML();if(!force&&b._h===h)return;
  const old=b.firstElementChild,t=document.createElement('div');t.innerHTML=h;const n=t.firstElementChild;
  if(!force&&old&&old.id===n.id&&old.className===n.className&&!n.querySelector('img')){old.textContent=n.textContent;old.disabled=n.disabled}else{b.innerHTML=h}
  b._h=h;if($('open'))$('open').onclick=tryOpen;if($('cook'))$('cook').onclick=cook}
function switchTab(k){R.tab=k;document.querySelectorAll('#view .tabs [data-tab]').forEach(b=>b.classList.toggle('on',b.dataset.tab===k));
  ({kho:paneKho,nangcap:paneUpg,gia:paneGia,danhgia:paneRev,tongket:paneSum})[k]();renderObar()}
function itemIcon(k){const it=ITEMS[k];
  if(it.type==='base')return `<span class="bcup">${baseCup(k)}</span>`;
  if(it.type==='flav')return flavIcon(k,26);
  if(it.type==='top')return topIcon(k,1);
  return `<span class="icon">🥤</span>`;
}
const groupRows=(ks,fn)=>TGROUPS.map(G=>{const g=ks.filter(k=>ITEMS[k].g===G.g);return g.length?`<div class="tgl">${G.i} ${G.n}</div>`+g.map(fn).join(''):''}).join('');
function planTotal(){return Object.entries(R.plan).reduce((a,[k,q])=>a+q*ecost(k),0)}
function expected(){const sec=dayLen()*60,t=traffic()*(pricyItems().length?.2:1);return {walk:Math.round(sec/(9/t)*.85),onl:onlineActive()?Math.round(sec/(36/t)):0}}
function lifeTag(k){const l=CFG.life[k];return `<span class="life l${l>1?3:l}">${l?ico('hourglass')+' '+l+' ngày':'♾'}</span>`}
function paneKho(){
  const ex=expected(),un=k=>S.unlocked[k];
  const row=k=>{const c=ecost(k),n=qty(k),used=(S.used||{})[k]||0,p=R.plan[k]||0;
    const ex0=S.stock[k].filter(b=>b.q&&b.exp===S.day).reduce((a,b)=>a+b.q,0);
    return `<div class="rowi kho">${itemIcon(k)}<div><div class="nm">${ITEMS[k].n} ${lifeTag(k)}</div>
    <div class="sub${n?'':' low'}">${ico('box')} ${n}${S.day>1?` · ${ico('chartdown')} ${used}`:''} · ${fmt(c)}${ex0?` · <span class="warnline">${ico('warn')} ${ex0}</span>`:''}</div><div class="sub okline" id="pl-${k}"${p?'':' hidden'}>+${p} · ${fmt(p*c)}</div></div>
    <div class="step5"><button class="sbtn" data-d="${k}" data-v="-5" aria-label="Bớt 5">−</button><input type="number" inputmode="numeric" min="0" value="${p}" data-plan="${k}" aria-label="Số phần ${ITEMS[k].n}"><button class="sbtn" data-d="${k}" data-v="5" aria-label="Thêm 5">+</button></div></div>`};
  const empty='<p class="note" style="text-align:center">'+ico('lock')+' '+ico('tools')+'</p>';
  const fl=FLAV_KEYS.filter(un),tp=TOP_KEYS.filter(un);
  let h=loanCard()+evCard()+`<div class="fore big2">${ico('people')} ~${ex.walk}${ex.onl?` &nbsp; 📱 ~${ex.onl}`:''}</div>`;
  h+=subTabs('kho',[[ico('teapot')+' Trà',BASE_KEYS.filter(un).map(row).join('')],[ico('pearlbowl')+' Topping',groupRows(tp,row)],[ico('cupempty')+' Ly',row('cup')]]);
  h+=`<div class="legend">${ico('box')} đang có · ${ico('chartdown')} hôm qua dùng · ${ico('warn')} hết hạn hôm nay</div>`;
  $('pane').innerHTML=h;bindSub('kho');bindLoan();
  const upd=k=>{const p=R.plan[k]||0,i=document.querySelector(`[data-plan="${k}"]`),l=$('pl-'+k);if(i&&document.activeElement!==i)i.value=p;else if(i&&+i.value!==p)i.value=p;
    if(l){l.hidden=!p;l.textContent=`+${p} · ${fmt(p*ecost(k))}`}const sw=$('sw-kho');sw&&sw._fit&&sw._fit();renderObar()};
  $('pane').onclick=e=>{const b=e.target.closest('[data-d]');if(!b)return;const k=b.dataset.d;R.plan[k]=Math.max(0,(R.plan[k]||0)+ +b.dataset.v);upd(k)};
  $('pane').onchange=e=>{const i=e.target;if(!i.dataset.plan)return;const k=i.dataset.plan;R.plan[k]=Math.max(0,Math.round(+i.value||0));i.value=R.plan[k];upd(k)};
}
function cook(){const t=planTotal();if(t>S.money)return toast('Không đủ tiền, bớt số lượng lại nhé');
  S.money-=t;Object.entries(R.plan).forEach(([k,q])=>{if(!q)return;addStock(k,q);const g=S.cur.ing[k]=S.cur.ing[k]||{q:0,v:0};g.q+=q;g.v+=q*ecost(k)});R.plan={};save();toast('Đã nấu xong, sẵn sàng mở cửa');refreshPrep()}
function missingPrep(){const has=ks=>ks.some(k=>S.unlocked[k]&&qty(k)>0);
  return [!has(BASE_KEYS)&&[ico('teapot')+' Trà',0],!has(TOP_KEYS)&&[ico('pearlbowl')+' Topping',2],!qty('cup')&&[ico('cupempty')+' Ly',3]].filter(Boolean)}
function tryOpen(){
  const miss=missingPrep();
  if(miss.length){R.tab='kho';R.sub=R.sub||{};R.sub.kho=miss[0][1];renderPrep();toast(ico('warn')+' Chưa nấu: '+miss.map(m=>m[0]).join(', '));return}
  startDay();
}
function paneUpg(){
  const row=k=>`<div class="rowi${(S.off||{})[k]?' offm':''}">${itemIcon(k)}<div><div class="nm">${ITEMS[k].n}</div>${(S.off||{})[k]?'<div class="sub">Đã bỏ khỏi menu</div>':''}</div>${S.unlocked[k]?`<button class="sbtn ghost" data-moff="${k}"><b>✓</b>Bỏ khỏi menu</button>`:(S.off||{})[k]?`<button class="sbtn pri" data-mon="${k}"><b>Miễn phí</b>Thêm lại</button>`:`<button class="sbtn pri" data-un="${k}" ${S.money<ITEMS[k].unlock?'disabled':''}><b>${fmt(ITEMS[k].unlock)}</b>Mua</button>`}</div>`;
  const tea=BASE_KEYS.map(row).join('');
  const bRow=k=>{const n=qty(k),bs=S.stock[k].filter(b=>b.q>0),c=bottleCost(k);
    return `<div class="rowi">${itemIcon(k)}<div><div class="nm">${ITEMS[k].n}</div><div class="sub${n?'':' low'}">${n?`${ico('box')} Còn ${n} ly · `+bs.map(b=>`${b.q} ly hết hạn ngày ${b.exp}`).join(', '):'Hết hàng, chưa có trong menu'}</div></div><button class="sbtn pri" data-bottle="${k}" ${S.money<c?'disabled':''}><b>${fmt(c)}</b>Mua chai</button></div>`};
  const flav=`<div class="note">1 chai = ${CFG.bottleN} ly, dùng được ${CFG.bottleLife} ngày tính cả ngày mua. Mua 2 chai được ${CFG.bottleN*2} ly. Hết chai thì phải mua chai mới mới dùng được, chai quá hạn bị đổ bỏ.</div>`+FLAV_KEYS.map(bRow).join('');
  const top=groupRows(TOP_KEYS,row);
  const brandRow=`<div class="rowi"><span class="icon">🎨</span><div><div class="nm">Bộ nhận diện thương hiệu</div><div class="sub">Tự thiết kế tem thương hiệu in lên ly: màu nền, logo, tên quán, khẩu hiệu</div></div>${S.upg.brandKit?`<button class="sbtn" data-brand="1">🎨 Thiết kế</button>`:`<button class="sbtn pri" data-buybrand="1" ${S.money<BRAND_COST?'disabled':''}><b>${fmt(BRAND_COST)}</b>Mua</button>`}</div>`+(S.upg.brandKit&&S.brand?`<div class="brandprevrow">${temHTML(S.brand,88,true)}</div>`:'');
  const tbN=S.tablets||0,tabRow=`<div class="rowi"><span class="icon">${ico('phone')}</span><div><div class="nm">Tablet nhận đơn online (${tbN}/${APPS.length})</div><div class="sub">Mỗi tablet chạy 1 app giao hàng. Phải có tablet thì đơn Soppi mới đổ về, shipper mới tới lấy hàng</div></div>${tbN>=APPS.length?'<span class="okline">✓</span>':`<button class="sbtn pri" data-tablet="1" ${S.money<CFG.tablet?'disabled':''}><b>${fmtTr(CFG.tablet)}</b>Mua</button>`}</div>`;
  const eq=`<div class="wl" style="text-align:right;margin-bottom:2px">⚡ +${fmt(CFG.utilPerUpg)}/ngày</div>`+UPG.map(u=>`<div class="rowi"><span class="icon">${u.i}</span><div><div class="nm">${u.n}</div><div class="sub">${u.d}</div></div>${S.upg[u.id]?'<span class="okline">✓</span>':`<button class="sbtn pri" data-up="${u.id}" ${S.money<u.cost?'disabled':''}><b>${fmt(u.cost)}</b>Mua</button>`}</div>`).join('')+brandRow+tabRow;
  const staff=`<div class="note">Thuê một lần, sau đó trả lương mỗi ngày mở cửa. Có nhân viên thì toàn bộ tiền tip của khách là của nhân viên, quán không nhận. Cho nghỉ thì hết trả lương, gọi đi làm lại lúc nào cũng được, không tốn tiền thuê.</div>`+STAFF.map(u=>`<div class="rowi"><span class="icon">${ico('people')}</span><div><div class="nm">${u.n}</div>${u.d?`<div class="sub">${u.d}</div>`:''}<div class="sub">Lương ${fmt(CFG[u.wage])}/ngày</div></div>${S.upg[u.id]?`<button class="sbtn" data-fire="${u.id}"><b>✓</b>Cho nghỉ</button>`:S.day<u.from?`<span class="wl">Ngày ${u.from}</span>`:u.need&&!u.need()?`<span class="wl">${u.needT}</span>`:(S.hired||{})[u.id]?`<button class="sbtn pri" data-hire="${u.id}"><b>Gọi</b>đi làm</button>`:`<button class="sbtn pri" data-hire="${u.id}" ${S.money<u.cost?'disabled':''}><b>${u.cost?fmt(u.cost):'Không phí'}</b>Thuê</button>`}</div>`).join('');
  $('pane').innerHTML=subTabs('upg',[[ico('teapot')+' Trà',tea],[ico('strawberry')+' Hương',flav],[ico('pearlbowl')+' Topping',top],[ico('tools')+' Trang bị',eq],[ico('people')+' Nhân viên',staff],[ico('phone')+' Online',onlineCard()]]);
  bindSub('upg');
  $('pane').onclick=e=>{
    const a=e.target.closest('[data-un]'),b=e.target.closest('[data-up]'),hi=e.target.closest('[data-hire]'),fi=e.target.closest('[data-fire]'),bb=e.target.closest('[data-buybrand]'),bd=e.target.closest('[data-brand]'),bt=e.target.closest('[data-bottle]'),tb=e.target.closest('[data-tablet]'),aj=e.target.closest('[data-join]');
    if(bt){const k=bt.dataset.bottle,c=bottleCost(k);if(S.money<c)return;S.money-=c;addStock(k,CFG.bottleN);const g=S.cur.ing[k]=S.cur.ing[k]||{q:0,v:0};g.q+=CFG.bottleN;g.v+=c;syncFlav();save();toast('Đã mua chai '+low(ITEMS[k].n)+': '+qty(k)+' ly');refreshPrep(1);return}
    if((a||b||hi||bb||tb||aj)&&inDebt()){toast('Đang nợ, trả xong mới mua được');return}
    if(tb){if((S.tablets||0)>=APPS.length||S.money<CFG.tablet)return;S.money-=CFG.tablet;S.cur.equip.push({n:'Tablet nhận đơn online',v:CFG.tablet});S.tablets=(S.tablets||0)+1;save();toast('Đã mua tablet ('+S.tablets+'/'+APPS.length+')');refreshPrep();return}
    if(aj){const ap=APPS.find(x=>x.id===aj.dataset.join);if(!ap||S.money<ap.fee)return;S.money-=ap.fee;S.cur.equip.push({n:'Gia nhập '+ap.n,v:ap.fee});S.apps=S.apps||{};S.apps[ap.id]=true;save();toast('Đã gia nhập '+ap.n+((S.tablets||0)<APPS.filter(appJoined).length?'. Nhớ mua thêm tablet nhé':''));refreshPrep();return}
    if(bb){if(S.money<BRAND_COST)return;S.money-=BRAND_COST;S.cur.equip.push({n:'Bộ nhận diện thương hiệu',v:BRAND_COST});S.upg.brandKit=true;save();toast('Đã mua bộ nhận diện thương hiệu');refreshPrep();setTimeout(brandDlg,60);return}
    if(bd){brandDlg();return}
    const mo=e.target.closest('[data-moff]'),mn=e.target.closest('[data-mon]');
    if(mo){const k=mo.dataset.moff;if(ITEMS[k].type==='base'&&BASE_KEYS.filter(x=>S.unlocked[x]).length<2){toast('Menu phải còn ít nhất 1 loại trà');return}
      if(ITEMS[k].type==='top'&&TOP_KEYS.filter(x=>S.unlocked[x]).length<2){toast('Menu phải còn ít nhất 1 topping');return}
      S.off=S.off||{};S.off[k]=true;S.unlocked[k]=false;save();toast('Đã bỏ '+ITEMS[k].n+' khỏi menu. Thêm lại lúc nào cũng được, miễn phí');refreshPrep(1);return}
    if(mn){const k=mn.dataset.mon;S.off=S.off||{};delete S.off[k];S.unlocked[k]=true;save();toast('Đã thêm lại '+ITEMS[k].n+' vào menu');refreshPrep(1);return}
    if(hi){const u=STAFF.find(x=>x.id===hi.dataset.hire);S.hired=S.hired||{};const oth={staff1:'staff3',staff3:'staff1',guard1:'guard2',guard2:'guard1'}[u.id],othU=oth&&S.upg[oth]?STAFF.find(x=>x.id===oth):null,rest=othU?'. '+othU.n+' được cho nghỉ':'';if(oth)S.upg[oth]=false;if(S.hired[u.id]){S.upg[u.id]=true;save();toast(u.n+' đi làm lại'+rest);refreshPrep();return}if(S.money<u.cost){if(othU)S.upg[oth]=true;return}S.money-=u.cost;S.cur.equip.push({n:'Thuê '+u.n,v:u.cost});S.upg[u.id]=true;S.hired[u.id]=true;save();toast('Đã thuê '+u.n+rest);refreshPrep();return}
    if(fi){const u=STAFF.find(x=>x.id===fi.dataset.fire);ask(`<h2>Cho ${u.n.toLowerCase()} nghỉ?</h2><p>Những ngày nghỉ không phải trả lương. Muốn gọi đi làm lại thì bấm Gọi đi làm, không tốn tiền thuê.</p>`,[['Huỷ',()=>{}],['Cho nghỉ',()=>{S.upg[u.id]=false;save();toast('Đã cho nghỉ');refreshPrep()},1]]);return}
    if(a){const k=a.dataset.un;if(S.money<ITEMS[k].unlock)return;S.money-=ITEMS[k].unlock;S.cur.equip.push({n:'Công thức '+ITEMS[k].n,v:ITEMS[k].unlock});S.unlocked[k]=true;save();toast('Đã thêm '+ITEMS[k].n+' vào menu');refreshPrep(1)}
    if(b){const u=UPG.find(x=>x.id===b.dataset.up);if(S.money<u.cost)return;S.money-=u.cost;S.cur.equip.push({n:u.n,v:u.cost});S.upg[u.id]=true;save();toast('Đã lắp '+u.n);refreshPrep()}
  };
}
/* tem: tên quán luôn hiện đủ. Kiểu chữ: thẳng (tự thu nhỏ, dài quá thì xuống 2 dòng), cong trên, cong dưới */
let _tmc=null;function txtW(t,fs){/* chừa 12% cho khoảng cách chữ và chênh lệch phông */try{_tmc=_tmc||document.createElement('canvas').getContext('2d');_tmc.font=`800 ${fs}px "Baloo 2",system-ui,sans-serif`;return _tmc.measureText(t).width*1.12+t.length*.2}catch(e){return t.length*fs*.62}}
function temHTML(brand,px,full){if(!brand||!brand.i)return '';
  const bg=brand.bg||BRAND_BGS[0].c,tc=(BRAND_BGS.find(x=>x.c===bg)||BRAND_BGS[0]).t,fr=brand.frame||'round',rd=fr==='round',nl=brand.nl||'line';
  const nm=String(shopName()||'Tiệm Trà Nhỏ'),bw=Math.max(1.5,px*.025),ss=Math.max(6,Math.round(px*.072));
  const inner=px-2*bw-px*.12-2,slW=inner*(rd?.8:1);let sfs=ss;if(full&&brand.slogan)while(sfs>5&&txtW(brand.slogan,sfs)*.95>slW)sfs-=.5;
  const sl=full&&brand.slogan?`<div class="tem-sl" style="font-size:${sfs.toFixed(1)}px;max-width:${Math.round(slW)}px">${esc(brand.slogan)}</div>`:'';
  const H=rd?px:px*(nl==='line'?1:1),box=`width:${px}px;${rd||nl!=='line'?`height:${H}px;`:''}background:${bg};color:${tc};--tf:${tc};border-width:${bw.toFixed(1)}px;padding:${(px*.06).toFixed(1)}px`;
  if(nl==='line'){const rib=fr==='ribbon',W=inner*(rd?.86:1)-(rib?Math.max(10,px*.1)+6:0);let fs=Math.max(7,px*(rd?.1:.115)),two=false;const min=Math.max(5,px*.06);
    while(fs>min&&txtW(nm,fs)>W)fs-=.5;if(txtW(nm,fs)>W){two=true;fs=Math.max(min,px*.075);while(fs>5&&txtW(nm,fs)>W*1.9)fs-=.5}
    const ic=Math.round(px*(rd?(two?.34:.4):.5));
    return `<div class="tem tem-${fr}" style="${box}"><div class="tem-ic" style="width:${ic}px;height:${ic}px"><img src="${IMG}brand/${brand.i}.png" alt="" width="${ic}" height="${ic}"></div>
    <div class="tem-nm${two?' two':''}" style="font-size:${fs.toFixed(1)}px;max-width:${Math.round(W+(rib?Math.max(10,px*.1)+6:0))}px${rib?`;padding:1px ${Math.max(5,px*.05).toFixed(0)}px`:''}">${esc(nm)}</div>${sl}</div>`}
  /* chữ cong */
  const c=px/2,cy=H/2,Ro=px/2-bw-px*.05,top=nl==='arc';let fs=px*.13;const len=R=>2*Math.PI*R*(nm.length>16?.62:.45);
  const Rb=f=>top?Ro-f*.8:Ro-f*.25;while(fs>4&&txtW(nm,fs)>len(Rb(fs)))fs-=.5;const R=Rb(fs),id='ta'+Math.random().toString(36).slice(2,8);
  /* vòng tròn đủ: cong trên đi từ đáy theo chiều kim đồng hồ, cong dưới đi từ đỉnh ngược chiều; giữa đường là đỉnh / đáy tem */
  const d=top?`M ${c} ${cy+R} A ${R} ${R} 0 1 1 ${c} ${cy-R} A ${R} ${R} 0 1 1 ${c} ${cy+R}`:`M ${c} ${cy-R} A ${R} ${R} 0 1 0 ${c} ${cy+R} A ${R} ${R} 0 1 0 ${c} ${cy-R}`;
  const ic=Math.round(px*(nm.length>16?.34:.42));
  return `<div class="tem tem-${fr} tem-arc" style="${box}"><svg class="tem-svg" viewBox="0 0 ${px} ${H}" width="${px}" height="${H}" aria-label="${esc(nm)}"><path id="${id}" d="${d}" fill="none"/><text font-size="${fs.toFixed(1)}" font-weight="800" fill="${tc}" style="font-family:'Baloo 2',system-ui,sans-serif"><textPath href="#${id}" startOffset="50%" text-anchor="middle">${esc(nm)}</textPath></text></svg>
    <div class="tem-ic" style="width:${ic}px;height:${ic}px;margin-${top?'top':'bottom'}:${Math.round(px*.1)}px"><img src="${IMG}brand/${brand.i}.png" alt="" width="${ic}" height="${ic}"></div>${top?sl:''}</div>`}
function brandDlg(){$('card').onchange=null;
  const cur=S.brand?{...S.brand}:{bg:BRAND_BGS[2].c,i:BRAND_ICONS[21],frame:'round',slogan:''};
  const draw=()=>{
    $('card').innerHTML=`<h2>🎨 Thiết kế tem thương hiệu</h2><p>Tem sẽ in lên mọi ly bạn pha. Tên quán tự hiện theo tên đã đặt.</p>
    <div class="bprev">${temHTML(cur,140,true)}</div>
    <div class="bsec">Kiểu khung</div>
    <div class="bframes">${BRAND_FRAMES.map(f=>`<button class="bfr${f.id===(cur.frame||'round')?' on':''}" data-bf="${f.id}">${f.n}</button>`).join('')}</div>
    <div class="bsec">Kiểu chữ tên quán</div>
    <div class="bframes">${[['line','Thẳng hàng'],['arc','Cong phía trên'],['arcb','Cong phía dưới']].map(([k,n])=>`<button class="bfr${k===(cur.nl||'line')?' on':''}" data-bn="${k}">${n}</button>`).join('')}</div>
    <div class="bsec">Màu nền tem</div>
    <div class="bcolors">${BRAND_BGS.map(o=>`<button class="bcol${o.c===cur.bg?' on':''}" data-bc="${o.c}" style="background:${o.c}" aria-label="Màu nền"></button>`).join('')}</div>
    <div class="bsec">Khẩu hiệu (tuỳ chọn)</div>
    <input id="bSlo" class="pinbox nm" maxlength="24" value="${esc(cur.slogan||'')}" placeholder="vd: Trà sữa mỗi ngày" aria-label="Khẩu hiệu">
    <div class="bslos">${BRAND_SLOGANS.map(s=>`<button class="bslo" data-bs="${esc(s)}">${esc(s)}</button>`).join('')}<button class="bslo" data-bs="">Bỏ trống</button></div>
    <div class="bsec">Hình logo</div>
    <div class="bgrid">${BRAND_ICONS.map(k=>`<button class="bico${k===cur.i?' on':''}" data-bi="${k}" aria-label="Logo"><img src="${IMG}brand/${k}.png" alt="" loading="lazy"></button>`).join('')}</div>
    <div class="askbtns"><button class="big" id="bSave">Lưu tem</button><button class="sbtn ghost" id="bClose">Đóng</button></div>`;
    $('modal').hidden=false;
    const syncSlo=()=>{cur.slogan=$('bSlo').value};
    $('card').querySelectorAll('[data-bf]').forEach(el=>el.onclick=()=>{syncSlo();cur.frame=el.dataset.bf;draw()});
    $('card').querySelectorAll('[data-bn]').forEach(el=>el.onclick=()=>{syncSlo();cur.nl=el.dataset.bn;draw()});
    $('card').querySelectorAll('[data-bc]').forEach(el=>el.onclick=()=>{syncSlo();cur.bg=el.dataset.bc;draw()});
    $('card').querySelectorAll('[data-bi]').forEach(el=>el.onclick=()=>{syncSlo();cur.i=el.dataset.bi;draw()});
    $('card').querySelectorAll('[data-bs]').forEach(el=>el.onclick=()=>{cur.slogan=el.dataset.bs;draw()});
    $('bSlo').oninput=()=>{cur.slogan=$('bSlo').value};
    $('bSlo').onchange=()=>{cur.slogan=$('bSlo').value;draw()};
    $('bSave').onclick=()=>{syncSlo();S.brand={bg:cur.bg,i:cur.i,frame:cur.frame||'round',nl:cur.nl||'line',slogan:(cur.slogan||'').trim().slice(0,24)};save();$('modal').hidden=true;toast('Đã lưu tem quán');renderPrep()};
    $('bClose').onclick=()=>{$('modal').hidden=true};
  };
  draw();
}
function marginLine(k){
  const o={base:k,tops:[],cheese:false,size:'M'},p=price(o),c=unitCost(o),idx=p/price(o,DEF_SELL);
  const w=p>CFG.itemCap?` · <span class="warnline">${ico('warn')} đắt</span>`:itemPricey(k)?` · <span class="warnline">${ico('warn')} đắt</span>`:idx<.9?' · <span class="okline">👍 rẻ</span>':'';
  return `Vốn ${fmt(c)} · Lãi ${fmt(p-c)}${w}`;
}
function topLine(k){
  const p=S.sell[k],c=CFG.cost[k],idx=p/DEF_SELL[k];
  const w=p>ADD_CAP?` · <span class="warnline">${ico('warn')} không ai gọi</span>`:p>ADD_WARN?` · <span class="warnline">${ico('warn')} ít ai gọi</span>`:idx>1.3?` · <span class="warnline">${ico('warn')} đắt</span>`:idx<.8?' · <span class="okline">👍 rẻ</span>':'';
  return `💡 ${fmt(DEF_SELL[k])} · Vốn ${fmt(c)} · Lãi ${fmt(p-c)}${w}`;
}
function inputRow(icon,name,sub,group,key,val){
  return `<div class="rowi">${icon}<div><div class="nm">${name}</div><div class="sub" id="m-${group}-${key}">${sub}</div></div><div class="pin"><input type="number" inputmode="decimal" min="0" step="0.5" value="${val/1000}" data-g="${group}" data-k="${key}" aria-label="${name} (nghìn đồng)"><span>k</span></div></div>`;
}
function giaWarn(){return '';const pi=pricyItems(),bad=pi.length;
  return `<div class="fore${bad?' warnc2':''}">${ico('warn')} Món nào (trà, hương, topping) trên ${fmt(CFG.itemCap)} thì khách chê mắc, quán vắng 80% khách. Một ly trên ${fmt(CFG.priceCap)} thì 60% khách bỏ đi. Size L trên ${fmt(CFG.sizeWarn)} là đắt, 90% khách không chọn size L. Size L tối đa ${fmt(CFG.sizeCap)}, để đúng mức đó thì không ai chọn size L và quán vắng 80% khách.${bad?` <b>Đang quá giá: ${pi.map(k=>k==='L'?'Size L':ITEMS[k].n).join(', ')}</b>`:''}</div>`}
function sizeLine(){const p=S.sell.L;return '💡 '+fmt(DEF_SELL.L)+(p>=CFG.sizeCap?` · <span class="warnline">${ico('warn')} đắt</span>`:p>CFG.sizeWarn?` · <span class="warnline">${ico('warn')} đắt</span>`:'')}
function paneGia(){
  const tea=BASE_KEYS.filter(k=>S.unlocked[k]).map(k=>inputRow(itemIcon(k),ITEMS[k].n+' (M)',marginLine(k),'sell',k,S.sell[k])).join('');
  const flav=FLAV_KEYS.filter(k=>S.unlocked[k]).map(k=>inputRow(itemIcon(k),ITEMS[k].n,topLine(k),'sell',k,S.sell[k])).join('')||'<p class="note" style="text-align:center">'+ico('lock')+' '+ico('tools')+'</p>';
  const top=groupRows(TOP_KEYS.filter(k=>S.unlocked[k]),k=>inputRow(itemIcon(k),ITEMS[k].n,topLine(k),'sell',k,S.sell[k]));
  const size=inputRow('<span class="icon">⬆️</span>','Size L',sizeLine(),'sell','L',S.sell.L);
  const maxCup=(()=>{const b=Math.max(...BASE_KEYS.filter(k=>S.unlocked[k]).map(k=>S.sell[k])),f=Math.max(0,...FLAV_KEYS.filter(k=>S.unlocked[k]).map(k=>S.sell[k])),t=TOP_KEYS.filter(k=>S.unlocked[k]).map(k=>S.sell[k]).sort((a,b)=>b-a).slice(0,2).reduce((a,x)=>a+x,0);return b+f+t+S.sell.L})();
  const warn=`<div class="fore${maxCup>CFG.priceCap?' warnc2':''}">${ico('warn')} Một ly (gồm hương, topping, size L) trên ${fmt(CFG.priceCap)} thì 60% khách bỏ đi.${maxCup>CFG.priceCap?` Ly đắt nhất của quán đang là <b>${fmt(maxCup)}</b>.`:''}</div>`;
  $('pane').innerHTML=`<div id="giaWarn">${giaWarn()}</div>`+subTabs('gia',[[ico('teapot')+' Trà',tea],[ico('strawberry')+' Hương',flav],[ico('pearlbowl')+' Topping',top],['⬆️ Size',size]]);
  bindSub('gia');
  $('pane').onchange=e=>{const i=e.target;if(!i.dataset.g)return;let v=Math.max(0,Math.round((+i.value||0)*2)*500);
    if(i.dataset.k==='L'&&v>CFG.sizeCap){v=CFG.sizeCap;toast('Phụ thu size L tối đa '+fmt(CFG.sizeCap))}
    else if(v>sellMax(i.dataset.k)){v=sellMax(i.dataset.k);toast('Giá tối đa '+fmt(v))}
    S[i.dataset.g][i.dataset.k]=v;
    i.value=v/1000;save();
    BASE_KEYS.filter(k=>S.unlocked[k]).forEach(k=>{const m=$('m-sell-'+k);if(m)m.innerHTML=marginLine(k)});
    [...FLAV_KEYS,...TOP_KEYS].forEach(k=>{const m=$('m-sell-'+k);if(m)m.innerHTML=topLine(k)});{const m=$('m-sell-L');if(m)m.innerHTML=sizeLine()}
    const gw=$('giaWarn');if(gw)gw.innerHTML=giaWarn();
    const b=document.querySelector('.board');if(b){const t=document.createElement('div');t.innerHTML=menuBoard();b.replaceWith(t.querySelector('.board'));bindBoard()}};
}
let revF=null;/* lọc đánh giá: null = tất cả, 1..5 = số sao, 'nr' = chưa trả lời */
function paneRev(){
  const r=rating(),all=S.reviews;
  const cnt=[5,4,3,2,1].map(s=>all.filter(x=>x.s===s).length),mx=Math.max(1,...cnt),nr=all.filter(x=>!x.rp).length;
  const list=all.map((x,i)=>[x,i]).filter(([x])=>revF==null||(revF==='nr'?!x.rp:x.s===revF));
  let h=`<div class="revsum"><div class="revbig"><b>${r.toFixed(1).replace('.',',')}</b><span class="stars">${starStr(r)}</span><div class="note">💬 ${revCount()}</div></div>
  <div class="dist">${[5,4,3,2,1].map((s,i)=>`<button class="dstr${revF===s?' on':''}" data-rf="${s}" aria-label="Lọc đánh giá ${s} sao"><span>${s}★</span><div class="bar"><i style="width:${cnt[i]/mx*100}%"></i></div><span>${cnt[i]}</span></button>`).join('')}</div></div>
  <div class="revflt"><button class="chip${revF==null?' on':''}" data-rf="all">Tất cả</button><button class="chip${revF==='nr'?' on':''}" data-rf="nr">Chưa trả lời · ${nr}</button>${revF!=null&&revF!=='nr'?`<button class="chip on" data-rf="all">${revF}★ ✕</button>`:''}</div>`;
  const PER=15,pages=Math.max(1,Math.ceil(list.length/PER));revPage=Math.min(Math.max(1,revPage),pages);
  const pager=pages>1?pagerHTML(revPage,pages):'';
  h+=pager;
  h+=list.length?list.slice((revPage-1)*PER,revPage*PER).map(([x,gi])=>`<div class="rev${x.s<=2?' bad':''}">${x.st!=null&&STARS[x.st]?`<span class="rface rstar"><i class="rfimg" style="${starBg(STARS[x.st].f,1,40,39)}"></i></span>`:`<span class="rface">${x.f||'🙂'}</span>`}<div class="rbody"><div class="rtop"><b>${esc(x.n||'Khách')}</b>${x.tg?`<span class="tag" style="background:#9b5fd0;color:#fff">⭐ ${esc(x.tg)}</span>`:''}${x.o?'<span class="tag">'+ico('phone')+'</span>':''}<span class="rday">Ngày ${x.d}</span></div><div class="stars">${starStr(x.s)}</div><p>${esc(x.t)}</p>${x.rp?`<div class="rrep"><b>Phản hồi của quán</b><span>${esc(x.rp)}</span><button class="rplink" data-rp="${gi}">Sửa</button></div>`:`<button class="rpbtn" data-rp="${gi}">Trả lời</button>`}</div>${x.b&&ITEMS[x.b]?`<span class="rcup">${cupHTML({base:x.b,flav:x.fl,tops:(x.tp||[]).filter(t=>ITEMS[t]),size:x.sz||'M',ice:null},true)}</span>`:''}</div>`).join(''):`<p class="note">${ico('star')} ${all.length?'Không có đánh giá nào khớp':'Chưa có đánh giá'}</p>`;
  h+=pager;
  $('pane').innerHTML=h;
  $('pane').querySelectorAll('[data-rf]').forEach(b=>b.onclick=()=>{const v=b.dataset.rf;revF=v==='all'?null:v==='nr'?'nr':(revF===+v?null:+v);revPage=1;paneRev()});
  $('pane').querySelectorAll('[data-pg]').forEach(b=>b.onclick=()=>{revPage=+b.dataset.pg;paneRev();const f=$('pane').querySelector('.pager');f&&f.scrollIntoView({block:'nearest'})});
  $('pane').querySelectorAll('[data-rp]').forEach(b=>b.onclick=()=>replyDlg(+b.dataset.rp));
}
let revPage=1;
function replyDlg(i){const x=S.reviews[i];if(!x)return;
  const done=v=>{v=String(v||'').replace(/\s+/g,' ').trim().slice(0,200);if(v)x.rp=v;else delete x.rp;save();paneRev();toast(v?'Đã gửi phản hồi':'Đã xoá phản hồi')};
  const btns=[['Huỷ',()=>{}]];if(x.rp)btns.push(['Xoá phản hồi',()=>done('')]);btns.push(['Gửi phản hồi',()=>done(($('rpIn')||{}).value),1]);
  ask(`<h2>Trả lời ${esc(x.n||'khách')}</h2><div class="rpq"><div class="stars">${starStr(x.s)}</div>${esc(x.t)}</div><textarea id="rpIn" class="rpin" maxlength="200" placeholder="Cảm ơn bạn đã ghé quán…" aria-label="Phản hồi của quán">${esc(x.rp||'')}</textarea>`,btns);
  setTimeout(()=>{const t=$('rpIn');if(t)t.focus()},60)}
function pagerHTML(cur,n){const nums=[];
  for(let i=1;i<=n;i++)if(i===1||i===n||Math.abs(i-cur)<=1)nums.push(i);else if(nums[nums.length-1]!=='…')nums.push('…');
  return `<div class="pager"><button data-pg="${cur-1}" ${cur<=1?'disabled':''} aria-label="Trang trước">‹</button>${nums.map(i=>i==='…'?'<span>…</span>':`<button data-pg="${i}" class="${i===cur?'on':''}" aria-label="Trang ${i}">${i}</button>`).join('')}<button data-pg="${cur+1}" ${cur>=n?'disabled':''} aria-label="Trang sau">›</button></div>`}

/* ---------- SELL VIEW ---------- */
function cupHTML(d,mini){
  const tops=(d.tops||[]).filter(t=>ITEMS[t]),foam=tops.find(t=>ITEMS[t].g==='foam');
  let h=`<div class="cup${d.size==='L'?' L':''}${mini?' mini':''}"><div class="straw"></div><div class="lid"></div><div class="glass">`;
  h+=`<div class="liquid${d.base?' full':''}" style="background:${d.base&&ITEMS[d.base]?ITEMS[d.base].c:'transparent'}"></div>`;
  if(d.base&&d.flav&&ITEMS[d.flav])h+=`<div class="flavband" style="background:${ITEMS[d.flav].c}"></div>`;
  if(d.base&&d.ice&&d.ice!=='Không đá'){const n=d.ice==='Ít đá'?2:4;for(let i=0;i<n;i++)h+=`<span class="ice" style="left:${20+i*16}%;top:${(foam?30:18)+(i%2)*8}%"></span>`}
  tops.filter(t=>t!==foam).forEach((t,ti)=>{for(let i=0;i<9;i++){const l=18+((i*37+ti*19)%60),b=3+((i*23+ti*13)%20);h+=`<span class="tp g-${ITEMS[t].g} k-${t}" style="left:${l}%;bottom:${b}%;background:${pieceBg(t,i)};animation-delay:${i*40}ms"></span>`}});
  h+=`<div class="foam${foam?' on':''}"${foam?` style="background:${ITEMS[foam].c}"`:''}></div>`;
  if(!mini&&d.base&&S.upg&&S.upg.brandKit&&S.brand&&S.brand.i)h+=`<div class="cuptem">${temHTML(S.brand,66,false)}</div>`;
  return h+`</div></div>`;
}
function orderTx(o){
  const on=cup&&cup.used, sameTops=cup&&cup.tops.length===o.tops.length&&o.tops.every(t=>cup.tops.includes(t))&&cup.cheese===o.cheese;
  const it=(txt,ok)=>`<span class="oi${ok?' ok':''}">${txt}</span>`;
  const tops=(o.tops.length?o.tops.map(t=>ITEMS[t].s).join(' + '):'Không topping')+(o.cheese?' + Kem cheese':'');
  return `<div class="ol"><span class="n">1</span>${it('<b>'+ITEMS[o.base].n+'</b>',cup&&cup.base===o.base)}</div>
  <div class="ol"><span class="n">2</span>${it('Size '+o.size,cup&&cup.size===o.size)}</div>
  <div class="ol"><span class="n">3</span>${it(tops,on&&sameTops)}</div>
  ${o.sugar!=null?`<div class="ol"><span class="n">4</span>${it(o.sugar+'% đường',cup&&cup.sugar===o.sugar)}</div>
  <div class="ol"><span class="n">5</span>${it(o.ice,cup&&cup.ice===o.ice)}</div>`:''}`;
}
function shortOrder(o){const tl=o.tops.map(t=>ITEMS[t].s);
  return `<b>${dname(o)}</b> · <b>${o.size}</b> · ${tl.join(' + ')||'—'}${o.sugar!=null?` · ${o.sugar}% · ${o.ice}`:''}`}
function sentence(c){
  const o=c.order,n=c.cups.length,k=c.cups.indexOf(o)+1,ice={'Không đá':'không đá','Ít đá':'ít đá','Đá thường':'đá bình thường'}[o.ice];
  const tl=o.tops.map(t=>low(ITEMS[t].n));if(o.cheese)tl.push('kem cheese');
  const tops=tl.length?(tl.length>2?tl.slice(0,-1).join(', ')+' và '+tl[tl.length-1]:tl.join(' với ')):'không topping';
  const tail=o.sugar!=null?`, ${tops}, ${o.sugar}% đường và ${ice}`:tl.length?` với ${tops}`:`, ${tops}`;
  if(n>1)return `<span class="cupno">Ly ${k}:</span> <b>${low(dname(o))}</b> size <b>${o.size}</b>${tail}.`;
  return `${c.say} 1 ly <b>${low(dname(o))}</b> size <b>${o.size}</b>${tail}${c.end}`;
}
function iconStrip(o){
  const ok=k=>{if(!cup)return false;
    if(k==='tops')return cup.used&&cup.tops.length===o.tops.length&&o.tops.every(t=>cup.tops.includes(t))&&cup.cheese===o.cheese;
    return cup[k]===o[k]};
  const tile=(k,inner,lab)=>`<div class="ic${ok(k)?' ok':''}">${inner}${lab?`<small>${lab}</small>`:''}</div>`;
  const tp=o.tops.map(t=>topIcon(t)).join('');
  const iceN={'Không đá':0,'Ít đá':1,'Đá thường':2}[o.ice];
  return `<div class="icons">
   ${tile('base',baseCup(o.base),'')}
   ${o.flav?tile('flav',flavIcon(o.flav,20),''):''}
   ${tile('size',sizeIc(o.size),o.size)}
   ${tile('tops',tp?`<span class="tps">${tp}</span>`:'<span class="none">—</span>','')}
   ${o.sugar!=null?tile('sugar',sugarIc(o.sugar),o.sugar+'%'):''}
   ${o.sugar!=null?tile('ice',iceIc(o.ice),''):''}
  </div>`;
}
function chip(g,v,label){return `<button class="chip${cup[g]===v?' on':''}" data-g="${g}" data-v="${v}">${label??v}</button>`}
const baseCup=k=>cupHTML({base:k,tops:[],cheese:false,size:'M',ice:null},true);
const sizeIc=z=>`<span class="mcup ${z}"></span>`;
const sugarIc=v=>`<span class="sbar"><i style="height:${v}%"></i></span>`;
const iceIc=v=>{const n={'Không đá':0,'Ít đá':1,'Đá thường':2}[v];return n?`<span class="cubes">${'<i></i>'.repeat(n)}</span>`:'<span class="none">⊘</span>'};
const SINFO={tea:[ico('teapot'),'Trà + Size'],flav:[ico('strawberry'),'Hương'],top:[ico('pearlbowl'),'Topping'],sugar:['🍬','Đường'],ice:['🧊','Đá']};
function autoServe(){
  if(!R.running||!cup.used)return;const my=cup;clearTimeout(R.autoT);
  R.autoT=setTimeout(()=>{if(cup!==my||!R.running)return;
    // 1) ly khớp đúng đơn của ai (khách tới trước được ưu tiên) thì đưa luôn
    const cands=[];pSlots().forEach((c,i)=>{if(c&&c.cups.some((o,j)=>!c.done[j]&&matches(cup,o)))cands.push({id:c.id,go:()=>serve(i)})});
    R.online.forEach((c,j)=>{if(matches(cup,c.order))cands.push({id:c.id,go:()=>serveOnline(j)})});
    if(cands.length){cands.sort((a,b)=>a.id-b.id)[0].go();return}
    // 2) ly đã pha xong hết bước mà không khớp ai: đưa cho khách đang pha cho, tính là sai
    const lv=level(),complete=cup.base&&cup.size&&(lv>=2?(cup.sugar&&cup.ice):cup.tops.length>=maxTop());
    if(!complete)return;const o=targetOrder();if(!o)return;
    const i=pSlots().findIndex(c=>c&&c.cups.includes(o));if(i>=0)return serve(i);
    const j=R.online.findIndex(c=>c.order===o);if(j>=0)serveOnline(j);
  },220);
}
function targetOrder(){
  const all=[];[...pSlots().filter(Boolean),...R.online].sort((a,b)=>a.id-b.id).forEach(c=>c.cups.forEach((o,j)=>{if(!c.done[j])all.push(o)}));
  const fl=cup.flav&&cup.flav!=='none'?cup.flav:null;
  const m=all.filter(o=>(!cup.base||o.base===cup.base)&&(!cup.size||o.size===cup.size)&&(!cup.flav||(o.flav||null)===fl));
  return m[0]||all[0]||null;
}
function stepsAvail(){const a=['tea'];if(FLAV_KEYS.some(k=>S.unlocked[k]))a.push('flav');a.push('top');if(level()>=2)a.push('sugar','ice');return a}
function useCup(){if(cup.used)return true;if(!take('cup')){toast('Hết ly! Nhập thêm ở kho ngày mai');return false}R.today.cogs+=CFG.cost.cup;cup.cost+=CFG.cost.cup;use('cup');cup.used=true;return true}
function use(k){R.today.used[k]=(R.today.used[k]||0)+1}
function consume(k){take(k);use(k);R.today.cogs+=CFG.cost[k];cup.cost+=CFG.cost[k]}
function spoilCup(){if(cup.used){const r=S.cur;r.spoil=r.spoil||{n:0,v:0};r.spoil.n++;r.spoil.v+=cup.cost}cup=newCup()}
const maxTop=()=>level()>=3?4:1;
function addIng(kind,k){
  if(!qty(k))return toast('Hết '+ITEMS[k].n);
  if(kind==='base'){if(cup.base===k)return;if(!useCup())return;consume(k);cup.base=k}
  else if(kind==='flav'){if(cup.flav===k)return;if(!useCup())return;consume(k);cup.flav=k}
  else if(kind==='top'){if(cup.tops.includes(k))return toast('Muốn bỏ topping thì đổ ly làm lại');if(cup.tops.length+(cup.cheese?1:0)>=maxTop())return toast('Tối đa '+maxTop()+' topping');if(!useCup())return;consume(k);cup.tops.push(k)}
  else{if(cup.cheese)return;if(cup.tops.length>=maxTop())return toast('Tối đa '+maxTop()+' topping');if(!useCup())return;consume(k);cup.cheese=true}
}

/* ---------- QUẦY PHA 3.0 (theo tranh vẽ) ---------- */
const Q3Y=76,IMG='img/';
const JAR_K=['tra','matcha','hong','luc','olong','thai'],JAR_X=[198,276,353,430,507,584];
const JAR_L={tra:['TRÀ','SỮA'],matcha:['MATCHA'],hong:['HỒNG','TRÀ'],luc:['LỤC','TRÀ'],olong:['OLONG'],thai:['TRÀ','THÁI']};
const TRAY_K=['tcden','tcvang','tcsoi','popping','thach','cunang','thachtc','suongsao','thachcf','pmvien','pmtuoi','thachpm'];
const TCOL=[[285,392],[402,512],[520,632],[640,750]],TROW=[[620,718],[728,826],[836,934]],BADGE_X=[380,498,617,736],BADGE_Y=[634,740,845];
const BIN_K=['cheese','fmatcha','fsalt','fube','ice','sugar'],BINS=[[12,125],[147,250],[270,374],[394,497],[517,622],[637,745]];
const BIN_LB=['FOAM<br>CHEESE','FOAM<br>MATCHA','FOAM<br>MUỐI','FOAM<br>UBE','ĐÁ VIÊN','NƯỚC<br>ĐƯỜNG'];
const BTL_K=['f_vai','f_dao','f_dau','f_nho','f_oi','f_xoai','f_mang','f_tao','f_chanh','f_me','f_dua','f_choco'],BTL_X=[42,104,166,229,291,353,415,477,539,602,664,726];
const Q3INK='#4a3526';
function pc(k,x,y,i){
  switch(k){
    case 'tcden':return `<circle cx="${x}" cy="${y}" r="4.6" fill="#2b1d14" stroke="#150c07" stroke-width=".7"/><circle cx="${x-1.5}" cy="${y-1.6}" r="1.2" fill="#fff" opacity=".45"/>`;
    case 'tcvang':return `<circle cx="${x}" cy="${y}" r="4.6" fill="#e0a526" stroke="#a8740e" stroke-width=".8"/><circle cx="${x-1.5}" cy="${y-1.6}" r="1.3" fill="#fff" opacity=".6"/>`;
    case 'popping':return `<circle cx="${x}" cy="${y}" r="4.8" fill="#f28fb0" fill-opacity=".9" stroke="#c9587f" stroke-width=".8"/><circle cx="${x-1.6}" cy="${y-1.7}" r="1.7" fill="#fff" opacity=".7"/>`;
    case 'pmvien':return `<circle cx="${x}" cy="${y}" r="4.6" fill="#f7d56b" stroke="#c99a22" stroke-width=".8"/><circle cx="${x-1.4}" cy="${y-1.5}" r="1.2" fill="#fff" opacity=".6"/>`;
    case 'tcsoi':return `<path d="M${x-6} ${y+(i%2?2:-1)}q3 -5 6 0t6 0" fill="none" stroke="#6b4a38" stroke-width="3" stroke-linecap="round"/>`;
    case 'pmtuoi':return `<path d="M${x-6} ${y+2}q-1 -6 4 -6q2 -3 5 0q4 0 3 5q1 4 -4 4h-5q-4 0 -3 -3z" fill="#fff4d6" stroke="#e0c47c" stroke-width=".8"/>`;
    case 'thach':return `<circle cx="${x}" cy="${y}" r="4.6" fill="#fbf8f0" stroke="#a89c86" stroke-width=".8"/><circle cx="${x-1.5}" cy="${y-1.6}" r="1.3" fill="#fff"/>`;
    case 'cunang':return `<rect x="${x-3.4}" y="${y-3.4}" width="6.8" height="6.8" rx="1.5" fill="#9fd49a" stroke="rgba(0,0,0,.25)" stroke-width=".7"/>`;
    case 'thachtc':return `<rect x="${x-4.2}" y="${y-4.2}" width="8.4" height="8.4" rx="2" fill="${['#f7941d','#ee4d2d','#fbb03b','#fbfaf4'][i%4]}" fill-opacity=".95" stroke="#5a3d2b" stroke-width=".7"/>`;
    case 'suongsao':return `<rect x="${x-4.3}" y="${y-4.3}" width="8.6" height="8.6" rx="1.5" fill="#1f2a24" stroke="#0c120f" stroke-width=".7"/><path d="M${x-2.5} ${y-2.5}h3" stroke="#fff" stroke-opacity=".4" stroke-width="1.2"/>`;
    case 'thachcf':return `<rect x="${x-4.3}" y="${y-4.3}" width="8.6" height="8.6" rx="1.5" fill="#5a3a26" stroke="#2e1c11" stroke-width=".7"/><path d="M${x-2.5} ${y-2.5}h3" stroke="#fff" stroke-opacity=".3" stroke-width="1.2"/>`;
    case 'thachpm':return `<rect x="${x-4.5}" y="${y-4.5}" width="9" height="9" rx="2" fill="#f3d98a" stroke="#b8923a" stroke-width=".7"/><rect x="${x-3}" y="${y-3}" width="3" height="3" rx="1" fill="#fff8dc"/>`;
  }return ''}
const q3pts=n=>Array.from({length:n},()=>[Math.random()*2-1,Math.random()*6]);
/* một muỗng topping: xếp dày 3 hàng dưới đáy ly như ly thật */
function q3layer(k){const rows=k==='tcsoi'?3:3,gap=k==='tcsoi'?13:11,out=[];
  for(let r=0;r<rows;r++){const y=BY-6-r*9.4,w=(halfAt(y)-6)*2,n=Math.max(3,Math.floor(w/gap)+1);
    for(let j=0;j<n;j++){if(r===rows-1&&Math.random()<.25)continue;const u=(n===1?0:(j/(n-1))*2-1)+(r%2?.5/n:0)+(Math.random()-.5)*.08;
      out.push([Math.max(-1,Math.min(1,u)),r*9.4+(Math.random()-.5)*2.4])}}
  return out}
const q3mix=(a,b,t)=>{const p=h=>[1,3,5].map(i=>parseInt(h.substr(i,2),16));const A=p(a),B=p(b);return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*t).toString(16).padStart(2,'0')).join('')};
function liqCol(c){if(!c.base||!ITEMS[c.base])return '#e8c9a8';let col=ITEMS[c.base].c;if(c.flav&&ITEMS[c.flav])col=q3mix(col,ITEMS[c.flav].c,.3);if(c.mixed)col=q3mix(col,'#7d6f55',.45);return col}
const CX=55.6,BY=141,LH=105,halfAt=y=>y<51.7?44:44-(y-51.7)/(136.5-51.7)*11.1;
function glassHTML(c,opt){opt=opt||{};
  const fill=c.fill||0,surf=BY-Math.min(fill,1)*LH,vt=c.vt||[],vi=c.vi||[],foams=(c.tops||[]).filter(t=>ITEMS[t]&&ITEMS[t].g==='foam');let inner='';
  if(fill>0||opt.pour)inner+=`<rect class="lq" x="0" y="${surf}" width="110" height="${BY-surf+8}" fill="${liqCol(c)}"/><rect class="lqh" x="0" y="${surf}" width="110" height="3.5" fill="#fff" opacity=".3"/>`;
  vt.forEach((p,i)=>{const big=p.pts.length>10,sc=big?1.3:1;p.pts.forEach(([u,v],j)=>{const y=BY-(big?6:5)-v-i*(big?25:9),x=CX+u*(halfAt(y)-(big?7:6));inner+=big?`<g transform="translate(${x} ${y}) scale(${sc}) translate(${-x} ${-y})">${pc(p.k,x,y,j+i)}</g>`:pc(p.k,x,y,j+i)})});
  const iceTop=fill>0?surf:BY-(8+vt.length*25);
  vi.forEach(([u,v,r])=>{const x=CX+u*(halfAt(iceTop)-12);inner+=`<rect x="${x-8}" y="${iceTop+v}" width="16" height="16" rx="4" fill="#f2fbff" fill-opacity=".75" stroke="#8fb9cf" stroke-width="1.5" transform="rotate(${r} ${x} ${iceTop+v+8})"/>`});
  let fy=fill>0?surf:iceTop;
  foams.forEach(k=>{const th=13;fy-=th-3;const w=halfAt(fy)*2+4,x0=CX-w/2;
    inner+=`<path d="M${x0} ${fy+th}V${fy+5}q${w/8} -8 ${w/4} 0t${w/4} 0t${w/4} 0t${w/4} 0V${fy+th}Z" fill="${ITEMS[k].c}" stroke="#5a3d2b" stroke-width=".6"/>`});
  const id='q3c'+(opt.mini?'m':'');
  let out=`<svg viewBox="0 0 110 155.6" preserveAspectRatio="none"><defs><clipPath id="${id}"><path d="M8 27.8H103L99.9 51.7L88.8 136.5Q56 147 23.1 136.5L11.4 51.7Z"/></clipPath></defs>`;
  if(!opt.mini)out+=`<ellipse cx="${CX}" cy="150" rx="40" ry="5" fill="rgba(90,55,20,.25)"/>`;
  if(c.spill)out+=`<ellipse cx="${CX}" cy="150" rx="62" ry="7" fill="${liqCol(c)}" opacity=".85" stroke="#5a3d2b" stroke-width="1"/>`;
  if(opt.pour)out+=`<rect class="strm" x="${CX-3.5}" y="-80" width="7" height="${surf+80}" rx="3.5" fill="${ITEMS[opt.pour].c}" stroke="#5a3d2b" stroke-width=".8"/>`;
  out+=`<g clip-path="url(#${id})">${inner}</g>`;
  if(!c.sealed&&!opt.mini)out+=`<line x1="${CX-halfAt(57)+4}" x2="${CX+halfAt(57)-4}" y1="57" y2="57" stroke="#2f8a63" stroke-width="2.2" stroke-dasharray="5 4"/>`;
  out+=`</svg><img src="${IMG}cup.png" alt=""><img class="q3lid" src="${IMG}lid.png" alt=""${c.sealed?'':' hidden'}>`;
  if(!opt.mini&&c.size)out+=`<svg viewBox="0 0 110 155.6" preserveAspectRatio="none"><g transform="translate(86 118)"><circle r="9" fill="#fffaf0" stroke="${Q3INK}" stroke-width="1.6"/><text y="4.5" text-anchor="middle" font-family="Baloo 2,sans-serif" font-weight="800" font-size="12" fill="${Q3INK}">${c.size}</text></g></svg>`;
  return `<div class="q3g">${out}</div>`}
function orderGlass(o){const ic={'Không đá':0,'Ít đá':1,'Đá thường':2}[o.ice]||0;
  return glassHTML({base:o.base,flav:o.flav,tops:o.tops,fill:.8,sealed:true,vt:o.tops.filter(t=>ITEMS[t]&&ITEMS[t].g!=='foam').map(k=>({k,pts:q3layer(k)})),vi:Array.from({length:ic===2?8:ic*3},(_,i)=>[Math.random()*2-1,4+Math.random()*22+i*3.5,Math.random()*40-20])},{mini:1})}
const q3reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;

function renderSell(){
  {const ae=document.activeElement;if(ae&&ae.blur&&/INPUT|TEXTAREA|SELECT/.test(ae.tagName))ae.blur()}scrollTo(0,0);
  R.mode='sell';document.body.classList.add('selling');R.focus=null;R.sealing=false;
  const zone=(a,x,y,w,h,extra,cls)=>`<button class="q3z ${cls||''}" ${a} data-r="${x},${y},${w},${h}" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px">${extra||''}</button>`;
  let h='';
  h+=zone('data-a="size:M" aria-label="Lấy ly M" id="q3_M"',14,408,66,178)+zone('data-a="size:L" aria-label="Lấy ly L" id="q3_L"',82,368,64,218);
  h+=`<div class="q3badge" style="left:110px;top:368px" id="q3cups"></div>`;
  JAR_K.forEach((k,i)=>{const x=JAR_X[i];h+=zone(`data-tea="${k}" id="q3b_${k}" aria-label="Giữ để rót ${ITEMS[k].n}"`,x-37,362,74,160,'','q3jar');
    h+=`<div class="q3jarT" style="left:${x-31}px;top:428px;width:62px;height:46px">${JAR_L[k].map(w=>`<span${w.length>5?' style="font-size:14px"':''}>${w}</span>`).join('')}</div>`;
    h+=`<div class="q3badge q3sm" style="left:${x+14}px;top:372px" id="q3n_${k}"></div>`});
  h+=zone('data-a="seal" id="q3seal" aria-label="Dán nắp và giao ly"',638,334,122,228);
  h+=zone('data-a="trash" id="q3trash" aria-label="Đổ ly làm lại"',188,582,84,100);
  TRAY_K.forEach((k,i)=>{const [x0,x1]=TCOL[i%4],[y0,y1]=TROW[Math.floor(i/4)];
    h+=zone(`data-a="top:${k}" id="q3b_${k}" aria-label="${ITEMS[k].n}"`,x0,y0,x1-x0,y1-y0);
    h+=`<div class="q3badge" style="left:${BADGE_X[i%4]-15}px;top:${BADGE_Y[Math.floor(i/4)]-15}px;min-width:30px;height:30px" id="q3n_${k}"></div>`});
  let spr='',patch='';const lv_=level();
  const binsOwn=BIN_K.map((k,i)=>[k,i]).filter(([k])=>k==='ice'||k==='sugar'?lv_>=2:S.unlocked[k]);
  binsOwn.forEach(([k,src],i)=>{const sx=15+124*src,dx=15+124*i;
    spr+=`<div class="q3spr" style="left:${dx}px;top:955px;width:124px;height:178px;background-position:${-sx}px -955px"></div>`;
    const a=k==='ice'?'data-a="ice" id="q3b_ice"':k==='sugar'?'data-a="sugar" id="q3b_sugar"':`data-a="top:${k}" id="q3b_${k}"`;
    h+=zone(`${a} data-s="${sx+4},975" aria-label="${BIN_LB[src].replace('<br>',' ')}"`,dx+4,975,116,158);
    h+=`<div class="q3lbT" style="left:${dx+10}px;top:1097px;width:104px;height:34px">${BIN_LB[src]}</div>`;
    if(ITEMS[k])h+=`<div class="q3badge q3sm" style="left:${dx+98}px;top:984px" id="q3n_${k}"></div>`});
  if(binsOwn.length<BIN_K.length){const hx=15+124*binsOwn.length,hw=124*(BIN_K.length-binsOwn.length);
    patch=`<div class="q3patch" style="left:${hx}px;top:948px;width:${hw}px;height:194px"></div>`}
  BTL_K.filter(k=>S.unlocked[k]).forEach(k=>{const i0=BTL_K.indexOf(k),i=spr.split('data-btl').length-1,sx=BTL_X[i0],x=BTL_X[i];
    spr+=`<div class="q3spr" data-btl style="left:${x-31}px;top:1160px;width:62px;height:200px;background-position:${-(sx-31)}px -1160px"></div>`;
    h+=zone(`data-a="flav:${k}" id="q3b_${k}" data-s="${sx-29},1166" aria-label="Siro ${ITEMS[k].n}"`,x-29,1166,58,190);
    h+=`<div class="q3badge q3sm" style="left:${x+6}px;top:1206px" id="q3n_${k}"></div>`});
  $('view').innerHTML=`<div id="q3"><div id="q3stage">${patch}<div id="q3tint" aria-hidden="true"></div>${evIs('rain')?'<div id="q3rain" aria-hidden="true"><i class="r1"></i><i class="r2"></i></div>':''}
    <div class="q3lane" id="lane"></div>
    <div class="q3face" id="q3face" aria-hidden="true"></div>
    <div class="q3bub" id="q3bub"><div id="q3want" aria-hidden="true"></div><div id="q3say"></div><div class="q3pat"><span>KIÊN NHẪN</span><div class="q3bar"><i id="q3pat"></i></div></div></div>
    <div class="q3tag" style="left:30px;top:327px;width:108px;height:30px">QUẦY TRÀ</div>
    <div class="q3tag" style="left:29px;top:603px;width:151px;height:34px;font-size:23px">PHA LY</div>
    <div id="q3sprs">${spr}</div><div id="q3pops"></div><div id="q3zones">${h}</div>
    <div id="q3noCup">Lấy ly<br>M hoặc L</div><div id="q3cup" aria-hidden="true"></div>
    <div class="q3gauge"><div class="q3lv" id="q3gLv"></div><div class="q3ok"></div></div><div id="q3hint"></div><div id="q3coach" hidden></div>
  </div></div>`;
  const st=$('q3stage');
  st.onclick=e=>{const dx=e.target.closest('[data-decl]');if(dx){const id=+dx.dataset.decl,i=R.slots.findIndex(c=>c&&c.id===id);if(i>=0){decline(i);toast('Đã mời khách về');renderPanel()}else{const j=R.online.findIndex(c=>c.id===id);if(j>=0){declineOnline(j);toast('Đã huỷ đơn online')}}return}
    const ch=e.target.closest('[data-fc]');if(ch){const id=+ch.dataset.fc;if(R.st2&&R.st2.id===id){toast('Nhân viên pha chế đang lo đơn này');return}if(R.sto&&R.sto.id===id){toast('Nhân viên đơn online đang lo đơn này');return}R.focus=id;renderLane();renderPanel();return}
    const cv=e.target.closest('[data-cv]');if(cv){const c=focusCust();const j=+cv.dataset.cv;if(c&&!c.done[j]){c.order=c.cups[j];renderLane();renderPanel()}return}
    const dc=e.target.closest('[data-decl]');if(dc){const i=R.slots.findIndex(c=>c&&c.id===+dc.dataset.decl);if(i>=0)decline(i);return}
    if(!R.running||R.paused||R.sealing)return;const b=e.target.closest('[data-a]');if(b)q3act(b.dataset.a,b)};
  const zs=$('q3zones');
  zs.addEventListener('pointerdown',e=>{const u=e.target.closest('[data-tea]');if(!u||!R.running||R.paused||R.sealing)return;e.preventDefault();try{u.setPointerCapture(e.pointerId)}catch(_){}startPour(u.dataset.tea,u)});
  ['pointerup','pointercancel','lostpointercapture'].forEach(ev=>zs.addEventListener(ev,stopPour));
  zs.addEventListener('keydown',e=>{const u=e.target.closest('[data-tea]');if(u&&(e.key===' '||e.key==='Enter')&&!e.repeat&&!R.pour){e.preventDefault();startPour(u.dataset.tea,u)}});
  zs.addEventListener('keyup',e=>{if(e.key===' '||e.key==='Enter')stopPour()});
  zs.addEventListener('contextmenu',e=>e.preventDefault());
  q3fit();renderLane();renderCup();renderPanel();head();
  const q=$('q3');q.addEventListener('scroll',()=>{q.scrollTop=0;q.scrollLeft=0});[120,500,1500].forEach(t=>setTimeout(q3re,t));
}
/* Chrome Android bật "Trang web cho máy tính" → trang bị thu nhỏ; phóng lại cho vừa màn hình điện thoại */
const ZM=(()=>{try{const sw=screen.width,coarse=matchMedia('(pointer:coarse)').matches||navigator.maxTouchPoints>0;
  if(coarse&&sw>0&&sw<=820&&innerWidth>sw*1.35){const z=innerWidth/sw;document.documentElement.style.zoom=z;return z}}catch(e){}return 1})();
const vpW=()=>innerWidth/ZM,vpH=()=>innerHeight/ZM;
/* chừa mép dưới: vuốt ngang ở mép dưới iPhone là chuyển sang app khác (Zalo…) */
let _sab=null;function botGap(){if(_sab==null){const d=document.createElement('div');d.style.cssText='position:fixed;bottom:0;height:0;padding-bottom:env(safe-area-inset-bottom,0px);visibility:hidden';document.body.appendChild(d);_sab=d.offsetHeight||0;d.remove()}
  const touch=matchMedia('(pointer:coarse)').matches||navigator.maxTouchPoints>0;return touch?Math.max(_sab,10)+18:0}
function q3fit(){const q=$('q3');if(!q)return;const hd=document.querySelector('header'),aw=document.querySelector('.app>.awning');
  if(scrollX||scrollY)scrollTo(0,0);q.scrollTop=0;q.scrollLeft=0;
  const vv=window.visualViewport,vh=vpNow()/ZM,vw=(vv&&vv.width>100?Math.min(innerWidth,vv.width):innerWidth)/ZM;
  const top=Math.max(0,Math.round((aw||hd).getBoundingClientRect().bottom/ZM)),W=vw,H=vh-top-botGap(),s=Math.min(W/768,H/(1376-Q3Y));
  q.style.top=top+'px';q.style.height=H+'px';q.style.bottom='auto';const st=$('q3stage');st.style.transform=`scale(${s})`;st.style.left=Math.max(0,(W-768*s)/2)+'px';st.style.top=(-Q3Y*s)+'px'}
function q3re(){if(R.mode==='sell')q3fit()}
addEventListener('resize',q3re);addEventListener('orientationchange',()=>setTimeout(q3re,300));addEventListener('pageshow',q3re);document.addEventListener('visibilitychange',()=>{if(!document.hidden)[0,300].forEach(t=>setTimeout(q3re,t))});addEventListener('load',q3re);
addEventListener('scroll',()=>{if(R.mode==='sell'&&(scrollX||scrollY))scrollTo(0,0)},{passive:true});
if(window.visualViewport){visualViewport.addEventListener('resize',q3re);visualViewport.addEventListener('scroll',q3re)}
/* iPhone (thêm vào MH chính): bàn phím đẩy trang lên và không trả về → tự kéo lại */
const isField=el=>el&&/INPUT|TEXTAREA|SELECT/.test(el.tagName)&&!/^(checkbox|radio|button|file|range|color)$/.test(el.type||'');
/* đang gõ: ẩn thanh Nấu & nhập / Mở cửa để không nổi đè lên ô nhập. Chuyển ô bằng mũi tên ^ v thì không kéo trang */
let kbT=null;
addEventListener('focusin',e=>{if(!isField(e.target))return;clearTimeout(kbT);document.body.classList.add('kbopen')});
addEventListener('focusout',()=>{clearTimeout(kbT);kbT=setTimeout(()=>{if(isField(document.activeElement))return;
  document.body.classList.remove('kbopen');
  /* bàn phím đóng hẳn: chỉ kéo lại nếu trang bị đẩy quá cuối */
  const mx=Math.max(0,document.documentElement.scrollHeight-innerHeight);if(scrollY>mx)scrollTo(0,mx);
  if(R.mode==='sell')q3fit()},350)});
/* iPhone (app trên MH chính): sau khi bàn phím đóng, khung nhìn đôi khi kẹt ở chiều cao lúc còn bàn phím (thấp hơn màn hình thật cỡ 340-360px).
   Game đo lại, và nếu thấy kẹt thì tự dùng chiều cao màn hình thật cho quầy pha, nút Mở cửa và hộp thoại */
const IOS_APP=(()=>{try{return /iP(hone|od)/.test(navigator.userAgent)&&(navigator.standalone===true||matchMedia('(display-mode: standalone)').matches)}catch(e){return false}})();
let VPFIX=0,vpGood=0,kbUsed=0;
/* chỉ sửa khi vừa dùng bàn phím (trong 2 phút) và khung nhìn hụt hẳn (dưới 72% màn hình, cỡ chiều cao lúc còn bàn phím) */
addEventListener('focusin',e=>{if(isField(e.target))kbUsed=Date.now()});
function vpNow(){const vv=window.visualViewport,h=(vv&&vv.height>100?Math.min(innerHeight,vv.height):innerHeight);
  if(IOS_APP&&innerWidth<=520&&kbUsed&&Date.now()-kbUsed<120000&&!isField(document.activeElement)){const sh=Math.max(screen.height,screen.width);
    if(innerHeight<sh*.72){VPFIX=vpGood&&vpGood>innerHeight?vpGood:Math.round(sh*.94);return VPFIX}}
  if(h>=Math.max(screen.height,screen.width)*.8)vpGood=h;
  VPFIX=0;return h}
function vpSync(){if(!IOS_APP||!document.body)return;const was=VPFIX;vpNow();
  document.body.classList.toggle('vpfix',!!VPFIX);document.documentElement.style.setProperty('--vpfix',VPFIX+'px');
  if(VPFIX&&!was){/* thử ép iOS tính lại khung nhìn */try{const m=document.querySelector('meta[name=viewport]');if(m){const c=m.content;m.content=c+', x=1';setTimeout(()=>{m.content=c},60)}scrollTo(0,0)}catch(e){}}
  if(VPFIX!==was&&R.mode==='sell')q3fit()}
if(IOS_APP){['resize','orientationchange','pageshow','focusout','load'].forEach(e=>addEventListener(e,()=>{vpSync();[150,500,1200].forEach(t=>setTimeout(vpSync,t))}));
  if(window.visualViewport)visualViewport.addEventListener('resize',vpSync);document.addEventListener('visibilitychange',()=>{if(!document.hidden)[0,300,900].forEach(t=>setTimeout(vpSync,t))});setInterval(vpSync,2000);vpSync()}
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(q3re);
function focusCust(){const all=[...pSlots().filter(Boolean),...R.online.filter(c=>!isSto(c))].sort((a,b)=>a.id-b.id);let f=all.find(c=>c.id===R.focus)||all[0]||null;R.focus=f?f.id:null;return f}
function shipBg(row,e,w,h){return `background-image:url(${IMG}ship.webp);background-size:${w*3}px ${h*2}px;background-position:${-e*w}px ${-row*h}px`}
const hasFace=c=>c&&(c.who!=null||c.ship!=null||c.star!=null),faceOf=(c,e,w,h)=>c.star!=null?starBg(STARS[c.star].f,e,w,h):c.ship!=null?shipBg(c.ship,e,w,h):faceBg(c.who,e,w,h),faceRow=c=>c.star!=null?STARS[c.star].f:c.ship!=null?c.ship:c.who;
function faceBg(who,e,w,h){return `background-image:url(${IMG}faces.webp);background-size:${w*3}px ${h*9}px;background-position:${-e*w}px ${-who*h}px`}
function renderLane(){
  const L=$('lane');if(!L)return;const f=focusCust();
  const items=[...R.slots.map((c,i)=>c&&{c,a:`data-slot="${i}"`}),...R.online.map((c,j)=>({c,a:`data-on="${j}"`}))].filter(Boolean).sort((x,y)=>x.c.id-y.c.id);
  L.innerHTML=items.map(({c,a})=>{const r=Math.max(0,c.pat/c.max),on=f&&c.id===f.id,left=c.done.filter(x=>!x).length;
    const stc=isSt(c);return `<button class="q3chip${on?' q3on':''}${stc?' q3stc':''}${c.born&&performance.now()-c.born<700?' q3in':''}" ${a} data-fc="${c.id}" aria-label="${esc(c.name)}" style="--p:${r};--c:${r>.5?'#5aae86':r>.25?'#f4b73a':'#e2574c'}">
      ${hasFace(c)?`<i class="q3fc" style="${faceOf(c,r<.3?2:0,56,55)}"></i>`:'<i class="q3fc q3ph">📱</i>'}${c.app?`<b class="q3app" style="background:${(APPS.find(a=>a.id===c.app)||APPS[0]).c}">${ico('phone')}</b>`:''}${left>1?`<b class="q3n">×${left}</b>`:''}${(R.st2&&R.st2.id===c.id)||isSto(c)?`<b class="q3st">${ico('people')}</b>`:''}${c.vip?`<b class="q3vip">${ico('star')}</b>`:''}${!stc&&missing(c.order).length?`<b class="q3so">Hết</b><span class="q3x" data-decl="${c.id}" role="button" aria-label="${R.slots.includes(c)?'Mời khách về':'Huỷ đơn online'}">×</span>`:''}</button>`}).join('')||'';
  const fc=$('q3face'),say=$('q3say');
  if(!f){coach();fc._id=null;fc.style.cssText='';fc.className='q3face';say._t=null;$('q3bub').classList.add('q3idleB');say.innerHTML=`<span class="q3idle">${R.closing?'Đã đóng cửa':R.running&&rushMul()<.6?'Quán đang vắng':'Đang chờ khách…'}<small>${R.closing?'Nhân viên pha chế đang làm nốt đơn':'Ngồi chơi xíu đi'}</small></span>`;$('q3want').innerHTML='';$('q3want')._o=null;$('q3pat').style.width='0';return}
  if(fc._id!==f.id){fc._id=f.id;if(!q3reduce)fc.animate([{transform:'translateX(-150px) rotate(-6deg)',opacity:0},{transform:'translateX(-60px) rotate(4deg)',opacity:1,offset:.5},{transform:'translateX(-20px) rotate(-3deg)',offset:.75},{transform:'none'}],{duration:650,easing:'ease-out'})}
  fc.className='q3face'+(!hasFace(f)?' q3ph':'');fc.style.cssText=hasFace(f)?faceOf(f,f.pat/f.max<.3?2:0,144,141):'';fc.textContent=!hasFace(f)?'📱':'';
  const n=f.cups.length,online=R.online.includes(f);
  let t=online?`<span class="q3vipT" style="background:${(APPS.find(a=>a.id===f.app)||APPS[0]).c}">${appN(f)}</span> <b>${f.big?'Đơn lớn':'Đơn'} #${f.id}</b>: ${shortOrder(f.order)}`:(f.star!=null?`<span class="q3vipT" style="background:#9b5fd0">⭐ ${esc(STARS[f.star].n)}</span> `+(performance.now()-f.born<3500?`<span class="q3nat">${esc(f.hi)}</span>`:`<small class="q3tr">[Tự động dịch]</small> `):'')+(f.star!=null&&performance.now()-f.born<3500?'':(f.vip?'<span class="q3vipT">Food reviewer</span> ':'')+(f.brat&&f.brat!=='mac'&&BRATS[f.brat].n?`<span class="q3vipT" style="background:${BRATS[f.brat].c}">${BRATS[f.brat].n}</span> `:'')+sentence(f));
  if(n>5)t=`<span class="q3tabs"><span class="q3cur">Ly ${f.cups.indexOf(f.order)+1}/${n}</span><span class="q3dn">✓ ${f.done.filter(Boolean).length}</span></span> `+t;
  else if(n>1)t=`<span class="q3tabs">${f.cups.map((x,j)=>`<span class="${f.done[j]?'q3dn':x===f.order?'q3cur':''}" data-cv="${j}">${f.done[j]?'✓ ':''}Ly ${j+1}</span>`).join('')}</span> `+t;
  if(missing(f.order).length&&!online)t+=` <button class="q3decl" data-decl="${f.id}">Hết món, mời về</button>`;
  $('q3bub').classList.remove('q3idleB');if(say._t!==t){say._t=t;say.innerHTML=t;q3fitSay()}coach();const qw=$('q3want');if(qw._o!==f.order){qw._o=f.order;qw.innerHTML=orderGlass(f.order)}updPat(f);
}
function q3fitSay(){const e=$('q3say');let f=24;e.style.fontSize=f+'px';while(e.scrollHeight>e.clientHeight+1&&f>15){f--;e.style.fontSize=f+'px'}}
const renderStreet=renderLane,renderOnline=renderLane;
function updPat(c){const r=Math.max(0,c.pat/c.max),ch=document.querySelector(`#lane [data-fc="${c.id}"]`);
  if(ch){ch.style.setProperty('--p',r);ch.style.setProperty('--c',r>.5?'#5aae86':r>.25?'#f4b73a':'#e2574c');const fc=ch.querySelector('.q3fc');if(fc&&hasFace(c))fc.style.backgroundPosition=`${-(r<.3?2:0)*56}px ${-faceRow(c)*55}px`}
  if(c.id===R.focus){const p=$('q3pat');if(p){p.style.width=r*100+'%';p.style.background=r>.5?'#8fcf8f':r>.25?'#f4c04a':'#f08a8a'}
    const fc=$('q3face');if(fc&&hasFace(c)&&!R.flash)fc.style.backgroundPosition=`${-(r<.3?2:0)*144}px ${-faceRow(c)*141}px`}}
function pourFast(){const w=$('q3cup');if(!w)return false;const lq=w.querySelector('.lq'),lh=w.querySelector('.lqh'),st=w.querySelector('.strm');if(!lq||!st)return false;
  const surf=BY-Math.min(cup.fill||0,1)*LH;lq.setAttribute('y',surf);lq.setAttribute('height',BY-surf+8);if(lh)lh.setAttribute('y',surf);st.setAttribute('height',surf+80);$('q3gLv').style.width=Math.min(100,(cup.fill||0)*100)+'%';return true}
function renderCup(){
  const w=$('q3cup');if(!w)return;const has=!!cup.size;$('q3noCup').hidden=has;
  if(!has){w.innerHTML='';w.style.cssText='';$('q3gLv').style.width='0';$('q3hint').innerHTML='';return}
  const h=cup.size==='L'?162:142,wd=Math.round(h*415/587);
  w.style.left=(133-wd/2)+'px';w.style.top=(870-h)+'px';w.style.width=wd+'px';w.style.height=h+'px';
  const html=glassHTML({...cup,fill:cup.fill||0},{pour:R.pour}),g=w.firstElementChild;
  if(!g||!g.classList.contains('q3g')){w.innerHTML=html}else{
    const t=document.createElement('div');t.innerHTML=html;const n=t.firstElementChild,oc=[...g.children],nc=[...n.children];
    if(oc.length!==nc.length||oc.some((e,i)=>e.tagName!==nc[i].tagName))g.replaceWith(n);
    else nc.forEach((e,i)=>{if(e.tagName==='IMG'){oc[i].hidden=e.hidden}else g.replaceChild(e,oc[i])})}
  $('q3gLv').style.width=Math.min(100,(cup.fill||0)*100)+'%';
  $('q3hint').textContent=level()>=2?`Đường ${cup.sugar?cup.sugar+'%':'—'} · ${(cup.ice||'Không đá').toLowerCase().replace('đá thường','đá bình thường')}`:'';
  let te=w.querySelector('.q3tem');const showTem=has&&S.upg&&S.upg.brandKit&&S.brand&&S.brand.i;
  if(showTem){const th=temHTML(S.brand,Math.round(wd*.54),false);if(!te){te=document.createElement('div');te.className='q3tem';w.appendChild(te)}if(te._k!==th){te._k=th;te.innerHTML=th}}
  else if(te)te.remove();
}
function renderPanel(){
  if(!$('q3zones'))return;const f=focusCust(),o=f?f.order:null,lv=level();
  const want=k=>!!o&&(o.base===k||o.flav===k||o.tops.includes(k));
  const set=(k,locked)=>{const b=$('q3b_'+k),n=$('q3n_'+k);if(!b)return;const q=ITEMS[k]?qty(k):1;
    b.classList.toggle('q3lock',!!locked);b.classList.toggle('q3empty',!locked&&q<=0);b.classList.toggle('q3want',!locked&&want(k));if(n){const tray=TRAY_K.includes(k);n.textContent=locked?"":q;n.style.display=locked&&!tray?"none":"";n.style.background=locked?"#ece4d8":"";n.style.borderColor=locked?"#c9b9a4":""}};
  [...JAR_K,...TRAY_K,...BTL_K,'cheese','fmatcha','fsalt','fube'].forEach(k=>set(k,!S.unlocked[k]));
  if(lv>=2){set('ice',false);set('sugar',false)}
  $('q3cups').textContent=qty('cup');
  ['M','L'].forEach(z=>$('q3_'+z).classList.toggle('q3pick',cup.size===z));
  if(o&&lv>=2){$('q3b_ice').classList.toggle('q3want',o.ice!=='Không đá');$('q3b_sugar').classList.add('q3want')}
}
function q3pop(el,wob){const r=(el.dataset.r||'').split(',').map(Number);if(r.length<4)return null;const so=el.dataset.s?el.dataset.s.split(',').map(Number):[r[0],r[1]];
  const d=document.createElement('div');d.className='q3pop'+(wob?' wob':'');d.style.cssText=`left:${r[0]}px;top:${r[1]}px;width:${r[2]}px;height:${r[3]}px;background-position:${-so[0]}px ${-so[1]}px`;
  $('q3pops').appendChild(d);if(!wob)d.animate([{transform:'scale(1)'},{transform:'scale(1.12,1.1)'},{transform:'scale(1)'}],{duration:q3reduce?1:280,easing:'ease-out'}).onfinish=()=>d.remove();return d}
function q3label(el,txt){const a=el.getBoundingClientRect(),t=document.createElement('div');t.className='q3flyT';t.textContent=txt;document.body.appendChild(t);
  const w=t.offsetWidth;t.style.left=Math.max(4,Math.min(vpW()-w-4,(a.left+a.width/2)/ZM-w/2))+'px';t.style.top=(a.top/ZM-4)+'px';
  t.animate([{transform:'translateY(0)',opacity:1},{transform:'translateY(-16px)',opacity:0}],{duration:900,easing:'ease-out'}).onfinish=()=>t.remove()}
function q3fly(fromEl,html,cb){
  const a=fromEl.getBoundingClientRect(),b=$('q3cup').getBoundingClientRect();
  const x0=(a.left+a.width/2)/ZM,y0=(a.top+a.height/2)/ZM,x1=(b.left+b.width/2)/ZM,y1=(b.top+b.height*.35)/ZM;
  const f=document.createElement('div');f.className='q3fly';f.innerHTML=html;document.body.appendChild(f);
  const T=(x,y,s)=>`translate(${x-12}px,${y-12}px) scale(${s})`;
  f.animate([{transform:T(x0,y0,1)},{transform:T((x0+x1)/2,Math.min(y0,y1)-40,1.15)},{transform:T(x1,y1,.8)}],{duration:q3reduce?1:420,easing:'ease-in-out'}).onfinish=()=>{f.remove();cb&&cb()}}
const q3dot=c=>`<svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" fill="${c}" stroke="${Q3INK}" stroke-width="1.5"/></svg>`;
function q3act(a,el){
  const [t,k]=a.split(':');
  if(R.helping&&t!=='top'){toast(t==='seal'?'Chờ nhân viên pha xong rồi dán nắp':'Nhân viên đang rót trà, cho hương, đường, đá. Bạn bỏ topping nhé');return}
  if(t==='seal')return sealServe();
  if(t==='trash'){if(!cup.size)return;sfx('trash');if(cup.used)toast('Đã đổ bỏ ly');spoilCup();renderCup();renderPanel();coach();return}
  if(t==='size'){if(cup.used||cup.sugarN||cup.iceN){toast('Đổ ly này trước (xô inox)');return}
    if(!qty('cup')){toast('Hết ly! Nhập thêm ở kho ngày mai');return}q3pop(el);sfx('cup');cup.size=k;renderCup();renderPanel();coach();staffHelp();return}
  if(!cup.size){toast('Lấy ly M hoặc L trước');return}
  if(t==='top'){if(!S.unlocked[k]){toast((S.off||{})[k]?ITEMS[k].n+' đã bỏ khỏi menu':'Chưa mở '+ITEMS[k].n+' (Nâng cấp)');return}const n=cup.tops.length;addIng('top',k);if(cup.tops.length===n)return;
    q3pop(el);sfx('plop');q3label(el,ITEMS[k].n);const foam=ITEMS[k].g==='foam';
    if(!foam)(cup.vt=cup.vt||[]).push({k,pts:q3layer(k)});
    q3fly(el,foam?cloudSvg(ITEMS[k].c,24,17):`<svg width="30" height="30" viewBox="0 0 30 30">${[[6,20],[15,21],[24,20],[10,13],[20,13],[15,6],[4,12],[26,12]].map(([x,y],i)=>pc(k,x,y,i)).join('')}</svg>`,()=>{renderCup();renderPanel();autoSeal();coach()});return}
  if(t==='flav'){if(!S.unlocked[k]){toast((S.off||{})[k]?'Siro '+low(ITEMS[k].n)+' đã bỏ khỏi menu':'Chưa mở siro '+low(ITEMS[k].n)+' (Nâng cấp)');return}if(cup.flav===k){toast('Đã có siro '+low(ITEMS[k].n));return}
    const was=cup.flav;addIng('flav',k);if(cup.flav===was)return;q3pop(el);sfx('pump');q3label(el,'Siro '+low(ITEMS[k].n));q3fly(el,q3dot(ITEMS[k].c),()=>{renderCup();renderPanel();autoSeal();coach()});return}
  if(t==='sugar'){if(level()<2){toast('Khách chưa cần chọn đường');return}cup.sugarN=(cup.sugarN||0)+1;if(cup.sugarN>4){cup.sugarN=4;toast('Tối đa 100%');return}
    cup.sugar=SUGAR[cup.sugarN-1];q3pop(el);sfx('pump');q3fly(el,q3dot('#f0c56a'),()=>{renderCup();q3label(el,cup.sugar+'% đường');autoSeal();coach()});return}
  if(t==='ice'){if(level()<2){toast('Khách chưa cần chọn đá');return}cup.iceN=(cup.iceN||0)+1;if(cup.iceN>2){cup.iceN=2;toast('Đá đầy rồi');return}
    cup.ice=cup.iceN===1?'Ít đá':'Đá thường';q3pop(el);sfx('ice');
    q3fly(el,`<svg width="24" height="24" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#eaf7fd" stroke="#8fb9cf" stroke-width="2"/></svg>`,()=>{
      cup.vi=cup.vi||[];for(let i=0;i<(cup.iceN===2?5:3);i++)cup.vi.push([Math.random()*2-1,4+Math.random()*22+cup.vi.length*3.5,Math.random()*40-20]);renderCup();q3label(el,cup.iceN===1?'Ít đá':'Đá bình thường');autoSeal();coach()});return}
}
let q3raf,q3last,q3pourEl,q3wob;
const coachDay=()=>{const L=CFG.levels;return [1,L.l2,L.l3].includes(S.day)};
const coachOn=()=>S.coach===true||(S.coach!==false&&coachDay()&&!R.coachDone);
function coach(){const b=$('q3coach');if(!b)return;const prev=document.querySelector('.q3coachT');
  const set=(txt,id)=>{if(b._t!==txt){b._t=txt;b.textContent=txt}b.hidden=false;const t=id&&$(id);if(prev&&prev!==t)prev.classList.remove('q3coachT');if(t)t.classList.add('q3coachT')};
  if(!coachOn()||!R.running){b.hidden=true;prev&&prev.classList.remove('q3coachT');return}
  const f=focusCust(),o=f&&f.order,lv=level();
  if(!o){b.hidden=true;prev&&prev.classList.remove('q3coachT');return}
  if(!cup.size)return set(`Bước 1: chạm chồng ly ${o.size}`,'q3_'+o.size);
  if(cup.spill||(cup.fill||0)>.95||(cup.base&&cup.base!==o.base)||cup.mixed||cup.size!==o.size)return set('Ly bị sai, chạm xô inox để đổ làm lại','q3trash');
  if(!cup.base||(cup.fill||0)<.72)return set(`Bước 2: nhấn giữ hũ ${ITEMS[o.base].n}, thả tay khi tới vạch xanh`,'q3b_'+o.base);
  {const iceN={'Không đá':0,'Ít đá':1,'Đá thường':2}[o.ice]||0;
   if((cup.flav&&cup.flav!==(o.flav||null))||cup.tops.some(t=>!o.tops.includes(t))||(lv>=2&&(cup.sugar||0)>o.sugar)||(lv>=2&&(cup.iceN||0)>iceN))return set('Ly bị dư hoặc sai món, chạm xô inox để đổ làm lại','q3trash')}
  if(o.flav&&cup.flav!==o.flav)return set(`Chạm chai siro ${low(ITEMS[o.flav].n)}`,'q3b_'+o.flav);
  const miss=o.tops.find(t=>!cup.tops.includes(t));if(miss)return set(`Bước 3: chạm ${low(ITEMS[miss].n)} để thêm topping`,'q3b_'+miss);
  if(lv>=2&&cup.sugar!==o.sugar){const n=SUGAR.indexOf(o.sugar)+1;return set(`Bấm bình nước đường ${n} lần để được ${o.sugar}% đường`,'q3b_sugar')}
  const iceN={'Không đá':0,'Ít đá':1,'Đá thường':2}[o.ice]||0;
  if(lv>=2&&(cup.iceN||0)<iceN)return set(iceN===1?'Xúc đá 1 lần (ít đá)':'Xúc đá 2 lần (đá bình thường)','q3b_ice');
  if(lv>=2&&(cup.iceN||0)>iceN)return set('Dư đá rồi, chạm xô để đổ làm lại','q3trash');
  if(S.upg.sealer&&(cup.fill||0)<.66)return set('Rót thêm trà tới vạch xanh','q3b_'+o.base);
  set(S.upg.sealer?'Máy đang tự dán nắp…':'Bước cuối: chạm máy dán nắp để giao ly','q3seal')}
function staffHelp(){
  if(!(S.upg.staff1||S.upg.staff3)||!R.running||R.t<=0)return;const f=focusCust(),o=f&&f.order;if(!o||o.size!==cup.size||cup.base)return;
  if(!qty(o.base))return;R.helping=true;const oops=Math.random()<.1,target=oops?.6:.8,nb=(R.s1n=(R.s1n||0)+1),bad=(R.s1bad||[]).includes(nb);let bdesc='';
  setTimeout(()=>{if(!R.running||!R.helping){R.helping=false;return}
    addIng('base',o.base);if(cup.base!==o.base){R.helping=false;coach();return}
    R.pour=o.base;R.staffPouring=true;pourSnd(true);const el=$('q3b_'+o.base);el&&el.classList.add('q3on');let last=performance.now();
    const step=now=>{if(!R.helping){R.pour=null;R.staffPouring=false;pourSnd(false);el&&el.classList.remove('q3on');renderCup();return}
      cup.fill=Math.min(target,(cup.fill||0)+(now-last)/1000*.7);last=now;renderCup();
      if(cup.fill<target){requestAnimationFrame(step);return}
      R.pour=null;R.staffPouring=false;pourSnd(false);el&&el.classList.remove('q3on');renderCup();
      const lv=level(),iceN={'Không đá':0,'Ít đá':1,'Đá thường':2}[o.ice]||0;
      /* phụ quầy: hương, đường, đá. Topping và dán nắp do người chơi */
      const adds=[...(o.flav?[['flav',o.flav]]:[]),...(lv>=2&&o.sugar?Array(SUGAR.indexOf(o.sugar)+1).fill(['sugar']):[]),...(lv>=2?Array(iceN).fill(['ice']):[])];
      if(bad){const alt=FLAV_KEYS.find(k=>S.unlocked[k]&&qty(k)>0&&k!==o.flav);
        if(o.flav&&alt){adds[0]=['flav',alt];bdesc='cho nhầm siro '+low(ITEMS[alt].n)}
        else if(lv>=2&&o.sugar&&o.sugar<100){adds.push(['sugar']);bdesc='cho dư đường'}
        else if(lv>=2){if(iceN<2)adds.push(['ice']);else adds.splice(adds.findIndex(a=>a[0]==='ice'),1);bdesc='cho sai lượng đá'}
        else if(alt){adds.push(['flav',alt]);bdesc='cho nhầm siro '+low(ITEMS[alt].n)}}
      /* phụ quầy 2: múc topping (và foam phô mai) còn thiếu, không đụng vào món người chơi đã tự múc */
      if(S.upg.staff3&&!bdesc){(o.tops||[]).forEach(k=>{if(!cup.tops.includes(k)&&qty(k)>0)adds.push(['top',k])});if(o.cheese&&!cup.cheese&&qty('cheese')>0)adds.push(['cheese','cheese'])}
      const next=()=>{if(!adds.length||!R.running){if(level()>=2&&!cup.ice)cup.ice='Không đá';R.helping=false;
          if(bdesc&&R.running){toast('Nhân viên phụ quầy '+bdesc+'. Ly bị đổ, lấy ly khác làm lại nhé',5000,1);sfx('trash');spoilCup();renderCup();renderPanel();coach();return}
          if(oops&&R.running&&cup.used&&(cup.fill||0)<.66)toast('Nhân viên phụ quầy rót thiếu trà, nhấn giữ hũ '+low(ITEMS[o.base].n)+' rót thêm tới vạch xanh nhé',5000,1);
          renderCup();renderPanel();autoSeal();coach();return}
        const [kind,k]=adds.shift();
        if(kind==='sugar'){sfx('pump');cup.sugarN=(cup.sugarN||0)+1;cup.sugar=SUGAR[cup.sugarN-1];const z=$('q3b_sugar');z&&q3pop(z);renderCup();setTimeout(next,200);return}
        if(kind==='ice'){sfx('ice');cup.iceN=(cup.iceN||0)+1;cup.ice=cup.iceN===1?'Ít đá':'Đá thường';cup.vi=cup.vi||[];for(let i=0;i<(cup.iceN===2?5:3);i++)cup.vi.push([Math.random()*2-1,4+Math.random()*22+cup.vi.length*3.5,Math.random()*40-20]);const z=$('q3b_ice');z&&q3pop(z);renderCup();setTimeout(next,240);return}
        if(kind==='top'&&cup.tops.includes(k)||kind==='cheese'&&cup.cheese){next();return}
        const n=cup.tops.length;addIng(kind,k);sfx(kind==='flav'?'pump':'plop');
        if(kind==='top'&&cup.tops.length>n&&ITEMS[k].g!=='foam')(cup.vt=cup.vt||[]).push({k,pts:q3layer(k)});
        const z=$('q3b_'+k);z&&q3pop(z);renderCup();setTimeout(next,280)};
      setTimeout(next,200)};
    requestAnimationFrame(step)},350)}
function staffTick(dt){
  if(!S.upg.staff2)return;
  if(R.st2){const i=R.slots.findIndex(x=>x&&x.id===R.st2.id),c=R.slots[i];
    if(!c){stDone();return}
    R.st2.t-=dt;if(R.st2.t>0)return;staffStep(c,i);return}
  if(R.t<=0)return;/* đóng cửa rồi: không nhận khách mới */
  const list=R.slots.filter(Boolean);if(list.length<2)return;
  const can=c=>c.cups.some((o,j)=>!c.done[j]&&needs(o).every(k=>qty(k)>0));
  const cand=list.filter(c=>c.id!==R.focus&&can(c)).sort((a,b)=>a.pat/a.max-b.pat/b.max)[0];
  if(cand){R.st2={id:cand.id,t:st2T()};renderLane();renderPanel()}}
const st2T=()=>2.5+Math.random();/* nhanh như nhân viên phụ quầy: ~3 giây mỗi ly */
function stDone(){if(R.t<0)R.otT=Math.min(R.otT||0,R.t);R.st2=null;renderLane();renderPanel()}
/* nhân viên pha chế: làm lần lượt từng ly của khách mình nhận, ly hết hàng thì bỏ, xong thì khách về */
function staffStep(c,i){
  const skip=k=>c.skip&&c.skip[k];
  const j=c.cups.findIndex((o,k)=>!c.done[k]&&!skip(k));
  if(j<0){stFinish(c,i);return}
  const o=c.cups[j];c.order=o;
  if(!needs(o).every(k=>qty(k)>0)){(c.skip=c.skip||[])[j]=true;R.st2.t=.4;return}
  const mine=cup;cup=newCup();cup.size=o.size;if(!useCup()){cup=mine;(c.skip=c.skip||[])[j]=true;R.st2.t=.4;return}
  [o.base,...(o.flav?[o.flav]:[]),...o.tops].forEach(k=>{if(qty(k))consume(k)});
  Object.assign(cup,{base:o.base,flav:o.flav||null,tops:[...o.tops],cheese:!!o.cheese,sugar:o.sugar,ice:o.ice,fill:.8,used:true});
  if(Math.random()<.005){const was=cup.tops;cup.tops=was.length?[]:[TOP_KEYS.find(k=>S.unlocked[k])];/* 0,5% làm sai: bị đổ, làm lại */
    toast('Nhân viên pha chế làm sai ly '+(j+1)+' của '+c.name+': '+(was.length?'quên '+was.map(k=>low(ITEMS[k].n)).join(', '):'bỏ nhầm '+low(ITEMS[cup.tops[0]].n))+'. Ly bị đổ, làm lại',5000,1)}
  serve(i);cup=mine;renderCup();renderPanel();coach();
  if(R.slots[i]!==c){stDone();return}
  R.st2.t=st2T();
  if(!c.cups.some((x,k)=>!c.done[k]&&!skip(k)))stFinish(c,i)}
/* nhân viên đơn online: nhận trọn 1 đơn online, mỗi ly ~1 giây, 0,5% làm hỏng ly phải đổ bỏ */
function staffOnTick(dt){if(!S.upg.staffOn||!R.running)return;
  if(R.sto){const j=R.online.findIndex(x=>x.id===R.sto.id);if(j<0){R.sto=null;renderLane();return}R.sto.t-=dt;if(R.sto.t>0)return;staffOnStep(R.online[j],j);return}
  const cand=R.online.filter(c=>c.id!==R.focus||!cup.used).sort((a,b)=>a.pat/a.max-b.pat/b.max)[0];
  if(cand){if(cand.id===R.focus)R.focus=null;R.sto={id:cand.id,t:1};renderLane();renderPanel()}}
function staffOnStep(c,j){
  const q=c.cups.findIndex((o,k)=>!c.done[k]&&!(c.skip&&c.skip[k]));
  if(q<0){R.sto=null;declineOnline(j);toast('Đơn #'+c.id+' thiếu món, nhân viên huỷ phần còn lại');renderLane();return}
  const o=c.cups[q];
  if(!needs(o).every(k=>qty(k)>0)){(c.skip=c.skip||[])[q]=true;R.sto.t=.3;return}
  const mine=cup;cup=newCup();cup.size=o.size;if(!useCup()){cup=mine;(c.skip=c.skip||[])[q]=true;R.sto.t=.3;return}
  [o.base,...(o.flav?[o.flav]:[]),...o.tops].forEach(k=>{if(qty(k))consume(k)});
  Object.assign(cup,{base:o.base,flav:o.flav||null,tops:[...o.tops],cheese:!!o.cheese,sugar:o.sugar,ice:o.ice,fill:.8,used:true});
  if(Math.random()<.005){spoilCup();cup=mine;R.sto.t=1;toast('Nhân viên đơn online làm hỏng 1 ly của đơn #'+c.id+', đổ bỏ làm lại',5000,1);renderCup();return}
  c.order=o;serveOnline(j);cup=mine;renderCup();renderPanel();coach();
  if(!R.online.includes(c)){R.sto=null;renderLane();return}
  R.sto.t=1}
function stFinish(c,i){if(R.slots[i]===c){R.st2=null;decline(i);toast(c.name+' về, món còn lại đã hết')}stDone()}
function autoSeal(){if(!S.upg.sealer)return;clearTimeout(R.asT);R.asT=setTimeout(()=>{
  if(!R.running||R.paused||R.sealing||R.pour||R.helping||!cup.size||!cup.base||cup.sealed||cup.spill)return;
  const lv=level(),c2={...cup,ice:lv>=2?(cup.ice||'Không đá'):cup.ice};
  const ok=(lv<2||cup.sugar)&&(pSlots().some(c=>c&&c.cups.some((o,j)=>!c.done[j]&&matches(c2,o)))||R.online.some(c=>c.cups.some((o,q)=>!c.done[q]&&matches(c2,o))));
  if(ok&&(cup.fill||0)>=.66){R.asMsg=null;toast('Máy tự dán nắp');sealServe(1);return}
  /* máy không dán: nói rõ lý do để người chơi biết mà sửa */
  const all=[];[...pSlots().filter(Boolean),...R.online].forEach(c=>c.cups.forEach((x,j)=>{if(!c.done[j])all.push(x)}));if(!all.length)return;
  const diff=o=>{const bad=[];
  if(cup.size!==o.size)bad.push('sai size');
  if(cup.base!==o.base||cup.mixed)bad.push('sai loại trà');
  if(cup.flav&&cup.flav!==(o.flav||null))bad.push(o.flav?'sai siro':'dư siro '+low(ITEMS[cup.flav].n));
  cup.tops.filter(t=>!o.tops.includes(t)).forEach(t=>bad.push('dư '+low(ITEMS[t].n)));
  if(lv>=2&&o.sugar!=null&&(cup.sugar||0)>o.sugar)bad.push('dư đường');
  const iceN={'Không đá':0,'Ít đá':1,'Đá thường':2};if(lv>=2&&o.ice!=null&&(cup.iceN||0)>iceN[o.ice])bad.push('dư đá');return bad};
  const bad=all.map(diff).sort((x,y)=>x.length-y.length)[0];
  let msg=bad.length?'Máy chưa dán nắp: '+bad.join(', ')+'. Chạm xô inox để đổ ly làm lại':ok?'Máy chưa dán nắp: trà còn ít, rót thêm tới vạch xanh':null;
  if(msg&&R.asMsg!==msg){R.asMsg=msg;toast(msg)}},150)}
function startPour(k,el){if(R.staffPouring){toast('Nhân viên đang rót trà, chờ xíu');return}if(R.pour)return;if(!cup.size){toast('Lấy ly M hoặc L trước');return}if(!S.unlocked[k]){toast((S.off||{})[k]?ITEMS[k].n+' đã bỏ khỏi menu':'Chưa mở '+ITEMS[k].n+' (Nâng cấp)');return}
  if(!cup.base){addIng('base',k);if(cup.base!==k)return}else if(cup.base!==k)cup.mixed=true;
  R.pour=k;pourSnd(true);q3pourEl=el;el.classList.add('q3on');q3wob=q3pop(el,1);q3last=performance.now();renderPanel();
  const tick=now=>{if(!R.pour)return;const dt=(now-q3last)/1000;q3last=now;const was=cup.spill;cup.fill=(cup.fill||0)+dt*.36;if(cup.fill>1.02){cup.fill=1.02;cup.spill=true}if(was!==cup.spill||!pourFast())renderCup();q3raf=requestAnimationFrame(tick)};
  q3raf=requestAnimationFrame(tick)}
function stopPour(){if(!R.pour||R.staffPouring)return;R.pour=null;pourSnd(false);cancelAnimationFrame(q3raf);q3pourEl&&q3pourEl.classList.remove('q3on');q3wob&&q3wob.remove();q3wob=null;renderCup();autoSeal();coach()}
function q3burst(s){const st=$('q3stage');if(!st||q3reduce)return;const n=s>=5?7:4;
  for(let i=0;i<n;i++){const im=document.createElement('img');im.className='q3burst';im.src=IMG+'stk_'+(i%2?'star':'heart')+'.png';im.alt='';
    im.style.left=(96+Math.random()*50)+'px';im.style.top=(230+Math.random()*30)+'px';st.appendChild(im);
    const dx=(Math.random()*2-1)*110,dy=-60-Math.random()*90;
    im.animate([{transform:'translate(0,0) scale(.3)',opacity:0},{transform:`translate(${dx*.4}px,${dy*.5}px) scale(1)`,opacity:1,offset:.3},{transform:`translate(${dx}px,${dy}px) scale(.8) rotate(${dx/3}deg)`,opacity:0}],{duration:1100+Math.random()*400,easing:'ease-out',delay:i*60}).onfinish=()=>im.remove()}}
function sealServe(fast){const D=q3reduce?300:fast?650:1500,k1=D/1500;
  if(!cup.size){toast('Lấy ly M hoặc L trước');return}
  if(!cup.base){toast('Chưa rót trà');return}
  if(level()>=2&&!cup.ice)cup.ice='Không đá';
  if(!ready())return;
  const cands=[];pSlots().forEach((c,i)=>{if(c&&c.cups.some((o,j)=>!c.done[j]&&matches(cup,o)))cands.push(c)});
  R.online.forEach(c=>{if(!isSto(c)&&c.cups.some((o,q)=>!c.done[q]&&matches(cup,o)))cands.push(c)});
  const target=cands.length?cands.sort((a,b)=>a.id-b.id)[0]:focusCust();
  if(!target){toast('Chưa có khách');return}
  R.focus=target.id;renderLane();renderPanel();R.sealing=true;
  const w=$('q3cup'),stg=$('q3stage'),sr=stg.getBoundingClientRect(),k=sr.width/768,r=w.getBoundingClientRect();
  const cx=(r.left-sr.left)/k+r.width/k/2,cy=(r.top-sr.top)/k+r.height/k/2;
  const toS=`translate(${700-cx}px,${505-cy}px) scale(.42)`,toC=`translate(${116-cx}px,${262-cy}px) scale(.5)`;
  const an=w.animate([{transform:'none',offset:0},{transform:toS,offset:.3},{transform:toS,offset:.62},{transform:toC,opacity:1,offset:.95},{transform:toC,opacity:0,offset:1}],{duration:D,easing:'ease-in-out',fill:'forwards'});
  setTimeout(()=>{const s=$('q3seal');s&&q3pop(s);sfx('seal');cup.sealed=true;renderCup()},q3reduce?100:520*k1);
  setTimeout(()=>{an.cancel();R.sealing=false;if(!R.running)return;
    const off=cup.spill||Math.abs((cup.fill||0)-.8)>.14;
    const i=R.slots.indexOf(target),j=R.online.indexOf(target);
    if(i<0&&j<0){cup.sealed=false;renderCup();toast('Khách đã đi mất');return}
    if(off&&matches(cup,target.order))target.fillPen=(target.fillPen||0)+1;if(cup.spill||(cup.fill||0)>.95)target.spilled=true;
    const nRev=S.reviews.length;
    if(i>=0)serve(i);else serveOnline(j);
    if(S.reviews.length>nRev&&hasFace(target)){const s=S.reviews[0].s,e=s>=4?1:s<=2?2:0,fc=$('q3face');R.flash=true;
      fc.className='q3face';fc.textContent='';fc.style.cssText=faceOf(target,e,144,141);if(s>=4)q3burst(s);setTimeout(()=>{R.flash=false;renderLane()},1100)}
  },q3reduce?320:1450*k1);
}

/* ---------- GAME LOOP ---------- */
const appN=c=>(APPS.find(a=>a.id===c.app)||APPS[0]).n;
function genOrder(){
  const lv=level(),un=k=>S.unlocked[k],has=k=>qty(k)>0;
  const bases=BASE_KEYS.filter(un),fl=FLAV_KEYS.filter(un).filter(addOk);let so=null;
  // khách muốn món nào đó; món hết thì 50% đổi món khác còn hàng, 50% bỏ về
  const want=ks=>{const k=rnd(ks);if(has(k))return k;const av=ks.filter(has);if(av.length&&Math.random()<.5)return rnd(av);so=so||k;return k};
  const tr=evIs('trend')&&S.unlocked[ev().k]&&Math.random()<.5?ev().k:null;
  const base=tr||want(bases),flav0=base!=='thai'&&fl.length&&Math.random()<.6?want(fl):null,flav=flav0&&addSkip(flav0)?null:flav0;
  const pool=TOP_KEYS.filter(un).filter(addOk).sort(()=>Math.random()-.5),r=Math.random();
  let n=lv===1?((S.day===1&&!R.firstDone)||r>=.2?1:0):lv===2?(r<.2?0:1):wpick([0,1,2,3,4],[.1,.3,.3,.18,.12]);n=Math.min(n,pool.length);
  const pick=[];for(const k0 of pool){if(pick.length>=n)break;let k=k0;if(!has(k)){const av=pool.filter(x=>has(x)&&!pick.includes(x));if(av.length&&Math.random()<.5)k=av[0];else{so=so||k}}
    if(pick.includes(k)||(ITEMS[k].g==='foam'&&pick.some(x=>ITEMS[x].g==='foam'))||addSkip(k))continue;pick.push(k)}
  return {base,flav,tops:pick,cheese:false,size:Math.random()<lChance()?'L':'M',so,
    sugar:lv>=2?wpick(SUGAR,[.15,.3,.35,.2]):null,ice:lv>=2?wpick(ICE,evIs('hot')?[.05,.2,.75]:[.15,.35,.5]):null};
}
const bigOrder=()=>R.slots.some(c=>c&&!(R.st2&&c.id===R.st2.id)&&c.done.filter(x=>!x).length>=3);/* đơn của NV pha chế không chặn khách mới */
const isSto=c=>!!(c&&R.sto&&c.id===R.sto.id),isSt=c=>!!(c&&R.st2&&c.id===R.st2.id),pSlots=()=>R.slots.map(c=>isSt(c)?null:c);
function spawn(){
  const i=R.slots.findIndex(s=>!s);if(i<0||bigOrder())return;
  if(R.starPend){R.starPend=false;spawnStar(i);return}
  {const pi=pricyItems();if(pi.length&&Math.random()<.8){R.today.priceLost++;if(Math.random()<.08)addReview(rnd([1,2,2]),'pricey',false,null);if(!R.pricyT||performance.now()-R.pricyT>8000){R.pricyT=performance.now();toast('Khách xem menu chê '+(pi[0]==='L'?'size L':low(ITEMS[pi[0]].n))+' mắc quá, bỏ đi')}return}}
  const nc=level()>=3?wpick([1,2,3,4,5],[.45,.25,.15,.10,.05]):(evIs('weekend')||evIs('holiday'))&&level()>=2&&Math.random()<.3?2:1,cups=Array.from({length:nc},genOrder),o=cups[0],idx=cups.reduce((a,x)=>a+priceIdx(x),0)/nc;
  const so=cups.find(x=>x.so);if(so){R.today.soldLost=(R.today.soldLost||0)+1;R.today.lost++;fl($('lane'),'🚫 Hết '+low(ITEMS[so.so].n)+', khách về',true);return}
  const over=cups.some(overCap);
  if((over&&Math.random()<.6)||(cups.some(orderPricey)&&Math.random()<.4)){R.today.priceLost++;toast('Có khách chê đắt, bỏ đi');return}
  const max=(55+(level()>=2?8:0))*(S.upg.seats?1.25:1)*(1+.8*(nc-1))*(1+.35*cups.reduce((a,x)=>a+slowN(x)+Math.max(0,x.tops.length-1),0)/nc);
  const who=Math.floor(Math.random()*9),pp=PERSONA[who];
  const vip=R.vipPending;if(vip){R.vipPending=false;toast('Food reviewer vừa tới quán!')}
  const brat=vip?null:pickBrat();
  R.firstDone=true;R.slots[i]={brat,born:performance.now(),vip,id:++uid,who,face:rnd(FACES),name:PNAME[who]?PNAME[who]():genName(),say:rnd(pp.o),end:rnd(pp.e),cups,done:cups.map(()=>false),order:o,pat:max,max,wrong:0,paid:0};{const c=R.slots[i];if(c&&c.brat==='hoi'){c.max*=.6;c.pat=c.max}}renderStreet();sfx('bell');
}
/* đơn online: tối đa bằng số chỗ ở quầy (3, mở rộng quầy 4); tài xế chờ tối đa 90 giây */
const onCap=()=>R.slots.length;
const onMul=()=>appsOn().length?1:0;
function pickApp(){const on=appsOn();return on.length?wpick(on,on.map(a=>a.w)):null}
function mkOnline(app,cups){const n=cups.length,max=90*(n>1?1+.15*(n-1):1);
  return {id:++uid,app:app.id,ship:rnd(app.rows),born:performance.now(),name:genName(),face:rnd(FACES),cups,done:cups.map(()=>false),order:cups[0],pat:max,max,wrong:0,big:n>1}}
function spawnStar(i){const last=S.starLast,pool=STARS.map((x,k)=>k).filter(k=>k!==last),k=rnd(pool),st=STARS[k];S.starLast=k;if(S.starSch)S.starSch.done=true;
  let o=genOrder();for(let t=0;t<8&&o.so;t++)o=genOrder();if(o.so)o.so=null;
  const hi=starLine(st,'hi'),max=(55+(level()>=2?8:0))*1.6*(S.upg.seats?1.25:1)*(1+.35*(slowN(o)+Math.max(0,o.tops.length-1)));
  R.slots[i]={star:k,hi:hi[0],born:performance.now(),id:++uid,name:st.n,face:'⭐',say:st.m?'Cho anh':'Cho chị',end:rnd([' nha!',' nhé, cảm ơn nha!',' nha em!']),cups:[o],done:[false],order:o,pat:max,max,wrong:0,paid:0};
  renderStreet();sfx('star');toast('⭐ '+st.t+' '+st.n+' vừa ghé quán!',5000,1);setTimeout(()=>{const q=$('q3say');if(q)q._t=null;renderLane()},3600)}
function spawnOnline(){
  if(R.online.length>=onCap()||bigOrder())return;if(pricyItems().length&&Math.random()<.8)return;
  const app=pickApp();if(!app)return;
  {const o=genOrder();if(o.so)return;R.online.push(mkOnline(app,[o]))}renderOnline();
}
/* đơn lớn: mỗi 30 ngày Soppi có 1 đơn 5–10 ly, rơi vào ngày ngẫu nhiên */
const BIG={sp:{n:()=>1,min:5,max:10}};
function planBig(){R.bigQ=[];const sc=S.bigSched=S.bigSched||{};
  appsOn().forEach(a=>{let x=sc[a.id];if(!x||S.day>x.end){const n=BIG[a.id].n(),d=[];while(d.length<n){const v=S.day+Math.floor(Math.random()*30);if(!d.includes(v))d.push(v)}x=sc[a.id]={end:S.day+29,days:d}}
    x.days.filter(v=>v===S.day).forEach(()=>R.bigQ.push({app:a.id,at:.2+Math.random()*.5}))})}
function spawnBig(q){const a=APPS.find(x=>x.id===q.app);if(!a||!appsOn().includes(a))return true;if(R.online.length>=onCap())return false;
  const B=BIG[a.id],n=B.min+Math.floor(Math.random()*(B.max-B.min+1)),cups=[];
  for(let k=0;k<n;k++){let o=genOrder();for(let t=0;t<6&&o.so;t++)o=genOrder();if(!o.so)cups.push(o)}
  if(cups.length<2)return true;R.online.push(mkOnline(a,cups));sfx('bell');toast('Đơn lớn '+a.n+': '+cups.length+' ly!',4000,1);renderOnline();return true}
const matches=(a,b)=>!a.mixed&&a.base===b.base&&(a.flav||'none')===(b.flav||'none')&&a.size===b.size&&(b.sugar==null||a.sugar===b.sugar)&&(b.ice==null||a.ice===b.ice)&&a.cheese===b.cheese&&a.tops.length===b.tops.length&&a.tops.every(t=>b.tops.includes(t));
/* giá "đắt" đúng như cảnh báo trong tab Giá bán: trà >115% giá gợi ý, hương/topping/size >130%, hoặc cả ly vượt mức tối đa */
const teaCap=k=>k==='matcha'?CFG.teaCapMatcha:CFG.teaCap;
const itemPricey=k=>k==='L'?lPricey():ITEMS[k]&&ITEMS[k].type==='base'?S.sell[k]>=teaCap(k):S.sell[k]/DEF_SELL[k]>1.3;
const orderPricey=o=>overCap(o)||[o.base,...(o.flav?[o.flav]:[]),...o.tops,...(o.size==='L'?['L']:[])].some(itemPricey);
function wrongKinds(c,o){if(!o)return;const k=c.wk=c.wk||{};
  if(cup.base!==o.base||(cup.flav||null)!==(o.flav||null))k.mon=1;if(cup.size!==o.size)k.size=1;
  if(o.sugar!=null&&cup.sugar!==o.sugar)k.sugar=1;if(o.ice!=null&&cup.ice!==o.ice)k.ice=1;
  if(cup.tops.length!==o.tops.length||!o.tops.every(t=>cup.tops.includes(t)))k.tops=1}
function stars(c,online){
  if(c&&c.star!=null)return {s:5,why:'star'};
  const w=1-c.pat/c.max,idx=c.cups.reduce((a,x)=>a+priceIdx(x),0)/c.cups.length,pricey=c.cups.some(orderPricey);let s=5,why='great';
  c.rf={wait:w>.5,pricey,wrong:!!c.wrong,cheap:!pricey&&idx<.9,spill:!!c.spilled};
  if(w>.5){s--;why=online?'late':'wait'}
  if(w>(S.upg.ac?.9:.82)){s--;why=online?'late':'wait'}
  if(w>.96)s--;
  if(c.fillPen){s-=1;if(why==='great')why='meh'}
  if(c.brat==='kho'){if(c.fillPen||w>.4)s-=1;if(s>=5&&Math.random()<.5)s=4}
  if(pricey){s--;why='pricey'}
  if(c.wrong){s-=c.wrong;why='wrong'}
  const md=S.evDay===S.day?S.mood:null;
  if(md!=='vui'&&md!=='kho'&&Math.random()<.13)s-=1;
  if(md==='kho')s=Math.min(s,Math.random()<.5?3:4);/* ngày khó ở: phục vụ tốt cũng chỉ 3–4 sao */
  if(md==='vui'&&why==='great')s=Math.max(s,5-(c.fillPen?1:0));
  if(c.rf.cheap&&s<5){s++;if(why==='great')why='cheap'}
  s=Math.max(1,Math.min(5,s));
  if(why==='great'||(why==='cheap'&&s<4))why=s>=5?'great':s===4?'ok':s===3?'meh':'bad';
  return {s,why};
}
function serve(i){
  const c=R.slots[i];if(!c||!R.running)return;const el=document.querySelector(`[data-slot="${i}"]`);
  if(!ready())return;
  const j=c.cups.findIndex((x,k)=>!c.done[k]&&matches(cup,x));
  if(j>=0){
    sfx('coin');if(!R.coachDone&&S.coach!==true){R.coachDone=true;setTimeout(coach,50)}const o=c.cups[j];let p=price(o)*(c.star!=null?3:1);const gd=guardLv(),T=R.today;if(c.brat==='mac'){const full=p;p=Math.round(p*.8/1000)*1000;
      if(gd&&Math.random()>=.02){T.gMac=(T.gMac||0)+(full-p);T.gMacN=(T.gMacN||0)+1;toast('Bảo vệ giữ '+c.name+' lại: trả giá '+fmt(p)+', cuối ngày phải trả đủ '+fmt(full),4000,1)}
      else{if(gd)T.gEsc=(T.gEsc||0)+1;toast(c.name+' nhận ly rồi mới trả giá, chỉ trả '+fmt(p)+(gd?'. Bảo vệ để xổng mất!':''),4000,1)}}
    if(c.brat==='bung'&&c.done.filter(x=>!x).length===1){const full=p;p=0;
      if(gd>=2&&Math.random()>=.02){T.gRun=(T.gRun||0)+full;T.gRunN=(T.gRunN||0)+1;setTimeout(()=>toast('Bảo vệ tóm được '+c.name+' ôm ly bỏ chạy, cuối ngày thu lại '+fmt(full)),300)}
      else{if(gd>=2)T.gEsc=(T.gEsc||0)+1;S.bungN=(S.bungN||0)+1;setTimeout(()=>toast(c.name+' ôm ly chạy mất, không trả tiền!'+(gd>=2?' Bảo vệ đuổi không kịp':'')),300)}}c.done[j]=true;recSale(o);S.money+=p;R.today.rev+=p;S.totalRev+=p;R.today.served++;S.served++;
    const left=c.done.filter(x=>!x).length;cup=newCup();
    if(left){c.order=c.cups[c.done.indexOf(false)];const st_=isSt(c);if(!st_)R.focus=c.id;fl(el,`+${fmt(p)} · còn ${left} ly`,false);renderLane();renderCup();renderPanel();head();if(!st_)toast('Xong ly '+(c.done.indexOf(false))+', làm tiếp ly '+(c.done.indexOf(false)+1));return}
    const tip=Math.round((c.pat/c.max)*5)*1000*(S.upg.sealer?1.3:1)*(evIs('holiday')?2:1)*c.cups.length,rv=stars(c,false);
    const toStaff=STAFF.some(x=>S.upg[x.id]&&!x.guard);
    if(toStaff){S.cur.staffTip=(S.cur.staffTip||0)+tip}else{S.cur.tips+=tip;S.money+=tip;S.totalRev+=tip;R.today.tips+=tip}
    if(rv.s>=5)setTimeout(()=>sfx('star'),250);addReview(rv.s,rv.why,false,c);if(c.vip){addReview(rv.s,rv.why,false,c);addReview(rv.s,rv.why,false,c)}fl(el,toStaff?`+${fmt(p)}  ${'★'.repeat(rv.s)}`:`+${fmt(p+tip)}  ${'★'.repeat(rv.s)}`,false);
    R.slots[i]=null;renderStreet();renderCup();renderPanel();
  }else{
    sfx('bad');if(c.vip){addReview(1,'wrong',false,c);addReview(2,'wrong',false,c);addReview(1,'wrong',false,c);c.vip=false}
    wrongKinds(c,c.order);c.wrong++;R.today.wrong++;c.pat=Math.max(.5,c.pat-c.max*.3);el.classList.add('angry');fl(el,'Sai món! 🗑',true);setTimeout(()=>el&&el.classList.remove('angry'),300);spoilCup();renderCup();renderPanel();
  }
  head();
}
function serveOnline(j){
  const c=R.online[j];if(!c||!R.running)return;const el=document.querySelector(`[data-on="${j}"]`);
  if(!ready())return;
  const k=c.cups.findIndex((x,q)=>!c.done[q]&&matches(cup,x));
  if(k>=0){sfx('coin');
    const o=c.cups[k],p=price(o),fee=p*CFG.commission/100;
    recSale(o);S.cur.onl+=p;S.cur.fee+=fee;S.money+=p-fee;R.today.onl+=p-fee;S.totalRev+=p;R.today.fee+=fee;R.today.served++;S.served++;c.done[k]=true;cup=newCup();
    const left=c.done.filter(x=>!x).length;
    if(left){c.order=c.cups[c.done.indexOf(false)];fl(el,`+${fmt(p-fee)} · còn ${left} ly`,false);renderOnline();renderCup();renderPanel();head();return}
    const rv=stars(c,true);addReview(rv.s,rv.why,true,c);fl(el,`+${fmt(p-fee)}  ${'★'.repeat(rv.s)}`,false);
    if(R.sto&&R.sto.id===c.id)R.sto=null;
    R.online.splice(j,1);renderOnline();renderCup();renderPanel();
  }else{sfx('bad');wrongKinds(c,c.order);c.wrong++;R.today.wrong++;c.pat=Math.max(.5,c.pat-c.max*.25);fl(el,'Sai đơn! 🗑',true);spoilCup();renderCup();renderPanel()}
  head();
}
function recSale(o){const sl=S.cur.sales,add=(k,a)=>{const x=sl[k]=sl[k]||{q:0,a:0};x.q++;x.a+=a};
  add(o.base,sv(S.sell,o.base));if(o.flav)add(o.flav,sv(S.sell,o.flav));o.tops.forEach(t=>add(t,sv(S.sell,t)));if(o.cheese)add('cheese',sv(S.sell,'cheese'));if(o.size==='L')add('L',sv(S.sell,'L'))}
const recRev=r=>Object.values(r.sales).reduce((a,x)=>a+x.a,0)+r.tips+(r.gift||0);
const recCost=r=>r.rent+r.util+(r.wage||0)+(r.bad||0)+(r.loanInt||0)+r.fee+r.tax+r.equip.reduce((a,x)=>a+x.v,0)+Object.values(r.ing).reduce((a,x)=>a+x.v,0);
function ready(){const lv=level(),miss=!cup.base?'loại trà':!cup.size?'size':lv>=2&&!cup.sugar?'đường':lv>=2&&!cup.ice?'đá':null;if(miss){toast('Chưa chọn '+miss);return false}return true}
const needs=o=>[o.base,...(o.flav?[o.flav]:[]),...o.tops,...(o.cheese?['cheese']:[]),'cup'];
const missing=o=>needs(o).filter(k=>!qty(k)&&!(cup&&cup.used&&(k==='cup'||cup.base===k||cup.flav===k||cup.tops.includes(k)||(k==='cheese'&&cup.cheese))));
function declineOnline(j){const c=R.online[j];if(!c)return;if(isSto(c))R.sto=null;const m=missing(c.order);R.online.splice(j,1);R.today.lost++;
  addReview(rnd([2,2,3]),'soldoutOnl',true,c,m.length?low(ITEMS[m[0]].n):null);renderOnline();renderLane();renderPanel()}
function decline(i){const c=R.slots[i];if(!c)return;const m=missing(c.order),got=c.done.filter(Boolean).length;R.slots[i]=null;R.today.lost++;
  const why=got?'soldoutPartial':(m.length?'soldout':'refused');
  addReview(rnd(got?[3,3,4]:[2,2,3]),why,false,c,m.length?low(ITEMS[m[0]].n):null);renderStreet()}
/* khách hãm: thỉnh thoảng xuất hiện ngẫu nhiên */
const guardLv=()=>0;/* bảo vệ: chưa dùng */
const BRATS={hoi:{n:'Khách hối',c:'#e2574c'},doi:{n:'Khách hay đổi ý',c:'#9b6bd1'},mac:{n:'Khách trả giá',c:'#e8792f'},kho:{n:'Khách khó tính',c:'#6b4a36'},bung:{n:'',c:''}};
function pickBrat(){if(S.day<3)return null;const bad=S.mood==='kho'&&S.evDay===S.day,good=S.mood==='vui'&&S.evDay===S.day;
  if(Math.random()>(bad?.45:good?.04:.12))return null;return wpick(['hoi','doi','mac','kho','bung'],bad?[4,2,2,6,1]:[3,3,3,3,1])}
function bratChange(c){const o=c.order;if(c.changed||!o)return;c.changed=true;const tops=TOP_KEYS.filter(k=>S.unlocked[k]&&qty(k)>0&&!o.tops.includes(k)&&ITEMS[k].g!=='foam'&&sv(S.sell,k)<=ADD_CAP);
  let msg;if(tops.length&&o.tops.length&&Math.random()<.6){const old=o.tops[0],nw=rnd(tops);o.tops[0]=nw;msg=`đổi ${low(ITEMS[old].n)} sang ${low(ITEMS[nw].n)}`}
  else{o.size=o.size==='M'?'L':'M';msg=`đổi sang size ${o.size}`}
  toast(`${c.name}: Ơ em ${msg} nha!`);const qw=$('q3want');if(qw)qw._o=null;const sy=$('q3say');if(sy)sy._t=null;renderLane();renderPanel()}
function rushMul(){const el=1-R.t/(dayLen()*60);/* 0 = 11:00, 1 = 22:00 */
  if(el<.05)return .8;if(el<.25)return 1.45;if(el<.33)return .9;if(el<.55)return .5;if(el<.75)return 1.4;if(el<.85)return .9;return .7}
function tick(){
  const dt=.1;R.t-=dt;R.spawnT-=dt;
  if(R.spawnT<=0&&R.t>5&&bigOrder())R.spawnT=2.5;else if(R.spawnT<=0&&R.t>5){spawn();R.spawnT=9/traffic()/rushMul()*(.75+Math.random()*.5)}
  if(onlineActive()){R.onT-=dt;if(R.onT<=0&&R.t>Math.max(8,dayLen()*60*30/660)){spawnOnline();R.onT=36/traffic()/onMul()*(evIs('rain')?.45:1)*(.7+Math.random()*.6)}
    if(R.bigQ&&R.bigQ.length&&R.t>8){const tot0=dayLen()*60;R.bigQ=R.bigQ.filter(q=>!(R.t<tot0*(1-q.at)&&spawnBig(q)))}}
  let ch=false,cho=false;
  R.tk=(R.tk||0)+1;const upd=R.tk%5===0;
  R.slots.forEach(c=>{if(c&&c.brat==='doi'&&!c.changed&&c.pat<c.max*.72)bratChange(c)});
  R.slots.forEach((c,i)=>{if(!c)return;c.pat-=dt;if(c.pat<=0){R.slots[i]=null;R.today.lost++;const st=Math.random()<.3?2:1;addReview(st,'timeout',false,c);if(c.vip){addReview(1,'timeout',false,c);addReview(1,'timeout',false,c)}ch=true;toast(c.star!=null?c.name+' phải đi rồi, vẫn để lại 5 sao':c.name+' bỏ về, để lại '+st+' sao')}else if(upd)updPat(c)});
  R.online=R.online.filter(c=>{c.pat-=dt;if(c.pat<=0){R.today.lost++;addReview(1,'late',true,c);cho=true;if(R.sto&&R.sto.id===c.id)R.sto=null;toast('Tài xế '+appN(c)+' huỷ đơn #'+c.id);return false}if(upd)updPat(c);return true});
  if(ch)renderStreet();if(cho)renderOnline();
  staffTick(dt);staffOnTick(dt);
  const tot=dayLen()*60;
  if(evIs('students')&&!R.burstDone&&R.t<tot*.55&&!bigOrder()){R.burstDone=true;toast('Nhóm học sinh tan học ghé quán!');for(let n=0;n<4;n++)spawn();R.spawnT=2}
  if(R.starAt&&R.t<R.starAt){R.starAt=0;R.starPend=true;R.spawnT=Math.min(R.spawnT,1)}
  if(evIs('reviewer')&&!R.vipDone&&R.t<tot*.6){R.vipDone=true;R.vipPending=true;R.spawnT=Math.min(R.spawnT,1)}
  if(R.t<=0&&!R.closing){R.closing=true;R.otT=0;toast('22:00 đóng cửa! Làm nốt cho khách đang chờ nhé',4000,1);renderLane()}
  if(R.closing&&!R.slots.some(Boolean)&&!R.online.length){endDay();return}
  head();
}
function pauseGame(){
  if(!R.running||R.paused)return;R.paused=true;clearInterval(timer);
  const left=Math.ceil(R.t),waiting=R.slots.filter(Boolean).length+R.online.length;
  ask(`<div class="pbig">${ico('pause')}</div><h2>Tạm dừng</h2><div class="sndrow"><button class="sbtn ghost" id="pMus">Nhạc: ${AU.mus?'Bật':'Tắt'}</button><button class="sbtn ghost" id="pSnd">Âm thanh: ${AU.on?'Bật':'Tắt'}</button></div>`,
    [['▶ Chơi tiếp',resumeGame,1],['Đóng cửa hôm nay',askClose,1]]);
  $('pMus').onclick=()=>{AU.mus=!AU.mus;saveAu();au();musSync();$('pMus').textContent='Nhạc: '+(AU.mus?'Bật':'Tắt')};
  $('pSnd').onclick=()=>{AU.on=!AU.on;saveAu();$('pSnd').textContent='Âm thanh: '+(AU.on?'Bật':'Tắt')};
}
function askClose(){
  const waiting=R.slots.filter(Boolean).length+R.online.length;
  ask(`<div class="pbig">${ico('moon')}</div><h2>Đóng cửa hôm nay?</h2><p>Quán nghỉ sớm và chuyển sang tổng kết ngày.${waiting?` ${waiting} khách đang chờ sẽ ra về.`:''}</p>`,
    [['Quay lại',pauseAgain],['Đóng cửa',closeEarly,1]])}
function pauseAgain(){R.paused=false;pauseGame()}
function closeEarly(){if(!R.running)return;R.online=[];R.t=0;endDay()}
function resumeGame(){if(!R.running||!R.paused)return;R.paused=false;clearInterval(timer);timer=setInterval(tick,100);head()}
document.addEventListener('gesturestart',e=>e.preventDefault());
document.addEventListener('visibilitychange',()=>{if(document.hidden)pauseGame()});
const cropBg=(x,y,w,h,dw)=>{const k=dw/w;return `<div class="crop" style="width:${dw}px;height:${Math.round(h*k)}px;background:url(img/bg.jpg) ${-x*k}px ${-y*k}px/${768*k}px ${1376*k}px no-repeat"></div>`};
function lvIntro(lv){
  if(lv===2)return `<h2>Từ hôm nay: đường và đá</h2><p>Khách sẽ chọn mức đường và đá. Làm sau khi rót trà và thêm topping.</p>${cropBg(511,955,248,178,230)}
    <div class="lvs"><div><b>Nước đường</b> bấm 1 lần = 30%, 2 lần = 50%, 3 lần = 70%, 4 lần = 100%</div><div><b>Đá viên</b> xúc 1 lần = ít đá, 2 lần = đá bình thường. Không xúc = không đá</div><div><b>Lỡ bấm dư</b> chạm xô inox để đổ ly, làm lại từ đầu</div></div>`;
  return `<h2>Từ hôm nay: đơn nhiều ly, ly tới 4 topping</h2><p>Khách có thể gọi tới 4 loại topping trong một ly (chỉ 1 loại foam), chạm lần lượt từng khay khách gọi. Một khách có thể mua 2–5 ly. Bấm Ly 1, Ly 2… trên bóng thoại để xem từng ly. Pha xong ly nào thì dán nắp giao ly đó, khách chờ lâu hơn cho đơn nhiều ly. Đơn từ 3 ly thì khách khác chờ bạn làm xong mới ghé.</p>`}
function startDay(){
  cup=newCup();
  Object.assign(R,{s1n:0,s1bad:(()=>{const n=rnd([0,1,2]),a=[];while(a.length<n){const x=2+Math.floor(Math.random()*15);if(!a.includes(x))a.push(x)}return a})(),dayLen:S.dayLen||CFG.dayMin,running:true,t:(S.dayLen||CFG.dayMin)*60,spawnT:.8,onT:6,slots:S.upg.slot4?[null,null,null,null]:[null,null,null],online:[],
    st2:null,staffPouring:false,closing:false,otT:0,helping:false,coachDone:false,firstDone:false,burstDone:false,vipDone:false,vipPending:false,today:{used:{},rev:0,onl:0,fee:0,tips:0,cogs:0,served:0,lost:0,wrong:0,priceLost:0,stars:[]}});
  R.sto=null;planBig();
  {R.starAt=0;if(S.day>=3){let x=S.starSch;if(!x||S.day>x.end)x=S.starSch={end:S.day+29,day:S.day+Math.floor(Math.random()*30)};if(x.day===S.day&&!x.done)R.starAt=(S.dayLen||CFG.dayMin)*60*(.35+Math.random()*.35)}}
  renderSell();window.scrollTo(0,0);musSync();
  R.paused=false;clearInterval(timer);timer=setInterval(tick,100);
  const e0=ev();if(e0)setTimeout(()=>toast(EVS[e0.id].n+': '+evText(e0)),600);
  const lv=level();if(lv>1&&(S.seenLv||1)<lv){S.seenLv=lv;save();R.paused=true;clearInterval(timer);sfx('lvup');ask(lvIntro(lv),[['Đã hiểu, mở cửa',resumeGame,1]])}
  coach();
}
function endDay(){
  clearInterval(timer);R.running=false;pourSnd(false);sfx('lvup');const T=R.today,r=S.cur,fc=fixed();
  R.slots.forEach(c=>{if(c)T.lost++});
  const waste=expireStock();syncFlav();waste.forEach(x=>r.waste[x.k]={q:x.q,v:x.v});S.used=T.used;
  r.rent=fc.rent;r.util=fc.util;r.served=T.served;r.lost=T.lost+T.priceLost;r.starSum=T.stars.reduce((a,b)=>a+b,0);r.starN=T.stars.length;
  const yi=Math.floor((S.day-1)/360);if(S.taxYear!==yi){S.taxYear=yi;S.yearRev=0}
  const rev=recRev(r)+r.onl*0,before=S.yearRev;S.yearRev+=rev;
  const taxable=Math.max(0,S.yearRev-Math.max(CFG.taxThreshold,before));r.tax=Math.round(taxable*(CFG.vat+CFG.pit)/100);
  r.ev=ev()?{id:ev().id,k:ev().k}:null;{const otMin=R.otT<0?-R.otT/(dayLen()*60)*660:0;r.ot=S.upg.staff2&&otMin>0?Math.ceil(otMin/30-1e-9)*20000:0}r.wage=wageDay()+r.ot;
  debts().forEach(L=>{const x=S[L.id];r.loanInt=(r.loanInt||0)+x.int;r.loanOut=(r.loanOut||0)+x.pay;S.money-=x.pay+x.int;x.left--;if(!x.left)S[L.id]=null});S.money-=r.rent+r.util+r.tax+r.wage;
  /* bảo vệ thu lại tiền của khách trả giá / quỵt trước khi tổng kết */
  const gMac=T.gMac||0,gRun=T.gRun||0;r.guard=gMac+gRun;S.money+=r.guard;
  const cost=recCost(r),profit=rev-cost,avg=r.starN?r.starSum/r.starN:0,wv=waste.reduce((a,x)=>a+x.v,0);
  S.history.push(r);if(S.history.length>400)S.history.shift();S.totalProfit=(S.totalProfit||0)+profit;
  const broke=S.money<0;
  let justOnline=false;if(!broke){S.best=Math.max(S.best||0,S.day);S.day++;S.cur=newRec(S.day);rollDay(S.day);if(!S.online&&onlineCheck().every(x=>x.ok)){S.online=true;justOnline=true}}
  save();autoBak();
  const nextLv=!broke&&levelOf(S.day)>levelOf(S.day-1)?levelOf(S.day):0;
  const showCard=()=>{
  $('card').innerHTML=`<div class="pbig">${broke?ico('sad'):ico('moon')}</div><h2>${broke?'Phá sản':'Hết ngày '+r.day}</h2>
  <div class="kpis"><div><b>${r.served}</b>🧋</div><div><b>${r.lost}</b>${ico('angry')}</div><div><b>${avg?avg.toFixed(1).replace('.',','):'–'}</b>${ico('star')}</div></div>
  <div class="ledger">
    <div><span>${ico('price')} Doanh thu</span><span class="revc">+${fmt(rev)}</span></div>
    <div><span>${ico('receipt')} Chi phí</span><span class="neg">−${fmt(cost)}</span></div>
    ${r.wage-(r.ot||0)?`<div><span class="wl">${ico('people')} Lương nhân viên</span><span class="wl">${fmt(r.wage-(r.ot||0))}</span></div>`:''}${r.ot?`<div><span class="wl">${ico('clock')} Tăng ca nhân viên pha chế</span><span class="wl">${fmt(r.ot)}</span></div>`:''}${r.bad?`<div><span class="wl">${ico('warn')} Sự cố mất tiền</span><span class="wl">${fmt(r.bad)}</span></div>`:''}
    ${r.loanInt?`<div><span class="wl">${ico('money')} Trả nợ (lãi ${fmt(r.loanInt)})</span><span class="wl">${fmt(r.loanOut+r.loanInt)}</span></div>`:''}
    ${r.guard?`<div><span class="wl">${ico('people')} Bảo vệ thu lại</span><span class="wl">+${fmt(r.guard)}</span></div>`:''}
    ${r.staffTip?`<div><span class="wl">${ico('people')} Tip nhân viên giữ (quán không nhận)</span><span class="wl">${fmt(r.staffTip)}</span></div>`:''}
    ${r.spoil&&r.spoil.n?`<div><span class="wl">🥤 ${r.spoil.n} ly hỏng</span><span class="wl">${fmt(r.spoil.v)}</span></div>`:''}
    ${wv?`<div><span class="wl">${ico('trash')} ${waste.map(x=>ITEMS[x.k].s+' '+x.q).join(', ')}</span><span class="wl">${fmt(wv)}</span></div>`:''}
    <div class="tot"><span>${ico('chartup')} Lãi</span><span class="${profit<0?'neg':'pos'}">${profit<0?'−':'+'}${fmt(Math.abs(profit))}</span></div>
    <div class="tot"><span>${ico('money')} Két</span><span>${fmt(S.money)}</span></div>
  </div>
  ${broke?`<p>${ico('trophy')} ${S.best||0} ngày</p><button class="big" id="go">Mở quán mới</button>`
  :`${!broke&&S.ev?`<p class="lvup">${ico(EVS[S.ev.id].ic)} Ngày mai: <b>${EVS[S.ev.id].n}</b>. ${evText(S.ev)}</p>`:''}${nextLv?`<p class="lvup">${ico('warn')} Từ ngày ${S.day}: ${LV_TXT[nextLv].toLowerCase()}. Đầu ngày sẽ có hướng dẫn.</p>`:''}${justOnline?`<p class="lvup">${ico('phone')} Mở đơn online Soppi! ${(S.tablets||0)?'':'Mua tablet ở Nâng cấp > Trang bị để đơn đổ về.'}</p>`:''}<button class="sbtn" id="seeSum" style="width:100%;padding:10px;margin-top:6px">${ico('chart')} Tổng kết</button><button class="big" id="go" style="margin-top:8px">Ngày ${S.day} ➜</button>`}`;
  $('modal').hidden=false;$('go').focus();
  const close=tab=>{$('modal').hidden=true;if(broke){const n=S.shopName;S=fresh();S.shopName=n;save()}R.tab=tab;R.sumMode='day';R.sumIdx=null;renderPrep();window.scrollTo(0,0)};
  $('go').onclick=()=>close('kho');if($('seeSum'))$('seeSum').onclick=()=>close('tongket');
  };
  const gOn=guardLv(),gRep=gOn&&(T.gMacN||T.gRunN||T.gEsc);
  if(gRep){ask(`<div class="pbig">${ico('people')}</div><h2>Bảo vệ báo cáo</h2><div class="ledger">
    ${T.gMacN?`<div><span>${T.gMacN} khách trả giá bị giữ lại, trả thêm cho đủ</span><span class="pos">+${fmt(gMac)}</span></div>`:''}
    ${T.gRunN?`<div><span>${T.gRunN} khách quỵt tiền bị tóm, lấy lại</span><span class="pos">+${fmt(gRun)}</span></div>`:''}
    ${T.gEsc?`<div><span class="wl">Để xổng ${T.gEsc} khách</span><span class="wl">0đ</span></div>`:''}
    <div class="tot"><span>Tổng thu lại</span><span class="pos">+${fmt(gMac+gRun)}</span></div></div>`,[['Xem tổng kết ngày',showCard,1]])}else showCard();
}

/* ---------- TỔNG KẾT ---------- */
function aggregate(recs){
  const g={spoil:{n:0,v:0},sales:{},tips:0,onl:0,fee:0,equip:[],ing:{},waste:{},rent:0,util:0,tax:0,served:0,lost:0,starSum:0,starN:0};
  const addMap=(m,src,f)=>Object.entries(src).forEach(([k,x])=>{const y=m[k]=m[k]||{};Object.keys(x).forEach(p=>y[p]=(y[p]||0)+x[p])});
  recs.forEach(r=>{addMap(g.sales,r.sales);addMap(g.ing,r.ing);addMap(g.waste,r.waste);g.equip.push(...r.equip.map(e=>({...e,d:r.day})));if(r.spoil){g.spoil.n+=r.spoil.n;g.spoil.v+=r.spoil.v}
    ['tips','staffTip','gift','loanInt','onl','fee','rent','util','wage','ot','bad','tax','served','lost','starSum','starN'].forEach(p=>g[p]=(g[p]||0)+(r[p]||0))});
  return g;
}
function paneSum(){
  const H=S.history;
  if(!H.length){$('pane').innerHTML='<div class="sec">Tổng kết</div><p class="note">Chưa có dữ liệu. Bán xong ngày đầu tiên là có tổng kết ở đây.</p>';return}
  const mode=R.sumMode||'day',size={day:1,week:7,month:30}[mode];
  const blocks=[...new Set(H.map(r=>Math.floor((r.day-1)/size)))];
  let idx=R.sumIdx==null||!blocks.includes(R.sumIdx)?blocks[blocks.length-1]:R.sumIdx;
  const recs=H.filter(r=>Math.floor((r.day-1)/size)===idx),g=aggregate(recs);
  const d0=idx*size+1,d1=d0+size-1,last=recs[recs.length-1].day;
  const label=mode==='day'?`Ngày ${d0}`:`${mode==='week'?'Tuần':'Tháng'} ${idx+1} · ngày ${d0}–${d1}${last<d1?' (đang diễn ra)':''}`;
  const pi=blocks.indexOf(idx);
  const vn=n=>(Math.round(n/100)/10).toLocaleString('vi-VN',{maximumFractionDigits:1});
  // revenue rows
  const name=k=>iname(k);
  const grp=(keys,title)=>{const rows=keys.map(k=>({k,q:(g.sales[k]||{}).q||0,a:(g.sales[k]||{}).a||0})).filter(r=>r.q>0).sort((a,b)=>b.q-a.q);
    if(!rows.length)return '';
    const mx=Math.max(1,...rows.map(r=>r.q));
    return `<div class="tgrp">${title}</div>`+rows.map(r=>`<div class="trow${r.q?'':' zero'}"><div><b>${name(r.k)}</b>: ${r.q} phần<div class="tbar"><i style="width:${r.q/mx*100}%"></i></div></div><div>${r.q?vn(r.a/r.q):'–'}</div><div>${vn(r.a)}</div></div>`).join('')};
  const baseK=[...BASE_KEYS.filter(k=>S.unlocked[k]||g.sales[k]),...Object.keys(g.sales).filter(k=>!ITEMS[k]&&k!=='L')],flK=FLAV_KEYS.filter(k=>S.unlocked[k]||g.sales[k]),topK=TOP_KEYS.filter(k=>S.unlocked[k]||g.sales[k]);
  const salesTot=Object.values(g.sales).reduce((a,x)=>a+x.a,0),rev=salesTot+g.tips+(g.gift||0);
  const ingTot=Object.values(g.ing).reduce((a,x)=>a+x.v,0),eqTot=g.equip.reduce((a,x)=>a+x.v,0);
  const cost=g.rent+g.util+(g.wage||0)+(g.loanInt||0)+eqTot+g.fee+ingTot+g.tax,profit=rev-cost;
  const avg=g.starN?(g.starSum/g.starN).toFixed(1).replace('.',','):'–';
  const bestB=baseK.map(k=>[k,(g.sales[k]||{}).q||0]).sort((a,b)=>b[1]-a[1]),bestT=topK.map(k=>[k,(g.sales[k]||{}).q||0]).sort((a,b)=>b[1]-a[1]);
  const wasteRows=Object.entries(g.waste);
  let h=`<div class="segtabs">${[['day','Theo ngày'],['week','Theo tuần'],['month','Theo tháng']].map(([m,l])=>`<button class="chip${mode===m?' on':''}" data-sm="${m}">${l}</button>`).join('')}</div>
  <div class="pnav"><button class="sbtn" data-nav="-1" ${pi>0?'':'disabled'} aria-label="Kỳ trước">‹</button><b>${label}</b><button class="sbtn" data-nav="1" ${pi<blocks.length-1?'':'disabled'} aria-label="Kỳ sau">›</button></div>
  ${mode==='day'&&recs[0].ev&&EVS[recs[0].ev.id]?`<div class="fore">${ico(EVS[recs[0].ev.id].ic)} Sự kiện: <b>${EVS[recs[0].ev.id].n}</b></div>`:''}
  <div class="kpis"><div><b>${g.served}</b>ly bán</div><div><b>${g.lost}</b>khách bỏ về</div><div><b>${avg}★</b>đánh giá</div></div>
  ${bestB[0]&&bestB[0][1]?`<div class="fore">🔥 Bán chạy: <b>${iname(bestB[0][0])}</b>${bestT[0]&&bestT[0][1]?`, topping <b>${iname(bestT[0][0])}</b>`:''}. Ít khách gọi: <b>${iname(bestB[bestB.length-1][0])}</b>${bestT.length>1?`, <b>${iname(bestT[bestT.length-1][0])}</b>`:''}.</div>`:''}
  <div class="rh revc">Doanh thu</div>
  <div class="note" style="margin:0 0 2px">Đơn vị: k = 1.000đ</div><div class="thead"><div>Thành phần</div><div>Đơn giá</div><div>Tổng</div></div>
  ${grp(baseK,'Món')}${grp(flK,'Hương vị')}${grp(topK,'Topping')}${g.sales.L?grp(['L'],'Phụ thu'):''}
  ${g.tips?`<div class="trow"><div><b>Tiền tip</b></div><div></div><div>${vn(g.tips)}</div></div>`:''}
  ${g.gift?`<div class="trow"><div><b>Tiền được tặng</b></div><div></div><div>${vn(g.gift)}</div></div>`:''}
  ${g.staffTip?`<div class="note" style="margin:4px 0 0">Tip nhân viên giữ: ${vn(g.staffTip)}k (không tính vào doanh thu quán)</div>`:''}
  ${g.onl?`<div class="note" style="margin:4px 0 0">Trong đó đơn online: ${vn(g.onl)}k</div>`:''}
  <div class="ttot revc"><span>Tổng doanh thu</span><span>${vn(rev)}k</span></div>
  <div class="rh neg">Chi phí</div>
  <div class="crow"><span>Mặt bằng</span><span>${vn(g.rent)}</span></div>
  <div class="crow"><span>Điện nước</span><span>${vn(g.util)}</span></div>
  ${g.wage-(g.ot||0)?`<div class="crow"><span>Lương nhân viên</span><span>${vn(g.wage-(g.ot||0))}</span></div>`:''}${g.ot?`<div class="crow"><span>Tăng ca nhân viên pha chế</span><span>${vn(g.ot)}</span></div>`:''}${g.bad?`<div class="crow"><span>Sự cố mất tiền</span><span>${vn(g.bad)}</span></div>`:''}
  ${g.loanInt?`<div class="crow"><span>Lãi vay</span><span>${vn(g.loanInt)}</span></div>`:''}
  <div class="crow"><span>Máy móc, trang bị & công thức</span><span>${vn(eqTot)}</span></div>
  ${g.equip.map(e=>`<div class="crow sub"><span>– ${e.n}${mode!=='day'?' (ngày '+e.d+')':''}</span><span>${vn(e.v)}</span></div>`).join('')}
  ${g.fee||S.online?`<div class="crow"><span>Phí app giao hàng (${CFG.commission}%)</span><span>${vn(g.fee)}</span></div>`:''}
  <div class="crow"><span>Nguyên liệu</span><span>${vn(ingTot)}</span></div>
  ${Object.entries(g.ing).sort((a,b)=>b[1].v-a[1].v).map(([k,x])=>`<div class="trow sub"><div>– ${iname(k)}: ${x.q} phần</div><div>${vn(x.v/x.q)}</div><div>${vn(x.v)}</div></div>`).join('')}
  ${g.spoil.n?`<div class="wbox">🥤 Ly làm hỏng: ${g.spoil.n} ly · ${vn(g.spoil.v)}k (đã nằm trong tiền nguyên liệu)</div>`:''}
  <div class="crow"><span>Thuế</span><span>${vn(g.tax)}</span></div>
  <div class="ttot neg"><span>Tổng chi phí</span><span>${vn(cost)}k</span></div>
  <div class="final ${profit<0?'neg':'pos'}"><span>Lợi nhuận sau thuế<small>Doanh thu − chi phí</small></span><span>${profit<0?'−':''}${vn(Math.abs(profit))}k</span></div>`;
  $('pane').innerHTML=h;
  $('pane').onclick=e=>{const m=e.target.closest('[data-sm]'),n=e.target.closest('[data-nav]');
    if(m){R.sumMode=m.dataset.sm;R.sumIdx=null;paneSum()}
    if(n&&!n.disabled){R.sumIdx=blocks[pi+ +n.dataset.nav];paneSum()}};
}

/* ---------- OWNER PANEL ---------- */
function ownerLogin(){
  ask('<h2>🔑 Mã chủ game</h2><input id="pin" type="password" inputmode="numeric" class="pinbox" aria-label="Mã chủ game">',[['Huỷ',()=>{}],['Mở',()=>{const p=$('pin').value.trim();if(p!==CFG.ownerPin)return toast('Sai mã');ownerPanel()},1]]);
  setTimeout(()=>$('pin')&&$('pin').focus(),50);
}
function oRow(label,key,val,step,unit){const m=unit==='đ';return `<div class="rowi"><div><div class="nm">${label}</div></div><div class="pin"><input type="number" inputmode="decimal" step="${m?step/1000:step}" value="${m?val/1000:val}" data-o="${key}" ${m?'data-m="1"':''} aria-label="${label}"><span>${m?'k':unit}</span></div></div>`}
function ownerPanel(){
  const o=CFG.online;
  $('card').innerHTML=`<h2>🔑 Bảng chủ game</h2><p>Người chơi không thấy phần này.</p><div class="owner">
  <div class="sec">Điều kiện mở đơn online (phải đủ cả 3)</div>
  ${oRow('Lợi nhuận tích luỹ từ','online.minProfit',o.minProfit,500000,'đ')}
  ${oRow('Mở đơn online từ ngày','online.fromDay',o.fromDay,1,'')}
  ${oRow('Đánh giá tối thiểu','online.minRating',o.minRating,0.1,'★')}
  ${oRow('Phí app giao hàng','commission',CFG.commission,1,'%')}
  ${oRow('Lương nhân viên phụ quầy','wage1',CFG.wage1,5000,'đ')}
  ${oRow('Lương nhân viên pha chế','wage2',CFG.wage2,5000,'đ')}
  ${oRow('Lương nhân viên phụ quầy 2','wage3',CFG.wage3,5000,'đ')}
  ${oRow('Lương nhân viên đơn online','wageOn',CFG.wageOn,5000,'đ')}
  ${oRow('Giá 1 chai hương','bottle',CFG.bottle,5000,'đ')}
  ${oRow('Giá tablet','tablet',CFG.tablet,100000,'đ')}
  <div class="sec">Cấp độ (ngày bắt đầu)</div>
  ${oRow('Cấp 2: thêm đường, đá','levels.l2',CFG.levels.l2,1,'')}
  ${oRow('Cấp 3: đơn 2–5 ly, ly tới 4 topping','levels.l3',CFG.levels.l3,1,'')}
  <div class="sec">Luật chơi</div>
  ${oRow('Thời gian thật cho 1 ngày (11:00–22:00)','dayMin',CFG.dayMin,0.5,'phút')}
  ${oRow('Vốn ban đầu (ván mới)','startMoney',CFG.startMoney,50000,'đ')}
  ${oRow('Giá 1 ly tối đa (quá thì 60% khách bỏ đi)','priceCap',CFG.priceCap,5000,'đ')}
  ${oRow('Trà (trừ matcha) đắt từ','teaCap',CFG.teaCap,5000,'đ')}
  ${oRow('Matcha đắt từ','teaCapMatcha',CFG.teaCapMatcha,5000,'đ')}
  ${oRow('Giá 1 món tối đa (quá thì vắng 80%)','itemCap',CFG.itemCap,5000,'đ')}
  ${oRow('Phụ thu size L đắt từ (90% khách bỏ size L)','sizeWarn',CFG.sizeWarn,1000,'đ')}
  ${oRow('Phụ thu size L tối đa (không ai chọn L, vắng 80%)','sizeCap',CFG.sizeCap,5000,'đ')}
  <div class="sec">Chi phí cố định & thuế</div>
  ${oRow('Mặt bằng mỗi ngày','rent',CFG.rent,5000,'đ')}
  ${oRow('Điện nước cơ bản mỗi ngày','utilBase',CFG.utilBase,5000,'đ')}
  ${oRow('Điện nước thêm mỗi trang bị','utilPerUpg',CFG.utilPerUpg,1000,'đ')}
  ${oRow('Ngưỡng doanh thu năm không chịu thuế','taxThreshold',CFG.taxThreshold,1000000,'đ')}
  ${oRow('Thuế GTGT trên doanh thu','vat',CFG.vat,0.5,'%')}
  ${oRow('Thuế TNCN trên doanh thu','pit',CFG.pit,0.5,'%')}
  ${oRow('Trộm: két trên','thiefMoney',CFG.thiefMoney,1000000,'đ')}
  ${oRow('Trộm: trước ngày','thiefDay',CFG.thiefDay,1,'')}
  ${oRow('Trộm: chừa lại trong két','thiefLeft',CFG.thiefLeft,50000,'đ')}
  ${oRow('Mã chủ game (chỉ số)','ownerPin',CFG.ownerPin,1,'')}
  <div class="sec">Giá nhập nguyên liệu (mỗi phần)</div>
  ${Object.keys(ITEMS).map(k=>oRow(ITEMS[k].n,'cost.'+k,CFG.cost[k],500,'đ')).join('')}
  <div class="sec">Hạn dùng (0 = không hết hạn)</div>
  ${Object.keys(ITEMS).map(k=>oRow(ITEMS[k].n,'life.'+k,CFG.life[k],1,'ngày')).join('')}
  </div>
  <button class="danger" id="oReset">Khôi phục mặc định</button><br><button class="big" id="oClose">Lưu và đóng</button>`;
  $('modal').hidden=false;
  $('card').onchange=e=>{const i=e.target;if(!i.dataset.o)return;const [a,b]=i.dataset.o.split('.');let v=+i.value*(i.dataset.m?1000:1);
    if(a==='ownerPin'){CFG.ownerPin=String(i.value).trim()||'2468';saveCfg();return}
    if(!(v>=0))v=0;
    if(a==='dayMin')v=Math.min(10,Math.max(.5,Math.round(v*2)/2));
    if(a==='online'&&b==='minRating')v=Math.min(5,Math.round(v*10)/10);
    if(a==='commission')v=Math.min(100,Math.round(v));if(a==='vat'||a==='pit')v=Math.min(100,Math.round(v*10)/10);if(a==='life')v=Math.round(v);
    if(b)CFG[a][b]=v;else CFG[a]=v;i.value=i.dataset.m?v/1000:v;saveCfg()};
  $('oReset').onclick=()=>{CFG=JSON.parse(JSON.stringify(DEFAULT_CONFIG));saveCfg();ownerPanel()};
  $('oClose').onclick=()=>{$('card').onchange=null;$('modal').hidden=true;renderPrep()};
}

/* ---------- HỘP THOẠI TRONG GAME (thay confirm/prompt bị chặn) ---------- */
function ask(html,btns){
  $('card').onchange=null;
  $('card').innerHTML=html+`<div class="askbtns">${btns.map((b,i)=>`<button class="${b[2]?'big':'sbtn ghost'}" data-ask="${i}">${b[0]}</button>`).join('')}</div>`;
  $('modal').hidden=false;
  $('card').querySelectorAll('[data-ask]').forEach(el=>el.onclick=()=>{const b=btns[+el.dataset.ask];const keep=el.closest('.card').querySelector('#pin')?$('pin').value:null;if(isField(document.activeElement))document.activeElement.blur();$('modal').hidden=true;b[1](keep)});
}

/* ---------- FX ---------- */
function fl(el,t,bad){if(!el)return;const r=el.getBoundingClientRect(),f=document.createElement('div');f.className='float'+(bad?' bad':'');f.textContent=t;
  document.body.appendChild(f);f.style.left=Math.max(6,Math.min(vpW()-f.offsetWidth-6,(r.left+r.width/2)/ZM-f.offsetWidth/2))+'px';f.style.top=(r.top/ZM+8)+'px';setTimeout(()=>f.remove(),1100)}
let tt,tPri=0;function toast(m,ms,pri){const now=performance.now();if(!pri&&now<tPri)return;const t=$('toast');t.innerHTML=m;t.classList.toggle('sell',R.mode==='sell');t.classList.toggle('pri',!!pri);t.classList.add('show');clearTimeout(tt);ms=ms||(R.mode==='sell'?3000:2500);tPri=pri?now+ms:0;tt=setTimeout(()=>{t.classList.remove('show');tPri=0},ms)}


/* ---------- MÀU GIAO DIỆN ---------- */
const THEMES=[
  {id:'kem',n:'Kem sữa',bg:'#fdf3e4',panel:'#fffaf2',line:'#ead7bd',ink:'#3a2317',soft:'#7a5a48',acc:'#ef6f8e',accd:'#c24c69',t:null},
  {id:'nau',n:'Nâu cà phê',bg:'#ead9c4',panel:'#f7ecdf',line:'#cfae8a',ink:'#3a2317',soft:'#6b4a36',acc:'#9a6340',accd:'#6b3f22',t:['#8a5a3b',.32]},
  {id:'socola',n:'Sô cô la',bg:'#d9c2ab',panel:'#efe2d4',line:'#b8916e',ink:'#2e1c12',soft:'#5e3f2b',acc:'#6b3f22',accd:'#4a2a14',t:['#5b3a26',.4]},
  {id:'dau',n:'Hồng dâu',bg:'#fde8ee',panel:'#fff5f8',line:'#f3c7d4',ink:'#3a2330',soft:'#7a4a5c',acc:'#e85d8a',accd:'#b8406a',t:['#f48fb1',.2]},
  {id:'dao',n:'Cam đào',bg:'#fdebdc',panel:'#fff6ef',line:'#f5cdb0',ink:'#3a2317',soft:'#7a5040',acc:'#f08a5d',accd:'#c0643c',t:['#ffab91',.22]},
  {id:'thai',n:'Trà Thái',bg:'#fde6cf',panel:'#fff4e8',line:'#f3c595',ink:'#3a2317',soft:'#7a5030',acc:'#e8792f',accd:'#b55718',t:['#ffa726',.22]},
  {id:'chanh',n:'Vàng chanh',bg:'#fbf6d6',panel:'#fffdf0',line:'#ebe097',ink:'#33301a',soft:'#6e6632',acc:'#c9a820',accd:'#977d0e',t:['#fff176',.25]},
  {id:'matcha',n:'Xanh matcha',bg:'#eef4e2',panel:'#f8fbf1',line:'#cfe0b3',ink:'#25331a',soft:'#566b43',acc:'#6aa84f',accd:'#4b7f36',t:['#9ccc65',.22]},
  {id:'bacha',n:'Bạc hà',bg:'#e3f5f0',panel:'#f4fcf9',line:'#b9e2d6',ink:'#1d3530',soft:'#4b6f66',acc:'#3fae90',accd:'#2b8069',t:['#80cbc4',.24]},
  {id:'bien',n:'Xanh biển',bg:'#e6f2fa',panel:'#f5fbff',line:'#bfdcef',ink:'#1c2d3a',soft:'#4a6378',acc:'#3d8fd1',accd:'#2a6aa0',t:['#64b5f6',.22]},
  {id:'khoaimon',n:'Tím khoai môn',bg:'#efe7f7',panel:'#faf6fd',line:'#d7c6ea',ink:'#2d2238',soft:'#62507a',acc:'#9b6bd1',accd:'#7147a3',t:['#b39ddb',.26]},
  {id:'dem',n:'Đêm dịu',bg:'#2b2433',panel:'#3a3144',line:'#574a63',ink:'#f5ecf7',soft:'#cbbad3',acc:'#f08fb0',accd:'#b85f80',t:['#3b2d5c',.19]}
];
let THEME='kem';try{THEME=localStorage.getItem('tsTheme')||'kem'}catch(e){}
function applyTheme(id){const t=THEMES.find(x=>x.id===id)||THEMES[0];THEME=t.id;try{localStorage.setItem('tsTheme',t.id)}catch(e){}
  const r=document.documentElement.style;r.setProperty('--bg',t.bg);r.setProperty('--panel',t.panel);r.setProperty('--line',t.line);r.setProperty('--ink',t.ink);r.setProperty('--soft',t.soft);r.setProperty('--pink',t.acc);r.setProperty('--pink-d',t.accd);
  r.setProperty('--tint',t.t?t.t[0]:'transparent');r.setProperty('--tintm','#ffffff');r.setProperty('--tinta',t.t?t.t[1]:0);document.body.classList.toggle('dark',t.id==='dem');
  let m=document.querySelector('meta[name=theme-color]');if(!m){m=document.createElement('meta');m.name='theme-color';document.head.appendChild(m)}m.content=t.bg}
function themeDlg(){$('card').onchange=null;
  $('card').innerHTML=`<h2>Màu giao diện</h2><p>Chọn màu bạn thích, đổi lúc nào cũng được.</p><div class="thg">${THEMES.map(t=>`<button class="thb${t.id===THEME?' on':''}" data-th="${t.id}"><i style="background:linear-gradient(135deg,${t.bg} 0 50%,${t.acc} 50%)"></i>${t.n}</button>`).join('')}</div><button class="big" id="thClose" style="margin-top:12px">Xong</button>`;
  $('modal').hidden=false;$('card').querySelectorAll('[data-th]').forEach(b=>b.onclick=()=>{applyTheme(b.dataset.th);themeDlg()});$('thClose').onclick=showSettings}
/* ---------- ÂM THANH (tự tạo bằng Web Audio, không cần file) ---------- */
const AU={ctx:null,on:true,mus:true};
try{const a=JSON.parse(localStorage.getItem('tsAudio'));if(a){AU.on=a.on!==false;AU.mus=a.mus!==false;AU.season=a.season||null}}catch(e){}
function saveAu(){try{localStorage.setItem('tsAudio',JSON.stringify({on:AU.on,mus:AU.mus,season:AU.season||null}))}catch(e){}}
function au(){
  if(!AU.ctx){const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;const c=AU.ctx=new C();
    AU.master=c.createGain();AU.master.gain.value=.9;AU.master.connect(c.destination);
    AU.fx=c.createGain();AU.fx.gain.value=1;AU.fx.connect(AU.master);
    AU.mg=c.createGain();AU.mg.gain.value=0;AU.mg.connect(AU.master);
    const len=c.sampleRate;AU.nb=c.createBuffer(1,len,c.sampleRate);const d=AU.nb.getChannelData(0);for(let i=0;i<len;i++)d[i]=Math.random()*2-1}
  if(AU.ctx.state==='suspended'&&!document.hidden)AU.ctx.resume();return AU.ctx}
function tn(f,at,dur,type,vol,to,dest){const c=AU.ctx;if(!c)return;const t=c.currentTime+(at||0),o=c.createOscillator(),g=c.createGain();
  o.type=type||'sine';o.frequency.setValueAtTime(f,t);if(to)o.frequency.exponentialRampToValueAtTime(to,t+dur);
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol||.15,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  o.connect(g);g.connect(dest||AU.fx);o.start(t);o.stop(t+dur+.02)}
function nz(at,dur,freq,q,vol,type){const c=AU.ctx;if(!c)return;const t=c.currentTime+(at||0),s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();
  s.buffer=AU.nb;f.type=type||'bandpass';f.frequency.value=freq;f.Q.value=q||1;g.gain.setValueAtTime(vol||.1,t);g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  s.connect(f);f.connect(g);g.connect(AU.fx);s.start(t,Math.random()*.5);s.stop(t+dur+.02)}
const SFX={
  tap(){tn(740,0,.07,'triangle',.08)},
  cup(){tn(520,0,.06,'triangle',.12);tn(780,.05,.08,'triangle',.08)},
  plop(){tn(420,0,.16,'sine',.22,160)},
  pump(){nz(0,.09,1400,2,.12);tn(300,.02,.08,'sine',.08,200)},
  ice(){tn(2100,0,.12,'sine',.08);tn(2700,.06,.1,'sine',.06);tn(1800,.11,.12,'sine',.05)},
  trash(){nz(0,.25,500,1,.18,'lowpass');tn(180,0,.2,'sine',.12,90)},
  seal(){nz(0,.12,300,1,.25,'lowpass');tn(120,0,.1,'square',.06);tn(1175,.28,.25,'sine',.1)},
  coin(){tn(988,0,.08,'square',.05);tn(1319,.07,.3,'square',.05)},
  star(){[1047,1319,1568,2093].forEach((f,i)=>tn(f,i*.08,.35,'triangle',.08))},
  bad(){tn(220,0,.3,'sawtooth',.05,150)},
  bell(){tn(1397,0,.5,'sine',.07);tn(2093,.01,.35,'sine',.03)},
  end(){[784,988,1175,1568].forEach((f,i)=>tn(f,i*.14,.5,'triangle',.08))}};
/* âm thanh thu thật (file trong thư mục snd) */
const SMP={m_thu:'snd/m_thu.mp3',m_dong:'snd/m_dong.mp3',m_xuan:'snd/m_xuan.mp3',m_he:'snd/m_he.mp3',rain:'snd/rain.mp3',pour:'snd/pour.wav',bell:'snd/bell.mp3',cash:'snd/cash.mp3',lvup:'snd/levelup.mp3'},SBUF={};let smpLoading=false;
/* tải sẵn file nhạc ngay khi mở game, chạm lần đầu là giải mã và phát liền */
const SRAW={};Object.entries(SMP).forEach(([k,u])=>{SRAW[k]=fetch(u).then(r=>{if(!r.ok)throw 0;return r.arrayBuffer()}).catch(()=>null)});
function loadSmp(){if(smpLoading||!AU.ctx)return;smpLoading=true;const first='m_'+seasonKey(),ks=Object.keys(SMP).sort((a,b)=>(b===first||b==='rain')-(a===first||a==='rain'));
  ks.forEach(k=>{const u=SMP[k];(SRAW[k]||Promise.resolve(null)).then(b=>b||fetch(u).then(r=>r.arrayBuffer())).then(b=>new Promise((ok,no)=>{const p=AU.ctx.decodeAudioData(b,ok,no);if(p&&p.then)p.then(ok,no)})).then(buf=>{SBUF[k]=buf;if(k===('m_'+seasonKey())||k==='rain')musSync()}).catch(()=>{SFAIL[k]=1})})}
const SFAIL={};
const SBUFcb=[];
function playSmp(k,vol){const b=SBUF[k];if(!b||!AU.ctx)return false;const s=AU.ctx.createBufferSource(),g=AU.ctx.createGain();s.buffer=b;g.gain.value=vol||.8;s.connect(g);g.connect(AU.fx);s.start();return true}
const SMAP={bell:['bell',.55],coin:['cash',.6],lvup:['lvup',.55]};
function sfx(n){if(!AU.on||!au())return;loadSmp();try{const m=SMAP[n];if(m&&playSmp(m[0],m[1]))return;if(SFX[n])SFX[n]()}catch(e){}}
let pourSrc=null;
function pourSnd(on){if(!AU.on||!au())return;const c=AU.ctx;loadSmp();
  if(on&&!pourSrc&&SBUF.pour){const s=c.createBufferSource(),g=c.createGain();s.buffer=SBUF.pour;s.loop=true;g.gain.setValueAtTime(0,c.currentTime);g.gain.linearRampToValueAtTime(.7,c.currentTime+.06);s.connect(g);g.connect(AU.fx);s.start(0,Math.random()*2.5);pourSrc={s,g}}
  if(on&&!pourSrc){const s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();s.buffer=AU.nb;s.loop=true;f.type='bandpass';f.frequency.value=650;f.Q.value=.8;
    g.gain.value=0;g.gain.linearRampToValueAtTime(.09,c.currentTime+.08);s.connect(f);f.connect(g);g.connect(AU.fx);s.start();pourSrc={s,g}}
  if(!on&&pourSrc){const p=pourSrc;pourSrc=null;p.g.gain.cancelScheduledValues(c.currentTime);p.g.gain.setValueAtTime(p.g.gain.value,c.currentTime);p.g.gain.linearRampToValueAtTime(0,c.currentTime+.08);p.s.stop(c.currentTime+.1)}}
/* nhạc nền: vòng hợp âm nhẹ nhàng kiểu lo-fi */
const MUS={timer:null,next:0,step:0};
const mf=n=>440*Math.pow(2,(n-69)/12);
const SEASONS={
  thu:{n:'Mùa thu',g:1.5,bpm:72,ch:[[57,60,64,67],[50,53,57,60],[55,59,62,65],[48,52,55,59]],bass:[45,38,43,36],pad:'triangle',lead:'sine',ld:2.2,lv:.06,
    mel:[[76,null,74,72,null,69,null,null],[72,null,69,null,65,null,67,null],[71,null,67,null,74,72,null,71],[67,null,null,null,64,null,null,null],
         [69,72,76,null,74,null,72,null],[69,null,65,67,69,null,null,null],[67,null,71,74,null,72,71,null],[72,null,null,67,null,64,null,null]],
    x(c,t,i,e){if(i===0)nzM(c,t,e*8,3000,.004,'highpass');if(i===2||i===6)nzM(c,t,.04,2500,.01)}},
  dong:{n:'Mùa đông',g:1.35,bpm:66,ch:[[48,52,55,59],[45,48,52,55],[41,45,48,52],[43,47,50,53]],bass:[36,33,29,31],pad:'sine',lead:'sine',ld:1.4,lv:.05,oct:12,
    mel:[[79,null,76,null,72,null,76,null],[76,null,72,null,69,null,null,null],[77,null,76,null,72,null,69,null],[74,null,null,71,null,67,null,null],
         [72,null,76,null,79,null,84,null],[81,null,79,null,76,null,null,null],[77,76,74,null,72,null,69,null],[71,null,74,null,79,null,null,null]],
    x(c,t,i,e){if(i%2===1){tnM(c,t,2637,.08,'sine',.012);tnM(c,t+.03,3136,.06,'sine',.008)}}},
  xuan:{n:'Mùa xuân',g:.85,bpm:84,ch:[[53,57,60,64],[55,59,62,65],[52,55,59,62],[57,60,64,67]],bass:[41,43,40,45],pad:'triangle',lead:'triangle',ld:1.1,lv:.05,
    mel:[[72,74,76,null,79,null,76,null],[74,null,71,null,67,null,71,74],[76,null,74,72,71,null,67,null],[69,null,72,null,76,null,null,null],
         [77,null,76,74,72,null,74,null],[79,null,77,null,74,null,71,null],[71,72,74,null,76,null,79,null],[81,null,79,null,76,null,null,null]],
    x(c,t,i,e,st){if(i===7&&st%64===31){const o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.setValueAtTime(3000,t);o.frequency.exponentialRampToValueAtTime(4200,t+.07);o.frequency.exponentialRampToValueAtTime(3300,t+.14);g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(.015,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+.16);o.connect(g);g.connect(AU.mg);o.start(t);o.stop(t+.2);
      tnM(c,t+.22,3600,.08,'sine',.012)}if(i%2===1)nzM(c,t,.04,7000,.01,'highpass')}},
  he:{n:'Mùa hè',g:.7,bpm:96,ch:[[50,54,57,61],[47,50,54,57],[43,47,50,54],[45,49,52,55]],bass:[38,35,31,33],pad:'triangle',lead:'sine',ld:.35,lv:.08,
    mel:[[74,null,78,76,74,null,71,null],[71,74,null,71,69,null,66,null],[67,null,71,74,null,76,74,null],[73,null,76,null,81,null,null,null],
         [78,76,74,null,76,null,78,null],[74,null,71,null,69,71,74,null],[79,null,78,76,74,null,71,null],[76,null,73,null,69,null,null,null]],
    x(c,t,i,e){nzM(c,t,.05,6000,i%2?.016:.008,'highpass')}}
};
function seasonNow(){const m=new Date().getMonth()+1;return m>=9&&m<=11?'thu':m===12||m<=2?'dong':m<=5?'xuan':'he'}
const seasonKey=()=>AU.season&&SEASONS[AU.season]?AU.season:seasonNow();
function tnM(c,tt,f,dur,type,vol){const o=c.createOscillator(),g=c.createGain();o.type=type;o.frequency.value=f;g.gain.setValueAtTime(.0001,tt);g.gain.linearRampToValueAtTime(vol,tt+.01);g.gain.exponentialRampToValueAtTime(.0001,tt+dur);o.connect(g);g.connect(AU.mg);o.start(tt);o.stop(tt+dur+.02)}
function nzM(c,tt,dur,freq,vol,type){const s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();s.buffer=AU.nb;f.type=type||'bandpass';f.frequency.value=freq;g.gain.setValueAtTime(vol,tt);g.gain.exponentialRampToValueAtTime(.0001,tt+dur);s.connect(f);f.connect(g);g.connect(AU.mg);s.start(tt,Math.random()*.5);s.stop(tt+dur+.02)}
function musStep(){const c=AU.ctx;if(!c)return;const S_=SEASONS[seasonKey()],e=30/S_.bpm;
  while(MUS.next<c.currentTime+.4){const st=MUS.step,bar=Math.floor(st/8)%4,ph=Math.floor(st/32)%2,i=st%8,tt=MUS.next;
    if(i===0)S_.ch[bar].forEach(n=>{const o=c.createOscillator(),g=c.createGain();o.type=S_.pad;o.frequency.value=mf(n);o.detune.value=(Math.random()-.5)*8;g.gain.setValueAtTime(0,tt);g.gain.linearRampToValueAtTime(.02,tt+.5);g.gain.linearRampToValueAtTime(.0001,tt+e*8);o.connect(g);g.connect(AU.mg);o.start(tt);o.stop(tt+e*8+.05)});
    if(i===0||i===4)tnM(c,tt,mf(S_.bass[bar]),e*3.5,'sine',.09);
    const m=S_.mel[ph*4+bar][i];if(m){tnM(c,tt,mf(m+(S_.oct||0)),e*S_.ld*2,S_.lead,S_.lv);if(S_.oct)tnM(c,tt,mf(m),e*S_.ld,'sine',S_.lv*.4)}
    S_.x(c,tt,i,e,st);
    MUS.next+=e;MUS.step++}}
let loopSrc=null;
function musLoop(k){const c=AU.ctx;if(!c)return;if(loopSrc&&loopSrc.k===k)return;
  if(loopSrc){const r=loopSrc;loopSrc=null;r.g.gain.cancelScheduledValues(c.currentTime);r.g.gain.setValueAtTime(r.g.gain.value,c.currentTime);r.g.gain.linearRampToValueAtTime(0,c.currentTime+1.2);r.s.stop(c.currentTime+1.3)}
  if(k&&SBUF[k]){const s=c.createBufferSource(),g=c.createGain();s.buffer=SBUF[k];s.loop=true;
    g.gain.setValueAtTime(0,c.currentTime);g.gain.linearRampToValueAtTime(.6,c.currentTime+1.5);s.connect(g);g.connect(AU.mg);s.start();loopSrc={s,g,k}}}
function musSync(){const c=AU.ctx;if(!c)return;const want=AU.mus&&!document.hidden;
  const key=evIs('rain')?'rain':'m_'+seasonKey();loadSmp();
  if(want&&!SBUF[key]&&!SFAIL[key]){if(!MUS.wait)MUS.wait=setTimeout(()=>{MUS.wait=null;musSync()},250);return}
  if(want&&SBUF[key]){musLoop(key);AU.mg.gain.cancelScheduledValues(c.currentTime);AU.mg.gain.linearRampToValueAtTime(R.mode==='sell'?.9:.6,c.currentTime+.6);if(MUS.timer){clearInterval(MUS.timer);MUS.timer=null}return}
  if(!want)musLoop(null);
  AU.mg.gain.cancelScheduledValues(c.currentTime);AU.mg.gain.linearRampToValueAtTime(want?(R.mode==='sell'?.9:.6)*(SEASONS[seasonKey()].g||1):0,c.currentTime+.6);
  if(want&&!MUS.timer){MUS.next=c.currentTime+.1;MUS.timer=setInterval(musStep,120)}
  if(!want&&MUS.timer){setTimeout(()=>{if(!AU.mus||document.hidden){clearInterval(MUS.timer);MUS.timer=null}},700)}}
try{if(navigator.audioSession)navigator.audioSession.type='ambient'}catch(e){}/* ambient: phát chung với nhạc app khác (Spotify, YouTube)… */
function auUnlock(){const c=au();if(!c)return;loadSmp();if(c.state!=='running'){const p=c.resume();if(p&&p.then)p.then(musSync)}musSync()}
['touchstart','touchend','pointerdown','click','keydown'].forEach(ev=>addEventListener(ev,auUnlock,{capture:true,passive:true}));
document.addEventListener('visibilitychange',()=>{if(!AU.ctx)return;if(document.hidden){pourSnd(false);AU.ctx.suspend()}else{AU.ctx.resume();musSync()}});
document.addEventListener('click',e=>{if(e.target.closest('.big,.sbtn,.tab,.stab,.setb,.chip,.rpbtn,.sp4-go'))sfx('tap')},true);

/* ---------- MÀN HÌNH CHÀO + HƯỚNG DẪN ---------- */
function closeSplash(){const sp=$('splash');sp.hidden=true;sp.innerHTML='';if(R.mode==='prep')setTimeout(prepChecks,300)}
const SP_MSG=['Đang nấu trân châu…','Đang ủ trà…','Đang lau quầy…','Đang xếp ly…','Sắp mở cửa…'];
function showSplash(had,after){
  const sp=$('splash');
  const stk=(n,x,y,w,d,dl)=>`<img class="sp4-f" src="${IMG}stk_${n}.png" alt="" style="left:${x}px;top:${y}px;width:${w}px;animation-duration:${d}s;animation-delay:-${dl}s">`;
  sp.innerHTML=`<div class="sp4" id="sp4"><div class="sp4-st" id="spStage">
    <img class="sp4-cloud" src="${IMG}stk_cloud.png" alt="">
    <img class="sp4-lan" src="${IMG}lanL.png" alt="" style="left:146px;top:386px">
    <img class="sp4-lan b" src="${IMG}lanR.png" alt="" style="left:549px;top:386px">
    ${stk('pearl',70,120,74,4.2,0)}${stk('star',300,40,62,3.6,1)}${stk('cup',600,60,96,5,2)}${stk('heart',684,300,56,3.8,.5)}
    ${stk('berry',80,1228,64,4.6,1.5)}${stk('leaf',626,1228,66,5.2,3)}
    <img class="sp4-head" src="${IMG}cathead.png" alt="">
    <span class="sp4-z" style="animation-delay:0s">z</span><span class="sp4-z" style="animation-delay:1s">z</span><span class="sp4-z" style="animation-delay:2s">z</span>
    <h1 class="sp4-t">Tiệm Trà Nhỏ</h1>
    <p class="sp4-tag">Pha trà, đón khách, mở tiệm nhỏ của riêng bạn</p>
    ${had?`<p class="sp4-me">${esc(shopName())} · Ngày ${S.day} · ${fmt(S.money)}</p>`:''}
    <div class="sp4-foot"><div class="sp4-msg" id="spMsg">${SP_MSG[0]}</div>
      <div class="sp4-bar" id="spBarW"><i id="spBar"></i><span id="spPct">0%</span></div>
      <button class="sp4-go" id="spGo" hidden>${had?'Chơi tiếp':'Bắt đầu'}</button>
      ${had?'<button class="sp4-help" id="spHelp" hidden>Hướng dẫn</button>':'<button class="sp4-help" id="spHelp" hidden>Có mã sao lưu? Khôi phục</button>'}</div>
    <div class="sp4-ver">${GAME_VERSION}</div></div></div>`;
  sp.hidden=false;spFit();
  const fitTag=()=>{const t=document.querySelector('.sp4-tag');if(!t)return;let f=26;t.style.fontSize=f+'px';while(t.scrollWidth>t.clientWidth+1&&f>16){f--;t.style.fontSize=f+'px'}};fitTag();if(document.fonts)document.fonts.ready.then(fitTag);
  $('spGo').onclick=()=>{if(had){closeSplash();after&&after()}else showTour(true)};
  $('spHelp').onclick=had?()=>showTour(false,false,after):()=>restoreDlg();
  const files=['splash2.jpg','cathead.png','bg2.jpg','bg.jpg','faces.webp','ship.webp','star.webp','cup.png','lid.png','kho.jpg','ic_box.png','ic_tools.png','ic_price.png','ic_star.png','ic_chart.png','lanL.png','lanR.png'];let done=0,shown=0;const t0=performance.now();
  files.forEach(f=>{const im=new Image();im.onload=im.onerror=()=>done++;im.src=IMG+f});
  const step=()=>{if(!$('spBar'))return;const want=Math.min(done/files.length,(performance.now()-t0)/1600);shown+=(want-shown)*.16;if(want>=1&&shown>.985)shown=1;
    const pc_=Math.round(shown*100);$('spBar').style.width=pc_+'%';$('spPct').textContent=pc_+'%';$('spMsg').textContent=SP_MSG[Math.min(SP_MSG.length-1,Math.floor(shown*SP_MSG.length))];
    if(shown>=1){$('spBarW').hidden=true;$('spMsg').hidden=true;$('spGo').hidden=false;if($('spHelp'))$('spHelp').hidden=false;$('spGo').focus();return}
    requestAnimationFrame(step)};
  requestAnimationFrame(step);
}
function spFit(){const st=$('spStage');if(!st)return;const W=vpW(),H=vpH(),s=H/1376;st.style.transform=`scale(${s})`;st.style.left=((W-768*s)/2)+'px'}
addEventListener('resize',spFit);
function tourSlides(){
  const row=(k,q)=>`<div class="trw">${itemIcon(k)}<b>${ITEMS[k].n}</b>${lifeTag(k)}<span class="chip2">+${q}</span></div>`;
  return [
    ['Nấu hàng buổi sáng','Vào Kho, bấm + chọn số phần, bấm Nấu & nhập rồi Mở cửa. Mỗi món có hạn dùng, hết hạn là phải đổ bỏ',`<div class="till">${row('tra',15)}${row('tcden',10)}${row('thach',10)}<div class="tnote">${ico('trash')} Hết hạn = mất tiền</div></div>`],
    ['Đọc đơn của khách','Khách nói món trong bóng thoại, ly nhỏ bên cạnh là hình món khách muốn. Vòng tròn quanh mặt khách là thời gian chờ, hết vòng là khách bỏ về',`<div class="till"><div class="say tsay"><i class="tfc" style="${faceBg(0,0,40,39)}"></i><span>1 ly <b>trà sữa</b> size <b>L</b>, trân châu đen nha!</span></div>
      <div class="tcup">${cupHTML({base:'tra',tops:['tcden'],size:'L',ice:null},false)}<span class="tarrow"><svg width="30" height="20" viewBox="0 0 30 20"><path d="M2 10h22M17 3l8 7-8 7" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg><i class="tfc big" style="${faceBg(0,1,60,59)}"></i></span></div></div>`],
    ['Bước 1: lấy ly','Chạm chồng ly M hoặc L đúng size khách gọi. Ly sẽ nằm trên thớt gỗ',`<div class="till">${cropBg(8,355,146,236,150)}</div>`],
    ['Bước 2: rót trà','Nhấn giữ hũ trà khách gọi. Nước dâng dần, thả tay khi tới vạch xanh đứt nét trên ly. Giữ quá lâu là tràn ly',`<div class="till">${cropBg(158,352,470,176,290)}</div>`],
    ['Bước 3: topping và hương','Chạm khay topping để múc 1 phần vào ly. Khách gọi vị trái cây (dâu, xoài…) thì chạm chai siro ở kệ dưới',`<div class="till">${cropBg(280,608,482,334,290)}</div>`],
    ['Đường và đá','Từ ngày '+CFG.levels.l2+' khách chọn mức đường và đá. Bấm bình nước đường và xô đá đúng số lần, rồi mới dán nắp. Bấm dư thì phải đổ ly làm lại',`<div class="till"><table class="gtab"><tr><th>Khách gọi</th><th>Bấm bình nước đường</th></tr>${SUGAR.map((v,i)=>`<tr><td>${v}% đường</td><td>${i+1} lần</td></tr>`).join('')}</table>
      <table class="gtab"><tr><th>Khách gọi</th><th>Xúc đá</th></tr><tr><td>Không đá</td><td>Không xúc</td></tr><tr><td>Ít đá</td><td>1 lần</td></tr><tr><td>Đá bình thường</td><td>2 lần</td></tr></table>
      <div class="tnote">Thứ tự không quan trọng: trà, hương, topping, đường, đá xong là dán nắp</div></div>`],
    ['Bước 4: dán nắp và giao','Chạm máy dán nắp, ly tự đưa cho khách. Lỡ làm sai thì chạm xô inox để đổ ly, làm lại',`<div class="till"><div style="display:flex;gap:14px;justify-content:center;align-items:flex-end">${cropBg(632,322,134,246,110)}${cropBg(182,574,98,112,80)}</div></div>`],
    ['Khách chấm sao','Càng nhiều sao càng đông khách. Dưới 4 sao là quán vắng hẳn',`<div class="till"><div class="trev"><i class="tfc rf" style="${faceBg(3,1,44,43)}"></i><div><div class="stars" style="font-size:1.5rem">★★★★★</div><div class="say">Làm nhanh, đúng vị</div></div></div>
      <div class="trev"><i class="tfc rf" style="${faceBg(5,2,44,43)}"></i><div><div class="stars" style="font-size:1.5rem">★★☆☆☆</div><div class="say">Chờ lâu quá</div></div></div></div>`],
    ['Lời thì mở món mới','Trà, hương vị, topping, trang bị, đơn online',`<div class="till"><div class="pg4">
      <div class="lock unl">${baseCup('thai')}<b>Trà</b></div><div class="lock unl">${flavIcon('f_dau',24)}<b>Hương</b></div>
      <div class="lock unl">${topIcon('fube',1)}<b>Foam</b></div><div class="lock unl">${topIcon('pmvien',1)}<b>Phô mai</b></div></div>
      <div class="trw"><span class="icon">${ico('phone')}</span><b>Đơn online</b><span class="chip2">Ngày ${CFG.online.fromDay}</span></div></div>`]
  ];
}
function showTour(isNew,fromGame,after){
  const sp=$('splash'),sl=tourSlides();
  if(isNew)sl.push(['Đặt tên quán','',`<div class="till"><div style="text-align:center"><img class="ico" src="img/ic_cupfull.png" alt="" style="width:64px;height:64px"></div><input id="nameIn" class="pinbox nm" maxlength="30" placeholder="Ví dụ: Trà Sữa Nhà Mèo" aria-label="Tên quán"></div>`,1]);
  const n=sl.length;
  sp.innerHTML=`<div class="awning"></div><div class="tour">
    <button class="sp-link skip" id="tSkip">${isNew?'Bỏ qua ›':'Đóng ✕'}</button>
    <div class="tourw" id="tw">${sl.map(([h,p,ill,top])=>top?`<div class="tpage"><h2>${h}</h2>${p?`<p>${p}</p>`:''}${ill}</div>`:`<div class="tpage">${ill}<h2>${h}</h2>${p?`<p>${p}</p>`:''}</div>`).join('')}</div>
    <div class="dots" id="tDots">${sl.map((x,i)=>`<i class="${i?'':'on'}"></i>`).join('')}</div>
    <button class="big" id="tNext">Tiếp ➜</button></div>`;
  sp.hidden=false;
  const tw=$('tw'),dots=[...$('tDots').children];let cur=0;
  const finish=()=>{if(isNew){setName(($('nameIn')||{}).value);closeSplash();renderPrep()}else{closeSplash();if(!fromGame&&after)after()}};
  const upd=()=>{cur=Math.round(tw.scrollLeft/tw.clientWidth);dots.forEach((d,i)=>d.classList.toggle('on',i===cur));
    $('tNext').innerHTML=cur===n-1?(isNew?'Khai trương':'Vào quán'):'Tiếp ➜';
    if(isNew&&cur===n-1)setTimeout(()=>{const i=$('nameIn');if(i&&document.activeElement!==i)i.focus({preventScroll:true})},250)};
  tw.onscroll=()=>{clearTimeout(tw._t);tw._t=setTimeout(upd,60)};
  const go=i=>tw.scrollTo({left:i*tw.clientWidth,behavior:'smooth'});
  $('tNext').onclick=()=>{if(cur>=n-1)finish();else go(cur+1)};
  $('tSkip').onclick=()=>{if(isNew&&cur<n-1)go(n-1);else finish()};
  if(isNew)tw.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='nameIn')finish()});
}

/* ---------- SAO LƯU / KHÔI PHỤC BẰNG MÃ ---------- */
const BAK_SALT='ttn-bak-7f3a';
function bakHash(t){let h=0x811c9dc5;const x=BAK_SALT+t;for(let i=0;i<x.length;i++){h^=x.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0}return h.toString(36)}
const b64e=u8=>{let s='';for(let i=0;i<u8.length;i+=0x8000)s+=String.fromCharCode.apply(null,u8.subarray(i,i+0x8000));return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')};
const b64d=t=>{t=t.replace(/-/g,'+').replace(/_/g,'/');while(t.length%4)t+='=';const s=atob(t),u=new Uint8Array(s.length);for(let i=0;i<s.length;i++)u[i]=s.charCodeAt(i);return u};
async function zipBytes(u8,dir){const C=dir?window.CompressionStream:window.DecompressionStream;if(!C)return null;const st=new Blob([u8]).stream().pipeThrough(new C('gzip'));return new Uint8Array(await new Response(st).arrayBuffer())}
async function makeBackup(){const json=JSON.stringify(S),raw=new TextEncoder().encode(json);let z=null;try{z=await zipBytes(raw,1)}catch(e){}
  const body=(z?'z':'p')+b64e(z||raw);return 'TTN1.'+body+'.'+bakHash(body)}
async function readBackup(code){code=String(code||'').replace(/\s+/g,'');const m=code.match(/^TTN1\.([zp][A-Za-z0-9_-]+)\.([0-9a-z]+)$/);if(!m)throw 'Mã không đúng định dạng';
  if(bakHash(m[1])!==m[2])throw 'Mã bị sai hoặc đã bị sửa';let u=b64d(m[1].slice(1));if(m[1][0]==='z'){u=await zipBytes(u,0);if(!u)throw 'Trình duyệt này quá cũ để đọc mã, thử Chrome hoặc Safari mới hơn'}
  const d=JSON.parse(new TextDecoder().decode(u));if(!d||!d.stock||!d.day)throw 'Mã không có dữ liệu game';return d}
/* mã sao lưu 8 số: kết nối máy chủ Hono riêng của bạn */
const CLOUD=window.CUSTOM_CLOUD_API||'http://localhost:8787';
async function cloudFetch(path,opt){const ac=new AbortController(),t=setTimeout(()=>ac.abort(),15000);
  try{const r=await fetch(CLOUD+path,{...opt,signal:ac.signal});const j=await r.json().catch(()=>({}));if(!r.ok)throw j.error||'Máy chủ báo lỗi';return j}
  catch(e){throw typeof e==='string'?e:'Không kết nối được máy chủ'}finally{clearTimeout(t)}}
async function cloudSave(long){S.cloud=S.cloud||{};const j=await cloudFetch('/save',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({key:S.cloud.key,code:S.cloud.code||undefined,data:long})});
  if(!/^\d{8}$/.test(j.code||''))throw 'Máy chủ trả mã sai';S.cloud.code=j.code;save();return j.code}
async function cloudLoad(code){const j=await cloudFetch('/load?code='+code,{method:'GET'});const d=await readBackup(j.data);d.cloud={key:(d.cloud||{}).key,code};return d}
const fmtCode=c=>c.slice(0,4)+' '+c.slice(4);
async function backupDlg(){$('card').onchange=null;S.bakDay=S.day;save();
  $('card').innerHTML=`<h2>Sao lưu tiến trình</h2><p>Đang tạo mã…</p>`;$('modal').hidden=false;
  S.cloud=S.cloud||{};if(!S.cloud.key){const a=new Uint8Array(12);crypto.getRandomValues(a);S.cloud.key=[...a].map(x=>x.toString(36).padStart(2,'0')).join('').slice(0,24)}save();
  let code;try{code=await makeBackup()}catch(e){$('card').innerHTML=`<h2>Không tạo được mã</h2><button class="big" id="bkClose">Đóng</button>`;$('bkClose').onclick=showSettings;return}
  $('card').innerHTML=`<h2>Sao lưu tiến trình</h2><p>Đang gửi lên máy chủ…</p>`;
  let c8=null,cErr='';try{c8=await cloudSave(code)}catch(e){cErr=e}
  $('card').innerHTML=`<h2>Mã sao lưu</h2>${c8?`<p>Ghi lại 8 số này. Bị mất tiến trình thì vào Cài đặt > Khôi phục từ mã rồi nhập 8 số (cần có mạng). Sao lưu lại lần sau vẫn giữ nguyên mã này.</p><div class="c8" id="c8">${fmtCode(c8)}</div><div class="sndrow"><button class="sbtn pri" id="c8Copy">Chép 8 số</button></div>`:`<p class="warnline"><b>Chưa tạo được mã 8 số: ${esc(cErr)}.</b> Dùng mã dài bên dưới, hoặc thử lại khi có mạng.</p>`}
    <p class="lvup">${esc(shopName())} · Ngày ${S.day} · ${fmt(S.money)}</p>
    ${c8?'<details class="c8more"><summary>Mã dài dự phòng (dùng được khi không có mạng)</summary>':''}<textarea id="bkCode" class="rpin" readonly style="min-height:90px;font-size:12px!important;word-break:break-all">${code}</textarea>
    <div class="sndrow"><button class="sbtn ghost" id="bkCopy">Chép mã</button><button class="sbtn ghost" id="bkFile">Lưu thành file</button></div>${c8?'</details>':''}
    <button class="big" id="bkClose" style="margin-top:12px">Xong</button>`;
  if($('c8Copy'))$('c8Copy').onclick=async()=>{let ok=false;try{await navigator.clipboard.writeText(c8);ok=true}catch(e){}toast(ok?'Đã chép '+fmtCode(c8):'Ghi lại 8 số: '+fmtCode(c8),4000,1)};
  $('bkCopy').onclick=async()=>{const t=$('bkCode');let ok=false;try{await navigator.clipboard.writeText(code);ok=true}catch(e){}if(!ok){t.focus();t.select();try{ok=document.execCommand('copy')}catch(e){}}t.blur();toast(ok?'Đã chép mã':'Giữ vào ô mã để chép')};
  {let inFrame=true;try{inFrame=window.self!==window.top}catch(e){}if(inFrame)$('bkFile').hidden=true}
  $('bkFile').onclick=async()=>{const name='tiemtranho-ngay-'+S.day+'.txt',f=new File([code],name,{type:'text/plain'});
    try{if(navigator.canShare&&navigator.canShare({files:[f]})){await navigator.share({files:[f],title:'Sao lưu Tiệm Trà Nhỏ'});return}}catch(e){if(e&&e.name==='AbortError')return}
    const a=document.createElement('a');a.href=URL.createObjectURL(f);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1000)};
  $('bkClose').onclick=showSettings}
function restoreDlg(msg){$('card').onchange=null;
  $('card').innerHTML=`<h2>Khôi phục từ mã</h2><p>Nhập mã 8 số (cần có mạng), hoặc dán mã dài, hoặc chọn file sao lưu.</p>${msg?`<p class="warnline"><b>${esc(msg)}</b></p>`:''}
    <textarea id="rsCode" class="rpin" placeholder="12345678 hoặc TTN1…" style="min-height:90px;font-size:12px!important;word-break:break-all"></textarea>
    <div class="sndrow"><label class="sbtn ghost" style="display:flex;align-items:center;justify-content:center;cursor:pointer">Chọn file<input type="file" id="rsFile" accept=".txt,text/plain" hidden></label></div>
    <div class="askbtns"><button class="big" id="rsGo">Khôi phục</button><button class="sbtn ghost" id="rsBack">Quay lại</button></div>`;
  $('modal').hidden=false;
  $('rsFile').onchange=e=>{const f=e.target.files[0];if(!f)return;f.text().then(t=>{$('rsCode').value=t.trim();toast('Đã đọc file')})};
  $('rsBack').onclick=()=>{if(!$('splash').hidden)$('modal').hidden=true;else showSettings()};
  $('rsGo').onclick=async()=>{const code=$('rsCode').value;if(isField(document.activeElement))document.activeElement.blur();let d;const c8=String(code||'').replace(/[\s.-]/g,'');try{if(/^\d{8}$/.test(c8)){$('rsGo').disabled=true;$('rsGo').textContent='Đang tải…';d=await cloudLoad(c8)}else d=await readBackup(code)}catch(e){restoreDlg(typeof e==='string'?e:'Mã không đọc được');return}
    ask(`<div class="pbig">${ico('reload')}</div><h2>Khôi phục tiến trình?</h2><p>Bản sao lưu: <b>${esc(d.shopName||'Tiệm Trà Nhỏ')}</b> · Ngày ${d.day} · ${fmt(d.money||0)}</p><p>Tiến trình hiện tại (ngày ${S.day}) sẽ bị thay thế.</p>`,
      [['Huỷ',()=>restoreDlg()],['Khôi phục',()=>{closeSplash();applyRestore(d)},1]])}}
function showSettings(){
  $('card').onchange=null;
  $('card').innerHTML=`<h2>${ico('set')} Cài đặt</h2><div class="setl">
    <button class="setb" id="sGuide"><span>${ico('book')}</span>Hướng dẫn</button>
    <button class="setb" id="sNews"><span>${ico('gift')}</span>Có gì mới<small>v${GAME_VERSION}</small></button>
    <button class="setb" id="sCoach"><span>${ico('book')}</span>Chỉ dẫn từng bước<small>${S.coach===true?'Luôn bật':S.coach===false?'Tắt':'Tự động'}</small></button>
    <button class="setb" id="sLen"><span>${ico('clock')}</span>Thời gian bán mỗi ngày<small>${S.dayLen||CFG.dayMin} phút${R.running?' · áp dụng từ ngày sau':''}</small></button>
    <button class="setb" id="sTheme"><span>${ico('pen')}</span>Màu giao diện<small>${(THEMES.find(x=>x.id===THEME)||THEMES[0]).n}</small></button>
    <button class="setb" id="sMus"><span>${ico('moon')}</span>Nhạc nền<small>${AU.mus?'Đang bật · bấm để tắt':'Đang tắt · bấm để bật'}</small></button>
    <button class="setb" id="sSea"><span>${ico('calendar')}</span>Nhạc theo mùa<small>${AU.season?SEASONS[AU.season].n:'Tự động · '+SEASONS[seasonNow()].n}</small></button>
    <button class="setb" id="sSnd"><span>${ico('pause')}</span>Âm thanh<small>${AU.on?'Đang bật · bấm để tắt':'Đang tắt · bấm để bật'}</small></button>
    <button class="setb" id="sBak"><span>${ico('box')}</span>Sao lưu tiến trình<small>${S.bakDay?'Lần cuối: ngày '+S.bakDay:'Chưa sao lưu'}</small></button>
    <button class="setb" id="sAuto"><span>${ico('calendar')}</span>Khôi phục bản tự lưu<small>Game tự lưu 3 cuối ngày gần nhất</small></button>
    <button class="setb" id="sRes"><span>${ico('reload')}</span>Khôi phục từ mã</button>
    <button class="setb warnb" id="sReset"><span>${ico('reload')}</span>Chơi lại từ đầu</button></div>
    <button class="big" id="sClose" style="margin-top:12px">Đóng</button>`;
  $('modal').hidden=false;
  $('sClose').onclick=()=>{$('modal').hidden=true};
  $('sGuide').onclick=()=>{$('modal').hidden=true;showTour(false,true)};
  $('sNews').onclick=()=>showNews(false);
  $('sTheme').onclick=themeDlg;
  $('sLen').onclick=()=>{const L=[4,5,6],c=S.dayLen||CFG.dayMin;S.dayLen=L[(L.indexOf(c)+1)%L.length];save();toast('Mỗi ngày bán '+S.dayLen+' phút, khách tới nhiều hơn theo thời gian');showSettings()};
  $('sMus').onclick=()=>{AU.mus=!AU.mus;saveAu();au();musSync();showSettings()};
  $('sSea').onclick=()=>{const L=[null,'thu','dong','xuan','he'];AU.season=L[(L.indexOf(AU.season||null)+1)%L.length];saveAu();MUS.step=0;au();musSync();showSettings()};
  $('sSnd').onclick=()=>{AU.on=!AU.on;saveAu();showSettings()};
  $('sCoach').onclick=()=>{S.coach=S.coach==null?true:S.coach===true?false:undefined;if(S.coach===undefined)delete S.coach;save();showSettings()};
  $('sBak').onclick=backupDlg;$('sAuto').onclick=autoRestoreDlg;$('sRes').onclick=()=>restoreDlg();
  $('sReset').onclick=()=>ask('<div class="pbig">'+ico('reload')+'</div><h2>Chơi lại từ đầu?</h2>',[['Huỷ',showSettings],['Xoá và chơi lại',()=>{const n=S.shopName;S=fresh();S.shopName=n;save();R.tab='kho';renderPrep()},1]]);
}

/* ---------- BOOT ---------- */
applyTheme(THEME);
$('pauseBtn').onclick=pauseGame;$('setBtn').onclick=showSettings;
try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist().catch(()=>{})}catch(e){}
/* tsHostOk check bypassed */const had=load();if(S.sell.L>CFG.sizeCap)S.sell.L=CFG.sizeCap;R.today={stars:[]};document.title=shopName();renderPrep();
let _lastVer=null;try{_lastVer=localStorage.getItem('tsVer');localStorage.setItem('tsVer',GAME_VERSION)}catch(e){}
showSplash(had,()=>{if(had&&_lastVer!==GAME_VERSION)showNews(true)});
