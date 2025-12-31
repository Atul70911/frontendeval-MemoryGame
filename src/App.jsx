import { useState } from "react"
import "./App.css"
import Home from "./components/Home"
import Game from "./components/Game"
import VantaBackground from "./components/VantaBackground"

function App() {
  const [state, setState] = useState("Home")

  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")

  const [player1Score, setPlayer1Score] = useState(0)
  const [player2Score, setPlayer2Score] = useState(0)

  return (
    <VantaBackground>
      {state === "Home" && (
        <Home
          setState={setState}
          player1={player1}
          player2={player2}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          setPlayer1Score={setPlayer1Score}
          setPlayer2Score={setPlayer2Score}
        />
      )}

      {state === "Game" && (
        <Game
          setState={setState}
          player1={player1}
          player1Score={player1Score}
          setPlayer1Score={setPlayer1Score}
          player2={player2}
          player2Score={player2Score}
          setPlayer2Score={setPlayer2Score}
        />
      )}
    </VantaBackground>
  )
}

export default App
