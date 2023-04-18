function testElse(val) {
    if (val > 5) {
        result = "Bigger than 5"
    }

    if (val <=5) {
        result = "5 or Smaller"
    }

    return result;
}

console.log(testElse(5));
console.log(testElse(15));
console.log(testElse(3));

console.log("====================")

function testWithElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5"
    } else {
        result = "5 or Smaller"
    }

    return result;
}

console.log(testWithElse(5));
console.log(testWithElse(15));
console.log(testWithElse(3));