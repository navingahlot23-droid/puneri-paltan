import { Link } from "react-router-dom"
import DL from "../assets/dl_logo.png"
import fb from "../assets/fb.png"
import insta from "../assets/insta.png"
import twitter from "../assets/twitter.png"
import yt from "../assets/yt.png"

export default function Footer() {
    return (
        <>
            <div className="bg-black py-5">
                <div className='mx-auto min-[1200px]:w-[1170px] min-[992px]:w-[970px] min-[768px]:w-[750px]'>
                    <div className="max-[767px]:flex max-[767px]:flex-col max-[767px]:justify-center max-[767px]:gap-4 md:grid md:grid-cols-3 md:items-center">
                        <h6 className="font-[Exo-Light] text-white text-[18px] max-[767px]:text-center leading-normal">Copyright © 2025 Puneri Paltan</h6>
                        <div className="flex justify-center items-center gap-[15px]">
                            <Link to="https://www.facebook.com/puneripaltan/" target="_blank" className="bg-[#444452] p-[15px] rounded-[25px] text-black w-[50px] h-[50px] text-[22px] transition-all duration-500 ease-in-out block hover:bg-primary-500"><img src={fb} alt="facebook" className="transition-all duration-500 ease-in-out hover:invert hover:brightness-200"/></Link>

                            <Link to="https://twitter.com/PuneriPaltan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" className="bg-[#444452] p-[15px] rounded-[25px] text-black w-[50px] h-[50px] text-[22px] transition-all duration-500 ease-in-out block hover:bg-primary-500"><img src={twitter} alt="twitter" className="transition-all duration-500 ease-in-out hover:invert hover:brightness-200"/></Link>

                            <Link to="https://instagram.com/puneripaltanofficial?utm_source=ig_profile_share&amp;igshid=m2wsuxrbs1f8" target="_blank" className="bg-[#444452] p-[15px] rounded-[25px] text-black w-[50px] h-[50px] text-[22px] transition-all duration-500 ease-in-out block hover:bg-primary-500"><img src={insta} alt="instagram" className="transition-all duration-500 ease-in-out hover:invert hover:brightness-200"/></Link>

                            <Link to="https://www.youtube.com/c/PuneriPaltan" target="_blank" className="bg-[#444452] p-[15px] rounded-[25px] text-black w-[50px] h-[50px] text-[22px] transition-all duration-500 ease-in-out block hover:bg-primary-500"><img src={yt} alt="youtube" className="transition-all duration-500 ease-in-out hover:invert hover:brightness-200"/></Link>
                        </div>
                        <div>
                            <Link to="https://digitallatte.in/" target="_blank">
                                <div class="flex flex-nowrap md:justify-end justify-center scale-[0.7]">
                                    <div class="made-by-text text-right mr-[5px]">
                                        <p className="text-white font-[Lato-Black] bg-[#ff7500] mb-[3px] px-2 py-0.5 rounded-[3px] tracking-[2px] text-[11px] uppercase">Managed</p>
                                        <p className="text-white inline font-[Lato-Black] bg-[#ff7500] mb-[3px] px-2 py-0.5 rounded-[3px] tracking-[2px] text-[11px] uppercase">By</p>
                                    </div>
                                    <img src={DL} className="w-[120px]"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}