let cells = document.getElementsByClassName("cell")
let boardElement = document.getElementById('gameBoard')
let gameOver = document.getElementsByClassName('gameOverPage')
let winningMessageElement = document.getElementById('winningMessageElement')
let currentTurn = 'x'
let winning_arrays = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
]

function oneturn(number) {

    cells[number].classList.add(currentTurn); //to print X or O's on the screen
    cells[number].style.pointerEvents = 'none'; //disable multiple clicks on a cell

    if(checkWin(currentTurn)) {
        winningMessageElement.textContent = (currentTurn == 'x' ? 'X wins!' : 'O Wins!')
        document.getElementById('gameOverPage').classList.add('show');
    }

    if(checkDraw()){
        winningMessageElement.textContent = 'Draw!';
        document.getElementById('gameOverPage').classList.add('show');
    }

    switchTurns();
}

function switchTurns(){
    if (boardElement.classList.contains('x')) {
        boardElement.classList.remove('x');
        boardElement.classList.add('o');
        currentTurn = 'o';
    } else {
        boardElement.classList.remove('o');
        boardElement.classList.add('x');
        currentTurn = 'x'
    } 
}

function checkWin(currentTurn){
    for(n=0; n<winning_arrays.length; n++){
        if(cells[winning_arrays[n][0]].classList.contains(currentTurn)
        && cells[winning_arrays[n][1]].classList.contains(currentTurn)
        && cells[winning_arrays[n][2]].classList.contains(currentTurn)) {
        return true
        }
    }
}

function checkDraw() {
    if([...cells].every(cell => {
        return cell.classList.contains('x') ||
        cell.classList.contains('o')
        })
    ) {
        return true
    }
}
