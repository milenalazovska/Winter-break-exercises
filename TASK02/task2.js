let input = prompt(`Enter a number`);
console.log(input);
let enteredNumber = parseInt(input);
console.log(typeof(enteredNumber));
increaseNumber(enteredNumber);

function increaseNumber(number){
    let newNumber = number + 1;
    return newNumber
}