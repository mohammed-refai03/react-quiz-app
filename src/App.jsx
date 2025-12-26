import React, { useContext} from 'react'
import './App.css'
import Quiz from './components/Quiz'
import Navbar from './components/Navbar'
import Result from './components/Result';
import Progressbar from './components/Progressbar';
import QuizProvider, { QuizContext } from './context/QuizProvider';
import QuizCategory from './components/QuizCategory';


const AppContent=()=>{
  const {status}=useContext(QuizContext)
  
  return (
    <>
      <Navbar />

      <div className='app-content'>
        {status == "category" && <QuizCategory />}
        {status == "quiz" && (
          <div className="d-flex flex-column gap-5 justify-content-center align-items-center min-vh-100 w-100 my-5">
            <Progressbar />
            <Quiz />
          </div>
        )}
        {status == "result" && <Result />}
      </div>
    </>
  );

}

const App = () => {
  return (
   
      <QuizProvider> 
       <AppContent/>
      </QuizProvider>
    
  );
}

export default App