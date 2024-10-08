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

function extraerNumeroDesdeElemento(elemento) {
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas = [];
    let posicionVentas = 0;
    let elementosVentas = document.getElementById('itemsTiendas')

    for(let item of elementosVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1])
        ventas[posicionVentas] = valorVenta;
        posicionVentas = posicionVentas + 1;
    }  

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    for(let item of elementosVentas.children){
        item.children.className="cualquiera";
        if (Number(item.children[1].value) == ventaMayor){
            item.children[1].className="numeroMayor";
        }else if(Number(item.children[1].value) == ventaMenor){
            item.children[1].className="numeroMenor";
        }
    }

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