document.getElementById("boton-prueba").addEventListener("click",async ()=>{
    let mensaje = ""
    mensaje = await getPrueba()
    
    document.getElementById("contenedor-respuesta").classList.add("contenedor-respuesta-visible")
    document.getElementById("campo-respuesta").innerText = mensaje
   
})



 async function getPrueba() {

    let url = "http://localhost:3000/holamundo"

    let req = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const resp = await fetch(url, req);
    data = await resp.json();

    return data.msj

}

