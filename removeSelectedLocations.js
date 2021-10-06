function removeSelectedLocations() {
    //#region Select the saved locations and their container
    let locationContainer = document.getElementById("savedLocations_Flexbox");
    let savedLocations = locationContainer.querySelectorAll("div");
    //#endregion

    //#region helpvariables for for-loop.
    let locationDiv;
    let checkboxIn_LocationDiv;
    let indexesOfLocations_ThatAreRemoved = [];
    //#endregion
    for(i=0; i< savedLocations.length; i++) {
        //#region remove all location-elements with a checkbox that is checked.

        //#region select each location-element and the checkbox they contain.
        locationDiv = savedLocations[i];
        checkboxIn_LocationDiv = locationDiv.querySelector("input");
        //#endregion

        if(checkboxIn_LocationDiv.checked == true){
            locationDiv.remove();
            indexesOfLocations_ThatAreRemoved.push(i);
            // console.log(i);
            // console.log(indexesOfLocations_ThatAreRemoved.length);
        }
        //#endregion
    }
    while(indexesOfLocations_ThatAreRemoved.length > 0){
        //#region Locations that gets removed should also be removed from global variable "savedLocations_Glob".
        removedLocation_Index = indexesOfLocations_ThatAreRemoved.pop();
        savedLocations_Glob.splice(removedLocation_Index, 1);
        //#endregion
    }
}