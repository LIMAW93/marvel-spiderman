console.log("Motherfucker")

//variables

//texto
var nombre = "Samuel L. Jackson";

//numero
var numero = 11;

//boolean

var isSergiAlwaysLate = true;

//undefined
var something;

//array
var nombres = ["Samuel", "Ryan", "Uma"];
var edades = [1,2,3,4,5];

//objeto
var persona = {
    nombre : "Samuel",
    edad : 50,
    hijos : ["sam jr", "klaus"],
};


console.log(nombre);

console.log(persona.nombre);

console.log(nombres[1]);

//flow control
var edadMinima = 17;

if(edadMinima >= 18){
    console.log("Soy msyor de edad");
} else {
    console.log("Fuera de aqui")
}

//loops

//for
for (var i = 0; i < 5; i++){
    console.log("hola");
}

var array = [3,4,5,6,7,8];

for(var i = 0; i < array.length; i++){
    console.log(array[i]);
}

//functions

let perro = "Frank";

function sayHello(){
    console.log("Hello");
}

function superSuma(x, y){
    return x + y;
}

superSuma(1, 2)

function crearFrase(nombre, adjetivo){
    return "El" + nombre + "es un puto" + adjetivo;
}