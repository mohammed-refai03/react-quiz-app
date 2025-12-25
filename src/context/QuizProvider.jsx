import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { Questions } from '../data/Questions';

export const QuizContext=createContext();

const QuizProvider = ({children}) => {
  // State definitions
  const [filteredQuestions, setfilteredQuestions] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [showquizcount, setShowquizcount] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    Number(localStorage.getItem("bestScore")) || 0
  );
  const [isNewBest, setIsNewBest] = useState(false);
  const [time, setTime] = useState(60);
  const [status, setStatus] = useState("category");

  const catergories = [
    { id: 1, category: "HTML", icon: "/images/html-5.png" },
    { id: 2, category: "CSS", icon: "images/css-3.png" },
    { id: 3, category: "JavaScript", icon: "images/js.png" },
    { id: 4, category: "React", icon: "images/atom.png" },
  ];

  const difficulties = [
    { id: 1, level: "All" },
    { id: 2, level: "Easy" },
    { id: 3, level: "Medium" },
    { id: 4, level: "Hard" },
  ];

  // Handlers definitions

  const handleCategory = (cat) => {
    setCategory(cat.category);
  };
  const handleDifficulty = (dif) => {
    setDifficulty(dif.level);
    setShowquizcount(true);
  };

  useEffect(() => {
    if (!category) return;

    let result = Questions.filter(
      (ques) => ques.category.toLowerCase() === category.toLowerCase()
    );

    if (difficulty && difficulty !== "All") {
      result = result.filter(
        (ques) => ques.difficulty.toLowerCase() === difficulty.toLowerCase()
      );
    }
    setfilteredQuestions(result);
    console.log(difficulty);
  }, [category, difficulty]);

  const handleStartQuiz = () => {
    if (category && difficulty) {
      setStatus("quiz");
    } else {
      alert("please select both caterogy and difficulty first!.");
    }
  };

  const handleNext = () => {
    setSelectedOption(null); 
    setIsAnswered(false); 
    setQuestionNum((prev) => prev + 1);
    setTime(60);
  };
  const handleBack = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setQuestionNum((prev) => prev - 1);
  };
  const handleShowResult = () => {
    setBestScore((prev) => {
      if (score > prev) {
        setIsNewBest(true);
        localStorage.setItem("bestScore", score);
        return score;
      }
      setIsNewBest(false);
      return prev;
    });
    setStatus("result");
  };
  const handlePlayAgain = () => {
    setStatus("category");
    setQuestionNum(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
  };

  const handleSelectAnswer = (opt, correctAnswerText) => {
    if (isAnswered) return;
    setSelectedOption(opt);
    setIsAnswered(true);
    if (opt === correctAnswerText) {
      setScore((prev) => prev + 1);
    }
  };

  // values passed to consumers.
  const contextValue = {
    questionNum,
    setQuestionNum,
    selectedOption,
    setSelectedOption,
    isAnswered,
    setIsAnswered,
    score,
    filteredQuestions,
    category,
    setCategory,
    difficulty,
    setDifficulty,
    showquizcount,
    catergories,
    difficulties,
    status,
    setStatus,
    time,
    setTime,
    setScore,
    bestScore,
    isNewBest,
    handleCategory,
    handleDifficulty,
    handleNext,
    handleBack,
    handleShowResult,
    handleSelectAnswer,
    handleStartQuiz,
    handlePlayAgain,
  };
  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  );
}

export default QuizProvider