// const APP_ID = "36dadc6253816027f46d1f8048c05627";
// const searchInput = document.querySelector("#search-input");

// searchInput.addEventListener("change", (e) => {
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}`
//   ).then(async (res) => {
//     const data = await res.json();
//     console.log("[Search Input]", data);
//   });
// });
// document.addEventListener("DOMContentLoaded", function () {
const APP_ID = "36dadc6253816027f46d1f8048c05627";
const searchInput = document.querySelector("#search-input");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const temperature = document.querySelector(".temperature");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const DEFAULT_VALUE = "Not found";
const weatherIcon = document.querySelector(".weather-icon");

if (searchInput) {
  searchInput.addEventListener("change", (e) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&lang=vi`
    )
      .then(async (res) => {
        const data = await res.json();
        console.log("[Search Input]", data);
        cityName.innerHTML = data.name || DEFAULT_VALUE;
        cityName.innerHTML = '<div className="on-click"></div>';
        weatherIcon.setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );
        temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
        sunset.innerHTML =
          moment.unix(data.sys.sunset).format("H:mm") || DEFAULT_VALUE;
        humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
        windSpeed.innerHTML =
          (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE; // đổi m/s sang km/h
      })
      .catch(function () {
        console.log("message error");
      });
  });
} else {
  console.log("Search input element not found");
}
// });
