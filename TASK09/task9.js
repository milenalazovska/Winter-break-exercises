let input = prompt(`Enter a number from 1-12`);
console.log(input);
let enteredNumber = parseInt(input);
console.log(typeof(enteredNumber));
numbersAndMonths(enteredNumber);

function numbersAndMonths(numbers){
    if(numbers==1){
        console.log(`January`);
    }
    else if(numbers==2){
        console.log(`February`);
    }
    else if(numbers==3){
        console.log(`March`);
    }
    else if(numbers==4){
        console.log(`April`);
    }
    else if(numbers==5){
        console.log(`May`);
    }
    else if(numbers==6){
        console.log(`June`);
    }
    else if(numbers==7){
        console.log(`July`);
    }
    else if(numbers==8){
        console.log(`August`);
    }
    else if(numbers==9){
        console.log(`September`);
    }
    else if(numbers==10){
        console.log(`October`);
    }
    else if(numbers==11){
        console.log(`November`);
    }
    else if(numbers==12){
        console.log(`December`);
    }
}