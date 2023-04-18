function testEqual(val) {
    if (val == 12) {
        return "Equal"
    }

    return "Not Equal"
}

console.log("1", testEqual(12));
console.log("2", testEqual("12"));
console.log("3", testEqual("11"));
console.log("4", testEqual(9));
// El == considera a 12 igual "12"
// porque convierte tipos

/*
En JS existe una igualdad estricta
se hace con ===
*/

function testNuevoEqual(val) {
    if (val === 12) {
        return "Equal"
    }

    return "Not Equal"
}

console.log("1.2", testNuevoEqual(12));
console.log("1.2.b", testNuevoEqual(12.0));
console.log("2.2", testNuevoEqual("12"));
console.log("3.2", testNuevoEqual("11"));
console.log("4.2", testNuevoEqual(9));