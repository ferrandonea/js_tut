// promesas de ECMA script 6 

let nombre = "pedro";
const promesa = new Promise((resolve, reject) => {
    if (nombre != "pedro") reject ("Lo siento, el nombre no es pedro")
    else resolve(nombre)
}) // tiene 2 callback resolve y reject

console.log(promesa) // da como resultado una promesa, con los datos encapsulados

promesa.then(resultado => console.log(resultado)) // método que tienen las promesas que nos permiten llegar al valor de resolve
// es cuando solo todo bien


// OTRO EJEMPLO
let nombreNuevo = "lucas";
const promesaNueva = new Promise((resolve, reject) => {
    if (nombreNuevo != "pedro") reject ("Lo siento, el nombre no es pedro")
    else resolve(nombre)
}) // tiene 2 callback resolve y reject

console.log(promesaNueva) // da como resultado una promesa, con los datos encapsulados


// ESTO VA A DAR UN ERROR DE UNHANDLEDPROMISEREJECTION (?) promesaNueva.then(resultado => console.log(resultado)) 
// entonces lo tengo que catch
promesaNueva.then(resultado => console.log(resultado)).catch(error => console.log(error))