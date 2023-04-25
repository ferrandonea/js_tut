try {
    unafuncionquenoexiste()
}

catch (error) {
    console.log("Ups")
    console.log(error.name)

    console.log(typeof error)
    //console.log(error)
}
finally 
{
    console.log("Esto se ejecuta siempre")
}

console.log("========")
// OTRA PRUEBA
try {
    otrafuncionquenoexiste()
}

catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Error de Referencia")
    }
}
finally 
{
    console.log("Esto se ejecuta siempre nuevamente")
}

console.log("========")
// OTRA PRUEBA: El PODER DE FINALLY

const pruebaTry = () => {
    try {
        return 1;
    }
    catch (error) {
        return 2;
    }
    finally {
        return 3; // LE GANA A TODO
    }
}

console.log(pruebaTry())

// throw es como raise
console.log("========")

try {
    throw "Error: Inventé un error"
}
catch (error) {
    console.log(error)
}