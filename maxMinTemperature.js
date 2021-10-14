function get_Temperatures_EachDay(weatherObj, firstDay, lastDay){
    let weatherElements = weatherObj.list;

    //I'll explain the code below with an example.
    //Lets say that weatherObj contains this information.(Example below uses a simplified structure of "weatherElement_List".)
    //weatherObj.weatherElement_List = [
    //weatherElement0 = (date: 2021-10-12T15:00, temp: 11.5 C),
    //weatherElement1 = (date: 2021-10-12T17:00, temp: 7.6 C),
    //weatherElement2 = (date: 2021-10-13T11:00, temp: 11.5 C),
    //weatherElement3 = (date: 2021-10-13T18:00, temp: 8.3 C),
    //weatherElement4 = (date: 2021-10-13T20:00, temp: 12.1 C), 
    //weatherElement5 = (date: 2021-10-14T12:00, temp: 7.5 C),
    //weatherElement6 = (date: 2021-10-14T17:00, temp: 9.6 C)]
    //I write what the result for this example as comments below each codeline
    let index_WeatherElements_EachDay = get_Index_WeatherElements_EachDay(weatherObj);
    //index_WeatherElements_EachDay = [[0, 1], [2, 3, 4], [5, 6]];
    let index_WeatherElements_FirstToLastDay = index_WeatherElements_EachDay.slice(firstDay, lastDay+1);
    //If firstDay=1 and lastDay=2
    //index_WeatherElements_FirstToLastDay = [[2, 3, 4], [5, 6]]
    let temperature_WeatherElements_FirstToLastDay = 
        index_WeatherElements_FirstToLastDay.map(index_WeatherElements => {
        //The "outer map" take [[2, 3, 4], [5, 6]] as its "mapping array".
        //[2, 3, 4] and [5, 6] would be the "mapping elements"
        //The result for this mapping would be [[11.5, 8.3, 12.1], [7.5, 9.6]].
        return index_WeatherElements.map(index_WeatherElement => { 
                //The "inner map" is taking the "outer map"-"mapping elements" as its array.
            //There would be 2 separate mappings in this case.
            //  The First "mapping" would be done with [2, 3, 4] as the "mapping array".
            //The "mapping elements" would be 2, 3, 4.
            //The result from this "mapping" would be [11.5, 8.3, 12.1].
            //  The second mapping would be done with [5, 6] as the "mapping array".
            //The "mapping elements" would be 5, 6.
            //The result from this mapping would be [7.5, 9.6].
            let weatherElement = weatherElements[index_WeatherElement];
            return getTemperature(weatherElement);
        });

        
    })
    return temperature_WeatherElements_FirstToLastDay;
    //temperature_WeatherElements_FirstToLastDay = [[11.5, 8.3, 12.1], [7.5, 9.6]].

}

function get_MaxTemperature_EachDay(weatherObj, firstDay, lastDay){

    let temperatures_EachDay = get_Temperatures_EachDay(weatherObj, firstDay, lastDay);
    //For example let's say 
    //firstDay = 1, lastDay = 2 and
    //temperatures_EachDay(weatherObj, 1, 2) = [[11.5, 8.3, 12.1], [7.5, 9.6]].
    //The same as in the example for "get_Temperatures_EachDay".

    let maxTemperature_EachDay = temperatures_EachDay.map(temperatures_For1Day => {
        return Math.max(...temperatures_For1Day);
        //the "mapping elements"
        //[11.5, 8.3, 12.1] and [7.5, 9.6] are "mapped" to
        //12.1 and 9.6 resp.
        //The result of the "mapping" is [12.1, 9.6].

    });
    return maxTemperature_EachDay;
    //maxTemperature_EachDay = [12.1, 9.6]
    //for the example.
}

function get_MinTemperature_EachDay(weatherObj, firstDay, lastDay){

    let temperatures_EachDay = get_Temperatures_EachDay(weatherObj, firstDay, lastDay);
    //For example let's say 
    //firstDay = 1, lastDay = 2 and
    //temperatures_EachDay(weatherObj, 1, 2) = [[11.5, 8.3, 12.1], [7.5, 9.6]].
    //The same as in the example for "get_Temperatures_EachDay".

    let minTemperature_EachDay = temperatures_EachDay.map(temperatures_For1Day => {
        return Math.min(...temperatures_For1Day);
        //the "mapping elements"
        //[11.5, 8.3, 12.1] and [7.5, 9.6] are "mapped" to
        //8.3 and 7.5 resp.
        //The result of the "mapping" is [8.3, 7.5].

    });
    return minTemperature_EachDay;
    //minTemperature_EachDay = [8.3, 7.5]
    //for the example.
}