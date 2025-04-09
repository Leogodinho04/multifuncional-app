import { useState } from "react";

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  const status = winner ? `Vencedor: ${winner}` : `Próximo: ${xIsNext ? "X" : "O"}`;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Jogo da Velha</h2>
      <div className="mb-2">{status}</div>
      <div className="grid grid-cols-3 gap-2 w-40">
        {squares.map((square, i) => (
          <button
            key={i}
            className="w-12 h-12 text-2xl border"
            onClick={() => handleClick(i)}
          >
            {square}
          </button>
        ))}
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }
  return null;
}

export default TicTacToe;
