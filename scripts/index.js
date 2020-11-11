const playground = document.querySelector('.playground');
const blocks = document.querySelectorAll('.block');
const reset = document.querySelector('.reset-btn');
const message = document.querySelector('.message');

let isActive = true;
let boardState = ['', '', '', '', '', '', '', '', ''];
const playersPoints = class {
    player1 = 0;
    player2 = 0;
}

//  !Allowing player to change the icon --in progress--
// const firstPlayer = document.getElementById('player-one-icon');
// const secondPlayer = document.getElementById('player-two-icon');
// const Player1 = firstPlayer.options[firstPlayer.selectedIndex].text;
// const Player2 = secondPlayer.options[secondPlayer.selectedIndex].text;

// console.log(Player1);
// console.log(Player2);

let currentPlayer = 'X';

const winMessage = () => `${currentPlayer} Won!`;
const tieMessage = () => 'It was a Tie!';
const turnMessage = () => `It's ${currentPlayer}'s Turn!`;

message.innerHTML = turnMessage();

const playerAction = (e) => {
    const clickedBlock = e.target;
    const clickedBlockIndex = parseInt(clickedBlock.getAttribute('id'));

    if (boardState[clickedBlockIndex] || !isActive) {
        return;
    } else boardState[clickedBlockIndex] = currentPlayer;
    blocks[clickedBlockIndex].innerHTML = currentPlayer;
    handleResult();
};


const handleResult = () => {
    let roundWon = false;
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let tmpA = boardState[winCondition[0]];
        let tmpB = boardState[winCondition[1]];
        let tmpC = boardState[winCondition[2]];
        console.log('A' + tmpA);
        console.log('B' + tmpB);
        console.log('C' + tmpC);
        if (tmpA === '' || tmpB === '' || tmpC === '') {
            continue;
        }
        if (tmpA === tmpB && tmpB === tmpC) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        message.innerHTML = winMessage();
        isActive = false;
        return;
    }
    handlePlayerChange();
}

const handlePlayerChange = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.innerHTML = turnMessage();
}

const resetPlayground = () => {
    boardState = ['', '', '', '', '', '', '', '', ''];
    isActive = true;
    message.innerHTML = "";
    blocks.forEach(block => {
        block.innerHTML = '';
    });
    message.innerHTML = turnMessage();
};

reset.addEventListener('click', resetPlayground);

blocks.forEach(block => {
    block.addEventListener('click', playerAction);
});
