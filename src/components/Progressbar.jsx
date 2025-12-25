import React, { useContext, useEffect, useState } from 'react'
import '../styles/Progressbar.css'
import { LuTimer, LuTarget } from "react-icons/lu";
import { QuizContext } from '../context/QuizProvider';

const Progressbar = () => {
  
  const {questionNum,setQuestionNum,filteredQuestions,time,setStatus,setTime,score}=useContext(QuizContext)

  let progress = Math.round((questionNum/filteredQuestions.length)*100)
  

  useEffect(() => {
    if (time <= 0) {
      setQuestionNum(prev=>prev+1)
      setTime(60)
      return;
    }
    const timeInterval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [time]);

  useEffect(() => {
    if (time<=0) {
      if(questionNum== filteredQuestions.length-1){
        setStatus("result")
      }
    }
  
    
  }, [questionNum,time])
  

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 col-11 col-md-8 col-lg-5 col-xl-5">
      <div
        className="progress-container rounded-3 p-3 w-100 "
        style={{ backgroundColor: "var(--container-bg)" }}
      >
        <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
          <div className="d-flex gap-2">
            <div
              className="d-inline-flex p-2 rounded-2 align-items-center"
              style={{ backgroundColor: "#895AF6" }}
            >
              <LuTarget color="#fff" size={"25px"} />
            </div>
            <div>
              <p className="fw-bold m-0">Current Score</p>
              <p className="m-0 fw-bold">
                {score} <span className="text-muted fw-normal">pts</span>{" "}
              </p>
            </div>
          </div>
          <div className="timer px-3 py-2 rounded-3 fw-bold d-inline-flex justify-content-center align-items-center gap-2">
            <LuTimer size={"20px"} />
            {time != 0 && formatTime(time)}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <p>progress</p>
          <p>
            <span className="fw-bold">{progress}% </span> completed
          </p>
        </div>
        <div className="w-100">
          <div
            className="progress"
            role="progressbar"
            style={{ height: "8px" }}
          >
            <div
              className="progress-bar bg-info"
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progressbar