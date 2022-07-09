var ingresoTotal = window.prompt('Por favor, proporcione su ingreso total:');
var gastosNecesarios = ingresoTotal * 50 / 100;
var gastosOpcionales = ingresoTotal * 30 / 100;
var ahorro = ingresoTotal * 20 / 100;
document.write('<h1>Usted debe dedicar $' + gastosNecesarios + ' a gastos necesarios, $' 
+ gastosOpcionales + ' a gastos opcionales y $' + ahorro + ' a ahorros e inversiones.</h1>');
