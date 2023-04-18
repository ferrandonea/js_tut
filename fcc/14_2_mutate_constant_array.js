const s = [5,7,2];

function editInPlace(){
    "use strict";
    s[0] = "a"
    s[1] = 22
    s[2] = "FIN"
}
editInPlace();
console.log(s)
// [ 'a', 22, 'FIN' ]

// Esto se puede prevenir 

function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI:3.14
    };

    try {
        MATH_CONSTANTS.PI = 98
    } catch ( ex ) {
        console.log(ex)
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);
// Ahora da 98 


function freezeNewObj(){
    "use strict";
    const MATE_CONSTANTS = {
        PI:3.14
    };
    Object.freeze(MATE_CONSTANTS);

    try {
        MATE_CONSTANTS.PI = 98
    } catch ( ex ) {
        console.log(ex)
    }
    return MATE_CONSTANTS.PI;
}

const PIE = freezeNewObj();
console.log(PIE);
// Ahora da error