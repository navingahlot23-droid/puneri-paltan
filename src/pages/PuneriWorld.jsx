import Herosection from "../components/HeroSection"
import { Link } from "react-router-dom"
import paltanWorldDesktop from "../assets/paltan-world-homepage_s12.png"
import paltanWorldMobile from "../assets/paltan-world-banner-mobile_s12.png"
import tvBG from "../assets/tv-s12.png"
import galleryBG from "../assets/gallery-s12.png"

export default function PuneriWorld() {
  return (
    <>
      <Herosection imgSRCDesktop={paltanWorldDesktop} imgSRCMobile={paltanWorldMobile} />
      <div className="flex lg:flex-nowrap max-[767px]:flex-col">
        <div className="relative lg:w-1/2">
          <Link to="/puneri-tv">
            <img src={tvBG} alt="Puneri TV" />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[Love-Nature] tracking-[6px] text-white m-0 text-[45px] lg:text-[70px] leading-[110%] w-full text-center">Puneri TV</h1>
          </Link>
        </div>
        <div className="relative lg:w-1/2">
          <Link to="/gallery">
            <img src={galleryBG} alt="Gallery" />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[Love-Nature] tracking-[6px] text-white m-0 text-[45px] lg:text-[70px] leading-[110%]] w-full text-center">Gallery</h1>
          </Link>
        </div>
      </div>
    </>
  )
}
