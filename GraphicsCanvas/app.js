const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect(10, 10, 50, 50);
ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect(30, 30, 50, 50);

ctx.clearRect(1, 30, 60, 60);

ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
ctx.fillRect(10, 80, 70, 70);

ctx.fillStyle = "rgba(255, 255, 255, 1)";
ctx.fillRect(90, 80, 70, 70);

ctx.fillStyle = "rgba(200, 0, 200, 1)";
ctx.fillRect(10, 160, 70, 70);


ctx.fillStyle = "rgba(0, 250, , 1)";
ctx.beignPath;
ctx.moveTo(125, 80);
ctx.lineTo(160, 150);
ctx.lineTo(90, 150);
ctx.fill()


// Cuerpo del fantasma (óvalo)
ctx.fillStyle = "purple";
ctx.beginPath();
ctx.ellipse(96, 120, 60, 80, 0, 0, Math.PI * 2);
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();


//cara
ctx.fillStyle = "rgba(253, 221, 202, 1)";
ctx.beginPath();
ctx.arc(95, 95, 50, 0, Math.PI * 2, true);
ctx.fill();
ctx.moveTo(110, 130);
ctx.arc(95, 135, 15, 0, Math.PI * 1, true);
ctx.fill();
ctx.moveTo(85, 75);
ctx.arc(80, 75, 5, 0, Math.PI * 2, true);
ctx.moveTo(120, 75);
ctx.arc(115, 75, 5, 0, Math.PI * 2, true);
ctx.stroke();

