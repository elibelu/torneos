//JSON
const torneosHTML = document.querySelector(".torneos");
console.log(torneosHTML);

fetch("../json/torneos.json")
.then((respuesta)=>{
    return respuesta.json()
})
.then((torneos)=>{
   // console.log(torneos)
   torneos.forEach(torneo => {
    torneosHTML.innerHTML += `
    <article class="torneo col-12 col-md-6 col-lg-4 row mx-auto">
       <img src="${torneo.imagen}" alt="${torneo.nombre}">
       <h2>Torneo: ${torneo.torneo}</h2>
       <h3>Premio: ${torneo.premio}</h3>
       <a id='${JSON.stringify(torneo)}' class="btn btn-outline-danger botonDetalle" href="detalle.html?codigo=${torneo.codigo} ">Más info </a>
   </article>
    `
});


//LocalStorage

let botonDetalle = document.querySelectorAll(".botonDetalle")

let arrayMiListaDeTorneos

let miObjeto

let codigo

    botonDetalle.forEach(torneoSeleccion => {
         torneoSeleccion.addEventListener("click", function(e){

             e.preventDefault()

             let miListaDeTorneos = localStorage.getItem("detallesTorneo")
             if(miListaDeTorneos == null){
                 arrayMiListaDeTorneos = [];
             }else{
                 arrayMiListaDeTorneos = JSON.parse(miListaDeTorneos)
             }

            arrayMiListaDeTorneos.push(this.id)

            miObjeto = JSON.parse(arrayMiListaDeTorneos[0])

            codigo = miObjeto.codigo

            localStorage.setItem("detallesTorneo", JSON.stringify(arrayMiListaDeTorneos))

            location.href = `detalle.html?codigo=${codigo}`
             
         })    
     } )

})


.catch((error)=>{
    console.log("hubo error en json "+error)
})




