const apiKey = "b041f351841208b327770822e82f858c"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(`.search input`);
const searchBtn = document.querySelector(`.search button`);
const weatherIcon = document.querySelector(`.weatherIcon`);
const error = document.querySelector(`.error`);
const details = document.querySelector(`.details`);



async function checkWeather(city){
   try{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json()
    console.log(data)
    document.querySelector(`.cityName`).innerHTML = data.name ;
    document.querySelector(`.temp`).innerHTML= Math.round(data.main.temp) + "°C" ;
    document.querySelector(`.humidity`).innerHTML=data.main.humidity + "%";
    document.querySelector(`.wind`).innerHTML=data.wind.speed + "km/h";
   
    document.querySelector(".weather").style.display = "block"
    document.querySelector(".details").style.display = "flex"
    return data.weather[0].main
   }

   catch(err){
    document.querySelector(".weather").style.display = "none"
    document.querySelector(".details").style.display = "none"
    document.querySelector(".error").innerHTML = `<p>City Not Found</p>`

   }
}


searchBtn.addEventListener(`click`, ()=>{
    checkWeather(searchBox.value)  
    .then((res) => { 
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "img/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "img/clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "img/mist.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.png";
    }
})
.catch((err)=>{
 console.log(err)
})

})

// checkWeather()