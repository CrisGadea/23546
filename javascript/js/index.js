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

//let varia;

//console.log(varia)

// prompt me permite pedir un dato por teclado en la web al usuario
// y acá lo almacenamos en una variable para poder mostrarlo luego
//let nombre = prompt('Ingrese su nombre') || 'hola';

//let edad = parseInt(prompt("Ingrese su edad"));

//console.log(edad + 1)

// Constante
//const edad = 27;


//variable = 1;

// Concatenar (+) -> es pegar un texto con otro
//alert("Bienvenido/a " + nombre);

/*
let numero1 = 20;
let numero2 = 30;

numero1 += numero2; // numero1 = 50

console.log(numero1 + numero2)

console.log(10.0 === 10)// 50 + 30 = 80

*/

// CONDICIONALES

// IF - ELSE

// Hacer que en la web se le pregunte la edad a un usuario
// si es mayor o igual a 18, le mostraremos un mensaje de bienvenida
// sino, le pediremos que ingrese cuando sea mayor de edad.

// preguntar la edad

var edad = prompt("Ingrese su edad")

console.log(edad)

if(edad >= 18){
    let texto = "Bienvenido/a al sistema";
    alert(texto); 
} else if(edad > 0 && edad < 10){
    alert("Muy menor")
} else {
    alert("Ingrese al sistema cuando sea mayor de edad (18 0 más años)");
}


// SWITCH

// Pedimos al usuario una letra del abecedario, y devolveremos
// el número en el que se encuentra ordenada en el mismo

var letra = prompt("Ingrese una letra del abecedario");

switch(letra){
    case 'a':
        console.log(1);
        break;
    case 'b':
        console.log(2);
        break;
    case 'c':
        console.log(3);
        break;
    case 'z':
        console.log(23);
        break;
    default:
        console.log("Ingrese unicamente caracter letra");
        break;
}





