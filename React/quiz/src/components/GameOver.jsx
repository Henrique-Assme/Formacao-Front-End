import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import wellDone from "../img/welldone.svg"
import "./GameOver.css"

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>Você acertou {quizState.score} de {quizState.questions.length} perguntar</p>
      <img src={wellDone} alt="Fim de jogo" />
      <button onClick={() => dispatch({type: "RESTART"})}>Reiniciar</button>
    </div>
  )
}

export default GameOver
