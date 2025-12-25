import { useContext } from 'react';
import { QuizContext } from '../context/QuizProvider';
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
import "../styles/QuizCategory.css"


const QuizCategory = () => {

   const {catergories,difficulties,handleCategory,handleDifficulty,category,difficulty,filteredQuestions,showquizcount,handleStartQuiz}=useContext(QuizContext)
  
  return (
    <div className="d-flex justify-content-center align-items-center flex-column mb-5">
      <div className="text-center col-11 col-md-8 col-lg-5 col-xl-5 mt-5">
        <h1 className="display-5 fw-bold">
          Test your <span style={{ color: "#895AF6" }}>Knowledge</span>
        </h1>
        <p className="text-muted fs-5">
          Master web development with interactive quizzes. Track progress, earn
          achievements, and level up your skills!
        </p>
      </div>
      <div
        className="quiz-container rounded-3 col-11 col-md-8 col-lg-5 col-xl-5 mt-5"
        style={{ backgroundColor: "var(--container-bg)" }}
      >
        <div className="d-flex flex-column justify-content-center p-3 my-3">
          <div className="d-flex gap-3">
            <div>
              <img src="/images/target.png" alt="" width={"40px"} />
            </div>
            <div>
              <h5 className="m-0 fw-bold">Choose Your Challenge</h5>
              <p className="text-muted">Select category and difficulty</p>
            </div>
          </div>
          <div className="my-2">
            <h6 className="text-uppercase text-muted fw-bold mb-2">Category</h6>
            <div>
              {catergories.map((cat) => (
                <button
                  className={
                    `category-btn` +
                    (category === cat.category ? " active-category" : "")
                  }
                  key={cat.id}
                  onClick={(e) => handleCategory(cat)}
                >
                  <img
                    src={cat.icon}
                    alt=""
                    width={"20px"}
                    style={{ marginRight: "5px" }}
                  />
                  {cat.category}
                </button>
              ))}
            </div>
          </div>
          <div className="my-2">
            <h6 className="text-uppercase text-muted fw-bold">Difficulty</h6>
            <div>
              {difficulties.map((dif) => (
                <button
                  className={
                    `category-btn` +
                    (difficulty == dif.level ? " active-category" : "")
                  }
                  key={dif.id}
                  onClick={(e) => handleDifficulty(dif)}
                >
                  {dif.level}
                </button>
              ))}
            </div>
          </div>

          {showquizcount && (
            <div className="question-count d-flex align-items-center my-3  p-3 rounded-3">
              <p className="m-0">
                <AiOutlineThunderbolt size={"20px"} />{" "}
                {filteredQuestions.length} questions available
              </p>
            </div>
          )}

          <button
            style={{ backgroundColor: "#8833ee", color: "#ffffff" }}
            className="btn fw-bold my-3 p-2"
            onClick={handleStartQuiz}
          >
            {" "}
            <FiPlay size={"25px"} style={{ marginRight: "5px" }} />
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizCategory