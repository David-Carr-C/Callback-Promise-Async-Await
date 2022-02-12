const doSomethingAsync = () => {
    return new Promise((resolve,reject) => {
        (true)?
            setTimeout(()=>{
                resolve("Completed! Async!")
            },3000)
            : reject( new Error ("Failed! Something gone Wrong!") );
    });
}

const doAsyncWithThisFunction = async () => {
    const something = await doSomethingAsync(); //La promesa puede ocurrir ahora, en el futuro o nunca
    console.log(something); //Si ejecutamos el resultado con el console log, como la funcion es async, este se espera a que se resuelva para mandar el console log

    return something; //Return { Pending }, lo cual significa que esta en espera de que se resuelva la promesa para ya retornar bien el valor
    //Pero como se regresa el valor antes de que ocurra -> entonces solo aparece Pending en el console log de abajo
}

console.log("Before the Async - Async JavaScript!");

console.log(doAsyncWithThisFunction()); //Como esta instruccion esta fuera de la funcion con el atributo async, simplementa la ejecuta y si no tiene nada dentro (en este caso Pending de que esta pendiente), lo lanza por pantalla

console.log("After the promise");


//Handling Errors
const aFunctionAsync = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
        return something;
    }catch (error) {
        console.error(error);
    }
}

console.log("Before the promise2");

console.log(aFunctionAsync()); //Pending -> esta esperando a la promesa

console.log("After the promise2"); //La ultima instruccion de JS