function detailedWeatherFunc_ForCheckbox(checkbox){
    let detailedWeatherDiv = document.getElementById("weatherDivContainer");
    let minTemperatureParagraph_CurrentDay = document.getElementById("minTemperature_CurrentDay");
    let maxTemperatureParagraph_CurrentDay = document.getElementById("maxTemperature_CurrentDay");
    if (checkbox.checked == true){
        detailedWeatherDiv.style.display = "flex";
        minTemperatureParagraph_CurrentDay.style.display = "block";
        maxTemperatureParagraph_CurrentDay.style.display = "block";
    }
    else {
        detailedWeatherDiv.style.display = "none";
        minTemperatureParagraph_CurrentDay.style.display = "none";
        maxTemperatureParagraph_CurrentDay.style.display = "none";
    }
}