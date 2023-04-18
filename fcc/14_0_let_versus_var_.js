var catName = "Quincy";
var quote;

var catName = "Beau";

function catTalk() {
    "use strict";
    // esto permite buscar common mistakes, por ejemplo no declarar variables

    catName = "Oliver";
    quote = catName + "say Meow!";
}

catTalk()

// Si lo hacemos con let no nos dejaría declarar catName 2 veces, si se puede asignar
// mucha gente solo usa let y const y no usa var

// var se declara global (o local en funcion) pero let siempre es local en el block , es decir entre {}
function checkScope() {
    "use strict";
    var i = "function scope"
    if (true) {
        i = "block scope";
        console.log("Block scope i is: ",i)
    }
    console.log("Function scope i is: ",i)
}

checkScope()

function checkNewScope() {
    "use strict";
    let i = "function scope"
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ",i)
    }
    console.log("Function scope i is: ",i)
}

checkNewScope()