const seccionVSCode = document.getElementById("seccionVSCode");
const seccionVS = document.getElementById("seccionVS");
const separador = document.getElementById("separador");
const infoMostrados = document.getElementById("infoMostrados");
const mensajeError = document.getElementById("mensajeError");
mensajeError.className = "esconder";

const botonVSCode = document.getElementById("BotonVSCode");
const botonVS = document.getElementById("BotonVS");
const botonAmbos = document.getElementById("BotonMostrarAmbos");

const listaVSCode = document.getElementById("listaVSCode");
const listaVS = document.getElementById("listaVS");

function mostrarVSCode() {
  // Cuando se muetra VSCode se oculta VS y el separador
  seccionVS.className = "esconder";
  seccionVSCode.className = "mostrar";
  separador.className = "esconder";
  mensajeError.className = "esconder";
}

function mostrarVS() {
  // Cuando se muetra VS se oculta VSCode y el separador
  seccionVS.className = "mostrar";
  seccionVSCode.className = "esconder";
  separador.className = "esconder";
  mensajeError.className = "esconder";
}

// Cuando se muetran ambos escribo en la consola que se estan mostrando ambos
function mostrarAmbos() {
  console.log("Aviso por consola: mostrando ambos");
  infoMostrados.textContent = "Mostrando ambos";

  // Cuando se muestran ambos se muestra el separador y las dos secciones
  seccionVS.className = "mostrar";
  seccionVSCode.className = "mostrar";
  separador.className = "mostrar";
  mensajeError.className = "esconder";
}

function noEncontrado() {
  infoMostrados.textContent = "Mostrando: ninguno";

  seccionVS.className = "esconder";
  seccionVSCode.className = "esconder";
  separador.className = "esconder";
  mensajeError.className = "mostrar";
}



export { mostrarVSCode, mostrarVS, mostrarAmbos, noEncontrado, listaVSCode, botonVSCode, botonVS, botonAmbos, infoMostrados, mensajeError, listaVS };