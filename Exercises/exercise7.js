// Guest the number game

let max = 5;
let min = 1;
let guestNum = prompt("Enter a number:");
guestNum = parseInt(guestNum)
let randomNum = Math.floor(Math.random() * (max - min)) + min;
if (guestNum === randomNum) {
    alert("You guessed right!");
} else {
    alert(`Wrong guess. The number was ${randomNum}.`);
}
