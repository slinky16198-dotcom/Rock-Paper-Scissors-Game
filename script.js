let pScore = 0;
let cScore = 0;

const buttons = document.querySelectorAll('.choice-btn');
const msg = document.getElementById('message');
const choicesLog = document.getElementById('choices-made');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        determineWinner(playerChoice, computerChoice);
    });
});

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    // Generate random number 0, 1, or 2
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function determineWinner(player, computer) {
    choicesLog.textContent = `You: ${player} | Computer: ${computer}`;

    if (player === computer) {
        msg.textContent = "It's a Tie!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        pScore++;
        msg.textContent = "You Win!";
        document.getElementById('player-score').textContent = pScore;
    } else {
        cScore++;
        msg.textContent = "Computer Wins!";
        document.getElementById('computer-score').textContent = cScore;
    }
}