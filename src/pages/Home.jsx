import '../css/home.css'
import Herosection from "../components/HeroSection"
import wrapperBG from "../assets/description-bg-new.jpg"
import Slider from "react-slick";
import PlayerCard from "../components/PlayerCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPlayers } from "../redux/action/player.action";
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function Home() {
    const dispatch = useDispatch();
    const { allPlayers } = useSelector((state) => state.players);

    useEffect(() => {
        dispatch(fetchAllPlayers());
    }, []);

    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    swipeToSlide: true,
                    autoplay: false,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    swipeToSlide: true,
                    autoplay: false,
                }
            }
        ]
    };

    return (
        <>
            <Herosection />
            <section className="wrapper relative bg-top bg-no-repeat bg-cover" style={{ backgroundImage: `url(${wrapperBG})` }}>
                <div className="intro-section text-center relative">
                    <div className="grid grid-cols-1">
                        <div className="absolute h-[210px] w-0.5  bg-white z-9 max-[767px]:h-[120px] max-[767px]:top-[10%] md:h-[200px] md:top-[70px] lg:top-[15%]  left-[50%] top-[17%] transform -translate-x-1/2"></div>

                        <div className="absolute max-[767px]:left-[56.8%] max-[767px]:top-[15%] max-[767px]:tracking-[36px] max-[767px]:text-[18px] md:left-[54%] md:top-[26%] lg:left-[53%] lg: top[30%] xl:top-[19%] xl:left-[52%] transform -translate-x-1/2 text-white tracking-[65px] uppercase 
                    text-[20px] font-[Exo-Light] mt-[7.5px] mb-1.5 w-max">scroll</div>

                        <div className="flex items-baseline-last  text-center h-[600px] xl:h-screen w-full"  data-aos="fade-up">
                                <p className="mx-auto bg-cover text-primary-500 max-[767px]:text-[24px] md:text-[30px] lg:text-[35px] xl:text-[50px] text-justify py-[30px] px-10 xl:max-w-[1170px] lg:max-w-[970px] md:max-w-[750px] font-[Exo-Bold] leading-[1.3] max-[767px]:text-center max-[767px]:px-[30px]">Puneri Paltan is currently one of the top performing teams in the Pro Kabaddi League. With a mix of unstoppable energy, honed-out skills and steely nerves, here's a force that consistently looks forward to perform better, challenge its opponents and make a difference.</p>
                        </div>
                    </div>
                </div>

                <div className="player-section py-48 px-[15px]">
                    <div className="grid grid-cols-12 lg:gap-4">
                        <div className="lg:col-span-4 pl-[4%]">
                            <h1 className="text-primary-500 text-[30px] md:text-[60px] xl:text-[90px] uppercase tracking-[7px] font-[Love-Nature]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">Players</h1>
                        </div>
                        <div className="lg:col-span-8">
                            <Slider {...settings} className='mb-10'>
                                {allPlayers?.map((p) => (
                                    <div key={p.id}>
                                        <PlayerCard
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
            </section>
        </>
    )
}