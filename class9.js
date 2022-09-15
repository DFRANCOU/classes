class Persona {

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    saludar() {
      return `${this.name} dice Hola`;
    }
  
  }
  
  class OtraClase {
  
  }
  
  const Edwin = new Persona("Edwin Otalvaro", 28);
  
  
  
  class Programador extends Persona {
  
    constructor(name, age, lenguajes) {
      // El super llama al constructor de la clase que estoy Heredando
      super(name, age);
  
      this.lenguajes = lenguajes;
    }
  
    
  
  }
  
  console.log(Edwin.saludar());
  
  const EdwinProgramador = new Programador('Edwin Programador', 50, ["javascript"] );
  
  console.log(EdwinProgramador);
  console.log((EdwinProgramador.lenguajes[0]));


  // Asignacion
// const algo = "valor"
// const objeto = { hola: 'mundo' }

//Expresion
// algo
// objecto.hola

// Como buena practica iniciar el nombre en Mayuscula
function Persona(name, age) {
    this.name = name;
  
    if (age) {
      this.age = age;
    } else { // Podriamos lanzar un error o asignar un valor por defecto
      this.age = 0;
    }
  
    this.saludar = function() { //no usar arrow function si quieres usar el this
      return `${this.name  } dice Hola`;
    }
  
    this.algunaPropiedadCostosa = "el valor x";
  
  }
  // Llamar siempre con new si es constructor function
  const edwin = new Persona("Edwin");
  
  // Imprime el objecto edwin
  console.log(edwin)
  // Para acceder a propiedades de edwin con .
  console.log(edwin.name)
  console.log(edwin.saludar())
  
  // HERENCIA
  function Programador(name,lenguajes) {
    //Un programador es una persona
    //call llama/ejecuta a la funcion Persona, no se preocupen por el this, this no cuenta como parametro!!!!!
    
    Persona.call(this, name, 18); 
    this.lenguajes = lenguajes;
  
  }
  
  function FrontendProgramador(name) {
    Persona.call(this, 'UnNombre');
    Programador.call(this, name, ['javascript']) //
  }
  
  const LauraProgramadora = new Programador("Laura",["Javascript", "Java"]);
  
  
  console.log(LauraProgramadora);
  console.log(LauraProgramadora.saludar())
  
  const frontendProgramador = new FrontendProgramador("Camila");
  
  console.log(frontendProgramador);
  
  