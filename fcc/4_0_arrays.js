var ourArray = ["Jhon", 23];
console.log(ourArray);

// Puede ser nested
var myArray = [["the universe",42], ["everything", 1010101]];
console.log(myArray);

// Se accede con bracket notation, zero indexed
var newArray = [50,69,70];
var ourData = newArray[0];
console.log(ourData);

// que pasa si me paso
console.log(newArray[10]); // undefined

// puedo modificarlos asi
newArray[1] = 99;
console.log(newArray);

// también se puede en multidimensional
var multiArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
console.log("Multi 0-0 =", multiArray[0][0]);
console.log("Multi 3-0-1 =", multiArray[3][0][1]);

// append data with push  (al final)
var latestArray = ["Stimpson", "J", "cat"];
latestArray.push("Hola");
console.log("Push array = ",latestArray)
latestArray.push([56, "cátodo"]);
console.log("Push array 2 = ",latestArray)

// puedo sacar un item con pop (el último) y si quiero asignarlo a una variable
var removedFromArray = latestArray.pop()
console.log("Pop = ",removedFromArray)
console.log("Pop = ",latestArray)

// el shift es como el pop pero saca el primer elemento
removedFromArray = latestArray.shift()
console.log("Shift = ",removedFromArray)
console.log("Shift = ",latestArray)

// unshift es parecido a push, pero lo agrega al principio
latestArray.shift()
latestArray.unshift("Happy")
console.log("Unshift = ",latestArray)
