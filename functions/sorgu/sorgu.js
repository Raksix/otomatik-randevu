var axios = require('axios');

const sorguHekim = async ({
   cinsiyet,
   plaka,
   klinikId,
   kurumId,
   hekimId,
   token
}) => new Promise((resolve) => {
   var data = JSON.stringify({
      "aksiyonId": 200,
      "mhrsHekimId": hekimId,
      "mhrsIlId": plaka,
      "mhrsKlinikId": klinikId,
      "mhrsKurumId": kurumId,
      "muayeneYeriId": -1,
      "cinsiyet": cinsiyet,
      "tumRandevular": false,
      "ekRandevu": true,
      "randevuZamaniList": []
   });


   var config = {
      method: 'post',
      url: 'https://prd.mhrs.gov.tr/api/kurum-rss/randevu/slot-sorgulama/slot',
      headers: {
         'authorization': token,
         'Content-Type': 'application/json'
      },
      data: data
   };

   axios(config)
      .then(function (response) {
         resolve(response.data.data);
      })
      .catch(function (error) {
         console.log("Saat Soruglamada Hata Oluştu");
      });
})

module.exports = sorguHekim