function groupIndexes_BySameDay(weatherObj) {
    let timeSeries = weatherObj.timeSeries;
    validTimes_InTimeSeries = timeSeries.map(timeSeries_Element => {return getValidTimeFrom_TimeSeriesElement(timeSeries_Element)});
    
    // return validTimes_InTimeSeries[1];
    //#region helpvariables for for-loop
    let previousDay = validTimes_InTimeSeries[0].getDate();
    let currentDay = 0;//0 is arbitrary value. I just want to declare currentDay here.
    let Index_WithSameDay = [];
    let groupsOf_Index_WithSameDay = [];
    //#endregion
    for(let i = 0; i < validTimes_InTimeSeries.length; i++){
        currentDay = validTimes_InTimeSeries[i].getDate();
        if(currentDay == previousDay){
            Index_WithSameDay.push(i);
        }
        else {
            groupsOf_Index_WithSameDay.push(Index_WithSameDay);
            Index_WithSameDay = [i];
        }
        previousDay = currentDay;
    }
    return groupsOf_Index_WithSameDay;
}