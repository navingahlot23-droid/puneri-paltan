import '../css/players.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayers } from "../redux/action/player.action";
import PlayerCard from "../components/PlayerCard";
import bannerDesktop from "../assets/player-banner-bg_S11.jpg"
import bannerMobile from "../assets/players-banner-mobile_S12.jpg"
import bannertitle from "../assets/banner-title.png"
import bannerPlayer from "../assets/players_page_banner_desktop_S12.png"
import Sectiontitle from "../components/SectionTitle";

export default function Players() {
    const dispatch = useDispatch();
    const { playersByCategory, error } = useSelector((state) => state.players);

    const bgImage = window.innerWidth >= 768 ? bannerDesktop : bannerMobile;

    useEffect(() => {
        dispatch(fetchPlayers(1));
        dispatch(fetchPlayers(2));
        dispatch(fetchPlayers(3));
    }, []);


    return (
        <>
            <section className="player-wrapper bg-[#edeef2]">
                <div className="bg-no-repeat bg-center banner-section relative max-[767px]:h-[600px]" style={{ backgroundImage: `url(${bgImage})` }} >
                    <div className="px-[15px]  hidden md:block">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="lg:col-span-4 lg:col-start-3 col-span-12">
                                <div className="flex flex-col md:h-[500px]:] lg:h-[700px] justify-center items-center text-center">
                                    <img src={bannertitle} alt="Title Banner BG" data-aos="fade-up" />
                                    <h1 className="font-[Love-Nature] text-white md:text-[50px]  lg:text-[80px] lg:top-[40%] lg:left-[18%]  tracking-[10px] [text-shadow:-2px_0_24px_#000] absolute" data-aos="fade-down">Players</h1>
                                </div>
                            </div>
                            <div className="col-span-6 hidden lg:block">
                                <div className="flex h-[700px] items-end">
                                    <img src={bannerPlayer} alt="Banner Player" data-aos="fade-up" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {error && <p className="text-lg text-red-600 text-center">{error}</p>}

                <div className="raiders-section  pb-[30px] xl:pb-[110px]">
                    <div className="px-[15px]">
                        <Sectiontitle name="Raiders" aos="fade-right"/>
                        <div className="xl:mx-[170px] flex flex-wrap justify-center gap-[15px]">
                            {playersByCategory[1]?.map(p => (
                                <PlayerCard key={p.id} imgSRC={p.profile_image} playerName={p.name} playerPosition={p.cat_name} className="lg:w-[31.33%] md:w-[48%] w-full" aos="fade-up"/>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="defenders-section bg-white pb-[30px] xl:pb-[110px]">
                    <div className="px-[15px]">
                        <Sectiontitle name="Defenders" aos="fade-right"/>
                        <div className="xl:mx-[170px] flex flex-wrap justify-center gap-[15px]">
                            {playersByCategory[2]?.map(p => (
                                <PlayerCard key={p.id} imgSRC={p.profile_image} playerName={p.name} playerPosition={p.cat_name} className="lg:w-[31.33%] md:w-[48%] w-full" aos="fade-up"/>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="all-rounders-section  pb-[30px] xl:pb-[110px]">
                    <div className="px-[15px]">
                        <Sectiontitle name="All Rounders" aos="fade-right"/>
                        <div className="xl:mx-[170px] flex flex-wrap justify-center gap-[15px]">
                            {playersByCategory[3]?.map(p => (
                                <PlayerCard key={p.id} imgSRC={p.profile_image} playerName={p.name} playerPosition={p.cat_name} className="lg:w-[31.33%] md:w-[48%] w-full" aos="fade-up"/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
