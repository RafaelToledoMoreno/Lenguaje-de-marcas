"use strict";

//Variables let y const
let edad = 18;
console.log("Edad: ", edad);
console.log(edad.constructor.name);
edad = "27";
console.log("Nueva edad:", edad);

const centro = "CPIFP Alan Turing";
console.log("Centro:", centro);
// centro ="CPIFP otro";    No se puede modificar una constante

let puntos = 0;
puntos += 10;
console.log("Puntos =", puntos);

//Tipos primitivos y operaciones basicas
const a = 10;
const b = 3;
console.log("Suma:", b + a);
console.log("Resta:", b - a);
console.log("Multiplicación:", b * a);
console.log("División:", b / a);
console.log("Resto:", b % a);
console.log("Potenciación:", b ** a);
console.log("Redondeo:", Math.trunc(a/b));

//Tipos primitivos y manejo de Strings
const nombre = "compi";
console.log("Hola " + nombre);
console.log(`Hola ${nombre}`);

//Operadores de comparacion
//console.log(5>3);

//Operador de identidad (===) --> Comparar valor y tipo
console.log(5 == 5);
console.log(5 == "5");

const num = 5;
const palabra = "5";
const repetidor = false;
console.log(num.constructor.name);
console.log(palabra.constructor.name);
console.log(repetidor.constructor.name);

console.log(num === palabra);       //False porque son distinto tipo de dato

const precio = 19.99;
const unidades = 3;
const total = precio * unidades;
console.log(`Total: ${total} $`);

//Arrays

const juegos = ["Zelda", "Counter-Strike", "Minecraft"];
console.log("Array completo:", juegos.toString());
console.log("Cantidad:", juegos.length);
console.log("Primer elemento:", juegos[0]);

//Añadir elementos
juegos.push("Fortnite");
console.log("Array completo:", juegos.toString());

//Eliminar elementos
const eliminado = juegos.pop();
console.log("Juego eliminado:", eliminado);
console.log("Array completo:", juegos.toString());

//Array mixtos
const mixto = ["Hola", 42, true, {Nombre: "Ana"}, [1, 2, 3]];

console.log("Mixto:", mixto);
console.log(`Elemento 0 (${mixto[0].constructor.name}): ${mixto[0]}`);
console.log(`Elemento 1 (${mixto[1].constructor.name}): ${mixto[1]}`);
console.log(`Elemento 2 (${mixto[2].constructor.name}): ${mixto[2]}`);
console.log(`Elemento 3 (${mixto[3].constructor.name}): ${mixto[3]}`);
console.log(`Elemento 4 (${mixto[4].constructor.name}): ${mixto[4]}`);

//Objetos
const alumno = {nombre: "Ana", 
    curso: "1º DAW" ,
    edad: 16,
    repetidor: false
};

console.log("Alumno:", alumno);
console.log("Nombre:", alumno.nombre);
console.log("Curso:", alumno.curso);
console.log("Edad:", alumno.edad);
console.log("Repetidor:", alumno.repetidor);

alumno.nombre = "Ana María";
console.log("Nuevo nombre:", alumno.nombre);
console.log(`Alumno: ${alumno.nombre} - ${alumno.curso} - Repetidor ${alumno.repetidor}`);

const producto = {
    producto: "Tarjeta gráfica",
    precio: 129.95,
    stock: 5
};


console.log(`Producto: ${producto.nombre} - Precio ${producto.precio} - Stock: ${producto.stock}.`);

//Funciones
function Total(precio, unidades) {
    return precio * unidades;
}

console.log(`Total 9.99 * 3: = ${Total(9.99,3)}`);

//Funcion declarada como expresion
let saludar = function (nombre) {
    return `Hola ${nombre}`;
}

console.log("Alvaro");

//Funcion arrow
const func = function () {
    return "Funcion tradicional";
}

const func2 = () => {
    return "Funcion flecha";
}


const suma = (a,b) => {
    return a + b;
}


const total2 = (precio,unidades) => precio * unidades;

console.log("Funcion tradicional: ", func());
console.log("Funcion flecha: ", func2());
console.log("Suma = ", suma(5, 3));
console.log("Total2 = ", total2(21.12, 5));


//Mini reto: Funcion que recibe un objeto y devuelve un template string
function etiquetaproducto(prod) {
    return `${prod.nombre} - ${producto.precio}`;
}
console.log(etiquetaproducto({nombre: "Raton", precio: 12.99}));

//Crear un array de 3 objetos productos (nombre/precio)
// y una función que devuelva el precio total sumado
// (aquí puedes hacerlo simple: sumar 3 elementos a mano, sin bucles).

const productos = [
    {nombre: "Mayonesa", precio: 12}, 
    {nombre: "Ketchup", precio: 10}, 
    {nombre: "Mostaza", precio: 20}
];

const SumaProductos = function() {
    return productos[0].precio + productos[1].precio + productos[2].precio;
}
console.log(`Total productos = ${SumaProductos()}`);
