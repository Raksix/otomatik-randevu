var axios = require('axios');

const randevuAl = async ({
   fkSlotId,
   fkCetvelId,
   baslangicZamani,
   bitisZamani,
   token
}) => new Promise((resolve) => {
   var data = JSON.stringify({
      "fkSlotId": fkSlotId,
      "fkCetvelId": fkCetvelId,
      "yenidogan": false,
      "baslangicZamani": baslangicZamani,
      "bitisZamani": bitisZamani,
      "randevuNotu": ""
    });

    console.log(data)

   var config = {
      method: 'post',
      url: 'https://prd.mhrs.gov.tr/api/kurum/randevu/randevu-ekle',
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
         console.log("Randevu eklenirken hata oluştu");
      });
})

module.exports = randevuAl