import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [moves, setMoves] = useState([]);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const handleClick = (i) => {
    if (squares[i] || winner || isDraw) return;

    const nextSquares = squares.slice();
    const player = xIsNext ? "X" : "O";
    nextSquares[i] = player;

    setSquares(nextSquares);
    setMoves([...moves, `Jogada ${moves.length + 1}: ${player} → posição ${i + 1}`]);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setMoves([]);
    setWinner(null);
    setIsDraw(false);
  };

  useEffect(() => {
    const gameWinner = calculateWinner(squares);
    if (gameWinner) {
      setWinner(gameWinner);
      confetti();
    } else if (!squares.includes(null)) {
      setIsDraw(true);
    }
  }, [squares]);

  const status = winner
    ? `Vencedor: ${winner}`
    : isDraw
    ? "Empate!"
    : `Próximo: ${xIsNext ? "X" : "O"}`;

  const renderWinner = () => {
    if (winner === "X") {
      return <span className="text-red-500 font-extrabold">X</span>;
    } else if (winner === "O") {
      return <span className="text-blue-500 font-extrabold">O</span>;
    }
    return null;
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Jogo da Velha</h2>
      <div className="flex gap-8">
        <div>
          <div className="mb-2">{status}</div>
          <div className="grid grid-cols-3 gap-2 w-40">
            {squares.map((square, i) => (
              <button
                key={i}
                className="w-12 h-12 text-2xl border font-extrabold"
                onClick={() => handleClick(i)}
                style={{ color: square === "X" ? "red" : square === "O" ? "blue" : "inherit" }}
              >
                {square}
              </button>
            ))}
          </div>
        </div>

        {/* Histórico */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Histórico</h3>
          <ul className="list-disc pl-5 text-sm max-w-xs">
            {moves.map((move, index) => (
              <li key={index}>{move}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Popup de vencedor ou empate */}
      {(winner || isDraw) && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-[#545252] text-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-2">
              {winner ? (
                <>
                  🏆 {renderWinner()} venceu!
                </>
              ) : (
                "🤝 Deu Velha!"
              )}
            </h2>
            <button
              onClick={resetGame}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
            >
              Jogar novamente
            </button>
          </div>
        </div>
      )}
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
