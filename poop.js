let playerOneScore = 0
let playerTwoScore = 0
let tiesScore = 0
let playerOneScoreDisplay = document.getElementById("playerOneScoreDisplay")
let playerTwoScoreDisplay = document.getElementById("playerTwoScoreDisplay")
let tiesScoreDisplay = document.getElementById("tiesScoreDisplay")
let playerTurn = 1
let turnText = document.getElementById("playerTurn")
let board = ["", "", "", "", "", "", "", "", ""]
let resetButton = document.getElementById("resetButton")

resetButton.addEventListener("click", function() {
    document.querySelectorAll(".cell").forEach(function(cell) {
        cell.textContent = "";
    });
    board = ["", "", "", "", "", "", "", "", ""];
});

document.querySelectorAll(".cell").forEach(function(cell) {
    cell.addEventListener("click", function() {
        if (cell.textContent === ""){
            if (playerTurn === 1){
                cell.textContent = "X";
                board[cell.dataset.cellIndex] = cell.textContent;
                playerTurn = 2
                turnText.textContent = "Player Two's Turn";
            }
            else if (playerTurn === 2){
                cell.textContent = "O";
                board[cell.dataset.cellIndex] = cell.textContent;
                playerTurn = 1
                turnText.textContent = "Player One's Turn";
            }

            setTimeout(function() {
                let won = false;

                if (board[0] === "X" && board[1] === "X" && board[2] === "X") {
                    alert("Player 1 won!");
                    playerOneScore++;
                    won = true;
                }
                else if (board[3] === "X" && board[4] === "X" && board[5] === "X") {
                    alert("Player 1 won!");
                    playerOneScore++;
                    won = true;
                }
                else if (board[6] === "X" && board[7] === "X" && board[8] === "X") {
                    alert("Player 1 won!");
                    playerOneScore++;
                    won = true;
                }
                else if (board[0] === "X" && board[3] === "X" && board[6] === "X") {
                    alert("Player 1 won!");
                    playerOneScore++;
                    won = true;
                }
                else if (board[1] === "X" && board[4] === "X" && board[7] === "X") {
                    alert("Player 1 won!");
                    playerOneScore++;
                    won = true;
                }
                else if (board[2] === "X" && board[5] === "X" && board[8] === "X") {
                    alert("Player 1 won!");
                    playerOneScore++;
                    won = true;
                }
                else if (board[0] === "X" && board[4] === "X" && board[8] === "X") {
                    alert("Player 1 won!");
                    playerOneScore++;
                    won = true;
                }
                else if (board[2] === "X" && board[4] === "X" && board[6] === "X") {
                    alert("Player 1 won!");
                    playerOneScore++;
                    won = true;
                }

                else if (board[0] === "O" && board[1] === "O" && board[2] === "O") {
                    alert("Player 2 won!");
                    playerTwoScore++;
                    won = true;
                }
                else if (board[3] === "O" && board[4] === "O" && board[5] === "O") {
                    alert("Player 2 won!");
                    playerTwoScore++;
                    won = true;
                }
                else if (board[6] === "O" && board[7] === "O" && board[8] === "O") {
                    alert("Player 2 won!");
                    playerTwoScore++;
                    won = true;
                }
                else if (board[0] === "O" && board[3] === "O" && board[6] === "O") {
                    alert("Player 2 won!");
                    playerTwoScore++;
                    won = true;
                }
                else if (board[1] === "O" && board[4] === "O" && board[7] === "O") {
                    alert("Player 2 won!");
                    playerTwoScore++;
                    won = true;
                }
                else if (board[2] === "O" && board[5] === "O" && board[8] === "O") {
                    alert("Player 2 won!");
                    playerTwoScore++;
                    won = true;
                }
                else if (board[0] === "O" && board[4] === "O" && board[8] === "O") {
                    alert("Player 2 won!");
                    playerTwoScore++;
                    won = true;
                }
                else if (board[2] === "O" && board[4] === "O" && board[6] === "O") {
                    alert("Player 2 won!");
                    playerTwoScore++;
                    won = true;
                }

                else if (board.every(function(cell) {
                    return cell !== "";
                })) {
                    alert("It's a tie!");
                    tiesScore++;
                    won = true;
                    
                }
                
                if (won) {
                    playerOneScoreDisplay.textContent = "Player One: " + playerOneScore;
                    playerTwoScoreDisplay.textContent = "Player Two: " + playerTwoScore;
                    tiesScoreDisplay.textContent = "Ties: " + tiesScore;

                    document.querySelectorAll(".cell").forEach(function(cell) {
                        cell.textContent = "";
                    });
                    for(let i = 0; i <= 10; i++){
                        setTimeout(() => {
                            createLightning();
                            }, 100);
                    }
                    playWolfHowl()

                    board = ["", "", "", "", "", "", "", "", ""];
                    playerTurn = 1;
                    turnText.textContent = "Player One's Turn";
                }
            }, 500);
            

        }
    });
});














































function createLightning() {
    const container = document.getElementById("lightningContainer");

    const bolt = document.createElement("div");

    bolt.classList.add("lightning");

    // Random screen position
    bolt.style.left = Math.random() * 95 + "%";
    bolt.style.top = Math.random() * 90 + "%";

    // Random size
    const size = Math.random() * 200 + 320;

    bolt.style.width = size + "px";
    bolt.style.height = size * 1.8 + "px";

    // Random rotation
    bolt.style.transform = `rotate(${Math.random() * 360}deg)`;

    container.appendChild(bolt);

    setTimeout(() => {
        bolt.remove();
    }, 400);
    playLightningSound();
}

function randomLightning() {
    createLightning();

    // Random delay between sparks
    const delay = Math.random() * 700 + 200;

    setTimeout(randomLightning, delay);
}

function playLightningSound() {
    const sound = document.getElementById("lightningSound");

    sound.volume = 1;
    sound.currentTime = 0;
    sound.play();
}

function playWolfHowl() {
    const howl = document.getElementById("wolfHowl");

    howl.volume = 1;
    howl.currentTime = 0;

    howl.play();
}

function explosion(){
    const sound = document.getElementById("explosionSound")

    sound.volume = 1
    sound.currentTime = 0
    sound.play()

}

let currentLanguage = "en";

function socialCredit() {

    currentLanguage = currentLanguage === "en" ? "zh" : "en";

    document.querySelectorAll("[data-en]").forEach(element => {

        element.textContent = element.dataset[currentLanguage];

    });

    document.getElementById("languageButton").textContent =
        currentLanguage === "en" ? "中文" : "English";
}