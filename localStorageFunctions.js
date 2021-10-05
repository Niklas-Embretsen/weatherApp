function saveLocations_ToLocalStorage() {
    localStorage.savedLocations = JSON.stringify(savedLocations_Glob);
    // console.log(localStorage.savedLocations);
}
function loadLocations_FromLocalStorage(){
    let storedLocations = JSON.parse(localStorage.savedLocations);
    // let longitude;
    // let latitude;
    // let locationName;
    for(let location of storedLocations){
        saveLocation(location.longitude, location.latitude, location.locationName);
    }
}

