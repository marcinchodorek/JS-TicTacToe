const playground = document.querySelector('.playground');
const blocks = document.querySelectorAll('.block');
const reset = document.querySelector('.reset-btn');
const message = document.querySelector('.message');

let isActive = true;
let board_state = ['', '', '', '', '', '', '', '', ''];
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

    if (board_state[clickedBlockIndex]) {
        return;
    } else board_state[clickedBlockIndex] = currentPlayer;
    blocks[clickedBlockIndex].innerHTML = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.innerHTML = turnMessage();
};


const handleResult = () => {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]


}

const resetPlayground = () => {
    board_state = ['', '', '', '', '', '', '', '', ''];
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


