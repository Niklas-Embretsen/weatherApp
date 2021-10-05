function saveSelected_Location() {
    //#region antagligen onödig kod
    // //#region get longitude and latitude
    // let coordinatesParagraph = document.querySelector("#weatherDiv_CurrentDay .coordinates_CurrentDay");
    // let coordinateText = coordinatesParagraph.innerHTML;

    // //Select second line in coordinatesParagraph where the numerical values of longitude and latitude is stored.
    // coordinateText = coordinateText.split("<br>")[1];

    // //remove the paranthesis in the coordinateText
    // coordinateText = coordinateText.slice(1, coordinateText.length - 1);
    
    // let coordinates = coordinateText.split(",");
    // longitude = coordinates[0];
    // latitude = coordinates[1];
    // //#endregion

    // //#region get location
    // let locationParagraph = document.querySelector("#weatherDiv_CurrentDay .location_CurrentDay");
    // let location = locationParagraph.innerHTML;
    // //#
    //#endregion

    //#region get longitude, latitude and location from global variable "currentLocation_Glob".
    let longitude = currentLocation_Glob.longitude;
    let latitude = currentLocation_Glob.latitude;
    let locationName = currentLocation_Glob.locationName;
    //#endregion

    saveLocation(longitude, latitude, locationName);
}

function saveLocation(longitude, latitude, locationName){
    //#region Create new location-element
    
    //#region Create div-container
    let divElement = document.createElement("div");
    //#endregion

    //#region Creating link
    let linkLocation = document.createElement("a");
    let href_LinkLocation = `javascript:updateWeatherData(${longitude}, ${latitude}, "${locationName}")`;
    let innerHTML_LinkLocation = `${locationName} (${longitude}, ${latitude})`;

    linkLocation.setAttribute("href", href_LinkLocation);
    linkLocation.innerHTML = innerHTML_LinkLocation;
    //#endregion

    //#region Creating checkbox
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    //#endregion

    //#region Append the link and checkbox to the div-container.
    divElement.appendChild(linkLocation);
    divElement.appendChild(checkbox);
    //#endregion

    //#endregion

    //#region Append the location-element to the location-container.
    let locationContainer = document.getElementById("savedLocations_Flexbox");
    locationContainer.appendChild(divElement);
    //#endregion

    //#region Save a "locationClass"-object in the global variable "savedLocations_Glob"
    savedLocations_Glob.push(new locationClass(longitude, latitude, locationName));
    //#endregion
}