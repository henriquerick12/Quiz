import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES = ["Start", "Play", "End"];

const stateInitial = {
  initial: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  isSelected: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "REORDER_QUESTIONS":
      let reorder = questions.sort(() => {
        return Math.random() - 0.5;
      });

      return {
        ...state,
        questions: reorder,
      };

    case "CHANGE_STATE":
      return {
        ...state,
        initial: STAGES[1],
      };

    case "CHANGE_QUESTIONS":
      const newCurrentQuestion = state.currentQuestion + 1;
      let endgame = false;

      if (!questions[newCurrentQuestion]) {
        endgame = true;
      }

      return {
        ...state,
        initial: endgame ? STAGES[2] : state.initial,
        currentQuestion: newCurrentQuestion,
        isSelected: false,
      };

    case "NEW_GAME":
      return stateInitial;

    case "CHECK_ANSWER":
      if (state.isSelected) return state;

      const resposta = action.payload.answer;
      const pergunta = action.payload.question;
      let correct = 0;

      if (resposta === pergunta) {
        correct = 1;
      }

      return {
        ...state,
        score: state.score + correct,
        isSelected: pergunta,
      };

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const quiz = useReducer(quizReducer, stateInitial);

  return <QuizContext.Provider value={quiz}>{children}</QuizContext.Provider>;
};
