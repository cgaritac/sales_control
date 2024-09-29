function extrerNumeroDesdeElemento(elemento) {
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;

    ventas1 = extrerNumeroDesdeElemento("ventasTienda1");    
    ventas2 = extrerNumeroDesdeElemento("ventasTienda2");    
    ventas3 = extrerNumeroDesdeElemento("ventasTienda3");    
    ventas4 = extrerNumeroDesdeElemento("ventasTienda4");    
    ventas5 = extrerNumeroDesdeElemento("ventasTienda5");    
    ventas6 = extrerNumeroDesdeElemento("ventasTienda6");    

    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;

    let mensajeSalida = "Total Ventas: " + totalVentas;
    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;
}