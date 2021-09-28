function validar() {
  var usuario = document.getElementById("usuario").value;
  var contraseña = document.getElementById("contraseña").value;
  if (usuario == "CIBER01" && contraseña == "DEW2021") {
    alert("BIENVENIDO");
    document.write(`Bienvenido ${usuario} a continuación te mostramos las siguientes noticias: <br>
    ...<br>
    ...<br>
    ...<br>
    ...(Aquí se cargan las noticias...)
    ...<br>
    ...<br>
    ...<br>`);
  } else alert("Vuelve a Intentarlo");
}
