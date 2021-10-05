function paintSun_InCanvas(){
    //#region Select 2d-context of canvas
    let theCanvas = document.getElementById("weatherCanvas");
    let ctx = theCanvas.getContext("2d");
    //#endregion

    //#region Clear the canvas before painting
    ctx.clearRect(0, 0, theCanvas.width, theCanvas.height);
    //#endregion

    drawSun_InCanvas(100, 100, 50, 14, 40, "weatherCanvas");
}