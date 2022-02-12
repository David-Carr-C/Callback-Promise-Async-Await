function sum(num1, num2) { //Se crea una funcion la cual sumara dos numeros
    return num1+num2;
}

function calc(num1, num2, callback) { //Se pasa por parametro un numero, otro numero y la funcion anteriormente creada
    return callback(num1,num2); //La funcion se ejecuta, y si recordamos, antes necesitaba dos numeros, asi que rellenamos los campos
}
//El "callback" es la funcion que es pasada por parametro
console.log(calc(6, 2, sum)); //Se emplea y se establecen las bases de como crear un comportamiento asincrono

function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date)
    },3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);


//Test
function call(a,b) {
    return a;
}
a = function() {
    console.log("Hello!");
}
avr = call(a,2);
avr();

avr = a;
avr();