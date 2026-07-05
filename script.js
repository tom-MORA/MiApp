//Datos 
let nombre = "Morales-sama";
let edad = 16;
let ciudad = "Medellin";
let pais = "colombia";
let color = "azul";
console.log(nombre);
console.log(edad);
console.log(ciudad);
console.log(pais);
console.log(color);

//calculadora basica
let numero1 = 10;
let numero2 = 5;
console.log("Suma:", numero1 + numero2);
console.log("Resta:", numero1 - numero2);
console.log("Multiplicación:", numero1 * numero2);
console.log("División:", numero1 / numero2);

//ejercicio 1
let precio = 25000;
let cantidad = 3;
console.log("Total:", precio * cantidad);
//

//ejercicio 2
let nombreUsuario = prompt("what is your name?");
//let edadUsuario = prompt("how old are you?")
//alert("Bienvenido " + nombreUsuario + " tienes " + edadUsuario + " años");
//

//ejercicio 3
//let edadpersona = prompt("how old are you?");
// if (edadpersona >= 18) {
//} else {
//    console.log("Todavìa no puedes entrar");

//ejercicio 4
//const boton = document.getElementById("button");
//const mensaje = document.getElementById("mensaje");

//ejercicio 5
const boton = document.getElementById("button");
const mensaje = document.getElementById("mensaje");
const titulo = document.querySelector('h2');
const body = document.querySelector('body');
let colorActual = 'rgb(24, 24, 24)'
boton.addEventListener("click", () => {
    mensaje.innerHTML = "Hola Morales-sama 🚀";
    titulo.style.color = 'white';
    body.style.backgroundColor = '#0004ff';
    titulo.style.fontSize = '50px';

    if (colorActual == 'rgb(24, 24, 24)') {
    body.style.backgroundColor = '#0004ff'
    colorActual = '#0004ff'
} else {
    body.style.backgroundColor = 'rgb(24, 24, 24)'
    colorActual = 'rgb(24, 24, 24)'
}
});


