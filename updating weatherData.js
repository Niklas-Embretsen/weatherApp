function loadDataInto_MainWeatherDiv(weatherObj, location) {
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
    let timeSeries_CurrentDay = weatherObj.timeSeries[0];
    //"timeSeries_CurrentDay" contains weatherData for the closest hour. 
    //For example if weatherData was requested 19:30 then the first timeSeries-element would give data for 20:00.

    let currentTime = getValidTimeFrom_TimeSeriesElement(timeSeries_CurrentDay);
    let longitude = weatherObj.geometry.coordinates[0][0];
    let latitude = weatherObj.geometry.coordinates[0][1];
    let weatherSymbolNumber = getWeatherSymbolFrom_TimeSeriesElement(timeSeries_CurrentDay);
    let minTemperature_CurrentDay = getMinTemperature_ForEachDay(weatherObj, 0, 1)[0];
    let maxTemperature_CurrentDay = getMaxTemperature_ForEachDay(weatherObj, 0, 1);
    //#endregion

    //#region Set weatherInfo-paragraphs in weatherDiv
    dateParagraph.innerHTML = currentTime.toDateString();
    timeParagraph.innerHTML = currentTime.toLocaleTimeString();
    locationParagraph.innerHTML = location;
    coordinatesParagraph.innerHTML = `(longitude, latitude):<br>(${longitude}, ${latitude})`;
    tempParagraph.innerHTML = getTemperatureFrom_TimeSeriesElement(timeSeries_CurrentDay) + "&#8451";
    //&#8451 ads "Celsius degree"-character
    windspeedParagraph.innerHTML = getWindSpeedFrom_TimeSeriesElement(timeSeries_CurrentDay) + " m/s";
    minTemperatureParagraph.innerHTML = "min temperature: " + minTemperature_CurrentDay + "&#8451";
    maxTemperatureParagraph.innerHTML = "max temperature: " + maxTemperature_CurrentDay + "&#8451";
    //#endregion

    paintCanvas_From_WeatherSymbolNumber(weatherSymbolNumber);
}

function loadData_IntoWeatherDiv(weatherDiv, timeSeriesElement){
    let DateObj = getValidTimeFrom_TimeSeriesElement(timeSeriesElement);
    let weatherSymbolNumber = getWeatherSymbolFrom_TimeSeriesElement(timeSeriesElement);
    weatherDiv.getElementsByClassName("dayParagraph")[0].innerHTML = DateObj.toDateString();
    weatherDiv.getElementsByClassName("timeParagraph")[0].innerHTML = DateObj.toLocaleTimeString();
    weatherDiv.getElementsByClassName("temperatureParagraph")[0].innerHTML = getTemperatureFrom_TimeSeriesElement(timeSeriesElement) + "&#8451";
    //&#8451 is hex-code for  "degree celsius"-character
    weatherDiv.getElementsByClassName("windspeedParagraph")[0].innerHTML = getWindSpeedFrom_TimeSeriesElement(timeSeriesElement) + " m/s";
    weatherDiv.getElementsByClassName("weatherSymbolParagraph")[0].innerHTML = getWeatherIcon_From_WeatherSymbolNumber(weatherSymbolNumber);
}

