import { useContext } from "react";

import { QuizContext } from "../../Context/index";

import WellDone from "../../assets/welldone.svg";

import "./style.css";

const GameOver = () => {
  const [state, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {state.score}</p>
      <p>Você acertou {state.score} de {state.questions.length} perguntas.</p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
