
(function(){
    'use strict';

    const board = document.querySelector('.board');
    const result = document.querySelector('.result');
    const newGame = document.querySelector('.new-game');
    const title = document.querySelector('.title');

    const CIRCLE = './img/Jogo-da-velha-O.png';
    const CROSS = './img/Jogo-da-velha-X.png';

    let xTurn = true;
    let mark;

    const gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    let count = 0;

    while (count < 9) {

        const square = document.createElement('div');
        square.className = "square";
        square.classList.add(count.toString());
        board.appendChild(square)

        count++
    }

    const squares = document.querySelectorAll('.square');

    const handleClicks = (e) => {
        let play = Number(e.target.classList[1]);
        xTurn = !xTurn;

        xTurn ? gameboard[play] = 'X' : gameboard[play] = 'O';
        xTurn ? mark = CROSS          : mark = CIRCLE;     

        insertMark(play, mark)
    }

    squares.forEach(square => {
        square.addEventListener('click', handleClicks)
    })


    const insertMark = (index, markOnBoard) => {
        const image = document.createElement('img');
        image.className = 'mark';
        image.setAttribute('src', markOnBoard);
        squares[index].appendChild(image);
        checkWin()
    };

    const checkWin = () => {

        if (gameboard.every(item => item == "X" || item == "O")) {
            result.textContent = "Empate..."
            endGame()
        }

        if (((gameboard[0] === gameboard[1] && gameboard[1] === gameboard[2]) && gameboard[2] === 'X') ||
            ((gameboard[3] === gameboard[4] && gameboard[4] === gameboard[5]) && gameboard[5] === 'X') ||
            ((gameboard[6] === gameboard[7] && gameboard[7] === gameboard[8]) && gameboard[8] === 'X')) 
            {
                result.textContent = 'X Ganhou';
                endGame()
            } 

        if (((gameboard[0] === gameboard[1] && gameboard[1] === gameboard[2]) && gameboard[2] === 'O') ||
            ((gameboard[3] === gameboard[4] && gameboard[4] === gameboard[5]) && gameboard[5] === 'O') ||
            ((gameboard[6] === gameboard[7] && gameboard[7] === gameboard[8]) && gameboard[8] === 'O')) 
            {
                result.textContent = 'O Ganhou';
                endGame()

            }
        
        if ((gameboard[0] === gameboard[3] && gameboard[3] === gameboard[6]) && gameboard[6] === 'X' ||
            (gameboard[1] === gameboard[4] && gameboard[4] === gameboard[7]) && gameboard[7] === 'X' ||
            (gameboard[2] === gameboard[5] && gameboard[5] === gameboard[8]) && gameboard[8] === 'X') 
            {
                result.textContent = 'X Ganhou';
                endGame()
            } 
        
            
        if ((gameboard[0] === gameboard[3] && gameboard[3] === gameboard[6]) && gameboard[6] === 'O' ||
            (gameboard[1] === gameboard[4] && gameboard[4] === gameboard[7]) && gameboard[7] === 'O' ||
            (gameboard[2] === gameboard[5] && gameboard[5] === gameboard[8]) && gameboard[8] === 'O') 
            {
                result.textContent = 'O Ganhou';
                endGame()
            }
        
        if ((gameboard[0] === gameboard[4] && gameboard[4] === gameboard[8]) && gameboard[8] === 'X' ||
            (gameboard[6] === gameboard[4] && gameboard[4] === gameboard[2]) && gameboard[2] === 'X') 
            {
                result.textContent = 'X Ganhou';
                endGame()
            } 
        if ((gameboard[0] === gameboard[4] && gameboard[4] === gameboard[8]) && gameboard[8] === 'O' ||
            (gameboard[6] === gameboard[4] && gameboard[4] === gameboard[2]) && gameboard[2] === 'O') 
            {
                result.textContent = 'O Ganhou';
                endGame()
            } 
        
    }

    const endGame = () => {
        squares.forEach(square => {
            square.removeEventListener('click', handleClicks)
            newGame.classList.remove('hide');
            title.classList.add('hide');
        })
    } 

    newGame.addEventListener('click', ()  => {
        location.reload()
    })

})()


