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
let sumaTotal = 0;
let precioEleccion;

function verificarEleccion(cantidadProductos, eleccion){
    let correccion = false;
    let opcionCorrejida;
    while(correccion == false){
        if(eleccion > cantidadProductos || eleccion < 1){
            alert("Opcion invalida, elija una nueva opcion por favor");
            break;
        }else{
            correccion = true;
            opcionCorrejida = eleccion;
        }
        return opcionCorrejida;
    }
}

function asignarPrecio(opcionElejida, p1, p2, p3){
    if(opcionElejida == 1){
        return p1;
    }else if(opcionElejida == 2){
        return p2;
    }else{
        return p3;
    }
}


do{

    let eleccionProducto = Number(prompt("Elija el producto que desea agregar al carrito:" + "\n"
    + "Microprocesadores: 1" + "\n"
    + "Placas Madre: 2" + "\n"
    + "Discos SSD: 3" + "\n"
    + "Memorias RAM: 4" + "\n"
    + "Fuentes: 5" + "\n"
    + "Gabinete: 6" + "\n"
    + "Salir: Cualquier Tecla"));

    let opcionElejida;
    let precioOpcion;

    switch(eleccionProducto){
        case 1:
            eleccionComponente = Number(prompt("Elija un Componente:" + "\n"
            + "Ryzen 3 3200G: $89.000 (Opcion 1)" + "\n"
            + "Ryzen 5 5600G: $126.000 (Opcion 2)" + "\n"
            + "Ryzen 7 5700G: $189.000 (Opcion 3)"));

            opcionElejida = verificarEleccion(3, eleccionComponente);

            precioOpcion = asignarPrecio(opcionElejida,89000, 126000, 189000);
            sumaTotal += precioOpcion;

            alert("Producto Agregado con Exito!");
            break;
        case 2:
            eleccionComponente = Number(prompt("Elija un Componente:" + "\n"
            + "MSI A320M: $49.000 (Opcion 1)" + "\n"
            + "Gigabyte A520M: $63.000 (Opcion 2)" + "\n"
            + "Gigabyte B550M: $89.000 (Opcion 3)"));

            opcionElejida = verificarEleccion(3, eleccionComponente);

            precioOpcion = asignarPrecio(opcionElejida,49000, 63000, 89000);
            sumaTotal += precioOpcion;

            alert("Producto Agregado con Exito!");
            break;
        case 3:
            eleccionComponente = Number(prompt("Elija un Componente:" + "\n"
            + "Kingston 240GB: $13.000 (Opcion 1)" + "\n"
            + "Kingston 480GB: $19.000 (Opcion 2)" + "\n"
            + "Kingston 960GB: $32.000 (Opcion 3)"));

            opcionElejida = verificarEleccion(3, eleccionComponente);

            precioOpcion = asignarPrecio(opcionElejida,13000, 19000, 32000);
            sumaTotal += precioOpcion;

            alert("Producto Agregado con Exito!");
            break;
        case 4:
            eleccionComponente = Number(prompt("Elija un Componente:" + "\n"
            + "Crucial 8GB 2666Mhz: $15.000 (Opcion 1)" + "\n"
            + "Kingston Fury Beast 8GB 3200Mhz: $19.000 (Opcion 2)" + "\n"
            + "Hyper X Fury RGB 16GB 3200Mhz: $33.000 (Opcion 3)"));

            opcionElejida = verificarEleccion(3, eleccionComponente);

            precioOpcion = asignarPrecio(opcionElejida,15000, 19000, 33000);
            sumaTotal += precioOpcion;

            alert("Producto Agregado con Exito!");
            break;
        case 5:
            eleccionComponente = Number(prompt("Elija un Componente:" + "\n"
            + "Gigabyte 650W: $35.000 (Opcion 1)" + "\n"
            + "Gigabyte 750W: $48.000 (Opcion 2)" + "\n"
            + "Gigabyte 850W: $56.000 (Opcion 3)"));

            opcionElejida = verificarEleccion(3, eleccionComponente);

            precioOpcion = asignarPrecio(opcionElejida,35000, 48000, 56000);
            sumaTotal += precioOpcion;

            alert("Producto Agregado con Exito!");
            break;
        case 6:
            eleccionComponente = Number(prompt("Elija un Componente:" + "\n"
            + "Gabinete ATX: $31.000 (Opcion 1)" + "\n"
            + "Gamemax Nova N5: $37.000 (Opcion 2)" + "\n"
            + "Thermaltake N200: $58.000 (Opcion 3)"));

            opcionElejida = verificarEleccion(3, eleccionComponente);

            precioOpcion = asignarPrecio(opcionElejida,31000, 37000, 58000);
            sumaTotal += precioOpcion;

            alert("Producto Agregado con Exito!");
            break;
        default:
            alert("Monto total a cobrar: " + sumaTotal);
            finalizar = true;
    }

}while(finalizar == false);
