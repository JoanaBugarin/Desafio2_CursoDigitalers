let form = document.querySelector("#login");
let password = document.querySelector("#password")

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    let valor = password.value
    let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{12,}$/

    if (regexp.test(valor)) {
        console.log("Login válido")
    } else {
        console.log("Login inválido")
    }
})


