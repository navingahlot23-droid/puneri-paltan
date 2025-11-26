import '../css/home.css'
import Herosection from "../components/HeroSection"
import wrapperBG from "../assets/description-bg-new.jpg"
import merchandiseimg from "../assets/buy-tickets-homepage_s12.png"
import ticketimg from "../assets/tickets.png"
import paltanWorldBG from "../assets/fixtures-bg.jpg"
import paltanWorldDesktop from "../assets/paltan-world-homepage_s12.png"
import paltanWorldMobile from "../assets/paltan-world-banner-mobile_s12.png"
import newsBg from "../assets/news-bg.jpg"
import newsBanner from "../assets/news-banner.jpg"
import FM from "../assets/force_motors.png"
import ST from "../assets/stihl-logo.png"
import NS from "../assets/navitas_sponsor.webp"
import paras from "../assets/paras.webp"
import better from "../assets/better.webp"
import shivnaresh from "../assets/shivnaresh-logo.webp"
import heroDesktop from '../assets/home-banner-new-design-s12.webp'
import heromobile from '../assets/homepage-mobile-banner-s12.webp'
import Slider from "react-slick";
import PlayerCard from "../components/PlayerCard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPlayers } from "../redux/action/player.action";
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const getBreakpoint = () => {
    const width = window.innerWidth;
    if (width < 640) return "mobile";
    if (width < 768) return "sm";
    return "md";
};

