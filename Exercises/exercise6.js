// Grade Checker

const Score = prompt("Enter your score:");
if (Score >= 70 && Score <= 100) {
    alert("Ecellent!");
} else if (Score >= 50 && Score < 70) {
    alert("Good!");
} else {
    alert("Needs Improvement!");
}