function detailedWeatherFunc_ForCheckbox(checkbox){
    //#region Select the div-container for the smallWeatherDivs and the paragraphs for min-, max-temperature for current-day.
    let detailedWeatherDiv = document.getElementById("weatherDivContainer");
    let minTemperatureParagraph_CurrentDay = document.getElementById("minTemperature_CurrentDay");
    let maxTemperatureParagraph_CurrentDay = document.getElementById("maxTemperature_CurrentDay");
    //#endregion
    if (checkbox.checked == true){
        //#region If checked display small weatherDivs and min-, max-temperature for current-day
        detailedWeatherDiv.style.display = "flex";
        minTemperatureParagraph_CurrentDay.style.display = "block";
        maxTemperatureParagraph_CurrentDay.style.display = "block";
        //#endregion
    }
    else {
        //#region If not checked hide small weatherDivs and min-, max-temperature for current-day
        detailedWeatherDiv.style.display = "none";
        minTemperatureParagraph_CurrentDay.style.display = "none";
        maxTemperatureParagraph_CurrentDay.style.display = "none";
        //#endregion
    }
}