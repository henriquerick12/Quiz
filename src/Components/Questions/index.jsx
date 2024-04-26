import { useContext } from "react";

import { QuizContext } from "../../Context/index";
import Option from "../Options";

import "./style.css";

const Question = () => {
  const [state, dispatch] = useContext(QuizContext);
  const atualPergunta = state.questions[state.currentQuestion];

  function handleAnswer(item) {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { question: item, answer: atualPergunta.answer },
    });
  }

  return (
    <div id="question">
      <p>
        Pergunta {state.currentQuestion + 1} de {state.questions.length}
      </p>
      <h2>{atualPergunta.question}</h2>
      <div id="options-container">
        {atualPergunta.options.map((item) => (
          <Option
            key={item}
            option={item}
            resposta={atualPergunta.answer}
            handleAnswer={() => handleAnswer(item)}
          />
        ))}
        {state.isSelected && (
          <button onClick={() => dispatch({ type: "CHANGE_QUESTIONS" })}>
            Continuar
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
