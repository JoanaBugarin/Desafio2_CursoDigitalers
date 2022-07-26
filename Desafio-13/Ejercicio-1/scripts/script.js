let ingresos = [1500, 2500, 84683, 135353, 1535, 4343354, 435453, 78351, 1878, 48483, 35483, 3843];
let egresos = [1500, 2500, 1155, 1533, 5434, 5434543, 4543, 7816, 95634, 9433, 53133, 348133];
let ingresosTotales = 0;
let egresosTotales = 0;

for(i = 0; i < ingresos.length; i++) {
    ingresosTotales += ingresos[i];
}

for(i = 0; i < egresos.length; i++) {
    egresosTotales += egresos[i];
}

document.write('Los ingresos anuales fueron: ' + ingresosTotales);
document.write('<br>Los egresos anuales fueron: ' + egresosTotales);

if (ingresosTotales > egresosTotales) {
    document.write('<br>Hubo ganancia');
}

else if (ingresosTotales == egresosTotales) {
    document.write('<br>No hubo pérdida ni ganancia');
}

else {
    document.write('<br>Hubo pérdida');
}
