var magic = function() {
    return new Date();
}

// esto es una función anónima, no tiene nombre
// esto se puede convertir en una arrow function

var magico = () => {
    return new Date();
}

// se puede acortar más aún

const supermagico = () => new Date(); // el const es una convención, podría ser var

// un ejemplo más práctico con argumentos
const sumar = (a,b)=> a+b;
console.log(sumar(8,9));

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));
// [ 1, 2, 3, 4, 5 ]

// definidos
const sumarPlus = (a,b=1) => a+b;
console.log(sumarPlus(8));
console.log(sumarPlus(8,7));

// higher orden map y filter, reduce que toman funciones como argumentos

const realNumberArray = [4,5.6,-9.8, 4.14,42, 6, 8-34, -2];

// con un simple argument como num no es necesario el parentesis
const squareList = (arr) =>  {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    // esto da todos los numeros que son enteros mayores que cero = 4,42 y 6
    // despues map lo eleva al cuadrado
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers)

