function update_MainWeatherDiv(weatherObj) {
    //#region Select weatherDiv-paragraphs
    let dateParagraph = document.getElementById("date_CurrentDay");
    let timeParagraph = document.getElementById("time_CurrentDay");
    let locationParagraph = document.getElementById("location_CurrentDay");
    let coordinatesParagraph = document.getElementById("coordinates_CurrentDay");
    let tempParagraph = document.getElementById("temp_CurrentDay");
    let windspeedParagraph = document.getElementById("windspeed_CurrentDay");
    let minTemperatureParagraph = document.getElementById("minTemperature_CurrentDay");
    let maxTemperatureParagraph = document.getElementById("maxTemperature_CurrentDay");
    //#endregion

    //#region Helpvariables
    let weatherElement_CurrentDay = weatherObj.list[0];
    //"weatherElement_CurrentDay" contains weatherData for the closest hour. 

    let currentTime = getTime(weatherElement_CurrentDay);
    // let longitude = getLongitude(weatherElement_CurrentDay);
    let longitude = getLongitude(weatherObj);
    
    // let latitude = getLatitude(weatherElement_CurrentDay);
    let latitude = getLatitude(weatherObj);
    
    let weatherSymbolNumber = getWeatherSymbol(weatherElement_CurrentDay);
    let minTemperature_CurrentDay = get_MinTemperature_EachDay(weatherObj, 0, 0)[0];
    let maxTemperature_CurrentDay = get_MaxTemperature_EachDay(weatherObj, 0, 0)[0];
    //#endregion

    //#region Set weatherInfo-paragraphs in weatherDiv
    dateParagraph.innerHTML = currentTime.toDateString();
    timeParagraph.innerHTML = currentTime.toLocaleTimeString();
    locationParagraph.innerHTML = getCityName(weatherObj);
    coordinatesParagraph.innerHTML = `(longitude, latitude):<br>(${longitude}, ${latitude})`;
    tempParagraph.innerHTML = getTemperature(weatherElement_CurrentDay) + "&#8451";
    //&#8451 ads "Celsius degree"-character
    windspeedParagraph.innerHTML = getWindSpeed(weatherElement_CurrentDay) + " m/s";
    minTemperatureParagraph.innerHTML = "min temperature: " + minTemperature_CurrentDay + "&#8451";
    maxTemperatureParagraph.innerHTML = "max temperature: " + maxTemperature_CurrentDay + "&#8451";
    //#endregion

    paintCanvas_From_WeatherIcon(weatherSymbolNumber);
}

