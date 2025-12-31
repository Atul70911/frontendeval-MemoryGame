import "../style/winner.css"

export default function Winner({ setState, player1, player2, player1Score, player2Score }) {
  let title = "Draw!"
  if (player1Score > player2Score) title = `${player1} Wins!`
  if (player2Score > player1Score) title = `${player2} Wins!`

  return (
    <div className="winner">
      <h1 className="winner-title">{title}</h1>

      <div className="winner-card">
        <div className="winner-row">
          <span className="winner-name">{player1}</span>
          <span className="winner-score">{player1Score}</span>
        </div>
        <div className="winner-row">
          <span className="winner-name">{player2}</span>
          <span className="winner-score">{player2Score}</span>
        </div>
      </div>

      <div className="winner-actions">
        <button className="winner-btn" onClick={() => setState("Home")} type="button">
          New Game
        </button>
        <button className="winner-btn alt" onClick={() => setState("Game")} type="button">
          Rematch
        </button>
      </div>
    </div>
  )
}
