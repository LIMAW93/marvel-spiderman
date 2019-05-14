//playground
//exercise 1

let myName = "Sergi";
console.log(myName);

//ex2

let age = 25;
console.log(age);

//ex3

let ignaciAge = 32;
let ageDiff = ignaciAge - age;
console.log(ageDiff);

//ex4

if (age > 21) {
    console.log("Older");

} else {
    console.log("Younger");
}

//ex5

if (age > ignaciAge) {
    console.log("Ignasi is younger than you");

} else if (age == ignaciAge) {
    console.log("You have the same age as Ignasi");

} else {
    console.log("Ignasi is older than you");
}


//javascript arrays
//ex1

let names = ["Albert", "Sergi", "Oscar", "Dani"];
names.sort();

console.log(names[names.length - 1]);

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);

}

//ex2

let ages = [22, 28, 26, 25];
ages.sort();

let i = 0;

while (i < ages.length) {

    if (ages[i] % 2 == 0) {
        console.log(ages[i]);
    }
    i++;
}

//ex3

let numbers = [4, 8, 13, 66];

function minimo(array) {
    let min = Math.min(...array);
    console.log(min);
    return min;

}

minimo(numbers);

//ex4

let numbers2 = [32, 18, 23, 616];

function maximo(array) {
    let max = Math.max(...array);
    console.log(max);
    return max;

}

maximo(numbers2);

//ex5

var multipleN = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 1;

function position(array, i) {
    return array[i];
}

console.log(position(multipleN, index));

//ex6

var multiples = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
function repetidos(array) {
    let repes = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] == array[j] && !repes.includes(array[i])) {

                repes.push(array[i]);
            }
        }
    }
    return "Son iguales " + repes;
}

console.log(repetidos(multiples));

//ex7

function ATexto() {
    let myColor = ["Red", "Green", "White", "Black"];
    let texto = myColor.toString();
    return texto;

}

console.log(ATexto());

//strings
//ex1

function reverse() {
    let x = 32443;
    x = x + "";
    return x.split("").reverse().join("");
}
console.log(reverse());

//ex2
let text = "webmaster";
function alpha(t) {

    let abc = t.split("");
    let ordenado = abc.sort();
    let final = ordenado.join("");


    return final;
}

console.log(alpha(text));

function orderWord(text1) {
    return text1
        .split("").sort().join("");

}
console.log(orderWord(text));