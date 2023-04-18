// permite meter un número variable de argumentos
// el rest operator es ...

const sum = (function() {
    return function sum(x,y,z) {
        const args = [x,y,z];
        return args.reduce((a,b) => a+b,0);
    };
})();

console.log(sum(1,2,3))
// eso da 6, pero solo puedo meter arreglos con largo 3

const sumNew = (function() {
    return function sum(...args) {
        return args.reduce((a,b) => a+b,0);
    };
})();

console.log(sumNew(1,2,3,4,5))
// eso da 15