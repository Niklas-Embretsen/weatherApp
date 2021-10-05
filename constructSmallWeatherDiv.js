function createWeatherDiv(){
    let weatherDiv = document.createElement("Div");
    weatherDiv.setAttribute("class", "weatherDiv");

    let dayDateParagraph = document.createElement("P");
    dayDateParagraph.appendChild(document.createTextNode(""));
    dayDateParagraph.setAttribute("class", "dayParagraph");
    weatherDiv.appendChild(dayDateParagraph);

    let timeParagraph = document.createElement("P");
    timeParagraph.appendChild(document.createTextNode(""));
    timeParagraph.setAttribute("class", "timeParagraph");
    weatherDiv.appendChild(timeParagraph);

    let temperatureParagraph = document.createElement("P");
    temperatureParagraph.appendChild(document.createTextNode(""));
    temperatureParagraph.setAttribute("class", "temperatureParagraph");
    weatherDiv.appendChild(temperatureParagraph);

    let windspeedParagraph = document.createElement("P");
    windspeedParagraph.appendChild(document.createTextNode(""));
    windspeedParagraph.setAttribute("class", "windspeedParagraph");
    weatherDiv.appendChild(windspeedParagraph);

    let weatherSymbolParagraph = document.createElement("P");
    weatherSymbolParagraph.appendChild(document.createTextNode(""));
    weatherSymbolParagraph.setAttribute("class", "weatherSymbolParagraph");
    weatherDiv.appendChild(weatherSymbolParagraph);

    let minTemperatureParagraph = document.createElement("P");
    minTemperatureParagraph.appendChild(document.createTextNode(""));
    minTemperatureParagraph.setAttribute("class", "minTemperatureParagraph");
    weatherDiv.appendChild(minTemperatureParagraph);

    let maxTemperatureParagraph = document.createElement("P");
    maxTemperatureParagraph.appendChild(document.createTextNode(""));
    maxTemperatureParagraph.setAttribute("class", "maxTemperatureParagraph");
    weatherDiv.appendChild(maxTemperatureParagraph);

    return weatherDiv;
}

for(let i = 0; i < 5; i++){
    //#region Append 5 weatherDivs into weatherDivContainer
    weatherDivContainer.appendChild(createWeatherDiv());
    //#endregion
}
