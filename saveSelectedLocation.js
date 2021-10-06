function saveSelected_Location() {
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