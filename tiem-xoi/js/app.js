(function () {
  "use strict";
  window.GAME_V = function () {
    try {
      return new URL(document.currentScript.src).searchParams.get("v") || "";
    } catch (_0x1fca00) {
      return "";
    }
  }();
  const _0x199e77 = {
    nep: {
      name: "Gạo nếp cái hoa vàng",
      unit: "cân",
      price: 30000,
      desc: "Nếp cái hoa vàng hạt tròn mẩy, đồ lên dẻo thơm — linh hồn của mọi mẻ xôi."
    },
    nepcam: {
      name: "Gạo nếp cẩm",
      unit: "cân",
      price: 45000,
      desc: "Nếp cẩm hạt tím than, đồ lên thơm bùi, ăn với dừa nạo là hết sẩy."
    },
    gac: {
      name: "Quả gấc",
      unit: "quả",
      price: 35000,
      desc: "Gấc chín đỏ au, trộn ruột vào nếp cho màu đỏ son — lấy may cả năm."
    },
    doxanh: {
      name: "Đỗ xanh bỏ vỏ",
      unit: "lạng",
      price: 25000,
      desc: "Đỗ xanh đãi sạch vỏ, ngâm mềm rồi đồ chung, bùi bùi béo béo."
    },
    lac: {
      name: "Lạc ta (đậu phộng)",
      unit: "lạng",
      price: 25000,
      desc: "Lạc ta hạt nhỏ, ngâm nở trộn nếp, đồ lên béo ngậy."
    },
    dua: {
      name: "Dừa nạo",
      unit: "quả",
      price: 15000,
      desc: "Cùi dừa nạo sợi trắng tinh, rắc lên mặt xôi cho béo và thơm."
    },
    ladua: {
      name: "Lá dứa",
      unit: "bó",
      price: 5000,
      desc: "Lá dứa giã lấy nước cốt, nhuộm xôi xanh mướt, thơm dịu mát."
    },
    lacam: {
      name: "Lá cẩm",
      unit: "bó",
      price: 8000,
      desc: "Lá cẩm đun lấy nước tím, xôi lên màu tím hoa cà đẹp mắt."
    },
    dauden: {
      name: "Đậu đen xanh lòng",
      unit: "lạng",
      price: 22000,
      desc: "Đậu đen xanh lòng ninh vừa chín tới, bùi ngậy, mát người."
    },
    mit: {
      name: "Mít dai",
      unit: "lạng",
      price: 35000,
      desc: "Múi mít dai vàng ươm thái sợi, trộn xôi thơm lừng cả gian bếp."
    },
    hanh: {
      name: "Hành khô",
      unit: "lạng",
      price: 12000,
      desc: "Hành tím thái mỏng phi mỡ vàng giòn — thiếu nó xôi xéo mất hồn."
    },
    ga: {
      name: "Thịt gà ta",
      unit: "cân",
      price: 70000,
      desc: "Gà ta thả vườn luộc chín, xé sợi, chắc thịt ngọt nước."
    },
    vung: {
      name: "Muối vừng",
      unit: "hũ",
      price: 10000,
      desc: "Vừng rang giã với muối hạt, chấm xôi đậm đà khó cưỡng."
    },
    bap: {
      name: "Ngô nếp",
      unit: "chục",
      price: 30000,
      desc: "Bắp ngô nếp non hạt trắng ngà, tẽ hạt đồ cùng nếp, ngọt thanh."
    },
    san: {
      name: "Sắn (khoai mì)",
      unit: "cân",
      price: 15000,
      desc: "Củ sắn bóc vỏ ngâm kỹ, thái khúc đồ cùng nếp — món quà quê dân dã."
    },
    com: {
      name: "Cốm làng Vòng",
      unit: "lạng",
      price: 40000,
      ch: 2,
      desc: "Cốm non xanh ngọc gói lá sen, thơm mùi lúa mới — thức quà mùa thu Hà Nội."
    },
    raukhuc: {
      name: "Rau khúc",
      unit: "bó",
      price: 20000,
      ch: 2,
      desc: "Rau khúc hái đầu xuân, giã nhuyễn trộn bột nếp làm vỏ xôi khúc."
    },
    thit: {
      name: "Thịt ba chỉ",
      unit: "cân",
      price: 130000,
      ch: 2,
      desc: "Ba chỉ nạc mỡ đan xen, kho tàu cánh gián hoặc làm nhân xôi khúc."
    },
    xoai: {
      name: "Xoài cát",
      unit: "cân",
      price: 60000,
      ch: 3,
      desc: "Xoài cát chín vàng, thơm ngọt lịm, ăn kèm xôi nước cốt dừa."
    },
    chuoi: {
      name: "Chuối sứ",
      unit: "nải",
      price: 25000,
      ch: 3,
      desc: "Chuối sứ chín cây, bọc nếp đem hấp, dẻo thơm béo ngậy."
    },
    saurieng: {
      name: "Sầu riêng",
      unit: "cân",
      price: 120000,
      ch: 3,
      desc: "Sầu riêng cơm vàng hạt lép, béo ngậy, người mê kẻ né."
    }
  };
  const _0x5e168c = 8;
  const _0x5b77a7 = 3;
  const _0xaa20ba = {
    doxanh: {
      name: "Xôi đỗ xanh",
      ing: ["nep", "doxanh", "vung"],
      suggest: 15000,
      learn: 0,
      desc: "Vàng ươm, bùi bùi, chấm muối vừng."
    },
    lac: {
      name: "Xôi lạc",
      ing: ["nep", "lac", "vung"],
      suggest: 15000,
      learn: 0,
      desc: "Béo ngậy hạt lạc, món quà sáng quen thuộc."
    },
    gac: {
      name: "Xôi gấc",
      ing: ["nep", "gac", "dua"],
      suggest: 20000,
      learn: 0,
      desc: "Đỏ son may mắn, rắc dừa nạo."
    },
    ladua: {
      name: "Xôi lá dứa",
      ing: ["nep", "ladua", "dua"],
      suggest: 15000,
      learn: 0,
      desc: "Xanh mướt, thơm mát mùi lá dứa."
    },
    xeo: {
      name: "Xôi xéo",
      ing: ["nep", "doxanh", "hanh"],
      suggest: 20000,
      learn: 60000,
      day: 2,
      desc: "Nếp nghệ, đỗ xanh nắm xéo, hành phi giòn — đặc sản Hà thành."
    },
    lacam: {
      name: "Xôi lá cẩm",
      ing: ["nep", "lacam", "dua"],
      suggest: 15000,
      learn: 50000,
      desc: "Tím hoa cà, dẻo thơm, lạ mắt."
    },
    dauden: {
      name: "Xôi đậu đen",
      ing: ["nep", "dauden", "vung"],
      suggest: 15000,
      learn: 50000,
      desc: "Bùi ngậy, mát lành cho ngày hè."
    },
    nepcam: {
      name: "Xôi nếp cẩm",
      ing: ["nepcam", "dua", "vung"],
      suggest: 20000,
      learn: 80000,
      desc: "Tím than óng ánh, dừa nạo trắng ngần."
    },
    mit: {
      name: "Xôi mít",
      ing: ["nep", "mit", "dua"],
      suggest: 20000,
      learn: 90000,
      desc: "Thơm lừng mít dai, ngọt dịu."
    },
    ga: {
      name: "Xôi gà",
      ing: ["nep", "ga", "hanh"],
      suggest: 30000,
      learn: 120000,
      desc: "Gà ta xé phay, hành phi, món sang nhất thúng."
    },
    san: {
      name: "Xôi sắn",
      ing: ["nep", "san", "dua"],
      suggest: 12000,
      learn: 40000,
      desc: "Sắn bùi quyện nếp dẻo, rắc dừa — món quà quê dân dã."
    },
    bap: {
      name: "Xôi bắp",
      ing: ["nep", "bap", "dua"],
      suggest: 15000,
      learn: 50000,
      desc: "Ngô nếp tẽ hạt đồ cùng nếp, rắc dừa nạo — ngọt thanh, bùi bùi."
    },
    vo: {
      name: "Xôi vò",
      ing: ["nep", "doxanh", "dua"],
      suggest: 18000,
      learn: 300000,
      ch: 2,
      desc: "Hạt tơi rời, quyện đỗ xanh, chan nước cốt dừa — món cỗ quen của miền Trung."
    },
    com: {
      name: "Xôi cốm",
      ing: ["nep", "com", "doxanh"],
      suggest: 22000,
      learn: 400000,
      ch: 2,
      desc: "Cốm xanh ngọc quyện đỗ vàng bùi bùi — thức quà mùa thu Hà Nội."
    },
    khuc: {
      name: "Xôi khúc",
      ing: ["nep", "raukhuc", "thit"],
      suggest: 28000,
      learn: 500000,
      ch: 2,
      desc: "Vỏ rau khúc, nhân đỗ thịt mỡ, lăn nếp trắng — \"xôi lúa đê…\" rao đêm phố cổ."
    },
    thit: {
      name: "Xôi thịt",
      ing: ["nep", "thit", "hanh"],
      suggest: 28000,
      learn: 600000,
      ch: 2,
      desc: "Thịt ba chỉ kho tàu cánh gián, nước kho sóng sánh chan lên xôi."
    },
    chuoi: {
      name: "Xôi chuối",
      ing: ["nep", "chuoi", "dua"],
      suggest: 18000,
      learn: 1500000,
      ch: 3,
      desc: "Nếp bọc chuối sứ hấp, ăn với nước cốt dừa béo ngậy."
    },
    xoai: {
      name: "Xôi xoài",
      ing: ["nep", "xoai", "dua"],
      suggest: 25000,
      learn: 2000000,
      ch: 3,
      desc: "Xôi nước cốt dừa ăn cùng xoài cát chín — món tráng miệng khách phố mê."
    },
    saurieng: {
      name: "Xôi sầu riêng",
      short: "sầu riêng",
      ing: ["nep", "saurieng", "dua"],
      suggest: 30000,
      learn: 3000000,
      ch: 3,
      desc: "Cơm sầu riêng béo ngậy trên xôi nước cốt dừa — thơm nức cả con phố."
    }
  };
  const _0x47e263 = ["doxanh", "lac", "gac", "ladua", "xeo", "lacam", "dauden", "nepcam", "mit", "ga"];
  const _0x4d7ac3 = {
    hocsinh: {
      get name() {
        if (typeof _0xbf5ed7 != "undefined" && _0xbf5ed7 && _0xbf5ed7.teo) {
          return "Cu Bin";
        } else {
          return "Cu Tèo";
        }
      },
      role: "học trò",
      patience: 11,
      tip: 0.05,
      flee: 0.03,
      w: 3,
      fav: ["lac", "doxanh", "gac", "bap"]
    },
    codao: {
      name: "Cô giáo Lan",
      role: "cô giáo",
      patience: 15,
      tip: 0.3,
      flee: 0,
      w: 2,
      fav: ["ladua", "lacam", "gac"]
    },
    ongcu: {
      name: "Cụ Đồ",
      role: "cụ đồ nho",
      patience: 19,
      tip: 0.45,
      flee: 0,
      w: 2,
      fav: ["xeo", "doxanh", "dauden", "khuc", "com"]
    },
    banoitro: {
      name: "Cô Hai",
      role: "bà nội trợ",
      patience: 14,
      tip: 0.1,
      flee: 0,
      w: 3,
      fav: ["gac", "nepcam", "mit", "vo", "com"]
    },
    xeom: {
      name: "Chú Ba",
      role: "xe ôm",
      patience: 9,
      tip: 0.2,
      flee: 0.02,
      w: 3,
      fav: ["ga", "xeo", "lac"]
    },
    congnhan: {
      name: "Anh Tư",
      role: "thợ hồ",
      patience: 11,
      tip: 0.15,
      flee: 0.03,
      w: 3,
      fav: ["ga", "xeo", "dauden", "san", "thit"]
    },
    traitrau: {
      name: "Thằng Tủn",
      role: "trẻ trâu",
      patience: 8,
      tip: 0,
      flee: 0.35,
      w: 1.4,
      fav: ["ga", "mit", "lac"]
    },
    bedao: {
      name: "Bé Na",
      role: "cô bé",
      patience: 13,
      tip: 0.05,
      flee: 0,
      w: 2,
      fav: ["gac", "ladua", "lacam", "chuoi", "xoai"]
    },
    congchuc: {
      name: "Anh cán bộ",
      role: "công chức",
      patience: 12,
      tip: 0.25,
      flee: 0,
      w: 2,
      fav: ["xeo", "ga", "nepcam"]
    }
  };
  const _0x4360f7 = {
    order: ["Bà Tám ơi, bán cho cháu một gói {x} ạ!", "Cho em gói {x} mang đi bà ơi!", "Bà ơi, {x} một gói, nhiều muối vừng nhé!", "Ối giời đói quá, {x} đi bà ơi!", "Gói cho tôi {x}, nhanh nhanh kẻo muộn làm!", "Còn {x} không bà? Cho con một phần!", "Sáng nay ăn {x} cho chắc bụng, bà ạ!"],
    orderBy: {
      hocsinh: ["Bà ơi cháu mua {x}, sắp trống vào lớp rồi ạ!", "Mẹ cho cháu tiền mua {x} bà ạ!"],
      ongcu: ["Này bà Tám, cho tôi xin gói {x} như mọi khi.", "Bà gói hộ lão gói {x}, lão đi uống chén chè."],
      xeom: ["Chị Tám ơi, gói {x} để anh còn chạy cuốc!", "Nhanh tay giùm chị ơi, {x} một!"],
      traitrau: ["Ê bà, {x}, lẹ lên!", "Bà già ơi {x} đê!"],
      bedao: ["Bà ơi, con muốn ăn {x} ạ!", "Mẹ bảo con ra mua {x}!"],
      codao: ["Chào bác Tám, bác bán cho cháu {x} ạ.", "Bác cho cháu một phần {x} mang lên trường."],
      banoitro: ["Chị Tám ơi, {x} hôm nay có dẻo không đấy?", "Gói cho em {x}, ít thôi chị nhé!"],
      congchuc: ["Bác ơi cho cháu {x}, còn kịp điểm danh.", "Bác gói {x} giúp cháu với ạ."],
      congnhan: ["Bà ơi {x} to to cho thằng cháu đi làm!", "Cho con {x}, đầy đầy bà ơi!"]
    },
    happy: ["Xôi dẻo quá, mai cháu lại ra!", "Thơm nức mũi luôn!", "Ngon hết sẩy bà ạ!", "Đúng vị xôi ngày xưa!", "Cảm ơn bà nhé!", "Bà khéo tay thật đấy!", "Ăn một lần nhớ cả đời!"],
    cheap: ["Rẻ mà ngon thế này thì còn gì bằng!", "Bà bán rẻ quá, lời lãi gì!"],
    angry: ["Chờ mãi mọc rễ luôn rồi!", "Bán hàng gì mà chậm như rùa!", "Thôi, sang hàng bên kia mua!", "Mất cả buổi sáng!", "Muộn làm mất rồi, bực cả mình!"],
    wrong: ["Ơ, cháu gọi {x} cơ mà bà!", "Nhầm rồi bà ơi, {x} cơ!", "Bà lẫn rồi, con mua {x}!"],
    soldout: ["Hết {x} rồi à? Tiếc thế!", "Không có {x} à, thôi để mai vậy."],
    pricey: ["Gì mà đắt thế bà, xôi dát vàng à?", "Giá cắt cổ thế này ai mua nổi!", "Chợ bên kia rẻ hơn nhiều!"],
    flee: ["Hê hê, ghi sổ nhé bà!", "Mai trả, mai trả!", "Chạy thôi anh em ơi!"],
    soldoutWait: ["Hết {x} rồi à? Thôi để mai cháu quay lại!", "Người trước mua hết {x} rồi, thôi tôi đi hàng khác vậy.", "Tiếc quá, hết mất {x} rồi bà ạ!", "Hết {x} rồi hả bà? Không sao, hôm khác cháu mua."],
    caught: ["Cháu xin lỗi, cháu trả, cháu trả đây ạ...", "Thôi thôi, trả tiền đây, bà đừng la!"],
    baShout: ["Ai mua xôi đi! Xôi nóng xôi dẻo đây!", "Xôi gấc, xôi lạc, xôi đỗ đây!", "Xôi nóng hổi vừa thổi vừa ăn đây!", "Có ngay, có ngay!"],
    baFlee: ["Ối làng nước ơi! Thằng kia đứng lại!", "Trời đất ơi, bùng tiền à!"]
  };
  const _0x282276 = ["Xôi dẻo thơm, bà bán vui tính. 5 sao!", "Ăn xong nhớ mãi vị xôi tuổi thơ.", "Gói lá chuối thơm lừng, chuẩn vị quê.", "Giá phải chăng, phần nhiều, rất đáng!", "Nhanh nhẹn, xôi nóng hổi."];
  const _0x48eb4a = ["Chờ lâu quá, bỏ về tay trắng.", "Bán chậm như rùa bò!", "Đứng mỏi cả chân mà chưa tới lượt.", "Đắt cắt cổ, không quay lại!", "Đưa nhầm món, bực mình.", "Hàng xôi gì mà để khách đợi cả buổi."];
  const _0x360fea = 1500000;
  const _0x3777d0 = 7;
  const _0x36181d = 250000;
  const _0x3a7308 = 10000;
  const _0x45877a = 100;
  const _0x3a5efc = [{
    bg: "title",
    who: null,
    text: "Làng Đông, những năm tám mươi.\nTiếng rao \"Ai mua xôi đi…\" của bà Tám đã vang khắp chợ quê ngót ba mươi năm."
  }, {
    bg: "title",
    who: null,
    text: "Năm ấy mất mùa. Ông mất sớm, con trai đi làm ăn xa. Bà Tám đành vay lão Cả Bá một triệu rưỡi để sửa lại mái bếp."
  }, {
    bg: "kitchen",
    who: "caba",
    text: "Bà Tám! Hạn trả nợ chỉ còn đúng BẢY ngày. Không đủ một triệu rưỡi thì cái bếp này, cái nhà này… là của tôi!"
  }, {
    bg: "kitchen",
    who: "batam",
    text: "Ông Cả cứ yên tâm. Bảy ngày nữa tôi trả đủ, không thiếu một đồng."
  }, {
    bg: "kitchen",
    who: "caba",
    text: "Hừ! Để xem bán xôi thì được mấy xu. Khà khà khà!"
  }, {
    bg: "kitchen",
    who: "ti",
    text: "Bà ơi! Cháu là Tí đây! Cháu nghỉ hè về phụ bà bán xôi. Nhất định mình giữ được nhà!"
  }, {
    bg: "kitchen",
    who: "batam",
    text: "Ngoan lắm con. Nào, xuống bếp bà dạy cho mà đồ xôi. Gà gáy rồi, nhanh tay kẻo lỡ phiên chợ sáng!"
  }];
  const _0x21d95e = [{
    who: "batam",
    text: "Đây là bếp nhà mình. Dưới kia là các món xôi bà biết nấu. Bấm + để chọn số mẻ, mỗi mẻ được 8 phần."
  }, {
    who: "batam",
    text: "Thiếu nguyên liệu thì cứ bấm \"Đi chợ & Đồ xôi\", bà mua đủ rồi đồ luôn. Giá chợ mỗi ngày mỗi khác, để ý mà mua lúc rẻ."
  }, {
    who: "ti",
    text: "Xôi chín thì mình gánh ra chợ hả bà?"
  }, {
    who: "batam",
    text: "Ừ. Nhớ đồ vừa đủ bán thôi con, xôi để qua đêm là thiu, phí của giời!"
  }];
  const _0x231f16 = [{
    who: "batam",
    text: "Khách đến sẽ gọi món. Con chọn đúng xôi trong mâm, bấm \"Gói lá\" rồi chạm vào khách để đưa."
  }, {
    who: "batam",
    text: "Khách đợi lâu là bỏ đi đấy, lại còn chê bai khắp làng. Nhanh tay lên con!"
  }, {
    who: "ti",
    text: "Dạ! Ai mua xôi điiii!"
  }];
  const _0x24e6ae = {
    2: [{
      who: "ongcu",
      text: "Bà Tám này, xôi xéo Hà thành phải có nếp nghệ, đỗ nắm, hành phi mỡ gà. Lão chỉ cho bà cách đồ, coi như trả cái ơn bữa nọ."
    }, {
      who: "batam",
      text: "Quý hoá quá! Con cảm ơn cụ Đồ!",
      unlock: "xeo"
    }],
    3: [{
      who: "ti",
      text: "Bà ơi, nghe đồn dạo này trật tự phường hay đi dẹp hàng lấn vỉa hè lắm. Mà bán đắt quá thì quản lý thị trường cũng sờ gáy đấy."
    }, {
      who: "batam",
      text: "Ừ, bán giá phải chăng thì chẳng sợ ai. Bán cắt cổ là bị phạt, bị tịch thu hàng đấy con."
    }],
    4: [{
      who: "caba",
      text: "Bà Tám! Còn bốn ngày nữa thôi đấy nhé. Tiền đâu? Khà khà!"
    }, {
      who: "batam",
      text: "Ông cứ chờ đấy. Con cháu tôi chăm chỉ, trời chẳng phụ lòng người."
    }],
    5: [{
      who: "ti",
      text: "Bà ơi hôm nay rằm, chợ đông lắm! Mình đồ nhiều nhiều vào!"
    }, {
      who: "batam",
      text: "Phải rồi, ngày rằm người ta đi lễ chùa, mua xôi gấc xôi đỗ nhiều lắm.",
      festival: true
    }],
    6: [{
      who: "batam",
      text: "Trời kéo mây đen thế kia, chắc mưa rào. Hôm nay đồ ít thôi con ạ.",
      rain: true
    }],
    7: [{
      who: "caba",
      text: "Hôm nay là ngày cuối cùng! Chiều nay tôi đến lấy tiền… hoặc lấy nhà!"
    }, {
      who: "ti",
      text: "Bà ơi, cố lên! Phiên chợ cuối cùng rồi!"
    }]
  };
  const _0x3886c6 = [{
    bg: "kitchen",
    who: "caba",
    text: "Hả?! Đủ… đủ cả một triệu rưỡi thật à?"
  }, {
    bg: "kitchen",
    who: "batam",
    text: "Đủ cả, ông đếm lại đi. Nợ nần sòng phẳng, từ nay nhà ai nấy ở."
  }, {
    bg: "kitchen",
    who: "caba",
    text: "Hừm… xôi nhà bà… cho tôi xin một gói xôi gà được không?"
  }, {
    bg: "kitchen",
    who: "ti",
    text: "Bà ơi, mình giữ được nhà rồi! Từ nay tiệm \"Xôi Bà Tám\" sẽ nổi tiếng khắp vùng!"
  }, {
    bg: "title",
    who: null,
    text: "Và tiếng rao \"Ai mua xôi đi…\" vẫn vang lên mỗi sáng nơi chợ làng Đông.\n\n— HẾT CHƯƠNG 1 —"
  }];
  const _0x116907 = [{
    bg: "kitchen",
    who: "caba",
    text: "Hết hạn rồi! Thiếu tiền thì dọn đồ đi, cái nhà này giờ của tôi!"
  }, {
    bg: "kitchen",
    who: "batam",
    text: "Ông Cả… xin ông khất cho vài hôm…"
  }, {
    bg: "kitchen",
    who: "ti",
    text: "Bà ơi đừng khóc… cháu với bà làm lại từ đầu!"
  }, {
    bg: "title",
    who: null,
    text: "Bà Tám đành dọn ra túp lều ven đê…\nNhưng câu chuyện có thể viết lại. Hãy thử lại nhé!"
  }];
  const _0xe04ef = {
    batam: {
      name: "Bà Tám",
      sheet: "batam_sit",
      frame: 0
    },
    ti: {
      name: "Cái Tí",
      sheet: "char_ti",
      frame: 0
    },
    caba: {
      name: "Lão Cả Bá",
      sheet: "char_caba",
      frame: 0
    },
    qltt: {
      name: "Quản lý thị trường",
      sheet: "char_qltt",
      frame: 0
    },
    ongcu: {
      name: "Cụ Đồ",
      sheet: "char_ongcu",
      frame: 0
    }
  };
  const _0x2be998 = {
    noi: {
      name: "Nồi chõ to",
      icon: "upg_noi",
      cost: [180000, 450000],
      lv: ["Đồ tối đa 16 mẻ/lượt, chín nhanh hơn 40%", "Đồ tối đa 24 mẻ/lượt, chín nhanh hơn 50%"]
    },
    la: {
      name: "Lá chuối gói sẵn",
      icon: "upg_la",
      cost: [100000, 260000],
      lv: ["Gói xôi nhanh gấp rưỡi", "Gói xôi nhanh gấp ba"]
    },
    ghe: {
      name: "Thêm ghế nhựa",
      icon: "upg_ghe",
      cost: [150000, 380000],
      lv: ["Thêm 1 ghế: phục vụ thêm 1 khách cùng lúc", "Thêm 2 ghế: phục vụ thêm 2 khách cùng lúc (tối đa 6)"]
    },
    loa: {
      name: "Loa rao hàng",
      icon: "upg_loa",
      cost: [220000, 550000],
      lv: ["Khách kéo đến đông hơn 15%", "Khách kéo đến đông hơn 30%"]
    },
    tra: {
      name: "Ấm trà đá mời khách",
      icon: "upg_tra",
      cost: [120000, 320000],
      lv: ["Khách chịu chờ lâu hơn 20%", "Khách chịu chờ lâu hơn 40%"]
    },
    ti: {
      name: "Nhờ Tí gói hộ",
      icon: "port_ti",
      cost: [650000],
      max: 1,
      lv: ["Chọn xôi là Tí gói luôn, khỏi bấm \"Gói lá\""]
    }
  };
  const _0x658bf5 = ["noi", "la", "ghe", "loa", "tra", "ti"];
  const _0x2edfa6 = {
    2: 500000,
    3: 1000000,
    4: 3000000,
    5: 5000000
  };
  const _0x49cc5f = () => _0x2edfa6[(_0xbf5ed7.ch5 || 0) >= 1 ? 5 : (_0xbf5ed7.ch4 || 0) >= 1 ? 4 : _0xbf5ed7.ch3 >= 1 ? 3 : 2];
  const _0x1b038c = {
    x: 102,
    y: 110
  };
  const _0x4cbd9f = 150;
  const _0x1906fc = [{
    who: "teo",
    text: "Bà Tám ơi, cháu là Tèo đây! Cháu nghỉ học rồi, bà thuê cháu về gói xôi phụ cùng Tí, với rượt mấy đứa quỵt tiền nhé. Cháu chạy nhanh lắm!"
  }, {
    who: "batam",
    text: "Cha bố anh! Bỏ học thì phí lắm con ạ… Thôi được, ra đây gói xôi phụ bà cùng Tí, rảnh thì bà dạy thêm chữ cho."
  }, {
    who: "teo",
    text: "Dạ! Bà cứ múc xôi, cháu gói ngay cho, đứa nào quỵt tiền cháu rượt!"
  }];
  const _0xf70ee7 = [{
    who: "teo",
    text: "Tí ơi, anh Tèo đây! Anh nghỉ học rồi, em cho anh vào tiệm gói xôi phụ em, với rượt mấy đứa quỵt tiền nhé. Anh chạy nhanh lắm!"
  }, {
    who: "ti",
    text: "Anh Tèo bỏ học thật à? Bà mà biết thì mắng cho đấy… Thôi được, vào gói xôi phụ em, rảnh thì em kèm anh học thêm."
  }, {
    who: "teo",
    text: "Được! Em cứ múc xôi, anh gói ngay cho, đứa nào quỵt tiền anh rượt!"
  }];
  const _0x77a80e = 5;
  const _0x25cdf7 = 20;
  const _0x32ee96 = [{
    id: "mohang",
    name: "Mở hàng may mắn",
    desc: "Bán gói xôi đầu tiên",
    reward: 10000,
    check: (_0x13f775, _0x462bba) => _0x462bba.served >= 1
  }, {
    id: "tay50",
    name: "Tay gói lá",
    desc: "Bán tổng cộng 50 gói xôi",
    reward: 30000,
    check: (_0x43f475, _0x269f56) => _0x269f56.served >= 50
  }, {
    id: "tay300",
    name: "Bà Tám nổi tiếng",
    desc: "Bán tổng cộng 300 gói xôi",
    reward: 100000,
    check: (_0x1753b4, _0x255644) => _0x255644.served >= 300
  }, {
    id: "tay1000",
    name: "Huyền thoại chợ quê",
    desc: "Bán tổng cộng 1.000 gói xôi",
    reward: 300000,
    check: (_0x258cb6, _0x47ac2e) => _0x47ac2e.served >= 1000
  }, {
    id: "gac50",
    name: "Đỏ son may mắn",
    desc: "Bán 50 gói xôi gấc",
    reward: 50000,
    check: (_0x2f6bfe, _0x3b305e) => (_0x3b305e.dish.gac || 0) >= 50
  }, {
    id: "xeo30",
    name: "Hương vị Hà thành",
    desc: "Bán 30 gói xôi xéo",
    reward: 50000,
    check: (_0x5b1822, _0xaf4244) => (_0xaf4244.dish.xeo || 0) >= 30
  }, {
    id: "dumon",
    name: "Mâm xôi ngũ sắc",
    desc: "Biết làm 10 món xôi",
    reward: 150000,
    check: _0x3d861b => _0x3d861b.unlocked.length >= 10
  }, {
    id: "khongcho",
    name: "Không để ai phải chờ",
    desc: "Một phiên bán từ 10 gói, không khách nào bỏ về",
    reward: 60000,
    check: (_0x1ac5bd, _0x7f5427) => _0x7f5427.perfect >= 1
  }, {
    id: "batqua",
    name: "Bắt quả tang",
    desc: "Tóm được 3 đứa bùng tiền",
    reward: 50000,
    check: (_0x2af5c2, _0x5e4bcc) => _0x5e4bcc.caught >= 3
  }, {
    id: "chaythoat",
    name: "Chạy như ma đuổi",
    desc: "Ôm thúng chạy thoát trật tự phường / QLTT",
    reward: 20000,
    check: (_0x119571, _0x47c56d) => _0x47c56d.escaped >= 1
  }, {
    id: "namsao",
    name: "Buôn bán có tâm",
    desc: "Đạt uy tín 5 sao",
    reward: 100000,
    check: _0x5b75c4 => _0x5b75c4.rep >= 4.95
  }, {
    id: "laidam",
    name: "Lãi đậm",
    desc: "Lãi từ 300.000đ trong một ngày",
    reward: 50000,
    check: (_0x4eddad, _0x21afb9) => _0x21afb9.bestNet >= 300000
  }, {
    id: "hetsach",
    name: "Hết sạch thúng",
    desc: "Bán hết xôi trước giờ tan chợ",
    reward: 40000,
    check: (_0x278581, _0x1d85df) => _0x1d85df.soldOut >= 1
  }, {
    id: "muaro",
    name: "Mưa không nản",
    desc: "Bán từ 15 gói trong một ngày mưa",
    reward: 50000,
    check: (_0x3fa70a, _0x1979fa) => _0x1979fa.rainBest >= 15
  }, {
    id: "traisom",
    name: "Trả nợ trước hạn",
    desc: "Trả hết nợ lão Cả Bá từ ngày " + _0x77a80e + " trở về trước",
    reward: 100000,
    check: _0x2eb753 => _0x2eb753.flags.debtDay >= 1 && _0x2eb753.flags.debtDay <= _0x77a80e
  }, {
    id: "tuluc",
    name: "Tự lực cánh sinh",
    desc: "Xong Chương 1 mà không vay bà Hai lần nào",
    reward: 80000,
    check: _0x4eb792 => _0x4eb792.flags.c1Win === 1 && _0x4eb792.flags.c1NoLoan === 1
  }, {
    id: "khonglo",
    name: "Bảy ngày không lỗ",
    desc: "Xong Chương 1, không ngày nào bị lỗ",
    reward: 80000,
    check: _0x2bba14 => _0x2bba14.flags.c1Win === 1 && _0x2bba14.flags.c1NoLoss === 1
  }, {
    id: "duvon",
    name: "Trả nợ vẫn dư dả",
    desc: "Xong Chương 1, trả nợ xong còn từ 500.000đ",
    reward: 100000,
    check: _0x1b4e6b => _0x1b4e6b.flags.c1Win === 1 && (_0x1b4e6b.flags.c1Cash || 0) >= 500
  }, {
    id: "saolang",
    name: "Tiếng lành đồn xa",
    desc: "Đạt uy tín 5 sao ngay trong Chương 1",
    reward: 100000,
    check: _0x28c0c4 => _0x28c0c4.chapter === 1 && _0x28c0c4.rep >= 4.95
  }, {
    id: "thantoc",
    name: "Khai trương thần tốc",
    desc: "Khai trương tiệm trong vòng " + _0x25cdf7 + " ngày kể từ khi vào Chương 2",
    reward: 200000,
    check: _0x19c7f9 => _0x19c7f9.flags.tiemDay >= 1 && _0x19c7f9.flags.c2Day >= 1 && _0x19c7f9.flags.tiemDay - _0x19c7f9.flags.c2Day <= _0x25cdf7
  }, {
    id: "taytrang",
    name: "Tay trắng dựng tiệm",
    desc: "Khai trương tiệm mà chưa mua món nâng cấp nào",
    reward: 200000,
    check: _0x43650a => _0x43650a.flags.tiemBare === 1
  }, {
    id: "trano",
    name: "Nợ nần sòng phẳng",
    desc: "Trả hết nợ lão Cả Bá (xong Chương 1)",
    reward: 0,
    check: _0x1f3eac => _0x1f3eac.chapter >= 2
  }, {
    id: "chutiem",
    name: "Bà chủ Tiệm Xôi",
    desc: "Khai trương Tiệm Xôi Bà Tám (xong Chương 2)",
    reward: 0,
    check: _0x4a54f9 => _0x4a54f9.ch2 >= 3
  }];
  const _0x463ee = [{
    id: "sap",
    name: "Thuê sạp trong chợ",
    cost: 800000,
    desc: "Sạp gỗ có mái che, khách đi qua là thấy. Khách đông hơn 10%, chịu chờ lâu hơn 10%.",
    story: [{
      bg: "market",
      who: "batam",
      text: "Có cái sạp đàng hoàng rồi, mưa nắng chẳng lo. Bà con đi chợ cũng dễ tìm hàng mình hơn!"
    }, {
      bg: "market",
      who: "ti",
      text: "Bà ơi, mốc tiếp theo là cái biển hiệu thật to, đỏ chót ấy!"
    }]
  }, {
    id: "bien",
    name: "Sắm biển hiệu & đèn lồng",
    cost: 1500000,
    desc: "Biển \"XÔI BÀ TÁM\" đỏ chót, treo đèn lồng. Khách đông hơn 10% nữa, uy tín +0,3 sao.",
    story: [{
      bg: "market",
      who: "ongcu",
      text: "Chữ trên biển này để lão viết cho. Nét chữ có hồn thì hàng mới đắt, bà Tám ạ!"
    }, {
      bg: "market",
      who: "batam",
      text: "Quý hoá quá cụ ơi. Giờ chỉ còn gom đủ vốn là mở tiệm thôi!"
    }]
  }, {
    id: "tiem",
    name: "Khai trương Tiệm Xôi Bà Tám",
    cost: 3000000,
    desc: "Mở tiệm thật sự, pháo nổ đì đùng. Khách làng bên cũng kéo về: đông hơn 15% nữa.",
    story: [{
      bg: "market",
      who: null,
      fx: "phao",
      text: "Đì đùng! Đì đùng!\nTiệm Xôi Bà Tám chính thức khai trương!"
    }, {
      bg: "market",
      who: "caba",
      text: "Khai trương hồng phát nhé bà Tám! Hôm nay tôi mua mười gói xôi gà, lấy may!"
    }, {
      bg: "market",
      who: "batam",
      text: "Cảm ơn ông Cả. Chuyện cũ bỏ qua, từ nay làng xóm mình cứ thế mà thương nhau."
    }, {
      bg: "market",
      who: "ti",
      text: "Bà ơi, mình làm được rồi! Tiệm Xôi Bà Tám!"
    }, {
      bg: "title",
      who: null,
      fx: "phao",
      text: "— HẾT CHƯƠNG 2 —\nTiệm Xôi Bà Tám mở cửa mỗi sáng. Bà có thể bán tiếp, nâng cấp và săn đủ danh hiệu."
    }]
  }];
  const _0x42a140 = [{
    bg: "kitchen",
    who: "ti",
    text: "Bà ơi, trả xong nợ rồi! Giờ mình làm lớn đi bà, mở hẳn một cái tiệm xôi!"
  }, {
    bg: "kitchen",
    who: "batam",
    text: "Cha bố cô! Mở tiệm đâu phải chuyện chơi. Phải có vốn, có khách quen, có tiếng tăm."
  }, {
    bg: "kitchen",
    who: "batam",
    text: "Thôi thì từng bước: trước thuê cái sạp trong chợ cho khỏi nắng mưa, rồi sắm cái biển hiệu. Đủ vốn thì mở tiệm."
  }, {
    bg: "kitchen",
    who: "ti",
    text: "Mà bà ơi, hết hè rồi, cháu phải đi học lại. Hôm nào rảnh cháu vẫn gói xôi phụ bà, còn hôm nào kiểm tra hay lao động thì bà chịu khó tự gói lá nhé!"
  }, {
    bg: "kitchen",
    who: "batam",
    text: "Ừ, học hành là việc chính. Con cứ đi học, bà xoay xở được."
  }, {
    bg: "title",
    who: null,
    text: "CHƯƠNG 2: MỞ TIỆM\n\nThuê sạp (800.000đ) → Biển hiệu (1.500.000đ) → Khai trương tiệm (3.000.000đ)\n\nMẹo: tiền lãi dùng để nâng cấp cũng giúp bán nhanh hơn."
  }];
  const _0x155417 = 2;
  const _0x31bf44 = [10, 20, 30, 40, 50];
  const _0x38f5ee = 10;
  const _0x593c43 = 1;
  const _0x3f2fe4 = _0x59b762 => [{
    who: "ti",
    text: "Bà ơi, uy tín của tiệm mình giảm sút quá. Cháu thấy nhà bà Hồng hàng xóm đi quyên góp cho chùa Hà " + _0x59b762 + " triệu, rồi thấy lượng khách cũng tăng. Hay mình cũng đi quyên góp hả bà?"
  }];
  const _0x54dac8 = [{
    who: "ti",
    text: "Bà ơi, hôm nay bà Năm đầu chợ bán xôi hạ giá, khách kéo sang bên ấy cả!"
  }, {
    who: "batam",
    text: "Kệ người ta. Mình cứ bán ngon, gói nhanh, giữ tiếng tăm là khách lại về thôi con."
  }];
  const _0x20baa9 = 1.1;
  const _0x2924da = 1.3;
  const _0x1c055d = () => _0xbf5ed7.ch4 >= 1 ? 20 : _0xbf5ed7.ch3 >= 1 ? 10 : _0xbf5ed7.ch2 >= 3 ? 3 : _0xbf5ed7.ch2 >= 1 ? 2 : 1;
  const _0x468fd3 = 30;
  const _0x133b18 = {
    sap: 1500000,
    tiem: 3000000,
    pho: 15000000
  };
  const _0x24b125 = 6000000;
  const _0x1f9ed0 = 100000000;
  const _0x179d7d = 50000000;
  const _0x2b3cea = 1.8;
  const _0x7ddea4 = 2.3;
  const _0x107f09 = 2.8;
  const _0x3c8c35 = 1.25;
  const _0x46406f = 0.1;
  const _0x3bcc23 = 10000000;
  const _0xbccb42 = 10000000;
  const _0x71db7c = 0.03;
  const _0x2032fa = 30;
  const _0x3ecba3 = [50000000, 100000000, 200000000, 300000000, 500000000, 1000000000];
  const _0x2ce111 = {
    90: 0.03,
    180: 0.07,
    365: 0.16
  };
  const _0x593364 = 5;
  const _0xcc068e = 0.07;
  const _0x598f8c = 3;
  const _0x243179 = 0.2;
  const _0x3b8ca4 = 30;
  const _0x588c6b = ["các em nhỏ ở mái ấm trẻ mồ côi", "các cụ ở trung tâm bảo trợ người già", "các cụ thương binh, gia đình có công với cách mạng trong phường"];
  const _0x5b9c45 = 0.06;
  const _0x11972e = 0.01;
  const _0x3b0df1 = 0.15;
  const _0x4c4214 = [{
    bg: "city",
    who: null,
    fx: "phao",
    text: "CHƯƠNG 3: LÊN PHỐ\n\nTiệm Xôi Bà Tám dọn lên giữa phố lớn. Tấm biển hiệu cũ mang theo treo lên, nhưng xung quanh giờ là nhà cao tầng, xe cộ nườm nượp."
  }, {
    bg: "city",
    who: "ti",
    text: "Bà ơi, trên phố người ta ăn sáng đông gấp mấy lần ở quê! Giá cũng cao hơn nữa!"
  }, {
    bg: "city",
    who: "batam",
    text: "Ừ, nhưng phố xá thì lắm chuyện con ạ. Giấy tờ, thuế má phải đàng hoàng. Đêm hôm nhớ đóng cửa cẩn thận."
  }, {
    bg: "city",
    who: null,
    text: "Mẹo: làm ăn trên phố phải tuân thủ pháp luật. Sổ thu chi có nhiều thứ đáng để ý."
  }];
  const _0x49ae3a = 0.5;
  const _0x1046f1 = [{
    bg: "city",
    who: "ti",
    text: "Bà ơi, phố xá đông đúc thật, nhưng tiền thuê, thuế má, trộm cắp… cháu thấy bà mệt quá rồi."
  }, {
    bg: "city",
    who: "batam",
    text: "Ừ, bà cũng nghĩ thế. Phố xá không hợp với bà già này. Mình về quê thôi con, đất lành chim đậu."
  }, {
    bg: "city",
    who: "ti",
    text: "Về quê mình vẫn còn cái tiệm, bà con làng xóm vẫn nhớ xôi bà. Lấy lại sức rồi mình tính tiếp bà nhé!"
  }, {
    bg: "kitchen",
    who: "batam",
    text: "Phải rồi. Có chí thì nên. Khi nào đủ vốn, đủ sức, bà cháu mình lại lên phố."
  }, {
    bg: "title",
    who: null,
    text: "TRỞ VỀ CHƯƠNG 2\n\nTiệm Xôi Bà Tám ở quê mở cửa trở lại. Tiền thuê còn 3 triệu/tháng, không còn thuế và trộm.\nMón đã học, nâng cấp, Tí, Cu Tèo, danh hiệu vẫn giữ. Muốn lên phố lại cần đủ 100 triệu."
  }];
  const _0x35c3fb = [{
    bg: "citynight",
    who: "trom",
    text: "(Đêm khuya, một bóng đen cạy cửa tiệm…)\nHề hề, tiệm này đông khách thế, chắc két đầy tiền!"
  }, {
    bg: "citynight",
    who: "batam",
    text: "Trời đất ơi! Tiền bán hôm qua mất sạch, nồi niêu, loa, ghế… khuân đi hết cả rồi Tí ơi!",
    ti: "Trời đất ơi! Tiền bán hôm qua mất sạch, nồi niêu, loa, ghế… khuân đi hết cả rồi!"
  }, {
    bg: "citynight",
    who: "ti",
    text: "Bà đừng khóc… Mình làm lại từ đầu. Lần này phải thuê bảo vệ trông tiệm ban đêm mới được!",
    ti: "Không được nản! Làm lại từ đầu thôi. Lần này phải thuê bảo vệ trông tiệm ban đêm mới được!"
  }];
  const _0x5b8daf = [{
    bg: "citynight",
    who: "baove",
    text: "Đứng lại! Tưởng tiệm này không có người trông à? Tóm được mày rồi nhé!"
  }, {
    bg: "citynight",
    who: "batam",
    text: "May quá có anh bảo vệ! Tiền trong tiệm vẫn còn nguyên. Hôm nay bà khao anh gói xôi gà!",
    ti: "May quá có anh bảo vệ! Tiền trong tiệm vẫn còn nguyên. Hôm nay em khao anh gói xôi gà!"
  }];
  const _0x2e3dc2 = [{
    bg: "citynight",
    who: "baove",
    text: "Chết thật… đêm qua em ngồi gác mà ngủ gật lúc nào không hay. Em xin lỗi bà!",
    ti: "Chết thật… đêm qua anh ngồi gác mà ngủ gật lúc nào không hay. Anh xin lỗi Tí!",
    tiWho: "baove"
  }, {
    bg: "citynight",
    who: "batam",
    text: "Thôi, may mà còn giữ lại được ít vốn. Từ nay anh gác cho tỉnh táo vào nhé!",
    ti: "Thôi, may mà còn giữ lại được ít vốn. Từ nay anh gác cho tỉnh táo vào nhé!"
  }];
  const _0x43b065 = {
    x: 146,
    y: 96
  };
  const _0x25ada0 = 150;
  const _0x193b80 = 0.85;
  const _0x135e0c = {
    go: ["Đứng lại! Ăn xôi phải trả tiền chứ!", "Chạy đâu cho thoát! Đứng lại ngay!", "Bà cứ bán tiếp, để em lo thằng này!", "Ê! Đứng lại! Tiệm này có bảo vệ đấy nhé!"],
    ok: ["Tóm được rồi bà ơi! Tiền xôi đây ạ.", "Hết chạy nhé! Trả tiền cho bà Tám đi.", "Chạy nhanh mấy cũng không qua được em đâu!"],
    fail: ["Nó luồn vào hẻm mất rồi bà ơi, em xin lỗi!", "Nó nhảy lên xe ôm chạy mất… lần sau em không tha đâu!", "Chạy nhanh quá, em đuổi không kịp bà ạ!"]
  };
  const _0x585cba = {
    go: ["Đứng lại! Ăn xôi phải trả tiền chứ!", "Chạy đâu cho thoát! Đứng lại ngay!", "Tí cứ bán tiếp, để anh lo thằng này!", "Ê! Đứng lại! Tiệm này có bảo vệ đấy nhé!"],
    ok: ["Tóm được rồi Tí ơi! Tiền xôi đây.", "Hết chạy nhé! Trả tiền cho tiệm đi.", "Chạy nhanh mấy cũng không qua được anh đâu!"],
    fail: ["Nó luồn vào hẻm mất rồi Tí ơi, anh xin lỗi!", "Nó nhảy lên xe ôm chạy mất… lần sau anh không tha đâu!", "Chạy nhanh quá, anh đuổi không kịp!"]
  };
  const _0xec7970 = 0.7;
  const _0x242807 = {
    go: ["Đứng lại! Chưa trả tiền xôi bà Tám!", "Ê! Chạy đâu! Trả tiền đây!", "Bà cứ bán, để cháu rượt cho!"],
    ok: ["Tóm được rồi bà ơi! Tiền xôi đây ạ.", "Hết chạy nhé! Cháu lấy được tiền rồi!", "Cháu chạy nhanh lắm, bà yên tâm!"],
    fail: ["Nó chạy nhanh quá, cháu đuổi không kịp bà ơi!", "Nó luồn vào hẻm mất rồi, cháu xin lỗi bà!", "Hự… hụt hơi quá, mất tiêu rồi bà ơi!"]
  };
  const _0x170f4b = {
    go: ["Đứng lại! Chưa trả tiền xôi tiệm em Tí!", "Ê! Chạy đâu! Trả tiền đây!", "Em Tí cứ bán, để anh rượt cho!"],
    ok: ["Tóm được rồi em Tí ơi! Tiền xôi đây.", "Hết chạy nhé! Anh lấy được tiền rồi!", "Anh chạy nhanh lắm, em Tí yên tâm!"],
    fail: ["Nó chạy nhanh quá, anh đuổi không kịp em Tí ơi!", "Nó luồn vào hẻm mất rồi, anh xin lỗi em!", "Hự… hụt hơi quá, mất tiêu rồi em Tí ơi!"]
  };
  const _0x4d3d0e = () => _0xe9a99e() ? _0x170f4b : _0x242807;
  const _0x2cac0a = 0.55;
  const _0x4abefd = {
    go: ["Đứng lại! Ăn xôi của bà mà không trả tiền à!", "Ối giời ơi, quỵt tiền bà già à! Đứng lại!", "Chạy đâu cho thoát! Đứng lại!"],
    ok: ["Tóm được rồi nhé! Già nhưng bà chưa yếu đâu!", "Tiền xôi đây rồi. Lần sau đừng có mà quỵt!"],
    fail: ["Trời ơi chạy nhanh quá, mất toi gói xôi!", "Hộc… hộc… già rồi, chạy không nổi nữa!"]
  };
  const _0x1a84cc = {
    go: ["Đứng lại! Ăn xôi phải trả tiền chứ!", "Ê! Chưa trả tiền mà! Đứng lại!", "Chạy đâu cho thoát! Đứng lại!"],
    ok: ["Tóm được rồi nhé! Trả tiền xôi đây!", "Tiền xôi đây rồi. Lần sau đừng có mà quỵt!"],
    fail: ["Chạy nhanh quá, mất toi gói xôi rồi!", "Hộc… hộc… không đuổi kịp nữa!"]
  };
  const _0x1fa15f = 0.5;
  const _0x4fdd42 = 0.1;
  const _0x23ee1e = "Em có lỗi, bà cứ trừ vào lương của em. Em xin đền {tien}.";
  const _0x1ea1a7 = "Anh có lỗi, Tí cứ trừ vào lương của anh. Anh xin đền {tien}.";
  const _0x580d37 = [{
    who: "batam",
    text: "Ừ, của đi thay người, bà trừ lương anh {tien}. Từ nay trực cho cẩn thận vào nhé!",
    ti: "Vâng, em trừ lương anh {tien}. Từ nay anh trực cẩn thận giúp em nhé!"
  }, {
    who: "baove",
    text: "Dạ, em xin nhận. Em hứa không để xảy ra lần nữa!",
    ti: "Ừ, anh xin nhận. Anh hứa không để xảy ra lần nữa!",
    tiWho: "baove"
  }];
  const _0x168609 = [{
    who: "batam",
    text: "Thôi, bà không trừ lương đâu. Anh cũng vất vả rồi, từ nay trực cẩn thận là được.",
    ti: "Thôi, em không trừ lương anh đâu. Anh cũng vất vả rồi, từ nay trực cẩn thận là được."
  }, {
    who: "baove",
    text: "Bà tốt với em quá… Em hứa từ giờ canh tiệm như canh nhà mình!",
    ti: "Tí tốt với anh quá… Anh hứa từ giờ canh tiệm như canh nhà mình!",
    tiWho: "baove"
  }, {
    who: null,
    text: "Chuyện bà Tám rộng lượng với người làm lan khắp phố, khách càng quý tiệm hơn. Uy tín +0,1 sao.",
    ti: "Chuyện Tí rộng lượng với người làm lan khắp phố, khách càng quý tiệm hơn. Uy tín +0,1 sao.",
    tiWho: null
  }];
  const _0x37ac9b = 0.15;
  const _0x434527 = {
    que: ["Nhà ông Trưởng thôn cưới con", "Đám giỗ cụ Tổ họ Nguyễn", "Chùa làng làm lễ rằm", "Hợp tác xã liên hoan", "Nhà cụ Đồ mừng thọ"],
    pho: ["Văn phòng tầng 12 đặt ăn sáng", "Tiệc tất niên công ty", "Trường mầm non đặt bữa phụ", "Khách sạn đặt buffet sáng", "Tiệc cưới ở nhà hàng"]
  };
  _0x4360f7.orderQty = ["Bà ơi, gói cho cháu {n} phần {x} nhé!", "Cho em {n} gói {x}, mua cho cả phòng!", "{n} phần {x}, gói riêng từng phần giúp em!", "Lấy {n} gói {x}, cả nhà đang đợi ở nhà!"];
  _0x4360f7.partial = ["Còn từng này thôi à? Thôi cũng được bà ạ.", "Hết rồi à, vậy cháu lấy chừng này thôi."];
  _0xe04ef.thue = {
    name: "Chi cục Thuế",
    sheet: "char_thue",
    frame: 0
  };
  _0xe04ef.ttp = {
    name: "Trật tự phường",
    sheet: "char_qltt",
    frame: 0
  };
  _0xe04ef.congan = {
    name: "Công an phường",
    sheet: "char_qltt",
    frame: 0
  };
  const _0x181e6a = 3;
  const _0x5d885d = 0.95;
  const _0x477406 = _0x5d885d * 0.3;
  const _0x2069fa = _0x5d885d * 0.7;
  const _0x44062d = 0.2;
  const _0x2ae5e2 = 0.9;
  const _0x1e9a06 = {
    full: [{
      who: "congan",
      text: "Chào bà Tám, tôi ở Công an phường. Vụ trộm ở tiệm bà hôm trước, anh em chúng tôi đã bắt được đối tượng rồi!"
    }, {
      who: "congan",
      text: "Tang vật thu hồi còn nguyên: {tien}{do}. Bà mang theo căn cước lên trụ sở Công an phường ký biên bản để nhận lại nhé."
    }, {
      who: "batam",
      text: "Ối giời, may quá! Bà cảm ơn các anh. Đúng là lưới trời lồng lộng, tính thưa mà khó lọt!"
    }, {
      who: null,
      text: "Bà Tám lên phường ký biên bản, nhận lại {tien}{do}."
    }],
    part: [{
      who: "congan",
      text: "Bà Tám ơi, bà thu xếp lên trụ sở Công an phường gấp nhé. Chúng tôi đã bắt được kẻ trộm tiệm bà rồi."
    }, {
      who: "congan",
      text: "Có điều hắn đã ăn tiêu gần hết, anh em chỉ thu hồi được {tien}. Bà lên ký xác nhận để nhận lại số tiền này."
    }, {
      who: "batam",
      text: "Thôi thì của đi thay người, được đồng nào hay đồng ấy. Bà cảm ơn các anh nhiều!"
    }],
    fail: [{
      who: "congan",
      text: "Chào bà Tám. Vụ trộm ở tiệm bà hôm trước, đối tượng có vẻ đã tẩu thoát khỏi địa bàn. Chúng tôi vẫn đang truy xét, có tình hình mới sẽ báo ngay cho bà."
    }, {
      who: "batam",
      text: "Dạ, bà cảm ơn các anh đã vất vả. Thôi thì của đi thay người vậy…"
    }]
  };
  _0xe04ef.trom = {
    name: "Kẻ trộm",
    sheet: "char_trom",
    frame: 0
  };
  _0xe04ef.teo = {
    name: "Cu Tèo",
    sheet: "char_teo",
    frame: 0
  };
  _0xe04ef.baove = {
    name: "Anh bảo vệ",
    sheet: "char_baove",
    frame: 0
  };
  _0x32ee96.push({
    id: "vecoi",
    name: "Lá rụng về cội",
    desc: "Bỏ phố về quê làm lại",
    reward: 0,
    check: _0xed5941 => !!_0xed5941.flags.veQue
  }, {
    id: "tramtrieu",
    name: "Trăm triệu đầu tiên",
    desc: "Có trong tiệm 100.000.000đ",
    reward: 0,
    check: _0x11c85e => _0x11c85e.money >= 100000000
  }, {
    id: "lenpho",
    name: "Xôi quê lên phố",
    desc: "Mở tiệm trên phố (vào Chương 3)",
    reward: 0,
    check: _0x5e1040 => _0x5e1040.ch3 >= 1
  }, {
    id: "dongthue",
    name: "Công dân gương mẫu",
    desc: "Đăng ký mã số thuế cho tiệm",
    reward: 0,
    check: _0x3f3b93 => !!_0x3f3b93.taxReg
  }, {
    id: "batrom",
    name: "Canh gác cẩn mật",
    desc: "Bảo vệ tóm được kẻ trộm",
    reward: 500000,
    check: (_0x4f38c5, _0xf7b75) => (_0xf7b75.thiefCaught || 0) >= 1
  }, {
    id: "rongluong",
    name: "Chủ tiệm rộng lượng",
    desc: "Bỏ qua cho anh bảo vệ 3 lần",
    reward: 300000,
    check: (_0x4c3365, _0x114cbc) => (_0x114cbc.forgive || 0) >= 3
  });
  Object.assign(_0x199e77, {
    pate: {
      name: "Pate gan",
      unit: "hộp",
      price: 45000,
      ch: 4,
      desc: "Pate gan heo béo mịn, phết lên xôi nóng là tan ngay trong miệng."
    },
    cha: {
      name: "Chả lụa",
      unit: "cây",
      price: 90000,
      ch: 4,
      desc: "Giò lụa gói lá chuối, thái lát hồng hào, dai giòn sần sật."
    },
    trung: {
      name: "Trứng cút",
      unit: "chục",
      price: 30000,
      ch: 4,
      desc: "Trứng cút luộc bóc vỏ, rim nước mắm cho thấm vị."
    },
    lapxuong: {
      name: "Lạp xưởng",
      unit: "cân",
      price: 160000,
      ch: 4,
      desc: "Lạp xưởng tươi áp chảo, thái lát, ngọt thơm mùi rượu mai quế lộ."
    }
  });
  Object.assign(_0xaa20ba, {
    patecha: {
      name: "Xôi pate chả",
      short: "pate chả",
      ing: ["nep", "pate", "cha"],
      suggest: 30000,
      learn: 3000000,
      ch: 4,
      desc: "Xôi trắng dẻo, phết pate, thêm vài lát chả lụa — bữa sáng dân văn phòng."
    },
    trungcut: {
      name: "Xôi trứng cút",
      short: "trứng cút",
      ing: ["nep", "trung", "hanh"],
      suggest: 17000,
      learn: 2000000,
      ch: 4,
      desc: "Xôi nghệ vàng ươm, trứng cút rim mắm, hành phi giòn."
    },
    lapxuong: {
      name: "Xôi lạp xưởng",
      short: "lạp xưởng",
      ing: ["nep", "lapxuong", "hanh"],
      suggest: 32000,
      learn: 3000000,
      ch: 4,
      desc: "Lạp xưởng áp chảo cháy cạnh, béo ngọt, ăn kèm dưa góp."
    },
    thapcam: {
      name: "Xôi thập cẩm",
      short: "thập cẩm",
      ing: ["nep", "pate", "cha", "trung", "lapxuong"],
      suggest: 50000,
      learn: 6000000,
      ch: 4,
      desc: "Đủ cả pate, chả, trứng cút, lạp xưởng — miền Nam gọi là xôi mặn, một hộp no cả ngày."
    },
    ngusac: {
      name: "Xôi ngũ sắc bí truyền",
      short: "ngũ sắc",
      ing: ["nep", "gac", "ladua", "lacam", "doxanh"],
      suggest: 36000,
      learn: 0,
      ch: 4,
      secret: true,
      desc: "Năm màu năm điều may: gấc, lá dứa, nếp trắng, lá cẩm, đỗ vàng. Công thức riêng của bà Tám."
    }
  });
  _0x47e263.push("patecha", "trungcut", "lapxuong", "thapcam", "ngusac");
  _0x47e263.splice(0, _0x47e263.length, "doxanh", "lac", "gac", "ladua", "xeo", "lacam", "dauden", "san", "bap", "nepcam", "mit", "ga", "vo", "com", "khuc", "thit", "chuoi", "xoai", "saurieng", "patecha", "trungcut", "lapxuong", "thapcam", "ngusac");
  _0x4d7ac3.ship = {
    name: "Anh shipper",
    role: "giao đồ ăn",
    patience: 15,
    tip: 0,
    flee: 0,
    w: 0,
    fav: []
  };
  _0x4d7ac3.kol = {
    name: "Hot TikToker",
    role: "người review",
    patience: 13,
    tip: 0.6,
    flee: 0,
    w: 0,
    fav: ["ngusac", "thapcam", "patecha", "gac"]
  };
  _0x4d7ac3.vanphong = {
    name: "Chị văn phòng",
    role: "nhân viên văn phòng",
    patience: 10,
    tip: 0.2,
    flee: 0,
    w: 0,
    fav: ["patecha", "trungcut", "lapxuong", "thapcam", "xoai", "saurieng"]
  };
  _0x4360f7.orderBy.ship = ["Đơn app đây bà ơi! {n} phần {x}, khách đang đợi!", "Em lấy đơn app: {n} phần {x}, bà làm nhanh giúp em!", "Shipper đây ạ! {n} {x}, app báo gấp!"];
  _0x4360f7.orderBy.kol = ["Hello cả nhà, hôm nay mình review xôi Bà Tám nè! Cho con một phần {x}!", "Lên sóng rồi nha! Bà ơi cho con {x}, để con quay cận cảnh!"];
  _0x4360f7.orderBy.vanphong = ["Chị ơi cho em {x}, sắp vào ca rồi!", "Một {x} mang đi, nhanh giúp em với!"];
  _0x4360f7.shipHappy = ["Đơn xong! Em giao đi đây, khách chấm 5 sao cho bà!", "Nhanh quá bà ơi, cảm ơn bà!"];
  _0x4360f7.shipAngry = ["Khách huỷ đơn rồi! App trừ điểm tiệm mình đấy bà ơi!", "Chờ lâu quá, khách đánh 1 sao rồi…"];
  _0x4360f7.kolHappy = ["Ngon xỉu! Cả nhà nhớ ghé Xôi Bà Tám nha, tim cho clip nè!", "Mười điểm không có nhưng! Clip này chắc chắn lên xu hướng!"];
  _0x4360f7.kolAngry = ["Ủa, đợi mãi… thôi mình lên clip kể hết cho mọi người biết nha!", "Trải nghiệm tệ quá, mình phải review thật lòng thôi!"];
  _0xe04ef.ship = {
    name: "Anh shipper",
    sheet: "char_ship",
    frame: 0
  };
  _0xe04ef.kol = {
    name: "Hot TikToker",
    sheet: "char_kol",
    frame: 0
  };
  _0xe04ef.vsattp = {
    name: "Đoàn kiểm tra VSATTP",
    sheet: "char_vsattp",
    frame: 0
  };
  _0x2be998.inox = {
    name: "Tủ inox & găng tay",
    icon: "upg_inox",
    ch: 4,
    cost: [8000000, 20000000],
    lv: ["Bếp sạch hơn: dễ qua kiểm tra vệ sinh an toàn thực phẩm", "Bếp đạt chuẩn: luôn qua kiểm tra, khách tin tưởng hơn"]
  };
  _0x658bf5.push("inox");
  const _0xdd3ac3 = 500000000;
  const _0x254350 = 4.5;
  const _0x2e28d0 = 150000000;
  const _0x4d6973 = 800000000;
  const _0x16a19e = [30000000, 50000000, 80000000];
  const _0xf9db55 = 15000000;
  const _0x5b001b = ["Phố Hàng Than", "Ngõ Chợ Gạo", "Phố Cửa Nam"];
  const _0x3e99cb = {
    that: {
      name: "thật thà",
      who: ["Chị Hoa", "Anh Lâm", "Cô Thuý"],
      salary: 6000000,
      base: 2600000,
      skim: 0,
      desc: "Lãi vừa phải nhưng đều đặn, không bao giờ ăn bớt."
    },
    lanh: {
      name: "lanh lợi",
      who: ["Anh Tuấn", "Chị Vy", "Anh Quang"],
      salary: 8000000,
      base: 3800000,
      skim: 0.22,
      desc: "Bán giỏi, lãi cao hơn, nhưng thỉnh thoảng ăn bớt tiền."
    }
  };
  const _0x523be7 = 2000000;
  const _0x382616 = 0.25;
  const _0x7a8a69 = 0.2;
  const _0x34ec40 = 0.3;
  const _0x1082b3 = 0.08;
  const _0x4a8910 = [{
    bg: "city",
    who: null,
    fx: "phao",
    text: "CHƯƠNG 4: THƯƠNG HIỆU\n\nXôi Bà Tám giờ đã nổi tiếng khắp thành phố. Đã đến lúc mở chi nhánh, bán qua ứng dụng, biến gánh xôi quê thành một thương hiệu."
  }, {
    bg: "city",
    who: "ti",
    text: "Bà ơi, cháu đăng ký bán trên app giao đồ ăn rồi! Shipper sẽ tới lấy hàng, bà gói nhanh kẻo khách chấm 1 sao nhé!"
  }, {
    bg: "city",
    who: "batam",
    text: "Bà già rồi, không đứng hết mọi quầy được. Mở chi nhánh thì chọn người quản lý cho kỹ: thật thà hay lanh lợi, đều có cái giá của nó."
  }, {
    bg: "city",
    who: "ti",
    text: "Cháu học thêm mấy món xôi phố nữa: pate chả, trứng cút, lạp xưởng… dân văn phòng mê lắm!"
  }, {
    bg: "city",
    who: null,
    text: "Mẹo: nút \"Chi nhánh\" trong bếp để mở chi nhánh. Nâng cấp \"Tủ inox & găng tay\" để qua kiểm tra vệ sinh an toàn thực phẩm."
  }];
  const _0x59b5e9 = [{
    bg: "kitchen",
    who: "batam",
    text: "Tí này, lại đây bà bảo. Ba chi nhánh, tiếng tăm khắp phố… đến lúc bà truyền cho con món xôi ngũ sắc của nhà mình rồi."
  }, {
    bg: "kitchen",
    who: "batam",
    text: "Đỏ là gấc, xanh là lá dứa, trắng là nếp cái, tím là lá cẩm, vàng là đỗ xanh. Năm màu là năm điều may ông bà để lại."
  }, {
    bg: "kitchen",
    who: "ti",
    text: "Cháu nhớ rồi bà ạ. Cháu sẽ giữ đúng vị xôi của bà!"
  }, {
    bg: "kitchen",
    who: null,
    fx: "phao",
    text: "Đã mở khoá: Xôi ngũ sắc bí truyền — món đắt nhất tiệm."
  }];
  const _0xfadb9a = [{
    who: "ti",
    text: "Bà ơi! Chuỗi \"Xôi Nhanh\" mở ngay cạnh tiệm mình, biển to đùng, còn bán đồng giá 10 nghìn!",
    ti: "Ơ kìa! Chuỗi \"Xôi Nhanh\" mở ngay cạnh tiệm mình, biển to đùng, còn bán đồng giá 10 nghìn!"
  }, {
    who: "batam",
    text: "Họ vốn to, định bán lỗ cho mình chết đói đây. Để bà tính xem nên đối phó thế nào…",
    ti: "Họ vốn to, định bán lỗ cho mình chết đói đây. Phải tính xem nên đối phó thế nào…"
  }];
  const _0x1fcaea = {
    giam: [{
      who: "ti",
      text: "Bà ơi, \"Xôi Nhanh\" đóng cửa rồi! Mình theo giá họ mãi cũng mệt, giờ bán lại giá cũ thôi bà.",
      ti: "\"Xôi Nhanh\" đóng cửa rồi! Theo giá họ mãi cũng mệt, giờ bán lại giá cũ thôi."
    }],
    giu: [{
      who: "ti",
      text: "Bà ơi, \"Xôi Nhanh\" hết vốn dẹp tiệm rồi! Khách cũ quay về hết, ai cũng khen xôi nhà mình ngon hơn!",
      ti: "\"Xôi Nhanh\" hết vốn dẹp tiệm rồi! Khách cũ quay về hết, ai cũng khen xôi nhà mình ngon hơn!"
    }],
    dacbiet: [{
      who: "ti",
      text: "Bà ơi, \"Xôi Nhanh\" dẹp rồi! Họ bắt chước mãi mà không làm được món nhà mình!",
      ti: "\"Xôi Nhanh\" dẹp rồi! Họ bắt chước mãi mà không làm được món của bà!"
    }]
  };
  const _0x459f53 = {
    vs: {
      bg: "city",
      who: "vsattp",
      text: "Uy tín của tiệm đã về con số không. Đoàn kiểm tra quyết định thu hồi giấy phép kinh doanh của Xôi Bà Tám!"
    },
    tax: {
      bg: "city",
      who: "thue",
      text: "Tiệm không đủ tiền nộp phạt và truy thu thuế. Cơ quan thuế cưỡng chế, niêm phong tiệm!"
    }
  };
  const _0x1390c0 = [{
    bg: "city",
    who: "batam",
    text: "Trời ơi… bao nhiêu năm gây dựng, giờ mất trắng cả rồi…"
  }, {
    bg: "city",
    who: "ti",
    text: "Bà ơi, mình về quê làm lại từ gánh xôi đầu tiên bà nhé. Cháu vẫn ở bên bà!"
  }, {
    bg: "city",
    who: null,
    text: "PHÁ SẢN\n\nTiệm Xôi Bà Tám mất tất cả, quay về Chương 1. Danh hiệu đã đạt vẫn được giữ."
  }];
  _0xe04ef.lnganh = {
    name: "Đoàn kiểm tra liên ngành",
    sheet: "char_qltt",
    frame: 0
  };
  const _0x10bf5d = [{
    who: "lnganh",
    text: "Chào Bà Tám, chúng tôi là đoàn kiểm tra liên ngành. Chúng tôi nhận được đơn tố cáo bà có hoạt động buôn bán gian lận, tham gia rửa tiền, trốn thuế.",
    ti: "Chào cô Tí, chúng tôi là đoàn kiểm tra liên ngành. Chúng tôi nhận được đơn tố cáo cô có hoạt động buôn bán gian lận, tham gia rửa tiền, trốn thuế.",
    tiWho: "lnganh"
  }, {
    who: "batam",
    text: "Ơ… các anh nói gì thế? Tôi chỉ bán xôi thôi mà…",
    ti: "Ơ… các chú nói gì thế ạ? Cháu chỉ bán xôi thôi mà…"
  }, {
    who: "lnganh",
    text: "Sổ sách của tiệm không khớp: tiền trong két tăng bất thường, không rõ nguồn gốc. Mời bà cùng chúng tôi lên cơ quan làm việc!",
    ti: "Sổ sách của tiệm không khớp: tiền trong két tăng bất thường, không rõ nguồn gốc. Mời cô cùng chúng tôi lên cơ quan làm việc!",
    tiWho: "lnganh"
  }, {
    who: "ti",
    text: "Bà ơi! Bà ơi!…",
    ti: "Trời ơi, Tí ơi! Cháu tôi!… Bà dạy con thế nào mà ra nông nỗi này!",
    tiWho: "batam"
  }, {
    who: null,
    text: "BÀ TÁM ĐI TÙ\n\nToàn bộ tài sản bị tịch thu, tiệm xôi bị niêm phong.\nMọi dữ liệu bị xoá, quay về Chương 1.\n\nBà Tám ghét những người gian dối. Chơi thật mới vui con nhé!",
    ti: "CÁI TÍ ĐI TÙ\n\nToàn bộ tài sản bị tịch thu, tiệm xôi bị niêm phong.\nMọi dữ liệu bị xoá, quay về Chương 1.\n\nBà Tám ghét những người gian dối. Chơi thật mới vui con nhé!",
    tiWho: null
  }];
  const _0x1838d9 = {
    come: {
      who: "vsattp",
      text: "Đoàn kiểm tra vệ sinh an toàn thực phẩm đây. Đề nghị tiệm cho kiểm tra bếp và nguyên liệu!"
    },
    pass: [{
      who: "vsattp",
      text: "Bếp sạch sẽ, nguyên liệu rõ nguồn gốc, có tủ inox, găng tay đầy đủ. Đạt chuẩn!"
    }, {
      who: "batam",
      text: "Dạ, bán đồ ăn cho người ta thì phải sạch từ cái nồi, cái thớt ạ.",
      ti: "Dạ, bà cháu dạy bán đồ ăn cho người ta thì phải sạch từ cái nồi, cái thớt ạ."
    }],
    warn: [{
      who: "vsattp",
      text: "Bếp tạm được, nhưng dao thớt để lẫn đồ sống đồ chín. Phạt cảnh cáo, lần sau phải khắc phục!"
    }],
    fail: [{
      who: "vsattp",
      text: "Nguyên liệu để trần, không găng tay, không tủ bảo quản! Vi phạm nghiêm trọng quy định an toàn thực phẩm!"
    }, {
      who: "batam",
      text: "Ối giời… xin các anh chị cho bà khắc phục ngay…",
      ti: "Dạ… xin các anh chị cho cháu khắc phục ngay ạ…"
    }]
  };
  _0x32ee96.push({
    id: "thuonghieu",
    name: "Thương hiệu Xôi Bà Tám",
    desc: "Lập thương hiệu (vào Chương 4)",
    reward: 0,
    check: _0x242738 => (_0x242738.ch4 || 0) >= 1
  }, {
    id: "bachinhanh",
    name: "Ba miền phố thị",
    desc: "Mở đủ 3 chi nhánh",
    reward: 5000000,
    check: _0x55f96e => (_0x55f96e.br || []).length >= 3
  }, {
    id: "appsao",
    name: "Quán quen trên app",
    desc: "Giao 30 đơn app, điểm app từ 4,8",
    reward: 3000000,
    check: (_0x305f8e, _0x35ce4a) => (_0x35ce4a.app || 0) >= 30 && (_0x305f8e.app || 0) >= 4.8
  }, {
    id: "viral",
    name: "Lên xu hướng",
    desc: "Được người review khen, clip lên xu hướng",
    reward: 2000000,
    check: (_0x5ab79c, _0x254672) => (_0x254672.viral || 0) >= 1
  }, {
    id: "vesinh",
    name: "Bếp chuẩn vệ sinh",
    desc: "Qua 3 lần kiểm tra VSATTP",
    reward: 3000000,
    check: (_0xded6b6, _0xa88d3b) => (_0xa88d3b.vsPass || 0) >= 3
  }, {
    id: "danhbai",
    name: "Trụ vững trước chuỗi lớn",
    desc: "Cầm cự tới khi \"Xôi Nhanh\" dẹp tiệm",
    reward: 5000000,
    check: (_0x39ef07, _0x7e2e1) => (_0x7e2e1.rivalWin || 0) >= 1
  }, {
    id: "bitruyen",
    name: "Nối nghiệp bà Tám",
    desc: "Nhận công thức xôi ngũ sắc bí truyền",
    reward: 0,
    check: _0x54cf22 => _0x54cf22.unlocked.includes("ngusac")
  });
  _0x4360f7.combo = ["Bà ơi, cho cháu {n} {x} với {m} {y} nhé!", "{n} phần {x}, thêm {m} phần {y} nữa bà ơi!", "Lấy {n} {x} và {m} {y}, gói chung giúp em!"];
  const _0x5da247 = 0.3;
  const _0x2dbcd0 = ["Bà ơi, hôm nay cháu có tiết kiểm tra một tiết, không phụ bà được. Bà tự gói lá nhé!", "Cô giáo bắt cả lớp đi lao động trồng cây, cháu phải lên trường từ sớm rồi bà ạ!", "Hôm nay cháu thi học kỳ, bà gói lá giúp cháu nhé. Thi xong cháu chạy về ngay!", "Chiều qua cháu quên làm bài tập, sáng nay phải lên lớp sớm chép lại. Bà tự gói nhé!", "Trường cháu hôm nay chào cờ đầu tuần, cháu là cờ đỏ nên phải đi sớm bà ơi!"];
  const _0x1dec42 = 0.1;
  const _0x33c57d = [{
    ask: 1,
    why: "anh bảo vệ xin nghỉ để đưa vợ đi đẻ",
    say: "Bà ơi, vợ em trở dạ giữa đêm, em phải đưa lên viện. Mẹ tròn con vuông rồi, mà tiệm lại bị trộm… em xin lỗi bà!",
    sayTi: "Tí ơi, vợ anh trở dạ giữa đêm, anh phải đưa lên viện. Mẹ tròn con vuông rồi, mà tiệm lại bị trộm… anh xin lỗi!"
  }, {
    why: "anh bảo vệ về quê ăn giỗ",
    say: "Nhà em có giỗ cụ, em cứ nghĩ vắng một đêm không sao… Em xin lỗi bà, lần sau em nhờ người trông thay.",
    sayTi: "Nhà anh có giỗ cụ, anh cứ nghĩ vắng một đêm không sao… Anh xin lỗi Tí, lần sau anh nhờ người trông thay."
  }, {
    ask: 1,
    why: "anh bảo vệ xin nghỉ ốm",
    say: "Em sốt cao quá phải nằm nhà, không ngờ đúng đêm ấy trộm vào. Em có lỗi với bà quá!",
    sayTi: "Anh sốt cao quá phải nằm nhà, không ngờ đúng đêm ấy trộm vào. Anh có lỗi với Tí quá!"
  }, {
    why: "anh bảo vệ đi ăn cưới em họ",
    say: "Đám cưới em họ, anh em chuốc quá chén, em ngủ lại bên ấy luôn… Em xin lỗi bà!",
    sayTi: "Đám cưới em họ, anh em chuốc quá chén, anh ngủ lại bên ấy luôn… Anh xin lỗi Tí!"
  }, {
    why: "anh bảo vệ đi xem bóng đá với hội bạn",
    say: "Tối qua đội tuyển đá chung kết, em ra quán xem với anh em một lát… ai ngờ về thì cửa đã bị cạy!",
    sayTi: "Tối qua đội tuyển đá chung kết, anh ra quán xem với anh em một lát… ai ngờ về thì cửa đã bị cạy!"
  }];
  const _0x19c94f = ["Thôi, anh cũng có việc nhà. Lần sau nghỉ thì báo em một tiếng, em còn thuê người trông thay.", "Của đi thay người, may mà không mất nhiều. Từ nay anh nghỉ thì em tự đóng cửa kỹ vậy."];
  const _0x927f7e = ["Thôi, người ta cũng có việc nhà. Lần sau xin nghỉ thì báo bà một tiếng, bà còn thuê người trông thay.", "Của đi thay người, may mà không mất nhiều. Từ nay anh nghỉ thì bà tự đóng cửa kỹ vậy."];
  const _0x3c2496 = 2000000000;
  const _0x5d6a81 = 0.8;
  const _0x4ed882 = 7;
  const _0x2517c7 = [{
    bg: "city",
    who: null,
    fx: "phao",
    text: "CHƯƠNG 5: TÍ NỐI NGHIỆP\n\nMùa hè năm ấy, Cái Tí được nghỉ học, khăn gói về phố thăm bà. Tiệm Xôi Bà Tám giờ đã có tiếng khắp nơi, két tiền chạm mốc {tong}."
  }, {
    bg: "kitchen",
    who: "ti",
    text: "Bà ơi, cháu về rồi đây! Ơ… sao mặt bà xanh xao thế? Tay bà run cả lên kìa!"
  }, {
    bg: "kitchen",
    who: "batam",
    text: "Không sao đâu con… mấy hôm nay bà hay chóng mặt, ngực cứ đau thắt từng cơn. Chắc tại già rồi…"
  }, {
    bg: "kitchen",
    who: null,
    text: "Tí đưa bà đi khám. Bác sĩ bảo bà bị bệnh tim nặng, phải mổ gấp, không thể để lâu được nữa."
  }, {
    bg: "kitchen",
    who: "batam",
    text: "Tiền mổ những {phi}… gần như cả cơ nghiệp bà gây dựng. Thôi, bà già rồi, sống được ngày nào hay ngày ấy. Để tiền đó cho con ăn học."
  }, {
    bg: "kitchen",
    who: "ti",
    text: "Bà ơi, bà nói thế cháu buồn lắm! Tiền mất thì mình làm lại, chứ bà thì cháu chỉ có một thôi. Bà cứ yên tâm đi mổ, ở nhà đã có cháu!"
  }, {
    bg: "kitchen",
    who: "ti",
    text: "Bao năm cháu đứng cạnh bà gói lá, đồ xôi, ra chợ. Mẻ xôi nào bà dạy cháu cũng nhớ hết. Cháu trông tiệm được mà bà!"
  }, {
    bg: "kitchen",
    who: "batam",
    text: "Cháu bà lớn thật rồi… Thôi được. Bà đi mổ. Còn {conlai} bà giao cả cho con làm vốn. Nhớ lời bà: bán cho người ta miếng xôi ngon, lấy giá phải chăng, giữ lấy cái tâm."
  }, {
    bg: "kitchen",
    who: "ti",
    text: "Cháu nhớ rồi bà ạ. Bà đi mổ cho khỏe, về còn ăn xôi cháu nấu!"
  }, {
    bg: "city",
    who: null,
    fx: "phao",
    text: "Bà Tám vào viện. Từ hôm nay, Cái Tí một mình vào bếp, đi chợ, đồ xôi, ra hàng.\n\nĐã mở chế độ BÁN HÀNG TỰ DO — cứ thế mà giữ lửa cho Tiệm Xôi Bà Tám nhé!"
  }];
  const _0xf9f0ab = [{
    bg: "kitchen",
    who: null,
    text: "Một tuần sau, ca mổ thành công. Bà Tám xuất viện về nhà, da dẻ hồng hào hẳn ra."
  }, {
    bg: "kitchen",
    who: "batam",
    text: "Tí ơi, bà về rồi đây! Nghe hàng xóm khen xôi cháu nấu dẻo thơm chẳng kém bà. Bà vui lắm con ạ!"
  }, {
    bg: "kitchen",
    who: "ti",
    text: "Bà khỏe là cháu mừng rồi! Giờ bà cứ ngồi nhà nghỉ ngơi, thỉnh thoảng ra tiệm nếm xôi, chỉ bảo cháu thêm nhé."
  }, {
    bg: "kitchen",
    who: "batam",
    text: "Ừ. Tiệm Xôi Bà Tám giờ là của con. Cứ bán xôi ngon, lấy giá phải chăng, thì chẳng bao giờ thiếu khách."
  }];
  _0x32ee96.push({
    id: "noinghiep",
    name: "Cháu ngoan của bà",
    desc: "Đưa bà đi mổ, Tí nối nghiệp Tiệm Xôi Bà Tám (vào Chương 5)",
    reward: 0,
    check: _0x5313f6 => (_0x5313f6.ch5 || 0) >= 1
  });
  const _0x277b92 = 20000000;
  const _0x505099 = {
    vs: {
      bg: "city",
      who: "vsattp",
      text: "Uy tín của tiệm đã về con số không. Đoàn kiểm tra thu hồi giấy phép của thương hiệu Xôi Bà Tám và toàn bộ chi nhánh!"
    },
    tax: {
      bg: "city",
      who: "thue",
      text: "Tiệm không đủ tiền nộp phạt và truy thu thuế. Cơ quan thuế cưỡng chế, kê biên thương hiệu và các chi nhánh để trừ nợ!"
    }
  };
  const _0x417d03 = [{
    bg: "citynight",
    who: "ti",
    text: "A lô, bà ơi… cháu làm mất tiệm rồi. Thương hiệu, chi nhánh… mất hết cả rồi. Cháu xin lỗi bà…"
  }, {
    bg: "citynight",
    who: "batam",
    text: "Ngốc ạ, bà nằm đây vẫn nghe hết. Tiền mất thì mình làm lại, chính con dạy bà câu đó mà."
  }, {
    bg: "citynight",
    who: "batam",
    text: "Cái tiệm trên phố đứng tên bà, người ta không lấy được đâu. Trong tủ còn ít tiền bà dành dụm, con cầm lấy mà làm vốn."
  }, {
    bg: "citynight",
    who: "ti",
    text: "Cháu cảm ơn bà. Lần này cháu sẽ làm cẩn thận hơn, bà cứ yên tâm dưỡng bệnh nhé!"
  }];
  const _0x3eea7a = [{
    bg: "kitchen",
    who: "ti",
    text: "Bà ơi… cháu làm mất thương hiệu của bà rồi. Chi nhánh cũng không còn…"
  }, {
    bg: "kitchen",
    who: "batam",
    text: "Thương hiệu mất thì thôi, cái tiệm trên phố vẫn còn đấy. Hồi xưa bà bắt đầu từ một gánh xôi, con bắt đầu từ cả một cái tiệm, còn hơn bà nhiều."
  }, {
    bg: "kitchen",
    who: "batam",
    text: "Bà còn ít tiền dành dụm, con cầm lấy mà làm vốn."
  }, {
    bg: "kitchen",
    who: "ti",
    text: "Cháu sẽ gây dựng lại từ đầu. Lần này cháu làm cẩn thận hơn, bà ạ!"
  }];
  const _0x3f2261 = {
    bg: "city",
    who: null,
    text: "PHÁ SẢN\n\nTí mất thương hiệu và chi nhánh, quay về Chương 3 với {von} vốn bà cho.\nMón đã học, mã số thuế và danh hiệu vẫn được giữ."
  };
  const _0xca9268 = [{
    bg: "city",
    who: null,
    fx: "phao",
    text: "TÍ LẬP LẠI THƯƠNG HIỆU\n\nSau bao ngày gồng gánh, Xôi Bà Tám lại có thương hiệu, lại mở bán trên app."
  }, {
    bg: "city",
    who: "batam",
    text: "Giỏi lắm Tí! Ngã ở đâu đứng dậy ở đó, đúng là cháu bà."
  }, {
    bg: "city",
    who: null,
    text: "Trở lại Chương 5 · BÁN HÀNG TỰ DO. Chi nhánh cần mở lại từ đầu."
  }];
  const _0xc10b19 = 180;
  let _0x2d0f1c = 320;
  const _0xecf0da = window.GAME_V ? "?v=" + window.GAME_V : "";
  const _0x3358a6 = _0x1f00c0 => "assets/" + _0x1f00c0 + _0xecf0da;
  const _0x3f8047 = {};
  const _0x4aad3c = ["bg_title", "bg_kitchen", "bg_market", "bg_market2", "bg_city", "char_thue", "char_trom", "char_baove", "batam_run", "char_ship", "char_kol", "char_vanphong", "char_vsattp", "sap", "bien_sap", "bien_tiem", "lantern", "logo", "batam_sit", "batam_stand", "batam_ganh", "package", "thung", "stool_red", "stool_blue", "umbrella", "pot", "steam", "cat", "bird", "puff", "ui_bubble", "ui_tail", "emo_excl", "emo_q", "emo_sweat", "emo_heart", "emo_anger", "emo_note", "ico_coin", "ico_star", "ico_star0", "ico_heart", "ico_clock", "ico_book", "ico_sound", "ico_mute", "ico_rep", "ico_cart", "ico_pot", "ico_bag", "ico_basket", "ico_warn", "char_hocsinh", "char_codao", "char_ongcu", "char_banoitro", "char_xeom", "char_congnhan", "char_traitrau", "char_bedao", "char_congchuc", "char_qltt", "char_caba", "char_ti", "char_teo"].concat(Object.keys(_0xaa20ba).flatMap(_0x44440e => ["xoi_" + _0x44440e, "mound_" + _0x44440e])).concat(Object.keys(_0x199e77).map(_0x269ea7 => "ing_" + _0x269ea7));
  function _0x2c48e3(_0x2a3c4d) {
    let _0x303f29 = 0;
    return Promise.all(_0x4aad3c.map(_0x5f24b9 => new Promise(_0x314185 => {
      const _0x43b5c5 = new Image();
      _0x43b5c5.onload = () => {
        _0x3f8047[_0x5f24b9] = _0x43b5c5;
        _0x303f29++;
        if (_0x2a3c4d) {
          _0x2a3c4d(_0x303f29 / _0x4aad3c.length);
        }
        _0x314185();
      };
      _0x43b5c5.onerror = () => {
        console.warn("missing", _0x5f24b9);
        _0x303f29++;
        _0x314185();
      };
      _0x43b5c5.src = _0x3358a6("img/" + _0x5f24b9 + ".png");
    })));
  }
  const _0x4d92fd = {
    musicOff: false,
    sfxOff: false,
    get muted() {
      return this.musicOff && this.sfxOff;
    },
    bgm: null,
    bgmName: "",
    bgmSrc: null,
    mbufs: {},
    mix: true,
    ac: null,
    gain: null,
    bufs: {},
    pools: {},
    bad: {},
    SFX: ["click", "coin", "buy", "fire", "ding", "wrap", "serve", "happy", "angry", "wrong", "runaway", "whistle", "gong", "rooster", "fail", "win", "bike", "pop", "boil", "phao", "medal"],
    init() {
      try {
        const _0x34542a = localStorage.getItem("xoi_muted") === "1";
        const _0x15624d = localStorage.getItem("xoi_music");
        const _0x11b6dd = localStorage.getItem("xoi_sfx");
        this.musicOff = _0x15624d === null ? _0x34542a : _0x15624d === "0";
        this.sfxOff = _0x11b6dd === null ? _0x34542a : _0x11b6dd === "0";
        this.mix = localStorage.getItem("xoi_mix") !== "0";
      } catch (_0x5ad3dc) {}
      this.applySession();
      document.addEventListener("visibilitychange", () => {
        const _0x5df596 = this.bgm && this.bgm.el;
        if (_0x5df596) {
          if (document.hidden) {
            _0x5df596.pause();
          } else if (!this.musicOff) {
            _0x5df596.play().catch(() => {});
          }
        }
      });
      this._newCtx();
      if (this.ac) {
        for (const _0xa14551 of this.SFX) {
          this.load(_0xa14551);
        }
        const _0x5e61b6 = () => {
          if (!this._retried && Object.keys(this.bad).length) {
            this._retried = true;
            Object.keys(this.bad).forEach(_0x1ed328 => this.load(_0x1ed328));
          }
          if (!!this.ac && this.ac.state !== "running") {
            try {
              const _0x1c0386 = this.ac.createBufferSource();
              _0x1c0386.buffer = this.ac.createBuffer(1, 1, 22050);
              _0x1c0386.connect(this.ac.destination);
              _0x1c0386.start(0);
            } catch (_0x17891) {}
            this.ac.resume().catch(() => {});
          }
        };
        ["pointerdown", "pointerup", "touchstart", "touchend", "click", "keydown"].forEach(_0x4af2e5 => window.addEventListener(_0x4af2e5, _0x5e61b6, {
          passive: true,
          capture: true
        }));
        this._wake = _0x5e61b6;
        const _0x450a7e = (_0x20d6a1, _0x456b9b) => {
          try {
            const _0x5b8f83 = this.gain.gain;
            const _0x4d9b7c = this.ac.currentTime;
            _0x5b8f83.cancelScheduledValues(_0x4d9b7c);
            _0x5b8f83.setValueAtTime(_0x5b8f83.value, _0x4d9b7c);
            _0x5b8f83.linearRampToValueAtTime(_0x20d6a1, _0x4d9b7c + _0x456b9b);
          } catch (_0x1db5bd) {}
        };
        const _0xb184f2 = () => {
          if (!!this.ac && !this._hid) {
            this._hid = true;
            clearTimeout(this._hideT);
            _0x450a7e(0, 0.08);
            if (this.bgmSrc) {
              try {
                const _0x2f89f0 = this.bgmSrc.g.gain;
                const _0x5ba749 = this.ac.currentTime;
                _0x2f89f0.cancelScheduledValues(_0x5ba749);
                _0x2f89f0.setValueAtTime(_0x2f89f0.value, _0x5ba749);
                _0x2f89f0.linearRampToValueAtTime(0, _0x5ba749 + 0.08);
              } catch (_0x294f56) {}
            }
            this._hideT = setTimeout(() => {
              if (this._hid && this.ac) {
                this.ac.suspend().catch(() => {});
              }
            }, 110);
          }
        };
        const _0x202663 = () => {
          if (!!this.ac && !!this._hid) {
            this._hid = false;
            clearTimeout(this._hideT);
            _0x450a7e(0.8, 0.3);
            if (this.bgmSrc) {
              try {
                const _0x4a910a = this.bgmSrc.g.gain;
                const _0x39b0f4 = this.ac.currentTime;
                _0x4a910a.cancelScheduledValues(_0x39b0f4);
                _0x4a910a.setValueAtTime(0, _0x39b0f4);
                _0x4a910a.linearRampToValueAtTime(0.45, _0x39b0f4 + 0.6);
              } catch (_0x5db8a8) {}
            }
            _0x5e61b6();
          }
        };
        document.addEventListener("visibilitychange", () => {
          if (document.hidden) {
            _0xb184f2();
          } else {
            _0x202663();
          }
        });
        window.addEventListener("pagehide", _0xb184f2);
      }
    },
    play(_0x52e6cd, _0x1a1ed9 = 1) {
      if (this.sfxOff) {
        return;
      }
      const _0x2dedea = this.bufs[_0x52e6cd];
      if (_0x2dedea && this.ac && this.ac.state === "running") {
        this._buf(_0x2dedea, _0x1a1ed9);
        return;
      }
      if (this.ac && this.ac.state !== "running" && this.ac.state !== "closed") {
        this.ac.resume().catch(() => {});
      }
      if (this.ac && this.ac.state === "running" && this.SFX.includes(_0x52e6cd) && !_0x2dedea && !this.bad[_0x52e6cd]) {
        return;
      }
      let _0x1a8d61 = this.pools[_0x52e6cd];
      if (!_0x1a8d61) {
        if (!this.SFX.includes(_0x52e6cd)) {
          return;
        }
        _0x1a8d61 = this.pools[_0x52e6cd] = [];
      }
      let _0x3a2922 = _0x1a8d61.find(_0x1d8c26 => _0x1d8c26.paused || _0x1d8c26.ended);
      if (!_0x3a2922 && _0x1a8d61.length < 2) {
        _0x3a2922 = new Audio(_0x3358a6("sfx/sfx_" + _0x52e6cd + ".mp3"));
        _0x3a2922.preload = "auto";
        _0x1a8d61.push(_0x3a2922);
      }
      _0x3a2922 = _0x3a2922 || _0x1a8d61[0];
      try {
        _0x3a2922.currentTime = 0;
        _0x3a2922.volume = Math.min(1, _0x1a1ed9 * 0.8);
        const _0x105804 = _0x3a2922.play();
        if (_0x105804) {
          _0x105804.catch(() => {});
        }
      } catch (_0x13dbf9) {}
    },
    load(_0xcf2b24) {
      const _0xb0a588 = _0x3358a6("sfx/sfx_" + _0xcf2b24 + ".mp3");
      const _0x21bad4 = "assets/sfx/sfx_" + _0xcf2b24 + ".mp3";
      const _0x562003 = _0x501613 => _0x501613 && _0x501613.byteLength ? _0x501613 : Promise.reject(new Error("file rỗng"));
      const _0x150b58 = _0x8177b6 => fetch(_0x8177b6).then(_0x1484b5 => _0x1484b5.ok || _0x1484b5.status === 0 ? _0x1484b5.arrayBuffer() : Promise.reject(new Error("http " + _0x1484b5.status))).then(_0x562003);
      const _0xd97da4 = _0x5916b3 => new Promise((_0x3cf383, _0xa2515a) => {
        const _0xdd0779 = new XMLHttpRequest();
        _0xdd0779.open("GET", _0x5916b3);
        _0xdd0779.responseType = "arraybuffer";
        _0xdd0779.onload = () => (_0xdd0779.status === 200 || _0xdd0779.status === 0) && _0xdd0779.response ? _0x3cf383(_0xdd0779.response) : _0xa2515a(new Error("xhr " + _0xdd0779.status));
        _0xdd0779.onerror = () => _0xa2515a(new Error("xhr lỗi mạng"));
        _0xdd0779.send();
      }).then(_0x562003);
      const _0x1462c3 = _0x150308 => new Promise((_0x252db3, _0x4491e4) => {
        try {
          const _0xbbd35f = this.ac.decodeAudioData(_0x150308, _0x252db3, _0x5d6b34 => _0x4491e4(new Error("giải mã: " + (_0x5d6b34 && _0x5d6b34.message || _0x5d6b34 || "?"))));
          if (_0xbbd35f && _0xbbd35f.catch) {
            _0xbbd35f.catch(() => {});
          }
        } catch (_0x31277a) {
          _0x4491e4(_0x31277a);
        }
      });
      let _0x395383 = "";
      const _0x2c40f4 = _0x4931ee => {
        _0x395383 = _0x395383 || String(_0x4931ee && _0x4931ee.message || _0x4931ee || "lỗi");
        return Promise.reject(_0x4931ee);
      };
      return _0x150b58(_0xb0a588).catch(_0x2c40f4).catch(() => _0x150b58(_0x21bad4)).catch(_0x2c40f4).catch(() => _0xd97da4(_0xb0a588)).catch(_0x2c40f4).then(_0x1462c3).then(_0x1068e1 => {
        this.bufs[_0xcf2b24] = _0x1068e1;
        delete this.bad[_0xcf2b24];
      }).catch(_0x3f8998 => {
        this.bad[_0xcf2b24] = (_0x395383 || String(_0x3f8998 && _0x3f8998.message || _0x3f8998 || "lỗi")).slice(0, 60);
      });
    },
    tick(_0x308084, _0xde06a5 = 1) {
      if (this.sfxOff) {
        return;
      }
      const _0x52899a = performance.now();
      if (_0x52899a - (this._tickAt || 0) < 70) {
        return;
      }
      this._tickAt = _0x52899a;
      const _0x4c03cc = this.bufs[_0x308084];
      if (_0x4c03cc && this.ac && this.ac.state === "running") {
        this._buf(_0x4c03cc, _0xde06a5);
        return;
      }
      if (!(_0x52899a - (this._tickFb || 0) < 140)) {
        this._tickFb = _0x52899a;
        this.play(_0x308084, _0xde06a5);
      }
    },
    status() {
      const _0x595e6f = Object.keys(this.bufs).length;
      const _0x5698e6 = Object.keys(this.bad).length;
      if (this.ac) {
        return "Đã đồng bộ " + _0x595e6f + "/" + this.SFX.length + " âm thanh trong ứng dụng" + (_0x5698e6 ? " · " + _0x5698e6 + " lỗi (" + Object.values(this.bad)[0] + ")" : "");
      } else {
        return "Đang dùng chế độ âm thanh dự phòng";
      }
    },
    _buf(_0x587604, _0x238991) {
      try {
        const _0x45319a = this.ac.createBufferSource();
        _0x45319a.buffer = _0x587604;
        if (_0x238991 !== 1) {
          const _0x25c20e = this.ac.createGain();
          _0x25c20e.gain.value = Math.min(1.25, _0x238991);
          _0x45319a.connect(_0x25c20e);
          _0x25c20e.connect(this.gain);
        } else {
          _0x45319a.connect(this.gain);
        }
        _0x45319a.start();
      } catch (_0x232db0) {}
    },
    applySession() {
      try {
        if (navigator.audioSession) {
          navigator.audioSession.type = this.mix ? "ambient" : "playback";
        }
      } catch (_0x279750) {}
    },
    _newCtx() {
      const _0x4ec6a2 = window.AudioContext || window.webkitAudioContext;
      if (!_0x4ec6a2 || location.protocol === "file:") {
        return;
      }
      const _0xb2c9d0 = this.ac;
      try {
        this.ac = new _0x4ec6a2();
        this.gain = this.ac.createGain();
        this.gain.connect(this.ac.destination);
        if (_0xb2c9d0) {
          const _0x58a620 = this.ac.currentTime;
          this.gain.gain.setValueAtTime(0, _0x58a620);
          this.gain.gain.linearRampToValueAtTime(0.8, _0x58a620 + 0.3);
        } else {
          this.gain.gain.value = 0.8;
        }
        this.ac.onstatechange = () => {
          if (this.ac && this.ac.state !== "running" && !document.hidden && this._wake) {
            this._wake();
          }
        };
      } catch (_0x5a48c4) {
        this.ac = _0xb2c9d0;
        return;
      }
      if (_0xb2c9d0) {
        this.bgmSrc = null;
        setTimeout(() => {
          try {
            _0xb2c9d0.close();
          } catch (_0x42180e) {}
        }, 300);
      }
    },
    setMix(_0x76968a) {
      this.mix = !!_0x76968a;
      try {
        localStorage.setItem("xoi_mix", _0x76968a ? "1" : "0");
      } catch (_0x14b15f) {}
      if (!this.ac) {
        this.applySession();
        return;
      }
      clearTimeout(this._mixT);
      try {
        const _0x4cfb33 = this.ac.currentTime;
        const _0x506bb6 = _0x225ac3 => {
          _0x225ac3.cancelScheduledValues(_0x4cfb33);
          _0x225ac3.setValueAtTime(_0x225ac3.value, _0x4cfb33);
          _0x225ac3.linearRampToValueAtTime(0, _0x4cfb33 + 0.12);
        };
        _0x506bb6(this.gain.gain);
        if (this.bgmSrc) {
          _0x506bb6(this.bgmSrc.g.gain);
        }
      } catch (_0x275e13) {}
      this._mixT = setTimeout(() => {
        this.applySession();
        this._newCtx();
        try {
          const _0x10a3c2 = this.ac.createBufferSource();
          _0x10a3c2.buffer = this.ac.createBuffer(1, 1, 22050);
          _0x10a3c2.connect(this.gain);
          _0x10a3c2.start(0);
        } catch (_0x15816e) {}
        this.ac.resume().catch(() => {});
        if (!this.musicOff) {
          this._musicOn();
        }
      }, 140);
    },
    _loadMusic(_0x25e7d6) {
      if (this.mbufs[_0x25e7d6]) {
        return Promise.resolve(this.mbufs[_0x25e7d6]);
      }
      const _0x15ae12 = _0x3358a6("sfx/" + _0x25e7d6 + ".mp3");
      const _0x570598 = _0xc90031 => fetch(_0xc90031).then(_0x1632ce => _0x1632ce.ok || _0x1632ce.status === 0 ? _0x1632ce.arrayBuffer() : Promise.reject(new Error("http " + _0x1632ce.status)));
      const _0x21f6cf = _0x33ee35 => new Promise((_0x2f2784, _0x188327) => {
        const _0x37e56d = new XMLHttpRequest();
        _0x37e56d.open("GET", _0x33ee35);
        _0x37e56d.responseType = "arraybuffer";
        _0x37e56d.onload = () => (_0x37e56d.status === 200 || _0x37e56d.status === 0) && _0x37e56d.response ? _0x2f2784(_0x37e56d.response) : _0x188327(new Error("xhr " + _0x37e56d.status));
        _0x37e56d.onerror = () => _0x188327(new Error("xhr"));
        _0x37e56d.send();
      });
      return _0x570598(_0x15ae12).catch(() => _0x570598("assets/sfx/" + _0x25e7d6 + ".mp3")).catch(() => _0x21f6cf(_0x15ae12)).then(_0x4a1176 => new Promise((_0x531989, _0xd95102) => {
        try {
          const _0xdf3fcd = this.ac.decodeAudioData(_0x4a1176, _0x531989, _0xd95102);
          if (_0xdf3fcd && _0xdf3fcd.catch) {
            _0xdf3fcd.catch(() => {});
          }
        } catch (_0x4ce986) {
          _0xd95102(_0x4ce986);
        }
      })).then(_0x31f851 => this.mbufs[_0x25e7d6] = _0x31f851);
    },
    _startBuf() {
      const _0x15fe89 = this.bgm;
      if (!!_0x15fe89 && !!_0x15fe89.buf && !this.bgmSrc && !this.musicOff) {
        try {
          const _0x5b50a0 = this.ac.createBufferSource();
          const _0xf74a28 = this.ac.createGain();
          const _0x484cff = this.ac.currentTime;
          _0x5b50a0.buffer = _0x15fe89.buf;
          _0x5b50a0.loop = true;
          _0xf74a28.gain.setValueAtTime(0, _0x484cff);
          _0xf74a28.gain.linearRampToValueAtTime(0.45, _0x484cff + 0.6);
          _0x5b50a0.connect(_0xf74a28);
          _0xf74a28.connect(this.ac.destination);
          _0x5b50a0.start();
          this.bgmSrc = {
            src: _0x5b50a0,
            g: _0xf74a28
          };
        } catch (_0x2d1f63) {}
      }
    },
    _stopBgm(_0x497985) {
      const _0x41362d = this.bgmSrc;
      this.bgmSrc = null;
      if (_0x41362d) {
        try {
          const _0x5699a8 = this.ac.currentTime;
          _0x41362d.g.gain.cancelScheduledValues(_0x5699a8);
          _0x41362d.g.gain.setValueAtTime(_0x41362d.g.gain.value, _0x5699a8);
          _0x41362d.g.gain.linearRampToValueAtTime(0, _0x5699a8 + _0x497985 / 1000);
          _0x41362d.src.stop(_0x5699a8 + _0x497985 / 1000 + 0.05);
        } catch (_0x26ea89) {}
      }
      const _0x1f398d = this.bgm && this.bgm.el;
      if (_0x1f398d) {
        this._fade(_0x1f398d, _0x1f398d.volume, 0, _0x497985, () => _0x1f398d.pause());
      }
    },
    _htmlMusic(_0x290a02) {
      const _0x7b3560 = new Audio(_0x3358a6("sfx/" + _0x290a02 + ".mp3"));
      _0x7b3560.loop = true;
      _0x7b3560.volume = 0;
      this.bgm = {
        name: _0x290a02,
        el: _0x7b3560
      };
      if (!this.musicOff && !document.hidden) {
        const _0x210723 = _0x7b3560.play();
        if (_0x210723) {
          _0x210723.catch(() => {});
        }
        this._fade(_0x7b3560, 0, 0.45, 600);
      }
    },
    music(_0x12bc2d) {
      if (this.bgmName === _0x12bc2d && this.bgm) {
        if (!this.musicOff) {
          this._musicOn();
        }
        return;
      }
      this._stopBgm(400);
      this.bgmName = _0x12bc2d;
      if (!_0x12bc2d) {
        this.bgm = null;
        return;
      }
      if (!this.ac) {
        return this._htmlMusic(_0x12bc2d);
      }
      const _0x55b9d8 = this.bgm = {
        name: _0x12bc2d,
        buf: null
      };
      this._loadMusic(_0x12bc2d).then(_0x1e2ced => {
        if (this.bgm === _0x55b9d8) {
          _0x55b9d8.buf = _0x1e2ced;
          this._startBuf();
        }
      }).catch(() => {
        if (this.bgm === _0x55b9d8) {
          this._htmlMusic(_0x12bc2d);
        }
      });
    },
    _musicOn() {
      const _0x4e66a0 = this.bgm;
      if (_0x4e66a0) {
        if (_0x4e66a0.buf) {
          this._startBuf();
        } else if (_0x4e66a0.el && _0x4e66a0.el.paused) {
          _0x4e66a0.el.volume = 0.45;
          _0x4e66a0.el.play().catch(() => {});
        }
      }
    },
    _fade(_0x496dce, _0x38c02b, _0x2ac98c, _0x190a04, _0x240a2c) {
      const _0x569641 = performance.now();
      const _0x231c2e = () => {
        const _0x42d923 = Math.min(1, (performance.now() - _0x569641) / _0x190a04);
        try {
          _0x496dce.volume = _0x38c02b + (_0x2ac98c - _0x38c02b) * _0x42d923;
        } catch (_0x211ece) {}
        if (_0x42d923 < 1) {
          requestAnimationFrame(_0x231c2e);
        } else if (_0x240a2c) {
          _0x240a2c();
        }
      };
      _0x231c2e();
    },
    setMusic(_0x376434) {
      this.musicOff = !_0x376434;
      try {
        localStorage.setItem("xoi_music", _0x376434 ? "1" : "0");
        localStorage.removeItem("xoi_muted");
      } catch (_0x3d9f39) {}
      if (_0x376434) {
        this._musicOn();
      } else {
        this._stopBgm(200);
      }
    },
    setSfx(_0x301d16) {
      this.sfxOff = !_0x301d16;
      try {
        localStorage.setItem("xoi_sfx", _0x301d16 ? "1" : "0");
        localStorage.removeItem("xoi_muted");
      } catch (_0x50dec0) {}
      if (_0x301d16 && this.ac && this.ac.state !== "running") {
        this.ac.resume().catch(() => {});
      }
    }
  };
  const _0x2181e3 = document.getElementById("scene");
  const _0xca5277 = _0x2181e3.getContext("2d", {
    alpha: false
  });
  _0xca5277.imageSmoothingEnabled = false;
  function _0x6d5c39(_0x4aad3d, _0x3dc962, _0x4e4ec7, _0x413909, _0x5b9663, _0x526fcc, _0x314ab8) {
    const _0x5dee31 = _0x3f8047[_0x4aad3d];
    if (_0x5dee31) {
      _0x5b9663 = _0x5b9663 || _0x5dee31.width;
      _0x526fcc = _0x526fcc || _0x5dee31.height;
      _0x4e4ec7 = Math.round(_0x4e4ec7);
      _0x413909 = Math.round(_0x413909);
      if (_0x314ab8) {
        _0xca5277.save();
        _0xca5277.translate(_0x4e4ec7 + _0x5b9663, _0x413909);
        _0xca5277.scale(-1, 1);
        _0xca5277.drawImage(_0x5dee31, _0x3dc962 * _0x5b9663, 0, _0x5b9663, _0x526fcc, 0, 0, _0x5b9663, _0x526fcc);
        _0xca5277.restore();
      } else {
        _0xca5277.drawImage(_0x5dee31, _0x3dc962 * _0x5b9663, 0, _0x5b9663, _0x526fcc, _0x4e4ec7, _0x413909, _0x5b9663, _0x526fcc);
      }
    }
  }
  function _0xfeb5dc(_0x587f94, _0x5cc32e) {
    const _0x32591e = _0x3f8047[_0x587f94];
    if (!_0x32591e) {
      return 0;
    }
    const _0xae611d = _0x32591e.height;
    const _0x5392c4 = _0x2d0f1c - _0xae611d;
    if (_0x5cc32e) {
      _0xca5277.drawImage(_0x32591e, 0, _0x5392c4);
      if (_0x5392c4 > 0) {
        _0xca5277.drawImage(_0x32591e, 0, 0, 1, 1, 0, 0, _0xc10b19, _0x5392c4);
      }
      return _0x5392c4;
    } else {
      _0xca5277.drawImage(_0x32591e, 0, 0);
      if (_0x5392c4 > 0) {
        _0xca5277.drawImage(_0x32591e, 0, _0xae611d - 1, _0xc10b19, 1, 0, _0xae611d, _0xc10b19, _0x5392c4);
      }
      return 0;
    }
  }
  function _0x4caaeb(_0x11df2d, _0x54aed6, _0x4634f0) {
    const _0x30f819 = _0x3f8047[_0x11df2d];
    if (_0x30f819) {
      _0xca5277.drawImage(_0x30f819, Math.round(_0x54aed6), Math.round(_0x4634f0));
    }
  }
  function _0x371e5f(_0x2ef870, _0x1e0b33, _0x5e5b4c, _0x174047) {
    const _0x21e780 = _0x3f8047.ui_bubble;
    if (!_0x21e780) {
      return;
    }
    const _0x25c733 = 4;
    const _0x388938 = 12;
    _0x2ef870 = Math.round(_0x2ef870);
    _0x1e0b33 = Math.round(_0x1e0b33);
    const _0x478519 = [[0, 0, _0x25c733, _0x25c733, _0x2ef870, _0x1e0b33, _0x25c733, _0x25c733], [_0x25c733, 0, _0x388938 - _0x25c733 * 2, _0x25c733, _0x2ef870 + _0x25c733, _0x1e0b33, _0x5e5b4c - _0x25c733 * 2, _0x25c733], [_0x388938 - _0x25c733, 0, _0x25c733, _0x25c733, _0x2ef870 + _0x5e5b4c - _0x25c733, _0x1e0b33, _0x25c733, _0x25c733], [0, _0x25c733, _0x25c733, _0x388938 - _0x25c733 * 2, _0x2ef870, _0x1e0b33 + _0x25c733, _0x25c733, _0x174047 - _0x25c733 * 2], [_0x25c733, _0x25c733, _0x388938 - _0x25c733 * 2, _0x388938 - _0x25c733 * 2, _0x2ef870 + _0x25c733, _0x1e0b33 + _0x25c733, _0x5e5b4c - _0x25c733 * 2, _0x174047 - _0x25c733 * 2], [_0x388938 - _0x25c733, _0x25c733, _0x25c733, _0x388938 - _0x25c733 * 2, _0x2ef870 + _0x5e5b4c - _0x25c733, _0x1e0b33 + _0x25c733, _0x25c733, _0x174047 - _0x25c733 * 2], [0, _0x388938 - _0x25c733, _0x25c733, _0x25c733, _0x2ef870, _0x1e0b33 + _0x174047 - _0x25c733, _0x25c733, _0x25c733], [_0x25c733, _0x388938 - _0x25c733, _0x388938 - _0x25c733 * 2, _0x25c733, _0x2ef870 + _0x25c733, _0x1e0b33 + _0x174047 - _0x25c733, _0x5e5b4c - _0x25c733 * 2, _0x25c733], [_0x388938 - _0x25c733, _0x388938 - _0x25c733, _0x25c733, _0x25c733, _0x2ef870 + _0x5e5b4c - _0x25c733, _0x1e0b33 + _0x174047 - _0x25c733, _0x25c733, _0x25c733]];
    for (const _0x21d22b of _0x478519) {
      _0xca5277.drawImage(_0x21e780, ..._0x21d22b);
    }
  }
  function _0xad1d39(_0x2389b5) {
    return _0x3358a6("img/port_" + (_0x2389b5 === "ttp" || _0x2389b5 === "congan" || _0x2389b5 === "lnganh" ? "qltt" : _0x2389b5) + ".png");
  }
  function _0xae0a0c(_0x14e1e2) {
    return _0x3358a6("img/port_" + _0x14e1e2 + ".png");
  }
  const _0x1d672b = (_0x5d6d21, _0x5b4a2a = document) => _0x5b4a2a.querySelector(_0x5d6d21);
  const _0x3d90fc = (_0x332b67, _0xb21489) => _0x332b67 + Math.random() * (_0xb21489 - _0x332b67);
  const _0x3d3006 = (_0x2aa029, _0x51f72d) => Math.floor(_0x3d90fc(_0x2aa029, _0x51f72d + 1));
  const _0x31c8b2 = _0x39d21c => _0x39d21c[Math.floor(Math.random() * _0x39d21c.length)];
  const _0x5ab951 = (_0x161ff0, _0x16fcda, _0x5e5447) => Math.max(_0x16fcda, Math.min(_0x5e5447, _0x161ff0));
  function _0x9c212e(_0x54987c) {
    return (_0x54987c < 0 ? "-" : "") + Math.abs(Math.round(_0x54987c)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
  }
  function _0x5e68cf(_0xb72a66) {
    if (_0xb72a66 >= 1000) {
      return (Math.round(_0xb72a66 / 100) / 10).toString().replace(".", ",") + "k";
    } else {
      return _0xb72a66 + "đ";
    }
  }
  function _0x6a5a83(_0xc5bdd, _0x145545 = "w") {
    const _0x21f285 = Object.keys(_0xc5bdd);
    let _0xec8c22 = 0;
    for (const _0x42a3e6 of _0x21f285) {
      _0xec8c22 += _0xc5bdd[_0x42a3e6][_0x145545];
    }
    let _0x27f623 = Math.random() * _0xec8c22;
    for (const _0x5a1e8c of _0x21f285) {
      _0x27f623 -= _0xc5bdd[_0x5a1e8c][_0x145545];
      if (_0x27f623 <= 0) {
        return _0x5a1e8c;
      }
    }
    return _0x21f285[0];
  }
  function _0x5ae569(_0x30b598, _0x5e1263, _0x234955) {
    const _0x5e58ab = document.createElement(_0x30b598);
    if (_0x5e1263) {
      _0x5e58ab.className = _0x5e1263;
    }
    if (_0x234955 != null) {
      _0x5e58ab.innerHTML = _0x234955;
    }
    return _0x5e58ab;
  }
  function _0x1525be(_0x110b6a, _0x5dbc22 = "ico") {
    return "<img class=\"" + _0x5dbc22 + "\" src=\"" + _0x3358a6("img/" + _0x110b6a + ".png") + "\" alt=\"\">";
  }
  const _0x260b44 = "G-JKTHM0GJXK";
  const _0x463590 = {
    on: false,
    platform() {
      const _0x340017 = window.Capacitor;
      if (_0x340017 && _0x340017.isNativePlatform && _0x340017.isNativePlatform()) {
        return _0x340017.getPlatform && _0x340017.getPlatform() || "app";
      } else {
        return "web";
      }
    },
    cid() {
      let _0x2e2544 = null;
      try {
        _0x2e2544 = localStorage.getItem("xoi_cid");
      } catch (_0x551a5f) {}
      if (!_0x2e2544 || !/^\d+\.\d+$/.test(_0x2e2544)) {
        _0x2e2544 = Math.floor(Math.random() * 2147483647) + "." + Math.floor(Date.now() / 1000);
        try {
          localStorage.setItem("xoi_cid", _0x2e2544);
        } catch (_0x50b758) {}
      }
      return _0x2e2544;
    },
    init() {
      try {
        const _0x1d6cf7 = this.platform();
        const _0x4991fc = location.hostname;
        const _0x4a02a9 = location.protocol;
        if (_0x4bf46a || _0x1d6cf7 === "web" && (_0x4a02a9 === "file:" || _0x4991fc === "localhost" || _0x4991fc === "127.0.0.1") || navigator.webdriver) {
          return;
        }
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
          window.dataLayer.push(arguments);
        };
        const _0x5793b0 = String(window.GAME_V || "");
        gtag("js", new Date());
        gtag("set", "user_properties", {
          platform: _0x1d6cf7,
          game_version: _0x5793b0
        });
        gtag("config", _0x260b44, {
          client_storage: "none",
          client_id: this.cid(),
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
          page_title: "Tiệm Xôi Bà Tám",
          page_location: _0x1d6cf7 === "web" ? location.origin + location.pathname : "https://tiemxoibatam.io.vn/app/" + _0x1d6cf7,
          app_version: _0x5793b0,
          platform: _0x1d6cf7
        });
        const _0x2f4e24 = document.createElement("script");
        _0x2f4e24.async = true;
        _0x2f4e24.src = "https://www.googletagmanager.com/gtag/js?id=" + _0x260b44;
        _0x2f4e24.onerror = () => {};
        document.head.appendChild(_0x2f4e24);
        this.on = true;
      } catch (_0x36ec7f) {}
    },
    ev(_0x3153eb, _0xb04412) {
      if (this.on) {
        try {
          gtag("event", _0x3153eb, _0xb04412 || {});
        } catch (_0x5ceb38) {}
      }
    }
  };
  const _0x126481 = _0x1d672b("#app");
  const _0x55ee07 = _0x1d672b("#ui");
  const _0xaf18a = _0x1d672b("#hud");
  const _0x336c76 = _0x1d672b("#floats");
  const _0x1a26f6 = _0x1d672b("#dialog");
  const _0x517a28 = _0x1d672b("#modal");
  const _0x1e9361 = _0x1d672b("#fade");
  let _0xbf5ed7 = null;
  const _0x19e10f = {
    screen: null,
    t: 0,
    paused: false,
    scr: {}
  };
  const _0x57fd62 = 430;
  const _0x4ff393 = 300;
  function _0x526de6() {
    const _0x5ba625 = getComputedStyle(document.body);
    const _0x49c301 = window.innerWidth;
    const _0x467cc3 = window.innerHeight - (parseFloat(_0x5ba625.paddingTop) || 0) - (parseFloat(_0x5ba625.paddingBottom) || 0);
    const _0x383fd6 = window.matchMedia && matchMedia("(pointer: coarse)").matches ? Math.max(_0x57fd62, Math.min(_0x49c301, _0x467cc3 * 0.55)) : _0x57fd62;
    let _0x3580d3 = Math.min(_0x49c301, _0x383fd6) / _0xc10b19;
    if (_0x467cc3 / _0x3580d3 < _0x4ff393) {
      _0x3580d3 = _0x467cc3 / _0x4ff393;
    }
    _0x2d0f1c = Math.max(_0x4ff393, Math.ceil(_0x467cc3 / _0x3580d3));
    _0x126481.style.setProperty("--u", _0x3580d3 + "px");
    _0x126481.style.width = _0xc10b19 * _0x3580d3 + "px";
    _0x126481.style.height = _0x467cc3 + "px";
    if (_0x2181e3.height !== _0x2d0f1c) {
      _0x2181e3.height = _0x2d0f1c;
      _0xca5277.imageSmoothingEnabled = false;
    }
  }
  window.addEventListener("resize", _0x526de6);
  function _0x3e830f() {
    return _0x346d59(_0x33f511());
  }
  function _0x33f511() {
    const _0x15fd78 = {};
    for (const _0x4706c9 in _0x199e77) {
      _0x15fd78[_0x4706c9] = 0;
    }
    Object.assign(_0x15fd78, {
      nep: 2,
      doxanh: 1,
      lac: 1,
      vung: 1,
      dua: 1
    });
    const _0x100bd3 = {};
    for (const _0x48f692 in _0xaa20ba) {
      _0x100bd3[_0x48f692] = _0xaa20ba[_0x48f692].suggest;
    }
    return {
      v: 1,
      day: 1,
      money: _0x36181d,
      debt: _0x360fea,
      rep: 3,
      stock: _0x15fd78,
      cooked: {},
      prices: _0x100bd3,
      unlocked: ["doxanh", "lac", "gac", "ladua"],
      ledger: [],
      reviews: [],
      priceMul: {},
      flags: {},
      freeMode: false,
      totalServed: 0,
      upg: {},
      ach: {},
      stats: null,
      chapter: 1,
      ch2: 0
    };
  }
  const _0x9dfcb7 = "xoi_bt_save";
  const _0x4cb0c7 = "xoi_fmt";
  function _0x2e4dc9(_0x1a2649) {
    const _0x5c3d5e = "bà-tám#xôi$" + _0x1a2649 + "|" + _0x1a2649.length + "|ai-mua-xôi";
    let _0x4c3b70 = 2166136261;
    let _0x4b2991 = 2654435769;
    for (let _0x5237ea = 0; _0x5237ea < _0x5c3d5e.length; _0x5237ea++) {
      const _0x40b840 = _0x5c3d5e.charCodeAt(_0x5237ea);
      _0x4c3b70 = Math.imul(_0x4c3b70 ^ _0x40b840, 16777619);
      _0x4b2991 = Math.imul(_0x4b2991 ^ _0x40b840 + _0x5237ea, 2246822507);
      _0x4b2991 ^= _0x4b2991 >>> 13;
    }
    return (_0x4c3b70 >>> 0).toString(36) + "." + (_0x4b2991 >>> 0).toString(36);
  }
  const _0x25c2d1 = _0x4195d2 => btoa(unescape(encodeURIComponent(_0x4195d2)));
  const _0x19f684 = _0x524dfa => decodeURIComponent(escape(atob(_0x524dfa)));
  const _0x3a075c = _0x9dfcb7 + "_bak";
  function _0x1eb5c3() {
    const _0x44d97d = JSON.stringify(_0xbf5ed7);
    return JSON.stringify({
      f: 2,
      d: _0x25c2d1(_0x44d97d),
      h: _0x2e4dc9(_0x44d97d),
      t: Date.now()
    });
  }
  function _0x690d06() {
    if (!_0xbf5ed7 || _0x5dcab6 && location.hostname !== "localhost") {
      return;
    }
    let _0x4a63e9 = null;
    try {
      _0x4a63e9 = _0x1eb5c3();
    } catch (_0x2a1705) {
      return;
    }
    try {
      const _0x781303 = localStorage.getItem(_0x9dfcb7);
      if (_0x781303 && _0x781303 !== _0x4a63e9 && _0x3b4881(_0x781303, true)) {
        localStorage.setItem(_0x3a075c, _0x781303);
      }
      localStorage.setItem(_0x9dfcb7, _0x4a63e9);
      localStorage.setItem(_0x4cb0c7, "2");
    } catch (_0x32cbf8) {}
    _0x4356d4.put(_0x4a63e9);
  }
  let _0x1480c4 = false;
  let _0x3d49a1 = null;
  function _0x3b4881(_0x116e77, _0x18e5bb) {
    try {
      const _0x32598f = JSON.parse(_0x116e77);
      let _0x2a5b99 = null;
      if (_0x32598f && _0x32598f.f === 2 && typeof _0x32598f.d == "string") {
        const _0xc6a583 = _0x19f684(_0x32598f.d);
        if (_0x2e4dc9(_0xc6a583) !== _0x32598f.h) {
          return null;
        }
        _0x2a5b99 = JSON.parse(_0xc6a583);
      } else if (_0x32598f && _0x32598f.v === 1) {
        let _0x3606bf = null;
        try {
          _0x3606bf = localStorage.getItem(_0x4cb0c7);
        } catch (_0x2120f7) {}
        if (_0x3606bf === "2" || _0x4356d4.cache) {
          return null;
        }
        _0x2a5b99 = _0x32598f;
      }
      if (!_0x2a5b99 || _0x2a5b99.v !== 1) {
        return null;
      } else if (_0x18e5bb) {
        return true;
      } else {
        return _0x346d59(_0x588182(_0x2a5b99));
      }
    } catch (_0x544b36) {
      return null;
    }
  }
  function _0x4c2010() {
    _0x1480c4 = false;
    _0x3d49a1 = null;
    let _0x4ed2dc = null;
    let _0x110a4f = null;
    try {
      _0x4ed2dc = localStorage.getItem(_0x9dfcb7);
      _0x110a4f = localStorage.getItem(_0x3a075c);
    } catch (_0x4b7191) {}
    const _0x45d349 = _0x4ed2dc && _0x3b4881(_0x4ed2dc);
    if (_0x45d349) {
      return _0x45d349;
    }
    const _0x23dfa5 = _0x110a4f && _0x3b4881(_0x110a4f);
    if (_0x23dfa5) {
      _0x3d49a1 = "bak";
      return _0x23dfa5;
    }
    const _0x5aa998 = _0x4356d4.cache && _0x3b4881(_0x4356d4.cache);
    if (_0x5aa998) {
      _0x3d49a1 = "idb";
      return _0x5aa998;
    } else {
      if (_0x4ed2dc) {
        _0x1480c4 = true;
      }
      return null;
    }
  }
  const _0x4356d4 = {
    db: null,
    cache: null,
    t: 0,
    open() {
      return new Promise(_0x5e1ac8 => {
        try {
          const _0x1c6e7b = indexedDB.open("xoi_bt", 1);
          _0x1c6e7b.onupgradeneeded = () => _0x1c6e7b.result.createObjectStore("kv");
          _0x1c6e7b.onsuccess = () => {
            this.db = _0x1c6e7b.result;
            _0x5e1ac8(this.db);
          };
          _0x1c6e7b.onerror = _0x1c6e7b.onblocked = () => _0x5e1ac8(null);
        } catch (_0x26a1c1) {
          _0x5e1ac8(null);
        }
      });
    },
    load() {
      return this.open().then(_0xa6c429 => new Promise(_0x44e500 => {
        if (!_0xa6c429) {
          return _0x44e500(null);
        }
        try {
          const _0x581171 = _0xa6c429.transaction("kv").objectStore("kv").get("save");
          _0x581171.onsuccess = () => {
            this.cache = typeof _0x581171.result == "string" ? _0x581171.result : null;
            _0x44e500(this.cache);
          };
          _0x581171.onerror = () => _0x44e500(null);
        } catch (_0x509a3a) {
          _0x44e500(null);
        }
      }));
    },
    put(_0x5519a7) {
      this.cache = _0x5519a7;
      clearTimeout(this.t);
      this.t = setTimeout(() => {
        if (this.db) {
          try {
            this.db.transaction("kv", "readwrite").objectStore("kv").put(_0x5519a7, "save");
          } catch (_0x455bd9) {}
        }
      }, 500);
    },
    clear() {
      this.cache = null;
      clearTimeout(this.t);
      try {
        if (this.db) {
          this.db.transaction("kv", "readwrite").objectStore("kv").delete("save");
        }
      } catch (_0xfdec98) {}
    }
  };
  function _0x4ce74b() {
    try {
      localStorage.removeItem(_0x9dfcb7);
      localStorage.removeItem(_0x3a075c);
    } catch (_0x2d1939) {}
    _0x4356d4.clear();
  }
  function _0x588182(_0xb0f49c) {
    const _0x10e75a = (_0x3c038d, _0x570572, _0x2b1773, _0x15e87b = 0) => typeof _0x3c038d == "number" && isFinite(_0x3c038d) ? Math.min(_0x2b1773, Math.max(_0x570572, _0x3c038d)) : _0x15e87b;
    const _0x374c1b = (_0x411383, _0x58792b, _0x229ad1, _0x3e8b93 = 0) => Math.round(_0x10e75a(_0x411383, _0x58792b, _0x229ad1, _0x3e8b93));
    const _0x21082a = _0x532b4b => _0x532b4b && typeof _0x532b4b == "object" && !Array.isArray(_0x532b4b) ? _0x532b4b : {};
    const _0x4e8e75 = (_0x18a5e8, _0x5a1851, _0x49a774, _0x42d961) => {
      const _0x3c57c0 = {};
      _0x18a5e8 = _0x21082a(_0x18a5e8);
      for (const _0x19d7f7 of _0x5a1851) {
        if (_0x19d7f7 in _0x18a5e8) {
          _0x3c57c0[_0x19d7f7] = _0x10e75a(_0x18a5e8[_0x19d7f7], _0x49a774, _0x42d961);
        }
      }
      return _0x3c57c0;
    };
    const _0xaa4dec = {
      v: 1,
      day: _0x374c1b(_0xb0f49c.day, 1, 1000000, 1),
      money: _0x10e75a(_0xb0f49c.money, -10000000000, 1000000000000),
      debt: _0x10e75a(_0xb0f49c.debt, 0, 1000000000000),
      rep: _0x10e75a(_0xb0f49c.rep, 0, 5, 3),
      stock: _0x4e8e75(_0xb0f49c.stock, Object.keys(_0x199e77), 0, 1000000),
      cooked: _0x4e8e75(_0xb0f49c.cooked, Object.keys(_0xaa20ba), 0, 1000000),
      prices: _0x4e8e75(_0xb0f49c.prices, Object.keys(_0xaa20ba), 1000, 1000000),
      priceMul: _0x4e8e75(_0xb0f49c.priceMul, Object.keys(_0x199e77), 0.5, 3),
      unlocked: Array.isArray(_0xb0f49c.unlocked) ? [...new Set(_0xb0f49c.unlocked.filter(_0x384dbb => _0x384dbb in _0xaa20ba))] : [],
      ledger: (Array.isArray(_0xb0f49c.ledger) ? _0xb0f49c.ledger : []).slice(-60).map(_0xf9d74d => {
        const _0x47076b = {};
        for (const _0x39c18f of ["day", "revenue", "tips", "cost", "fee", "fines", "fineTax", "fineQltt", "fineTtp", "fineVs", "cash", "net", "served", "lost", "rent", "tax"]) {
          _0x47076b[_0x39c18f] = _0x10e75a(_0x21082a(_0xf9d74d)[_0x39c18f], -1000000000000, 1000000000000);
        }
        return _0x47076b;
      }),
      reviews: (Array.isArray(_0xb0f49c.reviews) ? _0xb0f49c.reviews : []).slice(-30).map(_0x462a3f => ({
        s: _0x374c1b(_0x21082a(_0x462a3f).s, 1, 5, 3),
        t: String(_0x21082a(_0x462a3f).t || "").slice(0, 80),
        who: String(_0x21082a(_0x462a3f).who || "").slice(0, 30),
        day: _0x374c1b(_0x21082a(_0x462a3f).day, 0, 1000000)
      })),
      flags: {},
      freeMode: !!_0xb0f49c.freeMode,
      totalServed: _0x374c1b(_0xb0f49c.totalServed, 0, 1000000000),
      dayDone: !!_0xb0f49c.dayDone,
      upg: {},
      ach: {},
      stats: null,
      chapter: _0x374c1b(_0xb0f49c.chapter, 0, 5),
      ch2: _0x374c1b(_0xb0f49c.ch2, 0, _0x463ee.length),
      ch3: _0x374c1b(_0xb0f49c.ch3, 0, 1),
      ch4: _0x374c1b(_0xb0f49c.ch4, 0, 2),
      ch5: _0x374c1b(_0xb0f49c.ch5, 0, 1),
      app: _0x10e75a(_0xb0f49c.app, 1, 5, 4.5),
      rentDue: _0x374c1b(_0xb0f49c.rentDue, 0, 1000000),
      taxReg: !!_0xb0f49c.taxReg,
      guard: !!_0xb0f49c.guard,
      teo: !!_0xb0f49c.teo,
      order: null,
      rob: _0xb0f49c.rob && _0x21082a(_0xb0f49c.rob).day ? {
        day: _0x374c1b(_0x21082a(_0xb0f49c.rob).day, 0, 1000000),
        amt: _0x10e75a(_0x21082a(_0xb0f49c.rob).amt, 0, 1000000000000),
        upg: {}
      } : null,
      bank: _0xb0f49c.bank && _0x10e75a(_0x21082a(_0xb0f49c.bank).amt, 0, 1000000000000) > 0 ? {
        amt: _0x10e75a(_0x21082a(_0xb0f49c.bank).amt, 0, 1000000000000),
        next: _0x374c1b(_0x21082a(_0xb0f49c.bank).next, 0, 1000000)
      } : null,
      dep: (Array.isArray(_0xb0f49c.dep) ? _0xb0f49c.dep : []).filter(_0x38a87f => _0x3ecba3.includes(_0x21082a(_0x38a87f).a) && _0x2ce111[_0x21082a(_0x38a87f).t]).slice(0, _0x593364).map(_0x43c535 => ({
        a: _0x43c535.a,
        t: _0x43c535.t,
        d: _0x374c1b(_0x43c535.d, 0, 1000000)
      }))
    };
    if (!_0xaa4dec.unlocked.length) {
      _0xaa4dec.unlocked = ["doxanh", "lac", "gac", "ladua"];
    }
    for (const _0x120f02 in _0x21082a(_0xb0f49c.flags)) {
      if (/^[a-zA-Z][a-zA-Z0-9]{0,11}$/.test(_0x120f02)) {
        const _0x1d049d = _0xb0f49c.flags[_0x120f02];
        _0xaa4dec.flags[_0x120f02] = typeof _0x1d049d == "number" ? _0x10e75a(_0x1d049d, -1000000, 1000000) : !!_0x1d049d;
      }
    }
    for (const _0x157e70 in _0x2be998) {
      if (_0x21082a(_0xb0f49c.upg)[_0x157e70]) {
        _0xaa4dec.upg[_0x157e70] = _0x374c1b(_0xb0f49c.upg[_0x157e70], 0, _0x2be998[_0x157e70].max || _0x2be998[_0x157e70].cost.length);
      }
    }
    if (_0xaa4dec.rob) {
      for (const _0xd837f6 in _0x21082a(_0x21082a(_0xb0f49c.rob).upg)) {
        if (_0x2be998[_0xd837f6]) {
          _0xaa4dec.rob.upg[_0xd837f6] = _0x374c1b(_0xb0f49c.rob.upg[_0xd837f6], 0, _0x2be998[_0xd837f6].max || _0x2be998[_0xd837f6].cost.length);
        }
      }
    }
    for (const _0x78e450 of _0x32ee96) {
      if (_0x21082a(_0xb0f49c.ach)[_0x78e450.id]) {
        _0xaa4dec.ach[_0x78e450.id] = _0x374c1b(_0xb0f49c.ach[_0x78e450.id], 1, 1000000, 1);
      }
    }
    const _0x29d5c7 = _0x21082a(_0xb0f49c.stats);
    _0xaa4dec.stats = {
      served: _0x374c1b(_0x29d5c7.served, 0, 1000000000),
      caught: _0x374c1b(_0x29d5c7.caught, 0, 1000000),
      escaped: _0x374c1b(_0x29d5c7.escaped, 0, 1000000),
      perfect: _0x374c1b(_0x29d5c7.perfect, 0, 1000000),
      bestNet: _0x10e75a(_0x29d5c7.bestNet, -1000000000000, 1000000000000),
      soldOut: _0x374c1b(_0x29d5c7.soldOut, 0, 1000000),
      rainBest: _0x374c1b(_0x29d5c7.rainBest, 0, 1000000),
      thiefCaught: _0x374c1b(_0x29d5c7.thiefCaught, 0, 1000000),
      forgive: _0x374c1b(_0x29d5c7.forgive, 0, 1000000),
      dish: _0x4e8e75(_0x29d5c7.dish, Object.keys(_0xaa20ba), 0, 1000000000)
    };
    _0xaa4dec.br = (Array.isArray(_0xb0f49c.br) ? _0xb0f49c.br : []).slice(0, 3).map((_0x16c945, _0x178a7f) => ({
      n: _0x178a7f,
      m: _0x21082a(_0x16c945).m === "lanh" ? "lanh" : "that",
      d: _0x374c1b(_0x21082a(_0x16c945).d, 0, 1000000),
      tot: _0x10e75a(_0x21082a(_0x16c945).tot, 0, 10000000000000),
      last: _0x21082a(_0x16c945).last == null ? null : _0x10e75a(_0x21082a(_0x16c945).last, 0, 10000000000)
    }));
    const _0x1efa9a = _0x21082a(_0xb0f49c.rv4);
    _0xaa4dec.rv4 = _0xb0f49c.rv4 ? {
      day: _0x374c1b(_0x1efa9a.day, 0, 1000000),
      bust: _0x374c1b(_0x1efa9a.bust, 0, 1000000),
      strat: ["giam", "giu", "dacbiet"].includes(_0x1efa9a.strat) ? _0x1efa9a.strat : null
    } : null;
    for (const _0x20a501 of ["app", "viral", "vsPass", "rivalWin", "copWin"]) {
      _0xaa4dec.stats[_0x20a501] = _0x374c1b(_0x29d5c7[_0x20a501], 0, 1000000);
    }
    const _0x488b11 = _0x21082a(_0xb0f49c.order);
    if (_0x488b11.x in _0xaa20ba) {
      _0xaa4dec.order = {
        x: _0x488b11.x,
        qty: _0x374c1b(_0x488b11.qty, 1, 500),
        pay: _0x10e75a(_0x488b11.pay, 0, 1000000000),
        day: _0x374c1b(_0x488b11.day, 0, 1000000),
        who: String(_0x488b11.who || "").slice(0, 40),
        done: !!_0x488b11.done
      };
    }
    const _0x4c9210 = _0x21082a(_0xb0f49c.today);
    _0xaa4dec.today = {
      cost: _0x10e75a(_0x4c9210.cost, 0, 1000000000000),
      fee: _0x10e75a(_0x4c9210.fee, 0, 1000000000),
      rep0: _0x10e75a(_0x4c9210.rep0, 0, 5, _0xaa4dec.rep),
      day: _0x374c1b(_0x4c9210.day, 0, 1000000),
      rent: _0x10e75a(_0x4c9210.rent, 0, 1000000000000),
      tax: _0x10e75a(_0x4c9210.tax, 0, 1000000000000),
      bank: _0x10e75a(_0x4c9210.bank, 0, 1000000000000),
      recover: _0x10e75a(_0x4c9210.recover, 0, 1000000000000),
      orderQty: _0x374c1b(_0x4c9210.orderQty, 0, 1000000),
      gdPay: _0x10e75a(_0x4c9210.gdPay, 0, 1000000000),
      save: _0x10e75a(_0x4c9210.save, 0, 10000000000),
      hospital: _0x10e75a(_0x4c9210.hospital, 0, 10000000000000),
      donate: _0x10e75a(_0x4c9210.donate, 0, 1000000000000)
    };
    return _0xaa4dec;
  }
  const _0x1ff737 = _0x3cbdf9 => String(_0x3cbdf9).replace(/[&<>"']/g, _0x14f0df => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[_0x14f0df]);
  function _0x1c3a1b() {
    _0xbf5ed7.priceMul = {};
    for (const _0x265812 in _0x199e77) {
      _0xbf5ed7.priceMul[_0x265812] = Math.round(_0x3d90fc(0.8, 1.25) * 20) / 20;
    }
  }
  const _0x426676 = _0x5e0174 => Math.round(_0x199e77[_0x5e0174].price * (_0xbf5ed7.priceMul[_0x5e0174] || 1) * _0x599ca4() / 1000) * 1000;
  const _0x5511de = _0x376fc1 => _0xaa20ba[_0x376fc1].ing.reduce((_0x46a365, _0x554372) => _0x46a365 + _0x426676(_0x554372), 0);
  const _0xd98242 = _0x3e6be5 => Math.round(_0x5511de(_0x3e6be5) / _0x5e168c / 500) * 500;
  function _0x58a015(_0x285a00, _0x559a48) {
    _0x1e9361.classList.add("on");
    setTimeout(() => {
      if (_0x19e10f.screen && _0x19e10f.scr[_0x19e10f.screen].exit) {
        _0x19e10f.scr[_0x19e10f.screen].exit();
      }
      _0x55ee07.innerHTML = "";
      _0x336c76.innerHTML = "";
      _0x55ee07.className = "scr-" + _0x285a00;
      _0x19e10f.screen = _0x285a00;
      _0x19e10f.scr[_0x285a00].enter(_0x559a48);
      _0x1e9361.classList.remove("on");
    }, 260);
  }
  function _0x5985e5(_0x2530ef) {
    let _0x35363a = "";
    for (let _0x3fcd2d = 0; _0x3fcd2d < 5; _0x3fcd2d++) {
      _0x35363a += _0x1525be(_0x2530ef >= _0x3fcd2d + 0.5 ? "ico_star" : "ico_star0", "ico star");
    }
    return _0x35363a;
  }
  function _0x5f18ca(_0x48d501 = "") {
    _0xaf18a.classList.remove("hidden");
    const _0x45f6ff = _0xbf5ed7.freeMode ? "Ngày " + _0xbf5ed7.day : "Ngày " + _0xbf5ed7.day + "/" + _0x3777d0;
    _0xaf18a.innerHTML = "\n    <div class=\"hud-l\"><span class=\"day\">" + _0x45f6ff + "</span><span class=\"stars\">" + _0x5985e5(_0xbf5ed7.rep) + "</span></div>\n    <div class=\"hud-c\">" + _0x48d501 + "</div>\n    <div class=\"hud-r\">\n      <span class=\"money\">" + _0x1525be("ico_coin") + "<b>" + _0x9c212e(_0xbf5ed7.money) + "</b></span>\n      <button class=\"hbtn\" id=\"hLedger\">" + _0x1525be("ico_book") + "</button>\n      <button class=\"hbtn\" id=\"hSound\">" + _0x1525be(_0x4d92fd.muted ? "ico_mute" : "ico_sound") + "</button>\n    </div>\n    " + (_0xbf5ed7.debt > 0 ? "<div class=\"debt\">" + (_0xbf5ed7.chapter >= 2 ? "Còn nợ" : "Nợ Cả Bá") + ": <b>" + _0x9c212e(_0xbf5ed7.debt) + "</b></div>" : _0xbf5ed7.chapter >= 2 && !/^summary/.test(_0x19e10f.screen) ? "<div class=\"debt goalline\" id=\"hGoal\">" + _0x3ae0cb() + "</div>" : "");
    _0x1d672b("#hLedger").onclick = () => {
      _0x4d92fd.play("click");
      _0x33791f();
    };
    _0x1d672b("#hSound").onclick = () => {
      _0x4d92fd.play("click");
      _0x191967(() => _0x5f18ca(_0x48d501));
    };
    const _0x2200f1 = _0x1d672b("#hGoal");
    if (_0x2200f1) {
      _0x2200f1.onclick = () => {
        _0x4d92fd.play("click");
        _0x36b3fa(_0x19e10f.screen === "kitchen" ? "kitchen" : _0x19e10f.screen === "summary" || _0x19e10f.screen === "summary2" ? "summary2" : null);
      };
    }
  }
  function _0x257142() {
    const _0x4b0528 = _0x1d672b(".hud-r .money b");
    if (_0x4b0528) {
      _0x4b0528.textContent = _0x9c212e(_0xbf5ed7.money);
      _0x4b0528.parentElement.classList.remove("bump");
      _0x4b0528.offsetWidth;
      _0x4b0528.parentElement.classList.add("bump");
    }
  }
  function _0x190ed7() {
    const _0x429ce3 = _0x1d672b(".hud-l .stars");
    if (_0x429ce3) {
      _0x429ce3.innerHTML = _0x5985e5(_0xbf5ed7.rep);
    }
  }
  function _0x191967(_0x6afab) {
    const _0x2eae22 = (_0x18e2bd, _0xc97708, _0x10d56e, _0x363bed) => "<div class=\"urow\"><div class=\"ut\"><b>" + _0xc97708 + "</b><small>" + _0x10d56e + "</small></div>\n    <button class=\"btn " + (_0x363bed ? "green" : "grey") + " small\" id=\"" + _0x18e2bd + "\">" + (_0x363bed ? "Đang bật" : "Đang tắt") + "</button></div>";
    _0x57f03a(_0x1525be(_0x4d92fd.muted ? "ico_mute" : "ico_sound") + " Âm thanh", "<div class=\"ulist\">\n      " + _0x2eae22("sMus", "Nhạc nền", "Nhạc ở màn chính, bếp, chợ", !_0x4d92fd.musicOff) + "\n      " + _0x2eae22("sSfx", "Tiếng hiệu ứng", "Đồ xôi, gói lá, bán xôi, tiền rơi, khách gọi ...", !_0x4d92fd.sfxOff) + "\n      " + _0x2eae22("sMix", "Mở nhạc App khác", "Bật tắt nhạc của ứng dụng khác cùng lúc", _0x4d92fd.mix) + "\n    </div>\n    <p class=\"muted\">Nếu bật rồi mà vẫn không nghe tiếng thì xem lại âm lượng" + (_0x4d92fd.mix ? ", nút gạt im lặng (hoặc tắt \"Mở nhạc App khác\")" : " và nút gạt im lặng") + ".</p>\n    <p class=\"muted\" id=\"sStat\">" + _0x4d92fd.status() + "</p>", [{
      label: "Thử tiếng",
      cls: "gold",
      keep: true,
      fn: () => {
        _0x4d92fd.play("coin");
        setTimeout(() => _0x4d92fd.play("pop"), 250);
      }
    }, {
      label: "Xong",
      cls: "red",
      fn: _0x6afab
    }], "paper");
    setTimeout(() => {
      const _0x1c343f = _0x517a28.querySelector("#sStat");
      if (_0x1c343f) {
        _0x1c343f.textContent = _0x4d92fd.status();
      }
    }, 400);
    _0x517a28.querySelector("#sMus").onclick = () => {
      _0x4d92fd.setMusic(_0x4d92fd.musicOff);
      if (!_0x4d92fd.musicOff && !_0x4d92fd.bgm) {
        _0x4d92fd.music(_0x4d92fd.bgmName || "bgm_title");
      }
      _0x191967(_0x6afab);
    };
    _0x517a28.querySelector("#sMix").onclick = () => {
      _0x4d92fd.setMix(!_0x4d92fd.mix);
      _0x191967(_0x6afab);
    };
    _0x517a28.querySelector("#sSfx").onclick = () => {
      _0x4d92fd.setSfx(_0x4d92fd.sfxOff);
      if (!_0x4d92fd.sfxOff) {
        _0x4d92fd.play("click");
      }
      _0x191967(_0x6afab);
    };
  }
  function _0x9a2638(_0x40d8d0, _0xd52079, _0x4bb564, _0xb93e95 = "") {
    const _0x22bf1d = _0x5ae569("div", "float " + _0xb93e95, _0x4bb564);
    _0x22bf1d.style.left = "calc(var(--u) * " + _0x40d8d0 + ")";
    _0x22bf1d.style.top = "calc(var(--u) * " + _0xd52079 + ")";
    _0x336c76.appendChild(_0x22bf1d);
    setTimeout(() => _0x22bf1d.remove(), 1300);
  }
  function _0x991d3e(_0x2d60c1, _0x38e79d = "") {
    _0x336c76.querySelectorAll(".toast").forEach(_0x3b7724 => _0x3b7724.remove());
    const _0x2baa49 = _0x5ae569("div", "toast " + _0x38e79d, _0x2d60c1);
    _0x336c76.appendChild(_0x2baa49);
    setTimeout(() => _0x2baa49.remove(), 2200);
  }
  let _0x2aedb1 = null;
  function _0x39c0d1(_0x25ce19, _0x2cd11e) {
    _0x19e10f.paused = true;
    _0x2aedb1 = {
      lines: _0x25ce19,
      i: 0,
      done: _0x2cd11e,
      typing: false,
      full: ""
    };
    _0x1a26f6.classList.remove("hidden");
    _0x404fb4();
  }
  function _0x404fb4() {
    let _0x10a900 = _0x2aedb1.lines[_0x2aedb1.i];
    if (_0x10a900.ti && _0xe9a99e()) {
      _0x10a900 = Object.assign({}, _0x10a900, {
        who: _0x10a900.tiWho !== undefined ? _0x10a900.tiWho : "ti",
        text: _0x10a900.ti
      });
    }
    if (_0x10a900.bg) {
      _0x19e10f.storyBg = _0x10a900.bg;
    }
    _0x19e10f.storyWho = _0x10a900.who;
    _0x19e10f.storyFx = _0x10a900.fx || null;
    const _0xa7ea81 = _0x10a900.who ? _0xe04ef[_0x10a900.who] : null;
    _0x1a26f6.innerHTML = "\n    <div class=\"dlg-box " + (_0xa7ea81 ? "" : "narr") + "\">\n      " + (_0xa7ea81 ? "<div class=\"pf\"><img src=\"" + _0xad1d39(_0x10a900.who) + "\"></div><div class=\"nm\">" + _0xa7ea81.name + "</div>" : "") + "\n      <div class=\"tx\"></div>\n      <div class=\"more\">▼</div>\n    </div>";
    const _0x170390 = _0x1d672b(".tx", _0x1a26f6);
    _0x2aedb1.full = _0x10a900.text;
    _0x2aedb1.typing = true;
    _0x1a26f6.classList.remove("ready");
    let _0x581815 = 0;
    const _0x928f51 = _0x2aedb1;
    clearInterval(_0x928f51.iv);
    _0x928f51.iv = setInterval(() => {
      if (_0x2aedb1 !== _0x928f51) {
        clearInterval(_0x928f51.iv);
        return;
      }
      _0x581815 += 1;
      _0x170390.textContent = _0x10a900.text.slice(0, _0x581815);
      if (_0x581815 % 4 === 0 && _0x10a900.who) {
        _0x4d92fd.tick("click", 0.25);
      }
      if (_0x581815 >= _0x10a900.text.length) {
        clearInterval(_0x928f51.iv);
        _0x928f51.typing = false;
        _0x928f51.doneAt = performance.now();
        _0x1a26f6.classList.add("ready");
      }
    }, 18);
    if (_0x10a900.unlock && !_0xbf5ed7.unlocked.includes(_0x10a900.unlock)) {
      _0xbf5ed7.unlocked.push(_0x10a900.unlock);
      setTimeout(() => _0x991d3e("Học được món mới: " + _0xaa20ba[_0x10a900.unlock].name + "!", "good"), 300);
      _0x4d92fd.play("happy");
    }
    if (_0x10a900.festival) {
      _0xbf5ed7.flags.festival = _0xbf5ed7.day;
    }
    if (_0x10a900.rain) {
      _0xbf5ed7.flags.rain = _0xbf5ed7.day;
    }
  }
  _0x1a26f6.addEventListener("pointerdown", _0x431a5b => {
    if (_0x2aedb1 && (_0x431a5b.preventDefault(), !_0x2aedb1.typing && !(performance.now() - (_0x2aedb1.doneAt || 0) < 200))) {
      _0x2aedb1.i++;
      if (_0x2aedb1.i >= _0x2aedb1.lines.length) {
        const _0x49a8c7 = _0x2aedb1.done;
        _0x2aedb1 = null;
        _0x1a26f6.classList.add("hidden");
        _0x19e10f.paused = false;
        _0x19e10f.storyWho = null;
        _0x19e10f.storyFx = null;
        if (_0x49a8c7) {
          _0x49a8c7();
        }
      } else {
        _0x404fb4();
      }
    }
  });
  function _0x57f03a(_0x46a386, _0x312a96, _0x57bbe9, _0x4884d7 = "") {
    _0x19e10f.paused = true;
    const _0x13cb2f = !_0x517a28.classList.contains("hidden") && !!_0x517a28.firstElementChild;
    _0x517a28.classList.remove("hidden");
    _0x517a28.innerHTML = "<div class=\"mbox " + _0x4884d7 + (_0x13cb2f ? " still" : "") + "\"><div class=\"mt\">" + _0x46a386 + "</div><div class=\"mb\">" + _0x312a96 + "</div><div class=\"mbtns\"></div></div>";
    const _0x504e10 = _0x1d672b(".mbtns", _0x517a28);
    for (const _0x4a9b41 of _0x57bbe9) {
      const _0x2bd5e0 = _0x5ae569("button", "btn " + (_0x4a9b41.cls || "gold"), _0x4a9b41.label);
      _0x2bd5e0.onclick = () => {
        _0x4d92fd.play("click");
        if (_0x4a9b41.keep) {
          if (_0x4a9b41.fn) {
            _0x4a9b41.fn();
          }
          return;
        }
        _0x543cdd();
        if (_0x4a9b41.fn) {
          _0x4a9b41.fn();
        }
      };
      _0x504e10.appendChild(_0x2bd5e0);
    }
    return _0x517a28;
  }
  function _0x543cdd() {
    _0x517a28.classList.add("hidden");
    _0x517a28.innerHTML = "";
    if (!_0x2aedb1) {
      _0x19e10f.paused = false;
    }
  }
  const _0x3613cf = () => "Bản quyền Threads @nomorewaiting___ | Ver " + String(window.GAME_V || "dev").replace(/[^\w.\-]/g, "");
  const _0x5164fb = "https://tiktok.com/@tiemxoibatam";
  const _0x1bafe9 = "https://threads.com/@nomorewaiting___";
  const _0x43289a = "https://facebook.com/groups/tiemxoibatam";
  const _0x292c65 = [["Pixel Art", "PixAssets"], ["Programming", "Dung Chan"], ["Game Design", "Dung Chan"], ["Animation", "PixAssets"], ["Story & Writing", "Dung Chan"], ["UI/UX", "Dung Chan"], ["Level Design", "Dung Chan"], ["Sound Effects & Font", "Open License"]];
  function _0x4faca5(_0x45e864) {
    _0x57f03a(_0x1525be("port_batam") + " Thông tin", "<div class=\"credits\">" + _0x292c65.map(([_0x40939d, _0x50fbca]) => "<div class=\"kv\"><span>" + _0x40939d + "</span><b>" + _0x50fbca + "</b></div>").join("") + "</div>\n    <p class=\"center\">Theo dõi Tiệm Xôi Bà Tám trên TikTok tại<br><b>tiktok.com/@tiemxoibatam</b></p>", [{
      label: "Tham gia Telegram",
      cls: "blue half",
      keep: true,
      fn: () => {
        _0x463590.ev("join_group", {
          from: "info",
          to: "telegram"
        });
        _0x4366b3(_0x35199c);
      }
    }, {
      label: "Tham gia Facebook",
      cls: "blue half",
      keep: true,
      fn: () => {
        _0x463590.ev("join_group", {
          from: "info",
          to: "facebook"
        });
        _0x4366b3(_0x43289a);
      }
    }, {
      label: "Mở TikTok",
      cls: "red half",
      keep: true,
      fn: () => {
        _0x463590.ev("tiktok", {
          from: "info"
        });
        _0x4366b3(_0x5164fb);
      }
    }, {
      label: "Mở Threads",
      cls: "green half",
      keep: true,
      fn: () => {
        _0x463590.ev("threads", {
          from: "info"
        });
        _0x4366b3(_0x1bafe9);
      }
    }, {
      label: "Quay lại",
      cls: "grey",
      fn: _0x45e864
    }], "paper");
    _0x1d672b(".mbox", _0x517a28).insertAdjacentHTML("beforeend", "<div class=\"mcredit\">" + _0x3613cf() + "</div>");
  }
  function _0x33791f() {
    const _0x162041 = _0xbf5ed7.ledger.slice(-7).map(_0x5ce531 => "<tr><td>Ngày " + _0x5ce531.day + "</td><td>" + _0x9c212e(_0x5ce531.revenue + _0x5ce531.tips) + "</td><td>" + _0x9c212e(_0x5ce531.cost + _0x5ce531.fee + _0x5ce531.fines) + "</td><td class=\"" + (_0x5ce531.net >= 0 ? "pos" : "neg") + "\">" + _0x9c212e(_0x5ce531.net) + "</td></tr>").join("");
    const _0x1a74e5 = _0xbf5ed7.reviews.slice(-4).reverse().map(_0x313576 => "<li>" + _0x5985e5(_0x313576.s) + "<span>“" + _0x1ff737(_0x313576.t) + "”</span><i>— " + _0x1ff737(_0x313576.who) + "</i></li>").join("");
    _0x57f03a(_0x1525be("ico_book") + " Sổ thu chi", "\n    <table class=\"ledger\"><tr><th></th><th>Thu</th><th>Chi</th><th>Lãi/Lỗ</th></tr>" + (_0x162041 || "<tr><td colspan=4 class=\"muted\">Chưa có phiên chợ nào.</td></tr>") + "</table>\n    <div class=\"kv\"><span>Tiền mặt</span><b>" + _0x9c212e(_0xbf5ed7.money) + "</b></div>\n    " + (_0xbf5ed7.freeMode ? "" : "<div class=\"kv\"><span>Nợ lão Cả Bá</span><b class=\"neg\">" + _0x9c212e(Math.max(0, _0xbf5ed7.debt)) + "</b></div><div class=\"kv\"><span>Hạn trả</span><b>hết ngày " + _0x3777d0 + "</b></div>") + "\n    <div class=\"kv\"><span>Uy tín</span><b>" + _0x5985e5(_0xbf5ed7.rep) + "</b></div>\n    " + (_0xbf5ed7.chapter >= 2 ? "<div class=\"kv\"><span>" + (_0x14aaa7() ? "Chương 5" : _0x121d51() ? "Chương 4" : _0xbf5ed7.ch3 >= 1 ? "Chương 3" : "Chương 2") + "</span><b>" + (_0x14aaa7() ? "Tí nối nghiệp" : _0x121d51() ? "Thương hiệu" : _0xbf5ed7.ch3 >= 1 ? "Tiệm trên phố" : _0xbf5ed7.ch2 >= 3 ? "Đã khai trương tiệm" : "Mốc " + (_0xbf5ed7.ch2 + 1) + "/3: " + _0x463ee[_0xbf5ed7.ch2].name) + "</b></div>" : "") + "\n    " + (_0x449719() ? "<div class=\"kv\"><span>Tiền thuê " + (_0xbf5ed7.ch3 >= 1 ? "mặt bằng" : _0xbf5ed7.ch2 >= 3 ? "tiệm" : "sạp") + "</span><b>" + _0x9c212e(_0x449719()) + "/tháng</b></div>" : "") + "\n    " + (_0x121d51() ? "<div class=\"kv\"><span>Chi nhánh</span><b>" + _0xbf5ed7.br.length + "/3 · " + _0x9c212e(_0x29b1ea()) + "/tháng</b></div><div class=\"kv\"><span>Điểm trên app</span><b>" + (_0xbf5ed7.app || 4.5).toFixed(1).replace(".", ",") + " ★</b></div>" : "") + "\n    " + (_0xbf5ed7.guard ? "<div class=\"kv\"><span>Lương bảo vệ</span><b>" + _0x9c212e(_0x24b125) + "/tháng</b></div>" : "") + "\n    " + (_0xbf5ed7.teo ? "<div class=\"kv\"><span>Lương Cu Tèo</span><b>" + _0x9c212e(_0x49cc5f()) + "/tháng</b></div>" : "") + "\n    " + (_0x449719() && _0xbf5ed7.rentDue ? "<div class=\"kv\"><span>Kỳ trả tiếp theo</span><b>đầu ngày " + _0xbf5ed7.rentDue + "</b></div>" : "") + "\n    " + (_0xbf5ed7.dep && _0xbf5ed7.dep.length ? "<div class=\"kv\"><span>Tiền gửi tiết kiệm</span><b>" + _0x9c212e(_0x3f5656()) + "</b></div>" : "") + "\n    " + (_0xbf5ed7.bank ? "<div class=\"kv\"><span>Nợ ngân hàng <button class=\"btn red small\" id=\"bBank\">Trả</button></span><b class=\"neg\">" + _0x9c212e(_0xbf5ed7.bank.amt) + "</b></div><div class=\"kv\"><span>Kỳ thu lãi ngân hàng</span><b>ngày " + _0xbf5ed7.bank.next + "</b></div>" : "") + "\n    " + (_0xbf5ed7.ch3 >= 1 && _0xbf5ed7.taxReg && _0xbf5ed7.flags.taxNext ? "<div class=\"kv\"><span>Kỳ nộp thuế tiếp theo</span><b>ngày " + _0xbf5ed7.flags.taxNext + "</b></div>" : "") + "\n    " + (_0xbf5ed7.ch3 >= 1 ? "<label class=\"chk " + (_0xbf5ed7.taxReg ? "on" : "") + "\"><input type=\"checkbox\" id=\"cTax\" " + (_0xbf5ed7.taxReg ? "checked disabled" : "") + "><span></span>Đăng ký mã số thuế cho tiệm</label>" : "") + "\n    <div class=\"sub\">Khách nói gì về bà</div><ul class=\"reviews\">" + (_0x1a74e5 || "<li class=\"muted\">Chưa có lời bình.</li>") + "</ul>", [{
      label: "Danh hiệu " + _0x32ee96.filter(_0x17ef5c => _0xbf5ed7.ach[_0x17ef5c.id]).length + "/" + _0x32ee96.length,
      cls: "gold",
      fn: _0x2860d5
    }, {
      label: "Sao lưu",
      cls: "green",
      keep: true,
      fn: _0x11b093
    }, {
      label: "Đóng",
      cls: "grey"
    }, {
      label: "Thông tin",
      cls: "gold",
      fn: () => _0x4faca5(_0x33791f)
    }].concat(_0xbf5ed7.chapter >= 2 ? [{
      label: "Ngân hàng",
      cls: "blue",
      fn: () => _0x5ddde7(_0x33791f)
    }] : []), "paper");
    _0x1d672b(".mbox", _0x517a28).insertAdjacentHTML("beforeend", "<div class=\"mcredit\">" + _0x3613cf() + "</div>");
    const _0x24d739 = _0x1d672b("#bBank");
    if (_0x24d739) {
      _0x24d739.onclick = () => {
        _0x4d92fd.play("click");
        _0x3b9627(_0x33791f);
      };
    }
    const _0x151613 = _0x1d672b("#cTax");
    if (_0x151613) {
      _0x151613.onchange = () => {
        if (_0x151613.checked) {
          _0x151613.disabled = true;
          _0x151613.parentElement.classList.add("on");
          _0x725d95(true);
        }
      };
    }
  }
  function _0x2860d5() {
    _0x57f03a(_0x1525be("ico_medal") + " Danh hiệu", _0x56b82c(), [{
      label: "Sổ thu chi",
      cls: "gold",
      fn: _0x33791f
    }, {
      label: "Đóng",
      cls: "grey"
    }], "paper");
  }
  const _0x549d6e = "ai-mua-xoi-di";
  function _0x11b093() {
    _0x690d06();
    _0x463590.ev("backup");
    const _0x44931d = JSON.stringify(_0xbf5ed7);
    const _0x389a3c = JSON.stringify({
      game: _0x549d6e,
      f: 2,
      v: String(window.GAME_V || ""),
      day: _0xbf5ed7.day,
      t: Date.now(),
      d: _0x25c2d1(_0x44931d),
      h: _0x2e4dc9(_0x44931d)
    });
    const _0x55cc22 = new Date();
    const _0x371bf0 = _0x444fc8 => String(_0x444fc8).padStart(2, "0");
    const _0x49686b = "xoi-ba-tam-ngay-" + _0xbf5ed7.day + "-" + _0x55cc22.getFullYear() + _0x371bf0(_0x55cc22.getMonth() + 1) + _0x371bf0(_0x55cc22.getDate()) + ".json";
    const _0xbd983 = () => _0x991d3e("Đã tạo file sao lưu. Cất kỹ nhé!", "good");
    const _0x769032 = () => _0x991d3e("Chưa lưu được file, thử lại nhé.", "bad");
    const _0x1a2346 = window.Capacitor;
    const _0x13836f = _0x1a2346 && _0x1a2346.Plugins;
    if (_0x1a2346 && _0x1a2346.isNativePlatform && _0x1a2346.isNativePlatform() && _0x13836f && _0x13836f.Filesystem && _0x13836f.Share) {
      _0x13836f.Filesystem.writeFile({
        path: _0x49686b,
        data: _0x389a3c,
        directory: "CACHE",
        encoding: "utf8"
      }).then(_0x173406 => _0x13836f.Share.share({
        title: "Sao lưu Xôi Bà Tám",
        files: [_0x173406.uri],
        dialogTitle: "Lưu file sao lưu vào…"
      })).then(_0xbd983).catch(_0x5dbb57 => {
        if (!/cancel/i.test(String(_0x5dbb57 && _0x5dbb57.message))) {
          _0x769032();
        }
      });
      return;
    }
    const _0x120c86 = new File([_0x389a3c], _0x49686b, {
      type: "application/json"
    });
    if (window.matchMedia && matchMedia("(pointer: coarse)").matches && navigator.canShare && navigator.canShare({
      files: [_0x120c86]
    })) {
      navigator.share({
        files: [_0x120c86],
        title: "Sao lưu Xôi Bà Tám"
      }).then(_0xbd983).catch(_0x73f41b => {
        if (_0x73f41b && _0x73f41b.name !== "AbortError") {
          _0x408348(_0x120c86, _0x49686b);
        }
      });
      return;
    }
    _0x408348(_0x120c86, _0x49686b);
    _0xbd983();
  }
  function _0x408348(_0x4ab36b, _0x18e8b8) {
    const _0x2225d6 = URL.createObjectURL(_0x4ab36b);
    const _0x17041b = document.createElement("a");
    _0x17041b.href = _0x2225d6;
    _0x17041b.download = _0x18e8b8;
    document.body.appendChild(_0x17041b);
    _0x17041b.click();
    _0x17041b.remove();
    setTimeout(() => URL.revokeObjectURL(_0x2225d6), 4000);
  }
  function _0x3e1c00() {
    const _0x58b7ff = document.createElement("input");
    _0x58b7ff.type = "file";
    _0x58b7ff.accept = ".json,application/json,text/plain,*/*";
    _0x58b7ff.onchange = () => {
      const _0x561209 = _0x58b7ff.files && _0x58b7ff.files[0];
      if (!_0x561209) {
        return;
      }
      if (_0x561209.size > 2000000) {
        return _0x991d3e("File quá lớn, không phải file sao lưu của game.", "bad");
      }
      const _0x3b9148 = new FileReader();
      _0x3b9148.onload = () => _0x40797a(String(_0x3b9148.result || ""));
      _0x3b9148.onerror = () => _0x991d3e("Không đọc được file.", "bad");
      _0x3b9148.readAsText(_0x561209);
    };
    _0x58b7ff.click();
  }
  const _0x5d4f79 = 2000000;
  const _0x4b5dec = 0.1;
  function _0x275f4e(_0x1e6d9a, _0xc4618a = 0, _0x413cdb = false) {
    const _0x3bca6b = _0x1e6d9a.stats || {};
    const _0x22220f = Math.max(0, _0x3bca6b.bestNet || 0);
    if (_0x22220f > 1000000000) {
      return "bestNet";
    }
    if ((_0x1e6d9a.ch5 || 0) >= 1 && !((_0x1e6d9a.ch4 || 0) >= 1)) {
      return "ch5";
    }
    if ((_0x1e6d9a.ch4 || 0) >= 1 && !(_0x1e6d9a.ch3 >= 1)) {
      return "ch4";
    }
    if (_0x1e6d9a.ch3 >= 1 && _0x1e6d9a.ch2 < _0x463ee.length) {
      return "ch3";
    }
    const _0x376ba0 = !!_0x1e6d9a.flags && !!_0x1e6d9a.flags.tiHeir;
    let _0x57725d = 0;
    if (!_0x376ba0) {
      for (let _0x3c0b09 = 0; _0x3c0b09 < Math.min(_0x1e6d9a.ch2 || 0, _0x463ee.length); _0x3c0b09++) {
        _0x57725d += _0x463ee[_0x3c0b09].cost;
      }
      if (_0x1e6d9a.ch3 >= 1) {
        _0x57725d += _0x179d7d;
      }
    }
    if ((_0x1e6d9a.ch4 || 0) >= 1) {
      _0x57725d += _0x2e28d0;
      (_0x1e6d9a.br || []).forEach((_0x7dd583, _0x1d7128) => {
        _0x57725d += _0x16a19e[_0x1d7128] || 0;
      });
    }
    for (const _0x5a2666 in _0x1e6d9a.upg || {}) {
      const _0x22a31e = _0x2be998[_0x5a2666];
      if (_0x22a31e) {
        for (let _0x35f848 = 0; _0x35f848 < Math.min(_0x1e6d9a.upg[_0x5a2666] || 0, _0x22a31e.cost.length); _0x35f848++) {
          _0x57725d += _0x22a31e.cost[_0x35f848];
        }
      }
    }
    let _0x2609fe = 0;
    for (const _0x21a904 of _0x32ee96) {
      if (_0x1e6d9a.ach && _0x1e6d9a.ach[_0x21a904.id]) {
        _0x2609fe += _0x21a904.reward || 0;
      }
    }
    const _0x1d52f7 = (_0x1e6d9a.debt || 0) + (_0x1e6d9a.bank && _0x1e6d9a.bank.amt || 0);
    const _0x3c746f = Array.isArray(_0x1e6d9a.ledger) ? _0x1e6d9a.ledger : [];
    let _0x3a66b9 = 0;
    for (const _0x5bcf8f of _0x3c746f) {
      _0x3a66b9 += _0x5bcf8f.net || (_0x5bcf8f.revenue || 0) + (_0x5bcf8f.tips || 0) - (_0x5bcf8f.cost || 0) - (_0x5bcf8f.fee || 0) - (_0x5bcf8f.fines || 0);
    }
    const _0x1cf907 = Math.max(0, Math.max(1, _0x1e6d9a.day) - 1 - _0x3c746f.length) * _0x22220f;
    const _0x189964 = Math.max(_0x22220f * 2, 2000000) + Math.max(0, _0xc4618a);
    let _0x1363f8 = (_0x376ba0 ? _0x277b92 : _0x36181d) + _0x3a66b9 + _0x1cf907 + _0x2609fe + _0x1d52f7 + _0x189964 + _0x5d4f79 + _0x4b5dec * Math.max(0, _0x3a66b9 + _0x1cf907);
    if (_0x413cdb) {
      _0x1363f8 = Math.max(_0x1363f8, _0x36181d + 50000000 + _0x2609fe + _0x1d52f7 + Math.max(1, _0x1e6d9a.day) * 1.5 * _0x22220f);
    }
    const _0x3b6a59 = (Array.isArray(_0x1e6d9a.dep) ? _0x1e6d9a.dep : []).reduce((_0x52487f, _0x1b4026) => _0x52487f + (_0x1b4026.a || 0), 0);
    if (Math.max(0, _0x1e6d9a.money) + _0x3b6a59 + _0x57725d > _0x1363f8) {
      return "money";
    } else {
      return null;
    }
  }
  function _0x40797a(_0x143d3d) {
    let _0x3c4284 = null;
    let _0x2b746c = null;
    try {
      _0x3c4284 = JSON.parse(_0x143d3d);
    } catch (_0x3a215b) {}
    if (_0x3c4284 && _0x3c4284.game === _0x549d6e && _0x3c4284.f === 2) {
      _0x2b746c = _0x3b4881(JSON.stringify({
        f: 2,
        d: _0x3c4284.d,
        h: _0x3c4284.h
      }));
    }
    if (!_0x2b746c) {
      _0x4d92fd.play("wrong");
      return _0x57f03a("Không khôi phục được", "<p>File này không phải bản sao lưu của Xôi Bà Tám, hoặc đã bị chỉnh sửa.</p>", [{
        label: "Đã hiểu",
        cls: "grey"
      }], "paper");
    }
    {
      const _0x43aff1 = _0x275f4e(_0x2b746c);
      if (_0x43aff1) {
        return _0x31cfb4(_0x2b746c, _0x43aff1);
      }
    }
    const _0x32ac0d = _0x4c2010();
    const _0x2303c8 = _0x3c4284.t ? new Date(_0x3c4284.t).toLocaleDateString("vi-VN") : "";
    const _0x17d25b = (_0x2b746c.ch5 || 0) >= 1 ? "Chương 5" : (_0x2b746c.ch4 || 0) >= 1 ? "Chương 4" : _0x2b746c.ch3 >= 1 ? "Chương 3" : _0x2b746c.chapter >= 2 ? "Chương 2" : "Chương 1";
    _0x57f03a(_0x1525be("ico_file") + " Khôi phục dữ liệu", "\n    <div class=\"kv\"><span>Ngày trong game</span><b>Ngày " + _0x2b746c.day + "</b></div>\n    <div class=\"kv\"><span>Tiền mặt</span><b>" + _0x9c212e(_0x2b746c.money) + "</b></div>\n    <div class=\"kv\"><span>Tiến độ</span><b>" + _0x17d25b + "</b></div>\n    " + (_0x2303c8 ? "<div class=\"kv\"><span>Sao lưu lúc</span><b>" + _0x1ff737(_0x2303c8) + "</b></div>" : "") + "\n    " + (_0x32ac0d ? "<p class=\"warnt\">Phần chơi hiện tại trên máy này (ngày " + _0x32ac0d.day + ") sẽ bị thay thế.</p>" : ""), [{
      label: "Thôi",
      cls: "grey"
    }, {
      label: "Khôi phục",
      cls: "red",
      fn: () => {
        _0xbf5ed7 = _0x2b746c;
        _0xbf5ed7.dayDone = !!_0x2b746c.dayDone;
        _0x690d06();
        _0xbf5ed7 = null;
        _0x463590.ev("restore_backup");
        _0x4d92fd.play("win");
        _0x58a015("title");
        setTimeout(() => _0x991d3e("Khôi phục xong! Bấm \"Chơi tiếp\" để vào game.", "good"), 500);
      }
    }], "paper");
  }
  function _0x5cc59a(_0x15d365 = "vs") {
    if (!_0xbf5ed7) {
      return;
    }
    _0x463590.ev("bankrupt", {
      day: _0xbf5ed7.day,
      why: _0x15d365
    });
    if (_0xe9a99e()) {
      return _0xc92d43(_0x15d365);
    }
    const _0x46b9b1 = {
      ach: _0xbf5ed7.ach || {},
      stats: _0xbf5ed7.stats || {}
    };
    const _0x184bd8 = {
      ch2: _0xbf5ed7.ch2,
      ch3: _0xbf5ed7.ch3
    };
    _0x1d50a7.finished = true;
    _0x543cdd();
    _0x4d92fd.play("fail");
    _0xbf5ed7 = _0x3e830f();
    Object.assign(_0xbf5ed7, _0x46b9b1);
    _0x4ce74b();
    _0x690d06();
    _0x58a015("story", {
      lines: [_0x459f53[_0x15d365] || _0x459f53.vs].concat(_0x1390c0, _0x3a5efc),
      stall: _0x184bd8,
      next: () => _0x56ed87()
    });
  }
  function _0xc92d43(_0x456557) {
    const _0x2f613b = _0xbf5ed7;
    const _0x44ab57 = !!_0x2f613b.flags.c5Home;
    const _0x430847 = _0x3e830f();
    const _0x397a80 = {};
    for (const _0x54d581 of ["tutK", "tutM", "phoDay", "hdDay", "c5Day", "c5Home"]) {
      if (_0x54d581 in _0x2f613b.flags) {
        _0x397a80[_0x54d581] = _0x2f613b.flags[_0x54d581];
      }
    }
    Object.assign(_0x430847, {
      day: _0x2f613b.day + 1,
      ach: _0x2f613b.ach || {},
      stats: _0x2f613b.stats,
      ledger: _0x2f613b.ledger || [],
      reviews: _0x2f613b.reviews || [],
      unlocked: (_0x2f613b.unlocked || []).slice(),
      prices: Object.assign({}, _0x430847.prices, _0x2f613b.prices),
      taxReg: !!_0x2f613b.taxReg,
      chapter: 3,
      ch2: _0x463ee.length,
      ch3: 1,
      ch4: 0,
      ch5: 0,
      freeMode: true,
      money: _0x277b92,
      debt: 0,
      rep: 3,
      rentDue: _0x2f613b.rentDue || 0,
      dep: (_0x2f613b.dep || []).slice(),
      flags: Object.assign(_0x397a80, {
        tiHeir: 1,
        c5Home: 1,
        taxNext: _0x2f613b.day + 1 + _0x3b8ca4
      })
    });
    _0x430847.stock = {};
    for (const _0x430c13 in _0x199e77) {
      _0x430847.stock[_0x430c13] = 0;
    }
    _0x1d50a7.finished = true;
    _0x543cdd();
    _0x4d92fd.play("fail");
    _0xbf5ed7 = _0x430847;
    _0x690d06();
    const _0x5665e3 = Object.assign({}, _0x3f2261, {
      text: _0x3f2261.text.replace("{von}", _0x9c212e(_0x277b92))
    });
    _0x58a015("story", {
      lines: [_0x505099[_0x456557] || _0x505099.vs].concat(_0x44ab57 ? _0x3eea7a : _0x417d03, [_0x5665e3]),
      next: () => _0x56ed87()
    });
  }
  function _0x1ea00b() {
    if (_0xbf5ed7.ch3 < 1) {
      return false;
    } else if (_0xbf5ed7.taxReg) {
      _0xbf5ed7.flags.taxNext ||= _0xbf5ed7.day + _0x3b8ca4;
      return _0xbf5ed7.day >= _0xbf5ed7.flags.taxNext;
    } else {
      return Math.random() < _0x243179;
    }
  }
  function _0xfc1b6a() {
    return _0xbf5ed7.ledger.filter(_0x4ae8a5 => _0x4ae8a5.day >= _0xbf5ed7.day - _0x3b8ca4 && _0x4ae8a5.day < _0xbf5ed7.day).reduce((_0x4fbf6a, _0x4351f8) => _0x4fbf6a + Math.max(0, (_0x4351f8.revenue || 0) + (_0x4351f8.tips || 0)), 0);
  }
  function _0x1d0343(_0x3a479f) {
    _0xbf5ed7.money += _0x3a479f;
    if (_0xbf5ed7.bank) {
      _0xbf5ed7.bank.amt += _0x3a479f;
    } else {
      _0xbf5ed7.bank = {
        amt: _0x3a479f,
        next: _0xbf5ed7.day + _0x2032fa
      };
    }
    _0x690d06();
  }
  function _0x5b3f2d() {
    if (!_0xbf5ed7.bank || _0xbf5ed7.bank.amt <= 0 || _0xbf5ed7.day < _0xbf5ed7.bank.next) {
      return [];
    }
    const _0x1e26b0 = Math.round(_0xbf5ed7.bank.amt * _0x71db7c / 1000) * 1000;
    _0xbf5ed7.bank.next = Math.max(_0xbf5ed7.bank.next, _0xbf5ed7.day) + _0x2032fa;
    if (_0xbf5ed7.money >= _0x1e26b0) {
      _0xbf5ed7.money -= _0x1e26b0;
      _0xbf5ed7.today.bank = (_0xbf5ed7.today.bank || 0) + _0x1e26b0;
      return [{
        who: _0x49a7c1().who,
        text: "Ngân hàng thu lãi kỳ này " + _0x9c212e(_0x1e26b0) + " (" + Math.round(_0x71db7c * 100) + "% của " + _0x9c212e(_0xbf5ed7.bank.amt) + " còn nợ)."
      }];
    } else {
      _0xbf5ed7.bank.amt += _0x1e26b0;
      return [{
        who: _0x49a7c1().who,
        text: "Không đủ tiền trả lãi ngân hàng " + _0x9c212e(_0x1e26b0) + ", lãi bị cộng dồn vào nợ gốc: giờ nợ " + _0x9c212e(_0xbf5ed7.bank.amt) + "."
      }];
    }
  }
  function _0x3b9627(_0x390be4) {
    if (!_0xbf5ed7.bank || _0xbf5ed7.bank.amt <= 0) {
      if (_0x390be4) {
        _0x390be4();
      }
      return;
    }
    const _0x3c84cc = 1000000;
    let _0x5cac38 = Math.max(0, Math.min(_0xbf5ed7.money, _0xbf5ed7.bank.amt));
    const _0x2c7e2b = () => {
      _0x57f03a(_0x1525be("ico_coin") + " Trả nợ ngân hàng", "\n      <div class=\"kv\"><span>Tiền mặt</span><b>" + _0x9c212e(_0xbf5ed7.money) + "</b></div>\n      <div class=\"kv\"><span>Còn nợ ngân hàng</span><b class=\"neg\">" + _0x9c212e(_0xbf5ed7.bank.amt) + "</b></div>\n      <div class=\"kv\"><span>Kỳ thu lãi tiếp theo</span><b>ngày " + _0xbf5ed7.bank.next + "</b></div>\n      <div class=\"stepper big\"><button id=\"bk-\">−</button><b>" + _0x9c212e(_0x5cac38) + "</b><button id=\"bk+\">+</button></div>", [{
        label: "Để sau",
        cls: "grey",
        fn: _0x390be4
      }, {
        label: "Trả nợ",
        cls: "red",
        fn: () => {
          if (!_0xbf5ed7.bank) {
            if (_0x390be4) {
              _0x390be4();
            }
            return;
          }
          _0x5cac38 = Math.max(0, Math.min(_0x5cac38, _0xbf5ed7.money, _0xbf5ed7.bank.amt));
          if (_0x5cac38 > 0) {
            _0xbf5ed7.money -= _0x5cac38;
            _0xbf5ed7.bank.amt -= _0x5cac38;
            _0x4d92fd.play("coin");
            if (_0xbf5ed7.bank.amt <= 0) {
              _0xbf5ed7.bank = null;
              _0x991d3e("Đã trả hết nợ ngân hàng!", "good");
            } else {
              _0x991d3e("Đã trả " + _0x9c212e(_0x5cac38) + ". Còn nợ " + _0x9c212e(_0xbf5ed7.bank.amt), "good");
            }
            _0x690d06();
            _0x5f18ca();
          }
          if (_0x390be4) {
            _0x390be4();
          }
        }
      }], "paper");
      const _0x24e75c = Math.min(_0xbf5ed7.money, _0xbf5ed7.bank.amt);
      _0x1d672b("#bk-").onclick = () => {
        _0x5cac38 = Math.max(0, _0x5cac38 - _0x3c84cc);
        _0x2c7e2b();
      };
      _0x1d672b("#bk\\+").onclick = () => {
        _0x5cac38 = Math.min(_0x24e75c, _0x5cac38 + _0x3c84cc);
        _0x2c7e2b();
      };
    };
    _0x2c7e2b();
  }
  const _0x299958 = _0x4d815e => _0x4d815e >= 1000000000 ? String(_0x4d815e / 1000000000).replace(".", ",") + " tỷ" : Math.round(_0x4d815e / 1000000) + " triệu";
  const _0xdbd398 = _0x5721b3 => Math.round(_0x5721b3.a * (1 + (_0x2ce111[_0x5721b3.t] || 0)) / 1000) * 1000;
  const _0x3f5656 = () => (_0xbf5ed7.dep || []).reduce((_0x2327ce, _0x1a6027) => _0x2327ce + _0x1a6027.a, 0);
  const _0x91b23b = _0x346d6c => Math.round((_0x2ce111[_0x346d6c] || 0) * 100);
  function _0x54a427() {
    const _0x5cfd66 = (_0xbf5ed7.dep || []).filter(_0x28692c => _0xbf5ed7.day >= _0x28692c.d + _0x28692c.t);
    if (!_0x5cfd66.length) {
      return [];
    }
    _0xbf5ed7.dep = _0xbf5ed7.dep.filter(_0x5af88f => _0xbf5ed7.day < _0x5af88f.d + _0x5af88f.t);
    let _0x154651 = 0;
    let _0x36d4a5 = 0;
    for (const _0x521eaf of _0x5cfd66) {
      const _0x464aef = _0xdbd398(_0x521eaf);
      _0x154651 += _0x464aef;
      _0x36d4a5 += _0x464aef - _0x521eaf.a;
    }
    _0xbf5ed7.money += _0x154651;
    _0xbf5ed7.today.save = (_0xbf5ed7.today.save || 0) + _0x36d4a5;
    _0x463590.ev("bank_mature", {
      amt: _0x154651 - _0x36d4a5,
      n: _0x5cfd66.length
    });
    const _0x25ffb8 = _0x5cfd66.length > 1 ? _0x5cfd66.length + " sổ tiết kiệm" : "Sổ tiết kiệm " + _0x299958(_0x5cfd66[0].a) + " kỳ hạn " + _0x5cfd66[0].t + " ngày";
    return [{
      who: _0x49a7c1().who,
      text: "Ngân hàng báo: " + _0x25ffb8 + " đã đáo hạn. Cả gốc lẫn lãi " + _0x9c212e(_0x154651) + " (lãi " + _0x9c212e(_0x36d4a5) + ") đã về két tiệm."
    }];
  }
  function _0x4d8add(_0x2c87cb) {
    const _0x5a2c85 = _0xbf5ed7.dep[_0x2c87cb];
    if (_0x5a2c85) {
      _0xbf5ed7.dep.splice(_0x2c87cb, 1);
      _0xbf5ed7.money += _0x5a2c85.a;
      _0x463590.ev("bank_withdraw", {
        amt: _0x5a2c85.a,
        left: _0x5a2c85.d + _0x5a2c85.t - _0xbf5ed7.day
      });
      return _0x5a2c85.a;
    } else {
      return 0;
    }
  }
  function _0x28da56(_0x1e6ae5) {
    let _0xc77aff = 0;
    while (_0xc77aff < _0x1e6ae5 && _0xbf5ed7.dep.length) {
      let _0x9019e8 = 0;
      _0xbf5ed7.dep.forEach((_0x18e503, _0x16e56c) => {
        if (_0x18e503.a < _0xbf5ed7.dep[_0x9019e8].a) {
          _0x9019e8 = _0x16e56c;
        }
      });
      _0xc77aff += _0x4d8add(_0x9019e8);
    }
    _0x690d06();
    _0x5f18ca();
    return _0xc77aff;
  }
  function _0x5ddde7(_0x195649) {
    _0xbf5ed7.dep = _0xbf5ed7.dep || [];
    const _0x5af99e = _0xbf5ed7.dep.map((_0x3fb913, _0x36352f) => "<div class=\"deprow\"><div>" + _0x299958(_0x3fb913.a) + " · " + _0x3fb913.t + " ngày · lãi " + _0x91b23b(_0x3fb913.t) + "%<small>Đáo hạn ngày " + (_0x3fb913.d + _0x3fb913.t) + " (còn " + Math.max(0, _0x3fb913.d + _0x3fb913.t - _0xbf5ed7.day) + " ngày) · nhận " + _0x9c212e(_0xdbd398(_0x3fb913)) + "</small></div><button class=\"btn grey small\" data-w=\"" + _0x36352f + "\">Rút</button></div>").join("");
    _0x57f03a(_0x1525be("ico_coin") + " Ngân hàng", "\n    <div class=\"kv\"><span>Tiền mặt</span><b>" + _0x9c212e(_0xbf5ed7.money) + "</b></div>\n    <div class=\"sub\">Sổ tiết kiệm (" + _0xbf5ed7.dep.length + "/" + _0x593364 + ")</div>\n    " + (_0x5af99e || "<p class=\"muted\">Chưa có sổ tiết kiệm nào.</p>") + "\n    " + (_0xbf5ed7.dep.length ? "<div class=\"kv\"><span>Tổng tiền gửi</span><b>" + _0x9c212e(_0x3f5656()) + "</b></div>" : "") + "\n    <div class=\"sub\">Khoản vay</div>\n    " + (_0xbf5ed7.bank ? "<div class=\"kv\"><span>Còn nợ</span><b class=\"neg\">" + _0x9c212e(_0xbf5ed7.bank.amt) + "</b></div><div class=\"kv\"><span>Thu lãi " + Math.round(_0x71db7c * 100) + "%/" + _0x2032fa + " ngày</span><b>ngày " + _0xbf5ed7.bank.next + "</b></div>" : "<p class=\"muted\">Không nợ ngân hàng. Chỉ vay được khi thiếu tiền nộp thuế hoặc tiền phạt.</p>"), (_0xbf5ed7.bank ? [{
      label: "Trả nợ",
      cls: "red",
      fn: () => _0x3b9627(() => _0x5ddde7(_0x195649))
    }] : []).concat([{
      label: "Gửi tiết kiệm",
      cls: "green",
      fn: () => _0x3f21dc(() => _0x5ddde7(_0x195649))
    }, {
      label: "Quay lại",
      cls: "grey",
      fn: _0x195649
    }]), "paper");
    _0x517a28.querySelectorAll("[data-w]").forEach(_0x595040 => _0x595040.onclick = () => {
      _0x4d92fd.play("click");
      const _0x37f664 = +_0x595040.dataset.w;
      const _0xe9d39a = _0xbf5ed7.dep[_0x37f664];
      if (_0xe9d39a) {
        _0x57f03a(_0x1525be("ico_warn") + " Rút trước hạn?", "<p>Sổ <b>" + _0x299958(_0xe9d39a.a) + "</b> đến <b>ngày " + (_0xe9d39a.d + _0xe9d39a.t) + "</b> mới đáo hạn. Rút bây giờ chỉ nhận lại <b>" + _0x9c212e(_0xe9d39a.a) + "</b>, mất phần lãi <b>" + _0x9c212e(_0xdbd398(_0xe9d39a) - _0xe9d39a.a) + "</b>.</p>", [{
          label: "Thôi",
          cls: "grey",
          fn: () => _0x5ddde7(_0x195649)
        }, {
          label: "Rút tiền",
          cls: "red",
          fn: () => {
            _0x4d8add(_0x37f664);
            _0x4d92fd.play("coin");
            _0x690d06();
            _0x5f18ca();
            _0x991d3e("Đã rút " + _0x9c212e(_0xe9d39a.a) + " về két.", "good");
            _0x5ddde7(_0x195649);
          }
        }], "paper");
      }
    });
  }
  function _0x3f21dc(_0x3bb058) {
    let _0x3e5fa5 = null;
    let _0x49b67b = 90;
    const _0x315d3d = () => {
      const _0x1f7bf1 = _0xbf5ed7.dep.length >= _0x593364;
      if (_0x3e5fa5 && (_0x3e5fa5 > _0xbf5ed7.money || _0x1f7bf1)) {
        _0x3e5fa5 = null;
      }
      const _0x5ee62c = _0x121d51() && !_0x14aaa7() ? "<p class=\"muted\">Tiền gửi không tính vào mốc " + _0x2da126(_0x3c2496) + " của Chương 4.</p>" : "";
      _0x57f03a(_0x1525be("ico_coin") + " Gửi tiết kiệm", "\n      <div class=\"kv\"><span>Tiền mặt</span><b>" + _0x9c212e(_0xbf5ed7.money) + "</b></div>\n      <div class=\"sub\">Số tiền gửi</div>\n      <div class=\"bkopts\">" + _0x3ecba3.map(_0x231c3e => "<button data-a=\"" + _0x231c3e + "\" class=\"" + (_0x231c3e === _0x3e5fa5 ? "on" : "") + "\" " + (_0x231c3e > _0xbf5ed7.money || _0x1f7bf1 ? "disabled" : "") + ">" + _0x299958(_0x231c3e) + "</button>").join("") + "</div>\n      <div class=\"sub\">Kỳ hạn</div>\n      <div class=\"bkopts\">" + Object.keys(_0x2ce111).map(_0x52e0a9 => "<button data-t=\"" + _0x52e0a9 + "\" class=\"" + (+_0x52e0a9 === _0x49b67b ? "on" : "") + "\">" + _0x52e0a9 + " ngày<small>lãi " + _0x91b23b(_0x52e0a9) + "%</small></button>").join("") + "</div>\n      " + (_0x1f7bf1 ? "<p class=\"warnt\">Đã có " + _0x593364 + " sổ, chờ đáo hạn hoặc rút bớt rồi gửi tiếp.</p>" : _0xbf5ed7.money < _0x3ecba3[0] ? "<p class=\"warnt\">Cần ít nhất " + _0x299958(_0x3ecba3[0]) + " tiền mặt để mở sổ.</p>" : _0x3e5fa5 ? "<div class=\"kv\"><span>Đáo hạn</span><b>ngày " + (_0xbf5ed7.day + _0x49b67b) + "</b></div><div class=\"kv total\"><span>Nhận về</span><b class=\"pos\">" + _0x9c212e(_0xdbd398({
        a: _0x3e5fa5,
        t: _0x49b67b
      })) + "</b></div>" : "<p class=\"muted\">Chọn số tiền muốn gửi.</p>") + "\n      <p class=\"muted\">Đủ " + _0x49b67b + " ngày, gốc và lãi tự về két. Rút trước hạn chỉ nhận lại gốc. Tiền gửi không sợ trộm.</p>" + _0x5ee62c, [{
        label: "Quay lại",
        cls: "grey",
        fn: _0x3bb058
      }, {
        label: "Gửi tiền",
        cls: "green",
        keep: true,
        fn: () => {
          if (!_0x3e5fa5 || _0x3e5fa5 > _0xbf5ed7.money || _0xbf5ed7.dep.length >= _0x593364) {
            _0x991d3e("Chọn số tiền muốn gửi trước nhé.", "bad");
            return;
          }
          _0xbf5ed7.money -= _0x3e5fa5;
          _0xbf5ed7.dep.push({
            a: _0x3e5fa5,
            t: _0x49b67b,
            d: _0xbf5ed7.day
          });
          _0x463590.ev("bank_deposit", {
            amt: _0x3e5fa5,
            term: _0x49b67b
          });
          _0x4d92fd.play("coin");
          _0x690d06();
          _0x5f18ca();
          _0x991d3e("Đã gửi " + _0x299958(_0x3e5fa5) + ", ngày " + (_0xbf5ed7.day + _0x49b67b) + " nhận " + _0x9c212e(_0xdbd398({
            a: _0x3e5fa5,
            t: _0x49b67b
          })) + ".", "good");
          _0x3bb058();
        }
      }], "paper");
      _0x517a28.querySelectorAll("[data-a]").forEach(_0x314759 => _0x314759.onclick = () => {
        _0x4d92fd.play("click");
        _0x3e5fa5 = +_0x314759.dataset.a;
        _0x315d3d();
      });
      _0x517a28.querySelectorAll("[data-t]").forEach(_0x29413e => _0x29413e.onclick = () => {
        _0x4d92fd.play("click");
        _0x49b67b = +_0x29413e.dataset.t;
        _0x315d3d();
      });
    };
    _0x315d3d();
  }
  function _0x1942f4(_0x1eaad6) {
    const _0x503163 = _0xaa20ba[_0x1eaad6];
    if (_0x503163.secret) {
      return {
        label: "Bí truyền",
        hint: "Công thức bí truyền: đủ 3 chi nhánh và có " + _0x2da126(_0x4d6973) + " ở Chương 4."
      };
    } else if (_0x503163.ch && _0x1268f8() < _0x503163.ch) {
      return {
        label: "Xong Chương " + (_0x503163.ch - 1),
        hint: "Mở khi sang Chương " + _0x503163.ch + (_0x503163.ch === 2 ? " (trả xong nợ Cả Bá)" : _0x503163.ch === 3 ? " (lên phố)" : _0x503163.ch === 4 ? " (lập thương hiệu)" : "") + "."
      };
    } else if (_0x503163.day && !_0xbf5ed7.freeMode && _0xbf5ed7.day < _0x503163.day) {
      return {
        label: "Xong ngày " + (_0x503163.day - 1),
        hint: "Học được từ ngày " + _0x503163.day + "."
      };
    } else {
      return null;
    }
  }
  function _0x1ce1b2() {
    if (_0x121d51() && !_0x14aaa7() && _0xbf5ed7.money >= _0x3c2496) {
      const _0x45df15 = _0xbf5ed7.money;
      const _0x53e404 = Math.round(_0x45df15 * _0x5d6a81 / 1000) * 1000;
      const _0x2b0faf = _0x45df15 - _0x53e404;
      _0xbf5ed7.money -= _0x53e404;
      _0xbf5ed7.today.hospital = (_0xbf5ed7.today.hospital || 0) + _0x53e404;
      _0xbf5ed7.ch5 = 1;
      _0xbf5ed7.chapter = 5;
      _0xbf5ed7.flags.c5Day = _0xbf5ed7.day;
      _0x3711c2(_0x107f09 / _0x7ddea4);
      _0x463590.ev("level_up", {
        level: 5,
        character: "ti"
      });
      setTimeout(_0x5b55cf, 1500);
      return _0x2517c7.map(_0x2bf8ed => Object.assign({}, _0x2bf8ed, {
        text: _0x2bf8ed.text.replace("{tong}", _0x9c212e(_0x45df15)).replace("{phi}", _0x9c212e(_0x53e404)).replace("{conlai}", _0x9c212e(_0x2b0faf))
      }));
    }
    if (_0xe9a99e() && !_0xbf5ed7.flags.c5Home && _0xbf5ed7.day >= (_0xbf5ed7.flags.c5Day || _0xbf5ed7.day) + _0x4ed882) {
      _0xbf5ed7.flags.c5Home = 1;
      return _0xf9f0ab;
    } else {
      return null;
    }
  }
  function _0x188f76(_0x26d71a) {
    if (_0xbf5ed7.debt <= 0) {
      if (_0x26d71a) {
        _0x26d71a();
      }
      return;
    }
    let _0x4b982d = Math.max(0, Math.min(_0xbf5ed7.money, _0xbf5ed7.debt));
    const _0x1e54b3 = () => {
      _0x57f03a(_0xbf5ed7.chapter >= 2 ? "Trả nợ" : "Trả nợ lão Cả Bá", "\n      <div class=\"kv\"><span>Tiền mặt</span><b>" + _0x9c212e(_0xbf5ed7.money) + "</b></div>\n      <div class=\"kv\"><span>Còn nợ</span><b class=\"neg\">" + _0x9c212e(_0xbf5ed7.debt) + "</b></div>\n      <div class=\"stepper big\"><button id=\"pd-\">−</button><b>" + _0x9c212e(_0x4b982d) + "</b><button id=\"pd+\">+</button></div>\n      <p class=\"muted\">Nhớ giữ lại ít vốn để mai còn đi chợ mua nếp nhé!</p>", [{
        label: "Để sau",
        cls: "grey",
        fn: _0x26d71a
      }, {
        label: "Trả nợ",
        cls: "red",
        fn: () => {
          if (_0x4b982d <= 0) {
            if (_0x26d71a) {
              _0x26d71a();
            }
            return;
          }
          _0xbf5ed7.money -= _0x4b982d;
          _0xbf5ed7.debt -= _0x4b982d;
          _0x4d92fd.play("coin");
          if (_0xbf5ed7.chapter === 1 && _0xbf5ed7.debt <= 0 && !_0xbf5ed7.flags.debtDay) {
            _0xbf5ed7.flags.debtDay = _0xbf5ed7.day;
            setTimeout(_0x5b55cf, 600);
          }
          _0x690d06();
          _0x991d3e("Đã trả " + _0x9c212e(_0x4b982d) + ". Còn nợ " + _0x9c212e(Math.max(0, _0xbf5ed7.debt)), "good");
          _0x5f18ca();
          if (_0x26d71a) {
            _0x26d71a();
          }
        }
      }], "paper");
      const _0x3654f3 = Math.min(_0xbf5ed7.money, _0xbf5ed7.debt);
      _0x1d672b("#pd-").onclick = () => {
        _0x4b982d = Math.max(0, _0x4b982d - 50000);
        _0x4d92fd.play("click");
        _0x1e54b3();
      };
      _0x1d672b("#pd\\+").onclick = () => {
        _0x4b982d = Math.min(_0x3654f3, _0x4b982d + 50000);
        _0x4d92fd.play("click");
        _0x1e54b3();
      };
    };
    _0x1e54b3();
  }
  _0x19e10f.scr.loading = {
    enter() {
      _0xaf18a.classList.add("hidden");
      _0x55ee07.innerHTML = "<div class=\"loading\"><div class=\"lt\">Đang nhóm bếp…</div><div class=\"bar\"><i></i></div><div class=\"tap hidden\">Chạm để vào chợ</div></div>";
    },
    progress(_0x3f380f) {
      const _0x521530 = _0x1d672b(".loading .bar i");
      if (_0x521530) {
        _0x521530.style.width = _0x3f380f * 100 + "%";
      }
    },
    ready() {
      _0x1d672b(".loading .lt").textContent = "Xôi chín rồi!";
      _0x1d672b(".loading .tap").classList.remove("hidden");
      _0x55ee07.onclick = () => {
        _0x55ee07.onclick = null;
        _0x4d92fd.play("rooster");
        _0x58a015("title");
      };
    },
    draw() {
      _0xca5277.fillStyle = "#1a1016";
      _0xca5277.fillRect(0, 0, _0xc10b19, _0x2d0f1c);
    }
  };
  _0x19e10f.scr.title = {
    enter() {
      _0xaf18a.classList.add("hidden");
      _0x4d92fd.music("bgm_title");
      const _0x15a8d0 = _0x4c2010();
      if (_0x3d49a1) {
        setTimeout(() => _0x991d3e(_0x3d49a1 === "bak" ? "Bản lưu chính bị hỏng, đã lấy lại bản dự phòng." : "Đã lấy lại dữ liệu từ kho lưu dự phòng.", "good"), 500);
      }
      if (_0x1480c4) {
        setTimeout(() => _0x57f03a("Dữ liệu lưu không hợp lệ", "<p>Bản lưu trên máy này đã bị chỉnh sửa hoặc hỏng, nên không thể chơi tiếp.</p><p>Bấm \"Bắt đầu chơi\" để chơi lại từ đầu.</p>", [{
          label: "Đã hiểu",
          cls: "grey"
        }], "paper"), 400);
      }
      _0x55ee07.innerHTML = "\n      <div class=\"title-btns\">\n        <button class=\"btn red big\" id=\"bNew\">Bắt đầu chơi</button>\n        " + (_0x15a8d0 ? "<button class=\"btn gold\" id=\"bCont\">Chơi tiếp · Ngày " + _0x15a8d0.day + "</button>" : "") + "\n        <button class=\"btn grey\" id=\"bRestore\">" + _0x1525be("ico_file", "ico") + " Khôi phục dữ liệu</button>\n      </div>\n      <button class=\"hbtn tbtn-restore\" id=\"bSnd\" title=\"Cài đặt âm thanh\">" + _0x1525be(_0x4d92fd.muted ? "ico_mute" : "ico_sound") + "</button>\n      <div class=\"credit\">" + _0x3613cf() + "</div>";
      _0x1d672b("#bNew").onclick = () => {
        _0x4d92fd.play("click");
        const _0x4716b7 = () => {
          _0xbf5ed7 = _0x3e830f();
          _0x4ce74b();
          _0x463590.ev("new_game");
          _0x58a015("story", {
            lines: _0x3a5efc,
            next: () => _0x56ed87()
          });
        };
        if (_0x15a8d0) {
          _0x57f03a("Chơi lại từ đầu?", "Phần chơi cũ sẽ bị xoá.", [{
            label: "Thôi",
            cls: "grey"
          }, {
            label: "Chơi mới",
            cls: "red",
            fn: _0x4716b7
          }], "paper");
        } else {
          _0x4716b7();
        }
      };
      if (_0x15a8d0) {
        _0x1d672b("#bCont").onclick = () => {
          _0x4d92fd.play("click");
          _0xbf5ed7 = _0x15a8d0;
          if (_0xbf5ed7.dayDone) {
            _0x19e10f.scr.summary.next();
          } else {
            _0x56ed87(true);
          }
        };
      }
      _0x1d672b("#bRestore").onclick = () => {
        _0x4d92fd.play("click");
        _0x3e1c00();
      };
      _0x1d672b("#bSnd").onclick = () => {
        _0x4d92fd.play("click");
        _0x191967(() => {
          const _0x44f25c = _0x1d672b("#bSnd");
          if (_0x44f25c) {
            _0x44f25c.innerHTML = _0x1525be(_0x4d92fd.muted ? "ico_mute" : "ico_sound");
          }
        });
      };
      this.walkT = 0;
      this.birds = [0, 1, 2].map(_0x2e7b53 => ({
        x: -20 - _0x2e7b53 * 14,
        y: 110 + _0x2e7b53 * 6,
        s: 9 + _0x2e7b53 * 2
      }));
    },
    update(_0x22a340) {
      this.walkT += _0x22a340;
      for (const _0x5f8a45 of this.birds) {
        _0x5f8a45.x += _0x5f8a45.s * _0x22a340;
        if (_0x5f8a45.x > 200) {
          _0x5f8a45.x = -20;
          _0x5f8a45.y = _0x3d90fc(96, 130);
        }
      }
    },
    draw() {
      const _0x4c9c74 = _0xfeb5dc("bg_title", true);
      _0xca5277.save();
      _0xca5277.translate(0, _0x4c9c74);
      for (let _0x262ef4 = 0; _0x262ef4 < 6; _0x262ef4++) {
        const _0x284eb2 = (_0x262ef4 * 53 + 17) % 180;
        const _0x2d4b8d = (_0x262ef4 * 29 + 5) % 70;
        if (Math.sin(_0x19e10f.t * 3 + _0x262ef4 * 2) > 0.7) {
          _0xca5277.fillStyle = "#fff8ea";
          _0xca5277.fillRect(_0x284eb2, _0x2d4b8d, 1, 1);
        }
      }
      for (const _0x21ddb0 of this.birds) {
        _0x6d5c39("bird", Math.floor(_0x19e10f.t * 4 + _0x21ddb0.y) % 2, _0x21ddb0.x, _0x21ddb0.y, 11, 5);
      }
      const _0x1df37d = _0x1d672b(".title-btns");
      const _0x3ce343 = _0x2181e3.getBoundingClientRect().height / _0x2d0f1c;
      const _0x58e75e = _0x1df37d && _0x3ce343 ? _0x1df37d.offsetTop / _0x3ce343 - _0x4c9c74 : 250;
      const _0x345377 = 176;
      const _0x2c68e8 = Math.max(_0x345377 + 4, Math.min(206, _0x58e75e - 46));
      const _0x25831a = Math.min(1, this.walkT / 3.2);
      const _0x12ada5 = 1 - (1 - _0x25831a) * (1 - _0x25831a);
      const _0x3bdb78 = Math.floor(_0x19e10f.t * (_0x25831a < 1 ? 5 : 2.5)) % 2;
      const _0x3fd82d = Math.round(_0x345377 + (_0x2c68e8 - _0x345377) * _0x12ada5) + (_0x3bdb78 ? 1 : 0);
      _0xca5277.globalAlpha = Math.min(1, 0.25 + _0x25831a * 2.5);
      _0x6d5c39("batam_ganh", _0x3bdb78, 58, _0x3fd82d, 64, 44);
      _0xca5277.globalAlpha = 1;
      _0x4caaeb("logo", 6, 14 + Math.round(Math.sin(_0x19e10f.t * 2) * 1.5));
      _0xca5277.globalAlpha = 0.25 + Math.sin(_0x19e10f.t * 5) * 0.08;
      _0xca5277.fillStyle = "#f8b060";
      _0xca5277.fillRect(68, 183, 1, 1);
      _0xca5277.fillRect(110, 183, 1, 1);
      _0xca5277.globalAlpha = 1;
      _0xca5277.restore();
    }
  };
  function _0x16f39a() {
    if (_0xbf5ed7 && _0xbf5ed7.ch3 >= 1) {
      return "bg_city";
    } else if (_0xbf5ed7 && _0xbf5ed7.ch2 >= 1 && _0x3f8047.bg_market2) {
      return "bg_market2";
    } else {
      return "bg_market";
    }
  }
  function _0x12e36a() {
    _0xfeb5dc("bg_city");
    _0xca5277.fillStyle = "#6a6e74";
    _0xca5277.fillRect(26, 66, 128, 51);
    _0xca5277.fillStyle = "#50545a";
    for (let _0x3eed81 = 68; _0x3eed81 < 117; _0x3eed81 += 3) {
      _0xca5277.fillRect(26, _0x3eed81, 128, 1);
    }
    _0xca5277.fillStyle = "#3a3c40";
    _0xca5277.fillRect(86, 110, 8, 3);
    _0x4caaeb("bien_tiem", 38, 42);
    _0xca5277.fillStyle = "rgba(10,14,40,.55)";
    _0xca5277.fillRect(0, 0, _0xc10b19, _0x2d0f1c);
    const _0x544155 = Math.floor(_0x19e10f.t * 1.6) % 2;
    _0x6d5c39("lantern", _0x544155, 36, 74, 10, 15);
    _0x6d5c39("lantern", 1 - _0x544155, 134, 74, 10, 15);
    _0xca5277.globalAlpha = 0.18;
    _0xca5277.fillStyle = "#f8c060";
    _0xca5277.fillRect(160, 40, 14, 80);
    _0xca5277.globalAlpha = 1;
  }
  _0x19e10f.scr.story = {
    enter(_0x4a3f3a) {
      _0xaf18a.classList.add("hidden");
      _0x19e10f.storyBg = _0x4a3f3a.lines[0].bg || "title";
      _0x19e10f.storyStall = _0x4a3f3a.stall || null;
      _0x39c0d1(_0x4a3f3a.lines, _0x4a3f3a.next);
    },
    draw() {
      const _0x263592 = _0x19e10f.storyBg || "title";
      if (_0x263592 === "citynight") {
        _0x12e36a();
      } else {
        _0xfeb5dc(_0x263592 === "market" ? _0x16f39a() : "bg_" + _0x263592, _0x263592 === "title");
        if (_0x263592 === "market" || _0x263592 === "city") {
          _0x42be1b(_0x263592 === "city" && _0x19e10f.storyStall ? _0x19e10f.storyStall : _0xbf5ed7);
        }
      }
      _0xca5277.fillStyle = "rgba(20,10,20,.35)";
      _0xca5277.fillRect(0, 0, _0xc10b19, _0x2d0f1c);
      const _0x2dff4e = _0x19e10f.storyWho;
      if (_0x19e10f.storyFx) {
        _0x5b8cd6(1 / 60);
      }
      if (_0x2dff4e) {
        const _0xf0671b = _0x2dff4e === "batam" ? "batam_stand" : _0xe04ef[_0x2dff4e].sheet;
        const _0x3cc7cc = _0x2dff4e === "batam" ? 3 : Math.floor(_0x19e10f.t * 1.5) % 7 === 0 ? 4 : 0;
        _0xca5277.save();
        _0xca5277.translate(54, 96 + Math.round(Math.sin(_0x19e10f.t * 2)));
        _0xca5277.scale(3, 3);
        _0xca5277.drawImage(_0x3f8047[_0xf0671b], _0x3cc7cc * 24, 0, 24, 34, 0, 0, 24, 34);
        _0xca5277.restore();
      }
    }
  };
  function _0x56ed87(_0xda825a) {
    if (!_0xda825a) {
      _0x1c3a1b();
    }
    _0x9670ee();
    if (!_0xbf5ed7.priceMul || !Object.keys(_0xbf5ed7.priceMul).length) {
      _0x1c3a1b();
    }
    _0x690d06();
    let _0x2e83d1 = !_0xda825a && !_0xbf5ed7.freeMode ? _0x24e6ae[_0xbf5ed7.day] : null;
    let _0x4eeee2 = null;
    if (!_0xda825a) {
      if (!_0xbf5ed7.today || _0xbf5ed7.today.day !== _0xbf5ed7.day) {
        _0x37e825();
      }
      if (_0xbf5ed7.chapter >= 2 && _0xbf5ed7.day > 8 && _0xbf5ed7.ch3 < 1 && Math.random() < 0.18) {
        _0xbf5ed7.flags.rival = _0xbf5ed7.day;
        _0x2e83d1 = _0x54dac8;
      }
      const _0x57b5bf = _0x8e45b7();
      if (_0x57b5bf.length) {
        _0x2e83d1 = (_0x2e83d1 || []).concat(_0x57b5bf);
      }
      const _0x4287c7 = _0x5b3f2d().concat(_0x54a427());
      if (_0x4287c7.length) {
        _0x2e83d1 = (_0x2e83d1 || []).concat(_0x4287c7);
      }
      const _0x1f59b8 = _0x1ce1b2();
      if (_0x1f59b8) {
        _0x4eeee2 = (_0x4eeee2 || []).concat(_0x1f59b8);
      }
      const _0x34ae26 = _0x52065c();
      if (_0x34ae26) {
        _0x2e83d1 = (_0x2e83d1 || []).concat(_0x34ae26);
      }
      {
        const _0xfca5ef = _0xde0b62();
        if (_0xfca5ef) {
          _0x4eeee2 = (_0x4eeee2 || []).concat(_0xfca5ef);
        }
      }
      if (_0x592c27("ti") > 0 && _0xbf5ed7.chapter >= 2 && !_0xe9a99e() && Math.random() < _0x5da247) {
        _0xbf5ed7.flags.tiDay = _0xbf5ed7.day;
        _0x2e83d1 = (_0x2e83d1 || []).concat([{
          who: "ti",
          text: _0x31c8b2(_0x2dbcd0)
        }]);
      }
      const _0x334402 = _0x4447ba();
      if (_0x334402) {
        _0x2e83d1 = (_0x2e83d1 || []).concat(_0x334402);
      }
      const _0x1f5a60 = _0x1c6b03();
      if (_0x1f5a60) {
        _0x2e83d1 = (_0x2e83d1 || []).concat(_0x1f5a60);
      }
      if (_0x5e2a80()) {
        _0x2e83d1 = (_0x2e83d1 || []).concat([{
          who: _0x49a7c1().who,
          text: "Hôm nay tiệm chính bị đình chỉ để khắc phục vệ sinh. Mấy chi nhánh vẫn bán bình thường."
        }]);
      }
      if (_0xbf5ed7.flags.viral === _0xbf5ed7.day) {
        _0x2e83d1 = (_0x2e83d1 || []).concat([{
          who: "ti",
          text: "Bà ơi, clip review tiệm mình triệu view rồi! Hôm nay khách kéo đến đông lắm đấy!"
        }]);
      }
      _0x4e96c7();
      _0x690d06();
    }
    const _0x4016d0 = () => _0x58a015("daycard", {
      next: () => {
        if (_0x2e83d1) {
          _0x39c0d1(_0x2e83d1, () => _0x58a015("kitchen"));
        } else {
          _0x58a015("kitchen");
        }
      }
    });
    const _0x47b798 = () => _0xbf5ed7.flags.gdComp ? _0x25709e(_0x4016d0) : _0x4016d0();
    if (_0x4eeee2) {
      _0x58a015("story", {
        lines: _0x4eeee2,
        next: () => {
          _0x5b55cf();
          _0x47b798();
        }
      });
    } else {
      _0x47b798();
    }
  }
  _0x19e10f.scr.daycard = {
    enter(_0x138e4b) {
      _0xaf18a.classList.add("hidden");
      _0x4d92fd.music(null);
      _0x4d92fd.play("gong");
      const _0x390cd3 = _0x3777d0 - _0xbf5ed7.day;
      _0x55ee07.innerHTML = "<div class=\"daycard\"><div class=\"d1\">Ngày " + _0xbf5ed7.day + "</div><div class=\"d2\">" + (_0xbf5ed7.freeMode ? _0x14aaa7() ? "Chương 5 · Tí nối nghiệp" : _0x121d51() ? "Chương 4 · Thương hiệu" : _0xbf5ed7.ch3 >= 1 ? "Chương 3 · Tiệm trên phố" : _0xbf5ed7.ch2 >= 3 ? "Tiệm Xôi Bà Tám" : "Chương 2 · Mở tiệm" : _0x390cd3 > 0 ? "Còn " + (_0x390cd3 + 1) + " ngày trả nợ" : "Ngày cuối cùng!") + "</div>\n      <div class=\"d3\">" + (_0xbf5ed7.freeMode ? _0x1bb751() ? "Mốc tiếp: " + _0x1bb751().name : "" : "Nợ còn: " + _0x9c212e(Math.max(0, _0xbf5ed7.debt))) + "</div></div>";
      this.t = 0;
      this.next = _0x138e4b.next;
      this.done = false;
      _0x55ee07.onclick = () => this.finish();
    },
    finish() {
      if (!this.done) {
        this.done = true;
        _0x55ee07.onclick = null;
        _0x55ee07.innerHTML = "";
        _0x4d92fd.play("rooster");
        this.next();
      }
    },
    update(_0x449d8a) {
      this.t += _0x449d8a;
      if (this.t > 2.6) {
        this.finish();
      }
    },
    draw() {
      if (_0x2aedb1) {
        _0x19e10f.storyBg = "kitchen";
        _0x19e10f.scr.story.draw();
        return;
      }
      _0xfeb5dc("bg_title", true);
      _0xca5277.fillStyle = "rgba(20,10,30,.6)";
      _0xca5277.fillRect(0, 0, _0xc10b19, _0x2d0f1c);
    }
  };
  const _0x51468c = () => _0xbf5ed7.ch2 >= 3 ? "Mở cửa bán ➜" : _0xbf5ed7.ch2 >= 1 ? "Ra sạp bán ➜" : "Gánh ra chợ ➜";
  _0x19e10f.scr.kitchen = {
    enter() {
      _0x4d92fd.music("bgm_kitchen");
      this.plan = {};
      this.cook = null;
      this.batT = 0;
      _0x5f18ca();
      _0x55ee07.innerHTML = "\n      <div class=\"cookbar hidden\"><div class=\"cb-t\">Đang đồ xôi…</div><div class=\"bar\"><i></i></div></div>\n      <div class=\"panel paper kitchen-panel\">\n        <div class=\"ph\">" + _0x1525be("ico_pot") + " <b>" + (_0x121d51() ? "Bếp" : _0xbf5ed7.ch2 >= 3 ? "Bếp Tiệm Xôi" : "Bếp nhà Bà Tám") + "</b><span class=\"muted\"></span>" + (_0x121d51() ? "<button class=\"btn gold small\" id=\"bBr\">" + _0x1525be("ico_branch", "ico") + " Chi nhánh</button>" : "") + "<button class=\"btn gold small\" id=\"bUpg\">" + _0x1525be("ico_up", "ico") + " Nâng cấp</button></div>\n        <div class=\"scroll\">\n          <div id=\"order\"></div>\n          <div class=\"sec\">Kho nguyên liệu <span class=\"muted\">· giá chợ hôm nay</span></div>\n          <div id=\"stock\" class=\"stock\"></div>\n          <div class=\"sec\">Chọn món để đồ</div>\n          <div id=\"recipes\"></div>\n          <div class=\"sec\">Xôi đã chín</div>\n          <div id=\"cooked\" class=\"cooked\"></div>\n        </div>\n        <div class=\"foot\">\n          <div class=\"cost\" id=\"cost\"></div>\n          <div class=\"row\">\n            <button class=\"btn green\" id=\"bCook\">Đi chợ & Đồ xôi</button>\n            <button class=\"btn red\" id=\"bGo\">" + (_0x5e2a80() ? "Nghỉ bán ➜" : _0x51468c()) + "</button>\n          </div>\n          <button class=\"btn grey small hidden\" id=\"bLoan\">Hết vốn? Vay bà Hai hàng xóm 100k</button>\n        </div>\n      </div>";
      _0x1d672b("#bCook").onclick = () => this.startCook();
      _0x1d672b("#bUpg").onclick = () => {
        _0x4d92fd.play("click");
        if (this.cook) {
          return _0x991d3e("Đang đồ xôi, lát nữa hãy nâng cấp!");
        }
        _0x2112fe(() => this.render());
      };
      _0x1d672b("#bLoan").onclick = () => {
        _0x4d92fd.play("click");
        _0x57f03a("Vay bà Hai hàng xóm", "Bà Hai cho vay <b>100.000đ</b> làm vốn, phải trả <b>120.000đ</b> (cộng vào nợ).", [{
          label: "Thôi",
          cls: "grey"
        }, {
          label: "Vay",
          cls: "gold",
          fn: () => {
            _0xbf5ed7.money += 100000;
            _0xbf5ed7.debt += 120000;
            if (_0xbf5ed7.chapter === 1) {
              _0xbf5ed7.flags.vayHai = 1;
            }
            _0x4d92fd.play("coin");
            _0x5f18ca();
            this.render();
            _0x690d06();
          }
        }], "paper");
      };
      if (_0x1d672b("#bBr")) {
        _0x1d672b("#bBr").onclick = () => {
          _0x4d92fd.play("click");
          if (this.cook) {
            return _0x991d3e("Đang đồ xôi, lát nữa hãy xem chi nhánh!");
          }
          _0x5aff98(() => this.render());
        };
      }
      _0x1d672b("#bGo").onclick = () => {
        _0x4d92fd.play("click");
        if (_0x5e2a80()) {
          return _0x41bfab();
        }
        if (this.cook) {
          return _0x991d3e("Xôi đang trên bếp, đợi chín đã!");
        }
        if (!Object.values(_0xbf5ed7.cooked).some(_0x42e404 => _0x42e404 > 0)) {
          return _0x991d3e(_0xe9a99e() ? "Chưa có xôi thì lấy gì mà bán!" : _0xbf5ed7.ch2 >= 3 ? "Chưa có xôi mà mở cửa gì hả con!" : "Chưa có xôi mà gánh gì hả con!");
        }
        _0x58a015("pricing");
      };
      this.render();
      if (_0xbf5ed7.flags.tutK) {
        if (_0xbf5ed7.rv4 && !_0xbf5ed7.rv4.strat) {
          setTimeout(() => {
            if (_0x19e10f.screen === "kitchen" && !_0x2aedb1) {
              _0x5f2c58(() => this.render());
            }
          }, 500);
        } else if (_0x4c0cb4()) {
          setTimeout(() => {
            if (_0x19e10f.screen === "kitchen" && !_0x2aedb1 && !this.cook) {
              _0x161ada(() => {
                _0x5f18ca();
                this.render();
              });
            }
          }, 500);
        }
      } else {
        _0xbf5ed7.flags.tutK = 1;
        setTimeout(() => _0x39c0d1(_0x21d95e), 400);
      }
    },
    need() {
      const _0x3b17e3 = {};
      for (const _0x1081e8 in this.plan) {
        for (const _0x348872 of _0xaa20ba[_0x1081e8].ing) {
          _0x3b17e3[_0x348872] = (_0x3b17e3[_0x348872] || 0) + this.plan[_0x1081e8];
        }
      }
      let _0x5b1b6c = 0;
      const _0x2ba2c6 = {};
      for (const _0x451ce4 in _0x3b17e3) {
        const _0xa22677 = Math.max(0, _0x3b17e3[_0x451ce4] - (_0xbf5ed7.stock[_0x451ce4] || 0));
        if (_0xa22677) {
          _0x2ba2c6[_0x451ce4] = _0xa22677;
          _0x5b1b6c += _0xa22677 * _0x426676(_0x451ce4);
        }
      }
      return {
        need: _0x3b17e3,
        buy: _0x2ba2c6,
        cost: _0x5b1b6c,
        batches: Object.values(this.plan).reduce((_0x4aac75, _0xfc2e53) => _0x4aac75 + _0xfc2e53, 0)
      };
    },
    render() {
      const _0x5d0cf4 = _0x1d672b("#recipes");
      _0x5d0cf4.innerHTML = "";
      const _0xd4d3b6 = _0x47e263.filter(_0xa9254 => _0xbf5ed7.unlocked.includes(_0xa9254)).concat(_0x47e263.filter(_0x431f84 => !_0xbf5ed7.unlocked.includes(_0x431f84)));
      for (const _0x3f0caa of _0xd4d3b6) {
        const _0x4386f0 = _0xaa20ba[_0x3f0caa];
        const _0x34b560 = !_0xbf5ed7.unlocked.includes(_0x3f0caa);
        const _0x7c836b = _0x34b560 ? _0x1942f4(_0x3f0caa) : null;
        const _0x383b5e = _0x5ae569("div", "rrow" + (_0x34b560 ? " locked" : ""));
        const _0x305b76 = _0x4386f0.ing.map(_0x2fc41e => "<span class=\"ing " + ((_0xbf5ed7.stock[_0x2fc41e] || 0) > 0 ? "has" : "") + "\" title=\"" + _0x199e77[_0x2fc41e].name + "\">" + _0x1525be("ing_" + _0x2fc41e) + "<i>" + (_0xbf5ed7.stock[_0x2fc41e] || 0) + "</i></span>").join("");
        _0x383b5e.innerHTML = "\n        <div class=\"ri\">" + _0x1525be("xoi_" + _0x3f0caa, "ico xl") + "</div>\n        <div class=\"rt\"><b>" + _0x4386f0.name + "</b><div class=\"ings\">" + _0x305b76 + "</div></div>\n        " + (_0x34b560 ? _0x7c836b ? "<button class=\"btn grey small learn\">" + _0x7c836b.label + "</button>" : "<button class=\"btn gold small learn\">Học " + _0x2da126(_0x4386f0.learn) + "</button>" : "<div class=\"stepper\"><button class=\"m\">−</button><b>" + (this.plan[_0x3f0caa] || 0) + "</b><button class=\"p\">+</button></div>");
        if (_0x34b560 && _0x7c836b) {
          _0x1d672b(".learn", _0x383b5e).onclick = () => {
            _0x4d92fd.play("click");
            _0x991d3e(_0x4386f0.name + ": " + _0x7c836b.hint);
          };
        } else if (_0x34b560) {
          _0x1d672b(".learn", _0x383b5e).onclick = () => {
            _0x4d92fd.play("click");
            _0x57f03a("Học món " + _0x4386f0.name, "<div class=\"center\">" + _0x1525be("xoi_" + _0x3f0caa, "ico xxl") + "</div><p>" + _0x4386f0.desc + "</p><p>Nguyên liệu: " + _0x4386f0.ing.map(_0x585759 => _0x199e77[_0x585759].name).join(", ") + ".</p><p>Học nghề từ bà hàng xóm: <b>" + _0x9c212e(_0x4386f0.learn) + "</b></p>", [{
              label: "Thôi",
              cls: "grey"
            }, {
              label: "Học ngay",
              cls: "gold",
              fn: () => {
                if (_0xbf5ed7.money < _0x4386f0.learn) {
                  return _0x991d3e("Không đủ tiền học nghề!", "bad");
                }
                _0xbf5ed7.money -= _0x4386f0.learn;
                _0xbf5ed7.unlocked.push(_0x3f0caa);
                _0xbf5ed7.prices[_0x3f0caa] = _0x1ce869(_0x3f0caa);
                _0x4d92fd.play("happy");
                _0x991d3e("Đã học " + _0x4386f0.name + "!", "good");
                _0x5f18ca();
                this.render();
                _0x690d06();
                _0x5b55cf();
              }
            }], "paper");
          };
        } else {
          _0x1d672b(".m", _0x383b5e).onclick = () => {
            if (!this.cook) {
              this.plan[_0x3f0caa] = Math.max(0, (this.plan[_0x3f0caa] || 0) - 1);
              if (!this.plan[_0x3f0caa]) {
                delete this.plan[_0x3f0caa];
              }
              _0x4d92fd.play("click");
              this.render();
            }
          };
          _0x1d672b(".p", _0x383b5e).onclick = () => {
            if (this.cook) {
              return;
            }
            if (this.need().batches >= _0x34fd23()) {
              return _0x991d3e("Nồi chõ chỉ đồ được tối đa " + _0x34fd23() + " mẻ một lượt! (Nâng cấp nồi to hơn)");
            }
            this.plan[_0x3f0caa] = (this.plan[_0x3f0caa] || 0) + 1;
            _0x4d92fd.play("click");
            this.render();
          };
        }
        _0x383b5e.querySelector(".ri").onclick = () => _0x991d3e(_0x4386f0.name + ": " + _0x4386f0.desc);
        _0x5d0cf4.appendChild(_0x383b5e);
      }
      const _0x2cefa4 = _0x1d672b("#stock");
      _0x2cefa4.innerHTML = "";
      for (const _0x25681b in _0x199e77) {
        if (!_0x1a2db1(_0x199e77[_0x25681b])) {
          continue;
        }
        const _0x49c88f = _0xbf5ed7.priceMul[_0x25681b] || 1;
        const _0x3417ce = _0x49c88f > 1.07 ? "<em class=\"up\">▲</em>" : _0x49c88f < 0.93 ? "<em class=\"dn\">▼</em>" : "";
        const _0x39dcda = _0x5ae569("div", "chip", _0x1525be("ing_" + _0x25681b) + "<b>" + (_0xbf5ed7.stock[_0x25681b] || 0) + "</b><small>" + _0x5e68cf(_0x426676(_0x25681b)) + _0x3417ce + "</small>");
        _0x39dcda.onclick = () => this.buyOne(_0x25681b);
        _0x2cefa4.appendChild(_0x39dcda);
      }
      const _0x3d9222 = _0x1d672b("#cooked");
      const _0xd7150c = Object.entries(_0xbf5ed7.cooked).filter(([, _0x38fb67]) => _0x38fb67 > 0);
      _0x3d9222.innerHTML = _0xd7150c.length ? _0xd7150c.map(([_0x46edb3, _0x110fb0]) => "<span class=\"cchip\">" + _0x1525be("xoi_" + _0x46edb3) + "<b>" + _0x110fb0 + "</b></span>").join("") : "<span class=\"muted\">Chưa có mẻ nào. Chọn món rồi bấm \"Đi chợ & Đồ xôi\".</span>";
      const _0x48d113 = this.need();
      _0x1d672b("#cost").innerHTML = _0x48d113.batches ? _0x48d113.batches + " mẻ · Cần mua thêm: <b class=\"" + (_0x48d113.cost > _0xbf5ed7.money ? "neg" : "") + "\">" + _0x9c212e(_0x48d113.cost) + "</b> · " + Math.round(_0x48d113.batches * _0x534f0c()) + "s" : "<span class=\"muted\">Bấm + để chọn số mẻ (1 mẻ = " + _0x5e168c + " phần)</span>";
      _0x1d672b("#bCook").disabled = !!this.cook || !_0x48d113.batches;
      _0x1d672b("#bGo").disabled = !!this.cook;
      const _0x25bd02 = Math.min(..._0xbf5ed7.unlocked.map(_0xbd9ca => _0x5511de(_0xbd9ca)));
      const _0x1b8d5f = _0x1d672b("#order");
      if (_0x1b8d5f) {
        _0x1b8d5f.innerHTML = _0x37270e();
        const _0x285916 = _0x1d672b("#bOrder");
        if (_0x285916) {
          _0x285916.onclick = () => {
            _0x1405f3();
            this.render();
          };
        }
      }
      _0x1d672b("#bLoan").classList.toggle("hidden", !(_0xbf5ed7.money < _0x25bd02) || !!Object.values(_0xbf5ed7.cooked).some(_0x532027 => _0x532027 > 0) || !!this.cook);
    },
    buyOne(_0x5aa82f) {
      _0x4d92fd.play("click");
      const _0x4026b0 = _0x199e77[_0x5aa82f];
      const _0x47e7b3 = 999;
      let _0x163578 = 1;
      const _0x46f7dd = () => _0x426676(_0x5aa82f);
      const _0xb2d5d6 = () => Math.max(1, Math.min(_0x47e7b3, Math.floor(_0xbf5ed7.money / _0x46f7dd())));
      _0x57f03a(_0x1525be("ing_" + _0x5aa82f, "ico xl") + " " + _0x4026b0.name, "<p>" + _0x4026b0.desc + "</p>\n      <div class=\"kv\"><span>Giá hôm nay</span><b>" + _0x9c212e(_0x46f7dd()) + "/" + _0x4026b0.unit + "</b></div>\n      <div class=\"kv\"><span>Trong kho</span><b>" + (_0xbf5ed7.stock[_0x5aa82f] || 0) + " " + _0x4026b0.unit + "</b></div>\n      <div class=\"stepper big\"><button id=\"q-\">−</button><label class=\"qin\"><input id=\"qIn\" type=\"text\" inputmode=\"numeric\" pattern=\"[0-9]*\" maxlength=\"3\" value=\"1\" aria-label=\"Số lượng\"><span>" + _0x4026b0.unit + "</span></label><button id=\"q+\">+</button></div>\n      <div class=\"qquick\">" + [5, 10, 20].map(_0xae62c4 => "<button class=\"btn gold\" data-q=\"" + _0xae62c4 + "\">×" + _0xae62c4 + "</button>").join("") + "<button class=\"btn gold\" data-q=\"max\">Tối đa</button></div>", [{
        label: "Đóng",
        cls: "grey"
      }, {
        label: "Mua " + _0x9c212e(_0x46f7dd()),
        cls: "green",
        keep: true,
        fn: () => {
          const _0x2ad7ae = _0x163578 * _0x46f7dd();
          if (_0x2ad7ae > _0xbf5ed7.money) {
            _0x4d92fd.play("wrong");
            return _0x991d3e("Không đủ tiền! Bấm \"Tối đa\" để mua vừa đủ.", "bad");
          }
          _0x543cdd();
          _0xbf5ed7.money -= _0x2ad7ae;
          _0xbf5ed7.stock[_0x5aa82f] = (_0xbf5ed7.stock[_0x5aa82f] || 0) + _0x163578;
          _0xbf5ed7.today.cost += _0x2ad7ae;
          _0x4d92fd.play("buy");
          _0x5f18ca();
          this.render();
          _0x690d06();
        }
      }], "paper");
      const _0x176f48 = _0x1d672b("#qIn");
      const _0x112f71 = _0x1d672b(".mbtns .btn.green");
      const _0x59ea6e = (_0x8da652, _0x336999) => {
        _0x163578 = Math.max(1, Math.min(_0x47e7b3, Math.floor(+_0x8da652) || 1));
        if (!_0x336999) {
          _0x176f48.value = _0x163578;
        }
        _0x112f71.textContent = "Mua " + _0x9c212e(_0x163578 * _0x46f7dd());
        _0x112f71.classList.toggle("short", _0x163578 * _0x46f7dd() > _0xbf5ed7.money);
      };
      _0x176f48.oninput = () => {
        _0x176f48.value = _0x176f48.value.replace(/\D/g, "").slice(0, 3);
        _0x59ea6e(_0x176f48.value || 1, true);
      };
      _0x176f48.onfocus = () => {
        _0x176f48.placeholder = _0x163578;
        _0x176f48.value = "";
      };
      _0x176f48.onblur = () => _0x59ea6e(_0x176f48.value || _0x163578);
      _0x176f48.onkeydown = _0x5c8cfc => {
        if (_0x5c8cfc.key === "Enter") {
          _0x176f48.blur();
          _0x112f71.click();
        }
      };
      _0x1d672b("#q-").onclick = () => {
        _0x4d92fd.play("click");
        _0x59ea6e(_0x163578 - 1);
      };
      _0x1d672b("#q\\+").onclick = () => {
        _0x4d92fd.play("click");
        _0x59ea6e(_0x163578 + 1);
      };
      for (const _0x1c9778 of document.querySelectorAll(".qquick .btn")) {
        _0x1c9778.onclick = () => {
          _0x4d92fd.play("click");
          _0x59ea6e(_0x1c9778.dataset.q === "max" ? _0xb2d5d6() : +_0x1c9778.dataset.q);
        };
      }
      _0x59ea6e(1);
    },
    startCook() {
      const _0x56cccf = this.need();
      if (_0x56cccf.batches) {
        if (_0x56cccf.cost > _0xbf5ed7.money) {
          _0x4d92fd.play("wrong");
          return _0x991d3e("Không đủ tiền đi chợ! Bớt vài mẻ đi con.", "bad");
        }
        _0xbf5ed7.money -= _0x56cccf.cost;
        _0xbf5ed7.today.cost += _0x56cccf.cost;
        for (const _0x3ba0ab in _0x56cccf.buy) {
          _0xbf5ed7.stock[_0x3ba0ab] = (_0xbf5ed7.stock[_0x3ba0ab] || 0) + _0x56cccf.buy[_0x3ba0ab];
        }
        for (const _0x2861e5 in _0x56cccf.need) {
          _0xbf5ed7.stock[_0x2861e5] -= _0x56cccf.need[_0x2861e5];
        }
        this.cook = {
          plan: this.plan,
          t: 0,
          total: _0x56cccf.batches * _0x534f0c()
        };
        this.plan = {};
        if (_0x56cccf.cost) {
          _0x4d92fd.play("buy");
          _0x9a2638(60, 150, "-" + _0x9c212e(_0x56cccf.cost), "bad");
        }
        setTimeout(() => _0x4d92fd.play("fire"), 300);
        _0x5f18ca();
        this.render();
        _0x1d672b(".cookbar").classList.remove("hidden");
      }
    },
    update(_0xded537) {
      if (!this.cook) {
        return;
      }
      this.cook.t += _0xded537;
      this.batT += _0xded537;
      if (this.batT > 1.1) {
        this.batT = 0;
        _0x4d92fd.play("boil", 0.35);
      }
      const _0x42fcc2 = Math.min(1, this.cook.t / this.cook.total);
      _0x1d672b(".cookbar .bar i").style.width = _0x42fcc2 * 100 + "%";
      _0x1d672b(".cookbar .cb-t").textContent = "Đang đồ xôi… còn " + Math.ceil(this.cook.total - this.cook.t) + "s";
      if (_0x42fcc2 >= 1) {
        for (const _0x61ab4f in this.cook.plan) {
          _0xbf5ed7.cooked[_0x61ab4f] = (_0xbf5ed7.cooked[_0x61ab4f] || 0) + this.cook.plan[_0x61ab4f] * _0x5e168c;
        }
        const _0x405c96 = Object.keys(this.cook.plan).map(_0x569e20 => _0xaa20ba[_0x569e20].name).join(", ");
        this.cook = null;
        _0x4d92fd.play("ding");
        _0x1d672b(".cookbar").classList.add("hidden");
        _0x991d3e("Xôi chín thơm phức! " + _0x405c96, "good");
        _0x9a2638(70, 40, "Chín rồi!", "good");
        this.render();
        _0x690d06();
      }
    },
    draw() {
      _0xfeb5dc("bg_kitchen");
      const _0x1723a8 = !!this.cook;
      const _0x2a4841 = Math.floor(_0x19e10f.t * (_0x1723a8 ? 10 : 4)) % 4;
      _0x6d5c39("pot", _0x2a4841, 62, 48, 56, 60);
      if (_0x1723a8) {
        const _0x225831 = Math.floor(_0x19e10f.t * 8) % 4;
        _0x6d5c39("steam", _0x225831, 78, 28, 24, 24);
        _0x6d5c39("steam", (_0x225831 + 2) % 4, 70, 22, 24, 24, true);
        _0xca5277.globalAlpha = 0.15 + Math.sin(_0x19e10f.t * 12) * 0.05;
        _0xca5277.fillStyle = "#f8a040";
        _0xca5277.fillRect(66, 96, 48, 14);
        _0xca5277.globalAlpha = 1;
      }
      let _0x81ab85 = 0;
      if (_0x1723a8) {
        _0x81ab85 = Math.floor(_0x19e10f.t * 6) % 2;
      } else {
        _0x81ab85 = Math.floor(_0x19e10f.t * 2) % 9 === 0 ? 2 : 0;
      }
      if (_0xe9a99e()) {
        _0x6d5c39("char_ti", _0x1723a8 ? 1 + Math.floor(_0x19e10f.t * 6) % 2 : 0, 106, 104, 24, 34, true);
      } else {
        _0x6d5c39("batam_stand", _0x81ab85, 106, 104, 24, 34, true);
      }
      _0x6d5c39("cat", Math.floor(_0x19e10f.t * 1.2) % 2, 44, 134, 18, 8);
    }
  };
  _0x19e10f.scr.pricing = {
    enter() {
      _0x4d92fd.music("bgm_market");
      _0x5f18ca();
      _0x55ee07.innerHTML = "\n      <div class=\"panel chalk pricing\">\n        <div class=\"ph chalk-t\">BẢNG GIÁ HÔM NAY</div>\n        <div class=\"scroll\" id=\"plist\"></div>\n        <div class=\"foot\">\n          <div class=\"hint\" id=\"phint\"></div>\n          <div class=\"row\"><button class=\"btn grey\" id=\"bBack\">Về bếp</button><button class=\"btn red\" id=\"bOpen\">Bày hàng!</button></div>\n        </div>\n      </div>";
      _0x1d672b("#bBack").onclick = () => {
        _0x4d92fd.play("click");
        _0x58a015("kitchen");
      };
      _0x1d672b("#bOpen").onclick = () => {
        _0x4d92fd.play("click");
        _0x58a015("market");
      };
      this.render();
    },
    render() {
      const _0xdb43ca = _0x1d672b("#plist");
      _0xdb43ca.innerHTML = "";
      let _0xa7cea3 = false;
      for (const _0x5cc1ff of _0x47e263) {
        const _0x5c8af7 = _0xbf5ed7.cooked[_0x5cc1ff] || 0;
        if (!_0x5c8af7) {
          continue;
        }
        const _0x395440 = _0xbf5ed7.prices[_0x5cc1ff];
        const _0x1cf15d = _0x1ce869(_0x5cc1ff);
        const _0x814c6d = _0x395440 / _0x1cf15d;
        const _0x24bf0a = _0x814c6d > 1.3 ? "hot" : _0x814c6d > 1.1 ? "warm" : _0x814c6d < 0.85 ? "cheap" : "ok";
        if (_0x814c6d > 1.3) {
          _0xa7cea3 = true;
        }
        const _0x448ec0 = _0x5ae569("div", "prow " + _0x24bf0a, "\n        " + _0x1525be("xoi_" + _0x5cc1ff, "ico xl") + "\n        <div class=\"pt\"><b>" + _0xaa20ba[_0x5cc1ff].name + "</b><small>còn " + _0x5c8af7 + " phần · vốn ~" + _0x5e68cf(_0xd98242(_0x5cc1ff)) + " · giá chợ " + _0x5e68cf(_0x1cf15d) + "</small></div>\n        <div class=\"stepper\"><button class=\"m\">−</button><b>" + _0x5e68cf(_0x395440) + "</b><button class=\"p\">+</button></div>");
        _0x1d672b(".m", _0x448ec0).onclick = () => {
          _0xbf5ed7.prices[_0x5cc1ff] = Math.max(3000, _0x395440 - 1000);
          _0x4d92fd.play("click");
          this.render();
        };
        _0x1d672b(".p", _0x448ec0).onclick = () => {
          _0xbf5ed7.prices[_0x5cc1ff] = Math.min(Math.max(99000, Math.ceil(_0x1cf15d * 1.6 / 1000) * 1000), _0x395440 + 1000);
          _0x4d92fd.play("click");
          this.render();
        };
        _0xdb43ca.appendChild(_0x448ec0);
      }
      _0x1d672b("#phint").innerHTML = _0xa7cea3 ? _0x1525be("ico_warn") + " Bán cắt cổ thế này khách chê, quản lý thị trường sờ gáy đấy!" : "Vé chợ hôm nay: <b>" + _0x9c212e(_0x3a7308) + "</b>. Giá phải chăng thì đông khách.";
      _0x1d672b("#phint").className = "hint" + (_0xa7cea3 ? " warnt" : "");
    },
    draw() {
      _0xfeb5dc("bg_market");
      _0xca5277.fillStyle = "rgba(20,12,10,.35)";
      _0xca5277.fillRect(0, 0, _0xc10b19, _0x2d0f1c);
    }
  };
  const _0x13db09 = [{
    x: 4,
    y: 156,
    sit: true,
    stool: "stool_red",
    sx: 6,
    sy: 184
  }, {
    x: 152,
    y: 156,
    sit: true,
    stool: "stool_blue",
    sx: 154,
    sy: 184
  }, {
    x: 30,
    y: 164,
    sit: false,
    raise: 30
  }, {
    x: 126,
    y: 164,
    sit: false,
    raise: 30
  }, {
    x: 54,
    y: 160,
    sit: true,
    stool: "stool_blue",
    sx: 56,
    sy: 188,
    ghe: 1,
    bub: -12
  }, {
    x: 102,
    y: 160,
    sit: true,
    stool: "stool_red",
    sx: 104,
    sy: 188,
    ghe: 2,
    bub: -12
  }];
  function _0x1303a9() {
    const _0x2e8a4b = Math.min(4, 2 + Math.floor((_0xbf5ed7.day - 1) / 2));
    return Math.min(_0x13db09.length, _0x2e8a4b + _0x592c27("ghe") + (_0xbf5ed7.flags.festival === _0xbf5ed7.day ? 1 : 0));
  }
  const _0x1d50a7 = {};
  function _0x35e85e() {
    let _0x243ba3 = 0;
    let _0x17ec91 = 0;
    for (const _0x1409cf in _0xbf5ed7.cooked) {
      if (_0xbf5ed7.cooked[_0x1409cf] > 0) {
        _0x243ba3 += _0xbf5ed7.prices[_0x1409cf] / _0x1ce869(_0x1409cf);
        _0x17ec91++;
      }
    }
    if (_0x17ec91) {
      return _0x243ba3 / _0x17ec91;
    } else {
      return 1;
    }
  }
  _0x19e10f.scr.market = {
    enter() {
      _0x4d92fd.music("bgm_market");
      Object.assign(_0x1d50a7, {
        time: 0,
        spawnT: 1.5,
        finished: false,
        _ct: -1,
        thue: null,
        taxDone: false,
        tax: 0,
        taxAt: _0x1ea00b() ? _0x3d90fc(22, _0x45877a - 18) : Infinity,
        cust: [],
        hand: null,
        hand2: null,
        tiT: 0,
        teoT: 0,
        tiItem: null,
        teoItem: null,
        wrapping: 0,
        ended: false,
        endT: 0,
        revenue: 0,
        tips: 0,
        served: 0,
        parts: 0,
        fleeParts: 0,
        lost: 0,
        lostPricey: 0,
        fines: 0,
        fineQltt: 0,
        fineTtp: 0,
        fineTax: 0,
        fineVs: 0,
        fleeLost: 0,
        soldout: 0,
        confiscated: 0,
        appN: 0,
        appFee: 0,
        vs: null,
        vsDone: false,
        vsAt: _0x121d51() && Math.random() < _0x7a8a69 ? _0x3d90fc(25, _0x45877a - 20) : Infinity,
        kolAt: _0x121d51() && Math.random() < _0x34ec40 ? _0x3d90fc(12, 55) : Infinity,
        shoutT: 6,
        qltt: null,
        qlttCount: 0,
        rain: _0xbf5ed7.flags.rain === _0xbf5ed7.day,
        festival: _0xbf5ed7.flags.festival === _0xbf5ed7.day,
        drops: [],
        puffs: [],
        chase: null,
        gd: null,
        teo: _0xbf5ed7.teo ? {
          x: _0x1b038c.x,
          y: _0x1b038c.y,
          st: "idle"
        } : null,
        runs: [],
        baFrame: 0,
        baT: 0,
        ticker: null,
        ended2: false,
        maxSlots: _0x1303a9(),
        rival: _0xbf5ed7.flags.rival === _0xbf5ed7.day
      });
      const _0x6779f4 = _0x11bdf8();
      _0xbf5ed7.money -= _0x6779f4;
      _0xbf5ed7.today.fee = _0x6779f4;
      _0x5f18ca(this.clockHTML());
      _0x55ee07.innerHTML = "\n      <div class=\"ticker\" id=\"ticker\"><span class=\"muted\">Ai mua xôi đi! Xôi nóng xôi dẻo đây!</span></div>\n      <div class=\"panel wood market-panel\">\n        <div class=\"tray\" id=\"tray\"></div>\n        <div class=\"pack\">\n          <div class=\"leaf\" id=\"leaf\"></div>\n          <button class=\"btn green\" id=\"bWrap\">Gói lá</button>\n          <button class=\"btn grey\" id=\"bDrop\">Lấy lại</button>\n          <button class=\"btn red\" id=\"bEnd\">Dọn hàng</button>\n        </div>\n      </div>\n      <div id=\"chase\" class=\"hidden\"><button class=\"btn red big\">ĐUỔI THEO!</button></div>";
      _0x1d672b("#bWrap").onclick = () => this.wrap();
      _0x1d672b("#bDrop").onclick = () => this.dropHand();
      _0x1d672b("#bEnd").onclick = () => {
        _0x4d92fd.play("click");
        _0x57f03a("Dọn hàng về sớm?", "Phiên chợ sẽ kết thúc ngay. Xôi còn lại để qua đêm sẽ thiu.", [{
          label: "Bán tiếp",
          cls: "green"
        }, {
          label: "Dọn hàng",
          cls: "red",
          fn: () => this.closeEarly()
        }], "paper");
      };
      _0x1d672b("#chase button").onclick = () => this.chaseTap();
      this.renderTray();
      this.renderLeaf();
      if (_0x6779f4) {
        _0x9a2638(4, 214, "-" + _0x9c212e(_0x6779f4) + " vé chợ", "bad");
      }
      if (_0x1d50a7.rain) {
        _0x991d3e("Trời đổ mưa rào… khách thưa hẳn.", "");
      }
      if (_0x1d50a7.festival) {
        _0x991d3e("Ngày rằm! Chợ đông nghịt người!", "good");
      }
      if (_0x1d50a7.rival) {
        _0x991d3e("Bà Năm đầu chợ bán hạ giá, khách thưa hơn…", "bad");
      }
      if (_0x11c399()) {
        setTimeout(() => _0x991d3e("Hôm nay Tí đi học, bà phải tự gói lá!", ""), 600);
      }
      if (_0x589c20()) {
        setTimeout(() => _0x991d3e(_0x5e56ac[_0x589c20()].toast, "bad"), 900);
      }
      if (_0x121d51() && _0xbf5ed7.flags.phot === _0xbf5ed7.day) {
        _0x991d3e("Vụ bị bóc phốt hôm qua làm khách thưa hẳn…", "bad");
      }
      if (_0x121d51() && _0xbf5ed7.rv4) {
        _0x991d3e("\"Xôi Nhanh\" bên cạnh vẫn đang bán phá giá…", "bad");
      }
      if (!_0xbf5ed7.flags.tutM) {
        _0xbf5ed7.flags.tutM = 1;
        setTimeout(() => _0x39c0d1(_0x231f16), 500);
      }
      _0x2181e3.onpointerdown = _0x5ad081 => this.tapCanvas(_0x5ad081);
    },
    exit() {
      _0x2181e3.onpointerdown = null;
    },
    clockHTML() {
      const _0x5193fc = Math.min(1, (_0x1d50a7.time || 0) / _0x45877a);
      const _0x518c67 = 300 + Math.floor(_0x5193fc * 300);
      const _0x2454be = Math.floor(_0x518c67 / 60);
      const _0x1ebadd = _0x518c67 % 60;
      return "<span class=\"clock\">" + _0x1525be("ico_clock") + "<span class=\"ct\">" + _0x2454be + ":" + (_0x1ebadd < 10 ? "0" : "") + _0x1ebadd + "</span></span>";
    },
    say(_0x40347b, _0x29cde8, _0xf050e) {
      const _0x56e254 = _0x1d672b("#ticker");
      if (_0x56e254) {
        _0x56e254.innerHTML = (_0xf050e ? "<img class=\"tp\" src=\"" + _0xf050e + "\">" : "") + "<b>" + _0x40347b + ":</b> " + _0x29cde8;
        _0x56e254.classList.remove("pop");
        _0x56e254.offsetWidth;
        _0x56e254.classList.add("pop");
      }
    },
    renderTray() {
      const _0x13f8c6 = _0x1d672b("#tray");
      if (!_0x13f8c6) {
        return;
      }
      const _0x655fb9 = _0x47e263.filter(_0x34ce4b => _0x34ce4b in _0xbf5ed7.cooked && (_0xbf5ed7.cooked[_0x34ce4b] > 0 || _0x1d50a7.hand && _0x1d50a7.hand.x === _0x34ce4b || _0x1d50a7.hand2 && _0x1d50a7.hand2.x === _0x34ce4b));
      if (_0x655fb9.length && _0x13f8c6.dataset.k === _0x655fb9.join()) {
        for (const _0xd60e01 of _0x13f8c6.children) {
          const _0x32921c = _0xbf5ed7.cooked[_0xd60e01.dataset.x];
          _0xd60e01.querySelector("b").textContent = _0x32921c;
          _0xd60e01.classList.toggle("empty", _0x32921c <= 0);
        }
        return;
      }
      _0x13f8c6.innerHTML = "";
      _0x13f8c6.dataset.k = _0x655fb9.join();
      for (const _0x250e14 of _0x655fb9) {
        const _0x590281 = _0xbf5ed7.cooked[_0x250e14];
        const _0x14be1e = _0x5ae569("button", "titem" + (_0x590281 <= 0 ? " empty" : ""), _0x1525be("xoi_" + _0x250e14, "ico xl") + "<b>" + _0x590281 + "</b><small>" + (_0xaa20ba[_0x250e14].short || _0xaa20ba[_0x250e14].name.replace("Xôi ", "")) + "</small>");
        _0x14be1e.dataset.x = _0x250e14;
        _0x14be1e.onclick = () => this.scoop(_0x250e14);
        _0x13f8c6.appendChild(_0x14be1e);
      }
      if (!_0x13f8c6.children.length) {
        _0x13f8c6.innerHTML = "<div class=\"muted center\">Hết sạch xôi rồi!</div>";
      }
    },
    renderLeaf() {
      const _0x3411ec = _0x1d672b("#leaf");
      if (!_0x3411ec) {
        return;
      }
      const _0x43cc96 = [_0x1d50a7.hand, _0x1d50a7.hand2].filter(Boolean);
      const _0x267289 = _0x43cc96.length > 0 && _0x43cc96.every(_0x8bd3e2 => _0x8bd3e2.packed);
      const _0x59c8b8 = _0x43cc96.map(_0x55ec11 => _0x55ec11.x + (_0x55ec11.packed ? "+" : "-")).join("|");
      if (_0x3411ec.dataset.k !== _0x59c8b8) {
        _0x3411ec.dataset.k = _0x59c8b8;
        if (!_0x43cc96.length) {
          _0x3411ec.innerHTML = "<span class=\"lt\">Lá chuối</span>";
          _0x3411ec.className = "leaf";
        } else {
          _0x3411ec.className = "leaf full" + (_0x267289 ? " packed" : "") + (_0x43cc96.length > 1 ? " two" : "") + (_0x1d50a7.wrapping > 0 ? " wrapping" : "");
          const _0xe5a4b4 = _0x502889 => _0x502889.packed ? "<span class=\"lpk\">" + _0x1525be("package", "ico") + _0x1525be("xoi_" + _0x502889.x, "ico mini") + "</span>" : _0x1525be("xoi_" + _0x502889.x, "ico");
          _0x3411ec.innerHTML = _0x43cc96.map(_0xe5a4b4).join("") + ("<span class=\"lt\">" + (_0x267289 ? "Đã gói" : "Chưa gói") + (_0x43cc96.length > 1 ? " ×2" : "") + "</span>");
          _0x3411ec.title = _0x43cc96.map(_0x1190e0 => _0xaa20ba[_0x1190e0.x].name).join(" + ");
        }
      }
      _0x1d672b("#bWrap").disabled = !_0x43cc96.some(_0x5c6020 => !_0x5c6020.packed) || _0x1d50a7.wrapping > 0;
      _0x1d672b("#bDrop").disabled = !_0x43cc96.length;
    },
    popHand() {
      _0x1d50a7.hand = _0x1d50a7.hand2 || null;
      _0x1d50a7.hand2 = null;
    },
    wrapHelpers() {
      const _0x1f547d = _0x592c27("ti") > 0 && !_0x11c399() && !_0xe9a99e();
      const _0x1a16b8 = !!_0x1d50a7.teo && _0x1d50a7.teo.st !== "away";
      return {
        ti: _0x1f547d,
        teo: _0x1a16b8,
        cap: _0x1f547d && _0x1a16b8 ? 2 : 1
      };
    },
    scoop(_0x5f487b) {
      if (_0x19e10f.paused) {
        return;
      }
      if (this.sellerAway()) {
        _0x4d92fd.play("wrong");
        return _0x991d3e(_0x49a7c1().name + " đang chạy đuổi khách quỵt!");
      }
      if (_0xbf5ed7.cooked[_0x5f487b] <= 0) {
        return;
      }
      const _0x2c25a9 = this.wrapHelpers();
      if (_0x1d50a7.hand && (_0x1d50a7.hand2 || _0x2c25a9.cap < 2)) {
        _0x4d92fd.play("wrong");
        return _0x991d3e(_0x2c25a9.cap < 2 ? "Đang cầm gói xôi, đưa khách hoặc trả lại đã!" : "Tay đầy rồi, đưa khách hoặc bỏ bớt đã!");
      }
      const _0x172342 = !_0x1d50a7.hand;
      const _0x58fee1 = _0x2c25a9.ti && (_0x172342 || !_0x2c25a9.teo);
      const _0x4ed74a = !_0x58fee1 && _0x2c25a9.teo;
      _0xbf5ed7.cooked[_0x5f487b]--;
      const _0x3c7fec = {
        x: _0x5f487b,
        packed: _0x58fee1 || _0x4ed74a
      };
      if (_0x1d50a7.hand) {
        _0x1d50a7.hand2 = _0x3c7fec;
      } else {
        _0x1d50a7.hand = _0x3c7fec;
      }
      if (_0x58fee1) {
        _0x1d50a7.tiT = _0x1d50a7.tiDur = 0.7;
        _0x1d50a7.tiItem = _0x5f487b;
      } else if (_0x4ed74a) {
        _0x1d50a7.teoT = _0x1d50a7.teoDur = 0.7;
        _0x1d50a7.teoItem = _0x5f487b;
      }
      _0x4d92fd.play(_0x3c7fec.packed ? "wrap" : "pop");
      this.renderTray();
      this.renderLeaf();
    },
    dropHand() {
      if (_0x1d50a7.hand) {
        for (const _0x3a5d17 of [_0x1d50a7.hand, _0x1d50a7.hand2]) {
          if (_0x3a5d17) {
            _0xbf5ed7.cooked[_0x3a5d17.x]++;
          }
        }
        _0x1d50a7.hand = _0x1d50a7.hand2 = null;
        _0x4d92fd.play("click");
        this.renderTray();
        this.renderLeaf();
      }
    },
    wrap() {
      if (!!_0x1d50a7.hand && !(_0x1d50a7.wrapping > 0) && !![_0x1d50a7.hand, _0x1d50a7.hand2].some(_0x48699a => _0x48699a && !_0x48699a.packed)) {
        _0x1d50a7.wrapping = _0x46b252();
        _0x4d92fd.play("wrap");
        _0x1d672b("#leaf").classList.add("wrapping");
        this.renderLeaf();
      }
    },
    spawn(_0x124778) {
      const _0x3af289 = _0x13db09.map((_0x4d6a8c, _0x36365a) => _0x36365a).filter(_0x4e1188 => _0x4e1188 < _0x1d50a7.maxSlots && !_0x1d50a7.cust.some(_0x22482b => _0x22482b.slot === _0x4e1188));
      if (!_0x3af289.length) {
        return false;
      }
      const _0x2148cf = _0x31c8b2(_0x3af289);
      const _0x1c33dd = _0x124778 || _0x2dd9d3() || _0x6a5a83(_0x4d7ac3);
      const _0x3255f3 = _0x4d7ac3[_0x1c33dd];
      const _0x3cd773 = [];
      for (const _0x3016f2 of _0xbf5ed7.unlocked) {
        let _0x3f5752 = 1;
        if ((_0xbf5ed7.cooked[_0x3016f2] || 0) > 0) {
          _0x3f5752 += 4;
        }
        if (_0x3255f3.fav.includes(_0x3016f2)) {
          _0x3f5752 += 2;
        }
        _0x3f5752 += _0xda2f80(_0x3016f2);
        if (_0x1c33dd === "ship" && (_0xbf5ed7.cooked[_0x3016f2] || 0) <= 0) {
          _0x3f5752 = 0.3;
        }
        _0x3cd773.push([_0x3016f2, _0x3f5752]);
      }
      let _0x1d4b5c = Math.random() * _0x3cd773.reduce((_0x1b1d7c, _0x318bcf) => _0x1b1d7c + _0x318bcf[1], 0);
      let _0x5b14a2 = _0x3cd773[0][0];
      for (const [_0x41771a, _0x193c84] of _0x3cd773) {
        _0x1d4b5c -= _0x193c84;
        if (_0x1d4b5c <= 0) {
          _0x5b14a2 = _0x41771a;
          break;
        }
      }
      const _0x1aae05 = _0x13db09[_0x2148cf];
      const _0x14475a = _0x1aae05.x < 90;
      const _0x23bbf7 = _0x3255f3.patience * (_0x1d50a7.rain ? 1.2 : 1) * (_0xbf5ed7.day >= 5 ? 0.92 : 1) * _0x58023a() * _0x48ebca() * (_0x5dcab6 && !window.Capacitor ? 0.3 : 1);
      _0x1d50a7.cust.push({
        type: _0x1c33dd,
        slot: _0x2148cf,
        x: _0x14475a ? -26 : _0xc10b19 + 2,
        y: _0x1aae05.y,
        tx: _0x1aae05.x,
        state: "in",
        want: _0x5b14a2,
        patience: _0x23bbf7,
        max: _0x23bbf7,
        mood: 0,
        t: 0,
        emo: null,
        emoT: 0,
        qty: _0x150a1f(_0x1c33dd) || (_0xbf5ed7.ch3 >= 1 ? _0x3d3006(1, 4) : _0xbf5ed7.ch2 >= 3 ? 1 + (Math.random() < 0.35) + (Math.random() < 0.15) : 1)
      });
      const _0x50d272 = _0x1d50a7.cust[_0x1d50a7.cust.length - 1];
      if (Math.random() < _0x294faf(_0x1c33dd)) {
        const _0x30cb25 = _0x3cd773.filter(([_0xd83da9]) => _0xd83da9 !== _0x5b14a2 && (_0xbf5ed7.cooked[_0xd83da9] || 0) > 0);
        if (_0x30cb25.length) {
          _0x50d272.qty = _0x3d3006(1, 2);
          _0x50d272.combo = {
            x2: _0x31c8b2(_0x30cb25)[0],
            q2: _0x3d3006(1, 2),
            got1: false,
            got2: false,
            n: 0,
            gross: 0,
            dish: []
          };
        }
      }
      const _0x37476a = (_0x50d272.qty || 1) + (_0x50d272.combo ? _0x50d272.combo.q2 : 0);
      _0x50d272.patience = _0x50d272.max = _0x23bbf7 * (1 + _0x3b0df1 * (_0x37476a - 1) + (_0x50d272.combo ? 0.2 : 0));
      _0x4d92fd.play("bike", 0.5);
      return true;
    },
    arrive(_0x175c38) {
      const _0x3b28ff = _0x4d7ac3[_0x175c38.type].name;
      const _0x39fa55 = _0xae0a0c(_0x175c38.type);
      if ((_0xbf5ed7.cooked[_0x175c38.want] || 0) <= 0 && (!_0x1d50a7.hand || _0x1d50a7.hand.x !== _0x175c38.want) && (!_0x1d50a7.hand2 || _0x1d50a7.hand2.x !== _0x175c38.want)) {
        this.say(_0x3b28ff, _0x31c8b2(_0x4360f7.soldout).replace("{x}", _0xaa20ba[_0x175c38.want].name.toLowerCase()), _0x39fa55);
        _0x175c38.emo = "emo_q";
        _0x175c38.emoT = 1.5;
        _0x1d50a7.soldout++;
        _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep - _0x11972e, 0, 5);
        if (_0x175c38.type === "ship") {
          _0xbf5ed7.app = _0x5ab951((_0xbf5ed7.app || 4.5) - 0.05, 1, 5);
        }
        return this.leave(_0x175c38, 0);
      }
      if (_0x175c38.combo && (_0xbf5ed7.cooked[_0x175c38.combo.x2] || 0) <= 0) {
        _0x175c38.combo = null;
      }
      const _0x461d07 = _0xbf5ed7.prices[_0x175c38.want] / _0x1ce869(_0x175c38.want);
      if (_0x175c38.type !== "ship" && _0x175c38.type !== "kol" && _0x461d07 > 1.2 && Math.random() < (_0x461d07 - 1.2) * 2) {
        this.say(_0x3b28ff, _0x31c8b2(_0x4360f7.pricey), _0x39fa55);
        _0x175c38.emo = "emo_anger";
        _0x175c38.emoT = 1.5;
        _0x1d50a7.lostPricey++;
        if (Math.random() < 0.5) {
          this.review(_0x175c38, 1 + (Math.random() < 0.5), _0x31c8b2(["Đắt cắt cổ, không quay lại!", "Giá trên trời, ai mua nổi!", "Xôi gì mà đắt như vàng!"]));
        }
        return this.leave(_0x175c38, 2);
      }
      _0x175c38.state = "wait";
      const _0x507c03 = _0x175c38.type === "ship" || _0x175c38.type === "kol" ? _0x4360f7.orderBy[_0x175c38.type] : _0x175c38.qty > 1 ? _0x4360f7.orderQty : _0x4360f7.orderBy[_0x175c38.type] && Math.random() < 0.6 ? _0x4360f7.orderBy[_0x175c38.type] : _0x4360f7.order;
      if (_0x175c38.combo) {
        this.say(_0x3b28ff, _0x31c8b2(_0x4360f7.combo).replace("{n}", _0x175c38.qty).replace("{x}", _0xaa20ba[_0x175c38.want].name.toLowerCase()).replace("{m}", _0x175c38.combo.q2).replace("{y}", _0xaa20ba[_0x175c38.combo.x2].name.toLowerCase()), _0x39fa55);
      } else {
        this.say(_0x3b28ff, _0x31c8b2(_0x507c03).replace("{x}", _0xaa20ba[_0x175c38.want].name.toLowerCase()).replace("{n}", _0x175c38.qty), _0x39fa55);
      }
      _0x4d92fd.play("pop");
    },
    leave(_0x468a64, _0x8e7677) {
      _0x468a64.state = "out";
      _0x468a64.mood = _0x8e7677;
      _0x468a64.tx = _0x468a64.x < 90 ? -30 : _0xc10b19 + 6;
    },
    review(_0x590366, _0x5944f9, _0x14be4) {
      _0xbf5ed7.reviews.push({
        s: _0x5944f9,
        t: _0x14be4,
        who: _0x4d7ac3[_0x590366.type].name,
        day: _0xbf5ed7.day
      });
      if (_0xbf5ed7.reviews.length > 30) {
        _0xbf5ed7.reviews.shift();
      }
    },
    tapCanvas(_0x591d4d) {
      if (_0x19e10f.paused) {
        return;
      }
      const _0x2bf6e6 = _0x2181e3.getBoundingClientRect();
      const _0x44b370 = (_0x591d4d.clientX - _0x2bf6e6.left) / _0x2bf6e6.width * _0xc10b19;
      const _0x2f0292 = (_0x591d4d.clientY - _0x2bf6e6.top) / _0x2bf6e6.height * _0x2d0f1c;
      let _0x41f057 = null;
      for (const _0x2f409d of _0x1d50a7.cust) {
        if (_0x2f409d.state === "wait" && (_0x44b370 >= _0x2f409d.x - 2 && _0x44b370 <= _0x2f409d.x + 26 && _0x2f0292 >= _0x2f409d.y - 26 && _0x2f0292 <= _0x2f409d.y + 36 || _0x2f409d.bub && _0x44b370 >= _0x2f409d.bub[0] && _0x44b370 <= _0x2f409d.bub[0] + _0x2f409d.bub[2] && _0x2f0292 >= _0x2f409d.bub[1] && _0x2f0292 <= _0x2f409d.bub[1] + 24)) {
          _0x41f057 = _0x2f409d;
        }
      }
      if (_0x41f057) {
        this.give(_0x41f057);
      }
    },
    give(_0x1e4efa) {
      if (this.sellerAway()) {
        _0x4d92fd.play("wrong");
        return _0x991d3e(_0x49a7c1().name + " đang chạy đuổi khách quỵt!");
      }
      const _0x1e369f = _0x4d7ac3[_0x1e4efa.type];
      const _0x121aa3 = _0x1e369f.name;
      const _0x3ba9b4 = _0xae0a0c(_0x1e4efa.type);
      if (_0x1d50a7.hand && _0x1d50a7.hand2) {
        const _0x104300 = _0x13f601 => _0x13f601.packed && (_0x1e4efa.combo ? !_0x1e4efa.combo.got1 && _0x13f601.x === _0x1e4efa.want || !_0x1e4efa.combo.got2 && _0x13f601.x === _0x1e4efa.combo.x2 : _0x13f601.x === _0x1e4efa.want);
        if (!_0x104300(_0x1d50a7.hand) && _0x104300(_0x1d50a7.hand2)) {
          [_0x1d50a7.hand, _0x1d50a7.hand2] = [_0x1d50a7.hand2, _0x1d50a7.hand];
        }
      }
      if (!_0x1d50a7.hand) {
        _0x4d92fd.play("wrong");
        return _0x991d3e("Chọn xôi trong mâm trước đã!");
      }
      if (!_0x1d50a7.hand.packed) {
        _0x4d92fd.play("wrong");
        return _0x991d3e("Phải gói lá đã rồi mới đưa khách!");
      }
      let _0x1f845d = _0x1d50a7.hand.x;
      let _0x4a33ac = _0x1e4efa.qty || 1;
      const _0x119729 = _0x1e4efa.combo;
      if (_0x119729) {
        if (!_0x119729.got1 && _0x1f845d === _0x1e4efa.want) {
          _0x119729.got1 = true;
        } else if (!_0x119729.got2 && _0x1f845d === _0x119729.x2) {
          _0x119729.got2 = true;
          _0x4a33ac = _0x119729.q2;
        } else {
          _0x1f845d = null;
        }
      } else if (_0x1f845d !== _0x1e4efa.want) {
        _0x1f845d = null;
      }
      if (!_0x1f845d) {
        _0x4d92fd.play("wrong");
        const _0x5ed35d = _0x119729 && _0x119729.got1 ? _0x119729.x2 : _0x1e4efa.want;
        this.say(_0x121aa3, _0x31c8b2(_0x4360f7.wrong).replace("{x}", _0xaa20ba[_0x5ed35d].name.toLowerCase()), _0x3ba9b4);
        _0x1e4efa.patience -= 3;
        _0x1e4efa.emo = "emo_anger";
        _0x1e4efa.emoT = 1.2;
        if (_0x1e4efa.type === "kol") {
          _0x434691(_0x1e4efa, false, 0);
          _0x1e4efa.kolBad = true;
        }
        _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep - 0.03, 0, 5);
        _0x190ed7();
        return;
      }
      const _0x2cacd1 = Math.min(_0x4a33ac - 1, Math.max(0, _0xbf5ed7.cooked[_0x1f845d] || 0));
      if (_0x2cacd1 > 0) {
        _0xbf5ed7.cooked[_0x1f845d] -= _0x2cacd1;
      }
      const _0x270dd3 = 1 + _0x2cacd1;
      if (_0x119729 && (_0x119729.n += _0x270dd3, _0x119729.gross += _0xbf5ed7.prices[_0x1f845d] * _0x270dd3, _0x119729.dish.push([_0x1f845d, _0x270dd3]), !_0x119729.got1 || !_0x119729.got2)) {
        this.popHand();
        this.renderLeaf();
        this.renderTray();
        const _0x1e3be8 = _0x119729.got1 ? _0x119729.x2 : _0x1e4efa.want;
        _0x4d92fd.play("pop");
        _0x9a2638(_0x1e4efa.x, _0x1e4efa.y - 10, "Còn thiếu " + (_0xaa20ba[_0x1e3be8].short || _0xaa20ba[_0x1e3be8].name.replace("Xôi ", "")), "");
        this.say(_0x121aa3, "Thêm " + (_0x119729.got1 ? _0x119729.q2 : _0x1e4efa.qty) + " phần " + _0xaa20ba[_0x1e3be8].name.toLowerCase() + " nữa là đủ bà ơi!", _0x3ba9b4);
        _0x1e4efa.patience = Math.min(_0x1e4efa.max, _0x1e4efa.patience + 3);
        return;
      }
      const _0x1c8b77 = _0x119729 ? _0x119729.n : _0x270dd3;
      const _0x2e6855 = _0x119729 ? _0x119729.gross : _0xbf5ed7.prices[_0x1f845d] * _0x270dd3;
      const _0x21e792 = _0x1e4efa.type === "ship" ? Math.round(_0x2e6855 * _0x382616 / 1000) * 1000 : 0;
      const _0x4e9fb8 = _0x2e6855 - _0x21e792;
      this.popHand();
      this.renderLeaf();
      this.renderTray();
      const _0x3fee6d = _0xbf5ed7.prices[_0x1e4efa.want] / _0x1ce869(_0x1e4efa.want);
      const _0x432625 = _0x1e4efa.patience / _0x1e4efa.max;
      if (_0x1e369f.w !== 0 && Math.random() < _0x1e369f.flee * (_0x3fee6d > 1.2 ? 1.5 : 1) + (_0xbf5ed7.day > 1 ? 0.015 : 0)) {
        this.say(_0x121aa3, _0x31c8b2(_0x4360f7.flee), _0x3ba9b4);
        _0x1e4efa.state = "flee";
        _0x1e4efa.tx = _0x1e4efa.x < 90 ? -40 : _0xc10b19 + 20;
        _0x1e4efa.mood = 1;
        _0x4d92fd.play("runaway");
        setTimeout(() => this.say(_0x49a7c1().name, _0x31c8b2(_0x4360f7.baFlee), _0xad1d39(_0x49a7c1().who)), 700);
        _0x1d50a7.baFrame = 4;
        _0x1d50a7.baT = 1.6;
        this.startChase(_0x1e4efa, _0x4e9fb8, _0x1c8b77);
        return;
      }
      let _0x19cd75 = 0;
      if (_0x432625 > 0.5 && Math.random() < _0x1e369f.tip) {
        _0x19cd75 = _0x31c8b2([1000, 2000, 2000, 5000]);
      }
      _0xbf5ed7.money += _0x4e9fb8 + _0x19cd75;
      _0x1d50a7.revenue += _0x4e9fb8;
      _0x1d50a7.tips += _0x19cd75;
      _0x1d50a7.served++;
      _0x1d50a7.parts += _0x1c8b77;
      _0xbf5ed7.totalServed++;
      if (_0x21e792) {
        _0x1d50a7.appN++;
        _0x1d50a7.appFee += _0x21e792;
      }
      _0x1e4efa.lastPrice = _0x4e9fb8;
      if (_0x1e369f.w === 0 && !_0x1e4efa.kolBad) {
        _0x434691(_0x1e4efa, true, _0x432625);
      }
      _0xbf5ed7.stats.served += _0x1c8b77;
      for (const [_0x2e3939, _0x5b59b6] of _0x119729 ? _0x119729.dish : [[_0x1f845d, _0x270dd3]]) {
        _0xbf5ed7.stats.dish[_0x2e3939] = (_0xbf5ed7.stats.dish[_0x2e3939] || 0) + _0x5b59b6;
      }
      _0x5b55cf();
      let _0x4f628e = 0.018 + (_0x432625 > 0.6 ? 0.012 : 0) + (_0x3fee6d < 0.9 ? 0.01 : 0) - (_0x3fee6d > 1.2 ? 0.025 : 0);
      _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep + _0x4f628e, 0, 5);
      _0x4d92fd.play("serve", 0.8);
      _0x4d92fd.play("coin");
      _0x9a2638(_0x1e4efa.x, _0x1e4efa.y - 10, (_0x1c8b77 > 1 ? _0x1c8b77 + " gói " : "") + "+" + _0x5e68cf(_0x4e9fb8) + (_0x19cd75 ? " +" + _0x5e68cf(_0x19cd75) + " boa" : ""), "good");
      this.say(_0x121aa3, _0x1e4efa.type === "ship" ? _0x31c8b2(_0x4360f7.shipHappy) : _0x1e4efa.type === "kol" ? _0x31c8b2(_0x4360f7.kolHappy) : _0x1c8b77 < (_0x119729 ? _0x1e4efa.qty + _0x119729.q2 : _0x1e4efa.qty || 1) ? _0x31c8b2(_0x4360f7.partial) : _0x3fee6d < 0.85 && Math.random() < 0.5 ? _0x31c8b2(_0x4360f7.cheap) : _0x31c8b2(_0x4360f7.happy), _0x3ba9b4);
      _0x1e4efa.emo = "emo_heart";
      _0x1e4efa.emoT = 1.4;
      if (_0x1e4efa.type !== "ship" && _0x432625 > 0.6 && Math.random() < 0.35) {
        this.review(_0x1e4efa, 4 + (Math.random() < 0.6), _0x31c8b2(_0x282276));
      }
      _0x1d50a7.baFrame = 3;
      _0x1d50a7.baT = 0.8;
      _0x257142();
      _0x190ed7();
      this.leave(_0x1e4efa, 1);
    },
    sellerAway() {
      return _0x1d50a7.runs.some(_0x4b135c => _0x4b135c.who === "ba");
    },
    startChase(_0x3b445a, _0x36d04d, _0xae9cf2 = 1) {
      const _0x5d18c5 = _0x3b445a.tx < 0 ? -1 : 1;
      const _0x2198c4 = _0x1d50a7.teo;
      const _0x4cdeef = _0x53820b => _0x1d50a7.runs.some(_0xedbeed => _0xedbeed.who === _0x53820b);
      if (_0xbf5ed7.guard && _0xbf5ed7.ch3 >= 1 && !_0x4cdeef("baove")) {
        _0x1d50a7.runs.push({
          c: _0x3b445a,
          price: _0x36d04d,
          parts: _0xae9cf2,
          who: "baove",
          x: _0x43b065.x,
          y: _0x43b065.y,
          st: "wait",
          t: 0.8,
          anim: 0,
          lineT: 0,
          dir: _0x5d18c5
        });
        return;
      }
      if (_0x2198c4 && _0x2198c4.st === "idle") {
        _0x2198c4.st = "away";
        _0x1d50a7.runs.push({
          c: _0x3b445a,
          price: _0x36d04d,
          parts: _0xae9cf2,
          who: "teo",
          x: _0x2198c4.x,
          y: _0x2198c4.y,
          st: "wait",
          t: 0.5,
          anim: 0,
          lineT: 0,
          dir: _0x5d18c5
        });
        return;
      }
      if (_0x1d50a7.chase || this.sellerAway()) {
        _0x1d50a7.fleeLost += _0x36d04d;
        _0x1d50a7.fleeParts += _0xae9cf2;
        return;
      }
      _0x1d50a7.chase = {
        c: _0x3b445a,
        t: 1.9,
        price: _0x36d04d,
        parts: _0xae9cf2,
        dir: _0x5d18c5
      };
      _0x1d672b("#chase").classList.remove("hidden");
    },
    chaseTap() {
      if (!_0x1d50a7.chase) {
        return;
      }
      const {
        c: _0x4c1fc2,
        price: _0x5d8601,
        parts: _0x4ca387,
        dir: _0x5e3ec0
      } = _0x1d50a7.chase;
      _0x1d50a7.chase = null;
      _0x1d672b("#chase").classList.add("hidden");
      _0x1d50a7.runs.push({
        c: _0x4c1fc2,
        price: _0x5d8601,
        parts: _0x4ca387,
        who: "ba",
        x: 78,
        y: 108,
        st: "wait",
        t: 0.15,
        anim: 0,
        lineT: 0,
        dir: _0x5e3ec0
      });
    },
    runUpdate(_0x77f080, _0x366388) {
      const _0x2cd501 = _0x77f080.who;
      const _0x34efd4 = _0x2cd501 === "ba";
      const _0x1ed35b = _0x2cd501 === "teo";
      const _0x236ba8 = _0x34efd4 ? _0x49a7c1().name : _0x1ed35b ? _0xe04ef.teo.name : _0xe04ef.baove.name;
      const _0x88bba5 = _0xad1d39(_0x34efd4 ? _0x49a7c1().who : _0x2cd501);
      const _0x16f7ff = _0x34efd4 ? _0xe9a99e() ? _0x1a84cc : _0x4abefd : _0x1ed35b ? _0x4d3d0e() : _0xe9a99e() ? _0x585cba : _0x135e0c;
      const _0x5abac3 = _0x34efd4 ? {
        x: 78,
        y: 108
      } : _0x1ed35b ? _0x1b038c : _0x43b065;
      const _0x4e6b0c = _0x34efd4 ? 95 : _0x1ed35b ? _0x4cbd9f * 1.4 : 120;
      const _0x2d8ef0 = _0x34efd4 ? _0x2cac0a : _0x1ed35b ? _0xec7970 : _0x193b80;
      _0x77f080.t -= _0x366388;
      _0x77f080.anim += _0x366388;
      if (_0x77f080.lineT > 0) {
        _0x77f080.lineT -= _0x366388;
        if (_0x77f080.lineT <= 0) {
          this.say(_0x4d7ac3[_0x77f080.c.type].name, _0x31c8b2(_0x4360f7.caught), _0xae0a0c(_0x77f080.c.type));
        }
      }
      if (_0x77f080.st === "wait") {
        if (_0x77f080.t <= 0) {
          _0x77f080.st = "run";
          this.say(_0x236ba8, _0x31c8b2(_0x16f7ff.go), _0x88bba5);
          _0x4d92fd.play("runaway");
        }
        return;
      }
      if (_0x77f080.st === "run") {
        _0x77f080.x += _0x77f080.dir * _0x4e6b0c * _0x366388;
        _0x77f080.y += _0x5ab951(_0x25ada0 - _0x77f080.y, _0x366388 * -70, _0x366388 * 70);
        if (Math.random() < _0x366388 * 12) {
          _0x1d50a7.puffs.push({
            x: _0x77f080.x + 4,
            y: _0x77f080.y + 24,
            t: 0
          });
        }
        if (_0x77f080.dir < 0 ? _0x77f080.x <= -30 : _0x77f080.x >= _0xc10b19 + 6) {
          _0x77f080.st = "off";
          _0x77f080.t = 1.1;
        }
        return;
      }
      if (_0x77f080.st === "off") {
        if (_0x77f080.t > 0) {
          return;
        }
        _0x77f080.ok = Math.random() < _0x2d8ef0;
        _0x77f080.st = "back";
        _0x77f080.dir = -_0x77f080.dir;
        if (_0x77f080.ok) {
          _0xbf5ed7.money += _0x77f080.price;
          _0x1d50a7.revenue += _0x77f080.price;
          _0x1d50a7.served++;
          _0x1d50a7.parts += _0x77f080.parts || 1;
          _0xbf5ed7.stats.caught++;
          _0xbf5ed7.stats.served++;
          _0x5b55cf();
          this.say(_0x236ba8, _0x31c8b2(_0x16f7ff.ok), _0x88bba5);
          _0x77f080.lineT = 1.4;
          _0x4d92fd.play("coin");
          _0x9a2638(80, 150, (_0x34efd4 ? "" : _0x1ed35b ? "Tèo " : "Bảo vệ ") + (_0x34efd4 ? "Tóm được! +" : "tóm được! +") + _0x5e68cf(_0x77f080.price), "good");
          _0x257142();
        } else {
          _0x1d50a7.fleeLost += _0x77f080.price;
          _0x1d50a7.fleeParts += _0x77f080.parts || 1;
          _0x4d92fd.play("fail");
          this.say(_0x236ba8, _0x31c8b2(_0x16f7ff.fail), _0x88bba5);
          _0x9a2638(80, 150, "Mất " + _0x5e68cf(_0x77f080.price) + "!", "bad");
        }
        return;
      }
      const _0x2b4ca1 = _0x5abac3.x - _0x77f080.x;
      const _0x23d798 = _0x5abac3.y - _0x77f080.y;
      _0x77f080.dir = _0x2b4ca1 < 0 ? -1 : 1;
      const _0x3c3778 = _0x34efd4 || _0x1ed35b ? 2.2 : 1;
      _0x77f080.x += Math.sign(_0x2b4ca1) * Math.min(Math.abs(_0x2b4ca1), _0x3c3778 * 48 * _0x366388);
      _0x77f080.y += Math.sign(_0x23d798) * Math.min(Math.abs(_0x23d798), _0x3c3778 * 30 * _0x366388);
      if (Math.abs(_0x2b4ca1) < 1 && Math.abs(_0x23d798) < 1 && _0x77f080.lineT <= 0) {
        _0x77f080.done = true;
        if (_0x1ed35b && _0x1d50a7.teo) {
          _0x1d50a7.teo.st = "idle";
          _0x1d50a7.teo.x = _0x1b038c.x;
          _0x1d50a7.teo.y = _0x1b038c.y;
        }
      }
    },
    drawRun(_0x50c095) {
      const _0x161077 = _0x50c095.who;
      const _0x2c3a87 = _0x50c095.st !== "wait";
      let _0x31556b;
      let _0x418ef3;
      if (_0x161077 === "ba") {
        if (_0xe9a99e()) {
          _0x31556b = "char_ti";
          _0x418ef3 = _0x2c3a87 ? 1 + Math.floor(_0x50c095.anim * (_0x50c095.st === "run" ? 14 : 7)) % 2 : 5;
        } else {
          _0x31556b = "batam_run";
          _0x418ef3 = Math.floor(_0x50c095.anim * (_0x50c095.st === "run" ? 14 : 7)) % 2;
        }
      } else {
        _0x31556b = "char_" + _0x161077;
        _0x418ef3 = _0x2c3a87 ? 1 + Math.floor(_0x50c095.anim * (_0x50c095.st === "run" ? 14 : 7)) % 2 : _0x161077 === "teo" ? 0 : 5;
      }
      _0x6d5c39(_0x31556b, _0x418ef3, _0x50c095.x, _0x50c095.y, 24, 34, _0x50c095.dir > 0);
      if (_0x50c095.st === "wait" || _0x50c095.st === "run") {
        _0x4caaeb("emo_excl", _0x50c095.x + 18, _0x50c095.y - 4);
      } else if (_0x50c095.st === "back" && _0x50c095.ok) {
        _0x4caaeb("emo_heart", _0x50c095.x + 18, _0x50c095.y - 2);
      }
    },
    soldOutFor(_0x4728d2) {
      const _0x2b1fdd = _0x1caba4 => (_0xbf5ed7.cooked[_0x1caba4] || 0) > 0 || _0x1d50a7.hand && _0x1d50a7.hand.x === _0x1caba4 || _0x1d50a7.hand2 && _0x1d50a7.hand2.x === _0x1caba4;
      const _0xd6cacf = _0x4728d2.combo;
      if (_0xd6cacf) {
        return !_0xd6cacf.got1 && !_0x2b1fdd(_0x4728d2.want) || !_0xd6cacf.got2 && !_0x2b1fdd(_0xd6cacf.x2);
      } else {
        return !_0x2b1fdd(_0x4728d2.want);
      }
    },
    payPartial(_0x34a2a3) {
      const _0x5aae32 = _0x34a2a3.combo;
      if (!_0x5aae32 || !(_0x5aae32.n > 0) || _0x5aae32.paid) {
        return;
      }
      _0x5aae32.paid = true;
      const _0x39d811 = _0x34a2a3.type === "ship" ? Math.round(_0x5aae32.gross * _0x382616 / 1000) * 1000 : 0;
      _0xbf5ed7.money += _0x5aae32.gross - _0x39d811;
      _0x1d50a7.revenue += _0x5aae32.gross - _0x39d811;
      _0x1d50a7.served++;
      _0x1d50a7.parts += _0x5aae32.n;
      _0xbf5ed7.totalServed++;
      _0xbf5ed7.stats.served += _0x5aae32.n;
      if (_0x39d811) {
        _0x1d50a7.appN++;
        _0x1d50a7.appFee += _0x39d811;
      }
      for (const [_0x19a58b, _0x18fc40] of _0x5aae32.dish) {
        _0xbf5ed7.stats.dish[_0x19a58b] = (_0xbf5ed7.stats.dish[_0x19a58b] || 0) + _0x18fc40;
      }
      _0x9a2638(_0x34a2a3.x, _0x34a2a3.y - 10, "+" + _0x5e68cf(_0x5aae32.gross - _0x39d811), "good");
      _0x257142();
      _0x4d92fd.play("coin");
      _0x5b55cf();
    },
    leaveSoldOut(_0x4fa89f) {
      const _0x540dd7 = _0x4d7ac3[_0x4fa89f.type];
      const _0x45f2f0 = _0x4fa89f.combo;
      const _0x4555b6 = _0x45f2f0 && _0x45f2f0.got1 ? _0x45f2f0.x2 : _0x4fa89f.want;
      this.payPartial(_0x4fa89f);
      this.say(_0x540dd7.name, _0x31c8b2(_0x4360f7.soldoutWait).replace("{x}", _0xaa20ba[_0x4555b6].name.toLowerCase()), _0xae0a0c(_0x4fa89f.type));
      _0x4fa89f.emo = "emo_q";
      _0x4fa89f.emoT = 1.5;
      _0x1d50a7.soldout++;
      _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep - _0x11972e, 0, 5);
      _0x190ed7();
      if (_0x4fa89f.type === "ship") {
        _0xbf5ed7.app = _0x5ab951((_0xbf5ed7.app || 4.5) - 0.05, 1, 5);
      }
      this.leave(_0x4fa89f, 0);
    },
    drawTeo() {
      const _0x5e873d = _0x1d50a7.teo;
      const _0x52a503 = (_0x1d50a7.teoT || 0) > 0 ? 1 + Math.floor(_0x19e10f.t * 12) % 2 : Math.floor(_0x19e10f.t * 0.8) % 7 === 0 ? 4 : 0;
      _0x6d5c39("char_teo", _0x52a503, _0x5e873d.x, _0x5e873d.y, 24, 34);
    },
    drawTi() {
      if (!_0x592c27("ti") || _0x11c399() || _0xe9a99e()) {
        return;
      }
      const _0x55d062 = (_0x1d50a7.tiT || 0) > 0 ? 1 + Math.floor(_0x19e10f.t * 10) % 2 : Math.floor(_0x19e10f.t * 0.7) % 6 === 0 ? 4 : 0;
      _0x6d5c39("char_ti", _0x55d062, 54, 110, 24, 34);
    },
    drawWrapBubble(_0x1da14d, _0x482a72, _0x3e2b60, _0x269e15) {
      const _0x586ecd = _0x1da14d - 1;
      const _0x1d3ff2 = _0x482a72 - 27;
      _0x371e5f(_0x586ecd, _0x1d3ff2, 26, 22);
      _0xca5277.drawImage(_0x3f8047.ui_tail, Math.round(_0x1da14d + 9), _0x1d3ff2 + 21);
      _0x6d5c39(_0x269e15 > 0.85 ? "package" : "xoi_" + _0x3e2b60, 0, _0x586ecd + 4, _0x1d3ff2 + 2, 18, 16);
      _0xca5277.fillStyle = "#1a1016";
      _0xca5277.fillRect(_0x586ecd + 3, _0x1d3ff2 + 17, 22, 3);
      _0xca5277.fillStyle = "#eab83a";
      _0xca5277.fillRect(_0x586ecd + 4, _0x1d3ff2 + 18, Math.round(_0x269e15 * 20), 1);
    },
    drawTiBubble() {
      if ((_0x1d50a7.tiT || 0) > 0 && _0x1d50a7.tiItem && _0x592c27("ti") && !_0x11c399() && !_0xe9a99e()) {
        this.drawWrapBubble(54, 110, _0x1d50a7.tiItem, _0x5ab951(1 - _0x1d50a7.tiT / (_0x1d50a7.tiDur || 0.7), 0, 1));
      }
      const _0x3e5557 = _0x1d50a7.teo;
      if (_0x3e5557 && _0x3e5557.st === "idle" && (_0x1d50a7.teoT || 0) > 0 && _0x1d50a7.teoItem) {
        this.drawWrapBubble(_0x1b038c.x, _0x1b038c.y, _0x1d50a7.teoItem, _0x5ab951(1 - _0x1d50a7.teoT / (_0x1d50a7.teoDur || 0.7), 0, 1));
      }
    },
    qlttCheck(_0x1e8284) {
      if (_0x1d50a7.qltt || _0xbf5ed7.day < 2 || _0x1d50a7.time < 15 || _0x1d50a7.time > _0x45877a - 12) {
        return;
      }
      const _0x59999a = _0xbf5ed7.chapter >= 2 || _0xbf5ed7.ch2 >= 1 ? _0x35e85e() : 1;
      const _0x176f5e = _0x59999a > _0x20baa9;
      if (_0xbf5ed7.ch2 >= 1 && !_0x176f5e) {
        return;
      }
      const _0x58202f = _0x59999a > _0x2924da ? 2 : 1;
      if (_0x1d50a7.qlttCount >= _0x58202f) {
        return;
      }
      const _0x5eda76 = _0x59999a > _0x2924da ? 0.01 + (_0x59999a - _0x2924da) * 0.08 : _0x176f5e ? 0.004 + (_0x59999a - _0x20baa9) * 0.03 : 0.0015;
      if (Math.random() < _0x5eda76 * _0x1e8284) {
        _0x1d50a7.qlttCount++;
        _0x1d50a7.qltt = {
          x: _0xc10b19 + 4,
          y: 150,
          tx: 100,
          state: "in",
          over: _0x176f5e,
          ar: _0x59999a
        };
        _0x4d92fd.play("whistle");
        _0x991d3e(_0x1d50a7.qltt.over ? "Tuýt tuýt! Quản lý thị trường!" : "Tuýt tuýt! Trật tự phường!", "bad");
      }
    },
    qlttArrive() {
      const _0x47465d = _0x1d50a7.qltt;
      const _0x563efa = _0x47465d.over ? "qltt" : "ttp";
      const _0x4590ff = _0x47465d.over ? Math.round((60000 + Math.max(0, _0x47465d.ar - _0x20baa9) * 300000) * _0x1c055d() / 5000) * 5000 : 20000;
      _0x47465d.fine = _0x4590ff;
      const _0x5ec480 = _0x47465d.over ? [{
        who: "qltt",
        text: "Đội quản lý thị trường đây! Xôi gì mà bán giá cắt cổ thế này? Ép giá bà con à? Lập biên bản!"
      }, {
        who: "batam",
        text: "Ối giời ơi, các anh thông cảm, gạo nếp dạo này lên giá quá…",
        ti: "Dạ… các chú thông cảm, nguyên liệu dạo này lên giá quá ạ…"
      }] : [{
        who: "ttp",
        text: "Trật tự phường đây! Bà bày hàng lấn chiếm vỉa hè, lòng đường thế này là sai quy định nhé!"
      }, {
        who: "batam",
        text: "Dạ dạ, các anh bỏ qua cho, bà già bán mấy gói xôi kiếm cơm thôi ạ…"
      }];
      _0x39c0d1(_0x5ec480, () => {
        _0x57f03a(_0x1525be("ico_warn") + " Biên bản xử phạt", "\n        <p>Lỗi: <b>" + (_0x47465d.over ? "Bán giá cao bất hợp lý" : "Lấn chiếm vỉa hè") + "</b></p>\n        <div class=\"kv\"><span>Mức phạt</span><b class=\"neg\">" + _0x9c212e(_0x4590ff) + "</b></div>\n        " + (_0x47465d.over ? "<p class=\"warnt\">Nộp phạt sẽ bị tịch thu 1/4 số xôi và phải hạ giá!</p>" : ""), [{
          label: "Nộp phạt",
          cls: "red",
          fn: () => this.qlttPay(1)
        }, {
          label: "Năn nỉ",
          cls: "gold",
          fn: () => {
            if (Math.random() < 0.3 + _0xbf5ed7.rep * 0.08 - (_0x47465d.over ? 0.2 : 0)) {
              _0x39c0d1([{
                who: _0x563efa,
                text: _0x47465d.over ? "Thôi được, lần này tôi nhắc nhở. Bán buôn cho phải chăng vào!" : "Thôi được, lần này nhắc nhở. Dọn hàng gọn vào trong, đừng lấn ra đường nữa!"
              }], () => this.qlttLeave());
            } else {
              _0x39c0d1([{
                who: _0x563efa,
                text: "Nói nhiều! Phạt gấp rưỡi cho chừa!"
              }], () => this.qlttPay(1.5));
            }
          }
        }].concat(_0xbf5ed7.ch2 >= 1 ? [] : [{
          label: "Ôm thúng chạy",
          cls: "grey",
          fn: () => this.qlttRun()
        }]), "paper warn");
      });
    },
    qlttPay(_0x2d9b91) {
      const _0x18ef90 = _0x1d50a7.qltt;
      const _0x144d95 = Math.round(_0x18ef90.fine * _0x2d9b91 / 1000) * 1000;
      _0xbf5ed7.money -= _0x144d95;
      _0x1d50a7.fines += _0x144d95;
      if (_0x18ef90.over) {
        _0x1d50a7.fineQltt = (_0x1d50a7.fineQltt || 0) + _0x144d95;
      } else {
        _0x1d50a7.fineTtp = (_0x1d50a7.fineTtp || 0) + _0x144d95;
      }
      _0x4d92fd.play("fail");
      _0x9a2638(70, 120, "-" + _0x9c212e(_0x144d95), "bad");
      if (_0x18ef90.over) {
        let _0x3cf963 = 0;
        for (const _0x3cd548 in _0xbf5ed7.cooked) {
          const _0x37e1e6 = Math.floor(_0xbf5ed7.cooked[_0x3cd548] / 4);
          _0xbf5ed7.cooked[_0x3cd548] -= _0x37e1e6;
          _0x3cf963 += _0x37e1e6;
        }
        _0x1d50a7.confiscated += _0x3cf963;
        for (const _0x207f72 in _0xbf5ed7.prices) {
          if (_0xbf5ed7.prices[_0x207f72] > _0x1ce869(_0x207f72) * 1.2) {
            _0xbf5ed7.prices[_0x207f72] = Math.round(_0x1ce869(_0x207f72) * 1.15 / 1000) * 1000;
          }
        }
        _0x991d3e("Bị tịch thu " + _0x3cf963 + " phần xôi. Giá đã hạ về mức phải chăng.", "bad");
      }
      _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep - 0.1, 0, 5);
      _0x5f18ca(this.clockHTML());
      this.renderTray();
      this.qlttLeave();
    },
    qlttRun() {
      _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep - 0.15, 0, 5);
      _0x1d50a7.qltt.state = "out";
      _0x1d50a7.qltt.tx = _0xc10b19 + 30;
      if (Math.random() < 0.5) {
        let _0x2a0bbb = 0;
        for (const _0x555522 in _0xbf5ed7.cooked) {
          const _0x49ecd7 = Math.ceil(_0xbf5ed7.cooked[_0x555522] / 2);
          _0xbf5ed7.cooked[_0x555522] -= _0x49ecd7;
          _0x2a0bbb += _0x49ecd7;
        }
        _0x1d50a7.confiscated += _0x2a0bbb;
        _0x39c0d1([{
          who: "batam",
          text: "Ối! Vấp phải hòn đá, đổ mất " + _0x2a0bbb + " phần xôi… Thôi về thôi con ơi!"
        }], () => this.finish());
      } else {
        _0xbf5ed7.stats.escaped++;
        _0x39c0d1([{
          who: "batam",
          text: "Chạy mau Tí ơi! Hôm nay dọn hàng sớm vậy!"
        }], () => this.finish());
      }
    },
    closeEarly() {
      if (_0x1d50a7.taxAt < Infinity && !_0x1d50a7.taxDone && _0xbf5ed7.ch3 >= 1) {
        _0x1d50a7.ended = true;
        _0x1d50a7.endT = 0;
        _0x1d50a7.taxAt = 0;
        for (const _0x22f3de of _0x1d50a7.cust) {
          if (_0x22f3de.state === "wait" || _0x22f3de.state === "in") {
            this.leave(_0x22f3de, 0);
          }
        }
        return;
      }
      this.finish();
    },
    taxUpdate(_0x26807a) {
      if (_0xbf5ed7.ch3 < 1) {
        return;
      }
      if (!_0x1d50a7.thue && !_0x1d50a7.taxDone && (_0x1d50a7.time >= _0x1d50a7.taxAt || _0x1d50a7.ended && _0x1d50a7.taxAt < Infinity) && !_0x1d50a7.qltt && !_0x19e10f.paused) {
        _0x1d50a7.taxDone = true;
        _0x1d50a7.thue = {
          x: -26,
          y: 150,
          tx: 60,
          state: "in"
        };
        _0x4d92fd.play("whistle", 0.6);
        _0x991d3e("Chi cục Thuế đến kiểm tra!", "bad");
      }
      const _0x4289fc = _0x1d50a7.thue;
      if (!_0x4289fc) {
        return;
      }
      const _0x1b6798 = _0x4289fc.tx - _0x4289fc.x;
      if (Math.abs(_0x1b6798) < 1.5) {
        _0x4289fc.x = _0x4289fc.tx;
        if (_0x4289fc.state === "in") {
          _0x4289fc.state = "talk";
          this.taxArrive();
        } else if (_0x4289fc.state === "out") {
          _0x1d50a7.thue = null;
        }
      } else {
        _0x4289fc.x += Math.sign(_0x1b6798) * Math.min(Math.abs(_0x1b6798), _0x26807a * 46);
      }
    },
    taxLeave() {
      if (_0x1d50a7.thue) {
        _0x1d50a7.thue.state = "out";
        _0x1d50a7.thue.tx = -40;
      }
    },
    taxArrive() {
      const _0x474d0f = (_0x446a0c, _0x47a8b7, _0x1cfc61, _0x4c8994, _0x25e0de) => {
        const _0x1c03f6 = _0x1cfc61 - Math.max(0, _0xbf5ed7.money);
        const _0x50932f = Math.ceil(_0x1c03f6 / 100000) * 100000;
        _0x57f03a(_0x1525be("ico_warn") + " " + _0x446a0c, _0x47a8b7 + "\n        <div class=\"kv total\"><span>Tổng phải nộp</span><b class=\"neg\">" + _0x9c212e(_0x1cfc61) + "</b></div>\n        " + (_0x1c03f6 > 0 ? "<p class=\"warnt\">Tiệm chỉ có " + _0x9c212e(Math.max(0, _0xbf5ed7.money)) + ", không đủ nộp!</p>\n          <p class=\"muted\">Vay ngân hàng " + _0x9c212e(_0x50932f) + ": lãi " + Math.round(_0x71db7c * 100) + "% mỗi " + _0x2032fa + " ngày, trả gốc lúc nào cũng được trong Sổ thu chi. Không vay thì tiệm phá sản, về lại Chương 1.</p>" + (_0x3f5656() >= _0x1c03f6 ? "<p class=\"muted\">Hoặc rút sổ tiết kiệm trước hạn (chỉ nhận lại gốc) để nộp.</p>" : "") : ""), _0x1c03f6 > 0 ? (_0x3f5656() >= _0x1c03f6 ? [{
          label: "Rút tiết kiệm",
          cls: "gold",
          fn: () => {
            const _0x334f98 = _0x28da56(_0x1c03f6);
            _0x4c8994();
            _0x39c0d1([{
              who: _0x49a7c1().who,
              text: "Đành rút sổ tiết kiệm trước hạn " + _0x9c212e(_0x334f98) + " để nộp, mất phần lãi… Thôi thì còn hơn đi vay."
            }], _0x25e0de);
          }
        }] : []).concat([{
          label: "Vay ngân hàng",
          cls: "green",
          fn: () => {
            _0x1d0343(_0x50932f);
            _0x463590.ev("bank_loan", {
              amt: _0x50932f
            });
            _0x4c8994();
            _0x39c0d1([{
              who: _0x49a7c1().who,
              text: "Đành vay ngân hàng " + _0x9c212e(_0x50932f) + " để nộp vậy… Phải làm lụng trả dần thôi."
            }], _0x25e0de);
          }
        }, {
          label: "Phá sản",
          cls: "red",
          fn: () => {
            this.taxLeave();
            _0x5cc59a("tax");
          }
        }]) : [{
          label: "Nộp",
          cls: "red",
          fn: () => {
            _0x4c8994();
            _0x25e0de();
          }
        }], "paper warn");
      };
      if (_0xbf5ed7.taxReg) {
        const _0x20044e = _0xfc1b6a();
        const _0x174b14 = Math.round(_0x20044e * _0x46406f / 1000) * 1000;
        const _0x368e0c = () => {
          _0xbf5ed7.money -= _0x174b14;
          _0x1d50a7.tax += _0x174b14;
          _0xbf5ed7.flags.taxNext = _0xbf5ed7.day + _0x3b8ca4;
          _0x4d92fd.play("coin");
          _0x9a2638(60, 120, "-" + _0x9c212e(_0x174b14) + " thuế", "bad");
          _0x5f18ca(this.clockHTML());
          _0x690d06();
        };
        _0x39c0d1([{
          who: "thue",
          text: "Chi cục Thuế thu thuế định kỳ, " + _0x3b8ca4 + " ngày một lần. Doanh thu " + _0x3b8ca4 + " ngày qua của tiệm là " + _0x9c212e(_0x20044e) + ", nộp " + Math.round(_0x46406f * 100) + "% (đã gồm thuế thu nhập cá nhân): " + _0x9c212e(_0x174b14) + "."
        }, {
          who: _0x49a7c1().who,
          text: "Dạ, làm ăn đàng hoàng thì nộp thuế đầy đủ ạ."
        }], () => {
          if (_0x174b14 <= Math.max(0, _0xbf5ed7.money)) {
            _0x368e0c();
            this.taxLeave();
            return;
          }
          _0x474d0f("Nộp thuế định kỳ", "<div class=\"kv\"><span>Doanh thu " + _0x3b8ca4 + " ngày qua</span><b>" + _0x9c212e(_0x20044e) + "</b></div>\n          <div class=\"kv\"><span>Thuế " + Math.round(_0x46406f * 100) + "% (gồm TNCN)</span><b class=\"neg\">" + _0x9c212e(_0x174b14) + "</b></div>", _0x174b14, _0x368e0c, () => this.taxLeave());
        });
        return;
      }
      const _0x97fe25 = _0x3bcc23 + _0xbccb42;
      _0x39c0d1([{
        who: "thue",
        text: "Chi cục Thuế đây! Tiệm buôn bán lớn giữa phố mà chưa đăng ký mã số thuế? Vi phạm nghiêm trọng!"
      }, {
        who: "batam",
        text: "Ối giời… bà cứ tưởng bán xôi thì không phải đăng ký gì…",
        ti: "Dạ… cháu cứ tưởng bán xôi thì không phải đăng ký gì…"
      }], () => {
        const _0x3f3301 = () => {
          _0xbf5ed7.money -= _0x97fe25;
          _0x1d50a7.fines += _0x97fe25;
          _0x1d50a7.fineTax = (_0x1d50a7.fineTax || 0) + _0x97fe25;
          _0x4d92fd.play("fail");
          _0x9a2638(60, 120, "-" + _0x9c212e(_0x97fe25) + " phạt thuế", "bad");
          _0xbf5ed7.taxReg = true;
          _0xbf5ed7.flags.taxNext = _0xbf5ed7.day + _0x3b8ca4;
          _0x5f18ca(this.clockHTML());
          _0x690d06();
        };
        const _0x5e3936 = () => _0x39c0d1([{
          who: "thue",
          text: "Nộp phạt xong, tiệm đã được đăng ký mã số thuế. Từ nay cứ " + _0x3b8ca4 + " ngày nộp " + Math.round(_0x46406f * 100) + "% doanh thu cho đàng hoàng!"
        }], () => this.taxLeave());
        _0x474d0f("Quyết định xử phạt", "<p>Lỗi: <b>Kinh doanh không đăng ký thuế</b></p>\n        <div class=\"kv\"><span>Phạt kinh doanh không đăng ký</span><b class=\"neg\">" + _0x9c212e(_0x3bcc23) + "</b></div>\n        <div class=\"kv\"><span>Truy thu thuế</span><b class=\"neg\">" + _0x9c212e(_0xbccb42) + "</b></div>\n        <p class=\"muted\">Nộp xong, tiệm sẽ được đăng ký mã số thuế luôn.</p>", _0x97fe25, _0x3f3301, _0x5e3936);
      });
    },
    qlttLeave() {
      if (_0x1d50a7.qltt) {
        _0x1d50a7.qltt.state = "out";
        _0x1d50a7.qltt.tx = _0xc10b19 + 30;
      }
    },
    vsUpdate(_0x403ecf) {
      if (!_0x121d51()) {
        return;
      }
      if (!_0x1d50a7.vs && !_0x1d50a7.vsDone && !_0x1d50a7.ended && _0x1d50a7.time >= _0x1d50a7.vsAt && !_0x1d50a7.qltt && !_0x1d50a7.thue && !_0x19e10f.paused) {
        _0x1d50a7.vsDone = true;
        _0x1d50a7.vs = {
          x: _0xc10b19 + 4,
          y: 150,
          tx: 104,
          state: "in"
        };
        _0x4d92fd.play("whistle", 0.6);
        _0x991d3e("Đoàn kiểm tra VSATTP đến!", "bad");
      }
      const _0x177eeb = _0x1d50a7.vs;
      if (!_0x177eeb) {
        return;
      }
      const _0xae879c = _0x177eeb.tx - _0x177eeb.x;
      if (Math.abs(_0xae879c) < 1.5) {
        _0x177eeb.x = _0x177eeb.tx;
        if (_0x177eeb.state === "in") {
          _0x177eeb.state = "talk";
          this.vsArrive();
        } else if (_0x177eeb.state === "out") {
          _0x1d50a7.vs = null;
        }
      } else {
        _0x177eeb.x += Math.sign(_0xae879c) * Math.min(Math.abs(_0xae879c), _0x403ecf * 46);
      }
    },
    vsLeave() {
      if (_0x1d50a7.vs) {
        _0x1d50a7.vs.state = "out";
        _0x1d50a7.vs.tx = _0xc10b19 + 30;
      }
    },
    vsArrive() {
      const _0x332db8 = _0x592c27("inox");
      if (_0x332db8 >= 2 || _0x332db8 === 1 && Math.random() < 0.65) {
        _0x39c0d1([_0x1838d9.come].concat(_0x1838d9.pass), () => {
          _0xbf5ed7.stats.vsPass = (_0xbf5ed7.stats.vsPass || 0) + 1;
          _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep + 0.1, 0, 5);
          _0x190ed7();
          _0x4d92fd.play("happy");
          _0x991d3e("Đạt chuẩn vệ sinh an toàn thực phẩm!", "good");
          _0x690d06();
          _0x5b55cf();
          this.vsLeave();
        });
        return;
      }
      const _0x5933f8 = _0x332db8 === 1 ? 5000000 : 20000000;
      const _0xe63046 = _0x332db8 === 0 && Math.random() < 0.6;
      _0x39c0d1([_0x1838d9.come].concat(_0x332db8 === 1 ? _0x1838d9.warn : _0x1838d9.fail), () => {
        _0x57f03a(_0x1525be("ico_warn") + " Biên bản kiểm tra VSATTP", "<p>Lỗi: <b>" + (_0x332db8 === 1 ? "Bảo quản thực phẩm chưa đúng quy định" : "Vi phạm điều kiện an toàn thực phẩm") + "</b></p>\n        <div class=\"kv\"><span>Mức phạt</span><b class=\"neg\">" + _0x9c212e(_0x5933f8) + "</b></div>\n        " + (_0xe63046 ? "<p class=\"warnt\">Tiệm chính bị đình chỉ bán hàng ngày mai để khắc phục.</p>" : "") + "\n        <p class=\"muted\">Nâng cấp \"Tủ inox & găng tay\" để lần sau qua kiểm tra.</p>", [{
          label: "Nộp phạt",
          cls: "red",
          fn: () => {
            _0xbf5ed7.money -= _0x5933f8;
            _0x1d50a7.fines += _0x5933f8;
            _0x1d50a7.fineVs = (_0x1d50a7.fineVs || 0) + _0x5933f8;
            _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep - 0.15, 0, 5);
            _0x190ed7();
            if (_0xe63046) {
              _0xbf5ed7.flags.closed = _0xbf5ed7.day + 1;
            }
            _0x4d92fd.play("fail");
            _0x9a2638(60, 120, "-" + _0x9c212e(_0x5933f8), "bad");
            _0x5f18ca(this.clockHTML());
            _0x690d06();
            this.vsLeave();
            if (_0xbf5ed7.rep <= 0) {
              setTimeout(() => _0x5cc59a("vs"), 600);
            }
          }
        }], "paper warn");
      });
    },
    interval() {
      const _0x67e0a9 = _0x35e85e();
      const _0x48ad9a = _0x5ab951(1.25 - (_0x67e0a9 - 1) * 0.9, 0.45, 1.35);
      const _0x2d5e4a = (0.55 + _0xbf5ed7.rep * 0.13) * (_0x1d50a7.festival ? 1.6 : 1) * (_0x1d50a7.rain ? 0.6 : 1) * _0x48ad9a * (1 + Math.min(20, _0xbf5ed7.day - 1) * 0.04) * _0x402275() * _0x1848c5() * _0x5c212a() * (_0x292cac("bao") ? 0.75 : 1) * (_0x1d50a7.rival ? _0xbf5ed7.rep >= 4 ? 0.9 : 0.72 : 1);
      return _0x5ab951(4.3 / _0x2d5e4a, 1.3 / (1 + _0x592c27("loa") * 0.15), 9) * _0x3d90fc(0.75, 1.25);
    },
    update(_0x208b6b) {
      if (_0x19e10f.paused) {
        return;
      }
      _0x1d50a7.time += _0x208b6b;
      const _0x4b180c = _0x1d672b(".hud-c");
      if (_0x4b180c && Math.floor(_0x1d50a7.time * 2) !== _0x1d50a7._ct) {
        _0x1d50a7._ct = Math.floor(_0x1d50a7.time * 2);
        const _0x2c8d99 = _0x4b180c.querySelector(".ct");
        if (_0x2c8d99) {
          const _0x1be783 = Math.min(1, _0x1d50a7.time / _0x45877a);
          const _0x51a3b8 = 300 + Math.floor(_0x1be783 * 300);
          const _0x44468d = _0x51a3b8 % 60;
          _0x2c8d99.textContent = Math.floor(_0x51a3b8 / 60) + ":" + (_0x44468d < 10 ? "0" : "") + _0x44468d;
        } else {
          _0x4b180c.innerHTML = this.clockHTML();
        }
      }
      if (_0x1d50a7.time < _0x45877a && !_0x1d50a7.ended) {
        _0x1d50a7.spawnT -= _0x208b6b;
        if (_0x1d50a7.spawnT <= 0) {
          this.spawn();
          _0x1d50a7.spawnT = this.interval();
        }
        if (_0x1d9d45() && !_0x1d50a7.rushOn) {
          _0x1d50a7.rushOn = true;
          _0x991d3e("Giờ cao điểm! Khách đổ về đông nghịt!", "bad");
          this.say(_0x49a7c1().name, _0xe9a99e() ? "Giờ đi làm rồi, nhanh tay lên nào!" : "Giờ đi làm rồi, nhanh tay lên Tí ơi!", _0xad1d39(_0x49a7c1().who));
        } else if (_0x1d50a7.rushOn && !_0x1d9d45()) {
          _0x1d50a7.rushOn = false;
          _0x991d3e("Hết giờ cao điểm, thở một chút nào.", "");
        }
        if (_0x1d50a7.time >= _0x1d50a7.kolAt) {
          _0x1d50a7.kolAt = this.spawn("kol") ? Infinity : _0x1d50a7.kolAt + 2;
        }
        this.qlttCheck(_0x208b6b);
      }
      const _0x2b7c82 = Object.values(_0xbf5ed7.cooked).reduce((_0x31f7b5, _0x195fc2) => _0x31f7b5 + Math.max(0, _0x195fc2), 0) + (_0x1d50a7.hand ? 1 : 0) + (_0x1d50a7.hand2 ? 1 : 0);
      if (!_0x1d50a7.ended && _0x2b7c82 === 0) {
        _0x1d50a7.ended = true;
        _0x1d50a7.endT = 0;
        this.say(_0x49a7c1().name, _0xe9a99e() ? "Hết sạch xôi rồi! Dọn hàng về thôi!" : "Hết sạch xôi rồi! Dọn hàng về thôi con!", _0xad1d39(_0x49a7c1().who));
        if (_0x1d50a7.time < _0x45877a && _0x1d50a7.served > 0) {
          _0xbf5ed7.stats.soldOut++;
        }
        _0x4d92fd.play("win");
        for (const _0x58cc3e of _0x1d50a7.cust) {
          if (_0x58cc3e.state === "wait" || _0x58cc3e.state === "in") {
            _0x58cc3e.want = _0x58cc3e.want;
            this.leave(_0x58cc3e, 0);
          }
        }
      }
      if (!_0x1d50a7.ended && _0x1d50a7.time >= _0x45877a) {
        _0x1d50a7.ended = true;
        _0x1d50a7.endT = 0;
        this.say(_0x49a7c1().name, "Trưa rồi, tan chợ thôi!", _0xad1d39(_0x49a7c1().who));
        _0x4d92fd.play("gong");
      }
      if (_0x1d50a7.ended) {
        _0x1d50a7.endT += _0x208b6b;
        if (_0x1d50a7.time >= _0x45877a && _0x1d50a7.endT > 6) {
          for (const _0x48612f of _0x1d50a7.cust) {
            if (_0x48612f.state === "wait") {
              this.leave(_0x48612f, 0);
            }
          }
        }
        if (!_0x1d50a7.cust.length && !_0x1d50a7.qltt && !_0x1d50a7.thue && !_0x1d50a7.vs && _0x1d50a7.endT > 1.5 && !_0x1d50a7.ended2) {
          _0x1d50a7.ended2 = true;
          this.finish();
        }
      }
      if (_0x1d50a7.wrapping > 0) {
        _0x1d50a7.wrapping -= _0x208b6b;
        if (_0x1d50a7.wrapping <= 0 && _0x1d50a7.hand) {
          _0x1d50a7.hand.packed = true;
          if (_0x1d50a7.hand2) {
            _0x1d50a7.hand2.packed = true;
          }
          _0x1d672b("#leaf").classList.remove("wrapping");
          this.renderLeaf();
          _0x4d92fd.play("pop");
        }
      }
      for (const _0xe93304 of _0x1d50a7.cust) {
        _0xe93304.t += _0x208b6b;
        if (_0xe93304.emoT > 0) {
          _0xe93304.emoT -= _0x208b6b;
        }
        const _0x551fe = _0xe93304.state === "flee" ? 90 : 42;
        if (_0xe93304.state === "in" || _0xe93304.state === "out" || _0xe93304.state === "flee") {
          const _0x474873 = _0xe93304.tx - _0xe93304.x;
          if (Math.abs(_0x474873) < 1.5) {
            _0xe93304.x = _0xe93304.tx;
            if (_0xe93304.state === "in") {
              this.arrive(_0xe93304);
            } else {
              _0xe93304.gone = true;
            }
          } else {
            _0xe93304.x += Math.sign(_0x474873) * Math.min(Math.abs(_0x474873), _0x551fe * _0x208b6b);
          }
          if (_0xe93304.state === "flee" && Math.random() < _0x208b6b * 12) {
            _0x1d50a7.puffs.push({
              x: _0xe93304.x + 4,
              y: _0xe93304.y + 24,
              t: 0
            });
          }
        } else if (_0xe93304.state === "wait") {
          if (this.soldOutFor(_0xe93304)) {
            this.leaveSoldOut(_0xe93304);
            continue;
          }
          if (!_0x1d50a7.qltt && !_0x1d50a7.thue && !_0x1d50a7.vs) {
            _0xe93304.patience -= _0x208b6b;
          }
          if (_0xe93304.patience <= 0) {
            const _0x3c763e = _0x4d7ac3[_0xe93304.type];
            this.say(_0x3c763e.name, _0xe93304.type === "ship" ? _0x31c8b2(_0x4360f7.shipAngry) : _0xe93304.type === "kol" ? _0x31c8b2(_0x4360f7.kolAngry) : _0x31c8b2(_0x4360f7.angry), _0xae0a0c(_0xe93304.type));
            if (_0x3c763e.w === 0 && !_0xe93304.kolBad) {
              _0x434691(_0xe93304, false, 0);
            }
            _0xe93304.emo = "emo_anger";
            _0xe93304.emoT = 2;
            _0x4d92fd.play("angry");
            _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep - _0x5b9c45, 0, 5);
            _0x190ed7();
            _0x1d50a7.lost++;
            this.payPartial(_0xe93304);
            this.review(_0xe93304, Math.random() < 0.5 ? 1 : 2, _0x31c8b2(_0x48eb4a.slice(0, 3).concat(_0x48eb4a.slice(5))));
            this.leave(_0xe93304, 2);
          }
        }
      }
      _0x1d50a7.cust = _0x1d50a7.cust.filter(_0x3a7054 => !_0x3a7054.gone);
      if (_0x1d50a7.chase) {
        _0x1d50a7.chase.t -= _0x208b6b;
        if (_0x1d50a7.chase.t <= 0) {
          _0x1d50a7.fleeLost += _0x1d50a7.chase.price;
          _0x1d50a7.fleeParts += _0x1d50a7.chase.parts || 1;
          _0x1d50a7.chase = null;
          _0x1d672b("#chase").classList.add("hidden");
          this.say(_0x49a7c1().name, "Nó chạy mất rồi… mất toi gói xôi!", _0xad1d39(_0x49a7c1().who));
          _0x4d92fd.play("fail");
        }
      }
      for (const _0x41d69a of _0x1d50a7.runs) {
        this.runUpdate(_0x41d69a, _0x208b6b);
      }
      _0x1d50a7.runs = _0x1d50a7.runs.filter(_0x19ca27 => !_0x19ca27.done);
      if (_0x1d50a7.tiT > 0) {
        _0x1d50a7.tiT -= _0x208b6b;
      }
      if (_0x1d50a7.teoT > 0) {
        _0x1d50a7.teoT -= _0x208b6b;
      }
      this.taxUpdate(_0x208b6b);
      this.vsUpdate(_0x208b6b);
      if (_0x1d50a7.qltt) {
        const _0x3231d6 = _0x1d50a7.qltt;
        const _0x57d221 = _0x3231d6.tx - _0x3231d6.x;
        if (Math.abs(_0x57d221) < 1.5) {
          _0x3231d6.x = _0x3231d6.tx;
          if (_0x3231d6.state === "in") {
            _0x3231d6.state = "talk";
            this.qlttArrive();
          } else if (_0x3231d6.state === "out") {
            _0x1d50a7.qltt = null;
          }
        } else {
          _0x3231d6.x += Math.sign(_0x57d221) * Math.min(Math.abs(_0x57d221), _0x208b6b * 50);
        }
      }
      _0x1d50a7.shoutT -= _0x208b6b;
      if (_0x1d50a7.shoutT <= 0 && !_0x1d50a7.ended) {
        _0x1d50a7.shoutT = _0x3d90fc(10, 16);
        _0x1d50a7.baFrame = 2;
        _0x1d50a7.baT = 1.2;
        if (!_0x1d50a7.cust.some(_0xc2f34d => _0xc2f34d.state === "wait")) {
          this.say(_0x49a7c1().name, _0x31c8b2(_0x4360f7.baShout), _0xad1d39(_0x49a7c1().who));
        }
      }
      if (_0x1d50a7.baT > 0) {
        _0x1d50a7.baT -= _0x208b6b;
        if (_0x1d50a7.baT <= 0) {
          _0x1d50a7.baFrame = 0;
        }
      }
      _0x1d50a7.puffs.forEach(_0x3a173b => _0x3a173b.t += _0x208b6b);
      _0x1d50a7.puffs = _0x1d50a7.puffs.filter(_0xd871d6 => _0xd871d6.t < 0.45);
      if (_0x1d50a7.rain) {
        for (let _0x54215a = 0; _0x54215a < 3; _0x54215a++) {
          _0x1d50a7.drops.push({
            x: _0x3d90fc(0, _0xc10b19 + 40),
            y: -4,
            v: _0x3d90fc(150, 200)
          });
        }
        _0x1d50a7.drops.forEach(_0x2de41d => {
          _0x2de41d.y += _0x2de41d.v * _0x208b6b;
          _0x2de41d.x -= _0x2de41d.v * 0.25 * _0x208b6b;
        });
        _0x1d50a7.drops = _0x1d50a7.drops.filter(_0x5004f7 => _0x5004f7.y < 210);
      }
    },
    drawChar(_0x5d84a4, _0x13c3fb, _0x2de838, _0x11efe5) {
      _0x6d5c39("char_" + _0x5d84a4, _0x13c3fb, _0x2de838, _0x11efe5, 24, 34);
    },
    draw() {
      _0xfeb5dc(_0x16f39a());
      _0x42be1b();
      let _0x5785e8 = _0x1d50a7.baFrame;
      if (!_0x5785e8 && Math.floor(_0x19e10f.t * 2) % 8 === 0) {
        _0x5785e8 = 1;
      }
      if (!this.sellerAway()) {
        if (_0xe9a99e()) {
          _0x6d5c39("char_ti", _0x5785e8 ? 1 : 0, 78, 108, 24, 34);
        } else {
          _0x6d5c39("batam_sit", _0x5785e8, 78, 108, 24, 34);
        }
      }
      this.drawTi();
      if (_0x1d50a7.teo && _0x1d50a7.teo.st === "idle") {
        this.drawTeo();
      }
      _0x42a7bb(_0x47e263.filter(_0x440d70 => (_0xbf5ed7.cooked[_0x440d70] || 0) > 0), 56, 136);
      for (const _0x23b28b of _0x13db09) {
        if (_0x23b28b.stool && (!_0x23b28b.ghe || _0x592c27("ghe") >= _0x23b28b.ghe)) {
          _0x4caaeb(_0x23b28b.stool, _0x23b28b.sx, _0x23b28b.sy);
        }
      }
      const _0x378692 = _0x1d50a7.cust.slice().sort((_0xa0b09e, _0x433e71) => _0xa0b09e.y - _0x433e71.y);
      for (const _0x370a87 of _0x378692) {
        const _0xc84cb0 = _0x13db09[_0x370a87.slot];
        let _0x2b4278 = 0;
        let _0x2ff192 = _0x370a87.y;
        if (_0x370a87.state === "wait" && _0xc84cb0.sit) {
          _0x2b4278 = 3;
          _0x2ff192 = _0x370a87.y + 2;
        } else if (_0x370a87.state === "wait") {
          _0x2b4278 = 0;
        } else {
          _0x2b4278 = 1 + Math.floor(_0x370a87.t * (_0x370a87.state === "flee" ? 14 : 7)) % 2;
        }
        if (_0x370a87.state === "out" && _0x370a87.mood === 2) {
          _0x2b4278 = Math.floor(_0x370a87.t * 7) % 2 ? 5 : 1;
        }
        if (_0x370a87.state === "out" && _0x370a87.mood === 1 && Math.floor(_0x370a87.t * 4) % 3 === 0) {
          _0x2b4278 = 4;
        }
        if (_0x370a87.state === "wait" && _0x370a87.patience / _0x370a87.max < 0.3 && Math.floor(_0x19e10f.t * 3) % 2) {
          _0x2b4278 = _0xc84cb0.sit ? 3 : 5;
        }
        if (_0x370a87.state === "wait" || _0x370a87.state === "in") {
          _0x2ff192 = _0x370a87.state === "in" ? _0x370a87.y : _0x2ff192;
        }
        this.drawChar(_0x370a87.type, _0x2b4278, _0x370a87.x, _0x2ff192);
        if (_0x370a87.emo && _0x370a87.emoT > 0) {
          _0x4caaeb(_0x370a87.emo, _0x370a87.x + 18, _0x2ff192 - 2 - Math.round((1.5 - _0x370a87.emoT) * 3));
        }
      }
      for (const _0x487dfb of _0x378692) {
        if (_0x487dfb.state !== "wait") {
          continue;
        }
        const _0x165b69 = _0x13db09[_0x487dfb.slot];
        const _0x2fbcba = _0x487dfb.combo;
        const _0x3d69bb = _0x2fbcba ? 44 : 26;
        const _0x2a354d = _0x5ab951(_0x487dfb.x - 1 - (_0x2fbcba && _0x487dfb.x > 90 && !_0x165b69.ghe ? 18 : 0), 1, _0xc10b19 - _0x3d69bb - 1);
        const _0x18fd7f = _0x487dfb.y - 24 + (_0x165b69.sit ? 2 : 0) + (_0x165b69.bub || 0) - (_0x165b69.raise || 0);
        _0x487dfb.bub = [_0x2a354d, _0x18fd7f, _0x3d69bb];
        _0x371e5f(_0x2a354d, _0x18fd7f, _0x3d69bb, 22);
        _0xca5277.drawImage(_0x3f8047.ui_tail, Math.round(_0x487dfb.x + 9), _0x18fd7f + 21);
        if (_0x165b69.raise) {
          _0xca5277.fillStyle = "rgba(26,16,22,.55)";
          for (let _0x5ed31e = _0x18fd7f + 27; _0x5ed31e < _0x487dfb.y - 1; _0x5ed31e += 3) {
            _0xca5277.fillRect(Math.round(_0x487dfb.x + 12), _0x5ed31e, 1, 2);
          }
        }
        const _0x2271a1 = (_0xe0fce6, _0x15b6d8, _0x2d7307, _0x1dfc6b) => {
          if (_0x2d7307) {
            _0xca5277.globalAlpha = 0.3;
          }
          _0x6d5c39("xoi_" + _0xe0fce6, 0, _0x2a354d + _0x1dfc6b, _0x18fd7f + 2, 18, 16);
          if (_0x15b6d8 > 1) {
            _0x3cbf67(_0x15b6d8, _0x2a354d + _0x1dfc6b + 15, _0x18fd7f + 1);
          }
          _0xca5277.globalAlpha = 1;
          if (_0x2d7307) {
            _0xca5277.fillStyle = "#5c9a42";
            _0xca5277.fillRect(_0x2a354d + _0x1dfc6b + 6, _0x18fd7f + 9, 2, 2);
            _0xca5277.fillRect(_0x2a354d + _0x1dfc6b + 8, _0x18fd7f + 11, 2, 2);
            _0xca5277.fillRect(_0x2a354d + _0x1dfc6b + 10, _0x18fd7f + 9, 2, 2);
            _0xca5277.fillRect(_0x2a354d + _0x1dfc6b + 12, _0x18fd7f + 7, 2, 2);
          }
        };
        _0x2271a1(_0x487dfb.want, _0x487dfb.qty, _0x2fbcba && _0x2fbcba.got1, 4);
        if (_0x2fbcba) {
          _0x2271a1(_0x2fbcba.x2, _0x2fbcba.q2, _0x2fbcba.got2, 22);
        }
        const _0x4150b0 = _0x5ab951(_0x487dfb.patience / _0x487dfb.max, 0, 1);
        const _0x417db1 = _0x3d69bb - 8;
        _0xca5277.fillStyle = "#1a1016";
        _0xca5277.fillRect(_0x2a354d + 3, _0x18fd7f + 17, _0x417db1 + 2, 3);
        _0xca5277.fillStyle = _0x4150b0 > 0.5 ? "#5c9a42" : _0x4150b0 > 0.25 ? "#eab83a" : "#dc5a36";
        _0xca5277.fillRect(_0x2a354d + 4, _0x18fd7f + 18, Math.round(_0x417db1 * _0x4150b0), 1);
      }
      for (const _0x358b4b of _0x1d50a7.runs) {
        this.drawRun(_0x358b4b);
      }
      this.drawTiBubble();
      if (_0x1d50a7.qltt) {
        const _0x479f4f = _0x1d50a7.qltt;
        const _0x11aca5 = _0x479f4f.state === "talk" ? 5 : 1 + Math.floor(_0x19e10f.t * 7) % 2;
        _0x6d5c39("char_qltt", _0x11aca5, _0x479f4f.x, _0x479f4f.y, 24, 34);
        if (_0x479f4f.state === "talk" || _0x479f4f.state === "in") {
          _0x4caaeb("emo_excl", _0x479f4f.x + 18, _0x479f4f.y - 4);
        }
      }
      if (_0x1d50a7.vs) {
        const _0x18dbb5 = _0x1d50a7.vs;
        _0x6d5c39("char_vsattp", _0x18dbb5.state === "talk" ? 0 : 1 + Math.floor(_0x19e10f.t * 7) % 2, _0x18dbb5.x, _0x18dbb5.y, 24, 34, _0x18dbb5.state === "out");
        if (_0x18dbb5.state !== "out") {
          _0x4caaeb("emo_excl", _0x18dbb5.x + 18, _0x18dbb5.y - 4);
        }
      }
      if (_0x1d50a7.thue) {
        const _0x4b57f9 = _0x1d50a7.thue;
        _0x6d5c39("char_thue", _0x4b57f9.state === "talk" ? 0 : 1 + Math.floor(_0x19e10f.t * 7) % 2, _0x4b57f9.x, _0x4b57f9.y, 24, 34, _0x4b57f9.state === "out");
        if (_0x4b57f9.state !== "out") {
          _0x4caaeb("emo_excl", _0x4b57f9.x + 18, _0x4b57f9.y - 4);
        }
      }
      for (const _0x4954ad of _0x1d50a7.puffs) {
        _0x6d5c39("puff", Math.min(2, Math.floor(_0x4954ad.t / 0.15)), _0x4954ad.x, _0x4954ad.y, 16, 12);
      }
      if (_0x1d50a7.rain) {
        _0xca5277.fillStyle = "rgba(40,60,90,.18)";
        _0xca5277.fillRect(0, 0, _0xc10b19, 210);
        _0xca5277.fillStyle = "rgba(200,220,255,.7)";
        for (const _0x43ecf9 of _0x1d50a7.drops) {
          _0xca5277.fillRect(Math.round(_0x43ecf9.x), Math.round(_0x43ecf9.y), 1, 3);
        }
      }
      const _0x108d23 = Math.min(1, _0x1d50a7.time / _0x45877a);
      if (_0x108d23 > 0.6) {
        _0xca5277.fillStyle = "rgba(255,200,120," + (_0x108d23 - 0.6) * 0.25 + ")";
        _0xca5277.fillRect(0, 0, _0xc10b19, 210);
      }
    },
    finish() {
      if (!_0x1d50a7.finished) {
        _0x1d50a7.finished = true;
        for (const _0x2fc0d9 of _0x1d50a7.runs) {
          if (_0x2fc0d9.st !== "back") {
            _0x1d50a7.fleeLost += _0x2fc0d9.price;
            _0x1d50a7.fleeParts += _0x2fc0d9.parts || 1;
          }
        }
        _0x1d50a7.runs = [];
        for (const _0x3f78ed of [_0x1d50a7.hand, _0x1d50a7.hand2]) {
          if (_0x3f78ed) {
            _0xbf5ed7.cooked[_0x3f78ed.x]++;
          }
        }
        _0x1d50a7.hand = _0x1d50a7.hand2 = null;
        _0x463590.ev("day_end", {
          day: _0xbf5ed7.day,
          chapter: _0xbf5ed7.chapter,
          revenue: Math.round(_0x1d50a7.revenue || 0),
          served: _0x1d50a7.served || 0
        });
        _0x58a015("summary");
      }
    }
  };
  function _0x42a7bb(_0x1b4b9d, _0x568e26, _0x27e1f6) {
    const _0x411f54 = _0x3f8047.thung;
    if (!_0x411f54) {
      return;
    }
    _0xca5277.drawImage(_0x411f54, _0x568e26, _0x27e1f6);
    const _0x5d0709 = _0x1b4b9d.length;
    if (_0x5d0709) {
      const _0x5e50f8 = Math.ceil(_0x5d0709 / 5);
      const _0x29c402 = [];
      let _0x5049d8 = _0x5d0709;
      for (let _0x3f707b = 0; _0x3f707b < _0x5e50f8; _0x3f707b++) {
        const _0x24d132 = Math.ceil(_0x5049d8 / (_0x5e50f8 - _0x3f707b));
        _0x29c402.push(_0x24d132);
        _0x5049d8 -= _0x24d132;
      }
      const _0x3788b5 = _0x568e26 + _0x411f54.width / 2;
      const _0x32d065 = _0x29c402.map((_0x31072c, _0x2f27d2) => ({
        k: _0x31072c,
        r: _0x2f27d2,
        start: _0x29c402.slice(0, _0x2f27d2).reduce((_0x1ad00b, _0x8247bc) => _0x1ad00b + _0x8247bc, 0)
      })).reverse();
      for (const {
        k: _0x2bc564,
        r: _0x102bf0,
        start: _0x344916
      } of _0x32d065) {
        const _0x919757 = Math.min(11, 54 / _0x2bc564) * (1 - _0x102bf0 * 0.08);
        const _0x5ae73b = _0x27e1f6 + 10 - _0x102bf0 * 4;
        for (let _0x2a97ef = 0; _0x2a97ef < _0x2bc564; _0x2a97ef++) {
          const _0xc46cda = _0x1b4b9d[_0x344916 + _0x2a97ef];
          const _0x47617c = Math.round((1 - Math.min(1, _0xbf5ed7.cooked[_0xc46cda] / 8)) * 3);
          const _0x249417 = Math.round(_0x3788b5 + (_0x2a97ef - (_0x2bc564 - 1) / 2) * _0x919757 - 8.5);
          _0x6d5c39("mound_" + _0xc46cda, 0, _0x249417, _0x5ae73b - 10 + _0x47617c, 17, 10);
        }
      }
      _0xca5277.drawImage(_0x411f54, 0, 7, _0x411f54.width, _0x411f54.height - 7, _0x568e26, _0x27e1f6 + 7, _0x411f54.width, _0x411f54.height - 7);
    }
  }
  _0x19e10f.scr.summary = {
    enter() {
      _0x4d92fd.music("bgm_kitchen");
      const _0x168c25 = Object.values(_0xbf5ed7.cooked).reduce((_0x563fa4, _0x309a3c) => _0x563fa4 + Math.max(0, _0x309a3c), 0);
      const _0x591a95 = _0xbf5ed7.today;
      _0x591a95.rent = _0x591a95.rent || 0;
      _0x591a95.order = _0x591a95.order || 0;
      const _0x1130ee = _0x36b1b9();
      const _0x250910 = _0x1130ee.reduce((_0x2133bf, _0x4d6833) => _0x2133bf + _0x4d6833.rev, 0);
      _0xbf5ed7.money += _0x250910;
      const _0x5855e9 = _0x1d50a7.revenue + _0x1d50a7.tips + _0x591a95.order + _0x250910 + (_0x591a95.recover || 0) + (_0x591a95.gdPay || 0) + (_0x591a95.save || 0) - (_0x591a95.hospital || 0) - (_0x591a95.donate || 0) - _0x591a95.cost - _0x591a95.fee - _0x1d50a7.fines - _0x591a95.rent - (_0x1d50a7.tax || 0) - (_0x591a95.bank || 0);
      let _0x593517 = null;
      if (_0xbf5ed7.order && _0xbf5ed7.order.day === _0xbf5ed7.day && !_0xbf5ed7.order.done) {
        _0x593517 = _0xbf5ed7.order;
        _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep - 0.2, 0, 5);
      }
      _0xbf5ed7.order = null;
      if (_0x168c25 > 0 && _0xbf5ed7.ch3 < 1) {
        _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep + Math.min(0.1, _0x168c25 * 0.004), 0, 5);
      }
      const _0x4f2548 = _0x168c25 > 0 && _0xbf5ed7.ch3 >= 1 ? _0x31c8b2(_0x588c6b) : null;
      if (_0x4f2548) {
        _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep + Math.min(0.12, _0x168c25 * 0.003), 0, 5);
      }
      const _0x1384da = 0;
      const _0x168a49 = _0x9792f6(_0x1d50a7.lost);
      _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep - _0x168a49, 0, 5);
      _0xbf5ed7.ledger.push({
        day: _0xbf5ed7.day,
        revenue: _0x1d50a7.revenue + _0x591a95.order + _0x250910,
        tips: _0x1d50a7.tips,
        cost: _0x591a95.cost,
        fee: _0x591a95.fee + _0x591a95.rent + (_0x1d50a7.tax || 0) + (_0x591a95.bank || 0) + (_0x591a95.donate || 0),
        fines: _0x1d50a7.fines,
        cash: _0x1d50a7.revenue + _0x1d50a7.tips + _0x591a95.order,
        fineTax: _0x1d50a7.fineTax || 0,
        fineQltt: _0x1d50a7.fineQltt || 0,
        fineTtp: _0x1d50a7.fineTtp || 0,
        fineVs: _0x1d50a7.fineVs || 0,
        net: _0x5855e9,
        served: _0x1d50a7.served,
        lost: _0x1d50a7.lost,
        rent: _0x591a95.rent,
        tax: _0x1d50a7.tax || 0
      });
      _0xbf5ed7.cooked = {};
      _0xbf5ed7.dayDone = true;
      this.d = {
        left: _0x168c25,
        wasted: _0x1384da,
        giveTo: _0x4f2548,
        decay: _0x168a49,
        net: _0x5855e9,
        brs: _0x1130ee,
        dRep: _0xbf5ed7.rep - _0x591a95.rep0,
        M: Object.assign({}, _0x1d50a7),
        T: Object.assign({}, _0x591a95),
        missed: _0x593517,
        closed: _0x5e2a80()
      };
      const _0x3c9a5b = _0xbf5ed7.stats;
      _0x3c9a5b.bestNet = Math.max(_0x3c9a5b.bestNet, _0x5855e9);
      if (_0x1d50a7.served >= 10 && _0x1d50a7.lost + _0x1d50a7.lostPricey === 0) {
        _0x3c9a5b.perfect++;
      }
      if (_0x1d50a7.rain) {
        _0x3c9a5b.rainBest = Math.max(_0x3c9a5b.rainBest, _0x1d50a7.served);
      }
      _0x4d92fd.play(_0x5855e9 >= 0 ? "win" : "fail");
      _0x690d06();
      this.render();
      setTimeout(_0x5b55cf, 900);
    },
    render() {
      _0x5f18ca();
      const {
        left: _0x4d23d7,
        net: _0xc702c3,
        dRep: _0x8cd171,
        M: _0x2a8ea8,
        T: _0x55fa90
      } = this.d;
      const _0x580e26 = _0xbf5ed7.reviews.filter(_0x58081d => _0x58081d.day === _0xbf5ed7.day).slice(-3).reverse().map(_0x2d2aa6 => "<li>" + _0x5985e5(_0x2d2aa6.s) + "<span>“" + _0x1ff737(_0x2d2aa6.t) + "”</span><i>— " + _0x1ff737(_0x2d2aa6.who) + "</i></li>").join("");
      _0x55ee07.innerHTML = "\n      <div class=\"panel paper summary\">\n        <div class=\"ph big\">" + _0x1525be("ico_book") + " Sổ thu chi · Ngày " + _0xbf5ed7.day + "</div>\n        <div class=\"scroll\">\n          " + (this.d.closed ? "<p class=\"warnt\">Tiệm chính bị đình chỉ, hôm nay nghỉ bán.</p>" : "") + "\n          <div class=\"kv\"><span>Bán được</span><b>" + (_0x2a8ea8.parts || _0x2a8ea8.served) + " phần · " + _0x2a8ea8.served + " lượt khách" + (_0x2a8ea8.appN ? " (" + _0x2a8ea8.appN + " đơn app)" : "") + "</b></div>\n          " + (_0x55fa90.orderQty ? "<div class=\"kv\"><span>Giao cỗ</span><b>" + _0x55fa90.orderQty + " phần</b></div>" : "") + "\n          <div class=\"kv\"><span>Tiền bán xôi</span><b class=\"pos\">+" + _0x9c212e(_0x2a8ea8.revenue) + "</b></div>\n          <div class=\"kv\"><span>Tiền boa</span><b class=\"pos\">+" + _0x9c212e(_0x2a8ea8.tips) + "</b></div>\n          <div class=\"kv\"><span>Đi chợ mua nguyên liệu</span><b class=\"neg\">-" + _0x9c212e(_0x55fa90.cost) + "</b></div>\n          " + (_0x2a8ea8.appFee ? "<div class=\"kv\"><span>Phí app (" + Math.round(_0x382616 * 100) + "%)</span><b class=\"neg\">-" + _0x9c212e(_0x2a8ea8.appFee) + "</b></div>" : "") + "\n          " + (this.d.brs && this.d.brs.length ? "<div class=\"sub\">Báo cáo chi nhánh</div>" + this.d.brs.map(_0x548c41 => "<div class=\"kv\"><span>" + _0x548c41.name + "</span><b class=\"pos\">+" + _0x9c212e(_0x548c41.rev) + "</b></div>" + (_0x548c41.skim ? "<p class=\"warnt\">" + _0x548c41.who + " (" + _0x3e99cb[_0x548c41.m].name + ") khai doanh thu thấp bất thường, nghi ăn bớt khoảng " + _0x2da126(_0x548c41.skim) + ".</p>" : "")).join("") : "") + "\n          " + (_0x55fa90.hospital ? "<div class=\"kv\"><span>Viện phí cho bà</span><b class=\"neg\">-" + _0x9c212e(_0x55fa90.hospital) + "</b></div>" : "") + "\n          " + (_0x55fa90.donate ? "<div class=\"kv\"><span>Công đức chùa Hà</span><b class=\"neg\">-" + _0x9c212e(_0x55fa90.donate) + "</b></div>" : "") + "\n          " + (_0x55fa90.recover ? "<div class=\"kv\"><span>Công an trả tiền</span><b class=\"pos\">+" + _0x9c212e(_0x55fa90.recover) + "</b></div>" : "") + "\n          " + (_0x55fa90.save ? "<div class=\"kv\"><span>Lãi tiết kiệm</span><b class=\"pos\">+" + _0x9c212e(_0x55fa90.save) + "</b></div>" : "") + "\n          " + (_0x55fa90.gdPay ? "<div class=\"kv\"><span>Bảo vệ đền bù</span><b class=\"pos\">+" + _0x9c212e(_0x55fa90.gdPay) + "</b></div>" : "") + "\n          " + (_0x55fa90.order ? "<div class=\"kv\"><span>Giao đơn đặt cỗ</span><b class=\"pos\">+" + _0x9c212e(_0x55fa90.order) + "</b></div>" : "") + "\n          " + (_0x55fa90.fee ? "<div class=\"kv\"><span>Vé chợ</span><b class=\"neg\">-" + _0x9c212e(_0x55fa90.fee) + "</b></div>" : "") + "\n          " + (_0x55fa90.rent ? "<div class=\"kv\"><span>" + (_0xbf5ed7.guard || _0xbf5ed7.teo ? "Thuê + lương" : "Tiền thuê") + "</span><b class=\"neg\">-" + _0x9c212e(_0x55fa90.rent) + "</b></div>" : "") + "\n          " + (_0x55fa90.bank ? "<div class=\"kv\"><span>Lãi ngân hàng</span><b class=\"neg\">-" + _0x9c212e(_0x55fa90.bank) + "</b></div>" : "") + "\n          " + (_0x2a8ea8.tax ? "<div class=\"kv\"><span>Thuế định kỳ (" + Math.round(_0x46406f * 100) + "%)</span><b class=\"neg\">-" + _0x9c212e(_0x2a8ea8.tax) + "</b></div>" : "") + "\n          " + (_0x2a8ea8.fineTax ? "<div class=\"kv\"><span>Phạt thuế (chưa có MST)</span><b class=\"neg\">-" + _0x9c212e(_0x2a8ea8.fineTax) + "</b></div>" : "") + "\n          " + (_0x2a8ea8.fineTtp ? "<div class=\"kv\"><span>Phạt (lấn chiếm)</span><b class=\"neg\">-" + _0x9c212e(_0x2a8ea8.fineTtp) + "</b></div>" : "") + "\n          " + (_0x2a8ea8.fineQltt ? "<div class=\"kv\"><span>Phạt (bán giá cao)</span><b class=\"neg\">-" + _0x9c212e(_0x2a8ea8.fineQltt) + "</b></div>" : "") + "\n          " + (_0x2a8ea8.fineVs ? "<div class=\"kv\"><span>Phạt VSATTP</span><b class=\"neg\">-" + _0x9c212e(_0x2a8ea8.fineVs) + "</b></div>" : "") + "\n          " + (() => {
        const _0x4ef483 = (_0x2a8ea8.fines || 0) - (_0x2a8ea8.fineTax || 0) - (_0x2a8ea8.fineQltt || 0) - (_0x2a8ea8.fineTtp || 0) - (_0x2a8ea8.fineVs || 0);
        if (_0x4ef483 > 0) {
          return "<div class=\"kv\"><span>Bị phạt</span><b class=\"neg\">-" + _0x9c212e(_0x4ef483) + "</b></div>";
        } else {
          return "";
        }
      })() + "\n          " + (_0x2a8ea8.fleeLost ? "<div class=\"kv\"><span>Bị bùng tiền" + (_0x2a8ea8.fleeParts ? " (" + _0x2a8ea8.fleeParts + " phần)" : "") + "</span><b class=\"neg\">" + _0x9c212e(_0x2a8ea8.fleeLost) + "</b></div>" : "") + "\n          <div class=\"kv total\"><span>" + (_0xc702c3 >= 0 ? "LÃI" : "LỖ") + " HÔM NAY</span><b class=\"" + (_0xc702c3 >= 0 ? "pos" : "neg") + "\">" + (_0xc702c3 >= 0 ? "+" : "") + _0x9c212e(_0xc702c3) + "</b></div>\n          <div class=\"kv\"><span>Khách bỏ về</span><b>" + (_0x2a8ea8.lost + _0x2a8ea8.lostPricey) + (_0x2a8ea8.lostPricey ? " (" + _0x2a8ea8.lostPricey + " chê đắt)" : "") + "</b></div>\n          " + (_0x2a8ea8.soldout ? "<div class=\"kv\"><span>Khách hỏi món không có</span><b>" + _0x2a8ea8.soldout + "</b></div>" : "") + "\n          " + (_0x2a8ea8.confiscated ? "<div class=\"kv\"><span>Xôi bị tịch thu/đổ</span><b class=\"neg\">" + _0x2a8ea8.confiscated + " phần</b></div>" : "") + "\n          " + (this.d.missed ? "<p class=\"warnt\">Không giao kịp cỗ cho " + _0x1ff737(this.d.missed.who) + ", mất uy tín!</p>" : "") + "\n          " + (_0x4d23d7 ? this.d.giveTo ? "<p class=\"muted\">Còn " + _0x4d23d7 + " phần xôi thừa, " + (_0xe9a99e() ? "Tí" : "bà") + " đem tặng " + this.d.giveTo + ". (+uy tín)</p>" : "<p class=\"muted\">Còn " + _0x4d23d7 + " phần xôi thừa, bà đem cho bà con nghèo trong xóm. (+uy tín)</p>" : "") + "\n          " + (this.d.decay ? "<p class=\"warnt\">Khách phố hay kể xấu: để " + _0x2a8ea8.lost + " người bỏ về, uy tín giảm " + this.d.decay.toFixed(2).replace(".", ",") + ".</p>" : "") + "\n          <div class=\"kv\"><span>Uy tín</span><b>" + _0x5985e5(_0xbf5ed7.rep) + " <small class=\"" + (_0x8cd171 >= 0 ? "pos" : "neg") + "\">" + (_0x8cd171 >= 0 ? "▲" : "▼") + Math.abs(_0x8cd171).toFixed(2) + "</small></b></div>\n          <div class=\"sub\">Lời bình của khách</div>\n          <ul class=\"reviews\">" + (_0x580e26 || "<li class=\"muted\">Hôm nay chưa ai bình phẩm gì.</li>") + "</ul>\n          <div class=\"kv total\"><span>Tiền mặt</span><b>" + _0x9c212e(_0xbf5ed7.money) + "</b></div>\n          " + (_0xbf5ed7.debt > 0 ? "<div class=\"kv\"><span>" + (_0xbf5ed7.chapter >= 2 ? "Còn nợ" : "Nợ lão Cả Bá") + "</span><b class=\"neg\">" + _0x9c212e(_0xbf5ed7.debt) + "</b></div>" : "") + "\n          " + (_0xbf5ed7.chapter >= 2 ? "<div class=\"goalbox\" id=\"sGoal\">" + _0x39bb7c() + "</div>" : "") + "\n        </div>\n        <div class=\"foot\"><div class=\"row\">\n          " + (_0xbf5ed7.debt <= 0 ? "" : "<button class=\"btn gold\" id=\"bPay\">Trả nợ</button>") + "\n          <button class=\"btn green\" id=\"bUpg2\">Nâng cấp</button>\n          <button class=\"btn red\" id=\"bNext\">" + (!_0xbf5ed7.freeMode && _0xbf5ed7.day >= _0x3777d0 ? "Đối mặt Cả Bá ➜" : "Sang ngày mới ➜") + "</button>\n        </div></div>\n      </div>";
      if (_0x1d672b("#bPay")) {
        _0x1d672b("#bPay").onclick = () => {
          _0x4d92fd.play("click");
          _0x188f76(() => this.render());
        };
      }
      _0x1d672b("#bNext").onclick = () => {
        _0x4d92fd.play("click");
        this.next();
      };
      _0x1d672b("#bUpg2").onclick = () => {
        _0x4d92fd.play("click");
        _0x2112fe(() => this.render());
      };
      if (_0x1d672b("#sGoal")) {
        _0x1d672b("#sGoal").onclick = () => {
          _0x4d92fd.play("click");
          _0x36b3fa("summary2");
        };
      }
    },
    next() {
      if (!_0xbf5ed7.freeMode && _0xbf5ed7.day >= _0x3777d0) {
        if (_0xbf5ed7.debt > 0 && _0xbf5ed7.money >= _0xbf5ed7.debt) {
          _0xbf5ed7.money -= _0xbf5ed7.debt;
          _0xbf5ed7.debt = 0;
        }
        if (_0xbf5ed7.debt <= 0) {
          Object.assign(_0xbf5ed7.flags, {
            c1Win: 1,
            c1NoLoan: _0xbf5ed7.flags.vayHai ? 0 : 1,
            c1NoLoss: _0xbf5ed7.ledger.filter(_0x3c816b => _0x3c816b.day <= _0xbf5ed7.day).every(_0x25524c => _0x25524c.net >= 0) ? 1 : 0,
            c1Cash: Math.max(0, Math.floor(_0xbf5ed7.money / 1000)),
            c2Day: _0xbf5ed7.day + 1
          });
          _0xbf5ed7.freeMode = true;
          _0xbf5ed7.chapter = 2;
          _0x4d92fd.play("win");
          _0x690d06();
          _0x463590.ev("level_up", {
            level: 2,
            character: "ba_tam"
          });
          _0x58a015("story", {
            lines: _0x3886c6.concat(_0x42a140),
            next: () => {
              _0x5b55cf();
              _0xbf5ed7.day++;
              _0x37e825();
              _0x56ed87();
            }
          });
        } else {
          _0x4d92fd.play("fail");
          _0x463590.ev("game_over", {
            day: _0xbf5ed7.day,
            debt: Math.round(_0xbf5ed7.debt)
          });
          _0x58a015("story", {
            lines: _0x116907,
            next: () => {
              _0x4ce74b();
              _0x58a015("title");
            }
          });
        }
        return;
      }
      _0xbf5ed7.day++;
      _0x37e825();
      _0x56ed87();
    },
    draw() {
      _0xfeb5dc("bg_kitchen");
      _0xca5277.fillStyle = "rgba(20,10,10,.45)";
      _0xca5277.fillRect(0, 0, _0xc10b19, _0x2d0f1c);
    }
  };
  _0x19e10f.scr.summary2 = {
    enter() {
      if (!_0x19e10f.scr.summary.d) {
        _0xbf5ed7.day++;
        _0x37e825();
        _0x56ed87();
        return;
      }
      _0x19e10f.scr.summary.render();
    },
    draw() {
      _0x19e10f.scr.summary.draw();
    }
  };
  function _0x37e825() {
    _0xbf5ed7.today = {
      cost: 0,
      fee: 0,
      rep0: _0xbf5ed7.rep,
      day: _0xbf5ed7.day
    };
    _0xbf5ed7.dayDone = false;
  }
  let _0x27b5e6 = performance.now();
  function _0x4fa933(_0x49c11a) {
    if (_0x49c11a - _0x27b5e6 < 15) {
      requestAnimationFrame(_0x4fa933);
      return;
    }
    const _0x3a0188 = Math.min(0.05, (_0x49c11a - _0x27b5e6) / 1000);
    _0x27b5e6 = _0x49c11a;
    _0x19e10f.t += _0x3a0188;
    const _0x14cdce = _0x19e10f.scr[_0x19e10f.screen];
    if (_0x14cdce) {
      if (_0x14cdce.update && (!_0x19e10f.paused || _0x19e10f.screen === "daycard" || _0x19e10f.screen === "title")) {
        _0x14cdce.update(_0x3a0188);
      }
      _0xca5277.clearRect(0, 0, _0xc10b19, _0x2d0f1c);
      if (_0x14cdce.draw) {
        _0x14cdce.draw();
      }
    }
    requestAnimationFrame(_0x4fa933);
  }
  _0x526de6();
  window.addEventListener("load", _0x526de6);
  window.addEventListener("orientationchange", function () {
    setTimeout(_0x526de6, 200);
  });
  if (window.visualViewport) {
    visualViewport.addEventListener("resize", _0x526de6);
  }
  [150, 500, 1500].forEach(function (_0x37e1d4) {
    setTimeout(_0x526de6, _0x37e1d4);
  });
  const _0x4bf46a = false;
  const _0x5dcab6 = false;
  const _0x49220e = true;
  const _0x555820 = _0x1539da => {
    let _0x52c44d = 2166136261;
    for (const _0x4efb3e of _0x1539da) {
      _0x52c44d ^= _0x4efb3e.charCodeAt(0);
      _0x52c44d = Math.imul(_0x52c44d, 16777619) >>> 0;
    }
    return _0x52c44d.toString(36);
  };
  function _0x24df61() {
    const _0x57af3d = window.Capacitor;
    return !!_0x57af3d && !!_0x57af3d.isNativePlatform && !!_0x57af3d.isNativePlatform() && location.hostname === "localhost" && /^(capacitor|https):$/.test(location.protocol);
  }
  const _0x35199c = "https://t.me/+66tyVqKWhQNhNDFl";
  function _0x4366b3(_0x58b7e9) {
    const _0xc64d7a = window.Capacitor;
    if (_0xc64d7a && _0xc64d7a.isNativePlatform && _0xc64d7a.isNativePlatform()) {
      location.href = _0x58b7e9;
      return;
    }
    const _0x2ce2bc = window.open(_0x58b7e9, "_blank");
    if (_0x2ce2bc) {
      try {
        _0x2ce2bc.opener = null;
      } catch (_0x238703) {}
    } else {
      location.href = _0x58b7e9;
    }
  }
  function _0x1f16ee(_0x8be24e) {
    const _0x5eda4c = "https://" + "tiemxoibatam.io.vn";
    _0x57f03a(_0x1525be("port_batam", "ico") + "Bà Tám dặn con", "<div class=\"notice\"><p>Ứng dụng phát hành <b>miễn phí</b> trên <b>cửa hàng ứng dụng chính thức</b>.</p>\n    <p>Trang chủ duy nhất của Tiệm Xôi Bà Tám là <b>" + _0x5eda4c.replace("https://", "") + "</b>.</p>\n    <p>Nếu con đang dùng một phiên bản khác, được tải về từ một nguồn không được kiểm chứng, Bà Tám không chịu trách nhiệm về những mất mát dữ liệu, quá trình trải nghiệm hay những tổn thất mà con gặp phải.</p>\n    <p>Tham gia Group Telegram hoặc Facebook để cập nhật thông báo mới nhất nhé con!</p></div>", [{
      label: "Tham gia Telegram",
      cls: "blue half",
      keep: true,
      fn: () => {
        _0x463590.ev("join_group", {
          from: "notice",
          to: "telegram"
        });
        _0x4366b3(_0x35199c);
      }
    }, {
      label: "Tham gia Facebook",
      cls: "blue half",
      keep: true,
      fn: () => {
        _0x463590.ev("join_group", {
          from: "notice",
          to: "facebook"
        });
        _0x4366b3(_0x43289a);
      }
    }, {
      label: "Vào game",
      cls: "red full",
      fn: _0x8be24e
    }], "notice-box");
  }
  function _0x1ee31a() {
    if (_0x4bf46a) {
      return true;
    }
    if (_0x5dcab6) {
      return _0x24df61();
    }
    const _0x1c64d3 = location.protocol;
    const _0xea0d45 = location.hostname.toLowerCase();
    if (!_0x49220e && (_0x1c64d3 === "file:" || _0x1c64d3 === "capacitor:" || _0xea0d45 === "localhost" || _0xea0d45 === "127.0.0.1")) {
      return true;
    }
    if (_0x1c64d3 !== "https:" && _0x49220e) {
      return false;
    }
    const _0x197995 = _0xea0d45.split(".");
    for (let _0x273ed7 = 0; _0x273ed7 < _0x197995.length - 1; _0x273ed7++) {
      if (["17jp9dp"].includes(_0x555820(_0x197995.slice(_0x273ed7).join(".")))) {
        return true;
      }
    }
    return false;
  }
  if (_0x1ee31a()) {
    if (!_0x4bf46a) {
      try {
        if (window.top !== window.self) {
          window.top.location = window.self.location.href;
        }
      } catch (_0x2f799d) {}
    }
    _0x19e10f.screen = "loading";
    _0x463590.init();
    requestAnimationFrame(_0x4fa933);
    _0x4d92fd.init();
    let _0x504b18 = 0;
    let _0x4aa970 = false;
    let _0x4a58ba = false;
    const _0x1463b3 = () => {
      if (_0x4aa970 && _0x4a58ba) {
        _0x19e10f.scr.loading.ready();
      }
    };
    Promise.all([_0x2c48e3(_0xf297bc => {
      _0x504b18 = _0xf297bc;
      _0x19e10f.scr.loading.progress(_0xf297bc);
    }), _0x4356d4.load()]).then(() => {
      _0x4aa970 = true;
      _0x1463b3();
    });
    _0x1f16ee(() => {
      _0x4a58ba = true;
      _0x19e10f.scr.loading.enter();
      _0x19e10f.scr.loading.progress(_0x504b18);
      _0x1463b3();
    });
    try {
      if (navigator.storage && navigator.storage.persist) {
        navigator.storage.persist().catch(() => {});
      }
    } catch (_0x2fe1b7) {}
    if (_0x5dcab6) {
      try {
        const _0x4d9bd4 = window.Capacitor;
        const _0x5076f6 = _0x4d9bd4 && _0x4d9bd4.Plugins;
        if (_0x4d9bd4.getPlatform && _0x4d9bd4.getPlatform() === "android" && _0x5076f6 && _0x5076f6.App && _0x5076f6.App.getInfo) {
          _0x5076f6.App.getInfo().then(_0x5a622f => {
            if (_0x5a622f && _0x5a622f.id && _0x555820(_0x5a622f.id) !== "1lyggbv") {
              _0x56e85c();
            }
          }).catch(() => {});
        }
      } catch (_0x149c13) {}
    }
  } else {
    _0x56e85c();
  }
  function _0x56e85c() {
    _0x19e10f.paused = true;
    _0xbf5ed7 = null;
    try {
      _0x543cdd();
      _0xaf18a.classList.add("hidden");
    } catch (_0x50e6d7) {}
    const _0x171875 = "https://" + "tiemxoibatam.io.vn";
    _0x55ee07.innerHTML = "<div class=\"daycard\"><div class=\"d1\">Bản sao trái phép</div><div class=\"d2\">Tiệm Xôi Bà Tám chỉ phát hành trên cửa hàng ứng dụng chính thức.</div>\n    <a class=\"btn red big\" style=\"margin-top:calc(var(--u)*8);text-decoration:none\" href=\"" + _0x171875 + "\">Tải bản chính</a></div>";
    if (!_0x24df61()) {
      setTimeout(() => {
        location.replace(_0x171875);
      }, 4000);
    }
  }
  const _0x1714c2 = _0x19e10f.scr.kitchen.enter;
  _0x19e10f.scr.kitchen.enter = function () {
    if (!_0xbf5ed7.today || _0xbf5ed7.today.day !== _0xbf5ed7.day) {
      _0xbf5ed7.today = {
        cost: 0,
        fee: 0,
        rep0: _0xbf5ed7.rep,
        day: _0xbf5ed7.day
      };
    }
    _0x1714c2.call(this);
  };
  function _0x346d59(_0x286d57) {
    _0x286d57.upg = _0x286d57.upg || {};
    _0x286d57.ach = _0x286d57.ach || {};
    _0x286d57.stats = Object.assign({
      served: 0,
      dish: {},
      caught: 0,
      escaped: 0,
      perfect: 0,
      bestNet: 0,
      soldOut: 0,
      rainBest: 0
    }, _0x286d57.stats || {});
    if (!_0x286d57.stats.served && _0x286d57.totalServed) {
      _0x286d57.stats.served = _0x286d57.totalServed;
    }
    _0x286d57.chapter ||= _0x286d57.freeMode ? 2 : 1;
    _0x286d57.ch2 = _0x286d57.ch2 || 0;
    _0x286d57.ch3 = _0x286d57.ch3 || 0;
    _0x286d57.rentDue = _0x286d57.rentDue || 0;
    _0x286d57.taxReg = !!_0x286d57.taxReg;
    _0x286d57.guard = !!_0x286d57.guard;
    _0x286d57.teo = !!_0x286d57.teo;
    _0x286d57.order = _0x286d57.order || null;
    if (_0x286d57.stats.thiefCaught == null) {
      _0x286d57.stats.thiefCaught = 0;
    }
    _0x286d57.ch4 = _0x286d57.ch4 || 0;
    _0x286d57.br = Array.isArray(_0x286d57.br) ? _0x286d57.br : [];
    _0x286d57.app = _0x286d57.app || 4.5;
    _0x286d57.rv4 = _0x286d57.rv4 || null;
    _0x286d57.dep = Array.isArray(_0x286d57.dep) ? _0x286d57.dep : [];
    return _0x286d57;
  }
  const _0x592c27 = _0xa1724d => _0xbf5ed7 && _0xbf5ed7.upg && _0xbf5ed7.upg[_0xa1724d] || 0;
  const _0xf7f3e0 = [8, 16, 24];
  const _0x72a5e3 = [0, 0.4, 0.5];
  const _0x34fd23 = () => _0xf7f3e0[_0x592c27("noi")] || 8;
  const _0x534f0c = () => _0x5b77a7 * (1 - (_0x72a5e3[_0x592c27("noi")] || 0)) * (_0xbf5ed7 && _0x292cac("matdien") ? 2 : 1);
  const _0x46b252 = () => [0.45, 0.3, 0.15][_0x592c27("la")];
  const _0x58023a = () => 1 + _0x592c27("tra") * 0.2 + (_0xbf5ed7.ch2 >= 1 ? 0.1 : 0);
  const _0x402275 = () => (1 + _0x592c27("loa") * 0.15) * (_0xbf5ed7.ch2 >= 1 ? 1.1 : 1) * (_0xbf5ed7.ch2 >= 2 ? 1.1 : 1) * (_0xbf5ed7.ch2 >= 3 ? 1.15 : 1);
  function _0x2112fe(_0x5dc5e8) {
    const _0x59394f = _0x658bf5.filter(_0x3c07a6 => _0x1a2db1(_0x2be998[_0x3c07a6])).map(_0x2c9833 => {
      const _0x240ca0 = _0x2be998[_0x2c9833];
      const _0x5bfbfb = _0x592c27(_0x2c9833);
      const _0x3d1f9d = _0x240ca0.max || _0x240ca0.cost.length;
      const _0x369b95 = _0x5bfbfb >= _0x3d1f9d;
      const _0x47f146 = _0x369b95 ? 0 : _0x240ca0.cost[_0x5bfbfb];
      return "<div class=\"urow " + (_0x369b95 ? "done" : "") + "\">\n      " + _0x1525be(_0x240ca0.icon, "ico xl") + "\n      <div class=\"ut\"><b>" + _0x240ca0.name + "</b> <span class=\"lv\">" + "■".repeat(_0x5bfbfb) + "□".repeat(_0x3d1f9d - _0x5bfbfb) + "</span>\n        <small>" + (_0x369b95 ? "Đã nâng tối đa · " + _0x240ca0.lv[_0x3d1f9d - 1] : _0x240ca0.lv[_0x5bfbfb]) + "</small></div>\n      " + (_0x369b95 ? "<span class=\"max\">MAX</span>" : "<button class=\"btn " + (_0xbf5ed7.money >= _0x47f146 ? "green" : "grey") + " small ubuy\" data-k=\"" + _0x2c9833 + "\">" + _0x2da126(_0x47f146) + "</button>") + "\n    </div>";
    }).join("");
    const _0x3bbb17 = _0xbf5ed7.ch3 >= 1 ? "<div class=\"urow\">" + _0x1525be("port_baove", "ico xl") + "<div class=\"ut\"><b>Thuê bảo vệ</b> <span class=\"lv\">" + (_0xbf5ed7.guard ? "■" : "□") + "</span>\n      <small>Trông tiệm ban đêm, tóm kẻ trộm. Lương " + _0x2da126(_0x24b125) + "/tháng (trả tháng đầu ngay).</small></div>\n      <button class=\"btn " + (_0xbf5ed7.guard ? "grey" : _0xbf5ed7.money >= _0x24b125 ? "green" : "grey") + " small\" id=\"bGuard\">" + (_0xbf5ed7.guard ? "Cho nghỉ" : "Thuê") + "</button></div>" : "";
    const _0x3fddff = _0xbf5ed7.chapter >= 2 ? "<div class=\"urow\">" + _0x1525be("port_teo", "ico xl") + "<div class=\"ut\"><b>Thuê Cu Tèo gói xôi</b> <span class=\"lv\">" + (_0xbf5ed7.teo ? "■" : "□") + "</span>\n      <small>Chọn xôi là Tèo gói luôn, Tèo còn biết rượt khách quỵt. Lương " + _0x2da126(_0x49cc5f()) + "/tháng (trả tháng đầu ngay).</small></div>\n      <button class=\"btn " + (_0xbf5ed7.teo ? "grey" : _0xbf5ed7.money >= _0x49cc5f() ? "green" : "grey") + " small\" id=\"bTeo\">" + (_0xbf5ed7.teo ? "Cho nghỉ" : "Thuê") + "</button></div>" : "";
    _0x57f03a(_0x1525be("ico_up") + " Nâng cấp hàng xôi", "<div class=\"ulist\">" + _0x59394f + _0x3fddff + _0x3bbb17 + "</div><p class=\"muted\">Tiền mặt: <b>" + _0x9c212e(_0xbf5ed7.money) + "</b></p>", [{
      label: "Đóng",
      cls: "grey",
      fn: _0x5dc5e8
    }], "paper");
    const _0x21ec26 = _0x517a28.querySelector("#bGuard");
    if (_0x21ec26) {
      _0x21ec26.onclick = () => {
        _0x4d92fd.play("click");
        _0x3e9058(() => _0x2112fe(_0x5dc5e8));
      };
    }
    const _0x30acf3 = _0x517a28.querySelector("#bTeo");
    if (_0x30acf3) {
      _0x30acf3.onclick = () => {
        _0x4d92fd.play("click");
        _0x25b279(() => _0x2112fe(_0x5dc5e8));
      };
    }
    _0x517a28.querySelectorAll(".ubuy").forEach(_0x3d5b69 => _0x3d5b69.onclick = () => {
      const _0x23c0fe = _0x3d5b69.dataset.k;
      const _0x1a3080 = _0x2be998[_0x23c0fe];
      const _0x14a7c0 = _0x1a3080.cost[_0x592c27(_0x23c0fe)];
      if (_0xbf5ed7.money < _0x14a7c0) {
        _0x4d92fd.play("wrong");
        return _0x991d3e("Chưa đủ tiền nâng cấp!", "bad");
      }
      _0xbf5ed7.money -= _0x14a7c0;
      _0xbf5ed7.upg[_0x23c0fe] = _0x592c27(_0x23c0fe) + 1;
      _0x4d92fd.play("buy");
      _0x991d3e(_0x1a3080.name + ": " + _0x1a3080.lv[_0xbf5ed7.upg[_0x23c0fe] - 1], "good");
      _0x5f18ca();
      _0x690d06();
      _0x2112fe(_0x5dc5e8);
    });
  }
  function _0x5b55cf() {
    if (!_0xbf5ed7) {
      return;
    }
    const _0x120aac = [];
    for (const _0x47b861 of _0x32ee96) {
      if (_0xbf5ed7.ach[_0x47b861.id]) {
        continue;
      }
      let _0x90fbaa = false;
      try {
        _0x90fbaa = _0x47b861.check(_0xbf5ed7, _0xbf5ed7.stats);
      } catch (_0x75ba78) {}
      if (_0x90fbaa) {
        _0xbf5ed7.ach[_0x47b861.id] = _0xbf5ed7.day;
        _0xbf5ed7.money += _0x47b861.reward;
        _0x120aac.push(_0x47b861);
        _0x463590.ev("unlock_achievement", {
          achievement_id: _0x47b861.id
        });
      }
    }
    _0x120aac.forEach((_0x18efda, _0x4a9597) => setTimeout(() => {
      _0x4d92fd.play("medal");
      const _0xc7a70f = _0x5ae569("div", "achpop", _0x1525be("ico_medal", "ico") + "<div><small>Danh hiệu mới</small><b>" + _0x18efda.name + "</b>" + (_0x18efda.reward ? "<i>+" + _0x9c212e(_0x18efda.reward) + "</i>" : "") + "</div>");
      _0x336c76.appendChild(_0xc7a70f);
      setTimeout(() => _0xc7a70f.remove(), 3200);
      if (_0x18efda.reward) {
        _0x257142();
      }
    }, _0x4a9597 * 1400));
    if (_0x120aac.length) {
      _0x690d06();
    }
  }
  function _0x3c8673() {
    let _0x158ed6 = "";
    for (const _0x11b308 of _0x32ee96) {
      if (_0xbf5ed7.ach[_0x11b308.id]) {
        _0x158ed6 = _0x11b308.name;
      }
    }
    return _0x158ed6;
  }
  function _0x56b82c() {
    return "<div class=\"achsum\">Đã đạt <b>" + _0x32ee96.filter(_0x3dee8c => _0xbf5ed7.ach[_0x3dee8c.id]).length + "/" + _0x32ee96.length + "</b> danh hiệu</div>\n    <ul class=\"achlist\">" + _0x32ee96.map(_0x2a01e5 => {
      const _0x3a790a = !!_0xbf5ed7.ach[_0x2a01e5.id];
      return "<li class=\"" + (_0x3a790a ? "on" : "") + "\">" + _0x1525be(_0x3a790a ? "ico_medal" : "ico_lock", "ico") + "<div><b>" + _0x2a01e5.name + "</b><small>" + _0x2a01e5.desc + (_0x2a01e5.reward ? " · thưởng " + _0x5e68cf(_0x2a01e5.reward) : "") + (_0x3a790a ? " · ngày " + _0xbf5ed7.ach[_0x2a01e5.id] : "") + "</small></div></li>";
    }).join("") + "</ul>";
  }
  const _0x1bb751 = () => _0x463ee[_0xbf5ed7.ch2] || null;
  const _0x2da126 = _0x46c96f => Math.abs(_0x46c96f) >= 1000000 ? (Math.round(_0x46c96f / 100000) / 10).toString().replace(".", ",") + "tr" : _0x5e68cf(Math.max(0, _0x46c96f));
  function _0x3ae0cb() {
    if (_0xbf5ed7.ch3 >= 1) {
      return _0x4c1d60();
    }
    const _0x321c4d = _0x1bb751();
    if (_0x321c4d) {
      return "<span class=\"goal\">" + _0x1525be("ico_shop", "ico") + _0x321c4d.name.replace("Khai trương ", "") + ": <b>" + _0x2da126(_0xbf5ed7.money) + "/" + _0x2da126(_0x321c4d.cost) + "</b></span>";
    } else {
      return "<span class=\"goal\">" + _0x1525be("ico_shop", "ico") + "Lên phố: <b>" + _0x2da126(_0xbf5ed7.money) + "/" + _0x2da126(_0x1f9ed0) + "</b></span>";
    }
  }
  function _0x39bb7c() {
    const _0x17ebc6 = _0x2da126(Math.max(0, _0xbf5ed7.money));
    let _0x3c53af;
    let _0x40964d;
    let _0x4834c5 = "Xem";
    const _0x14851a = _0x1bb751();
    if (_0x14aaa7()) {
      _0x3c53af = "Chương 5 · Tí nối nghiệp";
      _0x40964d = "<b>Bán hàng tự do</b>";
    } else if (_0x121d51()) {
      _0x3c53af = "Chương 4 · Thương hiệu";
      _0x40964d = _0xbf5ed7.br.length < 3 ? "Chi nhánh: <b>" + _0xbf5ed7.br.length + "/3</b>" : _0xbf5ed7.ch4 < 2 ? "Bí truyền: <b>" + _0x17ebc6 + "/" + _0x2da126(_0x4d6973) + "</b>" : "Mốc tiếp: <b>" + _0x17ebc6 + "/" + _0x2da126(_0x3c2496) + "</b>";
      if (_0x17ace1()) {
        _0x4834c5 = "Nhận";
      }
    } else if (_0xbf5ed7.ch3 >= 1) {
      _0x3c53af = _0xbf5ed7.flags.tiHeir ? "Tí lập lại thương hiệu" : "Chương 4 · Lập thương hiệu";
      _0x40964d = "Cần: <b>" + _0x17ebc6 + "/" + _0x2da126(_0xdd3ac3) + "</b>";
      if (_0x937290() && !_0x275008().length) {
        _0x4834c5 = "Lập";
      }
    } else if (_0x14851a) {
      _0x3c53af = "Chương 2 · " + _0x14851a.name;
      _0x40964d = "Cần: <b>" + _0x17ebc6 + "/" + _0x2da126(_0x14851a.cost) + "</b>";
      if (_0xbf5ed7.money >= _0x14851a.cost && !(_0xbf5ed7.debt > 0)) {
        _0x4834c5 = "Đầu tư";
      }
    } else {
      _0x3c53af = "Chương 3 · Lên phố";
      _0x40964d = "Cần: <b>" + _0x17ebc6 + "/" + _0x2da126(_0x1f9ed0) + "</b>";
      if (_0xbf5ed7.money >= _0x1f9ed0 && !(_0xbf5ed7.debt > 0)) {
        _0x4834c5 = "Lên phố";
      }
    }
    return "<div class=\"gtxt\"><b>" + _0x3c53af + "</b><small>" + _0x40964d + "</small></div><button class=\"btn " + (_0x4834c5 === "Xem" ? "gold" : "red") + " small\" id=\"sGoalBtn\">" + _0x4834c5 + "</button>";
  }
  function _0x36b3fa(_0x2e9198) {
    const _0x50fbfc = _0x1bb751();
    const _0x2e5f57 = _0x463ee.map((_0x2156b4, _0x12624c) => "<li class=\"" + (_0x12624c < _0xbf5ed7.ch2 ? "on" : _0x12624c === _0xbf5ed7.ch2 ? "cur" : "") + "\">" + _0x1525be(_0x12624c < _0xbf5ed7.ch2 ? "ico_medal" : _0x12624c === _0xbf5ed7.ch2 ? "ico_shop" : "ico_lock", "ico") + "<div><b>" + _0x2156b4.name + "</b><small>" + _0x2da126(_0x2156b4.cost) + " · " + _0x2156b4.desc + "</small></div></li>").join("") + ("<li class=\"" + (_0xbf5ed7.ch3 >= 1 ? "on" : _0x50fbfc ? "" : "cur") + "\">" + _0x1525be(_0xbf5ed7.ch3 >= 1 ? "ico_medal" : _0x50fbfc ? "ico_lock" : "ico_shop", "ico") + "<div><b>Chương 3: Lên phố</b><small>Cần có " + _0x2da126(_0x1f9ed0) + " trong tiệm, chi phí " + _0x2da126(_0x179d7d) + ". Trên phố giá bán cao gấp " + String(_0x2b3cea).replace(".", ",") + " lần, khách đông hơn, đơn đặt cỗ lớn hơn.</small></div></li>") + (_0xbf5ed7.ch3 >= 1 ? _0x2ed12c() : "");
    const _0x3bba8b = !_0x2e9198 || _0x2e9198 === "kitchen" && _0x19e10f.scr.kitchen.cook;
    const _0x34cc7e = (_0xbf5ed7.debt || 0) > 0;
    const _0x5a2b4d = _0x50fbfc ? _0x50fbfc.cost : _0x1f9ed0;
    const _0x523295 = _0x50fbfc && _0xbf5ed7.money >= _0x50fbfc.cost && !_0x34cc7e && !_0x3bba8b;
    const _0x9b4f0d = !_0x50fbfc && _0x3ab845() && _0xbf5ed7.money >= _0x1f9ed0 && !_0x34cc7e && !_0x3bba8b;
    let _0x17670a = "";
    const _0x5925ae = _0x937290() && !_0x275008().length && !_0x3bba8b;
    const _0x1e3275 = _0x17ace1() && !_0x3bba8b;
    if (_0x121d51()) {
      _0x17670a = _0xbf5ed7.ch4 >= 2 ? "<p>Xôi Bà Tám đã thành thương hiệu, có món bí truyền riêng.</p>" : _0x1e3275 ? "<p class=\"pos\">Đủ điều kiện nhận công thức bí truyền!</p>" : "";
    } else if (_0xbf5ed7.ch3 >= 1) {
      _0x17670a = _0x275008().length ? "<p class=\"muted\">Để lập thương hiệu còn cần: " + _0x275008().join(", ") + ".</p>" : _0x3bba8b ? "<p class=\"muted\">Dọn hàng xong (hoặc lúc ở bếp, khi không đồ xôi) mới lập thương hiệu được.</p>" : "";
    } else if (_0x34cc7e) {
      _0x17670a = "<p class=\"warnt\">Còn nợ, trả hết mới được đầu tư.</p>";
    } else if (_0x3bba8b && _0xbf5ed7.money >= _0x5a2b4d) {
      _0x17670a = "<p class=\"muted\">Dọn hàng xong (hoặc lúc ở bếp, khi không đồ xôi) mới đầu tư được.</p>";
    }
    const _0x28c6d6 = [{
      label: "Đóng",
      cls: "grey"
    }];
    if (_0x523295) {
      _0x28c6d6.push({
        label: "Đầu tư " + _0x2da126(_0x50fbfc.cost),
        cls: "red",
        fn: () => _0x5e6e9f(_0x2e9198)
      });
    }
    if (_0x9b4f0d) {
      _0x28c6d6.push({
        label: "Lên phố (" + _0x2da126(_0x179d7d) + ")",
        cls: "red",
        fn: () => _0x2d525e(_0x2e9198)
      });
    }
    if (_0x5925ae) {
      _0x28c6d6.push({
        label: "Lập thương hiệu (" + _0x2da126(_0x2e28d0) + ")",
        cls: "red",
        fn: () => _0x5c5c69(_0x2e9198)
      });
    }
    if (_0x1e3275) {
      _0x28c6d6.push({
        label: "Nhận bí truyền",
        cls: "red",
        fn: () => _0x44e2e7(_0x2e9198)
      });
    }
    if (_0xbf5ed7.ch3 >= 1 && !_0x121d51() && !_0xe9a99e() && !_0x3bba8b) {
      _0x28c6d6.push({
        label: "Bỏ phố về quê",
        cls: "gold",
        fn: () => _0x3a2b74(_0x2e9198)
      });
    }
    _0x57f03a(_0x1525be("ico_shop") + " " + (_0xbf5ed7.ch3 >= 1 ? "Chặng đường Xôi Bà Tám" : "Mở tiệm & lên phố"), "<ul class=\"achlist\">" + _0x2e5f57 + "</ul>\n    " + (_0xbf5ed7.ch3 >= 1 ? _0x121d51() ? "" : "<p>Tiền trong tiệm: <b>" + _0x9c212e(_0xbf5ed7.money) + "</b> / cần <b>" + _0x9c212e(_0xdd3ac3) + "</b></p>" : "<p>Tiền trong tiệm: <b>" + _0x9c212e(_0xbf5ed7.money) + "</b> / cần <b>" + _0x9c212e(_0x5a2b4d) + "</b></p>") + _0x17670a, _0x28c6d6, "paper");
  }
  function _0x5e6e9f(_0x28cf01) {
    const _0x49e357 = _0x1bb751();
    if (!!_0x49e357 && !(_0xbf5ed7.money < _0x49e357.cost)) {
      _0xbf5ed7.money -= _0x49e357.cost;
      _0xbf5ed7.ch2++;
      _0x463590.ev("ch2_stage", {
        stage: _0xbf5ed7.ch2
      });
      if (_0x49e357.id === "bien") {
        _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep + 0.3, 0, 5);
      }
      if (_0x49e357.id === "tiem") {
        _0x3711c2(_0x3c8c35);
        _0xbf5ed7.flags.tiemDay = _0xbf5ed7.day;
        _0xbf5ed7.flags.tiemBare = Object.values(_0xbf5ed7.upg).some(_0x55f19e => _0x55f19e > 0) ? 0 : 1;
      }
      if (_0x49e357.id === "sap" && !_0xbf5ed7.rentDue) {
        _0xbf5ed7.rentDue = _0xbf5ed7.day + _0x468fd3;
      }
      _0x4d92fd.play(_0x49e357.id === "tiem" ? "phao" : "win");
      _0x690d06();
      _0x58a015("story", {
        lines: _0x49e357.story,
        next: () => {
          _0x58a015(_0x28cf01 || "kitchen");
          setTimeout(_0x5b55cf, 600);
        }
      });
    }
  }
  const _0x40d7fe = {
    sparks: [],
    t: 0
  };
  function _0x5b8cd6(_0x2682f3) {
    _0x40d7fe.t -= _0x2682f3;
    if (_0x40d7fe.t <= 0) {
      _0x40d7fe.t = _0x3d90fc(0.25, 0.6);
      const _0x3caa52 = _0x3d90fc(20, 160);
      const _0x42e692 = _0x3d90fc(20, 110);
      const _0x424b18 = _0x31c8b2(["#f8dc6a", "#dc5a36", "#fff8ea", "#f08a52", "#8cc458"]);
      for (let _0x5b2eb8 = 0; _0x5b2eb8 < 36; _0x5b2eb8++) {
        const _0x20d7b5 = Math.PI * 2 * _0x5b2eb8 / 36;
        const _0x3060e2 = _0x3d90fc(20, 46);
        _0x40d7fe.sparks.push({
          x: _0x3caa52,
          y: _0x42e692,
          vx: Math.cos(_0x20d7b5) * _0x3060e2,
          vy: Math.sin(_0x20d7b5) * _0x3060e2,
          t: _0x3d90fc(0.7, 1.3),
          col: _0x424b18
        });
      }
      for (let _0x2ac013 = 0; _0x2ac013 < 6; _0x2ac013++) {
        _0x40d7fe.sparks.push({
          x: _0x3d90fc(2, 30) + (Math.random() < 0.5 ? 0 : 146),
          y: _0x3d90fc(60, 140),
          vx: _0x3d90fc(-8, 8),
          vy: _0x3d90fc(-20, -5),
          t: _0x3d90fc(0.2, 0.4),
          col: "#dc5a36"
        });
      }
      if (Math.random() < 0.5) {
        _0x4d92fd.play("phao", 0.4);
      }
    }
    for (const _0x24d390 of _0x40d7fe.sparks) {
      _0x24d390.t -= _0x2682f3;
      _0x24d390.x += _0x24d390.vx * _0x2682f3;
      _0x24d390.y += _0x24d390.vy * _0x2682f3;
      _0x24d390.vy += _0x2682f3 * 30;
    }
    _0x40d7fe.sparks = _0x40d7fe.sparks.filter(_0x11a085 => _0x11a085.t > 0);
    for (const _0x3e9574 of _0x40d7fe.sparks) {
      _0xca5277.globalAlpha = Math.min(1, _0x3e9574.t * 2);
      _0xca5277.fillStyle = _0x3e9574.col;
      _0xca5277.fillRect(Math.round(_0x3e9574.x), Math.round(_0x3e9574.y), 2, 2);
      _0xca5277.globalAlpha *= 0.4;
      _0xca5277.fillRect(Math.round(_0x3e9574.x - _0x3e9574.vx * 0.05), Math.round(_0x3e9574.y - _0x3e9574.vy * 0.05), 1, 1);
    }
    _0xca5277.globalAlpha = 1;
  }
  function _0x42be1b(_0x2387d8 = _0xbf5ed7) {
    if (_0x2387d8.ch3 >= 1) {
      _0x4caaeb("bien_tiem", 38, 42);
      const _0x5a9b08 = Math.floor(_0x19e10f.t * 1.6) % 2;
      _0x6d5c39("lantern", _0x5a9b08, 36, 74, 10, 15);
      _0x6d5c39("lantern", 1 - _0x5a9b08, 134, 74, 10, 15);
      if (_0x2387d8.guard && (_0x19e10f.screen !== "market" || !_0x1d50a7.runs || !_0x1d50a7.runs.some(_0x27bb44 => _0x27bb44.who === "baove"))) {
        _0x6d5c39("char_baove", Math.floor(_0x19e10f.t * 0.7) % 6 === 0 ? 4 : 0, _0x43b065.x, _0x43b065.y, 24, 34);
      }
      return;
    }
    if (_0x2387d8.ch2 >= 1) {
      _0x4caaeb("sap", 34, 58);
    } else {
      _0x4caaeb("umbrella", 38, 70);
    }
    if (_0x2387d8.ch2 === 2) {
      _0x4caaeb("bien_sap", 59, 49);
    }
    if (_0x2387d8.ch2 >= 3) {
      _0x4caaeb("bien_tiem", 38, 42);
    }
    if (_0x2387d8.ch2 >= 2) {
      const _0x36d707 = Math.floor(_0x19e10f.t * 1.6) % 2;
      _0x6d5c39("lantern", _0x36d707, 36, 74, 10, 15);
      _0x6d5c39("lantern", 1 - _0x36d707, 134, 74, 10, 15);
    }
  }
  const _0x552068 = () => (_0xbf5ed7.ch5 || 0) >= 1 ? _0x107f09 : (_0xbf5ed7.ch4 || 0) >= 1 ? _0x7ddea4 : _0xbf5ed7.ch3 >= 1 ? _0x2b3cea : _0xbf5ed7.ch2 >= 3 ? _0x3c8c35 : 1;
  function _0x9670ee() {
    if (!_0xbf5ed7.flags.pm4 && ((_0xbf5ed7.ch4 || 0) >= 1 || (_0xbf5ed7.ch5 || 0) >= 1)) {
      _0xbf5ed7.flags.pm4 = 1;
      _0x3711c2(_0x552068() / _0x2b3cea);
    }
    if (!_0xbf5ed7.flags.pm5) {
      _0xbf5ed7.flags.pm5 = 1;
      for (const [_0x3785f8, _0x19103f] of [["khuc", 22000], ["thit", 25000], ["thapcam", 30000], ["lapxuong", 20000]]) {
        _0xbf5ed7.prices[_0x3785f8] &&= Math.max(_0xbf5ed7.prices[_0x3785f8], Math.min(_0x1ce869(_0x3785f8), Math.round(_0xbf5ed7.prices[_0x3785f8] * _0xaa20ba[_0x3785f8].suggest / _0x19103f / 1000) * 1000));
      }
    }
  }
  const _0x1ce869 = _0x287bc5 => Math.round(_0xaa20ba[_0x287bc5].suggest * _0x552068() / 1000) * 1000;
  function _0x3711c2(_0xe97f40) {
    for (const _0x2b0e2f in _0xbf5ed7.prices) {
      _0xbf5ed7.prices[_0x2b0e2f] = Math.max(1000, Math.round(_0xbf5ed7.prices[_0x2b0e2f] * _0xe97f40 / 1000) * 1000);
    }
  }
  function _0x449719() {
    if (_0xbf5ed7.ch3 >= 1) {
      return Math.round(_0x133b18.pho * _0x43eda1() / 100000) * 100000;
    } else if (_0xbf5ed7.ch2 >= 3) {
      return _0x133b18.tiem;
    } else if (_0xbf5ed7.ch2 >= 1) {
      return _0x133b18.sap;
    } else {
      return 0;
    }
  }
  function _0x1ad2f7() {
    if (_0xbf5ed7.ch3 >= 1) {
      return "mặt bằng";
    } else if (_0xbf5ed7.ch2 >= 3) {
      return "mặt bằng tiệm";
    } else {
      return "sạp";
    }
  }
  const _0x59a333 = () => _0x449719() + (_0xbf5ed7.guard ? _0x24b125 : 0) + (_0xbf5ed7.teo ? _0x49cc5f() : 0) + _0x29b1ea();
  const _0x11bdf8 = () => _0xbf5ed7.ch2 >= 1 ? 0 : _0x3a7308;
  function _0x8e45b7() {
    if (!_0x59a333()) {
      return [];
    }
    if (!_0xbf5ed7.rentDue) {
      _0xbf5ed7.rentDue = _0xbf5ed7.day + _0x468fd3;
      return [];
    }
    if (_0xbf5ed7.day < _0xbf5ed7.rentDue) {
      return [];
    }
    const _0x447b4c = _0x59a333();
    _0xbf5ed7.rentDue = Math.max(_0xbf5ed7.rentDue, _0xbf5ed7.day) + _0x468fd3;
    const _0x1e54ba = Math.max(0, Math.min(_0xbf5ed7.money, _0x447b4c));
    _0xbf5ed7.money -= _0x1e54ba;
    if (_0x447b4c > _0x1e54ba) {
      _0xbf5ed7.debt = (_0xbf5ed7.debt || 0) + _0x447b4c - _0x1e54ba;
    }
    _0xbf5ed7.today.rent = (_0xbf5ed7.today.rent || 0) + _0x447b4c;
    const _0x533c84 = [_0x449719() ? "tiền thuê " + _0x1ad2f7() + ": " + _0x9c212e(_0x449719()) : ""].concat(_0xbf5ed7.guard ? ["lương anh bảo vệ: " + _0x9c212e(_0x24b125)] : [], _0xbf5ed7.teo ? ["lương Cu Tèo: " + _0x9c212e(_0x49cc5f())] : []).filter(Boolean).join(", ");
    return [{
      who: _0x49a7c1().who,
      text: "Tháng mới rồi, trả " + _0x533c84 + (_0x29b1ea() ? ", " + _0xbf5ed7.br.length + " chi nhánh (thuê + lương quản lý): " + _0x9c212e(_0x29b1ea()) : "") + "." + (_0x447b4c > _0x1e54ba ? " Không đủ tiền, còn thiếu " + _0x9c212e(_0x447b4c - _0x1e54ba) + " đành ghi nợ." : "")
    }];
  }
  function _0x4e96c7() {
    if (_0xbf5ed7.ch2 < 3) {
      _0xbf5ed7.order = null;
      return;
    }
    if (_0xbf5ed7.order && _0xbf5ed7.order.day === _0xbf5ed7.day || (_0xbf5ed7.order = null, Math.random() >= (_0xbf5ed7.ch3 >= 1 ? 0.6 : 0.5))) {
      return;
    }
    const _0x583f30 = _0x31c8b2(_0xbf5ed7.unlocked);
    const _0x50948e = _0x5e168c * (_0xbf5ed7.ch3 >= 1 ? _0x3d3006(5, 10) : _0x3d3006(3, 6));
    const _0x3c1753 = Math.round(_0x50948e * _0x1ce869(_0x583f30) * 2.5 / 10000) * 10000;
    _0xbf5ed7.order = {
      x: _0x583f30,
      qty: _0x50948e,
      pay: _0x3c1753,
      day: _0xbf5ed7.day,
      who: _0x31c8b2(_0xbf5ed7.ch3 >= 1 ? _0x434527.pho : _0x434527.que),
      done: false
    };
  }
  function _0x37270e() {
    const _0x5bb73d = _0xbf5ed7.order;
    if (!_0x5bb73d || _0x5bb73d.day !== _0xbf5ed7.day) {
      return "";
    }
    if (_0x5bb73d.done) {
      return "<div class=\"order done\">" + _0x1525be("ico_medal", "ico") + "<div><b>Đã giao cỗ cho " + _0x1ff737(_0x5bb73d.who) + "</b><small>+" + _0x9c212e(_0x5bb73d.pay) + "</small></div></div>";
    }
    const _0x37cd0e = _0xbf5ed7.cooked[_0x5bb73d.x] || 0;
    return "<div class=\"order\">" + _0x1525be("xoi_" + _0x5bb73d.x, "ico xl") + "<div><b>Đơn đặt cỗ: " + _0x1ff737(_0x5bb73d.who) + "</b><small>" + _0x5bb73d.qty + " phần " + _0xaa20ba[_0x5bb73d.x].name.toLowerCase() + " · trả <b>" + _0x9c212e(_0x5bb73d.pay) + "</b> · đã có " + _0x37cd0e + "/" + _0x5bb73d.qty + "</small></div>\n    <button class=\"btn " + (_0x37cd0e >= _0x5bb73d.qty ? "red" : "grey") + " small\" id=\"bOrder\" " + (_0x37cd0e >= _0x5bb73d.qty ? "" : "disabled") + ">Giao cỗ</button></div>";
  }
  function _0x1405f3() {
    const _0xdf407e = _0xbf5ed7.order;
    if (!!_0xdf407e && !_0xdf407e.done && !((_0xbf5ed7.cooked[_0xdf407e.x] || 0) < _0xdf407e.qty)) {
      _0xbf5ed7.cooked[_0xdf407e.x] -= _0xdf407e.qty;
      _0xbf5ed7.money += _0xdf407e.pay;
      _0xdf407e.done = true;
      _0xbf5ed7.today.order = (_0xbf5ed7.today.order || 0) + _0xdf407e.pay;
      _0xbf5ed7.today.orderQty = (_0xbf5ed7.today.orderQty || 0) + _0xdf407e.qty;
      _0xbf5ed7.stats.served += _0xdf407e.qty;
      _0xbf5ed7.stats.dish[_0xdf407e.x] = (_0xbf5ed7.stats.dish[_0xdf407e.x] || 0) + _0xdf407e.qty;
      _0x4d92fd.play("coin");
      _0x991d3e("Giao cỗ xong! +" + _0x9c212e(_0xdf407e.pay), "good");
      _0x5f18ca();
      _0x690d06();
      _0x5b55cf();
    }
  }
  function _0x3ab845() {
    return _0xbf5ed7.chapter === 2 && _0xbf5ed7.ch2 >= 3 && _0xbf5ed7.ch3 < 1;
  }
  function _0x2d525e(_0xd79deb) {
    if (!!_0x3ab845() && !(_0xbf5ed7.money < _0x1f9ed0) && !((_0xbf5ed7.debt || 0) > 0)) {
      _0xbf5ed7.money -= _0x179d7d;
      _0xbf5ed7.ch3 = 1;
      _0xbf5ed7.chapter = 3;
      _0xbf5ed7.flags.phoDay = _0xbf5ed7.day;
      _0x463590.ev("level_up", {
        level: 3,
        character: "ba_tam"
      });
      _0xbf5ed7.rentDue = _0xbf5ed7.day + _0x468fd3;
      _0x3711c2(_0x2b3cea / _0x3c8c35);
      _0x4d92fd.play("phao");
      _0x690d06();
      _0x58a015("story", {
        lines: _0x4c4214,
        next: () => {
          _0x58a015(_0xd79deb || "kitchen");
          setTimeout(_0x5b55cf, 600);
        }
      });
    }
  }
  function _0x3a2b74(_0x14d869) {
    _0x57f03a(_0x1525be("ico_warn") + " Bỏ phố về quê?", "<p>Bà cháu dọn tiệm về quê, bán ở tiệm cũ trong làng.</p>\n    <div class=\"kv\"><span>Tiền lên phố " + _0x2da126(_0x179d7d) + "</span><b class=\"neg\">không hoàn lại</b></div>\n    <div class=\"kv\"><span>Anh bảo vệ</span><b>cho nghỉ</b></div>\n    <div class=\"kv\"><span>Giá bán</span><b>về giá quê</b></div>\n    <div class=\"kv\"><span>Uy tín</span><b class=\"neg\">−" + String(_0x49ae3a).replace(".", ",") + " sao</b></div>\n    <p class=\"muted\">Giữ nguyên tiền mặt, món đã học, nâng cấp, Tí, Cu Tèo, danh hiệu. Tiền thuê còn 3 triệu/tháng, không còn thuế, trộm. Muốn lên phố lại cần đủ " + _0x2da126(_0x1f9ed0) + " và trả lại " + _0x2da126(_0x179d7d) + ".</p>", [{
      label: "Ở lại phố",
      cls: "green"
    }, {
      label: "Về quê",
      cls: "red",
      fn: () => {
        _0xbf5ed7.ch3 = 0;
        _0xbf5ed7.chapter = 2;
        _0xbf5ed7.guard = false;
        _0xbf5ed7.flags.veQue = 1;
        _0x3711c2(_0x3c8c35 / _0x2b3cea);
        _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep - _0x49ae3a, 0, 5);
        _0x463590.ev("ve_que", {
          day: _0xbf5ed7.day
        });
        _0x4d92fd.play("gong");
        _0x690d06();
        _0x58a015("story", {
          lines: _0x1046f1,
          next: () => {
            _0x58a015(_0x14d869 || "kitchen");
            setTimeout(_0x5b55cf, 600);
          }
        });
      }
    }], "paper warn");
  }
  function _0x20c189(_0x1639d4) {
    const _0x107e22 = Math.min(Math.round(_0x1639d4 / 1000) * 1000, Math.round(_0x24b125 * _0x1fa15f / 1000) * 1000);
    if (_0x107e22 <= 0) {
      return [];
    } else {
      _0xbf5ed7.flags.gdComp = Math.round(_0x107e22 / 1000);
      return [{
        bg: "citynight",
        who: "baove",
        text: (_0xe9a99e() ? _0x1ea1a7 : _0x23ee1e).replace("{tien}", _0x9c212e(_0x107e22))
      }];
    }
  }
  function _0x25709e(_0x6b2043) {
    const _0xbde74a = (_0xbf5ed7.flags.gdComp || 0) * 1000;
    if (!_0xbde74a || !_0xbf5ed7.guard) {
      _0xbf5ed7.flags.gdComp = 0;
      return _0x6b2043();
    }
    const _0x3516fe = _0x1f615a => _0x1f615a.map(_0x221198 => Object.assign({}, _0x221198, {
      text: _0x221198.text.replace("{tien}", _0x9c212e(_0xbde74a)),
      ti: _0x221198.ti && _0x221198.ti.replace("{tien}", _0x9c212e(_0xbde74a))
    }));
    _0x57f03a(_0x1525be("port_baove") + " Anh bảo vệ xin đền bù", "<p>Đêm qua anh bảo vệ bỏ trực nên trộm vào. Anh ấy xin trừ lương <b>" + _0x9c212e(_0xbde74a) + "</b> (nửa tháng lương).</p>\n    <div class=\"kv\"><span>Nhận đền bù</span><b class=\"pos\">+" + _0x9c212e(_0xbde74a) + "</b></div>\n    <div class=\"kv\"><span>Bỏ qua cho anh ấy</span><b class=\"pos\">uy tín +" + String(_0x4fdd42).replace(".", ",") + " sao</b></div>", [{
      label: "Nhận đền bù",
      cls: "gold",
      fn: () => {
        _0xbf5ed7.flags.gdComp = 0;
        _0xbf5ed7.money += _0xbde74a;
        _0xbf5ed7.today.gdPay = (_0xbf5ed7.today.gdPay || 0) + _0xbde74a;
        if (_0x257142) {
          _0x257142();
        }
        _0x690d06();
        _0x39c0d1(_0x3516fe(_0x580d37), _0x6b2043);
      }
    }, {
      label: "Bỏ qua",
      cls: "green",
      fn: () => {
        _0xbf5ed7.flags.gdComp = 0;
        _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep + _0x4fdd42, 0, 5);
        _0xbf5ed7.stats.forgive = (_0xbf5ed7.stats.forgive || 0) + 1;
        _0x690d06();
        _0x39c0d1(_0x168609, () => {
          _0x5b55cf();
          _0x6b2043();
        });
      }
    }], "paper");
  }
  function _0xde0b62() {
    if (_0xbf5ed7.ch3 < 1 || _0xbf5ed7.day < (_0xbf5ed7.flags.phoDay || 0) + _0x598f8c || Math.random() >= _0xcc068e) {
      return null;
    }
    if (_0xbf5ed7.guard) {
      const _0x55204d = Math.random();
      if (_0x55204d < _0x1dec42) {
        const _0x16b9db = _0x31c8b2(_0x33c57d);
        const _0x515d9e = Math.round(Math.max(0, _0xbf5ed7.money) * _0x3d90fc(0.1, 0.25) / 1000) * 1000;
        if (_0x515d9e <= 0) {
          return null;
        }
        _0xbf5ed7.money -= _0x515d9e;
        _0x50fdf2(_0x515d9e, {});
        const _0x123328 = [_0x35c3fb[0], {
          bg: "citynight",
          who: null,
          text: "Đêm qua " + _0x16b9db.why + ", tiệm không ai trông. Kẻ trộm cạy cửa lấy mất " + _0x9c212e(_0x515d9e) + "."
        }, {
          bg: "citynight",
          who: "baove",
          text: _0xe9a99e() ? _0x16b9db.sayTi : _0x16b9db.say
        }, {
          bg: "citynight",
          who: _0x49a7c1().who,
          text: _0x31c8b2(_0xe9a99e() ? _0x19c94f : _0x927f7e)
        }];
        if (_0x16b9db.ask) {
          return _0x123328;
        } else {
          return _0x123328.concat(_0x20c189(_0x515d9e));
        }
      }
      if (_0x55204d >= _0x1dec42 + _0x37ac9b) {
        _0xbf5ed7.stats.thiefCaught = (_0xbf5ed7.stats.thiefCaught || 0) + 1;
        return _0x5b8daf;
      }
      const _0x1e96d5 = Math.round(Math.max(0, _0xbf5ed7.money) * _0x3d90fc(0.3, 0.6) / 1000) * 1000;
      if (_0x1e96d5 <= 0) {
        return null;
      } else {
        _0xbf5ed7.money -= _0x1e96d5;
        _0x50fdf2(_0x1e96d5, {});
        return [_0x35c3fb[0], {
          bg: "citynight",
          who: null,
          text: "Nhân lúc anh bảo vệ ngủ say, kẻ trộm đã lấy mất " + _0x9c212e(_0x1e96d5) + " trong két tiền của tiệm."
        }].concat(_0x2e3dc2, _0x20c189(_0x1e96d5));
      }
    }
    const _0x3b6173 = _0xbf5ed7.ledger[_0xbf5ed7.ledger.length - 1];
    const _0x426a97 = _0x3b6173 && _0x3b6173.day === _0xbf5ed7.day - 1 ? Math.max(0, _0x3b6173.cash ?? (_0x3b6173.revenue || 0) + (_0x3b6173.tips || 0)) : 0;
    const _0x11dfc9 = Math.round(Math.min(Math.max(0, _0xbf5ed7.money), _0x426a97) / 1000) * 1000;
    const _0x5621af = Object.keys(_0xbf5ed7.upg).filter(_0x171c0d => _0x171c0d !== "ti" && _0x171c0d !== "teo" && _0xbf5ed7.upg[_0x171c0d] > 0);
    if (_0x11dfc9 <= 0 && !_0x5621af.length) {
      return null;
    }
    _0xbf5ed7.money -= _0x11dfc9;
    const _0x495e56 = {};
    for (const _0x3664ae of _0x5621af) {
      _0x495e56[_0x3664ae] = _0xbf5ed7.upg[_0x3664ae];
      delete _0xbf5ed7.upg[_0x3664ae];
    }
    _0x50fdf2(_0x11dfc9, _0x495e56);
    const _0x20ce8c = _0x5621af.map(_0x539460 => _0x2be998[_0x539460].name.toLowerCase()).join(", ");
    return _0x35c3fb.slice(0, 1).concat([{
      bg: "citynight",
      who: null,
      text: "Kẻ trộm đã cuỗm " + (_0x11dfc9 ? "hết " + _0x9c212e(_0x11dfc9) + " tiền bán hôm qua" : "sạch két") + (_0x5621af.length ? " và khuân đi toàn bộ đồ đạc: " + _0x20ce8c : "") + "."
    }], _0x35c3fb.slice(1));
  }
  function _0x50fdf2(_0x3e4f25, _0xa5497b) {
    _0xbf5ed7.rob = {
      day: _0xbf5ed7.day,
      amt: Math.max(0, Math.round(_0x3e4f25)),
      upg: Object.assign({}, _0xa5497b)
    };
  }
  function _0x52065c() {
    const _0x3a9457 = _0xbf5ed7.rob;
    if (!_0x3a9457 || _0xbf5ed7.day < _0x3a9457.day + _0x181e6a) {
      return null;
    }
    _0xbf5ed7.rob = null;
    const _0x9315ca = Math.random();
    const _0xbd937 = Object.keys(_0x3a9457.upg || {}).filter(_0x121702 => _0x2be998[_0x121702]);
    const _0x18f235 = _0x9315ca < _0x477406 + _0x2069fa;
    if (_0x9315ca < _0x477406 || _0x18f235 && _0x3a9457.amt <= 0) {
      _0xbf5ed7.money += _0x3a9457.amt;
      _0xbf5ed7.today.recover = (_0xbf5ed7.today.recover || 0) + _0x3a9457.amt;
      for (const _0x330996 of _0xbd937) {
        _0xbf5ed7.upg[_0x330996] = Math.max(_0x592c27(_0x330996), _0x3a9457.upg[_0x330996]);
      }
      _0xbf5ed7.stats.copWin = (_0xbf5ed7.stats.copWin || 0) + 1;
      _0x463590.ev("police", {
        res: "full"
      });
      const _0x2444f7 = _0xbd937.length ? " cùng " + _0xbd937.map(_0x33dc94 => _0x2be998[_0x33dc94].name.toLowerCase()).join(", ") : "";
      return _0x1e9a06.full.map(_0x2131d5 => Object.assign({}, _0x2131d5, {
        text: _0x2131d5.text.replace("{tien}", _0x9c212e(_0x3a9457.amt)).replace("{do}", _0x2444f7)
      }));
    }
    if (_0x18f235) {
      const _0x431b44 = Math.max(1000, Math.round(_0x3a9457.amt * _0x3d90fc(_0x44062d, _0x2ae5e2) / 1000) * 1000);
      _0xbf5ed7.money += _0x431b44;
      _0xbf5ed7.today.recover = (_0xbf5ed7.today.recover || 0) + _0x431b44;
      _0xbf5ed7.stats.copWin = (_0xbf5ed7.stats.copWin || 0) + 1;
      _0x463590.ev("police", {
        res: "part"
      });
      return _0x1e9a06.part.map(_0x144f5d => Object.assign({}, _0x144f5d, {
        text: _0x144f5d.text.replace("{tien}", _0x9c212e(_0x431b44))
      }));
    }
    _0x463590.ev("police", {
      res: "fail"
    });
    return _0x1e9a06.fail;
  }
  function _0x3e9058(_0x501936) {
    if (_0xbf5ed7.guard) {
      _0x57f03a("Cho bảo vệ nghỉ?", "<p>Không có người trông, ban đêm kẻ trộm có thể lấy hết tiền bán trong ngày và khuân đi toàn bộ đồ đạc đã nâng cấp.</p>", [{
        label: "Giữ lại",
        cls: "green",
        fn: _0x501936
      }, {
        label: "Cho nghỉ",
        cls: "red",
        fn: () => {
          _0xbf5ed7.guard = false;
          _0x690d06();
          if (_0x501936) {
            _0x501936();
          }
        }
      }], "paper");
      return;
    }
    if (_0xbf5ed7.money < _0x24b125) {
      _0x4d92fd.play("wrong");
      _0x991d3e("Chưa đủ tiền trả tháng lương đầu!", "bad");
      return;
    }
    _0xbf5ed7.money -= _0x24b125;
    _0xbf5ed7.guard = true;
    _0xbf5ed7.today.rent = (_0xbf5ed7.today.rent || 0) + _0x24b125;
    _0x4d92fd.play("buy");
    _0x991d3e("Đã thuê bảo vệ. Lương " + _0x9c212e(_0x24b125) + "/tháng, trả cùng tiền thuê.", "good");
    _0x5f18ca();
    _0x690d06();
    if (_0x501936) {
      _0x501936();
    }
  }
  function _0x25b279(_0x2d53c4) {
    if (_0xbf5ed7.teo) {
      _0x57f03a("Cho Cu Tèo nghỉ?", "<p>Không có Tèo, phải tự gói xôi và tự chạy đi rượt khách quỵt.</p>", [{
        label: "Giữ lại",
        cls: "green",
        fn: _0x2d53c4
      }, {
        label: "Cho nghỉ",
        cls: "red",
        fn: () => {
          _0xbf5ed7.teo = false;
          _0x690d06();
          if (_0x2d53c4) {
            _0x2d53c4();
          }
        }
      }], "paper");
      return;
    }
    if (_0xbf5ed7.money < _0x49cc5f()) {
      _0x4d92fd.play("wrong");
      _0x991d3e("Chưa đủ tiền trả tháng lương đầu!", "bad");
      return;
    }
    _0xbf5ed7.money -= _0x49cc5f();
    _0xbf5ed7.teo = true;
    _0xbf5ed7.today.rent = (_0xbf5ed7.today.rent || 0) + _0x49cc5f();
    _0xbf5ed7.rentDue ||= _0xbf5ed7.day + _0x468fd3;
    _0x4d92fd.play("buy");
    _0x5f18ca();
    _0x690d06();
    const _0x297fa6 = () => {
      _0x991d3e("Đã thuê Cu Tèo. Lương " + _0x9c212e(_0x49cc5f()) + "/tháng, trả cùng tiền thuê.", "good");
      if (_0x2d53c4) {
        _0x2d53c4();
      }
    };
    if (_0xbf5ed7.flags.teoMet) {
      return _0x297fa6();
    }
    _0xbf5ed7.flags.teoMet = 1;
    _0x543cdd();
    _0x39c0d1(_0xe9a99e() ? _0xf70ee7 : _0x1906fc, _0x297fa6);
  }
  function _0x725d95(_0x236f9b) {
    if (!!_0x236f9b && !_0xbf5ed7.taxReg) {
      _0xbf5ed7.taxReg = true;
      _0xbf5ed7.flags.taxNext = _0xbf5ed7.day + _0x3b8ca4;
      _0x690d06();
      _0x4d92fd.play("happy");
      _0x991d3e("Đã đăng ký mã số thuế. Cứ " + _0x3b8ca4 + " ngày tiệm nộp " + Math.round(_0x46406f * 100) + "% doanh thu.", "good");
      _0x5b55cf();
    }
  }
  const _0x414947 = {
    x: ["101", "010", "101"],
    1: ["010", "110", "010", "010", "111"],
    2: ["111", "001", "111", "100", "111"],
    3: ["111", "001", "111", "001", "111"],
    4: ["101", "101", "111", "001", "001"],
    5: ["111", "100", "111", "001", "111"]
  };
  function _0x3cbf67(_0x4fab8a, _0x99506e, _0x3e6cf8) {
    const _0x17ae30 = [_0x414947.x, _0x414947[Math.min(5, _0x4fab8a)]];
    _0xca5277.fillStyle = "#b23a2c";
    _0xca5277.fillRect(_0x99506e - 1, _0x3e6cf8 - 1, 9, 7);
    let _0x38b591 = _0x99506e;
    _0x17ae30.forEach((_0x1c6a39, _0x1a68ab) => {
      const _0x226124 = _0x1a68ab === 0 ? 2 : 0;
      _0x1c6a39.forEach((_0x4428a7, _0x470c5b) => {
        for (let _0x4d9972 = 0; _0x4d9972 < 3; _0x4d9972++) {
          if (_0x4428a7[_0x4d9972] === "1") {
            _0xca5277.fillStyle = "#fff8ea";
            _0xca5277.fillRect(_0x38b591 + _0x4d9972, _0x3e6cf8 + _0x470c5b + _0x226124, 1, 1);
          }
        }
      });
      _0x38b591 += 4;
    });
  }
  function _0x4c0cb4() {
    return !!_0xbf5ed7 && _0xbf5ed7.ch3 >= 1 && _0xbf5ed7.rep < _0x155417 && _0xbf5ed7.flags.donDay !== _0xbf5ed7.day && (!_0xe9a99e() || !!_0xbf5ed7.flags.c5Home);
  }
  function _0x161ada(_0xbdf1af) {
    _0xbf5ed7.flags.donDay = _0xbf5ed7.day;
    _0xbf5ed7.flags.donHong = _0x31c8b2(_0x31bf44);
    _0x690d06();
    const _0x5a514b = _0xbf5ed7.flags.donHong;
    const _0xc6e58e = (_0x5a514b + _0x38f5ee) * 1000000;
    _0x39c0d1(_0x3f2fe4(_0x5a514b), () => {
      _0x57f03a(_0x1525be("port_ti") + " Quyên góp chùa Hà", "<p>Bà Hồng hàng xóm góp <b>" + _0x5a514b + " triệu</b>. Bà Tám góp <b>" + _0x9c212e(_0xc6e58e) + "</b> để hơn bà Hồng, uy tín của tiệm tăng thêm <b>" + _0x593c43 + " sao</b>.</p>\n      <p class=\"muted\">Tiền mặt: <b>" + _0x9c212e(_0xbf5ed7.money) + "</b></p>", [{
        label: "Đóng",
        cls: "grey",
        fn: _0xbdf1af
      }, {
        label: "Ủng hộ " + (_0x5a514b + _0x38f5ee) + " triệu",
        cls: _0xbf5ed7.money >= _0xc6e58e ? "gold" : "grey",
        fn: () => {
          if (_0xbf5ed7.money < _0xc6e58e) {
            _0x4d92fd.play("wrong");
            _0x991d3e("Chưa đủ tiền ủng hộ, bà ạ!", "bad");
            if (_0xbdf1af) {
              _0xbdf1af();
            }
            return;
          }
          _0xbf5ed7.money -= _0xc6e58e;
          _0xbf5ed7.today.donate = (_0xbf5ed7.today.donate || 0) + _0xc6e58e;
          _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep + _0x593c43, 0, 5);
          _0x463590.ev("donate", {
            amt: _0x5a514b + _0x38f5ee,
            day: _0xbf5ed7.day
          });
          _0x4d92fd.play("happy");
          _0x690d06();
          _0x991d3e("Đã công đức chùa Hà " + _0x9c212e(_0xc6e58e) + ". Uy tín +" + _0x593c43 + " sao!", "good");
          if (_0xbdf1af) {
            _0xbdf1af();
          }
        }
      }], "paper");
    });
  }
  const _0x121d51 = () => _0xbf5ed7 && (_0xbf5ed7.ch4 || 0) >= 1;
  const _0x14aaa7 = () => !!_0xbf5ed7 && (_0xbf5ed7.ch5 || 0) >= 1;
  const _0xe9a99e = () => !!_0xbf5ed7 && (_0x14aaa7() || !!_0xbf5ed7.flags && !!_0xbf5ed7.flags.tiHeir);
  const _0x49a7c1 = () => _0xe9a99e() ? {
    who: "ti",
    name: "Cái Tí"
  } : {
    who: "batam",
    name: "Bà Tám"
  };
  const _0x1268f8 = () => (_0xbf5ed7.ch5 || 0) >= 1 ? 5 : _0x121d51() ? 4 : _0xbf5ed7.ch3 >= 1 ? 3 : _0xbf5ed7.chapter >= 2 ? 2 : 1;
  const _0x1a2db1 = _0x1bde7f => !_0x1bde7f.ch || _0x1268f8() >= _0x1bde7f.ch;
  function _0x937290() {
    return _0xbf5ed7.ch3 >= 1 && !_0x121d51();
  }
  function _0x275008() {
    const _0x1d8d3e = [];
    if (_0xbf5ed7.money < _0xdd3ac3) {
      _0x1d8d3e.push("có " + _0x2da126(_0xdd3ac3) + " trong tiệm");
    }
    if (_0xbf5ed7.rep < _0x254350) {
      _0x1d8d3e.push("uy tín từ " + String(_0x254350).replace(".", ",") + " sao");
    }
    if (!_0xbf5ed7.taxReg) {
      _0x1d8d3e.push("đăng ký mã số thuế");
    }
    if ((_0xbf5ed7.debt || 0) > 0) {
      _0x1d8d3e.push("trả hết nợ");
    }
    return _0x1d8d3e;
  }
  function _0x5c5c69(_0x138abe) {
    if (!!_0x937290() && !_0x275008().length) {
      _0xbf5ed7.money -= _0x2e28d0;
      _0xbf5ed7.ch4 = 1;
      _0xbf5ed7.chapter = 4;
      _0xbf5ed7.flags.thDay = _0xbf5ed7.day;
      _0xbf5ed7.flags.pm4 = 1;
      _0x3711c2((_0xbf5ed7.flags.tiHeir ? _0x107f09 : _0x7ddea4) / _0x2b3cea);
      _0xbf5ed7.app = _0xbf5ed7.app || 4.5;
      _0xbf5ed7.br = _0xbf5ed7.br || [];
      if (_0xbf5ed7.flags.tiHeir) {
        if (_0xbf5ed7.unlocked.includes("ngusac")) {
          _0xbf5ed7.ch4 = 2;
        }
        _0xbf5ed7.ch5 = 1;
        _0xbf5ed7.chapter = 5;
        _0x463590.ev("level_up", {
          level: 5,
          character: "ti",
          rebuild: 1
        });
        _0x4d92fd.play("phao");
        _0x690d06();
        return _0x58a015("story", {
          lines: _0xca9268,
          next: () => {
            _0x58a015(_0x138abe || "kitchen");
            setTimeout(_0x5b55cf, 600);
          }
        });
      }
      _0x463590.ev("level_up", {
        level: 4,
        character: "ba_tam"
      });
      _0x4d92fd.play("phao");
      _0x690d06();
      _0x58a015("story", {
        lines: _0x4a8910,
        next: () => {
          _0x58a015(_0x138abe || "kitchen");
          setTimeout(_0x5b55cf, 600);
        }
      });
    }
  }
  const _0x17ace1 = () => _0x121d51() && (_0xbf5ed7.ch4 || 0) < 2 && _0xbf5ed7.br.length >= 3 && _0xbf5ed7.money >= _0x4d6973;
  function _0x44e2e7(_0x272f90) {
    if (_0x17ace1()) {
      _0xbf5ed7.ch4 = 2;
      _0x463590.ev("secret_recipe");
      if (!_0xbf5ed7.unlocked.includes("ngusac")) {
        _0xbf5ed7.unlocked.push("ngusac");
      }
      _0xbf5ed7.prices.ngusac = _0x1ce869("ngusac");
      _0x4d92fd.play("win");
      _0x690d06();
      _0x58a015("story", {
        lines: _0x59b5e9,
        next: () => {
          _0x58a015(_0x272f90 || "kitchen");
          setTimeout(_0x5b55cf, 600);
        }
      });
    }
  }
  function _0x4c1d60() {
    const _0x45edd8 = (_0x5d4db2, _0x486ac6, _0x181637) => "<span class=\"goal\">" + _0x1525be("ico_branch", "ico") + _0x181637 + ": <b>" + _0x2da126(Math.max(0, _0x5d4db2)) + "/" + _0x2da126(_0x486ac6) + "</b></span>";
    if (_0x121d51()) {
      if (_0xbf5ed7.br.length < 3) {
        return "<span class=\"goal\">" + _0x1525be("ico_branch", "ico") + "Chi nhánh: <b>" + _0xbf5ed7.br.length + "/3</b></span>";
      } else if (_0xbf5ed7.ch4 < 2) {
        return _0x45edd8(_0xbf5ed7.money, _0x4d6973, "Bí truyền");
      } else if (_0x14aaa7()) {
        return "<span class=\"goal done\">" + _0x1525be("ico_branch", "ico") + "<b>Tí nối nghiệp · bán tự do</b></span>";
      } else {
        return _0x45edd8(_0xbf5ed7.money, _0x3c2496, "Mốc tiếp");
      }
    } else {
      return _0x45edd8(_0xbf5ed7.money, _0xdd3ac3, "Thương hiệu");
    }
  }
  function _0x2ed12c() {
    const _0x4ac8ec = _0x121d51();
    const _0x39284b = _0x4ac8ec ? _0xbf5ed7.br.length : 0;
    const _0x35d306 = (_0x427956, _0x427856, _0x18fcc6) => "<li class=\"" + _0x427956 + "\">" + _0x1525be(_0x427956 === "on" ? "ico_medal" : _0x427956 === "cur" ? "ico_branch" : "ico_lock", "ico") + "<div><b>" + _0x427856 + "</b><small>" + _0x18fcc6 + "</small></div></li>";
    return _0x35d306(_0x4ac8ec ? "on" : _0xbf5ed7.ch3 >= 1 ? "cur" : "", "Chương 4: Lập thương hiệu", "Cần " + _0x2da126(_0xdd3ac3) + ", uy tín " + String(_0x254350).replace(".", ",") + " sao, đã đăng ký thuế. Chi phí " + _0x2da126(_0x2e28d0) + ". Mở bán qua app, học món xôi phố.") + _0x35d306(_0x39284b >= 3 ? "on" : _0x4ac8ec ? "cur" : "", "Mở 3 chi nhánh (" + _0x39284b + "/3)", "Mỗi chi nhánh có quản lý riêng, mỗi tối gửi báo cáo doanh thu.") + _0x35d306((_0xbf5ed7.ch4 || 0) >= 2 ? "on" : _0x39284b >= 3 ? "cur" : "", "Công thức bí truyền", "Đủ 3 chi nhánh và có " + _0x2da126(_0x4d6973) + ": bà Tám truyền món xôi ngũ sắc.") + _0x35d306(_0x14aaa7() ? "on" : _0x4ac8ec ? "cur" : "", "Chương 5: Tí nối nghiệp", _0x14aaa7() ? "Tí thay bà trông tiệm. Bán hàng tự do." : "Khi trong tiệm có " + _0x2da126(_0x3c2496) + "… một biến cố sẽ xảy đến với Tiệm Xôi Bà Tám.");
  }
  const _0x29b1ea = () => _0x121d51() ? _0xbf5ed7.br.reduce((_0x490d17, _0x5bc045) => _0x490d17 + _0xf9db55 + _0x3e99cb[_0x5bc045.m].salary, 0) : 0;
  function _0x36b1b9() {
    if (!_0x121d51() || !_0xbf5ed7.br.length) {
      return [];
    }
    const _0x593e01 = 0.55 + _0xbf5ed7.rep * 0.1;
    const _0x54a7dd = _0xbf5ed7.rv4 ? _0xbf5ed7.rv4.strat === "giam" ? 0.95 : 0.8 : 1;
    const _0x4f31f4 = _0xbf5ed7.flags.viral === _0xbf5ed7.day ? 1.3 : _0xbf5ed7.flags.phot === _0xbf5ed7.day ? 0.75 : 1;
    return _0xbf5ed7.br.map(_0x51d532 => {
      const _0xbe6f4c = _0x3e99cb[_0x51d532.m];
      let _0x46b4a2 = Math.round(_0xbe6f4c.base * _0x3d90fc(0.8, 1.2) * _0x593e01 * _0x54a7dd * _0x4f31f4 / 10000) * 10000;
      let _0x37aa65 = 0;
      if (_0xbe6f4c.skim && Math.random() < _0xbe6f4c.skim) {
        _0x37aa65 = Math.round(_0x46b4a2 * _0x3d90fc(0.3, 0.6) / 10000) * 10000;
        _0x46b4a2 -= _0x37aa65;
      }
      _0x51d532.last = _0x46b4a2;
      _0x51d532.tot = (_0x51d532.tot || 0) + _0x46b4a2;
      return {
        name: _0x5b001b[_0x51d532.n],
        who: _0x3e99cb[_0x51d532.m].who[_0x51d532.n],
        m: _0x51d532.m,
        rev: _0x46b4a2,
        skim: _0x37aa65
      };
    });
  }
  function _0x5aff98(_0x2d275f) {
    const _0x23e6bb = _0xbf5ed7.br.map((_0x15a20b, _0x38b234) => "<div class=\"urow\">" + _0x1525be("ico_branch", "ico xl") + "<div class=\"ut\"><b>" + _0x5b001b[_0x15a20b.n] + "</b>\n      <small>Quản lý: " + _0x3e99cb[_0x15a20b.m].who[_0x15a20b.n] + " (" + _0x3e99cb[_0x15a20b.m].name + ") · lương " + _0x2da126(_0x3e99cb[_0x15a20b.m].salary) + "/tháng" + (_0x15a20b.last != null ? " · hôm qua " + _0x2da126(_0x15a20b.last) : "") + "</small></div>\n      <button class=\"btn gold small bswap\" data-i=\"" + _0x38b234 + "\">Đổi người</button></div>").join("");
    const _0x1d44d8 = _0xbf5ed7.br.length < 3 ? _0x16a19e[_0xbf5ed7.br.length] : 0;
    const _0x1ce2c0 = _0x1d44d8 ? "<div class=\"sub\">Mở chi nhánh " + _0x5b001b[_0xbf5ed7.br.length] + " · " + _0x2da126(_0x1d44d8) + "</div>\n      <p class=\"muted\">Thuê mặt bằng " + _0x2da126(_0xf9db55) + "/tháng. Chọn người quản lý:</p>\n      " + ["that", "lanh"].map(_0x13974b => "<div class=\"urow\">" + _0x1525be(_0x13974b === "that" ? "port_codao" : "port_congchuc", "ico xl") + "<div class=\"ut\"><b>" + _0x3e99cb[_0x13974b].who[_0xbf5ed7.br.length] + " · " + _0x3e99cb[_0x13974b].name + "</b><small>" + _0x3e99cb[_0x13974b].desc + " Lương " + _0x2da126(_0x3e99cb[_0x13974b].salary) + "/tháng.</small></div>\n        <button class=\"btn " + (_0xbf5ed7.money >= _0x1d44d8 ? "green" : "grey") + " small bopen\" data-m=\"" + _0x13974b + "\">Mở</button></div>").join("") : "<p class=\"muted\">Đã đủ 3 chi nhánh.</p>";
    _0x57f03a(_0x1525be("ico_branch") + " Chi nhánh Xôi Bà Tám", "<div class=\"ulist\">" + (_0x23e6bb || "<p class=\"muted\">Chưa có chi nhánh nào.</p>") + "</div>" + _0x1ce2c0 + "\n    <p class=\"muted\">Tiền mặt: <b>" + _0x9c212e(_0xbf5ed7.money) + "</b>. Tiền thuê và lương trả cùng kỳ thuê tiệm.</p>", [{
      label: "Đóng",
      cls: "grey",
      fn: _0x2d275f
    }], "paper");
    _0x517a28.querySelectorAll(".bopen").forEach(_0x2e58c7 => _0x2e58c7.onclick = () => {
      const _0x3a30ce = _0x16a19e[_0xbf5ed7.br.length];
      if (_0x3a30ce) {
        if (_0xbf5ed7.money < _0x3a30ce) {
          _0x4d92fd.play("wrong");
          return _0x991d3e("Chưa đủ tiền mở chi nhánh!", "bad");
        }
        _0xbf5ed7.money -= _0x3a30ce;
        _0xbf5ed7.br.push({
          n: _0xbf5ed7.br.length,
          m: _0x2e58c7.dataset.m,
          d: _0xbf5ed7.day,
          tot: 0,
          last: null
        });
        _0x4d92fd.play("phao");
        _0x991d3e("Khai trương chi nhánh " + _0x5b001b[_0xbf5ed7.br.length - 1] + "!", "good");
        _0x5f18ca();
        _0x690d06();
        _0x5b55cf();
        _0x5aff98(_0x2d275f);
      }
    });
    _0x517a28.querySelectorAll(".bswap").forEach(_0xc1cb5d => _0xc1cb5d.onclick = () => {
      const _0x48a497 = _0xbf5ed7.br[+_0xc1cb5d.dataset.i];
      if (!_0x48a497) {
        return;
      }
      if (_0xbf5ed7.money < _0x523be7) {
        _0x4d92fd.play("wrong");
        return _0x991d3e("Không đủ tiền tuyển người mới!", "bad");
      }
      const _0xdcc3c2 = _0x48a497.m === "that" ? "lanh" : "that";
      _0xbf5ed7.money -= _0x523be7;
      _0x48a497.m = _0xdcc3c2;
      _0x4d92fd.play("buy");
      _0x991d3e(_0x5b001b[_0x48a497.n] + ": đổi sang " + _0x3e99cb[_0xdcc3c2].who[_0x48a497.n] + " (" + _0x3e99cb[_0xdcc3c2].name + "), phí tuyển " + _0x2da126(_0x523be7), "good");
      _0x5f18ca();
      _0x690d06();
      _0x5aff98(_0x2d275f);
    });
  }
  const _0x3860b4 = () => _0x5ab951(0.12 + ((_0xbf5ed7.app || 4.5) - 3.5) * 0.06, 0.06, 0.24);
  function _0x2dd9d3() {
    if (!_0x121d51()) {
      return null;
    }
    const _0x153fb9 = Math.random();
    if (_0x153fb9 < _0x3860b4() && !_0x292cac("bao")) {
      return "ship";
    } else if (_0x153fb9 < _0x3860b4() + 0.22) {
      return "vanphong";
    } else {
      return null;
    }
  }
  function _0x150a1f(_0x18dad1) {
    if (_0x18dad1 === "ship") {
      return _0x3d3006(1, 3);
    } else if (_0x18dad1 === "kol") {
      return 1;
    } else {
      return null;
    }
  }
  function _0xda2f80(_0x2dd47f) {
    if (!_0x121d51() || !_0xaa20ba[_0x2dd47f].ch) {
      return 0;
    } else {
      return 1 + (_0xbf5ed7.rv4 && _0xbf5ed7.rv4.strat === "dacbiet" ? 3 : 0);
    }
  }
  function _0x1848c5() {
    if (!_0x121d51()) {
      return 1;
    }
    let _0x3d6ee8 = 1.1;
    if (_0xbf5ed7.flags.viral === _0xbf5ed7.day) {
      _0x3d6ee8 *= 1.5;
    }
    if (_0xbf5ed7.flags.phot === _0xbf5ed7.day) {
      _0x3d6ee8 *= 0.7;
    }
    if (_0xbf5ed7.rv4) {
      _0x3d6ee8 *= _0xbf5ed7.rv4.strat === "giam" ? 1 : _0xbf5ed7.rv4.strat === "dacbiet" ? 0.9 : 0.72;
    }
    return _0x3d6ee8;
  }
  function _0x434691(_0xedb8cf, _0x3aa12f, _0x730bca) {
    if (_0xedb8cf.type === "ship") {
      if (_0x3aa12f && _0x292cac("bom") && Math.random() < 0.35) {
        const _0x35d1b7 = _0xedb8cf.lastPrice || 0;
        _0xbf5ed7.money -= _0x35d1b7;
        _0x1d50a7.revenue -= _0x35d1b7;
        _0x991d3e("Khách app bom hàng! Mất trắng " + _0x9c212e(_0x35d1b7) + ".", "bad");
      } else if (_0x3aa12f) {
        _0xbf5ed7.app = _0x5ab951((_0xbf5ed7.app || 4.5) + (_0x730bca > 0.5 ? 0.04 : 0.015), 1, 5);
        _0xbf5ed7.stats.app = (_0xbf5ed7.stats.app || 0) + 1;
      } else {
        _0xbf5ed7.app = _0x5ab951((_0xbf5ed7.app || 4.5) - 0.25, 1, 5);
        _0xbf5ed7.reviews.push({
          s: 1,
          t: "Đơn app chờ quá lâu, huỷ đơn! 1 sao.",
          who: "Khách đặt app",
          day: _0xbf5ed7.day
        });
      }
    } else if (_0xedb8cf.type === "kol") {
      if (_0x3aa12f && _0x730bca > 0.45) {
        _0xbf5ed7.flags.viral = _0xbf5ed7.day + 1;
        _0xbf5ed7.stats.viral = (_0xbf5ed7.stats.viral || 0) + 1;
        _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep + 0.2, 0, 5);
        _0x991d3e("Clip review lên xu hướng! Mai khách kéo đến đông gấp rưỡi!", "good");
        _0xbf5ed7.reviews.push({
          s: 5,
          t: "Xôi Bà Tám ngon xỉu, mọi người phải thử!",
          who: "Hot TikToker",
          day: _0xbf5ed7.day
        });
      } else if (!_0x3aa12f) {
        _0xbf5ed7.flags.phot = _0xbf5ed7.day + 1;
        _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep - 0.4, 0, 5);
        _0x991d3e("Bị \"bóc phốt\" trên mạng! Mai khách thưa hẳn…", "bad");
        _0xbf5ed7.reviews.push({
          s: 1,
          t: "Chờ mãi không được phục vụ, trải nghiệm tệ!",
          who: "Hot TikToker",
          day: _0xbf5ed7.day
        });
      }
    }
    if (_0xbf5ed7.reviews.length > 30) {
      _0xbf5ed7.reviews.splice(0, _0xbf5ed7.reviews.length - 30);
    }
  }
  function _0x1c6b03() {
    if (!_0x121d51()) {
      return null;
    }
    if (_0xbf5ed7.rv4) {
      if (_0xbf5ed7.day < _0xbf5ed7.rv4.bust) {
        return null;
      }
      const _0x3cee62 = _0xbf5ed7.rv4.strat || "giu";
      if (_0x3cee62 === "giam") {
        _0x3711c2(1 / 0.85);
      }
      if (_0x3cee62 === "giu") {
        _0xbf5ed7.rep = _0x5ab951(_0xbf5ed7.rep + 0.3, 0, 5);
      }
      _0xbf5ed7.stats.rivalWin = (_0xbf5ed7.stats.rivalWin || 0) + 1;
      _0xbf5ed7.rv4 = null;
      return _0x1fcaea[_0x3cee62];
    }
    if (_0xbf5ed7.day <= (_0xbf5ed7.flags.thDay || 0) + 4 || Math.random() >= _0x1082b3) {
      return null;
    } else {
      _0xbf5ed7.rv4 = {
        day: _0xbf5ed7.day,
        bust: _0xbf5ed7.day + _0x3d3006(6, 10),
        strat: null
      };
      return _0xfadb9a;
    }
  }
  function _0x5f2c58(_0x149c3a) {
    const _0x5d0d8d = _0xbf5ed7.unlocked.some(_0x4fbc11 => _0xaa20ba[_0x4fbc11].ch);
    _0x57f03a(_0x1525be("ico_warn") + " Đối phó \"Xôi Nhanh\"", "<p>Chuỗi \"Xôi Nhanh\" bán phá giá ngay cạnh tiệm. " + (_0xe9a99e() ? "Tí" : "Bà") + " chọn cách nào?</p>\n    <ul class=\"achlist\">\n      <li class=\"cur\">" + _0x1525be("ico_coin", "ico") + "<div><b>Giảm giá theo</b><small>Hạ giá 15% đến khi họ dẹp. Giữ được khách, nhưng lãi mỏng.</small></div></li>\n      <li class=\"cur\">" + _0x1525be("ico_star", "ico") + "<div><b>Giữ chất lượng</b><small>Giá giữ nguyên, khách vơi gần 30% một thời gian. Họ dẹp thì uy tín tăng mạnh.</small></div></li>\n      <li class=\"" + (_0x5d0d8d ? "cur" : "") + "\">" + _0x1525be("xoi_thapcam", "ico") + "<div><b>Ra món đặc biệt</b><small>" + (_0x5d0d8d ? "Đẩy mạnh món xôi phố họ không làm được. Khách chỉ vơi 10%." : "Cần học ít nhất một món xôi phố trước.") + "</small></div></li>\n    </ul>", [{
      label: "Giảm giá",
      cls: "gold",
      fn: () => {
        _0xbf5ed7.rv4.strat = "giam";
        _0x3711c2(0.85);
        _0x690d06();
        _0x991d3e("Đã hạ giá 15%.", "");
        if (_0x149c3a) {
          _0x149c3a();
        }
      }
    }, {
      label: "Giữ giá",
      cls: "green",
      fn: () => {
        _0xbf5ed7.rv4.strat = "giu";
        _0x690d06();
        if (_0x149c3a) {
          _0x149c3a();
        }
      }
    }].concat(_0x5d0d8d ? [{
      label: "Món riêng",
      cls: "red",
      fn: () => {
        _0xbf5ed7.rv4.strat = "dacbiet";
        _0x690d06();
        if (_0x149c3a) {
          _0x149c3a();
        }
      }
    }] : []), "paper");
  }
  const _0x5e2a80 = () => _0x121d51() && _0xbf5ed7.flags.closed === _0xbf5ed7.day;
  function _0x445569() {
    Object.assign(_0x1d50a7, {
      time: 0,
      revenue: 0,
      tips: 0,
      served: 0,
      parts: 0,
      fleeParts: 0,
      lost: 0,
      lostPricey: 0,
      fines: 0,
      fineQltt: 0,
      fineTtp: 0,
      fineTax: 0,
      fineVs: 0,
      fleeLost: 0,
      soldout: 0,
      confiscated: 0,
      tax: 0,
      rain: false,
      festival: false,
      cust: [],
      hand: null,
      hand2: null,
      runs: [],
      chase: null,
      qltt: null,
      thue: null,
      vs: null,
      finished: true
    });
  }
  function _0x41bfab() {
    _0x57f03a(_0x1525be("ico_warn") + " Tiệm bị đình chỉ", "<p>Hôm nay tiệm chính bị đình chỉ để khắc phục vệ sinh, không được bán.</p><p>Các chi nhánh vẫn mở cửa bình thường.</p>", [{
      label: "Ở bếp",
      cls: "grey"
    }, {
      label: "Nghỉ một hôm ➜",
      cls: "red",
      fn: () => {
        _0x445569();
        _0x58a015("summary");
      }
    }], "paper warn");
  }
  const _0x8d72ef = 20;
  function _0x2329cb() {
    if (!_0xbf5ed7 || _0xbf5ed7.ch3 < 1) {
      return 0;
    }
    _0xbf5ed7.flags.hdDay ||= _0xbf5ed7.day;
    const _0x5aff0f = Math.min(_0xbf5ed7.day - (_0xbf5ed7.flags.phoDay || _0xbf5ed7.day), _0xbf5ed7.day - _0xbf5ed7.flags.hdDay);
    return _0x5ab951(_0x5aff0f / _0x8d72ef, 0, 1);
  }
  const _0x2342bf = 30;
  const _0x110df9 = 50;
  const _0x1d9d45 = () => _0x2329cb() > 0.05 && _0x1d50a7.time >= _0x2342bf && _0x1d50a7.time < _0x110df9;
  const _0x5c212a = () => _0x1d9d45() ? 1 + _0x2329cb() : 1;
  const _0x48ebca = () => 1 - _0x2329cb() * 0.25;
  const _0x294faf = _0x23b1a6 => _0x23b1a6 === "ship" || _0x23b1a6 === "kol" ? 0 : (_0x121d51() ? 0.35 : 0.25) * _0x2329cb();
  const _0x599ca4 = () => !_0xbf5ed7 || _0xbf5ed7.ch3 < 1 ? 1 : _0x14aaa7() ? 2 : _0x121d51() ? 1.75 : 1.2 + _0x2329cb() * 0.3;
  const _0x43eda1 = () => _0xbf5ed7.ch3 >= 1 ? Math.pow(1.1, Math.floor(Math.max(0, _0xbf5ed7.day - (_0xbf5ed7.flags.phoDay || _0xbf5ed7.day)) / 90)) : 1;
  function _0x9792f6(_0x289c7f) {
    const _0x4e36db = _0x2329cb();
    if (!_0x4e36db || !_0x289c7f) {
      return 0;
    } else {
      return Math.min(0.08, (0.01 + _0x289c7f * 0.01) * _0x4e36db);
    }
  }
  const _0x5e56ac = {
    matdien: {
      chance: 1,
      lines: [{
        who: "ti",
        text: "Bà ơi, khu mình cúp điện cả sáng! Bếp phải đun củi, xôi chín chậm gấp đôi đấy.",
        ti: "Khu mình cúp điện cả sáng! Bếp phải đun củi, xôi chín chậm gấp đôi đây."
      }],
      toast: "Mất điện: đồ xôi chậm gấp đôi"
    },
    khan: {
      chance: 1,
      toast: "Chợ đầu mối khan hàng, một nguyên liệu tăng giá gấp ba"
    },
    bao: {
      chance: 0.8,
      lines: [{
        who: "batam",
        text: "Bão về rồi con ạ. Mưa gió thế này khách thưa, shipper cũng nghỉ hết.",
        ti: "Bão về rồi. Mưa gió thế này khách thưa, shipper cũng nghỉ hết."
      }],
      toast: "Ngày bão: khách thưa, không có đơn app"
    },
    bom: {
      chance: 0.8,
      ch4: true,
      lines: [{
        who: "ti",
        text: "Bà ơi, dạo này có nhóm hay đặt app rồi bom hàng. Hôm nay nhớ để ý đấy!",
        ti: "Dạo này có nhóm hay đặt app rồi bom hàng. Hôm nay phải để ý mới được!"
      }],
      toast: "Cẩn thận khách app bom hàng hôm nay"
    }
  };
  function _0x4447ba() {
    const _0x3a5a59 = _0x2329cb();
    if (_0x3a5a59 < 0.1 || Math.random() >= _0x3a5a59 * 0.25) {
      return null;
    }
    const _0x2ac41e = Object.keys(_0x5e56ac).filter(_0x3ba333 => !_0x5e56ac[_0x3ba333].ch4 || _0x121d51());
    const _0x399880 = _0x6a5a83(Object.fromEntries(_0x2ac41e.map(_0x440717 => [_0x440717, {
      w: _0x5e56ac[_0x440717].chance
    }])));
    _0xbf5ed7.flags.bad = _0x1fbbf3.indexOf(_0x399880) + 1;
    _0xbf5ed7.flags.badDay = _0xbf5ed7.day;
    if (_0x399880 === "bao") {
      _0xbf5ed7.flags.rain = _0xbf5ed7.day;
    }
    if (_0x399880 === "khan") {
      const _0x5923d9 = [...new Set(_0xbf5ed7.unlocked.flatMap(_0x2e4b85 => _0xaa20ba[_0x2e4b85].ing))].filter(_0x193ece => _0x193ece !== "nep");
      const _0x529ee1 = _0x31c8b2(_0x5923d9.length ? _0x5923d9 : ["doxanh"]);
      _0xbf5ed7.priceMul[_0x529ee1] = 3;
      return [{
        who: "ti",
        text: "Bà ơi, chợ đầu mối khan " + _0x199e77[_0x529ee1].name.toLowerCase() + ", giá lên gấp ba! Hôm nay tính toán kỹ nhé.",
        ti: "Chợ đầu mối khan " + _0x199e77[_0x529ee1].name.toLowerCase() + ", giá lên gấp ba! Hôm nay phải tính toán kỹ."
      }];
    }
    return _0x5e56ac[_0x399880].lines;
  }
  const _0x1fbbf3 = Object.keys(_0x5e56ac);
  const _0x292cac = _0x39459a => _0xbf5ed7.flags.badDay === _0xbf5ed7.day && _0x1fbbf3[_0xbf5ed7.flags.bad - 1] === _0x39459a;
  const _0x589c20 = () => _0xbf5ed7.flags.badDay === _0xbf5ed7.day ? _0x1fbbf3[_0xbf5ed7.flags.bad - 1] : null;
  const _0x11c399 = () => !!_0xbf5ed7 && _0xbf5ed7.flags.tiDay === _0xbf5ed7.day;
  const _0x3d0567 = {
    obj: null,
    keys: ["money", "debt"],
    sh: {},
    bust: null,
    arm(_0x20a1f1) {
      this.obj = _0x20a1f1;
      this.sh = {};
      for (const _0x470b40 of this.keys) {
        let _0x197591 = typeof _0x20a1f1[_0x470b40] == "number" ? _0x20a1f1[_0x470b40] : 0;
        const _0x5bb4e1 = Math.floor(Math.random() * 900000000) + 100000000;
        const _0x42c30a = {
          h: _0x197591 + _0x5bb4e1,
          K: _0x5bb4e1
        };
        this.sh[_0x470b40] = _0x42c30a;
        Object.defineProperty(_0x20a1f1, _0x470b40, {
          enumerable: true,
          configurable: true,
          get() {
            return _0x197591;
          },
          set(_0x1dc233) {
            _0x197591 = _0x1dc233;
            _0x42c30a.h = _0x1dc233 + _0x42c30a.K;
          }
        });
        _0x42c30a.real = () => _0x197591;
      }
    },
    why() {
      const _0x5ca013 = this.obj;
      for (const _0x5bc880 of this.keys) {
        const _0x54597e = this.sh[_0x5bc880];
        const _0x208b32 = _0x54597e.real();
        if (typeof _0x208b32 != "number" || !isFinite(_0x208b32)) {
          return _0x5bc880 + "_nan";
        }
        if (Math.abs(_0x54597e.h - _0x54597e.K - _0x208b32) > 1) {
          return _0x5bc880 + "_mem";
        }
      }
      for (const _0xee1095 in _0x5ca013.upg || {}) {
        const _0x337754 = _0x2be998[_0xee1095];
        if (_0x337754 && (_0x5ca013.upg[_0xee1095] || 0) > (_0x337754.max || _0x337754.cost.length)) {
          return "upg";
        }
      }
      if (typeof _0x5ca013.rep == "number" && (_0x5ca013.rep > 5.001 || _0x5ca013.rep < -0.001)) {
        return "rep";
      }
      const _0x5b891c = _0x5ca013.today || {};
      const _0x81a2f5 = _0x275f4e(_0x5ca013, (_0x1d50a7.revenue || 0) + (_0x1d50a7.tips || 0) + (_0x5b891c.order || 0) + (_0x5b891c.recover || 0) + (_0x5b891c.gdPay || 0) + (_0x5b891c.save || 0), true);
      if (_0x81a2f5) {
        return "sum_" + _0x81a2f5;
      } else {
        return null;
      }
    },
    tick() {
      try {
        if (!_0xbf5ed7) {
          this.obj = null;
          return;
        }
        if (_0xbf5ed7 !== this.obj) {
          this.arm(_0xbf5ed7);
        }
        if (this.bust === _0xbf5ed7 || _0x19e10f.screen === "title" || _0x19e10f.screen === "loading") {
          return;
        }
        const _0x11d5eb = this.why();
        if (_0x11d5eb) {
          this.arrest(_0x11d5eb);
        }
      } catch (_0x1588b7) {}
    },
    lines(_0x25f1b8, _0xd7ae6e) {
      return _0x10bf5d.map((_0x5ca5ff, _0x36a00f) => Object.assign(_0x36a00f ? {} : {
        bg: _0xd7ae6e
      }, _0x5ca5ff, _0x25f1b8 && _0x5ca5ff.ti ? {
        who: _0x5ca5ff.tiWho !== undefined ? _0x5ca5ff.tiWho : "ti",
        text: _0x5ca5ff.ti
      } : {}, {
        ti: null
      }));
    },
    arrest(_0x1fd08c) {
      this.bust = _0xbf5ed7;
      try {
        _0x463590.ev("cheat", {
          why: _0x1fd08c,
          day: _0xbf5ed7.day,
          chapter: _0xbf5ed7.chapter
        });
      } catch (_0x5b6ccc) {}
      try {
        _0x1d50a7.finished = true;
      } catch (_0x532816) {}
      try {
        _0x543cdd();
      } catch (_0x5bba8e) {}
      const _0x28379b = this.lines(_0xe9a99e(), _0xbf5ed7.ch3 >= 1 ? "city" : "kitchen");
      const _0x1897c8 = {
        ch2: _0xbf5ed7.ch2,
        ch3: _0xbf5ed7.ch3
      };
      _0x4d92fd.play("fail");
      _0xbf5ed7 = _0x3e830f();
      _0x4ce74b();
      _0x690d06();
      _0x58a015("story", {
        lines: _0x28379b.concat(_0x3a5efc),
        stall: _0x1897c8,
        next: () => _0x56ed87()
      });
    }
  };
  setInterval(() => _0x3d0567.tick(), 1000);
  function _0x31cfb4(_0x42ed9c, _0x588c4c) {
    try {
      _0x463590.ev("restore_forged", {
        why: _0x588c4c,
        day: _0x42ed9c.day,
        chapter: _0x42ed9c.chapter
      });
    } catch (_0x4ea9de) {}
    try {
      _0x543cdd();
    } catch (_0xbb43ec) {}
    const _0xeca6d2 = (_0x42ed9c.ch5 || 0) >= 1 || !!_0x42ed9c.flags && !!_0x42ed9c.flags.tiHeir;
    _0x4d92fd.play("fail");
    _0xbf5ed7 = _0x3e830f();
    _0x4ce74b();
    _0x690d06();
    _0x58a015("story", {
      lines: _0x3d0567.lines(_0xeca6d2, _0x42ed9c.ch3 >= 1 ? "city" : "kitchen").concat(_0x3a5efc),
      stall: {
        ch2: _0x42ed9c.ch2,
        ch3: _0x42ed9c.ch3
      },
      next: () => _0x56ed87()
    });
  }
  (function () {
    var _0xe8a4ba = window.Capacitor;
    var _0x1e8484 = !!_0xe8a4ba && !!_0xe8a4ba.isNativePlatform && !!_0xe8a4ba.isNativePlatform();
    if (!_0x1e8484) {
      return;
    }
    document.documentElement.classList.add("native");
    var _0x27c49d = _0xe8a4ba.Plugins || {};
    try {
      var _0x581753 = _0x27c49d.SystemBars && _0x27c49d.SystemBars.hide({
        bar: "StatusBar"
      });
      if (_0x581753 && _0x581753.catch) {
        _0x581753.catch(function () {});
      }
    } catch (_0x4cd3ee) {}
    function _0x66d3e1() {
      if (!_0x517a28.classList.contains("hidden")) {
        _0x4d92fd.play("click");
        _0x543cdd();
        return;
      }
      if (_0x2aedb1) {
        _0x1a26f6.dispatchEvent(new Event("pointerdown"));
        return;
      }
      if (_0x19e10f.screen === "title" || _0x19e10f.screen === "loading") {
        _0x27c49d.App.exitApp();
        return;
      }
      if (_0x19e10f.screen !== "daycard") {
        var _0x326fc5 = _0x19e10f.screen === "market" ? "Phiên chợ đang dở sẽ không được lưu." : "Tiến trình đã được lưu tự động.";
        _0x57f03a("Về màn hình chính?", _0x326fc5, [{
          label: "Chơi tiếp",
          cls: "green"
        }, {
          label: "Về màn chính",
          cls: "red",
          fn: function () {
            _0x58a015("title");
          }
        }], "paper");
      }
    }
    if (_0x27c49d.App) {
      _0x27c49d.App.addListener("backButton", _0x66d3e1);
      _0x27c49d.App.addListener("pause", function () {
        if (_0x19e10f.screen === "market" && !_0x19e10f.paused && !_0x1d50a7.ended) {
          _0x57f03a("Tạm nghỉ", "Phiên chợ đang tạm dừng. Bấm để bán tiếp.", [{
            label: "Bán tiếp",
            cls: "green"
          }], "paper");
        }
      });
    }
  })();
  (function () {
    var _0x29afa9 = window.Capacitor;
    if (!_0x29afa9 || !_0x29afa9.isNativePlatform || !_0x29afa9.isNativePlatform()) {
      if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
        navigator.serviceWorker.register("sw.js?v=" + window.GAME_V).catch(function () {});
      }
      window.addEventListener("beforeinstallprompt", function (_0x44e3f3) {
        _0x44e3f3.preventDefault();
      });
    }
  })();
})();