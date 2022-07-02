const moment = require("moment");
moment.locale("tr")
const getAuth = require("./functions/auth/auth");
const randevuGecmisi = require("./functions/randevu/gecmis");
const randevuAl = require("./functions/randevu/randevu");
const searchRandevu = require("./functions/search/search");
const sorguHekim = require("./functions/sorgu/sorgu");

const kliniks = [
   {
      "value": 106,
      "text": "Aile Hekimliği",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 107,
      "text": "Algoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 181001,
      "text": "Amatem (Alkol ve Madde Bağımlılığı)",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 109,
      "text": "Anesteziyoloji ve Reanimasyon",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 112,
      "text": "Beyin ve Sinir Cerrahisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 113,
      "text": "Cerrahi Onkolojisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 116,
      "text": "Çocuk Cerrahisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 117,
      "text": "Çocuk Diş Hekimliği",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 118,
      "text": "Çocuk Endokrinolojisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 119,
      "text": "Çocuk Enfeksiyon Hastalıkları",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 120,
      "text": "Çocuk Gastroenterolojisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 121,
      "text": "Çocuk Genetik Hastalıkları",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 199,
      "text": "Çocuk Göğüs Hastalıkları",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 123,
      "text": "Çocuk Hematolojisi ve Onkolojisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 124,
      "text": "Çocuk İmmünolojisi ve Alerji Hastalıkları",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 125,
      "text": "Çocuk Kalp Damar Cerrahisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 126,
      "text": "Çocuk Kardiyolojisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 127,
      "text": "Çocuk Metabolizma Hastalıkları",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 128,
      "text": "Çocuk Nefrolojisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 129,
      "text": "Çocuk Nörolojisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 131,
      "text": "Çocuk Romatolojisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 132,
      "text": "Çocuk Sağlığı ve Hastalıkları",
      "children": [
         {
            "value": 9000009,
            "text": "Yeni Doğan",
            "children": [],
            "value2": 0,
            "value3": 2,
            "text2": "",
            "favori": false
         }
      ],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 133,
      "text": "Çocuk Ürolojisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 181003,
      "text": "Çocuk ve Ergen Madde ve Alkol Bağımlılığı",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 134,
      "text": "Çocuk ve Ergen Ruh Sağlığı ve Hastalıkları",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 136,
      "text": "Deri ve Zührevi Hastalıkları (Cildiye)",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 198,
      "text": "Diş Hekimliği (Genel Diş)",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 137,
      "text": "El Cerrahisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 138,
      "text": "Endodonti",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 139,
      "text": "Endokrinoloji ve Metabolizma Hastalıkları",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 140,
      "text": "Enfeksiyon Hastalıkları ve Klinik Mikrobiyoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 142,
      "text": "Fiziksel Tıp ve Rehabilitasyon",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 144,
      "text": "Gastroenteroloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 145,
      "text": "Gastroenteroloji Cerrahisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 220,
      "text": "Geleneksel Tamamlayıcı Tıp Ünitesi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 146,
      "text": "Gelişimsel Pediatri",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 147,
      "text": "Genel Cerrahi",
      "children": [
         {
            "value": 9000062,
            "text": "Kronik Yara Bakımı",
            "children": [],
            "value2": 0,
            "value3": 2,
            "text2": "",
            "favori": false
         }
      ],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 148,
      "text": "Geriatri",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 149,
      "text": "Göğüs Cerrahisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 150,
      "text": "Göğüs Hastalıkları",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 151,
      "text": "Göz Hastalıkları",
      "children": [
         {
            "value": 9000001,
            "text": "Glokom",
            "children": [],
            "value2": 0,
            "value3": 2,
            "text2": "",
            "favori": false
         },
         {
            "value": 9000004,
            "text": "Kontaklens",
            "children": [],
            "value2": 0,
            "value3": 2,
            "text2": "",
            "favori": false
         },
         {
            "value": 9000066,
            "text": "Kornea",
            "children": [],
            "value2": 0,
            "value3": 2,
            "text2": "",
            "favori": false
         },
         {
            "value": 9000006,
            "text": "Nörooftalmoloji",
            "children": [],
            "value2": 0,
            "value3": 2,
            "text2": "",
            "favori": false
         },
         {
            "value": 9000005,
            "text": "Okuloplasti",
            "children": [],
            "value2": 0,
            "value3": 2,
            "text2": "",
            "favori": false
         },
         {
            "value": 9000063,
            "text": "Önsegment",
            "children": [],
            "value2": 0,
            "value3": 2,
            "text2": "",
            "favori": false
         },
         {
            "value": 9000007,
            "text": "Retina",
            "children": [],
            "value2": 0,
            "value3": 2,
            "text2": "",
            "favori": false
         },
         {
            "value": 9000002,
            "text": "Şaşılık",
            "children": [],
            "value2": 0,
            "value3": 2,
            "text2": "",
            "favori": false
         },
         {
            "value": 9000003,
            "text": "Uvea",
            "children": [],
            "value2": 0,
            "value3": 2,
            "text2": "",
            "favori": false
         }
      ],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 154,
      "text": "Hava ve Uzay Hekimliği",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 155,
      "text": "Hematoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 157,
      "text": "İç Hastalıkları (Dahiliye)",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 158,
      "text": "İmmünoloji ve Alerji Hastalıkları",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 159,
      "text": "İş ve Meslek Hastalıkları",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 160,
      "text": "Jinekolojik Onkoloji Cerrahisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 161,
      "text": "Kadın Hastalıkları ve Doğum",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 162,
      "text": "Kalp ve Damar Cerrahisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 163,
      "text": "Kardiyoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 164,
      "text": "Klinik Nörofizyoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 165,
      "text": "Kulak Burun Boğaz Hastalıkları",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 166,
      "text": "Nefroloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 167,
      "text": "Neonatoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 168,
      "text": "Nöroloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 169,
      "text": "Nükleer Tıp",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 170,
      "text": "Ortodonti",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 171,
      "text": "Ortopedi ve Travmatoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 173,
      "text": "Perinatoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 174,
      "text": "Periodontoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 175,
      "text": "Plastik, Rekonstrüktif ve Estetik Cerrahi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 176,
      "text": "Protetik Diş Tedavisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 177,
      "text": "Radyasyon Onkolojisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 179,
      "text": "Restoratif Diş Tedavisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 180,
      "text": "Romatoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 181,
      "text": "Ruh Sağlığı ve Hastalıkları (Psikiyatri)",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 210,
      "text": "Sağlık Kurulu",
      "children": [],
      "value2": 0,
      "value3": 2,
      "text2": "",
      "favori": false
   },
   {
      "value": 211,
      "text": "Sağlık Kurulu ÇÖZGER (Çocuk Özel Gereksinim Raporu)",
      "children": [],
      "value2": 0,
      "value3": 2,
      "text2": "",
      "favori": false
   },
   {
      "value": 150001,
      "text": "Sigarayı Bıraktırma Kliniği",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 183,
      "text": "Spor Hekimliği",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 184,
      "text": "Sualtı Hekimliği ve Hiperbarik Tıp",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 187,
      "text": "Tıbbi Ekoloji ve Hidroklimatoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 189,
      "text": "Tıbbi Genetik",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 192,
      "text": "Tıbbi Onkoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 168001,
      "text": "Uyku Polikliniği",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 196,
      "text": "Üroloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 103,
      "text": "Ağız, Diş ve Çene Cerrahisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 104,
      "text": "Ağız, Diş ve Çene Radyolojisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   }
]


const users = [
   {
      tc: 0, // type number
      password: "pass", // type string
      cinsiyet: "E", // E or F type string
      plaka: 34, // type number
      klinik: 151, // type number
      istenenCinsiyet: "E" // E erkek, F kadın type string
   }
]


setInterval(() => {

   users.map(user => {
      getAuth({
         kimlikno: user.tc,
         password: user.password
      }).then(token => {
         const newtoken = String("Bearer " + token.split('"')[1])
         randevuGecmisi({ token: newtoken }).then(gecmis => {
            const randevu = gecmis.aktifRandevuDtoList.filter(a => a.mhrsKlinikAdi === kliniks.find(a => a.value === user.klinik).text)
            if (randevu.length <= 0) {
               const date = moment().format('YYYY-MM-DD HH:mm:ss')
               searchRandevu({
                  cinsiyet: user.cinsiyet,
                  plaka: user.plaka,
                  klinikId: user.klinik,
                  baslangic: String(moment().format('YYYY-MM-DD HH:mm:ss')),
                  bitis: String(moment().format(`YYYY-MM-${String(date.split("-")[2].slice(0, 2) * 1 + 15)} HH:mm:ss`)),
                  token: newtoken,
               }).then(veri => {
                  sorguHekim({
                     hekimId: veri.hekimId,
                     kurumId: veri.kurumId,
                     token: newtoken,
                     cinsiyet: user.cinsiyet,
                     plaka: user.plaka,
                     klinikId: user.klinik
                  }).then(veri => {
                     if (user.istenenCinsiyet) {
                        const kullanılabilirhekim = veri.filter(hekim => hekim.kalanKullanim > 0)
                        const secilen = kullanılabilirhekim.filter(hekim => hekim.hekimSlotList[0].hekim.cinsiyet.val === user.istenenCinsiyet)
                        if (secilen.length > 0) {
                           const saatler = secilen[0].hekimSlotList[0].muayeneYeriSlotList[0].saatSlotList.filter(saat => saat.bos === true)
                           const slotList = []
                           saatler.map(saat => {
                              saat.slotList.map(a => slotList.push(a))
                           })

                           const alinabilir = slotList.filter(a => a.bos === true)

                           randevuAl({
                              fkSlotId: alinabilir[0].slot.id,
                              fkCetvelId: alinabilir[0].slot.fkCetvelId,
                              baslangicZamani: alinabilir[0].slot.baslangicZamani,
                              bitisZamani: alinabilir[0].slot.bitisZamani,
                              token: newtoken
                           }).then(console.log)


                        } else {
                           console.log("istenilen cinsiyete göre hekim bulunamadı")
                        }
                     } else {
                        const kullanılabilirhekim = veri.filter(hekim => hekim.kalanKullanim > 0)
                        if (kullanılabilirhekim.length > 0) {
                           const saatler = kullanılabilirhekim[0].hekimSlotList[0].muayeneYeriSlotList[0].saatSlotList.filter(saat => saat.bos === true)
                           const slotList = []
                           saatler.map(saat => {
                              saat.slotList.map(a => slotList.push(a))
                           })

                           const alinabilir = slotList.filter(a => a.bos === true)

                           randevuAl({
                              fkSlotId: alinabilir[0].slot.id,
                              fkCetvelId: alinabilir[0].slot.fkCetvelId,
                              baslangicZamani: alinabilir[0].slot.baslangicZamani,
                              bitisZamani: alinabilir[0].slot.bitisZamani,
                              token: newtoken
                           }).then(console.log)

                        } else {
                           console.log("kullanılabilecek hekim yok")
                        }
                     }
                  })
               })
            } else {
               console.log("randevu var")
            }
         })
      })
   })
}, 3600000) // 3600000 ms = 1 hour