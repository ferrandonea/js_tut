function ourReusableFunction(){
    console.log("Heyya, World");
}

ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

function ourNewFunction(){
    console.log("Hola world!")
}

ourNewFunction();

// Puedo pasar argumentos

function ourFunctionWithArgs(a, b) {
    console.log(a-b);
}

ourFunctionWithArgs(10, 5);