import { datosListaVSCode, datosListaVS } from "./datos.js";
import { mostrarVSCode, mostrarVS, mostrarAmbos, noEncontrado, listaVSCode, botonVSCode, botonVS, botonAmbos, infoMostrados, listaVS } from "./interfaz.js";

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