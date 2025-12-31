import { useEffect, useRef, useState } from "react"
import "../style/gameBoard.css"

const makeDeck6x6 = () => {
  const values = Array.from({ length: 18 }, (_, i) => i + 1)
  const deck = [...values, ...values].map((value, idx) => ({
    id: crypto.randomUUID?.() ?? `${value}-${idx}`,
    value,
    isMatched: false,
  }))
  return deck.sort(() => Math.random() - 0.5)
}

export default function GameBoard({
  turn,
  setTurn,
  setPlayer1Score,
  setPlayer2Score,
  setStatus,
}) {
  const [cards, setCards] = useState(() => makeDeck6x6())
  const [first, setFirst] = useState(null)
  const [second, setSecond] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const timerRef = useRef(null)

  const handlePick = (card) => {
    if (disabled) return
    if (card.isMatched) return
    if (card.id === first?.id) return
    if (!first) setFirst(card)
    else if (!second) setSecond(card)
  }

  const resetTurn = () => {
    setFirst(null)
    setSecond(null)
    setDisabled(false)
  }

  useEffect(() => {
    if (!first || !second) return

    setDisabled(true)

    if (first.value === second.value) {
      // keep revealed
      setCards((prev) =>
        prev.map((c) =>
          c.value === first.value ? { ...c, isMatched: true } : c
        )
      )

      // score
      if (turn === 1) setPlayer1Score((s) => s + 1)
      else setPlayer2Score((s) => s + 1)

      setStatus({ type: "match", text: "MATCH! +1" })

      // same player continues
      resetTurn()
    } else {
      setStatus({ type: "mismatch", text: "NO MATCH!" })

      timerRef.current = setTimeout(() => {
        setTurn((t) => (t === 1 ? 2 : 1))
        resetTurn()
      }, 700)
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [first, second, turn, setTurn, setPlayer1Score, setPlayer2Score, setStatus])

  const isFlipped = (card) =>
    card.isMatched || card.id === first?.id || card.id === second?.id

  return (
    <div className="board">
      {cards.map((card) => (
        <button
          key={card.id}
          className={`card ${isFlipped(card) ? "flipped" : ""}`}
          onClick={() => handlePick(card)}
          type="button"
          disabled={disabled && !isFlipped(card)}
        >
          {isFlipped(card) ? card.value : "?"}
        </button>
      ))}
    </div>
  )
}
