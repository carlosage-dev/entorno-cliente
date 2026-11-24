function dibujar() {
  let filas = parseInt(document.getElementById("filas").value, 10);
  let alReves = document.getElementById("reves").checked;
  let salida = document.getElementById("dibujo");

  if (isNaN(filas) || filas < 1 || filas > 20) {
    alert("Pon un número de filas entre 1 y 20");
    return;
  }

  let radios = document.getElementsByName("caracter");
  let caracter = "*";

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      caracter = radios[i].value;
    }
  }

  let resultado = "";

  if (alReves == false) {
    for (let fila = 1; fila <= filas; fila++) {
      let espacios = filas - fila;
      let cantidad = fila * 2 - 1;

      for (let e = 1; e <= espacios; e++) {
        resultado = resultado + " ";
      }

      for (let col = 1; col <= cantidad; col++) {
        resultado = resultado + caracter;
      }

      resultado = resultado + "\n";
    }
  } else {
    for (let fila = filas; fila >= 1; fila--) {
      let espacios = filas - fila;
      let cantidad = fila * 2 - 1;

      for (let e = 1; e <= espacios; e++) {
        resultado = resultado + " ";
      }

      for (let col = 1; col <= cantidad; col++) {
        resultado = resultado + caracter;
      }

      resultado = resultado + "\n";
    }
  }

  salida.value = resultado;
}