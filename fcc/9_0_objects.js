var ourDog = {
    "name" : "Camper",
    "legs" : 4,
    "tails" : 1,
    "comida favorita": "lasaña",
    "friends" : ["everything"]
}

var myDog = {
    "name" : "Quincy",
    "legs" : 3,
    "tails" : 2,
    "comida favorita" : "lechuga",
    "friends" : []
}

console.log(myDog) // parece que esto viene con __repr__ listo

// podemos acceder a las propiedades con un punto

var dogName = myDog.name
console.log(dogName)

// o con brackets, si el nombre tiene un espacio es obligatorio
console.log(myDog["tails"])
console.log(myDog["comida favorita"])

// obviamente en el bracket podemos usar variables
var tipoDeConsulta = "legs"
console.log(myDog[tipoDeConsulta])

// podemos actualizar con dot notation o bracket
myDog.name = "Happy Quincy"
myDog["comida favorita"] = "piña"
console.log(myDog)

// podemos agregar propiedades usando dot o bracket 
myDog.bark = "bow-wow"
myDog["casa"] = "De madera"
console.log(JSON.stringify(myDog))

// para borrar una propiedad se usa delete
delete myDog.bark
delete myDog["comida favorita"]
console.log(JSON.stringify(myDog))

// podemos testear si un objeto tiene una propiedad

function checkObj(checkProp) {
    if (myDog.hasOwnProperty(checkProp)) {
        return myDog[checkProp]
    } else {
        return "Not Found"
    }
}

console.log("Prop Cheq = ",checkObj("pony") );
console.log("Prop Cheq = ",checkObj("name") );