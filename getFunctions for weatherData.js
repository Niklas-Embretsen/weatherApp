function getLatitudeFrom_WeatherObj(weatherObj){
    return weatherObj.geometry.coordinates[0][1];
}

function getLongitudeFrom_WeatherObj(weatherObj){
    return weatherObj.geometry.coordinates[0][0];
}

function getIndexes_WhereValidTimeIs12(weatherObj){
    let timeSeries = weatherObj.timeSeries;

    //#region helpvariables for for-loop.
    let indexesWhere_ValidTimeIs12 = [];
    let validTimeOf_TimeSeriesElement = 0;//0 is arbitrary value and I just want to declare validTimeOf_TimeSeriesElement here.
    //#endregion
    for(let i = 0; i < timeSeries.length; i++) {
        validTimeOf_TimeSeriesElement = getValidTimeFrom_TimeSeriesElement(timeSeries[i]);
        // console.log(validTimeOf_TimeSeriesElement.toString());
        // console.log(i);
        if(validTimeOf_TimeSeriesElement.getUTCHours() == 12){

            indexesWhere_ValidTimeIs12.push(i);
        }
    }
    return indexesWhere_ValidTimeIs12
}

function getTemperatureFrom_TimeSeriesElement(timeSeries_Element){
    let parameters = timeSeries_Element.parameters;
    let indexForTemperature_InParameters;
    let counter = 0;
    while(parameters[counter].name != "t"){
        counter++;
    }
    indexForTemperature_InParameters = counter;

    return timeSeries_Element.parameters[counter].values[0];
}

function getValidTimeFrom_TimeSeriesElement(timeSeries_Element){
    let validTimeString = timeSeries_Element.validTime;
    let validTime_DateObj = new Date(Date.parse(validTimeString));
    return validTime_DateObj;
}

function getWeatherIcon_From_WeatherSymbolNumber(weatherSymbolNumber){
    switch(weatherSymbolNumber){
        case(1):
        //1	Clear sky
            return "<i class='fas fa-sun'></i>"
        case(2):
        //2	Nearly clear sky
            return "<i class='fas fa-sun'></i>"
        case(3):
        //3	Variable cloudiness
            return '<i class="fas fa-cloud-sun"></i>';
        case(4):
        //4	Halfclear sky
            return '<i class="fas fa-cloud-sun"></i>';
        case(5):
        //5	Cloudy sky
            return '<i class="fas fa-cloud"></i>';
        case(6):
        //6	Overcast
            return '<i class="fas fa-cloud"></i>';
        case(7):
        //7	Fog
            return '<i class="fas fa-smog"></i>';
        case(8):
        //8	Light rain showers
            return '<i class="fas fa-cloud-rain"></i>';
        case(9):
        //9	Moderate rain showers
            return '<i class="fas fa-cloud-rain"></i>';
        case(10):
        //10 Heavy rain showers
            return '<i class="fas fa-cloud-showers-heavy"></i>';
        case(11):
        //11 Thunderstorm
            return '<i class="fas fa-poo-storm"></i>';
        case(12):
        //12 Light sleet showers
            return '<i class="fas fa-cloud-rain"></i>';
        case(13):
        //13 Moderate sleet showers
            return '<i class="fas fa-cloud-rain"></i>';
        case(14):
        //14 Heavy sleet showers
            return '<i class="fas fa-cloud-showers-heavy"></i>';
        case(15):
        //15 Light snow showers
            return '<i class="fas fa-snowflake"></i>';
        case(16):
        //16 Moderate snow showers
            return '<i class="fas fa-snowflake"></i>';
        case(17):
        //17 Heavy snow showers
            return '<i class="fas fa-snowflake"></i>';
        case(18):
        //18 Light rain
            return '<i class="fas fa-cloud-rain"></i>';
        case(19):
        //19 Moderate rain
            return '<i class="fas fa-cloud-rain"></i>';
        case(20):
        //20 Heavy rain
            return '<i class="fas fa-cloud-showers-heavy"></i>';
        case(21):
        //21 Thunder
            return '<i class="fas fa-poo-storm"></i>';
        case(22):
        //22 Light sleet
            return '<i class="fas fa-cloud-rain"></i>';
        case(23):
        //23 Moderate sleet
            return '<i class="fas fa-cloud-rain"></i>';
        case(24):
        //24 Heavy sleet
            return '<i class="fas fa-cloud-showers-heavy"></i>';
        case(25):
        //25 Light snowfall
            return '<i class="fas fa-snowflake"></i>';
        case(26):
        //26 Moderate snowfall   
            return '<i class="fas fa-snowflake"></i>';
        case(27):
        //27 Heavy snowfall
            return '<i class="fas fa-snowflake"></i>';

    }
}

function getWeatherSymbolFrom_TimeSeriesElement(timeSeries_Element){
    return timeSeries_Element.parameters[18].values[0];
}

function getWindSpeedFrom_TimeSeriesElement(timeSeries_Element){
    //Windspeed seems to be placed on different indexes (in "timeSeries_Element.parameters") for different timeSeries. 
    //Therefore searching for which index that windspeed is placed on is necessary.
    let parameters = timeSeries_Element.parameters;
    for (let i=0; i < parameters.length; i++){
        if(parameters[i].name == "ws"){
            return parameters[i].values[0];
        }
    }
}