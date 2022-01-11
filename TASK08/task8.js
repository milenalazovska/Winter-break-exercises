function myFunction(string1, string2){
    if(string1==string2){
        console.log(`They are identical`);
    }
    else if(string1!==string2){
        console.log(`They are different`);
    }
}
let strings = myFunction("dog", "dog");
let strings1 = myFunction("house", "two");
let strings2 = myFunction("","0")
