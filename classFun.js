
// 1 una función que no reciba parámetros

function mensaje(){
    console.log("Hello everybody");
    console.log("Hello Ana");
    console.log("Hello group");
}

mensaje();

// 2 una función que reciba un nombre

function recibe(Name) {
    console.log("Hello everybody " + Name);
}

recibe("David");

// una función que reciba tres números

function multiplicar(number1, number2) {
    return (number1 * number2);
}

console.log(multiplicar(4, 6));

let resultado = multiplicar(4, 6);

console.log(resultado);

