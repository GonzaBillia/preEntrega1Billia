//SIMULADOR DE ARMADO DE PC CON ASISTENTE

alert("Bienvenido a nuestra casa de computacion, por favor Inicie sesion:");

let nombreCliente = "";
let registroExitoso = false;

//LOGGIN

while(registroExitoso != true){
    nombreCliente = prompt("Escriba su nombre");
    if(nombreCliente != ""){
        registroExitoso = true;
        alert("Registro Exitoso");
    }else{
        alert("Debe escribir algo ;)");
    }
}

//ARMADO DE PC


alert("Se abrira el menu para que empiece su compra");
alert("Recuerde elegir usando los numeros indicados segun el producto");

let finalizar = false;
let eleccionComponente;
let sumaTotal;

function verificarEleccion(cantidadProductos, eleccion, accion){
    let correccion = false;
    let opcionCorrejida;
    while(correccion){
        if(eleccion > cantidadProductos || eleccion < 1){
            alert("Opcion invalida, elija una nueva opcion por favor");
            opcionCorrejida = accion;
        }else{
            correccion = true;
            return opcionCorrejida;
        }
    }
}

function calculoSumaProducto(valorEleccion){ //hacer el calculo de valor asi se va sumando.

}

do{

    let eleccionProducto = Number(prompt("Elija el producto que desea agregar al carrito:" + "\n"
    + "Microprocesadores: 1" + "\n"
    + "Placas Madre: 2" + "\n"
    + "Discos SSD: 3" + "\n"
    + "Memorias RAM: 4" + "\n"
    + "Fuentes: 5" + "\n"
    + "Gabinete: 6"));

    switch(eleccionProducto){

        case 1:
            let opcionElejida;
            eleccionComponente = Number(prompt("Elija un Componente:" + "\n"
            + "Ryzen 3 3200G: $89.000 (Opcion 1)" + "\n"
            + "Ryzen 5 5600G: $126.00 (Opcion 2)" + "\n"
            + "Ryzen 7 5700G: $189.000 (Opcion 3)"));


    }

}while(finalizar);
