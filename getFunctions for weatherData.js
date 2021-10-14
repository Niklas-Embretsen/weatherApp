function getLatitude(weatherObj){
    return weatherObj.city.coord.lat;
}

function getLongitude(weatherObj){
    return weatherObj.city.coord.lon;
}

function get_Index_WeatherElement_WhereTime12_EachDay(weatherObj){
    let weatherElement_List = weatherObj.list;

    //#region helpvariables for for-loop.
    let index_WeatherElements_WhereTime12 = [];
    let time_WeatherElement; 
    //#endregion
    for(let i = 0; i < weatherElement_List.length; i++) {
        time_WeatherElement = getTime(weatherElement_List[i]);
        if(time_WeatherElement.getHours() == 12){

            index_WeatherElements_WhereTime12.push(i);
        }
    }
    return index_WeatherElements_WhereTime12
}

function getTemperature(weatherElement){
    return weatherElement.main.temp;
}

function getTime(weatherElement){
    let time_WeatherElement = weatherElement.dt_txt;
    let dateObj_WeatherElement = new Date(Date.parse(time_WeatherElement));
    return dateObj_WeatherElement;
}

function get_FontAwesomeWeatherIcon(weatherIcon){
    switch(weatherIcon){
        case("01d"):
        //Clear sky
            return "<i class='fas fa-sun'></i>"
        case("01n"):
        //Clear sky
            return "<i class='fas fa-sun'></i>"

        case("02d"):
        //Few clouds
            return '<i class="fas fa-cloud-sun"></i>';
        case("02n"):
        //Few clouds
            return '<i class="fas fa-cloud-sun"></i>';
            
        case("03d"):
        //Scattered clouds
            return '<i class="fas fa-cloud"></i>';
        case("03n"):
        //Scattered clouds
            return '<i class="fas fa-cloud"></i>';

        case("04d"):
        //Broken clouds
            return '<i class="fas fa-cloud"></i>';
        case("04n"):
        //Broken clouds
            return '<i class="fas fa-cloud"></i>';

        case("09d"):
        //Shower rain
            return '<i class="fas fa-cloud-showers-heavy"></i>';
        case("09n"):
        //Shower rain
            return '<i class="fas fa-cloud-showers-heavy"></i>';
            
        case("10d"):
        //Rain
            return '<i class="fas fa-cloud-showers-heavy"></i>';
        case("10n"):
        //Rain
            return '<i class="fas fa-cloud-showers-heavy"></i>';

        case("11d"):
        //Thunderstorm
            return '<i class="fas fa-poo-storm"></i>';
        case("11n"):
        //Thunderstorm
            return '<i class="fas fa-poo-storm"></i>';

        case("13d"):
        //Snow
            return '<i class="fas fa-snowflake"></i>';
        case("13n"):
        //Snow
            return '<i class="fas fa-snowflake"></i>';

        case("50d"):
        //Mist
            return '<i class="fas fa-smog"></i>';
        case("50n"):
        //Mist
            return '<i class="fas fa-smog"></i>';
    }
}

function getWeatherSymbol(weatherElement){
    return weatherElement.weather[0].icon;
}

function getWindSpeed(weatherElement){
    return weatherElement.wind.speed;
}

function getCityName(weatherObj){
    let cityName = weatherObj.city.name;
    if(cityName == ""){
        return "No city at these coordinates"
    } else {
        return cityName;
    }
}