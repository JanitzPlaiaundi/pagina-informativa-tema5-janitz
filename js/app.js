let main = document.getElementById("main")
const seccionVSCode = document.getElementById("seccionVSCode")
const seccionVS = document.getElementById("seccionVS")
const separador = document.getElementById("separador")
const infoMostrados = document.getElementById("infoMostrados")

let botonVSCode = document.getElementById("BotonVSCode")
let botonVS = document.getElementById("BotonVS")
let botonAmbos = document.getElementById("BotonMostrarAmbos")

let mostrandoVSCode = false
let mostrandoVS = false

// Cuando se pulsa el boton VSCode se ejecuta la funcion mostrarVSCode() que hace que se muestre VSCode y se escriba en la consola que se esta mostrando
botonVSCode.addEventListener("click", () => {
  if(!mostrandoVSCode){
    infoMostrados.textContent = "Mostrando Visual Studio Code"
    mostrarVSCode()
    mostrandoVSCode = true
    mostrandoVS = false
  }else{
    mostrarAmbos()
    mostrandoVSCode = false
  }
})

// Cuando se pulsa el boton VS se ejecuta la funcion mostrarVS() que hace que se muestre VS y se escriba en la consola que se esta mostrando
botonVS.addEventListener("click", () => {
  if(!mostrandoVS){
    infoMostrados.textContent = "Mostrando Visual Studio"
    mostrarVS()
    mostrandoVSCode = false
    mostrandoVS = true
  }else{
    mostrarAmbos()
    mostrandoVS = false
  }
  

})


// Cuando se pulsa el boton de ambos se ejecuta la funcion mostrarAmbos() que hace que se muestren ambos y se escriba en la consola que se estan mostrando
botonAmbos.addEventListener("click", mostrarAmbos)

function mostrarVSCode() {
  // Cuando se muetra VSCode se oculta VS y el separador
  seccionVS.className = "esconder"
  seccionVSCode.className = "mostrar"
  separador.className = "esconder"
}

function mostrarVS(){
  // Cuando se muetra VS se oculta VSCode y el separador
  seccionVS.className = "mostrar"
  seccionVSCode.className = "esconder"
  separador.className = "esconder"
}


// Cuando se muetran ambos escribo en la consola que se estan mostrando ambos
function mostrarAmbos(){
  console.log("Aviso por consola: mostrando ambos")
  infoMostrados.textContent = "Mostrando ambos"

  // Cuando se muestran ambos se muestra el separador y las dos secciones
  seccionVS.className = "mostrar"
  seccionVSCode.className = "mostrar"
  separador.className = "mostrar"
}