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
botonAmbos.addEventListener("click", mostrarAmbos)

function mostrarVSCode() {
  seccionVS.className = "esconder"
  seccionVSCode.className = "mostrar"
  separador.className = "esconder"
}

function mostrarVS(){
  seccionVS.className = "mostrar"
  seccionVSCode.className = "esconder"
  separador.className = "esconder"
}

function mostrarAmbos(){
  console.log("Mostrar ambos")
  infoMostrados.textContent = "Mostrando ambos"
  seccionVS.className = "mostrar"
  seccionVSCode.className = "mostrar"
  separador.className = "mostrar"
}