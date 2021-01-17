const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
ctx.lineWidth = 10;
let maxWidth = 100;
let colorValue = 255;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let red = 0;

let isDrawing = false;

function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = `rgba(${red}, 200, 60, .5)`;

    let lineX = e.clientX;
    let lineY = e.clientY;
    ctx.beginPath();
    ctx.moveTo(lineX, lineY);
    ctx.lineTo(lineX, lineY);
    ctx.stroke();

    if (red < colorValue) {
        red++;
        if (red == 255) {
            colorValue = 1;
        }
    } else {
        red--;
        if (red == 0) {
            colorValue = 255;
        }
    }

    if (ctx.lineWidth >= maxWidth) {
        maxWidth = 10;
        ctx.lineWidth--;
        if (ctx.lineWidth == 10) {
            maxWidth = 100;
        }
    } else {
        ctx.lineWidth++;
    }



}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);