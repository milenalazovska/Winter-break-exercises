function myFunction(parametar) {
    if (parametar) {
        return true;
    } else {
        return false;
    }
}
let newParametar = myFunction("happy");
let newParametar1 = myFunction('false');
let newParametar2 = myFunction("");
let newParametar3 = myFunction(0);
console.log(newParametar2);
console.log(newParametar1);
console.log(newParametar);
console.log(newParametar3);