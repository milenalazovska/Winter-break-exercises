let input = prompt(`Enter minutes here`);
console.log(input);
let HowManyMinutes = parseInt(input);
console.log(typeof(HowManyMinutes));
countInSeconds(HowManyMinutes);


function countInSeconds(minutes){
    let seconds = minutes * 60;
    console.log(`your minutes are ${seconds} seconds`);
}