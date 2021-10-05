// function getMaxTemperature(weatherObj, indexStartDay, indexLastDay){
//     let timeSeries = weatherObj.timeSeries;

//     let indexes_GroupedByDay = groupIndex_OfTimeSeries_BySameDay(weatherObj);
//     //For example there is info about the weather 12:00, 15:00, 20:00 on day 0.
//     //On day 1 there is info about the weather 16:00, 19:00.
//     //Then the "indexes_GroupedByDay" = [[0, 1, 2], [3, 4]].
//     let indexesForEachDay = indexes_GroupedByDay.slice(indexStartDay, indexLastDay);
//     let indexesOf1Day;
//     let temperaturesOf1Day;
//     let temperaturesForEachDay = [];
//     for(i = 0; i < indexesForEachDay.length; i++){
//         indexesOf1Day = indexesForEachDay[i];
//         temperaturesOf1Day = indexesOf1Day.map(index => {getTemperatureFrom_TimeSeriesElement(timeSeries[index])});
//         temperaturesForEachDay.push(temperaturesOf1Day);
//     }

//     let maxTemperatureEachDay = temperaturesForEachDay.map(temperaturesFor1Day => {Math.max(temperaturesFor1Day);});
//     let maxTemperature_ForAllDays = Math.max(maxTemperatureEachDay);
//     // let timeSeriesIndex_FromStartDay_UntilLastDay = indexesOfTimeSeries_GroupedByDay.slice(indexStartDay, indexLastDay);
//     // let temperaturesForIndexes_GroupedByDay = timeSeriesIndex_FromStartDay_UntilLastDay
//     // .map(timeSeriesIndex_For1Day => {getTemperaturesFrom_TimeSeriesIndexes(timeSeries, timeSeriesIndex_For1Day)});

// }

// function getTemperaturesFrom_TimeSeriesIndexes(timeSeries, timeSeriesIndexes){
//     let temperaturesForIndexes = timeSeriesIndexes.map(index => {getTemperatureFrom_TimeSeriesElement(timeSeries[index])});
//     return temperaturesForIndexes;
// }

function getTemperatures_GroupedByDay(weatherObj, index_FirstDay, index_LastDay){
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
    let indexes_FromFirstToLastDay = indexes_GroupedByDay.slice(index_FirstDay, index_LastDay);
    //If index_FirstDay=1 and index_LastDay=2
    //indexes_FromFirstToLastDay = [[2, 3, 4], [5, 6]]
    let temperatures_FromFirstToLastDay = indexes_FromFirstToLastDay.map(indexesFor1Day => {
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
    return temperatures_FromFirstToLastDay;
    //temperatures_FromFirstToLastDay = [[11.5, 8.3, 12.1], [7.5, 9.6]].

}

// function getMaxTemperature_For1Day(temperaturesFor_1Day){
//     return Math.max(temperaturesFor_1Day);
//     //For example 
//     //temperaturesFor_1Day = [11.5, 8.3, 12.1]
//     //Would return 12.1.
// }

function getMaxTemperature_ForEachDay(weatherObj, index_FirstDay, index_LastDay){

    let temperaturesFor_EachDay = getTemperatures_GroupedByDay(weatherObj, index_FirstDay, index_LastDay);
    //For example let's say 
    //index_FirstDay = 1, index_LastDay = 2 and
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

function getMaxTemperature_ForMultipleDays(weatherObj, index_FirstDay, index_LastDay){
    let maxTemperature_ForEachDay = getMaxTemperature_ForEachDay(weatherObj, index_FirstDay, index_LastDay);
    //For example let's say 
    //index_FirstDay = 1, index_LastDay = 2 and
    //getMaxTemperature_ForEachDay(weatherObj, 1, 2) = [12.1, 9.6].
    //The same value as in the example for "getMaxTemperature_ForEachDay".

    maxTemperature_ForMultipleDays = Math.max(...maxTemperature_ForEachDay);
    //maxTemperature_ForEachDay = [12.1, 9.6] =>
    //maxTemperature_ForMultipleDays = 12.1

    return maxTemperature_ForMultipleDays;
    //maxTemperature_ForMultipleDays = 12.1
}

// function getMinTemperature_For1Day(temperaturesFor_1Day){
//     return Math.min(temperaturesFor_1Day);
//     //For example 
//     //temperaturesFor_1Day = [11.5, 8.3, 12.1]
//     //Would return 8.3.
// }

// function getMinTemperature_ForEachDay(temperaturesFor_EachDay){
//     //For example lets say 
//     //temperaturesFor_EachDay = [[11.5, 8.3, 12.1], [7.5, 9.6]].

//     let minTemperature_EachDay = temperaturesFor_EachDay.map(temperaturesFor_1Day => {
//         Math.min(temperaturesFor_1Day);
//         //the "mapping elements"
//         //[11.5, 8.3, 12.1] and [7.5, 9.6] are "mapped" to
//         //8.3 and 7.5 resp.
//         //The result of the "mapping" is [8.3, 7.5].
        
//     })
//     return minTemperature_EachDay;
//     //minTemperature_EachDay = [8.3, 7.5]
//     //after this "reduce".
// }
function getMinTemperature_ForEachDay(weatherObj, index_FirstDay, index_LastDay){

    let temperaturesFor_EachDay = getTemperatures_GroupedByDay(weatherObj, index_FirstDay, index_LastDay);
    //For example let's say 
    //index_FirstDay = 1, index_LastDay = 2 and
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

function getMinTemperature_ForMultipleDays(weatherObj, index_FirstDay, index_LastDay){
    let minTemperature_ForEachDay = getMinTemperature_ForEachDay(weatherObj, index_FirstDay, index_LastDay);
    //For example let's say 
    //index_FirstDay = 1, index_LastDay = 2 and
    //getMinTemperature_ForEachDay(weatherObj, 1, 2) = [8.3, 7.5].
    //The same value as in the example for "getMinTemperature_ForEachDay".

    minTemperature_ForMultipleDays = Math.min(...minTemperature_ForEachDay);
    //minTemperature_ForEachDay = [8.3, 7.5] =>
    //minTemperature_ForMultipleDays = 7.5

    return minTemperature_ForMultipleDays;
    //minTemperature_ForMultipleDays = 7.5
}