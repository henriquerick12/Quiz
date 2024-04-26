import { useContext } from "react";

import { QuizContext } from "../../Context/index";

import "./style.css";

const Option = ({ option, handleAnswer, resposta }) => {
  const [state, dispatch] = useContext(QuizContext);

  console.log(option);
  console.log(resposta);

  return (
    <div
      className={`option ${
        state.isSelected && option === resposta ? "correct" : ""
      }
        ${state.isSelected && option !== resposta ? "wrong" : ""}`}
      onClick={() => handleAnswer()}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;
