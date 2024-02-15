() => {
  //Principio de Sustitución de Liskov (LSP):
  // Clase abstracta Forma
  abstract class Forma {
    abstract calcularArea(): number;
  }

  // Clase Circulo que hereda de Forma
  class Circulo extends Forma {
    private radio: number;

    constructor(radio: number) {
      super();
      this.radio = radio;
    }

    calcularArea(): number {
      return Math.PI * this.radio * this.radio;
    }
  }

  // Clase Rectangulo que hereda de Forma
  class Rectangulo extends Forma {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
      super();
      this.base = base;
      this.altura = altura;
    }

    calcularArea(): number {
      return this.base * this.altura;
    }
  }

  // Clase CalculadoraArea
  class CalculadoraArea {
    static calcularAreaTotal(formas: Forma[]): number {
      let areaTotal = 0;
      formas.forEach((forma) => {
        areaTotal += forma.calcularArea();
      });
      return areaTotal;
    }
  }

  // Ejemplo de uso
  let circulo = new Circulo(5);
  let rectangulo = new Rectangulo(4, 6);
  let areaTotal = CalculadoraArea.calcularAreaTotal([circulo, rectangulo]);
  console.log("Área total:", areaTotal);
};
