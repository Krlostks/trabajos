const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");

// Cuerpo del fantasma (óvalo)
ctx.beginPath();
ctx.ellipse(100, 120, 60, 80, 0, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();

// Cabeza del fantasma (círculo)
ctx.beginPath();
ctx.arc(100, 70, 50, 0, Math.PI * 2, false);
ctx.fillStyle = "white";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

// Ojos del fantasma (círculos)
ctx.beginPath();
ctx.arc(70, 55, 10, 0, Math.PI * 2, false);
ctx.arc(130, 55, 10, 0, Math.PI * 2, false);
ctx.fillStyle = "black";
ctx.fill();

// Pupila izquierda (círculo)
ctx.beginPath();
ctx.arc(70, 55, 4, 0, Math.PI * 2, false);
ctx.fillStyle = "white";
ctx.fill();

// Pupila derecha (círculo)
ctx.beginPath();
ctx.arc(130, 55, 4, 0, Math.PI * 2, false);
ctx.fillStyle = "white";
ctx.fill();

// Boca del fantasma (óvalo)
ctx.beginPath();
ctx.ellipse(100, 80, 20, 20, 0, 0.2 * Math.PI, 0.8 * Math.PI, false);
ctx.lineWidth = 2;
ctx.stroke();