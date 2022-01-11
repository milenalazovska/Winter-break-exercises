function newFunction(word) {
    if (word == "s") {
        console.log(`The word is plural`);
    }
    else if (word !== "s") {
        console.log(`This word is singular`);
    }
}
let text = ("books");
let newText = text.charAt(text.length - 1);
console.log(`${newText}`);
newFunction(newText);