import React, { useContext, useEffect, useState } from "react";
import '../styles/Quiz.css'

import {QuizContext} from "../context/QuizProvider";

const Quiz = () => {
  
  const {
    questionNum,
    handleNext,
    handleShowResult,
    handleSelectAnswer,
    isAnswered,
    selectedOption,
    filteredQuestions,
  } = useContext(QuizContext);

  if (!filteredQuestions|| filteredQuestions.length===0) {
    return <p>Loading Question...</p>
  }

  const currentQuestion=filteredQuestions[questionNum]
  const correctAnswerText = currentQuestion.options[currentQuestion.correctAnswer];

 

  return (
    <div className="conatiner d-flex justify-content-center align-items-center w-100 mb-4">
      <div
        className="quiz-container rounded-3 col-11 col-md-8 col-lg-5 col-xl-5"
        style={{ backgroundColor: "var(--container-bg)" }}
      >
        <div className="p-4">
          <p className="small fw-semibold bg-light d-inline p-2 rounded-5">
            {currentQuestion.category}
          </p>
          <p className="text-muted small mt-3 mb-0">
            Question {questionNum + 1} of {filteredQuestions.length}
          </p>
          <h4 className="mt-2 mb-3 fw-bold">{currentQuestion.question}</h4>
          <div>
            {currentQuestion.options.map((opt) => {
              let optionstyle =
                "option border rounded-2 w-100 fw-normal d-flex align-items-center mb-3";
              let cursorClass = isAnswered ? "disabled-options" : "";
              if (isAnswered) {
                if (opt === correctAnswerText) {
                  optionstyle += " correct";
                } else if (opt === selectedOption) {
                  optionstyle += " incorrect";
                }
              }
              const finalClasses = `${optionstyle} ${cursorClass}`;
              return (
                <div
                  className={finalClasses}
                  onClick={() => {
                    if (!isAnswered) {
                      handleSelectAnswer(opt, correctAnswerText);
                    }
                  }}
                >
                  <p className="m-0 p-3">{opt}</p>
                </div>
              );
            })}
            {isAnswered && (
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                {selectedOption === correctAnswerText ? (
                  <p className="right-answer mt-2 p-3 rounded-2 fw-bold">
                    Correct! Great Job
                  </p>
                ) : (
                  <div className="wrong-answer mt-2 p-3 rounded-2 col-12 col-md-auto mb-3">
                    <p className="m-0 fw-bold">Incorrect</p>
                    <p className="m-0">Answer : {correctAnswerText}</p>
                  </div>
                )}
                {questionNum < filteredQuestions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="btn custom-btn fw-bold col-12 col-md-4"
                  >
                    Next Question
                  </button>
                ) : (
                  <button
                    onClick={handleShowResult}
                    className="btn custom-btn fw-bold col-12 col-md-4"
                  >
                    See Results
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
