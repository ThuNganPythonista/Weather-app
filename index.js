const APP_ID = "36dadc6253816027f46d1f8048c05627";
const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("change", (e) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}`
  ).then(async (res) => {
    const data = await res.json();
    console.log("[Search Input]", data);
  });
});
