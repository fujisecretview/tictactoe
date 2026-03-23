import Board from './Board';
import calculateWinner from '../utils/calculateWinner';
import { useState } from 'react';
import '../styles/components/reset-button.css';
import '../styles/components/board.css';

const Game = () => {
  const initialSquares = Array(9).fill(null);

  const [isNext, setIsNext] = useState(true);
  const [history, setGameHistory] = useState([initialSquares]);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove]; // текущий отпечаток в истории
  const isBoardFull = history.length > 9;

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // setting game history state with previous value plus current modified value passed by board component
    setGameHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIsNext((prev) => !prev);
  };

  const resetGame = () => {
    setGameHistory([initialSquares]);
    setCurrentMove(0);
    setIsNext(true);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setIsNext(nextMove % 2 === 0);
  };

  const moves = history.map((square, index) => {
    let description;
    if (index > 0) {
      description = 'Go to move ' + index;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={index}>
        <button onClick={() => jumpTo(index)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className="game-container">
        <div className="board">
          <Board
            isNext={isNext}
            setIsNext={setIsNext}
            onPlay={handlePlay}
            currentSquares={currentSquares}
            isBoardFull={isBoardFull}
          />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginLeft: '80px' }}
        >
          <button onClick={resetGame} className="reset-button">
            Reset button
          </button>
        </div>
      </div>
    </>
  );
};

export default Game;
