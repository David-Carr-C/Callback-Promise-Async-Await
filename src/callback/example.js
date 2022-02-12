setTimeout(function() {
    console.log("Freeze!");
},3000); //<- setTimeout es una funcion que fuerza el asincronismo

console.log("Hello! Finish!");