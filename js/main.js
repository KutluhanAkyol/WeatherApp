const url='https://api.openweathermap.org/data/2.5/'
const key='4f8d9b4eb2aab476eb9936e491820c3b'
let container = document.querySelector('.container')

const setQuery=(e)=>{
    if(e.keyCode =='13')
    getResult(searcH.value)
}

const getResult=(cityName) => {
   let quary =`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
   fetch(quary)
   .then(weather=> {
    return weather.json()
   })
   .then(display)
}

const display= (result)=> {
    //Veri Çekme
     console.log(result)
    //Html ile tanımlama 
    let city =document.querySelector('.city')   
    let drc = document.querySelector('.derece')   
    let drm = document.querySelector('.durum')    
    let minmax = document.querySelector('.hissedilen')
    let wind= document.querySelector('.wind')
    let hss=document.querySelector('.hss')
    let hmm=document.querySelector('.hmmnty')
    let con1=document.querySelector('.havadurumu')
    let flag=document.querySelector('.flag')

    //Gelen veriyi htmle gönderme
    city.innerHTML=`${result.name.toUpperCase()} , ${result.sys.country.toUpperCase()}`
    drc.innerHTML = `${Math.round(result.main.temp)}°C`

    drm.innerHTML= result.weather[0].description.toUpperCase()
    minmax.innerHTML=`${Math.round(result.main.temp_min)}°C /
    ${Math.round(result.main.temp_max)}°C `
    document.querySelector(".flag").src = `https://countryflagsapi.com/png/${result.sys.country}`;
    document.querySelector(".emoji").src=`https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
    wind.innerHTML=`${result.wind.speed}m/s<br>Wind Speed`
    hmm.innerHTML=`${result.main.humidity}%<br>Humidity`
    hss.innerHTML=`${result.main.feels_like}°C<br>Flees Like `
    image(result.weather[0].main)
    search.value="";
    
}



const searcH = document.getElementById('search')
searcH.addEventListener('keypress',setQuery)

function image(drm){
    const cityName2 = document.getElementById("cityName");
    const drc2 = document.getElementById("drc");
    const durm = document.getElementById("durm");
    const hsss = document.getElementById("hsss");
    const hss = document.getElementById("hss");
    const wind = document.getElementById("wind");
    const hmmnty = document.getElementById("hmmnty");
    switch(drm)

    { 
        case "Clear":
        case "Clear sky":
             document.body.style.background=`url('/Img/sun.jpg') no-repeat`
             cityName2.style.color="white";
             drc2.style.color="white";
             durm.style.color="white";
             hsss.style.color="white";
             hss.style.color="white";
             wind.style.color="white";
             hmmnty.style.color="white";
        break;
        case "Few clouds":
        case "Scattered clouds":
        case "Broken clouds":
        case "Overcast clouds":
        case "Clouds":
            document.body.style.background=`url('/Img/kapali.jpg') no-repeat`
            cityName2.style.color="black";
            drc2.style.color="black";
            durm.style.color="black";
            hsss.style.color="black";
            hss.style.color="black";
            wind.style.color="black";
            hmmnty.style.color="black";
        break;
        case "Cloudy":
        case "Partly cloudy":
            document.body.style.background=`url('/Img/parcalibulutli.jpg') no-repeat center `
            cityName2.style.color="black";
            drc2.style.color="black";
            durm.style.color="black";
            hsss.style.color="black";
            hss.style.color="black";
            wind.style.color="black";
            hmmnty.style.color="black";
        break;
        
        case "Shower rain":
        case "Light rain":
        case "Moderate rain":           
        case "Rain":
            document.body.style.background=`url('/Img/yagmurlu.jpg') no-repeat`
            cityName2.style.color="black";
            drc2.style.color="black";
            durm.style.color="black";
            hsss.style.color="black";
            hss.style.color="black";
            wind.style.color="black";
            hmmnty.style.color="black";
        break;
        case "Snow":
            document.body.style.background=`url('/Img/kar.jpg') no-repeat`
            cityName2.style.color="black";
            drc2.style.color="black";
            durm.style.color="black";
            hsss.style.color="black";
            hss.style.color="black";
            wind.style.color="black";
            hmmnty.style.color="black";
        break;
        case "Thunderstorm":
            document.body.style.background=`url('/Img/yildirim.jpg') no-repeat`
            cityName2.style.color="black";
            drc2.style.color="black";
            durm.style.color="black";
            hsss.style.color="black";
            hss.style.color="black";
            wind.style.color="black";
            hmmnty.style.color="black";
        break;
        case"Mist":
            document.body.style.background=`url('/Img/sisli.jpg') no-repeat`
            cityName2.style.color="black";
            drc2.style.color="black";
            durm.style.color="black";
            hsss.style.color="black";
            hss.style.color="black";
            wind.style.color="black";
            hmmnty.style.color="black";
        break;
            
    }
}