import { clientServices } from "../service/client-service.js"
const form = document.querySelector('[data-form]')
const nombre = document.querySelector('[data-nombre]')
const email = document.querySelector('[data-email]')
const id= new URL(window.location).searchParams.get("id")
const obtenerInformacion = async ()=>{
    if (id===null){
        window.location.href = "/screens/error.html"
    }
    try{
        const perfil = await clientServices.detalleCliente(id);
        if(perfil.nombre && perfil.email){
            nombre.value = perfil.nombre;
            email.vaue = perfil.email;
        }else{
            throw new Error();
        }
    }catch (error){
        window.location.href = "/screens/error.html"
    }
}
obtenerInformacion();
form.addEventListener('submit',e=>{
e.preventDefault();
clientServices.updateCliente(nombre.value, email.value, id).then(()=>{
    window.location.href = "/screens/edicion_concluida.html"
})
})