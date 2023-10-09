//JSON
const codigo = location.search;

const codigoTorneo = new URLSearchParams(codigo);

const codigoSeleccionado = codigoTorneo.get("codigo");


const codigoFinal = document.getElementById("codigo");
codigoFinal.innerHTML += 
`Código del Torneo: ${codigoSeleccionado}`;


fetch("../json/torneos.json")
    .then((respuesta) => {
        return respuesta.json()
    })
    .then((torneos) => {
        console.log(torneos) 

        for (let i = 0; i < torneos.length; i++) {
            if (torneos[i].codigo == codigoSeleccionado) {
                const sectionDetalle = document.querySelector(".detalle")
                sectionDetalle.innerHTML += `
                <article class="torneos col-12 col-md-6 col-lg-4 row mx-auto border border-danger border-5">
                <img class="w-100" src="${torneos[i].imagen}" alt="${torneos[i].nombre}">
                <h2>Torneo: ${torneos[i].torneo}</h2>
                <h3>Plataforma: ${torneos[i].plataforma}</h3>
                <h3>Estructura: ${torneos[i].estructura}</h3>
                <h3>Modalidad: ${torneos[i].modalidad}</h3>
                <h3>Inscripción: ${torneos[i].inscripcion}</h3>
                <h3>Servidor: ${torneos[i].servidor}</h3>
                <h3>Premio: ${torneos[i].premio}</h3>
                </article>
                `
            }
        }
    })
    .catch((error) => {
        console.log('Hubo un problema con json ' + error)
    })


    //Evento
    
    let titulo = document.getElementById("textoDetalle");
    let body = document.querySelector("body");

    titulo.addEventListener("mouseover", function(){
        body.style.backgroundColor = "Gold";
    })

    titulo.addEventListener("mouseout", function(){
        titulo.innerHTML = "¡VEN A GANAR CAMPEÓN!";
        titulo.classList.toggle("destacado")
    })