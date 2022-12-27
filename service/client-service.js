

const listaClientes = () => fetch('http://localhost:3000/perfil').then(res=> res.json());

const crearCliente = (nombre, email) => fetch('http://localhost:3000/perfil', {
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({nombre, email, id: uuid.v4()})
})
const eliminarCliente = (id)=>fetch(`http://localhost:3000/perfil/${id}`, {
    method:'DELETE',
})

const detalleCliente = (id)=> fetch(`http://localhost:3000/perfil/${id}`).then(res =>res.json())

const updateCliente =  (nombre,email,id)=> fetch(`http://localhost:3000/perfil/${id}`,{
    method: 'PUT',
    headers:{
    'Content-Type':'application/json'
    },
    body: JSON.stringify({nombre,email}),
}).then(res=>res).catch(err=>console.log(err))




export const clientServices= {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    updateCliente,
};
