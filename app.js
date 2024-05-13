
const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";

    if (data.weather[0] .main == 'Clouds'){
        weatherIcon.src = "images/clouds.png"
    }    
    else if (data.weather[0] .main == 'Clear'){
        weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0] .main == 'Rain'){
        weatherIcon.src = "images/rain.png"
    }
    else if (data.weather[0] .main == 'Drizzle'){
        weatherIcon.src = "images/drizzle.png"
    }
    else if (data.weather[0] .main == 'Mist'){
        weatherIcon.src = "images/mist.png"
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})



// <!-- this code is a 2nd step that i need to learn in future -->
//     const apiKey = "";
//     const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//     const searchBox = document.querySelector(".search input");
//     const searchBtn = document.querySelector(".search button");

//     async function checkWeather(city){
//         const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//         var data = await response.json();
//         console.log(data);
//         document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
//         document.querySelector('.city').innerHTML = data.name;
//         document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
//         document.querySelector('.humidity').innerHTML = data.main.humidity + "%";


//     }

//     searchBtn.addEventListener("click", ()=>{
//         checkWeather(searchBox.value);
//     } )


// <!-- this code is a 1st step that i need to learn in future -->
//     const apiKey = "";
//     const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=dhaka";

//     async function checkWeather(){
//         const response = await fetch(apiUrl + `&appid=${apiKey}`);
//         var data = await response.json();
//         console.log(data);
//         document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
//         document.querySelector('.city').innerHTML = data.name;
//         document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
//         document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
//     }
//     checkWeather();