function updateSmall_WeatherDivs(weatherObj){
    let indexesOfTimeSeries_WhereValidTimeIs12 = getIndexes_WhereValidTimeIs12(weatherObj);
    console.log(indexesOfTimeSeries_WhereValidTimeIs12);

    let timeSeries = weatherObj.timeSeries;

    let earliestTimeSeries = timeSeries[0];

    let dateObj_EarliestTimeSeries = getValidTimeFrom_TimeSeriesElement(earliestTimeSeries);

    let hours_FirstTimeSeries = dateObj_EarliestTimeSeries.getHours();
    let timeSeriesIndexes_WhenTimeIs12_OnDay2UntilDay6;

    if(hours_FirstTimeSeries <= 12){
        timeSeriesIndexes_WhenTimeIs12_OnDay2UntilDay6 = indexesOfTimeSeries_WhereValidTimeIs12.slice(1, 6);
    }
    else{
        timeSeriesIndexes_WhenTimeIs12_OnDay2UntilDay6 = indexesOfTimeSeries_WhereValidTimeIs12.slice(0,5);
    }

    let minTemperaturesFrom_Day2UntilDay6 = getMinTemperature_ForEachDay(weatherObj, 1, 6);
    let maxTemperaturesFrom_Day2UntilDay6 = getMaxTemperature_ForEachDay(weatherObj, 1, 6);
    let allSmallWeatherDivs = document.querySelectorAll("#weatherDivContainer div");
    let smallWeatherDiv;
    let dateObj_ForDayI;
    let timeSerie_ForDayI;
    let timeSerieIndex_WithWeatherData_ForSmallWeatherDiv;
    let weatherSymbolNumber_ForDayI;
    for(let i = 0; i < 5; i++){
        smallWeatherDiv = allSmallWeatherDivs[i];
        timeSerieIndex_WithWeatherData_ForSmallWeatherDiv = timeSeriesIndexes_WhenTimeIs12_OnDay2UntilDay6[i];
        timeSerie_ForDayI = timeSeries[timeSerieIndex_WithWeatherData_ForSmallWeatherDiv];
        dateObj_ForDayI = getValidTimeFrom_TimeSeriesElement(timeSerie_ForDayI);
        weatherSymbolNumber_ForDayI = getWeatherSymbolFrom_TimeSeriesElement(timeSerie_ForDayI);
        smallWeatherDiv.getElementsByClassName("dayParagraph")[0].innerHTML = dateObj_ForDayI.toDateString();
        smallWeatherDiv.getElementsByClassName("timeParagraph")[0].innerHTML = dateObj_ForDayI.toLocaleTimeString();
        smallWeatherDiv.getElementsByClassName("temperatureParagraph")[0].innerHTML = getTemperatureFrom_TimeSeriesElement(timeSerie_ForDayI) + "&#8451";
        //&#8451 is hex-code for  "degree celsius"-character
        smallWeatherDiv.getElementsByClassName("windspeedParagraph")[0].innerHTML = getWindSpeedFrom_TimeSeriesElement(timeSerie_ForDayI) + " m/s";
        smallWeatherDiv.getElementsByClassName("weatherSymbolParagraph")[0].innerHTML = getWeatherIcon_From_WeatherSymbolNumber(weatherSymbolNumber_ForDayI);
        smallWeatherDiv.getElementsByClassName("minTemperatureParagraph")[0].innerHTML = minTemperaturesFrom_Day2UntilDay6[i] + "&#8451";
        smallWeatherDiv.getElementsByClassName("maxTemperatureParagraph")[0].innerHTML = maxTemperaturesFrom_Day2UntilDay6[i] + "&#8451";
    }
}

async function updateWeatherData_WithInputFields() {
    //#region Read values from input fields for longitude, latitude and location.
    let longitudeInput = document.getElementById("longitude");
    let latitudeInput = document.getElementById("latitude");

    let longitudeVal = longitudeInput.value;
    let latitudeVal = latitudeInput.value;

    let location_InputField = document.getElementById("location_InputField");
    let location = location_InputField.value;
    if(location == ""){
    location = "Location not specified";
    }
    //#endregion

    updateWeatherData(longitudeVal, latitudeVal, location);
}

async function updateWeatherData(longitude, latitude, location){

    let url_ForWeather = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/" + 
        longitude + "/lat/" + latitude + "/data.json";

    fetch(url_ForWeather)
        .then(weatherData => weatherData.text())
        .then(weatherData_Text => {
            //#region Convert "weatherData_Text" into a JSON-object called "weatherObj".
            let weatherObj = JSON.parse(weatherData_Text);
            //#endregion

            updateSmall_WeatherDivs(weatherObj);
            
            loadDataInto_MainWeatherDiv(weatherObj, location);
            currentLocation_Glob = create_LocationClassObj_FromWeatherObj(weatherObj, location);

        })
        .catch(error => {alert(error);});
}