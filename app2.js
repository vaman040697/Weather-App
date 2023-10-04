let fetchdata = () => {
  let search = document.getElementById("search_weather");
  let val = search.value;

  let api = fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${val}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f7f818aa5emsh4fe59621105eb5ap16a4e3jsn08fadc8baecd',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  });

  let temp = document.getElementById("temper");
  let wethDetail = document.getElementById("wethDetail");
  let winds = document.getElementById("wind");

  let t1temp = document.getElementById("t1temp");
  let t2temp = document.getElementById("t2temp");
  let t3temp = document.getElementById("t3temp");

  let t1wind = document.getElementById("t1wind");
  let t2wind = document.getElementById("t2wind");
  let t3wind = document.getElementById("t3wind");

  api
    .then((res) => res.json())
    .then((weath) => {
      let tem = weath.current.temp_c;
      let win = weath.current.wind_kph;
      let detail = weath.current.condition.text;
      wethDetail.textContent = detail;

      if (wethDetail.textContent == "Sunny") {
        document.querySelector(".weathercont").style.backgroundImage = 'url(sunny.gif)';
      } else if (wethDetail.textContent == "Partly cloudy") {
        document.querySelector(".weathercont").style.backgroundImage = 'url(cloudy.avif)';
      } else {
        console.log("not found");
      }

      temp.innerHTML = tem;
      winds.innerHTML = 'Wind ' + win;

      let forecastData = weath.forecast.forecastday;

      let day1 = forecastData[0];
      let day2 = forecastData[1];
      let day3 = forecastData[2];

      t1temp.textContent = day1.day.avgtemp_c;
      t1wind.textContent = day1.day.maxwind_kph;

      t2temp.textContent = day2.day.avgtemp_c;
      t2wind.textContent = day2.day.maxwind_kph;

      t3temp.textContent = day3.day.avgtemp_c;
      t3wind.textContent = day3.day.maxwind_kph;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

let inp = document.getElementById("search_weather");

inp.addEventListener("click", () => {
  if (inp.style.width == "80%") {
    inp.style.width = "30%";
  } else {
    inp.style.width = "80%";
  }
});
