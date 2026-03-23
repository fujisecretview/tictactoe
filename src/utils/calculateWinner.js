function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // given an array of chars 'X'

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    // We are checking if squares on index in array of lines is 'X' 'X' 'X' or '0' '0' '0'
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default calculateWinner;
