function loadWeatherData_ForCurrentLocation_OnClick() {
  if (navigator.geolocation) {
      
    navigator.geolocation.getCurrentPosition(setLocation_ToCurrentPos, errorFunction);
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}

function loadWeatherData_ForCurrentLocation_OnLoad() {
    if (navigator.geolocation) {
        
      navigator.geolocation.getCurrentPosition(setLocation_ToCurrentPos, setLocation_ToGavle);
    } else { 
        setLocation_ToGavle();
    }
}

function setLocation_ToCurrentPos(position) {
    update_Weather_LongLat((position.coords.longitude), (position.coords.latitude));
}

function errorFunction(error) {

  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}

function setLocation_ToGavle(){
  update_Weather_City("Gävle");
}