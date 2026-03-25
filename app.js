const estudiantes = [
  { nombre: "Juan", nota: 3.5 },
  { nombre: "Ana", nota: 4.2 },
  { nombre: "Luis", nota: 2.8 },
  { nombre: "Maria", nota: 3.0 },
  { nombre: "Carlos", nota: 1.9 }
];

let sumaNotas = 0;

for (let i = 0; i < estudiantes.length; i++) {
  let estudiante = estudiantes[i];

  
  if (estudiante.nota >= 3.0) {
    console.log(estudiante.nombre + " APRUEBA con " + estudiante.nota);
  } else {
    console.log(estudiante.nombre + " REPRUEBA con " + estudiante.nota);
  }

  sumaNotas += estudiante.nota;
}

let promedio = sumaNotas / estudiantes.length;

console.log("----------------------------");
console.log("Promedio del curso: " + promedio.toFixed(2));