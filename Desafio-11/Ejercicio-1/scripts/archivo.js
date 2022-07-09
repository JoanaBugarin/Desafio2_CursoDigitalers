var costosFijos = window.prompt('Ingrese los costos fijos:');
var precioVenta = window.prompt('Ingrese el precio de venta:');
var costosVariables = window.prompt('Ingrese los costos variables:');
var cv = costosFijos / (precioVenta - costosVariables);
document.write('<h1>El punto de equilibrio es: ' + cv + '</h1>');
