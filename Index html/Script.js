console.log("Hola mundo");

alert("hola mundo");

prompt("¿Como te llamas?");

var nombre = "Eduardo";
var edad = 20;
var carrera = "Ingieneria de sistemas";

alert("Nombre: " + nombre +
     "\nedad: " + edad +
     "\ncarrera: " + carrera);

var numero1 = parseInt(prompt("Ingresa el primer numero: ")) 
var numero2 = parseInt(prompt("Ingresa el segundo numero: ")) 

alert("Suma: " + (numero1 + numero2));
alert("resta: " + (numero1-numero2));
alert("Multipliacion: " + (numero1 * numero2));
alert("Division: " + (numero1 / numero2));
alert("Modulo: " + (numero1 % numero2));

alert("La suma de " + numero1 + " Y " + numero2 + " es: " + (numero1 + numero2));
alert("La resta de " + numero1 + " Y " + numero2 + " es: " + (numero1 - numero2));
alert("La Multipliacion de " + numero1 + " Y " + numero2 + " es: " + (numero1 * numero2));
alert("La division de " + numero1 + " Y " + numero2 + " es: " + (numero1 / numero2));
alert("El modulo de " + numero1 + " Y " + numero2 + " es: " + (numero1 % numero2));

var edad = parseInt(prompt("Ingresa tu edad"));

if (edad >= 18)  {
     alert("Es mayor de edad");
} else {
     alert("Es menor de edad");
}

var numero = parseInt(prompt("Ingresa un numero: "))
if (edad > 0 )  {
     alert("Positivo");
} else if (numero < 0) {
     alert("Es negativo");
} else {
     alert("Es Cero");
}