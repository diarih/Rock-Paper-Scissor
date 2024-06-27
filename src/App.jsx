import './App.css'
import Header from "./components/Header.jsx";
import MainMenu from "./components/MainMenu.jsx";
import Rules from "./components/Rules.jsx";
import {createContext, useState} from "react";

export const ScoreContext = createContext(null)

function App() {

  const [score, setScore] = useState(0)
  
  return (
    <div className={"containerBG"}>
      <div className={"container h-screen mx-auto p-12 flex items-center flex-col w-full gap-12"}>
        <ScoreContext.Provider value={[score, setScore]}>
          <Header/>
          <MainMenu/>
          <Rules/>
        </ScoreContext.Provider>
      </div>
    </div>
  )
}

export default App