const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll(".jsColor");
const range = document.querySelector("#jsRange");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function onMouseMove(e){
    const x = e.offsetX;
    const y = e.offsetY;
    
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function stopPainting(e){
    painting = false;
}

function startPainting(e){
    painting = true;
}

function onMouseLeave(){
    painting = false;
}
function onMouseEnter(e){
    x = e.offsetX;
    y = e.offsetY;

    ctx.moveTo(x,y);
}

function onMouseDown(e){
    painting = true;
}

function changeColor(e){
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

function handleRangeChange(e){
    const value = e.target.value;
    ctx.lineWidth = value;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseenter", onMouseEnter);
    document.body.addEventListener("mouseup", stopPainting);
    document.body.addEventListener("mousedown", startPainting);
}

colors.forEach(color => color.addEventListener("click", changeColor));

if(range){
    range.addEventListener("input", handleRangeChange);
}