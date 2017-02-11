var mainCanvas = document.getElementById("lens");
var mainContext = mainCanvas.getContext('2d');
 
var canvasWidth = mainCanvas.width;
var canvasHeight = mainCanvas.height;
 
var angle = 0;
 
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;
 
function drawCircle() {
    mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
     
    // draw the circle
    mainContext.beginPath();
     
    var radius = 10 + 15 * Math.abs(Math.cos(angle));
    mainContext.arc(225, 225, radius, 0, Math.PI * 2, false);
    mainContext.closePath();
     
    // draw the stroke
    mainContext.lineWidth = 1;
    mainContext.strokeStyle = "#808080";
    mainContext.stroke();
      
    angle += Math.PI / 240;
     
    requestAnimationFrame(drawCircle);
}
drawCircle();