/**
 * 1. Spread operator
 * 2. Destructuring
 * 3. Hoisting
 * 4. Block Scope
 * 5. Closure
 */

//  1. Spread operator
const dogs = ['boxer', 'golden', 'pastor', 'criollo']
const cats = ['persian', 'siamese', 'angora', 'criollo']

const animals = [...dogs, ...cats]

// console.log(animals);

const personaInfoBD1 = {
    nombre: 'Ana Mile',
    direccion: 'Belen',
    trabajo: {
        direccion: 'Valhala',
    }
}

const personaInfoBD2 = {
    apellido: 'Orrego',
    cedula: '123456',
}

const persona = {...personaInfoBD1, cedula: personaInfoBD2.cedula}

// console.log(persona)

// 2. Destructuring

const countries = ['colombia', 'peru', 'venezuela', 'chile', 'argentina', ['a', 'b', 'c']];

const [colombia, peru, venezuela, _, argentina, [firstLetter]] = countries;

// console.log(colombia);
// console.log(peru);
// console.log(venezuela);
// console.log(argentina);
// console.log(firstLetter);


const personaInfo = {
    nombre: 'Ana Mile',
    direccion: 'Belen',
    trabajo: {
        direccion: 'Valhala',
    }
}

let {nombre, direccion, trabajo: {direccion: direccionTrabajo}} = personaInfo

// console.log(nombre);
// console.log(personaInfo)
// console.log(direccion);
// console.log(trabajo);

// const {direccion:direccionTrabajo} = trabajo;

// console.log(personaInfo);

function calculator() {
    let total = 0;

    function sum(x) {
        total = total + x;
        return total;
    }

    function subtract(x) {
        total = total - x;
        return total;
    }

    function multiplication(x) {
        total = total * x;
        return total;
    }

    function division(x) {
        total = total / x;
        return total;
    }

    return {
        sum,
        subtract,
        multiplication,
        division
    }

}

const calculator1 = calculator();

console.log(calculator1.sum(3));
console.log(calculator1.subtract(1));
console.log(calculator1.multiplication(4));
console.log(calculator1.division(2));
console.log(calculator1.sum(3));
console.log(calculator1.subtract(2));
console.log(calculator1.multiplication(100));
