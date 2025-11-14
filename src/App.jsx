import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Players from "./pages/Players"
import Standings from "./pages/Standings"
import PaltanWorld from "./pages/PaltanWorld"

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route index element = {<Home/>} />
        <Route path="/" element = {<Home/>} />
        <Route path="/players" element = {<Players/>} />
        <Route path="/standings" element = {<Standings/>} />
        <Route path="/paltan-world" element = {<PaltanWorld/>} />
      </Routes>
    </>
  )
}

export default App
