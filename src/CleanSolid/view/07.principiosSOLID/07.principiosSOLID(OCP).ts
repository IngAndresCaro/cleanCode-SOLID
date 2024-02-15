() => {
  //Principio de Abierto/Cerrado (OCP):
  // Interfaz Descuento
  interface Descuento {
    aplicarDescuento(precio: number): number;
  }

  // Clase DescuentoPorcentaje que implementa la interfaz Descuento
  class DescuentoPorcentaje implements Descuento {
    private porcentaje: number;

    constructor(porcentaje: number) {
      this.porcentaje = porcentaje;
    }

    aplicarDescuento(precio: number): number {
      return precio - precio * (this.porcentaje / 100);
    }
  }

  // Clase DescuentoMontoFijo que implementa la interfaz Descuento
  class DescuentoMontoFijo implements Descuento {
    private montoFijo: number;

    constructor(montoFijo: number) {
      this.montoFijo = montoFijo;
    }

    aplicarDescuento(precio: number): number {
      return precio - this.montoFijo;
    }
  }

  // Ejemplo de uso
  let precioProducto = 100000; // Precio inicial del producto

  // Aplicar un descuento del 10% al precio del producto
  let descuentoPorcentaje = new DescuentoPorcentaje(10);
  let precioConDescuentoPorcentaje =
    descuentoPorcentaje.aplicarDescuento(precioProducto);
  console.log("Precio con descuento porcentaje:", precioConDescuentoPorcentaje);

  // Aplicar un descuento fijo de $20000 al precio del producto
  let descuentoMontoFijo = new DescuentoMontoFijo(20000);
  let precioConDescuentoMontoFijo =
    descuentoMontoFijo.aplicarDescuento(precioProducto);
  console.log("Precio con descuento monto fijo:", precioConDescuentoMontoFijo);

  /*Este diseño sigue el principio de Abierto/Cerrado (OCP) ya que permite extender el comportamiento de descuento sin modificar 
  el código existente. Si se desea agregar un nuevo tipo de descuento, solo necesitamos crear una nueva clase que implemente la 
  interfaz Descuento, sin necesidad de modificar las clases existentes.*/
};
