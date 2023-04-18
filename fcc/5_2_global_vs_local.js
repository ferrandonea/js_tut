var outerWear = "T-Shirt"

function myOutfit(){

    return outerWear;
}

console.log("1 ", myOutfit());

// hagamos el cambio de local a global

var myWear = "Camiseta"

function mySalida(){
    var myWear = "Pantalón"
    return myWear;
}

// myWear se asigna en el scope local, no el global
console.log("2 ",mySalida());
console.log("3 ",myWear);
