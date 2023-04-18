function testLogicalAnd(val) {

    if (val <= 50) {
        if (val >= 25) {
            return "Yes";
        }
    }

    return "No";
}

// El operador && es un AND
function testLogicalAlternative(val) {
    if (val <=50 && val >= 25 ) {
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(10));
console.log(testLogicalAlternative(10));


// El operador || es un OR
function testLocalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

console.log("10",testLocalOr(10));
console.log("12",testLocalOr(12));
console.log("20",testLocalOr(20));
console.log("9",testLocalOr(9));