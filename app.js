let fetchdata = () => {


let search = document.getElementById("search_weather");
let val = search.value;

let api = fetch(`https://goweather.herokuapp.com/weather/${val}`);

let temp = document.getElementById("temper");
let wethDetail = document.getElementById("wethDetail");
let winds = document.getElementById("wind");

let t1temp = document.getElementById("t1temp");
let t2temp = document.getElementById("t2temp");
let t3temp = document.getElementById("t3temp");

let t1wind = document.getElementById("t1wind");
let t2wind = document.getElementById("t2wind");
let t3wind = document.getElementById("t3wind");

api.then((res)=>{
    return res.json();
}).then((res)=>{
    
    let weath = res;

    let tem = weath.temperature;
    let win = weath.wind;
    let detail = weath.description;
    wethDetail.textContent = detail;

    if(wethDetail.textContent == "Sunny"){
        document.querySelector(".weathercont").Style.backgroundImage = 'url(sunny.jpg)';

    }

    else if(wethDetail.textContent == "Partly cloudy"){
        document.querySelector(".weathercont").style.backgroundImage = 'url(cloudy.mp4)';
    }

    else if(wethDetail.textContent == "Heavy Snow"){
        document.querySelector(".weathercont").style.backgroundImage = 'url(snow.gif)';
    }

    else if(wethDetail.textContent == "Light rain shower"){
        document.querySelector(".weathercont").style.backgroundImage = 'url(rain.gif)';
    }

    else if(wethDetail.textContent == "Clear"){
        document.querySelector(".weathercont").style.backgroundImage = 'url(clear.gif)';
    }

    else{
        console.log("not found");
    }

    temp.innerHTML = tem;
    winds.innerHTML = 'Wind ' + win;

    let forca = weath.forecast;
    let day1 = forca[0]
    let day2 = forca[1]
    let day3 = forca[2]

    let d1 = `${day1.day} ${day1.temperature} ${day1.wind}`;
    t1temp.textContent = day1.temperature;
    t1wind.textContent = day1.wind;

    let d2 = `${day2.day} ${day2.temperature} ${day2.wind}`;
    t2temp.textContent = day2.temperature;
    t2wind.textContent = day2.wind;

    let d3 = `${day3.day} ${day3.temperature} ${day3.wind}`;
    t3temp.textContent = day3.temperature;
    t3wind.textContent = day3.wind;

})

}



let inp = document.getElementById("search_weather");

inp.addEventListener("click", ()=>{

    if(inp.style.width == "80%"){
        inp.style.width = "30%";
    }
    else{
        inp.style.width = "80%";
    }
})