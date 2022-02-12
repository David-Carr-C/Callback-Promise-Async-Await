//ES6

const somethingWillHappen = () => {
    return new Promise((resolve,reject)=>{
        if (true) {
            resolve("All It's resolved!");
        } else {
            reject("Something gone wrong!");
        }
    })
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

console.log("Aunque la promesa se ejecute primero, este se hara creando asincronismo");

const somethingWillHappen2 = () =>{ //Declarar la promesa dentro de la funcion es para que se ejecute la promesa hasta que se llame la funcion, de otra forma esta se ejecutaria al iniciar el archivo, al cargar la variable
    return new Promise((resolve,reject)=>{ //Asi que lo que queremos es que se ejecute cuando se llame la funcion
        if (true) {
            setTimeout(()=>{
                resolve("True");
            },2000);
        } else {
            const error = new Error("False");
            reject(error);
        }
    })
}

somethingWillHappen2()
    .then (response => console.log(response))
    .catch(err => console.error(err))


console.log("Este log aparecera segundo");

Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then (response => {
        console.log("Array of results: "+response)
    })
    .catch (err => {
        console.error(err)
    })

somethingWillHappen2().then(response => {
    console.group("Last Exercise");
    console.log("Tercera vez que se ejecuta la promesa, pero como ya esta resuelta\n no se tiene que volver a esperar 2 segundos");
    console.log(response);
    console.groupEnd();
})

    