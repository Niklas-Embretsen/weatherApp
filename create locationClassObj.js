function create_LocationClassObj_FromWeatherObj(weatherObj, locationName){
    let longitude = weatherObj.geometry.coordinates[0][0];
    let latitude = weatherObj.geometry.coordinates[0][1];
    return (new locationClass(longitude, latitude, locationName));
}