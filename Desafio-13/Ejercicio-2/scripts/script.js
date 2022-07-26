let creditos = [
    {nombre: 'Plan 001', capital: 150000, plazo: 30, tasa: 15, interes: 0}, 
    {nombre: 'Plan 002', capital: 300000, plazo: 180, tasa: 10, interes: 0},
    {nombre: 'Plan 003', capital: 485000, plazo: 60, tasa: 23, interes: 0}]

document.write('Créditos disponibles:<br>')
for (i = 0; i < creditos.length; i++) {
    creditos[i].interes = (creditos[i].capital * creditos[i].plazo * creditos[i].tasa) / 100;
    document.write(creditos[i].nombre +' - capital: ' + creditos[i].capital + 
    ', plazo: ' + creditos[i].plazo + '  días, tasa: ' + creditos[i].tasa +
    '%, interés: ' + creditos[i].interes + '<br>');
}