function update_SmallWeatherDivs(weatherObj){

    let weatherElements = weatherObj.list;
    let firstWeatherElement = weatherElements[0];
    let time_FirstWeatherElement = getTime(firstWeatherElement);
    let hours_FirstWeatherElement = time_FirstWeatherElement.getHours();
    //If for example "firstWeatherElement" had weather-info for "2021-10-09 17:00", then 
    //"hours_FirstWeatherElement" = 17. 

    //#region (Find indexes of WeatherElements)  (Where the time is 12:00) (For all days available)
    let index_WeatherElement_WhereTime12_EachDay = get_Index_WeatherElement_WhereTime12_EachDay(weatherObj);
    //#endregion
    
    //#region (Find indexes of WeatherElements)  (Where the time is 12:00) (From day2 until day5)
    let index_WeatherElement_WhereTime12_Day2UntilDay5;
    if(hours_FirstWeatherElement <= 12){
        index_WeatherElement_WhereTime12_Day2UntilDay5 = index_WeatherElement_WhereTime12_EachDay.slice(1, 5);
    }
    else{
        index_WeatherElement_WhereTime12_Day2UntilDay5 = index_WeatherElement_WhereTime12_EachDay.slice(0,4);
    }
    //#endregion

    //#region (Find min- and max-temperatures for each day)  (From day2 until day5)
    let minTemperature_Day2Untilday5 = get_MinTemperature_EachDay(weatherObj, 1, 4);
    let maxTemperature_Day2Untilday5 = get_MaxTemperature_EachDay(weatherObj, 1, 4);
    //#endregion

    //#region HelpVariables for "for-loop".
    let allSmallWeatherDivs = document.querySelectorAll("#weatherDivContainer div");
    let smallWeatherDivI;
    let time_SmallWeatherDivI;
    let weatherElement_SmallWeatherDivI;
    let index_WeatherElement_SmallWeatherDivI;
    let weatherSymbolNumber_SmallWeatherDivI;
    //#endregion
    for(let i = 0; i < 4; i++){
        smallWeatherDivI = allSmallWeatherDivs[i];

        index_WeatherElement_SmallWeatherDivI = index_WeatherElement_WhereTime12_Day2UntilDay5[i];
        weatherElement_SmallWeatherDivI = weatherElements[index_WeatherElement_SmallWeatherDivI];
        time_SmallWeatherDivI = getTime(weatherElement_SmallWeatherDivI);

        weatherSymbolNumber_SmallWeatherDivI = getWeatherSymbol(weatherElement_SmallWeatherDivI);
        //#region Update paragraphs in "smallWeatherDivI".
        smallWeatherDivI.getElementsByClassName("dayParagraph")[0].innerHTML = time_SmallWeatherDivI.toDateString();
        smallWeatherDivI.getElementsByClassName("timeParagraph")[0].innerHTML = time_SmallWeatherDivI.toLocaleTimeString();
        smallWeatherDivI.getElementsByClassName("temperatureParagraph")[0].innerHTML = getTemperature(weatherElement_SmallWeatherDivI) + "&#8451";
        //&#8451 is hex-code for  "degree celsius"-character
        smallWeatherDivI.getElementsByClassName("windspeedParagraph")[0].innerHTML = getWindSpeed(weatherElement_SmallWeatherDivI) + " m/s";
        smallWeatherDivI.getElementsByClassName("weatherSymbolParagraph")[0].innerHTML = get_FontAwesomeWeatherIcon(weatherSymbolNumber_SmallWeatherDivI);
        smallWeatherDivI.getElementsByClassName("minTemperatureParagraph")[0].innerHTML = "min temperature<br>" + minTemperature_Day2Untilday5[i] + "&#8451";
        smallWeatherDivI.getElementsByClassName("maxTemperatureParagraph")[0].innerHTML = "max temperature<br>" + maxTemperature_Day2Untilday5[i] + "&#8451";
        //#endregion
    }
}

async function update_Weather_WithInput_LongLat() {
    //#region Read values from input fields for longitude and latitude.
    let longitudeInput = document.getElementById("longitude_Input");
    let latitudeInput = document.getElementById("latitude_Input");

    let longitudeVal = longitudeInput.value;
    let latitudeVal = latitudeInput.value;
    //#endregion

    update_Weather_LongLat(longitudeVal, latitudeVal);
}

async function update_Weather_WithInput_City() {
    //#region Read values from input-field for cityName.
    let cityName_Input = document.getElementById("city_Input");
    let cityName = cityName_Input.value;
    //#endregion

    //#region Read values for input-field for country-code.
    let countryCode_Input = document.getElementById("countryCode");
    let countryCode;
    if(countryCode_Input.value == ""){
        countryCode = "SE";
    } else {
        countryCode = countryCode_Input.value;
    }
    //#endregion

    update_Weather_City(cityName, countryCode);
}

async function update_Weather_LongLat(longitude, latitude) {

    let url_ForWeather = 
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=48cd141d881e5d6dcf66c4675bdea5bf&units=metric`;

    fetch(url_ForWeather)
        .then(weatherData => weatherData.text())
        .then(weatherData_Text => {
            //#region create JSON-object "weatherObj"
            let weatherObj = JSON.parse(weatherData_Text);
            //#endregion

            //#region update weather
            update_MainWeatherDiv(weatherObj);
            update_SmallWeatherDivs(weatherObj);
            //#endregion

            //#region save current location in global variable "currentLocation_Glob"
            currentLocation_Glob = create_LocationClassObj_FromWeatherObj(weatherObj);
            //#endregion
        })
        .catch(error => {alert(error);});
}

async function update_Weather_City(city, countryCode) {

    let url_ForWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=48cd141d881e5d6dcf66c4675bdea5bf&units=metric`;
    
    fetch(url_ForWeather)
        .then(weatherData => weatherData.text())
        .then(weatherData_Text => {
            //#region create JSON-object "weatherObj"
            let weatherObj = JSON.parse(weatherData_Text);
            //#endregion

            //#region update weather
            update_MainWeatherDiv(weatherObj);
            update_SmallWeatherDivs(weatherObj);
            //#endregion

            //#region save current location in global variable "currentLocation_Glob"
            currentLocation_Glob = create_LocationClassObj_FromWeatherObj(weatherObj);
            //#endregion
        })
        .catch(error => {alert(error);});
}