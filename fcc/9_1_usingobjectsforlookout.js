// Tenemos este adefesio

function phoneticLookup(val) {
    var result = "";

    switch(val) {
        case "alpha":
        result = "Adams";
        break;

        case "bravo":
        result = "Boston";
        break;

        case "charlie":
        result = "Chicago";
        break;

        case "delta":
        result = "Denver";
        break;

    }
}

// podemos usar un objeto
function betterPhoneticLookup(val) {
    var lookup = {
        "alpha" : "Adams",
        "bravo" : "Boston",
        "charlie" : "Chicago",
        "delta" : "Denver"         
    };
    result = lookup[val];
    return result;
}

console.log(betterPhoneticLookup("charlie"));

