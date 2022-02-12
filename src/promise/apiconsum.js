let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://rickandmortyapi.com/api/character/";

const fetchData = (url) =>{ //Se crea una funcion donde se plantea pasar una liga, despues esta funcion retornara una promesa, la cual creara una promesa, empleara los datos y despues retornara los resultados
    return new Promise((resolve, reject) => { //Los parametros son then=resolve y data lo que se pasa por parametro en resolve, y catch=reject y err lo que se pasa por parametro en reject
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET",url, true);
        xhttp.onreadystatechange = (event => {
            if (xhttp.readyState===4) {
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    reject(new Error("No se pudo consumar la API"));
                }
            }
        })
        xhttp.send(); //Se hace todo el proceso de peticion http
    })
}

fetchData(API)
    .then( data => {
        console.log(data.info.count)
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(err => console.error(err))


console.log("Waiting"); //Todas las anteriores son ejecuciones asincronas