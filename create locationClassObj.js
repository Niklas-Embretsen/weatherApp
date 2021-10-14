function create_LocationClassObj_FromWeatherObj(weatherObj){
    let longitude = getLongitude(weatherObj);
    let latitude = getLatitude(weatherObj);
    let cityName = getCityName(weatherObj);
    return (new locationClass(longitude, latitude, cityName));
}