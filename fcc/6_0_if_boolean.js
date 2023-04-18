function welcomeToBooleans(){
    return false;
}

console.log("1", welcomeToBooleans());

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true"
    }
    return "No, it's false"
}

console.log("2", ourTrueOrFalse(true))

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false"
}

console.log("3", trueOrFalse(true))
console.log("4", trueOrFalse(false))
console.log("5", trueOrFalse(7))
console.log("6", trueOrFalse(0))