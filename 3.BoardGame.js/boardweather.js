const API_KEY = "14b5b66cc716410d017d9bd77a4015e6";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response)=> response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    })


}
function onGeoError(){
    alert("위치 정보는 날씨를 알려주려고 얻는 거에요 싫음 말아요 흥");

}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);