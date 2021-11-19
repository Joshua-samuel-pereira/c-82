var events = "empty";
var last_X , last_Y ;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

colour = "black";
width = 2;

canvas.addEventListener("pendown", penstart);

function penstart(e) {
    events = "pendown";
}

canvas.addEventListener("move",move_around);

function move_around(e) {
    current_X = e.clientX;
    current_Y = e.clientY;
    if(events == "pendown") {
        ctx.beginPath();
        ctx.strokecolour = colour;
        ctx.lineWidth = width;
        ctx.moveTo(last_X , last_Y)
        console.log(last_X,last_Y);

        ctx.lineTo(current_X,current_Y);
        console.log(current_X,current_Y);
        ctx.stroke();
    }
    last_X = current_X;
    last_Y = current_Y;
}

canvas.addEventListener("penup",pen_up)
function pen_up(e) {
    events = "penup";
}

canvas.addEventListener("bye",mouse_leave)
function mouse_leave(e) {
    events = "bye";
}