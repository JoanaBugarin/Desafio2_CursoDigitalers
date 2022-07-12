var username = window.prompt("Ingrese su nombre:");
var password = window.prompt("Ingrese su contraseña:");

if (username == "admin" && password == "1234") {
    document.write("<h1>Bienvenido " + username + "</h1>");
} 
else if (username == "admin" && password != "1234") {
    document.write("<h1>Contraseña incorrecta.</h1>");
} 
else if (username != "admin" && password == "1234") {
    document.write("<h1>El nombre de usuario no existe</h1>");
}
else {
    document.write("<h1>Usuario y contraseña inválidos.</h1>");
}