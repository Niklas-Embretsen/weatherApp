function saveLocations_ToLocalStorage() {
    localStorage.savedLocations = JSON.stringify(savedLocations_Glob);
}

function loadLocations_FromLocalStorage(){
    let storedLocations = JSON.parse(localStorage.savedLocations);
    for(let location of storedLocations){
        saveLocation(location.longitude, location.latitude, location.locationName);
    }
}

