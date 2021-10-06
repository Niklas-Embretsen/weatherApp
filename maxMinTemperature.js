function getTemperatures_GroupedByDay(weatherObj, firstDay, lastDay){
    //I'll explain the code below with an example.
    //Lets say that weatherObj contains this information.(Example below uses a simplified structure of "timeSeries".)
    //weatherObj.timeSeries = [
    //timeSerie0 = (date: 2021-10-12T15:00, temp: 11.5 C),
    //timeSerie1 = (date: 2021-10-12T17:00, temp: 7.6 C),
    //timeSerie2 = (date: 2021-10-13T11:00, temp: 11.5 C),
    //timeSerie3 = (date: 2021-10-13T18:00, temp: 8.3 C),
    //timeSerie4 = (date: 2021-10-13T20:00, temp: 12.1 C), 
    //timeSerie5 = (date: 2021-10-14T12:00, temp: 7.5 C),
    //timeSerie6 = (date: 2021-10-14T17:00, temp: 9.6 C)]
    //I write what the result for this example as comments below each codeline
    let indexes_GroupedByDay = groupIndexes_BySameDay(weatherObj);
    //indexes_GroupedByDay = [[0, 1], [2, 3, 4], [5, 6]];
    let indexes_FirstToLastDay = indexes_GroupedByDay.slice(firstDay, lastDay+1);
    //If firstDay=1 and lastDay=2
    //indexes_FirstToLastDay = [[2, 3, 4], [5, 6]]
    let temperatures_FirstToLastDay = indexes_FirstToLastDay.map(indexesFor1Day => {
        //The "outer map" take [[2, 3, 4], [5, 6]] as its "mapping array".
        //[2, 3, 4] and [5, 6] would be the "mapping elements"
        //The result for this mapping would be [[11.5, 8.3, 12.1], [7.5, 9.6]].
        return indexesFor1Day.map(index => { 
            //The "inner map" is taking the "outer map"-"mapping elements" as its array.
        //There would be 2 separate mappings in this case.
        //  The First "mapping" would be done with [2, 3, 4] as the "mapping array".
        //The "mapping elements" would be 2, 3, 4.
        //The result from this "mapping" would be [11.5, 8.3, 12.1].
        //  The second mapping would be done with [5, 6] as the "mapping array".
        //The "mapping elements" would be 5, 6.
        //The result from this mapping would be [7.5, 9.6].
            return getTemperatureFrom_TimeSeriesElement(weatherObj.timeSeries[index]);
        });

        
    })
    return temperatures_FirstToLastDay;
    //temperatures_FirstToLastDay = [[11.5, 8.3, 12.1], [7.5, 9.6]].

}

function getMaxTemperature_ForEachDay(weatherObj, firstDay, lastDay){

    let temperaturesFor_EachDay = getTemperatures_GroupedByDay(weatherObj, firstDay, lastDay);
    //For example let's say 
    //firstDay = 1, lastDay = 2 and
    //temperaturesFor_EachDay(weatherObj, 1, 2) = [[11.5, 8.3, 12.1], [7.5, 9.6]].
    //The same as in the example for "getTemperatures_GroupedByDay".

    let maxTemperature_EachDay = temperaturesFor_EachDay.map(temperaturesFor_1Day => {
        return Math.max(...temperaturesFor_1Day);
        //the "mapping elements"
        //[11.5, 8.3, 12.1] and [7.5, 9.6] are "mapped" to
        //12.1 and 9.6 resp.
        //The result of the "mapping" is [12.1, 9.6].

    });
    return maxTemperature_EachDay;
    //maxTemperature_EachDay = [12.1, 9.6]
    //for the example.
}

function getMinTemperature_ForEachDay(weatherObj, firstDay, lastDay){

    let temperaturesFor_EachDay = getTemperatures_GroupedByDay(weatherObj, firstDay, lastDay);
    //For example let's say 
    //firstDay = 1, lastDay = 2 and
    //temperaturesFor_EachDay(weatherObj, 1, 2) = [[11.5, 8.3, 12.1], [7.5, 9.6]].
    //The same as in the example for "getTemperatures_GroupedByDay".

    let minTemperature_EachDay = temperaturesFor_EachDay.map(temperaturesFor_1Day => {
        return Math.min(...temperaturesFor_1Day);
        //the "mapping elements"
        //[11.5, 8.3, 12.1] and [7.5, 9.6] are "mapped" to
        //8.3 and 7.5 resp.
        //The result of the "mapping" is [8.3, 7.5].

    });
    return minTemperature_EachDay;
    //minTemperature_EachDay = [8.3, 7.5]
    //for the example.
}