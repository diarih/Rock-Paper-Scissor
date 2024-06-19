import './App.css'
import Header from "./components/Header.jsx";
import MainMenu from "./components/MainMenu.jsx";
import Rules from "./components/Rules.jsx";

function App() {

  return (
    <div className={"containerBG"}>
      <div className={"container h-screen mx-auto p-4 flex justify-center items-center flex-col w-full gap-4"}>
        <Header />
        <MainMenu />
        <Rules />
      </div>
    </div>
  )
}

export default App
