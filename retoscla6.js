// RETO FUNCIONES //

// 1 Necesitamos crear una calculadora, y para ellos debemos hacer las siguientes funciones:
//   ● Suma.
//   ● Resta.
//   ● Multiplicación.
//   ● División (ten en cuenta que si se va a dividir por cero, imprimimos que no se puede dividir por cero y el resultado será cero).
//   ● Potenciación.
// También debe ser capaz de dar soluciones a ecuaciones diferenciales (es broma 😅)...
// La función debe recibir los parámetros y entregarnos el valor de la operación aritmética.
// Para probar vamos a hacer 5 operaciones por cada función.
// Y como plus, debemos validar que los parámetros si cumplan con que sean números. Si pasa algo diferente como un texto u otro objeto, entonces debemos imprimir el error y devolver cero en ese caso.

// ejemplo 1 //

// function suma (numero1,numero2){
//     return (numero1 + numero2);
// }

// console.log(suma (10, 5));

// ejemplo arrow //

// let suma = (numero1, numero2) => numero1 + numero2;

// console.log( suma (10, 25));

// funciones calculadora //

// let suma = (numero1, numero2) => numero1 + numero2;

// console.log( suma (10, 10));

// let resta = (numero1, numero2) => numero1 - numero2;

// console.log(resta (8, 5));

// let multiplicacion = (numero1,numero2) => numero1 * numero2;

// console.log(multiplicacion (8, 5));

// let division = (numero1,numero2) => {
//     if (numero2 === 0){
//         console.log("no se puede dividir por 0");
//         return 0;
//     }
//     return numero1 / numero2;
// }

// console.log(division (8, 0));

// let potenciacion = (numero1,numero2) => numero1 ** numero2;

// console.log(potenciacion (8, 5));

// mensje encriptado //

// vamos a crear un arrow function para pasarla como callback a un .map() que se le aplicará a una lista de strings, está función tendrá la capacidad de encriptar nuestro lenguaje, y lo que hara es:

// 1. Primero convertir todo el mensaje a mayúscula.
// 2. Convertir los siguientes carácteres:
// * A -> 4
// * S -> 5
// * E -> 3
// * O -> 0
// * G -> 6
// * I -> 1
// * T -> 7

// 3. imprimir en pantalla cada frase encriptada.

// las fraces que estarán en el array las construye cada uno
// NOTA: tener en cuenta las tildes.
// PISTA: Exisiste un método de String para remplasar letras. //

// Array con fraces //

let frases = [ " I want to learn language program, because I have a goal for my future and my family's future, I want take the risk and get a new job with new challenges.", " This is something new for me, the world change fast and this is part of the change."];

// 1. Cambiara fraces a mayúscula //

// let encriptar = (frase) => frase.toUpperCase(); 
// console.log(frases.map(encriptar));
 
// 2 cambiara letras por numeros //


// let letrasAnumeros = (letrasNum) => letrasNum.replace(/A/igm, "4",).replace(/S/igm, "5",).replace(/E/igm, "3",).replace(/O/igm, "0",).replace(/G/igm, "6",).replace(/I/igm, "1",).replace(/T/igm, "7",);


// console.log(frases.map(letrasAnumeros));

let fraseEncriptada = (frase) => frase.toUpperCase().replace(/A/gm, "4",).replace(/S/gm, "5",).replace(/E/gm, "3",).replace(/O/gm, "0",).replace(/G/gm, "6",).replace(/I/gm, "1",).replace(/T/gm, "7",);
    
console.log(frases.map(fraseEncriptada));