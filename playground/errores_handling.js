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
// OTRA
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