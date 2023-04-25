// callback es una función dentro de otra función

function prueba(callback) {
    callback("pedro")
}

function decirNombre(nombre) {
    console.log(nombre)
}

prueba(decirNombre)

// en formato de =>
const pruebaNueva = (callback) => {
    console.log("piter")
}

pruebaNueva(nombre => console.log(nombre));


// Hagamos un ejercicio

class Persona {
    constructor(nombre, instagram){
        this.nombre = nombre
        this.instagram = instagram
    }
};

let persona = new Persona("Felipe Pérez", "@perezfelipe");
console.log(persona);

const datosPersonas = [
    ["Roberto", "@robert"],
    ["Camila Meza", "@camilaneza"],
    ["Tom", "@tom_"],
    ["María Ría", "@ririra"]
];

const personas = []

for (let i=0; i < datosPersonas.length; i++) {
    personas[i] = new Persona(datosPersonas[i][0], datosPersonas[i][1]);
}

// vemos que se creó
for (let i=0; i < datosPersonas.length; i++) {
    console.log(i, personas[i])
}

// personas es un array con 4 persona

// creamos una función que devuelva el nombre, no lo vamos a hacer como método porque si

const obtenerPersona = (id, cb) => {
    if (personas[id] == undefined) {
        cb("No se ha encontrado la persona")
    } else {
        cb(null, personas[id])
    }
}

obtenerPersona(1,(error, persona) => {
    if (error) {
        console.log(error)
    } else {
        console.log(persona.nombre,persona.instagram)

    }
})
obtenerPersona(0,(error, persona) => {
    if (error) {
        console.log(error)
    } else {
        console.log(persona.nombre,persona.instagram)
    }
})
 
obtenerPersona(10,(error, persona) => {
    if (error) {
        console.log(error)
    } else {
        console.log(persona.nombre, persona.instagram)

    }
})

// esto se empieza a complicar si se enidan más call back, eso lo solucionan las promesas