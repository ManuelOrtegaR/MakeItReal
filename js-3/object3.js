let receta = {};

receta.nombre = "Sandwich";
receta.ingredientes = [];

let ingrediente1 = {
  nombre: "pan",
  cantidad: 2,
};

let ingrediente2 = {
  nombre: "queso",
  cantidad: 1,
};

receta.ingredientes.push(ingrediente1);
receta.ingredientes.push(ingrediente2);

console.log(receta.ingredientes[0].nombre);

let suma = 0;

for (var i = 0; i < receta.ingredientes.length; i++) {
  suma = suma + receta.ingredientes[i].cantidad;
}

console.log(suma);
