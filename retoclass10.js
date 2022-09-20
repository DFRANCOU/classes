

 /* 1.Crea una clase llamada Punto con sus dos coordenadas X e Y.*/

// class Punto {

//     constructor(X, Y) {
//       this.X = X;
//       this.Y = Y;
//     }

//     // description() {
//     //     return `${this.cord1} ${this.cord2}`;
//     // }

// }

let Cpunto = new Punto(2, 5);
Cpunto.Y=6;
console.log(Cpunto.description());

/* 2. Añade un método constructor para crear puntos fácilmente. Si no se recibe una coordenada,
su valor será cero.*/


class Punto {

constructor(X, Y) {
    if(x ){
        this.x = x
    }else {
        this.x = 0
    }
    if(y ){
        this.y = y
    }else {
        this.y = 0
    }

  }
}

/* 3. Crea un método llamado ver para que al imprimir por pantalla un punto aparezca en formato
(X,Y) */

ver(){
    return `("${this.x}, ${this.y}")`
}


/* 4 */

vector(otroPunto){
    console.log(this)
    console.log(otroPunto)
    return new Punto(this.x + otroPunto.x, this.y+otroPunto.y);
}

/* 5 */

distancia(otroPunto){
    console.log(this)
    console.log(otroPunto)
    potencia1 = Math.pow(this.x - otroPunto.x , 2)
    potencia1 = Math.pow(this.y - otroPunto.x , 2)
    resultado = Math.sqrt()
}

punto = new Punto()
console.log("punto:")
console.log(punto.ver())

punto2 = new Punto(3,3)
console.log("punto2:")
console.log(punto2.ver())

punto3 = new Punto(3)
console.log("punto3:")
console.log(punto3.ver())

punto4 = new Punto()
console.log("punto4:")
console.log(punto4.ver())



// class Addpunto {

//     static count = 0;

//     static increment() {
//         this.count = this.count + 1;
//     }
// }

// class Crearpuntos extends Addpunto {
//     static getCount() {
//         return this.count;
//     }
// }

// console.log(Addpunto.count);
// Addpunto.increment();
// console.log(Addpunto.count);
// console.log(Crearpuntos.getCount());





