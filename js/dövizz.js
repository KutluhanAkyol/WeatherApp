let data = new Headers();
data.append("apikey", "aJMKT0f8miYGG9ExslO1Myj7O03YDa9v");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: data
}
const api =("https://api.apilayer.com/exchangerates_data/latest?base=TRY",requestOptions)

function getData(api){
    fetch(api)
    .then(response => response.json())
    .then(result => console.log(result.rates))
    .catch(error => console.log('error', error));

}

getData(api)
