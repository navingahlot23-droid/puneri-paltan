import { Routes, Route } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

import Header from "./components/Header"
import Home from "./pages/Home"
import Players from "./pages/Players"
import PuneriWorld from "./pages/PuneriWorld";
import Footer from "./components/Footer";
import SinglePlayer from "./pages/SinglePlayer";
import PuneriTV from "./pages/PuneriTV";
import Gallery from "./pages/Gallery";
import SingleGallery from "./pages/SingleGallery";
import PageNotFound from "./pages/PageNotFound";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      // once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/puneri-world" element={<PuneriWorld />} />
        <Route path="/puneri-tv" element={<PuneriTV />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<SingleGallery />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
