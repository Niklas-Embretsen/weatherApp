function drawSun_InCanvas(sun_XPos, sun_YPos, sunRadius, rayNumber, rayLength, canvasId){
    //#region Select canvas-context into variable
    var canv = document.getElementById(canvasId);
    var canvas_Context = canv.getContext("2d");
    //#endregion

    //#region Paint sun border black
    canvas_Context.beginPath();
    canvas_Context.arc(sun_XPos, sun_YPos, sunRadius, 0, 2*Math.PI);
    canvas_Context.strokeStyle = "black";
    canvas_Context.lineWidth = 5;
    canvas_Context.stroke();
    //#endregion

    //#region Paint inside of sun yellow
    canvas_Context.fillStyle = "yellow";
    canvas_Context.fill();
    //#endregion

    drawSunRays();

    function drawRay(rayColor, rayWidth, degreeOfRay) {
            //#region startCoordinates runray
            let startXPos_OfRay = sun_XPos + sunRadius * Math.cos(degreeOfRay);
            let startYPos_OfRay = sun_YPos + sunRadius * Math.sin(degreeOfRay);
            //#endregion

            //#region end-coordinates sunray
            //Below I'm extending the length of the ray abit with "rayWidth/2". 
            //I do this just to make the ray extend equally to 
            //the right, left and outwards.
            //This is useful when I wanna draw black borders around the sunrays later. 
            //I do the black borders of the sunray by first drawing a thick black ray,
            //and then doing a slightly thinner yellow ray ontop of the black one.
            let endXPos_OfRay = startXPos_OfRay + (rayLength + rayWidth/2)* Math.cos(degreeOfRay);
            let endYPos_OfRay = startYPos_OfRay + (rayLength + rayWidth/2) * Math.sin(degreeOfRay);
            //#endregion

            //#region Draw sunray
            canvas_Context.beginPath();
            
            canvas_Context.moveTo(
                startXPos_OfRay,
                startYPos_OfRay
                );
            canvas_Context.lineTo(endXPos_OfRay, endYPos_OfRay);

            canvas_Context.fillStyle = rayColor;
            canvas_Context.lineWidth = rayWidth;
            canvas_Context.strokeStyle = rayColor;
            canvas_Context.stroke();
            //#endregion
    }
    
    function drawSunRays() {
        for(let i = 0; i < rayNumber; i++){
        let degreeOfRay = 2 * Math.PI * i / rayNumber;
        drawRay("black", 5, degreeOfRay);
        drawRay("yellow", 3, degreeOfRay);
        }
    }
}

function paintCanvas_From_WeatherIcon(weatherIcon){
    // paintCanvas_From_WeatherSymbolNumber
    //#region Select images
    let cloudSunImage = document.getElementById("cloud-sun-img");
    let forestFogImage = document.getElementById("forest-fog-2-img");
    let heavyRainImage = document.getElementById("heavy rain-img");
    let overcastImage = document.getElementById("overcast-img");
    let rainImage = document.getElementById("rain-img");
    let snowImage = document.getElementById("snow-img");
    let thunderImage = document.getElementById("thunder-img");
    //#endregion

    //#region Select 2d-context of canvas
    let theCanvas = document.getElementById("weatherCanvas");
    let ctx = theCanvas.getContext("2d");
    //#endregion

    //#region Clear the canvas before painting new "weatherIcon-image"
    ctx.clearRect(0, 0, theCanvas.width, theCanvas.height);
    //#endregion

    //#region Paint the canvas with appropiate image depending on weatherIcon
    switch(weatherIcon){
        case("01d"):
        //Clear sky
            drawSun_InCanvas(100, 100, 50, 14, 40, "weatherCanvas");
            break;
        case("01n"):
        //Clear sky
            drawSun_InCanvas(100, 100, 50, 14, 40, "weatherCanvas");
            break;

        case("02d"):
        //Few clouds
            ctx.drawImage(cloudSunImage,0,28);
            break;
        case("02n"):
        //Few clouds
            ctx.drawImage(cloudSunImage,0,28);
            break;
            
        case("03d"):
        //Scattered clouds
            ctx.drawImage(overcastImage,0,33);
            break;
        case("03n"):
        //Scattered clouds
            ctx.drawImage(overcastImage,0,33);
            break;

        case("04d"):
        //Broken clouds
            ctx.drawImage(overcastImage,0,33);
            break;
        case("04n"):
        //Broken clouds
            ctx.drawImage(overcastImage,0,33);
            break;

        case("09d"):
        //Shower rain
            ctx.drawImage(rainImage, 0, 31);
            break;
        case("09n"):
        //Shower rain
            ctx.drawImage(rainImage, 0, 32);
            break;
            
        case("10d"):
        //Rain
            ctx.drawImage(rainImage, 0, 32);
            break;
        case("10n"):
        //Rain
            console.log("inne i case('10n')");
            ctx.drawImage(rainImage, 0, 32);
            break;

        case("11d"):
        //Thunderstorm
            ctx.drawImage(thunderImage, 24,0);
            break;
        case("11n"):
        //Thunderstorm
            ctx.drawImage(thunderImage, 24,0);
            break;

        case("13d"):
        //Snow
            ctx.drawImage(snowImage,0,38);
            break;
        case("13n"):
        //Snow
            ctx.drawImage(snowImage,0,38);
            break;

        case("50d"):
        //Mist
            ctx.drawImage(forestFogImage,0,38);
            break;
        case("50n"):
        //Mist
            ctx.drawImage(forestFogImage,0,38);
            break;

    }
    //#endregion
}

