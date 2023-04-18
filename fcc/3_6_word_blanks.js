function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var resultado = "";
    resultado += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + "."
    return resultado;
}

console.log(wordBlanks("dog","big","ran", "quickly"))
