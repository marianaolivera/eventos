//crea la clase contacto
class Cliente {
    constructor(nombre,email,telefono){
        this.nombre=nombre;
        this.email=email;
        this.telefono=telefono;
    }
}

let arrayCliente=[];
let formulario = document.querySelector("#formulario");
let inputNombre = document.querySelector("#iNombre");

let nombreI = formulario.children[1].value;
let emailI = formulario.children[3].value;
let telefonoI = formulario.children[5].value;

let contenedor = document.querySelector("#clienteIngresado");
let displayTodos = document.querySelector("#displayTodos");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera =false;

formulario.addEventListener("submit", agregarCliente);
btnMostrar.addEventListener("click",MostrarTodosClientes);

inputNombre.focus();


function validarForm(){
 nombreI= formulario.children[1].value;
 emailI = formulario.children[3].value;
 telefonoI = formulario.children[5].value;
 console.log(nombreI)
 console.log(emailI)
 console.log(telefonoI)
  
 if (nombreI==""|| emailI==""|| telefonoI==""){
    alert("Error -Debe completar tpdps los datos");
    inputNombre.focus();
    bandera = false;
  } else {
    bandera=true;
  }
}
//agregar clientes
function agregarCliente(e){
    e.preventDefault();
    validarForm();
    if(bandera == true){
        let opcion = confirm("Confirma agregar cliente?");
        if(opcion== true){
            let formulario = e.target
            arrayCliente.push(new Cliente(nombreI,emailI,telefonoI));
        }else {
            alert("No se agregara contacto");
        }
        formulario.children[1].value =`` ;
        formulario.children[3].value =``;
        formulario.children[5].value =``;
        contenedor.innerHTML =``;
        AgregarAlDom();
        inputNombre.focus();
    }else {
        inputNombre.focus();
    }
}
function AgregarAlDom(){
    contenedor.innerHTML=`<h3>Ultimo cliente Ingresado:</h3>
    <p><strong> Nombre: </strong> ${nombreI} </p>
    <p><strong> Email:</strong> ${emailI}</p>
    <p><strong> Telefono:</strong> ${telefonoI}</p>
    <hr>`;
}
function MostrarTodosClientes(e){
    e.preventDefault();
    let i =0;
    displayTodos.innerHTML = "<h3> Listado de todos los clientes: </h3>";
     for (const cliente of arrayCliente)
        displayTodos.innerHTML += `
   <p><strong> Nombre: </strong> ${cliente.nombre} </p>
    <p><strong> Correo:</strong> ${cliente.email}</p>
    <p><strong> Telefono:</strong> ${cliente.telefono}</p>
    <hr>`;
}
