function checkEqual(a,b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}
console.log("2,2",checkEqual(2,2))
console.log("3,2",checkEqual(3,2))

// condition ? statement is true : statement if false

function checkTernaryEqual(a,b) {
    return a === b ? "Verdadero" : "Falso"  // es solo un ejemplo solo se podría poner el primero
}

console.log("2,2",checkTernaryEqual(2,2))
console.log("3,2",checkTernaryEqual(3,2))

// Podemos hacer nested ternary

function checkSign(num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero" // acá está nested la cosa
}

console.log("Nested 9",checkSign(9));
console.log("Nested 0",checkSign(0));
console.log("Nested -24",checkSign(-24));