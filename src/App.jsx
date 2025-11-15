import { Routes, Route } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

import Header from "./components/Header"
import Home from "./pages/Home"
import Players from "./pages/Players"
import Standings from "./pages/Standings"
import PaltanWorld from "./pages/PaltanWorld"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
     // once: true, // whether animation should happen only once
    });
  }, []);

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
