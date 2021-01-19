const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const color = document.querySelector('input[type=color]');
const lineWidth = document.querySelector('input[type=range]');

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;

function draw(e) {
    if (!isDrawing) return;
    
    ctx.strokeStyle = color.value;
    ctx.lineWidth = lineWidth.value;

    let lineX = e.clientX;
    let lineY = e.clientY;
    ctx.beginPath();
    ctx.moveTo(lineX, lineY);
    ctx.lineTo(lineX, lineY);
    ctx.stroke();
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);