import {useState} from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}){
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex){
        /*Deep copying the existing game board and then updating it based on the clicks*/
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });
        onSelectSquare();
    }
    /* Creating a 2 dimensional list of the elements in the game board. */ 
    return(
        <ol id="game-board">
            {gameBoard.map((row,rowIndex) => (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (<li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                    </li>))}
                </ol>
            </li>))}
        </ol>
    );
}