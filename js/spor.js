// let api="https://app.sportdataapi.com/api/v1/soccer/leagues"
// let key="7f3e4f20-6674-11ed-b078-f3b4ce2faaf2"
var data = new Headers();
data.append("apikey", "7f3e4f20-6674-11ed-b078-f3b4ce2faaf2");



var api = fetch("https://app.sportdataapi.com/api/v1/soccer/countries/120?apikey=7f3e4f20-6674-11ed-b078-f3b4ce2faaf2")
.then(response=> response.json())
.then(result =>console.log(result))
.catch(error => console.log('error', error));


