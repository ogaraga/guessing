//To create guessing game and hints btw 1 and 20;
const input = document.getElementById("textbox");
const hint = document.getElementById("hint");
const ok = document.getElementById("ok");
const cancel = document.getElementById("cancel");
const guess = document.getElementById("guess");
let guesses = 0;
let min = 1;
let max = 10
ok.addEventListener("click", () => {
    const rndum = Math.floor(Math.random() * max) + min;
    guesses++;

    if (isNaN(input.value) || input.value === "") {
        hint.innerText = " Enter a number to match!";
        guess.innerText = "";
    }
    else if (input.value > rndum && input.value !== "") {
        hint.innerText = ` Wrong! your guess is greater than machine number: ${rndum}`;
        guess.innerText = "";
        input.value = "";
    }
    else if (input.value < rndum && input.value !== "") {
        hint.innerText = `Wrong! your guess is less than machine number: ${rndum}`;
        guess.innerText = "";
        input.value = "";
    }
    else {
        hint.innerText = `Correct! your guess is the same as machine number: ${rndum}`;
        guess.innerText = `Congrats! You guessed well after ${guesses} guess(es)`;
        input.value = "";
        guesses = 0;
    }
});
cancel.addEventListener("click", () => {
    hint.innerText = "";
    guess.innerText = "";
    input.value = "";
    guesses = 0;
})