function randomFraction(){
    return Math.random()
}

console.log(randomFraction());

function randomWholeNumber(upper_limit){
    return Math.floor(Math.random()*upper_limit)
}
console.log(randomWholeNumber(20)); // random entre 0 y 19

function randomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1 )) + ourMin;
}

console.log(randomRange(3,20)); // random entre 0 y 19
