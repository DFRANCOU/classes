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