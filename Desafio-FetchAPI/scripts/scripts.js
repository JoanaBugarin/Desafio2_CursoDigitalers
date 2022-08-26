/*jshint esversion: 6 */
/*
let url = `https://jsonplaceholder.typicode.com`;
let respuesta = fetch(`${url}/users`);
respuesta
    .then(valor=>valor.json())
    .then(valor=>{
        console.log(valor);
        let usuario_id = valor[4].id;
        return fetch(`${url}/posts?userId=${usuario_id}`);
    })
    .then(valor=>valor.json())
    .then(valor=>{
        console.log(valor);
    })
    .catch(err=>{
        console.log(err);
    });
    */
    fetch("https://jsonplaceholder.typicode.com/users", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "host",
            "x-rapidapi-key": "key",
        }
    }).then(
      response => {
        response.json().then(
          data =>{
           
            console.log(data);
            if (data.length > 0){
              var temp = "";
              
              data.forEach((x) => {
                temp += "<tr>";
                temp += "<td>"+ x.id +"</td>";
                temp += "<td>"+ x.name +"</td>";
                temp += "<td>"+ x.username +"</td>";
                temp += "<td>"+ x.email +"</td>";
                temp += "<td>"+ x.address.street +"</td>";
                temp += "</tr>";
              });
              
              document.getElementById("data").innerHTML = temp;
            }
          }
        );
    });