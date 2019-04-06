document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", levantarMouse);
document.addEventListener("mousemove", moverMouse);

var colorcito = "blue";
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var presionar = false;
var mover = false;
var x, y;

dibujarLinea("colorcito", 0,0,0,500, papel);
dibujarLinea("colorcito", 0,500,500,500, papel);
dibujarLinea("colorcito", 500,0,500,0, papel);
dibujarLinea("colorcito", 500,0,0,0, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo, papel)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

var anchoCanvas = document.getElementById("area_de_dibujo").width;
var largoCanvas = document.getElementById("area_de_dibujo").height;

function recuadro(){
  dibujarLinea("#10D3D3", 0, 0, 0, largoCanvas, papel);
  dibujarLinea("#10D3D3", 0, largoCanvas, anchoCanvas, largoCanvas, papel);
  dibujarLinea("#10D3D3", anchoCanvas, largoCanvas, anchoCanvas, 0, papel);
  dibujarLinea("#10D3D3", anchoCanvas, 0, 0, 0, papel);
}
recuadro();

function siMouseEstaPresionado(evento)
{
    if (presionar && mover)
  {
    dibujarLinea(colorcito, x, y, evento.layerX, evento.layerY, papel);

  }
}

function presionarMouse(evento)
{
    presionar = true;
    siMouseEstaPresionado(evento);
    x = evento.layerX;
    y = evento.layerY;
}

function moverMouse(evento)
{
    mover = true;
    siMouseEstaPresionado(evento);
    x = evento.layerX;
    y = evento.layerY;
}

function levantarMouse(evento)
{
    presionar = false;
    siMouseEstaPresionado(evento);
}

var boton = document.getElementById("limpiar");
boton.addEventListener("click", limpiar);
function limpiar(evento)
{
  papel.clearRect(0, 0, cuadrito.width, cuadrito.height);
  recuadro();
}



