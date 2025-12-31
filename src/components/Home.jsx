import "../style/home.css"

export default function Home({
  setState,
  player1,
  player2,
  setPlayer1,
  setPlayer2,
  setPlayer1Score,
  setPlayer2Score,
}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!player1.trim() || !player2.trim()) return

    // reset for a fresh game
    setPlayer1Score(0)
    setPlayer2Score(0)

    setState("Game")
  }

  return (
    <div className="Home">
      <h1 className="home-title">Memory Game</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="player-card">
          <label className="player-label">
            Player 1
            <input
              className="player-input"
              value={player1}
              onChange={(e) => setPlayer1(e.target.value)}
            />
          </label>
        </div>

        <div className="player-card">
          <label className="player-label">
            Player 2
            <input
              className="player-input"
              value={player2}
              onChange={(e) => setPlayer2(e.target.value)}
            />
          </label>
        </div>

        <button className="player-submit" type="submit">
          Start Game
        </button>
      </form>
    </div>
  )
}
