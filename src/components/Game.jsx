import Board from './Board';
import calculateWinner from '../utils/calculateWinner';
import { useState } from 'react';
import '../styles/components/reset-button.css';
import '../styles/components/board.css';
import '../styles/components/game-container.css';

const Game = () => {
  const initialSquares = Array(9).fill(null);

  const [isNext, setIsNext] = useState(false);
  const [history, setGameHistory] = useState([...initialSquares]);

  const handlePlay = (nextSquares) => {
    setGameHistory([...history, nextSquares]);
    console.log(history);
    setIsNext((prev) => !prev);
  };

  const resetGame = () => {
    setGameHistory(initialSquares);
    setIsNext(false);
  };

  const jumpTo = (nextMove) => {};

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
          <Board isNext={isNext} setIsNext={setIsNext} onPlay={handlePlay} />
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
