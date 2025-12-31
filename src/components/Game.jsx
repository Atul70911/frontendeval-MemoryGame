import { useEffect, useState } from "react"
import GameBoard from "./GameBoard"
import "../style/game.css"

export default function Game({
  setState,
  player1,
  player1Score,
  setPlayer1Score,
  player2,
  player2Score,
  setPlayer2Score,
}) {
  const [turn, setTurn] = useState(1)

  // status: { type: "match" | "mismatch" | "info", text: string }
  const [status, setStatus] = useState({ type: "info", text: "" })

  // auto-hide MATCH / NO MATCH
  useEffect(() => {
    if (!status.text) return
    const id = setTimeout(() => setStatus((s) => ({ ...s, text: "" })), 900)
    return () => clearTimeout(id)
  }, [status.text])

  return (
    <>
      <div className="score-board">
        <div className={`player-board ${turn === 1 ? "active" : ""}`}>
          <h2 className="player-name">{player1 || "Player 1"}</h2>
          <h2 className="player-score">{player1Score}</h2>
        </div>

        <div className={`player-board ${turn === 2 ? "active" : ""}`}>
          <h2 className="player-name">{player2 || "Player 2"}</h2>
          <h2 className="player-score">{player2Score}</h2>
        </div>

        <button className="back-btn" type="button" onClick={() => setState("Home")}>
          Home
        </button>
      </div>

      <div className="hud">
        <div className="turn-chip">
          Turn:
          <span>{turn === 1 ? player1 || "Player 1" : player2 || "Player 2"}</span>
        </div>

        {status.text ? (
          <div className={`status-pill ${status.type}`}>{status.text}</div>
        ) : (
          <div className="status-pill info">Pick 2 cards</div>
        )}
      </div>

      <GameBoard
        turn={turn}
        setTurn={setTurn}
        setPlayer1Score={setPlayer1Score}
        setPlayer2Score={setPlayer2Score}
        setStatus={setStatus}
      />
    </>
  )
}
