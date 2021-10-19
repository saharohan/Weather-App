const apikey = "e3d4b0c9458ac8d1516793d25122ae7f";

const weather = async (city) => {
  try {
    const req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    );
    const res = await req.json();
    console.log(res);

    display(res);
    if (res.temperature === "") {
      alert("INVALID INPUT");
      flag = false;
    }
    if (res.message) {
      alert(res.message);
    }
  } catch (error) {
    alert("error");
  }
};
const display = (data) => {
  if (data) {
    const time = data.dt;

    const date_t = new Date(parseInt(time * 1000));
    var options = { hour: "numeric", minute: "numeric" };
    const timestr_t = new Intl.DateTimeFormat("en-US", options).format(date_t);

    const sunrise = data.sys.sunrise;
    const date_sr = new Date(parseInt(sunrise * 1000));
    var options = { hour: "numeric", minute: "numeric" };
    const timestr_sr = new Intl.DateTimeFormat("en-US", options).format(
      date_sr
    );

    const sunset = data.sys.sunset;
    const date_ss = new Date(sunset * 1000);

    const timestr_ss = new Intl.DateTimeFormat("en-US", options).format(
      date_ss
    );

    const k = data.main.temp;
    const k2 = data.main.feels_like;
    const KtoC = Math.floor(k - 273.15);
    const KtoC2 = Math.floor(k2 - 273.15);
    const updatetemp = document.getElementsByClassName("temp");
    const updateplace = document.getElementsByClassName("description2");
    const updateicon = document.getElementsByClassName("conditions");
    const update2 = document.getElementsByClassName("location new1");
    const update3 = document.getElementsByClassName("location new2");
    const update4 = document.getElementsByClassName("location new3");
    const update5 = document.getElementsByClassName("description");
    const update6 = document.getElementsByClassName("conditionsbox21");
    const update7 = document.getElementsByClassName("conditionsbox22");
    const update8 = document.getElementsByClassName("conditionsbox23");

    updatetemp[0].innerText = `${KtoC}°C   `;
    updateplace[0].innerText = `${data.name}`;
    updateicon[0].innerHTML = ` <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />`;
    update3[0].innerText = `Humidity : ${data.main.humidity}%`;
    update4[0].innerText = `Wind Speed : ${data.wind.speed} km/h`;
    update5[0].innerText = `${data.weather[0].description}`;
    update2[0].innerText = `Feels Like : ${KtoC2} °C`;
    update7[0].innerText = `Sunrise :  ${timestr_sr}`;
    update8[0].innerText = `Sunset : ${timestr_ss}`;
    update6[0].innerText = `Time: ${timestr_t}`;
  }
};

// const weather = (city) => {
//   fetch(`https://goweather.herokuapp.com/weather/${city}`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     })
//     .catch((error) => console.log(error));
// };\

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = place.value;

  if (city) {
    weather(city);
    place.value = "";
  } else {
    alert("Please enter Location");
  }
});
