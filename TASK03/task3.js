let input = prompt(`Enter hours here`);
console.log(input);
let HowManyHours = parseInt(input);
console.log(typeof(HowManyHours));
CountInSeconds(HowManyHours);

function CountInSeconds(hours){
    let seconds = hours * 3600;
    console.log(`you have ${seconds} seconds.`);
}