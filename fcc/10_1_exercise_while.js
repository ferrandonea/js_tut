var contacts = [
    {
        "firstName" : "Harry",
        "lastName" : "Potter",
        "number" : "0994372684",
        "likes" : ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName" : "Sherlock",
        "lastName" : "Holmes",
        "number" : "4455156496",
        "likes" : ["Cases", "Violin"]
    },
    {
        "firstName" : "Kristian",
        "lastName" : "Vos",
        "number" : "unknown",
        "likes" : ["Gaming", "Foxes", "Javascript"]
    }

]

function lookUpProfile(name,prop) {
    // pide el firstname, si no existe entonces debiera hacerse cargo, lo mismo con las propiedades

    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName == name) {
            return contacts[i][prop] || "No such property" // esto si existe ocupa el primero, sino el segundo
        }
    }
    return "No such contact"
}

var data = lookUpProfile("Sherlock", "likes")
console.log(data);

var data = lookUpProfile("Akira", "likes")
console.log(data);

var data = lookUpProfile("Harry", "hello")
console.log(data);