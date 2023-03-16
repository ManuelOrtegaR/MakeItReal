let persona = {
  nombre: "Pedro Perez",
  edad: 30,
  ciudad: "Monteria",
  profesion: "Programador",
};

console.log(persona);

function presentacion(object) {
  let message = "";
  for (let llave in persona) {
    if (persona.hasOwnProperty(llave)) {
      message = message + llave + " " + persona[llave] + " ";
    }
  }
  return message;
}

var mensaje = presentacion(persona);

console.log(mensaje);

persona.hobbies = ["leer", "jugar", "programar"];

console.log(persona.hobbies);

for (let i = 0; i < persona.hobbies.length; i++) {
  console.log(persona.hobbies[i]);
}
