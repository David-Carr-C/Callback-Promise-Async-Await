let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://rickandmortyapi.com/api/character/";

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET",url_api, true); //3er valor activa el asincronismo, por defecto es true
    xhttp.onreadystatechange/*Es escuchar un elemento, saber si este cambio sucede*/ = /*Entonces se va a ejecutar una funcion*/function (event) {
        if (xhttp.readyState === 4) { //Xmlhttprequest tiene estados donde el 4 es la peticion finalizada y la respuesta esta lista :: https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
            if (xhttp.status === 200) { //xmlhttprequest status, tiene como valor los mensajes de http, y estos varian desde 100 hasta 500//todo esto debido a que la peticion se completo, pero el http nos dira si obtuvo algun error 500, no encontro nada 400, hubo una redireccion 300, u ocurrio bien 200 //https://www.w3schools.com/tags/ref_httpmessages.asp
                callback(null, JSON.parse(xhttp.responseText)); //Ahora si utilizamos nuestra funcion pasada como parametro, primer valor es el error, pero en este caso no hay porque todo "se supone salio bien", asi que nos enfocamos en el segundo parametro para convertir la respuesta de la api/servidor en una respuesta JSON (JavaScript Object Notation)
            } else {
                const error = new Error("Error "+url_api); //si hay un error, crearemos un error
                return callback(error,null); //y pasaremos por el callback el error, y nos centraremos en este
            }
        }
    }
    xhttp.send(); //inicia la solicitud y esto hace que la funcion onready sea llamada, esto es debido a que onreadystatechange es una funcion listener que espera a que el estado de solictud cambie
}

fetchData(API, function(error1,data1) {
    if (error1){ 
        return console.error(error1);
    } 
    //console.log(data1.info.count);

    fetchData(API + data1.results[0].id, function (error2, data2) {//2.-
        if (error2) {
            return console.error(error2);
        }
        //console.log(data2.name);
            //Al estar declarada esta funcion dentro de un callback, sus valores de la funcion 2.- pueden seguir ocupandose
        fetchData(data2.origin.url, function (error3, data3) {
            if(error3){
                return console.error(error3);
            }
            //console.log(data3.dimension);

            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})
//Se inician los comportamientos asincronos cuando una funcion esta en espera que otra termine ^
console.log("Este mensaje esta al final del ejemplo, pero ocurrira primero");