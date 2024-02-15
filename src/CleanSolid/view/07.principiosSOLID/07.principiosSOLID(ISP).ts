() => {
  //Principio de Segregación de Interfaces (ISP):
  // Interface Encendible
  interface Encendible {
    encender(): void;
    apagar(): void;
  }

  // Interface Ajustable
  interface Ajustable {
    ajustarVolumen(): void;
  }

  // Clase Televisión que implementa Encendible
  class Televisión implements Encendible, Ajustable {
    encender(): void {
      console.log("Televisión encendida");
    }

    apagar(): void {
      console.log("Televisión apagada");
    }

    ajustarVolumen(): void {
      console.log("Volumen ajustado en la televisión");
    }
  }

  // Clase Radio que implementa Encendible
  class Radio implements Encendible, Ajustable {
    encender(): void {
      console.log("Radio encendida");
    }

    apagar(): void {
      console.log("Radio apagada");
    }

    ajustarVolumen(): void {
      console.log("Volumen ajustado en la radio");
    }
  }

  // Ejemplo de uso
  let televisión = new Televisión();
  televisión.encender();
  televisión.ajustarVolumen();
  televisión.apagar();

  let radio = new Radio();
  radio.encender();
  radio.ajustarVolumen();
  radio.apagar();
};
