function createWeatherDiv(){
    let weatherDiv = document.createElement("Div");
    weatherDiv.setAttribute("class", "weatherDiv");

    //#region Create paragraphs
    //#region dayDateParagraph
    let dayDateParagraph = document.createElement("P");
    dayDateParagraph.appendChild(document.createTextNode(""));
    dayDateParagraph.setAttribute("class", "dayParagraph");
    weatherDiv.appendChild(dayDateParagraph);
    //#endregion

    //#region timeParagraph
    let timeParagraph = document.createElement("P");
    timeParagraph.appendChild(document.createTextNode(""));
    timeParagraph.setAttribute("class", "timeParagraph");
    weatherDiv.appendChild(timeParagraph);
    //#endregion

    //#region temperatureParagraph
    let temperatureParagraph = document.createElement("P");
    temperatureParagraph.appendChild(document.createTextNode(""));
    temperatureParagraph.setAttribute("class", "temperatureParagraph");
    weatherDiv.appendChild(temperatureParagraph);
    //#endregion

    //#region windspeedParagraph
    let windspeedParagraph = document.createElement("P");
    windspeedParagraph.appendChild(document.createTextNode(""));
    windspeedParagraph.setAttribute("class", "windspeedParagraph");
    weatherDiv.appendChild(windspeedParagraph);
    //#endregion

    //#region weatherSymbolParagraph
    let weatherSymbolParagraph = document.createElement("P");
    weatherSymbolParagraph.appendChild(document.createTextNode(""));
    weatherSymbolParagraph.setAttribute("class", "weatherSymbolParagraph");
    weatherDiv.appendChild(weatherSymbolParagraph);
    //#endregion

    //#region minTemperatureParagraph
    let minTemperatureParagraph = document.createElement("P");
    minTemperatureParagraph.appendChild(document.createTextNode(""));
    minTemperatureParagraph.setAttribute("class", "minTemperatureParagraph");
    weatherDiv.appendChild(minTemperatureParagraph);
    //#endregion

    //#region maxTemperatureParagraph
    let maxTemperatureParagraph = document.createElement("P");
    maxTemperatureParagraph.appendChild(document.createTextNode(""));
    maxTemperatureParagraph.setAttribute("class", "maxTemperatureParagraph");
    weatherDiv.appendChild(maxTemperatureParagraph);
    //#endregion
    //#endregion

    return weatherDiv;
}
