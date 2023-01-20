// const api ='https://api.apilayer.com/exchangerates_data/latest?base=TRY'

// function getData(api){
//     fetch(api)
//     .then((res)=> res.json())
//     .then((data)=>{
//         console.log(data)
//     })

// }

// getData(api)



var data = new Headers();
data.append("apikey", "F0OUcgJpRIEmiLeiCvkZVRm9nGe80rDe");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: data
};



var api = fetch("https://api.apilayer.com/exchangerates_data/latest?base=TRY", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
      //Gelen değerleri türk lirasına çevirme
      let TRY = result.rates.TRY;
      let USD = TRY / result.rates.USD;
      let EUR = TRY / result.rates.EUR;
      let GBP = TRY / result.rates.GBP;
      let AZN = TRY/ result.rates.AZN;
      let RUB = TRY/ result.rates.RUB;
      let BTC = TRY/ result.rates.BTC;
    // Html sayfasondaki değerleri tanumlama
      const dolar = document.getElementById('usd');
      const euro = document.getElementById('eur');
      const sterlin = document.getElementById('gbp');
      const manat = document.getElementById('azn');
      const rub = document.getElementById('rub');
      const btc = document.getElementById('btc');
      
    //Türk Lirasına çevirilen veriyi html sayfasına gönderme
      dolar.innerHTML= USD.toString().slice(0,5);
      euro.innerHTML= EUR.toString().slice(0,5);
      sterlin.innerHTML= GBP.toString().slice(0,5);
      manat.innerHTML= AZN.toString().slice(0,5);
      rub.innerHTML= RUB.toString().slice(0,5);
      btc.innerHTML= BTC.toString().slice(0,9);
      // setData(USD,EUR,GBP);
  })
  .catch(error => console.log('error', error));
setInterval(()=>{
api(result)
},30000)
  
// function setData(USD,EUR,GBP){

//     const dolar = document.getElementById('usd');
//     const euro = document.getElementById('eur');
//     const sterlin = document.getElementById('gbp');

//     dolar.textContent= USD.toString().slice(0,4);
//     euro.textContent= EUR.toString().slice(0,4);
//     sterlin.textContent= GBP.toString().slice(0,4);
// }