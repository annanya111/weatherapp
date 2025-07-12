function getWeather() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("weatherResult");

  if (city === "") {
    result.innerHTML = "Please enter a city name.";
    return;
  }

  // ✅ Dummy data for now
  result.innerHTML = `
    <h2>${city}</h2>
    <p>Temperature: 28 °C</p>
    <p>Weather: Clear Sky</p>
    <img src="https://openweathermap.org/img/wn/01d@2x.png" />
  `;
}

