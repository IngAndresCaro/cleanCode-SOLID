() => {
  //Principio de Responsabilidad Única (SRP):
  // Clase abstracta Forma
  abstract class Forma {
    // Método abstracto para calcular el área
    abstract calcularArea(): number;
  }

  // Clase Circulo que hereda de Forma
  class Circulo extends Forma {
    private radio: number;

    // Constructor
    constructor(radio: number) {
      super();
      this.radio = radio;
    }

    // Implementación del método para calcular el área del círculo
    calcularArea(): number {
      return Math.PI * this.radio * this.radio;
    }
  }

  // Clase Rectangulo que hereda de Forma
  class Rectangulo extends Forma {
    private base: number;
    private altura: number;

    // Constructor
    constructor(base: number, altura: number) {
      super();
      this.base = base;
      this.altura = altura;
    }

    // Implementación del método para calcular el área del rectángulo
    calcularArea(): number {
      return this.base * this.altura;
    }
  }

  // Clase principal para probar las implementaciones
  class Main {
    static main(): void {
      // Crear un círculo y calcular su área
      let circulo: Forma = new Circulo(5);
      console.log("Área del círculo: " + circulo.calcularArea());

      // Crear un rectángulo y calcular su área
      let rectangulo: Forma = new Rectangulo(4, 6);
      console.log("Área del rectángulo: " + rectangulo.calcularArea());
    }
  }

  Main.main();
};
