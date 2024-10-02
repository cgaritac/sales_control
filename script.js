function crearTiendas(contenedorID, min, cantidadTiendas){
    //Encontrar contenedor por su id
    let elementoContenedor = document.getElementById(contenedorID);

    //Loop para crear tantas tiendas como se pidan
    for(let conteoTiendas = 1; conteoTiendas <= cantidadTiendas; conteoTiendas++){
        //Crear el texto de label para poder llamar a la función
        let textoEtiqueta = "Tienda " + conteoTiendas;

        //Crear tiendas con crearParrafoTienda
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min)

        //Aregar el parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }
}

function crearParrafoTienda(textoLabel, valorMin){
    //Crear las etiquetas de parrafo <p>
    let elementoParrafo = document.createElement("p");

    //Crear la etiqueta label
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textoLabel + ': ';

    //Conectar con el input
    elementoEtiqueta.setAttribute("for", textoLabel);

    //Crear el input
    let elementoInput = document.createElement("input");

    //Establecer atributos de input
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);

    //Agregar label e input al parrafo
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //Devolver el parrafo completo
    return elementoParrafo;
}

function extrerNumeroDesdeElemento(elemento) {
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas = [];

    ventas[0] = extrerNumeroDesdeElemento("ventasTienda1");    
    ventas[1] = extrerNumeroDesdeElemento("ventasTienda2");    
    ventas[2] = extrerNumeroDesdeElemento("ventasTienda3");    
    ventas[3] = extrerNumeroDesdeElemento("ventasTienda4");    
    ventas[4] = extrerNumeroDesdeElemento("ventasTienda5");    
    ventas[5] = extrerNumeroDesdeElemento("ventasTienda6");    

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    let mensajeSalida = "Total Ventas: " + totalVentas +
                        " / Venta Mayor: " + ventaMayor +
                        " / Venta Menor: " + ventaMenor;
    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;
}

function sumarTotal(array) {
    let total = 0;

    for(let venta of array) {
        total += venta;
    }

    return total;
}

function calcularMayor(array){
    let maximo = array[0];

    for(let venta of array) {
        if(venta > maximo) {
            maximo = venta;
        }
    }

    return maximo;
}

function calcularMenor(array){
    let minimo = array[0];

    for(let venta of array){
        if(venta < minimo){
            minimo = venta;
        }
    }

    return minimo;
}