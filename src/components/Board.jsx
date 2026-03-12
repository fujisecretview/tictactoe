import { useState } from 'react';
import '../styles/components/board-row.css';
import Square from './Square';

// We pass an anonymous function because writing handleClick(i)
// would execute the function immediately during render.
// JavaScript evaluates expressions before passing them as props,
// so handleClick(i) would run right away.
// By wrapping it in () => handleClick(i), we pass a function reference
// that will be executed later when the click event occurs.

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [isNext, setIsNext] = useState(false);

  const handleClick = (i) => {
    if (squares[i]) return;

    // creating copy of array becouse react is re render only when is changed reference
    const nextSquare = squares.slice();
    isNext ? (nextSquare[i] = 'O') : (nextSquare[i] = 'X');
    setSquares(nextSquare);
    setIsNext((prev) => !prev);
  };

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
