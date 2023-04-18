// loop tradicional
var myArray = [];
var i = 0;
while ( i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray)

// tambien hay for
var ourArray = [];
for (var i=0;i<5;i++) {
    ourArray.push(i)
}
console.log(ourArray)
console.log(i)

// otro for
var newArray = [];
for (var i=1;i<6;i++) {
    newArray.push(i)
}
console.log(ourArray)
console.log(newArray)
console.log(i)

var anotherArray = []
for (var i=0; i < 10; i+=2){
    anotherArray.push(i)    
    // Esto da los pares
}
console.log(anotherArray)

var justAnotherArray = []
for (var i=1; i < 10; i+=2){
    justAnotherArray.push(i)    
    // Esto da los impares
}
console.log(justAnotherArray)

var justAnotherYetArray = []
for (var i=10; i > 0; i-=2){
    justAnotherYetArray.push(i)    
    // esto va al reves

}
console.log(justAnotherYetArray)

// Ahora como iteramos sobre un array

var ourLatestArray = [9,10,11,12]
var ourTotal = 0;

for (var i = 0; i < ourLatestArray.length; i++) {
    ourTotal += ourLatestArray[i];
}

var myArr = [ 2, 3, 4, 5, 6];
console.log("Total",ourTotal);

// do vs while

var miNuevoArregloNuevo = [];
var i = 10;

while (i<5) {
    miNuevoArregloNuevo.push(i)
    i++;    
}
console.log(i, miNuevoArregloNuevo) // en este caso chequea la condición antes de correr, entonces no corre

// en cambio en do lo ve después 

var miNuevoArregloNuevo = [];
var i = 10;
do {
    miNuevoArregloNuevo.push(i)
    i++;    
} while (i<5)
console.log(i, miNuevoArregloNuevo) // corrió una vez antes de chequear la condición
