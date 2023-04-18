// const es una variable solo de lectura

function printManyTimes(str) {
    var sentence = str + " is cool";

    sentence = str + " is amazing!"

    for (let i=1; i < str.length; i+=2) {
        console.log(sentence);
    }
}

printManyTimes("Holanda")


// pero si hago se cae porque sentence es read only
// TypeError: Assignment to constant variable.

function printManyTimes(str) {
    const sentence = str + " is cool";

    sentence = str + " is amazing!"

    for (let i=1; i < str.length; i+=2) {
        console.log(sentence);
    }
}

printManyTimes("Holanda")

// es costumbre usar las const con mayúsculas
// idealmente usar const y let no más, es raro necesitar var