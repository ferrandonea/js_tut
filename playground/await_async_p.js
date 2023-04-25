// Sistema que muestre la información de tareas ordenadas bajadas de un "servidor", ejemplo fisica 1 antes de fisica 2

const materias = [
    {
        nombre: "Fisica 4",
        nota : 7
    },
    {
        nombre: "Calculo 3",
        nota : 8
    },
    {
        nombre: "Base de Datos 3",
        nota : 9
    },
    {
        nombre: "Matemáticas discretas 2",
        nota : 7
    },
    {
        nombre: "Programación 4",
        nota : 8
    }

]

const obtenerMateria = (id) => {
    return new Promise((resolve, reject)=>{
        let materia = materias[id];
        if (materia == undefined) reject("No existe la materia");
        else setTimeout(()=>resolve(materia), Math.random()*400); // esto simula consulta al servidor
    })
}

// obtenerMateria(1).then(res => console.log(res))
// obtenerMateria(2).then(res => console.log(res))
// obtenerMateria(3).then(res => console.log(res))
// obtenerMateria(4).then(res => console.log(res))

// esto no queda en orden (lo comenté lo de arriba)

console.log("================")

const devolverMaterias = async () => {
    let materia = [];
    for (let i=0; i< materias.length; i++) {
        materia[i] = await obtenerMateria(i); //espera a que se haga
        console.log(materia[i])
    }
}

devolverMaterias()