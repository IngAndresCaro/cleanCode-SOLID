() => {
  //Principio de Inversión de Dependencia (DIP):
  // Interfaz ServicioNotificación
  interface ServicioNotificación {
    enviar(mensaje: string): void;
  }

  // Clase ServicioEmail que implementa ServicioNotificación
  class ServicioEmail implements ServicioNotificación {
    enviar(mensaje: string): void {
      console.log("Enviando correo electrónico:", mensaje);
    }
  }

  // Clase ServicioSMS que implementa ServicioNotificación
  class ServicioSMS implements ServicioNotificación {
    enviar(mensaje: string): void {
      console.log("Enviando SMS:", mensaje);
    }
  }

  // Clase Notificador que depende de ServicioNotificación
  class Notificador {
    private servicioNotificación: ServicioNotificación;

    constructor(servicioNotificación: ServicioNotificación) {
      this.servicioNotificación = servicioNotificación;
    }

    enviarNotificacion(mensaje: string): void {
      this.servicioNotificación.enviar(mensaje);
    }
  }

  // Ejemplo de uso
  let servicioEmail = new ServicioEmail();
  let servicioSMS = new ServicioSMS();

  let notificadorEmail = new Notificador(servicioEmail);
  notificadorEmail.enviarNotificacion("¡Hola! Este es un correo electrónico.");

  let notificadorSMS = new Notificador(servicioSMS);
  notificadorSMS.enviarNotificacion("¡Hola! Este es un mensaje de texto.");
};
