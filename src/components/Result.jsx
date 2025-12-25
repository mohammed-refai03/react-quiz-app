import { LuTrophy, LuTarget } from "react-icons/lu";
import { AiOutlinePercentage } from "react-icons/ai";
import { MdReplay } from "react-icons/md";
import '../styles/Result.css'
import { useContext } from 'react';
import { QuizContext } from '../context/QuizProvider';

const Result = () => {
    
   const { score, filteredQuestions, handlePlayAgain,bestScore,isNewBest } =
     useContext(QuizContext);

   const percentage=Math.round((score/filteredQuestions.length)*100)
   
  
     const getAchievement=()=>{
       if (percentage === 100)
         return {
           title: "Quiz Master!",
           subtitle: "Perfect Score Achieved!.",
           achievementLevel: "Gold Acheivement",
           icon: "👌",
           emoji: "🏆",
           color: "#F78A10",
         };
       else if (percentage >= 80)
         return {
           title: "Outstanding!",
           subtitle: "you're a Pro!",
           achievementLevel: "Gold Acheivement",
           icon: "⭐",
           emoji: "🥇",
           color: "#F78A10",
         };
       else if (percentage >= 60)
         return {
           title: "Great Job!",
           subtitle: "Well Done!",
           achievementLevel: "Silver Acheivement",
           icon: "🏅",
           emoji: "🥈",
           color: "#757575",
         };
       else if (percentage >= 40)
         return {
           title: "Good Effort!",
           subtitle: "Keep Practicing!",
           achievementLevel: "Bronze Acheivement",
           icon: "🎯",
           emoji: "🥉",
           color: "#C06930",
         };
         return {
           title: "Keep Going!",
           subtitle: "Practice makes perfect!",
           achievementLevel: "Participation",
           icon: "👍",
           emoji: "📘",
           color: "var(--border)",
         };
     }
   
   const achievement=getAchievement()
  
  return (
    <div
      className="d-flex justify-content-center align-items-center mt-4 py-5"
      style={{ minHeight: "calc(100vh - 56px)", paddingTop: "56px" }}
    >
      <div
        className="result d-flex justify-content-center align-items-center flex-column py-4 rounded-3 col-11 col-md-8 col-lg-5 col-xl-4"
        style={{ backgroundColor: "var(--container-bg)" }}
      >
        <div
          className="trophy rounded-circle d-flex justify-content-center align-items-center position-relative"
          style={{
            backgroundColor: "#8833ee",
            width: "100px",
            height: "100px",
          }}
        >
          <LuTrophy size={"50px"} color="#fff" />
          <span className="position-fixed translate-middle top-1 start-100 right-1 fs-1">
            {achievement.emoji}
          </span>
        </div>
        <h2 className="mt-4 fw-bold">{achievement.title}</h2>
        <p className="m-0 p-0 fs-5 text-muted">{achievement.subtitle}</p>
        <p
          className="achievement fw-bold mt-4 px-3 px-md-5 py-1 rounded-2 px-3 mt-3"
          style={{ backgroundColor: `${achievement.color}`, color: "#fff" }}
        >
          <span className="fs-4">{achievement.icon} </span>
          {achievement.achievementLevel}
        </p>
        { isNewBest ? (
          <p className="m-2 mb-5 fs-6 w-100 p-1 text-center fw-bold" style={{ backgroundColor: "#A35AF4" , color:"#fff"}}>
            🎉 New High Score! 🎉
          </p>
        ) : (
          <p></p>
        )}

        <div className="results d-flex flex-nowrap gap-2 px-2 m-0 w-100">
          <div className="points pt-2">
            <div style={{ backgroundColor: "#A35AF4" }} className="point-icon">
              <LuTarget size={"25px"} color="#fff" />
            </div>
            <h5 className="m-0 mt-3 fw-bold">{score}</h5>
            <p className="text-muted">Points</p>
          </div>
          <div className="points pt-2">
            <div style={{ backgroundColor: "#24CDCF" }} className="point-icon">
              <AiOutlinePercentage size={"25px"} color="#fff" />
            </div>
            <h5 className="m-0 mt-3 fw-bold">{percentage}%</h5>
            <p className="text-muted">Percent</p>
          </div>
          <div className="points pt-2">
            <div style={{ backgroundColor: "#f78a10" }} className="point-icon">
              <LuTrophy size={"25px"} color="#fff" />
            </div>
            <h4 className="m-0 mt-3 fw-bold">{bestScore}</h4>
            <p className="text-muted">Best</p>
          </div>
        </div>
        <button
          className="custom-btn col-10 rounded-2 p-2 mt-4 mb-2  fw-bold d-flex justify-content-center align-items-center gap-2"
          onClick={handlePlayAgain}
        >
          <MdReplay size={"25px"} />
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Result