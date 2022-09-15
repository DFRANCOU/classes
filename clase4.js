
// // calculadora

// let a = 5;
// let b = 5;
// console.log (a+b);
// b=0;
// console.log (a+b);

// let suma=(a+b);
// let resta=(a-b);
// let multiplicacion=(a*b);
// let division=(a/b);

// console.log(suma);
// console.log(resta);
// console.log(multiplicacion);
// console.log(division);

// if(b==0){
//     console.log("la division por cero no esta permitida");
// }else{
//     console.log(a/b);
// }

// // incia ejercisio de fibonacci //

// let anterior = 0; 
// let actual = 1; 
// let sumafib;


// for (let i = 1; i <= 10; i++) {
//     console.log(anterior);
//     sumafib = anterior + actual;
//     anterior = actual;
//     actual = sumafib;
// }

// 


//clase4 

// ciclo for

// let b = "Hello World";

// for (let i = 1; i <= 4; i++) {
//     console.log(b);
// }

// // reto - arrys - reto 1

// let daysOfweek = ["none", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// console.log(daysOfweek);
// console.log(daysOfweek[3]);
// console.log(daysOfweek.length);

// // agregar un elemento al fina

// daysOfweek.push("semana 1");
// console.log(daysOfweek);

// //quitar valor agregado/

// daysOfweek.pop("semana 1");
// console.log(daysOfweek);

// // agregar un elemento al incio 

// daysOfweek.unshift("Dicembre");
// console.log(daysOfweek);

// // reto 2

// let meses = [ 1,"January", 2, "February", 3, "march", (8 == 9),4 ];

// console.log(meses);

// // reto 3

// const hortalizas = {
//     nombre: ["zanahoria", "tomate", "cebolla"],
//     valor: 75,
//     costo: function(){
//         console.log("precio");
//     }
// }

// const frutas = {
//     nombre: ["mango", "manzana", "pera"],
//     valor: 100,
//     costo: function(){
//         console.log("precio");
//     }
// }

// const granos = {
//     nombre: ["frijor", "alverja", "lentaja"],
//     valor: 125,
//     costo: function(){
//         console.log("precio");
//     }
// }

// let fruver = [hortalizas, frutas, granos];

// console.log(fruver)

// saludo //

// const alumno = {
//     nombre: ["David", "Ana", "Liliana"],
//     edad: 75,
//     saludo: function(){
//         console.log("hello everybody");
//     }
// }

// const cars = {
//     nombre: ["Mazda", "Toyota", "Nisan"],
//     modelo: 2022,
//     encender: function(){
//         console.log("carro encendido");
//     },
//     apagar: function(){
//         console.log("carro apagado");
//     }
// }

// for of, recorre elemneto por elemento dentro del ciclo for,
// for in se trae el indice o lugar que ocupa en la variable 

// const carros = ["Mazda", "Toyota", "Nisan"];
// for (const carro of carros ) {
//     console.log(carro);
// }

