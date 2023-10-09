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
/*
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
}*/

// Ejercicio: Realizar una tabla de multiplicar dado un número por pantalla
// obteniendo el resultado por consola del navegador

//var numero = parseInt(prompt("Ingrese un número para conocer su tabla de múltiplicar (hasta 10)"))

/* for (let i = 0; i < 10; i++) {
    console.log(numero + " * " + i + " = " + (numero * i))
} */

// Ejercicio 2: En base a la tabla de multiplicar de arriba, mostrar únicamente
// los resultados pares
/* for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(numero + " * " + i + " = " + (numero * i))  
    }
} */

// Bucle WHILE

/* var opcion = Number(prompt("1. Ver hora actual \n0. Salir"));


while (opcion != 0) {
    switch(opcion){
        case 1:
            alert(Date());
            break;
        case 0:
            console.log("Exit");
            break;
        default:
            console.log("Elija una opción correcta");
            break;
    }
        opcion = Number(prompt("1. Ver hora actual \n0. Salir"));    
} */

// DO WHILE
/* do{

    var opcion = Number(prompt("1. Ver hora actual \n0. Salir"));

    switch(opcion){
        case 1:
            alert(Date());
            break;
        case 0:
            console.log("Exit");
            break;
        default:
            console.log("Elija una opción correcta");
            break;
    }

} while(opcion !== 0) */



// FUNCIONES
// Son bloques de código que se ejecutarán cuando se llamen

console.log("ANTES DE LA LLAMADA");

saludar();

var num1 = Number(prompt("Ingrese un número"));
var num2 = Number(prompt("Ingrese otro número"));

console.log("El resultado de sumar ambos números es: " + sumar(num1,num2));

console.log("DESPUES DE LA LLAMADA");

console.log("Suma final: " + sumar(sumar(12,12), 14));

function saludar(){
    alert("HELLO WORLD!");
    console.log("Estoy saludando");
}

// CREAR LAS OPERACIONES BASICAS Y SOLICITAR AL USUARIO LOS VALORES
// Y LA OPCION A EJECUTAR

function sumar(num1, num2) {
    return num1 + num2;
}

