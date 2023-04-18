const arr1 = ['JAN','FEB','MAR','APR','MAY']

let arr2;
(function() {
    arr2 = arr1;
    arr1[0] = 'potato'
})();
console.log(arr2)

// arr2 es lo mismo que arr1 por eso es una copia
// para evitar esto se usa el spread, que copia contenido del array

const arr3 = ['JAN','FEB','MAR','APR','MAY']
let arr4;
(function() {
    arr4 = [...arr3];
    arr3[0] = 'potato'
})();
console.log("Spread Operator")
console.log(arr4)
console.log(arr3)