export default function Home() {
    const dispatch = useDispatch();
    const { allPlayers } = useSelector((state) => state.players);

    const [bp, setBp] = useState(getBreakpoint());

    const isMD = bp === "md";
    const isSM = bp === "sm";


    useEffect(() => {
        dispatch(fetchAllPlayers());
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const current = getBreakpoint();
            if (current !== bp) {
                setBp(current); // only update when breakpoint changes
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [bp]);


    const settings = {
        infinite: true,
        speed: 500,

        slidesToShow: isMD ? 3 : isSM ? 2 : 1,

        swipeToSlide: isMD ? false : true,

        autoplay: isMD ? true : false,

        arrows: isMD ? true : false,

        slidesToScroll: 1,
    };

    return (
        <>
            <Herosection imgSRCDesktop={heroDesktop} imgSRCMobile={heromobile} />
            <section className="wrapper relative bg-top bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${wrapperBG})` }}>
                <div className="intro-section text-center relative">
                    <div className="grid grid-cols-1">
                        <div className="absolute h-[210px] w-0.5  bg-white z-9 max-[767px]:h-[120px] max-[767px]:top-[10%] md:h-[200px] md:top-[70px] lg:top-[15%]  left-[50%] top-[17%] transform -translate-x-1/2"></div>

                        <div className="absolute max-[767px]:left-[54.8%] max-[767px]:top-[15%] max-[767px]:tracking-[36px] max-[767px]:text-[18px] md:left-[54%] md:top-[26%] lg:left-[53%] lg: top[30%] xl:top-[19%] xl:left-[52%] transform -translate-x-1/2 text-white tracking-[65px] uppercase 
                    text-[20px] font-[Exo-Light] mt-[7.5px] mb-1.5 w-max">scroll</div>

                        <div className="flex items-baseline-last  text-center h-[600px] xl:h-screen w-full" data-aos="fade-up">
                            <p className="mx-auto bg-cover text-primary-500 max-[767px]:text-[24px] md:text-[30px] lg:text-[35px] xl:text-[50px] text-justify py-[30px] px-10 xl:max-w-[1170px] lg:max-w-[970px] md:max-w-[750px] font-[Exo-Bold] leading-[1.3] max-[767px]:text-center max-[767px]:px-[30px]">Puneri Paltan is currently one of the top performing teams in the Pro Kabaddi League. With a mix of unstoppable energy, honed-out skills and steely nerves, here's a force that consistently looks forward to perform better, challenge its opponents and make a difference.</p>
                        </div>
                    </div>
                </div>

                <div className="player-section md:py-28 xl:py-36 px-[15px]  text-center lg:text-left">
                    <div className="grid grid-cols-12 lg:gap-4">
                        <div className="lg:col-span-4 lg:pl-[4%] col-span-12">
                            <h1 className="text-primary-500 text-[40px] md:text-[50px] lg:text-[60px] xl:text-[90px] uppercase tracking-[7px] font-[Love-Nature] mb-5 mt-5 md:mt-0 md:mb-10" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">Players</h1>
                        </div>
                        <div className="lg:col-span-8  col-span-12">
                            <Slider key={bp} {...settings} className='mb-10'>
                                {allPlayers?.map((p) => (
                                    <div key={p.id}>
                                        <PlayerCard
                                            id={p.id}
                                            imgSRC={p.profile_image}
                                            playerName={p.name}
                                            playerPosition={p.cat_name}
                                        />
                                    </div>
                                ))}
                            </Slider>
                            <Link to="/players">
                                <Button text="Enter" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="merchandise-ticket-section min-[992px]:py-[60px] min-[768px]:pb-10 min-[768px]:pt-0 py-[70px] max-[767px]:text-center">
                    <div className="mx-auto bg-cover min-[1200px]:w-[1170px] min-[992px]:w-[970px] min-[768px]:w-[750px]">
                        <Link to='https://www.district.in/events/pkl-2025-chennai-team' target='_blank' className='relative z-9'>
                            <div className='md:flex md:flex-nowrap md:items-center md:transform md:skew-x-[-15deg] md:h-[400px] w-full md:z-99 md:-mb-[19%]'>
                                <div className="merchandise-div hidden   min-[992px]:w-1/2 min-[992px]:h-full min-[768px]:h-[70%] min-[768px]:w-[45%] max-[991px]:ml-8 md:inline-block bg-[#2b2521] shadow-[inset_0_0_0_rgba(255,255,255,0.15),0_0_26px_rgba(0,0,0,0.63)]">
                                    <img src={merchandiseimg} alt="Puneri Paltan Jersey and logo" className='relative top-[57px] min-[992px]:top-[17px] transform skew-x-15' />
                                </div>
                                <div className="ticket-img max-[767px]:mb-[30px] min-[992px]:w-1/2 min-[992px]:h-full min-[768px]:h-[70%] min-[768px]:w-[45%] -ml-[5px] inline-block bg-black shadow-[inset_0_0_0_rgba(255,255,255,0.15),0_0_26px_rgba(0,0,0,0.63)]">
                                    <img src={ticketimg} alt="Puneri Paltan Match Tickets" className='md:mx-auto md:relative md:top-[15%] md:transform md:skew-x-15' />
                                </div>
                                <div className="md:transform md:skew-x-15 md:absolute md:top-[45%] md:left-[31%]">
                                    <Button text="Buy Tickets" className="bg-primary-500! border-2 border-white border-l-0 w-[230px]! ">
                                        <ChevronRightIcon className="inline-block w-4 h-4" strokeWidth={3} />
                                    </Button>
                                </div>

                            </div>
                        </Link>
                    </div>
                </div>

                <div className='className="bg-center bg-repeat h-auto relative md:pt-[95px] lg:pt-[180px] xl:pt-[220px]' style={{ backgroundImage: `url(${paltanWorldBG})` }}>
                    <img src={paltanWorldDesktop} className="hidden sm:block  w-full h-auto" alt="Pro kabaddi Puneri Platan" />
                    <img src={paltanWorldMobile} className="block sm:hidden w-full h-auto" alt="PALTAN WORLD" />
                    <div className='banner-content absolute bottom-[10%] left-[50%] -translate-x-[50%] md:top-[50%] xl:top-[38%] md:right-[27%] md:translate-x-[50%] z-9'>
                        <h1 className='hidden md:block font-[Love-Nature] md:text-[60px] xl:text-[110px] tracking-[7px] m-0 text-primary-500 uppercase relative' data-aos="fade-down" data-aos-duration="1000">paltan</h1>
                        <h1 className='hidden md:block font-[Love-Nature] md:text-[60px] xl:text-[110px] tracking-[7px] m-0 text-white uppercase relative md:mt-[-5%] xl:mt-[-7%] ml-[7%]' data-aos="fade-up" data-aos-duration="1000">world</h1>
                        <Link to="/puneri-world" className="md:text-right md:mt-1 md:block">
                            <Button text="Enter" />
                        </Link>
                    </div>
                </div>

                <div className="bg-center bg-no-repeat h-auto relative lg:py-[150px] md:pt-[50px] md:pb-[100px] md:mb-[50px]"
                    style={{ backgroundImage: `url(${newsBg})` }}>
                    <div className='mx-auto min-[1200px]:w-[1170px] min-[992px]:w-[970px] min-[768px]:w-[750px]'>
                        <div className='bg-center bg-no-repeat reltive flex flex-col items-center justify-center  h-[400px] lg:h-[561px]' style={{ backgroundImage: `url(${newsBanner})` }}>
                            <h1 className='font-[Love-Nature] text-[30px] md:text-[60px] xl:text-[90px] tracking-[7px] text-primary-500 uppercase relative' data-aos="fade-down" data-aos-duration="1000">puneri paltan</h1>
                            <h1 className='font-[Love-Nature] text-[30px] md:text-[60px] xl:text-[90px] tracking-[7px] text-white uppercase relative mt-1 md:-mt-0.5' data-aos="fade-up" data-aos-duration="1000">in the news</h1>
                        </div>
                        <Link to="javascript:void(0)" className="text-center block md:-mt-[25px] max-[767px]:absolute max-[767px]:top-[65%] max-[767px]:left-[50%] max-[767px]:-translate-x-[50%]">
                            <Button text="Enter" />
                        </Link>
                    </div>
                </div>

                <div className='newletter-section md:-mt-[100px] md:w-[90%] bg-primary-500 shadow-[inset_0_0_0_rgba(255,255,255,0.15),0_1px_5px_rgba(0,0,0,0.075)] relative md:transform md:skew-x-[-15deg] md:mx-auto'>
                    <div className='flex items-center max-[767px]:flex-col max-[767px]:py-5 max-[767px]:px-5 md:h-[100px] justify-around mx-auto min-[1200px]:w-[1170px] min-[992px]:w-[970px] min-[768px]:w-[750px]'>
                        <div className='md:transform md:skew-x-15 md:w-[40%] lg:w-full'>
                            <h3 className=" font-[Love-Nature] text-white text-[18px] text-center lg:text-[28px] tracking-[2px] max-[767px]:mb-4 max-[767px]:leading-normal" data-aos="zoom-in">subscribe to our newsletter</h3>
                        </div>
                        <div className='flex max-[767px]:flex-col md:flex-nowrap md:w-[60%]  lg:w-full max-[767px]:w-full'>
                            <div className='transform skew-x-15 mr-[15px]  max-[767px]:w-full  max-[767px]:mb-4'>
                                <input id="email" name="email" placeholder="Enter your email-id" type="email" className='font-[Exo-Regular] bg-white transform -skew-x-15 h-[45px] w-full md:w-[203px] lg:w-[320px] pl-[15px] text-[15px] focus:outline-0' />
                            </div>
                            <div className='transform skew-x-15'>
                                <Button text="Go" className='md:w-auto max-[767px]:w-full' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='partners-section pb-[100px] text-center'>
                    <div className=' mx-auto min-[1200px]:w-[1170px] min-[992px]:w-[970px] min-[768px]:w-[750px]'>
                        <h1 className='text-primary-500 font-[Love-Nature] text-[40px] md:text-[60px] lg:text-[110px] tracking-[7px] m-0 py-[30px] max-[767px]:pt-[60px]' data-aos="zoom-in">Partners</h1>

                        <div className='flex flex-nowrap gap-[15px] justify-center'>
                            <div className='partner-logos pt-[30px] md:w-[16.66666667%]'>
                                <Link to="https://www.forcemotors.com/" target='_blank'>
                                    <img src={FM} alt="Force  Motors" />
                                    <p className='font-[Exo-Light] text-[16px] text-black text-center tracking-[2px] m-0 pt-5'>Principal Partner</p>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-nowrap gap-[15px] justify-center'>
                            <div className='partner-logos pt-[30px] md:w-[16.66666667%]'>
                                <Link to="https://www.stihl.com/default.aspx" target='_blank'>
                                    <img src={ST} alt="Navitas Solar" />
                                    <p className='font-[Exo-Light] text-[16px] text-black text-center tracking-[2px] m-0 pt-5'>Associate-Partner</p>
                                </Link>
                            </div>
                            <div className='partner-logos pt-[30px] md:w-[16.66666667%]'>
                                <Link to="https://navitassolar.in/" target='_blank'>
                                    <img src={NS} alt="Navitas Solar" />
                                    <p className='font-[Exo-Light] text-[16px] text-black text-center tracking-[2px] m-0 pt-5'>Associate-Partner</p>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-nowrap gap-[15px] justify-center'>
                            <div className='partner-logos pt-[30px] md:w-[16.66666667%]'>
                                <Link to="https://parasbuildtech.com/" target='_blank'>
                                    <img src={paras} alt="Paras  Buildtech" />
                                    <p className='font-[Exo-Light] text-[16px] text-black text-center tracking-[2px] m-0 pt-5'> CO-Partner</p>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-nowrap gap-[15px] justify-center'>
                            <div className='partner-logos pt-[30px] md:w-[16.66666667%]'>
                                <Link to="https://betteralt.in/" target='_blank'>
                                    <img src={better} alt="Bellteralt Logo" />
                                    <p className='font-[Exo-Light] text-[16px] text-black text-center tracking-[2px] m-0 pt-5'> Wellness Partner</p>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-nowrap gap-[15px] justify-center'>
                            <div className='partner-logos pt-[30px] md:w-[16.66666667%]'>
                                <Link to="https://shivnaresh.in/" target='_blank'>
                                    <img src={shivnaresh} alt="Shivnaresh Logo" />
                                    <p className='font-[Exo-Light] text-[16px] text-black text-center tracking-[2px] m-0 pt-5'> Kit Partner</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}