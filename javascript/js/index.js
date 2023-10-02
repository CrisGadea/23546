/*
console.log("Hola mundo");

prompt("Ingrese su nombre");

console.log("Cristian");

// VARIABLES EN JAVASCRIPT
// Espacio de memoria reservado para guardar un UNICO dato

// Declaramos una variable llamada nombre que guarda un valor
var nombre = "Tomás";

// Console.log() me permite mostrar por la consola del navegador un dato o texto
console.log(nombre);
// alert() me permite mostrar un pop-up (ventana emergente) con un mensaje para el usuario de la página web
alert(nombre);

// Modificamos la variable nombre ya creada, cambiando su valor guardado
nombre = "Cris";

console.log(nombre);
alert(nombre);
*/

let variable;

// prompt me permite pedir un dato por teclado en la web al usuario
// y acá lo almacenamos en una variable para poder mostrarlo luego
let nombre = prompt("Ingrese su nombre") || "hola";

// Constante
const edad = 27;


variable = 1;
// Concatenar (+) -> es pegar un texto con otro
alert("Bienvenido/a " + nombre + ", tenés " + edad);

