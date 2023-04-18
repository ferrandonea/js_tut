var myGlobal = 10;

function fun1(){
    /* 
    si dentro de una función lo asigno como 
    var oopsGlobal = 5 queda como scope local

    pero en las funciones lo puedo declarar como
    oopsGlobal = 5 (sin el var)
    y queda como global
    */
    var oopsGlobal = 5;

}

function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }

    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output)
}

fun1();
fun2();

// ahora veamos el local scope

function myLocalScope(){
    var myVar = 55555;
    console.log(myVar)
}
myLocalScope();

// esto va a dar error, obviamente
console.log("Local scope", myVar)