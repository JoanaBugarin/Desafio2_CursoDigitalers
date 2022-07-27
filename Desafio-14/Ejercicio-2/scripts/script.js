let creditos = [
    {nombre: 'Plan 001', capital: 150000, plazo: 30, tasa: 15, interes: 0}, 
    {nombre: 'Plan 002', capital: 300000, plazo: 180, tasa: 10, interes: 0},
    {nombre: 'Plan 003', capital: 485000, plazo: 60, tasa: 23, interes: 0}]

document.write('Créditos disponibles:<br>')

function agregarInteres(inversion) {
    for (i = 0; i < inversion.length; i++) {
        inversion[i].interes = (inversion[i].capital * inversion[i].plazo * inversion[i].tasa) / 100;
        document.write(inversion[i].nombre +' - capital: ' + inversion[i].capital + 
        ', plazo: ' + inversion[i].plazo + '  días, tasa: ' + inversion[i].tasa +
        '%, interés: ' + inversion[i].interes + '<br>');
    }
    return inversion
}

agregarInteres(creditos);