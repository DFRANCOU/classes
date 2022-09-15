

 /* 1.Crea una clase llamada Punto con sus dos coordenadas X e Y.*/

class Punto {

    constructor(X, Y) {
      this.X = X;
      this.Y = Y;
    }

    description() {
        return `${this.cord1} ${this.cord2}`;
    }

}

let Cpunto = new Punto(2, 5);

console.log(Cpunto.description());

/* 2. Añade un método constructor para crear puntos fácilmente. Si no se recibe una coordenada,
su valor será cero.*/

class Addpunto {

    static count = 0;

    static increment() {
        this.count = this.count + 1;
    }
}

class Crearpuntos extends Addpunto {
    static getCount() {
        return this.count;
    }
}

console.log(Addpunto.count);
Addpunto.increment();
console.log(Addpunto.count);
console.log(Crearpuntos.getCount());

/* 3. Crea un método llamado ver para que al imprimir por pantalla un punto aparezca en formato
(X,Y) */

ver = new Punto(5,5);

console.log(ver);



