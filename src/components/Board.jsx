import '../styles/components/board.css';
import Square from '../shared/ui/Square/';
import calculateWinner from '../utils/calculateWinner';

// We pass an anonymous function because writing handleClick(i)
// would execute the function immediately during render.
// JavaScript evaluates expressions before passing them as props,
// so handleClick(i) would run right away.
// By wrapping it in () => handleClick(i), we pass a function reference
// that will be executed later when the click event occurs.

const Board = ({ currentSquares, isNext, onPlay, isBoardFull }) => {
  const winner = calculateWinner(currentSquares);
  let status;
  if (winner) {
    status = 'Winner is: ' + winner;
  } else if (!winner && isBoardFull) {
    status = 'Its Draw!';
  } else {
    status = 'Next player is: ' + (isNext ? 'X' : 'O');
  }

  const handleClick = (i) => {
    if (currentSquares[i] || winner) return; // if square is occupated or winner returned truthy value, do nothing
    // creating copy of array becouse react is re render only when is changed reference
    const nextSquare = [...currentSquares]; // copied and modified value which we clicked
    isNext ? (nextSquare[i] = 'X') : (nextSquare[i] = 'O');
    onPlay(nextSquare);
  };

  return (
    <>
      <h1 className="status">{status}</h1>
      <div className="board">
        {currentSquares.map((square, i) => (
          <Square
            key={i}
            onSquareClick={() => handleClick(i)}
            value={currentSquares[i]}
          />
        ))}
      </div>
    </>
  );
};

export default Board;
