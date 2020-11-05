const playground = document.querySelector('.playground');
const blocks = document.querySelectorAll('.block');
const reset = document.querySelector('.reset-btn');

let isActive = true;
let board_state = ['', '', '', '', '', '', '', '', ''];

//  !Allowing player to change the icon --in progress--
// const firstPlayer = document.getElementById('player-one-icon');
// const secondPlayer = document.getElementById('player-two-icon');
// const Player1 = firstPlayer.options[firstPlayer.selectedIndex].text;
// const Player2 = secondPlayer.options[secondPlayer.selectedIndex].text;

// console.log(Player1);
// console.log(Player2);

let currentPlayer = 'X';

const playerAction = (e) => {
    const clickedBlock = e.target;
    const clickedBlockIndex = parseInt(clickedBlock.getAttribute('id'));

    board_state[clickedBlockIndex] = currentPlayer;
    blocks[clickedBlockIndex].innerHTML = currentPlayer;

};

const resetPlayground = () => {
    board_state = ['', '', '', '', '', '', '', '', ''];
    blocks.forEach(block => {
        block.innerHTML = '';
    });
};

reset.addEventListener('click', resetPlayground);

blocks.forEach(block => {
    block.addEventListener('click', playerAction);
});


