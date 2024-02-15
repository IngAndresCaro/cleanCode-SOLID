() => {
  //Ejemplo
  //Archivos a evaluar
  const fs = [
    {
      id: 1,
      f: false,
    },
    {
      id: 2,
      f: false,
    },
  ];
  //Mejora
  const archivosAEvaluar = [
    {
      id: 1,
      marcado: false,
    },
    {
      id: 2,
      marcado: false,
    },
  ];

  //ARchivos marcados para borrar
  const archivos = fs.map((f) => f);
  //Mejora
  const archivosABorrar = archivosAEvaluar.map((archivo) => archivo.marcado);

  //Todo: Ejercicio
  //día de hoy
  const ddmmyyyy = new Date();

  // días transcurridos
  const d: number = 23;

  //número de archivos en un directorio
  const dir = 33;

  //primer nombre
  const nombre = "Fernando";

  //días desde la ultima modificación
  const dsm = 12;

  //cantidad maxima de clases por estudiante
  const max = 6;

  //Solución
  //día de hoy
  const fechaActual = new Date();

  // días transcurridos
  const diasTranscurridos: number = 23;

  //número de archivos en un directorio
  const archivosEnDirectorio = 33;

  //primer nombre
  const primerNombreCliente = "Fernando";

  //días desde la ultima modificación
  const diasUltimaModificacion = 12;

  //cantidad maxima de clases por estudiante
  const cantidadMaximaEstudiantes = 6;
};
