// Get the random number
let randomNumber = Math.floor(Math.random() * 10) + 1;
let startingScore = 20;
document.querySelector('.score').textContent = startingScore;
console.log(randomNumber);

document.querySelector('.check').addEventListener('click', function () {
    // console.log("Method Enter");
    const guessNumber = Number(document.querySelector('.guess').value);
    if (!guessNumber || isNaN(guessNumber)) {
        document.querySelector('.message').textContent = "Invalid Number 🚫";
    } else {
        if (randomNumber === guessNumber) {
            document.querySelector('.secret').textContent = randomNumber;
            document.querySelector('.message').textContent = "Correct Guess! 👏";
            startingScore++;
            document.querySelector('.guess').value = "";
            document.querySelector('body').style.backgroundColor = 'green';
        } else {
            document.querySelector('.message').textContent = "Wrong Guess! 👀";
            startingScore--;
            document.querySelector('body').style.backgroundColor = 'red';
        }
        document.querySelector('.score').textContent = startingScore;
    }
});

document.querySelector('.again').addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
    document.querySelector('.message').textContent = "";
    document.querySelector('.secret').textContent = "?";
    document.querySelector('body').style.background= '#f5f5f6';
});

