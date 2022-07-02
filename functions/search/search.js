var axios = require('axios');

const searchRandevu = async ({
   cinsiyet,
   plaka,
   klinikId,
   baslangic,
   bitis,
   token
}) => new Promise((resolve) => {
   var data = JSON.stringify({
      "aksiyonId": "200",
      "cinsiyet": cinsiyet,
      "mhrsHekimId": -1,
      "mhrsIlId": plaka,
      "mhrsIlceId": -1,
      "mhrsKlinikId": klinikId,
      "mhrsKurumId": -1,
      "muayeneYeriId": -1,
      "tumRandevular": false,
      "ekRandevu": true,
      "randevuZamaniList": [],
      "baslangicZamani": baslangic,
      "bitisZamani": bitis
   });

   var config = {
      method: 'post',
      url: 'https://prd.mhrs.gov.tr/api/kurum-rss/randevu/slot-sorgulama/arama',
      headers: {
         'Authorization': token,
         'Content-Type': 'application/json'
      },
      data: data
   };

   axios(config)
      .then(function (response) {
         resolve({
            hekimId: response.data.data.hastane[0].hekim.mhrsHekimId,
            kurumId: response.data.data.hastane[0].kurum.mhrsKurumId,
         });
      })
      .catch(function (error) {
         console.log("Hekim ararken hata oluştu");
      });
})

module.exports = searchRandevu