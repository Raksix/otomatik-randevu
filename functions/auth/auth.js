var axios = require('axios');

const getAuth = async ({
   kimlikno,
   password,

}) => new Promise((resolve) => {
   var data = JSON.stringify({
      "kullaniciAdi": kimlikno,
      "parola": password,
      "islemKanali": "VATANDAS_WEB",
      "girisTipi": "PAROLA"
   });

   var config = {
      method: 'post',
      url: 'https://prd.mhrs.gov.tr/api/vatandas/login',
      headers: {
         'Content-Type': 'application/json'
      },
      data: data
   };

   axios(config)
      .then(function (response) {
         resolve(JSON.stringify(response.data.data.jwt));
      })
      .catch(function (error) {
         console.log("Giriş yapılırken hata oluştu");
      });
})


module.exports = getAuth