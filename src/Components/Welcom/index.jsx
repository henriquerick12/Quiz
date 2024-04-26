import { useContext } from "react";
import { QuizContext } from "../../Context";

import Quiz from "../../assets/quiz.svg";
import "./style.css";

const Welcom = () => {
  const [state, dispatch] = useContext(QuizContext)

  console.log(state)
  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  );
};

export default Welcom;
