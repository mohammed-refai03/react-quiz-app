import React, { useContext, useEffect, useState } from 'react'
import { LuSun, LuMoon, LuBrain, LuTrophy } from "react-icons/lu";
import { QuizContext } from '../context/QuizProvider';

const Navbar = () => {
    const [theme, setTheme] = useState("light")

    const {bestScore}=useContext(QuizContext)

   const handleTheme=()=>{
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme)
   }
   useEffect(() => {
    document.body.classList.remove("light","dark")
    document.body.classList.add(theme)
   }, [theme])
   

  return (
    <div>
      <nav
        className="navbar shadow px-3 fixed-top w-100"
        style={{ backgroundColor: "var(--bg)", height: "70px" }}
      >
        <div className="d-inline-flex align-items-center gap-2">
          <div
            className="d-inline-flex p-2 rounded-2 align-items-center"
            style={{ backgroundColor: "#895AF6" }}
          >
            <LuBrain color="#fff" size={"25px"} />
          </div>

          <h3 className='m-0'>QuizMaster</h3>
        </div>
        <div className="d-inline-flex align-items-center gap-3">
          <div
            className="m-0 d-none d-md-flex align-items-center gap-2 p-2 rounded-3"
            style={{ border: "1px solid var(--border)" }}
          >
            <LuTrophy color="#f78a10" />
            <p className="m-0">Best Score: {bestScore}</p>
          </div>
          <button onClick={handleTheme} className="btn">
            {theme === "light" ? (
              <LuMoon
                size={"20px"}
                style={{
                  color: "var(--text)",
                }}
              />
            ) : (
              <LuSun
                size={"20px"}
                style={{
                  color: "var(--text)",
                }}
              />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar