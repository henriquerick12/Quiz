import { useContext, useEffect } from "react";
import { QuizContext } from "./Context";

import Welcom from "./Components/Welcom/index";
import Questions from "./Components/Questions/index";
import GameOver from "./Components/GameOver";

import "./App.css";

function App() {
  const [quiz, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      {quiz.initial === "Start" && <Welcom />}
      {quiz.initial === "Play" && <Questions />}
      {quiz.initial === "End" && <GameOver />}
    </div>
  );
}

export default App;
