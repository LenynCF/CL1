var tabla = prompt("Ingrese valor de la tabla de multiplicar a generar");

while (tabla == null || /\D/.test(tabla) || tabla == "") {
  tabla = prompt("Ingrese SOLO un número entero positivo: ");
}

document.write(`TABLA DEL <b>${tabla}</b><br>`);

for (var i = 1; i < 13; i++) {
  document.write(tabla + " x " + i + " = " + tabla * i + "<br>");
}
