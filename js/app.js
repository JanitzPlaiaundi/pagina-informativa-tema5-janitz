const datosListaVSCode = [
  "Ligero",
  "Multiplataforma",
  "Consumo bajo",
  "Gratuito y codigo abierto",
  "Adaptable mediante extensiones",
  "Depuracion ligera",
];

const datosListaVS = [
  "Completo",
  "Solo Windows",
  "Consumo alto",
  "No es gratuito",
  "Depuracion completa",
  "Integracion con Azure",
];

const listaVSCode = document.getElementById("listaVSCode");
const listaVS = document.getElementById("listaVS");

datosListaVSCode.forEach((dato) => {
  const li = document.createElement("li");
  li.textContent = dato;
  listaVSCode.appendChild(li);
});

datosListaVS.forEach((dato) => {
  const li = document.createElement("li");
  li.textContent = dato;
  listaVS.appendChild(li);
});

const seccionVSCode = document.getElementById("seccionVSCode");
const seccionVS = document.getElementById("seccionVS");
const separador = document.getElementById("separador");
const infoMostrados = document.getElementById("infoMostrados");
const mensajeError = document.getElementById("mensajeError");
mensajeError.className = "esconder";

let botonVSCode = document.getElementById("BotonVSCode");
let botonVS = document.getElementById("BotonVS");
let botonAmbos = document.getElementById("BotonMostrarAmbos");

let mostrandoVSCode = false;
let mostrandoVS = false;

// Cuando se pulsa el boton VSCode se ejecuta la funcion mostrarVSCode() que hace que se muestre VSCode y se escriba en la consola que se esta mostrando
botonVSCode.addEventListener("click", () => {
  if (!mostrandoVSCode) {
    infoMostrados.textContent = "Mostrando Visual Studio Code";
    mostrarVSCode();
    mostrandoVSCode = true;
    mostrandoVS = false;
  } else {
    mostrarAmbos();
    mostrandoVSCode = false;
  }
});

// Cuando se pulsa el boton VS se ejecuta la funcion mostrarVS() que hace que se muestre VS y se escriba en la consola que se esta mostrando
botonVS.addEventListener("click", () => {
  if (!mostrandoVS) {
    infoMostrados.textContent = "Mostrando Visual Studio";
    mostrarVS();
    mostrandoVSCode = false;
    mostrandoVS = true;
  } else {
    mostrarAmbos();
    mostrandoVS = false;
  }
});

// Cuando se pulsa el boton de ambos se ejecuta la funcion mostrarAmbos() que hace que se muestren ambos y se escriba en la consola que se estan mostrando
botonAmbos.addEventListener("click", mostrarAmbos);

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


const barraDeBusqueda = document.getElementById("barraDeBusqueda");
barraDeBusqueda.addEventListener("input", () => {
  const filtro = barraDeBusqueda.value.toLowerCase();

  if("visual studio".includes(filtro) || filtro == "" ){
    mostrarAmbos();
  }else if("code".includes(filtro) || "visual studio code".includes(filtro)) {
    mostrarVSCode();
  }else if("vs".includes(filtro)) {
    mostrarVS();
  }else{
    noEncontrado();
  }
});