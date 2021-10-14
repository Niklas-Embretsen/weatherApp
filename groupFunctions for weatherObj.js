function get_Index_WeatherElements_EachDay(weatherObj) {
    let weatherElements = weatherObj.list;

    //#region Get the time for each weatherElement
    let time_WeatherElements = weatherElements.map(weatherElement => 
        {return getTime(weatherElement)});
    //#endregion

    //#region helpvariables for for-loop
    let previousDay = time_WeatherElements[0].getDate();
    let currentDay;
    let index_WeatherElements = [];
    let index_WeatherElements_EachDay = [];
    //#endregion
    for(let i = 0; i < time_WeatherElements.length; i++){
        currentDay = time_WeatherElements[i].getDate();
        if(currentDay == previousDay){
            index_WeatherElements.push(i);
        }
        else {
            index_WeatherElements_EachDay.push(index_WeatherElements);
            index_WeatherElements = [i];
            previousDay = currentDay;
        }

        if(i == time_WeatherElements.length - 1){
            index_WeatherElements_EachDay.push(index_WeatherElements);
        }
        
    }
    return index_WeatherElements_EachDay;
}