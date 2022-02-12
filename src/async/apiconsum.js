const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://rickandmortyapi.com/api/character/";

const fetchData = url => {//Esta es una funcion normal
    return /*La cual termina cuando hay return */ new Promise /*Pero se regresa una promesa, la cual es una funcion con otro alcance diferente */
    ((resolve,reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET",url,true);//Se crea un objeto capaz de abrir el url en formato http usando su GET
        xhttp.onreadystatechange/*Es activado cuando se ejecuta send(); */ = () => {
            //Contendra una funcion dentro, la cual se ejecutara cuando se active la variable
            if (xhttp.readyState === 4)
                (xhttp.status === 200)?
                    resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error("No se pudo consumar la api!"))
        }
        xhttp.send();//Se activa la funcion dentro de onreadystatechange
    })//Aqui termina la promesa, su '()'

}
           //Se pasa por la primera funcion esta API para poderla ocupar dentro, pues dentro hay mas funciones que deberan llevar esta API
const getnShowDataFunction = async (API) => {
    try {              //Podemos tener acceso a la API gracias a que fue pasada como parametro anteriorment
        const noCharacters = await fetchData(API);
        const character = await fetchData(API+noCharacters.results[0].id);
        const origin = await fetchData(character.origin.url);

        console.log(noCharacters.info.count);
        console.log(character.name);
        console.log(origin.dimension);

        const [data,data2,data3] = await Promise.all([fetchData(API), fetchData(API+noCharacters.results[0].id), fetchData(character.origin.url)]);
        console.log(data.info.count,data2.name,data3.dimension);
    }catch(error) {
        console.error(error);
    }
}

console.log("Before");

getnShowDataFunction(API);

console.log("After");