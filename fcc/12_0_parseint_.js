// ParseInt takes a string and returns an integer

function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger("56")) // 56
console.log(convertToInteger("aa")) // NaN
console.log(convertToInteger(56))  // 56