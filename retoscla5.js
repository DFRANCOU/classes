// Retos clase 5//

// Arreglos //

// 1. declarar un array que vamos a llamar "Estudiantas" con los siguientes valores "Ana", "Manuel", "Raúl", "Carolina", "María","Antonio", "craistina"//

// let estudiantes = ["Ana", "Manuel", "Raúl", "Carolina", "María","Antonio", "craistina"];

// console.log(estudiantes);

// 2. Con un ciclo recorrer el e imprime en consola los estudiantes que comienzan con A //


// let estudiantes = ["Ana", "Manuel", "Raúl", "Carolina", "María","Antonio", "craistina"];
//     for (let i = 0; i < estudiantes.length; i++){
//         if (estudiantes[i].startsWithf("A") == true){
//             console.log(estudiantes[i])
//         }
//     }

// let estudiantes1 = ["Ana", "Manuel", "Raúl", "Carolina", "María","Antonio", "craistina"];
//     for (let i = 0; i < estudiantes1.length; i++){
//         if (estudiantes1[i][0] === "A"){
//             console.log(estudiantes1[i])
//         }
//     }

    //3. con otro ciclo recorrer el array e imprime en consola los estudiantes cuyos nombres tengan mas de 6 letras //

    // let estudi = ["Ana", "Manuel", "Raúl", "Carolina", "María","Antonio", "craistina"];
    // for (let i = 0; i < estudi.length; i++){
    //     if (estudi[i].length>6){
    //         console.log(estudi[i])
    //     }
    // }

// Reto objetos //

// 1. Declara un objeto que represente una mascota que tenga los siguientes atributos:nombra, tipo de animal, edad, nombre del dueño y juguetes.//

//2.el atributo juguetes debe contener un arreglo de valores que hagan referencia a todos los juguetes a todos los jugetes de la mascota//

// mascotas //

// const miMascota1 = {
//     nombre: "klamidya",
//     animal: "perro",
//     edad:   "6 años",
//     dueño:  "Agustin",
//     juguetes: ["pelota","Hueso","gallina","palo"]
// }

// const miMascota2 = {
//     nombre: "Escorbuto",
//     animal: "gato",
//     edad:   "4 años",
//     dueño:  "David",
//     juguetes: ["cascbel","tripa de pollo","caja"]
// }

// const miMascota3 = {
//     nombre: "Flufi",
//     animal: "Zarigueya",
//     edad:   "4 años",
//     dueño:  "Ana",
//     juguetes3: ["caja","pelota","pato"]
// }

// let mascotaDueños = [];
// mascotaDueños.push(miMascota1);
// mascotaDueños.push(miMascota2);
// mascotaDueños.push(miMascota3);

// console.log(mascotaDueños);

// for (let i = 0; i < mascotaDueños.length; i++){
//     console.log("tu mascota es: " + mascotaDueños[i].nombre + " el dueño es :" + mascotaDueños[i].dueño);
// }

// Metodos de Array//

// 1. Declara un array que tenga los números del 1 al 30, utilizando un método del array //

// let numeros = [];

// for (let i = 1; i <=30; i++){
//     numeros.push(i)
// }
// console.log(numeros);

// // 2. Debes aplicar un método del array para filtrar todos los números que sean múltiplos de 3 // 

// // multiplos de 3//

// const multip = numeros.filter (numeros =>numeros%3 === 0);

// console.log(multip);

// //3. Debes aplicar un método del array para filtrar todos los números que sean múltiplos de 5.//

// const multip5 = numeros.filter (numeros =>numeros%5 === 0);

// console.log(multip5);

//4. Debes aplicar un método para crear un nuevo arreglo que contenga el valor de cada número multiplicado por 2.//

// let multp2 = []

//     for (let i = 0; i <=numeros.length; i++){
//         multp2.push(numeros[i]*2);
//     }
//     console.log(multp2);

    // let multp2 = numeros.map(numeros => numeros * 2);

    // console.log(multp2);

// 5. Declara un array que tenga valores de diferentes tipos de datos, y utiliza un método que nos diga si todos los tipos de datos son iguales o no.//

let datos = ["klamidya", 6, true];

let tiposDatos = datos.every((datos) => typeof datos === "string");
    
console.log(tiposDatos);

