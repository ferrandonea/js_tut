var firstName = "Alan";
var lastName = "Turing";

// Que pasa si el nombre tiene el símbolo " , entonces se escapa

var myStr = 'I am a "double quoted" string' // como en python
console.log(myStr);

// alternativamente
var myOtroStr = "I am a \"double quoted\" string"
console.log("otro ->",myOtroStr);

var nuevoString = "Soy un \\"
console.log(nuevoString);

// se puede hacer backticks
var freakStr = `'Esto tiene de todo' tiene "esto" y 'esto'`
console.log(freakStr);