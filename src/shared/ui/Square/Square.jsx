import './square.css';

const Square = ({ value, onSquareClick }) => {
  return (
    <button onClick={onSquareClick} className={`square ${value && 'filled'}`}>
      {value}
    </button>
  );
};

export default Square;
