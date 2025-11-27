import React, { useState, useEffect } from "react";
import { fetchSeason, fetchSeasonContent } from "../redux/action/season.action";
import { useDispatch, useSelector } from "react-redux";
import Sectiontitle from "../components/SectionTitle";
import Modal from "../components/Modal";
import bannerDesktop from "../assets/tv-banner.jpg"
import bannerMobile from "../assets/puneri-tv-mob-banner-s12.jpg"
import bannertitle from "../assets/banner-title.png"
import bannerPlayer from "../assets/puneri-tv-desk-banner-s12.png"
import playIcon from "../assets/play.png"

export default function PuneriTV() {
    const [open, setOpen] = useState(false);
    const [videoSrc, setVideoSrc] = useState("");

    const dispatch = useDispatch();
    const { allSeason, seasonContent, loading } = useSelector((state) => state.season);

    const [activeTab, setActiveTab] = useState("");

    // Fetch seasons
    useEffect(() => {
        dispatch(fetchSeason());
    }, []);

    // When seasons load, set first season
    useEffect(() => {
        if (allSeason.length > 0) {
            const first = allSeason[0].id;
            setActiveTab(first);
            dispatch(fetchSeasonContent(first));
        }
    }, [allSeason]);

    // On tab click, fetch content
    const handleTabChange = (id) => {
        setActiveTab(id);
        dispatch(fetchSeasonContent(id));
    };

    return (
        <>
            <section>
                <div className="bg-no-repeat bg-center banner-section relative  hidden md:block" style={{ backgroundImage: `url(${bannerDesktop})` }} >
                    <div className="px-[15px]">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="lg:col-span-5 lg:col-start-3 col-span-12">
                                <div className="flex flex-col md:h-[500px]:] lg:h-[700px] justify-center items-center text-center">
                                    <img src={bannertitle} alt="Title Banner BG" data-aos="fade-up" />
                                    <h1 className="font-[Love-Nature] text-white md:text-[50px]  lg:text-[80px] lg:top-[40%] lg:left-[18%]  tracking-[10px] [text-shadow:-2px_0_24px_#000] absolute" data-aos="fade-down">Puneri TV</h1>
                                </div>
                            </div>
                            <div className="col-span-5 hidden lg:block">
                                <div className="flex h-[700px] items-end">
                                    <img src={bannerPlayer} alt="Banner Player" data-aos="fade-up" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block md:hidden">
                    <img src={bannerMobile} alt="Puneri TV" />
                </div>

                <div className="py-[45px]">
                    <div className='px-[15px] mx-auto min-[1200px]:w-[1170px] min-[992px]:w-[970px] min-[768px]:w-[750px]'>
                        {/* {loading && <p className="text-lg font-semibold mt-6 text-center">Loading....</p>}
                        {error && <p className="text-lg text-red-600 font-semibold mt-6">{error}</p>} */}

                        <div className="flex gap-4 overflow-x-auto whitespace-nowrap lg:-skew-x-15">
                            {allSeason.map((season) => (
                                <button
                                    key={season.id}
                                    className={`
                                                ${activeTab === season.id ? "bg-[#f40] transition-all duration-500 ease-in" : "bg-[#a1a1b2]"} 
                                                tracking-[3px] cursor-pointer 
                                                py-2.5 px-3 
                                                lg:py-[15px] lg:px-[18px] 
                                                font-[Exo-SemiBold] 
                                                lg:text-[18px] text-[14px] 
                                                text-white uppercase 
                                                rounded-none 
                                                whitespace-nowrap
                                            `}
                                    onClick={() => handleTabChange(season.id)}>
                                    {season.cat_name}
                                </button>
                            ))}

                        </div>
                        <div className="pt-[45px]">
                            {loading && <p className="text-lg font-semibold mt-6 text-center">Loading....</p>}

                            <div className="flex flex-wrap  max-[767px]:flex-col gap-[30px]">
                                {seasonContent.map((item) => (
                                    <div key={item.id} className="md:w-[47.5%]">
                                        {item.name ?
                                            <>
                                                <div className="video-box">
                                                    <div className="relative">
                                                        <img src={`https://img.youtube.com/vi/${item.url}/0.jpg`} className="w-full cursor-pointer" alt="thumbnail"/>
                                                        <img src={playIcon} alt="Play" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={() => {setVideoSrc(`https://www.youtube.com/embed/${item.url}`);setOpen(true);}} />
                                                    </div>
                                                    <Sectiontitle name={item.name} className="py-0!" titleClassName="text-[18px]! font-[Exo-Regular]! text-left! capitalize! w-[80%]! line-clamp-2 leading-[1.4] h-[65px]! py-[10px]! overflow-visible mt-[10px] skew-x-[0deg]! ml-0! max-[767px]:text-[16px]! max-[767px]:h-[58px]! max-[767px]:w-[80%]!" />
                                                </div>
                                                <Modal open={open} onClose={() => {setOpen(false);setVideoSrc("");}}>
                                                    <iframe width="100%" height="315" src={videoSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                </Modal>
                                            </>
                                            :
                                            <p className="text-md font-bold">No Data Available.</p>
                                        }

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}