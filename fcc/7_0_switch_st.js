function caseInSwitch(val) {
    var answer = "";
    // switch usa === para comparar, el estricto
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta"
            break;
        case 3:
            answer = "gamma"
            break;
        case 4:
            answer = "delta"
            break;
        default:
            answer = "STUFF" //es como un else
            break;
        
    }


    return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));
console.log(caseInSwitch(5));

// Ahora veamos un caso que 1,2,3 den lo mismo

function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "1,2 or 3";
            break;
        case 4:                
            answer = "es 4";
            break;
        case 5:
        case 6:
            answer = "Es 5 o 6"
            break;
        default :
            answer = "Nada que ver";
            break;

    }
    return answer;
}

console.log("1",sequentialSizes(1));
console.log("2",sequentialSizes(2));
console.log("3",sequentialSizes(3));
console.log("4",sequentialSizes(4));
console.log("5",sequentialSizes(5));
console.log("6",sequentialSizes(6));
console.log("7",sequentialSizes(7));
console.log("88",sequentialSizes(88));
