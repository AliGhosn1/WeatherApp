const Submit = $("#SUBMIT");
const City = $("#City");
const MainImage = $("#MAINIMG");
const Temp = $("#TEMP");
const Status = $("#STATUS");
const Wind = $("#WINDSPEED h4");
const Humidity = $("#HUMIDITY h4");

const Success = $("#SUCCESS");
const Fail = $("#FAIL");

let currentCity = "";

Submit.click(update);

document.addEventListener("keydown", function keyClick(event){
    if(event.code == 'Enter')
        update();
});

function update(){
    currentCity = City.val();
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ currentCity +"&appid=826496d615e36f58884521124ad8a7c7&units=metric";
    fetch(url).then(response => response.json()).then( data => {
        if(data.cod === "404"){
            Success.css("display", "none");
            Fail.css("display", "block");
        }
        else{
            Fail.css("display", "none");
            Success.css("display", "block");
            MainImage.attr("src", "https://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png");
            Temp.text(Math.round(data.main.temp) + "°C");
            Status.text(data.weather[0].description);
            Wind.text(Math.round(data.wind.speed) + " Km/h");
            Humidity.text(Math.round(data.main.humidity) + "%");
            console.log(data);
        }
    });
};





