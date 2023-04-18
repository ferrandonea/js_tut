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

// Veamos el not equal

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal"
    }
    return "equal"
}

console.log("=========") 
console.log("6", testNotEqual("99")); //equal
console.log("7", testNotEqual(99)); //equal

// también existe la restricción estricta
function testNotEqualStrict(val) {
    if (val !== 99) {
        return "Not Equal"
    }
    return "equal"
}
console.log("=========")
console.log("5.2", testNotEqualStrict(99));
console.log("6.2", testNotEqualStrict("99"));
