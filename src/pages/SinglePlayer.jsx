import "../css/players.css"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer, fetchAllPlayers } from "../redux/action/player.action"
import Slider from "react-slick"
import { Link } from "react-router-dom"
import playerBG from "../assets/player-bg.png"
import playerDescBG from "../assets/player-desc-bg.jpg"
import Sectiontitle from "../components/SectionTitle"

const getBreakpoint = () => {
    const width = window.innerWidth;
    if (width < 640) return "mobile";
    if (width < 768) return "sm";
    if (width < 1200) return "md";
    return "lg";
};

export default function SinglePlayer() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { allPlayers, singlePlayer, loading, error } = useSelector((state) => state.players);

    // --- Hook 1: Fetch Player ---
    useEffect(() => {
        dispatch(fetchAllPlayers());
        if (id) dispatch(fetchSinglePlayer(id));
    }, [id, dispatch]);


    // --- Hook 3: Breakpoint state ---
    const [bp, setBp] = useState(getBreakpoint());

    useEffect(() => {
        const handleResize = () => {
            const current = getBreakpoint();
            if (current !== bp) {
                setBp(current);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [bp]);


    // --- After ALL hooks, now you can safely return conditionally ---
    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-600">{error}</p>;
    if (!singlePlayer) return null;

    const isLG = bp === "lg";

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: isLG ? 2 : 1,
        swipeToSlide: !isLG,
        arrows: isLG,
        slidesToScroll: 1,
    };

    return (
        <>

            <section className="wrapper">
                <div className="flex items-center justify-center player-bg bg-center bg-cover h-[600px] md:h-[700px]" style={{ backgroundImage: `url(${playerBG})` }}>
                    <div className=' mx-auto min-[1200px]:w-[1170px] min-[992px]:w-[970px] min-[768px]:w-[750px]'>
                        <div className="flex max-[767px]:flex-col items-center gap-[50px] lg:gap-12 mt-15 md:mt-10 text-center">
                            <h1 className="font-[Love-Nature] text-white text-[30px] md:text-[50px]  lg:text-[80px] tracking-[10px] [text-shadow:-2px_0_24px_#000]" data-aos="fade-down">{singlePlayer.name}</h1>
                            <div>
                                <img className="max-h-[250px] md:max-h-[400px]" src={singlePlayer.profile_image} alt={singlePlayer.name} data-aos="fade-up" />
                            </div>
                        </div>
                    </div>
                </div>
                <div key={singlePlayer.id} id={singlePlayer.id}>
                    <div className="bg-center bg-cover py-[45px]" style={{ backgroundImage: `url(${playerDescBG})` }}>
                        <div className=' mx-auto min-[1200px]:w-[1170px] min-[992px]:w-[970px] min-[768px]:w-[750px]'>
                            <div className="grid grid-cols-12 gap-[15px]">
                                <div className="col-span-12 md:col-span-4" data-aos="fade-right">
                                    <img src={singlePlayer.full_image} alt={singlePlayer.name} />
                                </div>
                                <div className="col-span-12 md:col-start-6 md:col-span-7" data-aos="fade-left">
                                    <div className="grid grid-cols-12 gap-[15px] border-b border-[#c7c1c1] mb-10 pb-10">
                                        <div className="col-span-12 sm:col-span-6 md:col-span-5">
                                            <h5 className="text-[22px] font-[Exo-SemiBold] uppercase bg-[#f40] text-white w-[200px] tracking-[3px] text-center py-2.5 mx-auto my-0 skew-x-[-15deg] leading-[110%]">jersey no.</h5>
                                            <p className="text-[20px] font-[Exo-Bold] uppercase tracking-[1px] text-center mt-[25px] text-black mb-0">{singlePlayer.jersey_no}</p>
                                        </div>
                                        <div className="col-span-12 sm:col-span-6 md:col-span-7">
                                            <h5 className="text-[22px] font-[Exo-SemiBold] uppercase bg-[#f40] text-white w-[200px] tracking-[3px] text-center py-2.5 mx-auto my-0 skew-x-[-15deg] leading-[110%]">position</h5>
                                            <p className="text-[20px] font-[Exo-Bold] uppercase tracking-[1px] text-center mt-[25px] text-black mb-0">{singlePlayer.position}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="text-[22px] font-[Exo-SemiBold] uppercase bg-[#f40] text-white w-[200px] tracking-[3px] text-center py-2.5 max-[767px]:mx-auto my-0 skew-x-[-15deg] leading-[110%] mb-[25px]">vitals</h5>
                                        <table className="table-auto max-[767px]:mx-[15px]">
                                            <tbody>
                                                <tr>
                                                    <td className="text-[#959595] w-1/2 text-[16px] font-[Exo-Regular] py-[15px] px-[5px]">Name</td>
                                                    <td className="text-black text-[16px] w-1/2 font-[Exo-Medium] py-[15px] px-[5px]">{singlePlayer.name}</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-[#959595] text-[16px] w-1/2  font-[Exo-Regular] py-[15px] px-[5px]">Date of birth</td>
                                                    <td className="text-black text-[16px] w-1/2  font-[Exo-Medium] py-[15px] px-[5px]">{singlePlayer.date_of_birth}</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-[#959595] text-[16px]  w-1/2 font-[Exo-Regular] py-[15px] px-[5px]">Nationality</td>
                                                    <td className="text-black text-[16px] w-1/2  font-[Exo-Medium] py-[15px] px-[5px]">{singlePlayer.nationality}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="statistics-section">
                        <h5 className="text-primary-500 font-[Love-Nature] lg:text-[110px] md:text-[80px] text-[45px] leading-[110%] tracking-[7px] uppercase text-center">statistics</h5>
                        <div className="statistics-overall bg-[#edeef2] py-[45px]">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="xl:col-span-4 col-span-12">
                                    <Sectiontitle name="overall" className="py-[21px]!" />
                                </div>
                                <div className="col-span-12 md:col-span-3 xl:col-span-2 z-9">
                                    <h4 className="overall-points mx-auto lg:mt-[30px] max-[767px]:mt-2.5 bg-white text-black text-center leading-[110%] font-[Exo-SemiBold] w-[150px] text-[40px] py-2.5" data-aos="zoom-in">{singlePlayer.Matches_played}</h4>
                                    <h5 className="overall-desc my-3 leading-[110%] font-[Exo-Regular] text-black uppercase text-center text-[18px] tracking-[1px]">Matches played</h5>
                                </div>
                                <div className="col-span-12 md:col-span-3 xl:col-span-2">
                                    <h4 className="overall-points mx-auto lg:mt-[30px] max-[767px]:mt-2.5 bg-white text-black text-center leading-[110%] font-[Exo-SemiBold] w-[150px] text-[40px] py-2.5" data-aos="zoom-in">{singlePlayer.total_ponints_earned}</h4>
                                    <h5 className="overall-desc my-3 leading-[110%] font-[Exo-Regular] text-black uppercase text-center text-[18px] tracking-[1px]">TOTAL POINTS EARNED</h5>
                                </div>
                                <div className="col-span-12 md:col-span-3 xl:col-span-2">
                                    <h4 className="overall-points mx-auto lg:mt-[30px] max-[767px]:mt-2.5 bg-white text-black text-center leading-[110%] font-[Exo-SemiBold] w-[150px] text-[40px] py-2.5" data-aos="zoom-in">{singlePlayer.most_points_in_a_match}</h4>
                                    <h5 className="overall-desc my-3 leading-[110%] font-[Exo-Regular] text-black uppercase text-center text-[18px] tracking-[1px]">MOST POINTS IN A MATCH</h5>
                                </div>
                                <div className="col-span-12 md:col-span-3 xl:col-span-2">
                                    <h4 className="overall-points mx-auto lg:mt-[30px] max-[767px]:mt-2.5 bg-white text-black text-center leading-[110%] font-[Exo-SemiBold] w-[150px] text-[40px] py-2.5" data-aos="zoom-in">{singlePlayer.not_out_percentage}</h4>
                                    <h5 className="overall-desc my-3 leading-[110%] font-[Exo-Regular] text-black uppercase text-center text-[18px] tracking-[1px]">NOT OUT PERCENTAGE</h5>
                                </div>
                            </div>
                        </div>
                        <div className="statistics-attacking py-[45px]">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="xl:col-span-4 col-span-12">
                                    <Sectiontitle name="raid" className="py-[21px]!" />
                                </div>
                                <div className="lg:col-span-6 xl:col-span-4 col-span-12 z-9 xl:border-r-2 border-[#dbdbdb]">
                                    <div className="grid grid-cols-12 gap-[15px]">
                                        <div className="col-span-12 md:col-span-4 xl:col-span-6">
                                            <h4 className="overall-points mx-auto lg:mt-[30px] max-[767px]:mt-2.5 bg-white text-black text-center leading-[110%] font-[Exo-SemiBold] w-[150px] text-[40px] py-2.5" data-aos="zoom-in">{singlePlayer.no_of_super_raids}</h4>
                                            <h5 className="overall-desc my-3 leading-[110%] font-[Exo-Regular] text-black uppercase text-center text-[18px] tracking-[1px]">no. of super raids</h5>
                                        </div>
                                        <div className="col-span-12 md:col-span-4 xl:col-span-6">
                                            <h4 className="overall-points mx-auto lg:mt-[30px] max-[767px]:mt-2.5 bg-white text-black text-center leading-[110%] font-[Exo-SemiBold] w-[150px] text-[40px] py-2.5" data-aos="zoom-in">{singlePlayer.super_10s}</h4>
                                            <h5 className="overall-desc my-3 leading-[110%] font-[Exo-Regular] text-black uppercase text-center text-[18px] tracking-[1px]">super 10s</h5>
                                        </div>
                                        <div className="col-span-12 md:col-span-4 xl:col-span-6" data-aos="zoom-in">
                                            <h4 className="overall-points mx-auto lg:mt-[30px] max-[767px]:mt-2.5 bg-white text-black text-center leading-[110%] font-[Exo-SemiBold] w-[150px] text-[40px] py-2.5">{singlePlayer.avg_raid_points}</h4>
                                            <h5 className="overall-desc my-3 leading-[110%] font-[Exo-Regular] text-black uppercase text-center text-[18px] tracking-[1px]">avg. raid points</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 xl:col-span-4 col-span-12">
                                    <div className="grid grid-cols-12 gap-[15px]">
                                        <div className="md:col-span-4 lg:col-span-6 col-span-12">
                                            <div className="circular-progress rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.16),0_2px_10px_rgba(0,0,0,0.12)] h-[230px] w-[230px] my-[2em] mx-auto  relative transition-all duration-300 ease-linear bg-[linear-gradient(90deg,#ff7500_50%,transparent_50%),linear-gradient(180deg,#ff7500_50%,#ff7500_50%,#ff7500)] before:content-[''] before:bg-[#fafafa] before:rounded-full before:shadow-[0_2px_5px_rgba(0,0,0,0.16),0_2px_10px_rgba(0,0,0,0.12)] before:text-[rgba(0,0,0,0.54)] before:text-[32px] before:font-bold before:h-[80%] before:w-[80%] before:absolute before:left-1/2 before:top-1/2 before:text-center before:leading-[1.4] before:-translate-x-1/2 before:-translate-y-1/2">
                                                <div className="circular-progress-text text-black font-['Exo-SemiBold'] text-[22px] uppercase text-center w-full leading-[1.4]  tracking-[2px]  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                                    total raid <span className="block text-[55px] leading-none">31</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-4 lg:col-span-6 col-span-12">
                                            <div className="flex flex-col justify-center max-[767px]:items-center md:h-[270px]">
                                                <h6 className="text-black font-[Exo-SemiBold] text-[40px] shadow-[1px_1px_20px_#e8e8e8] w-1/2 text-center -skew-x-10 leading-[110%] bg-white">%</h6>
                                                <p className="font-[Exo-Regular] text-black uppercase text-[18px] leading-[1.4] pt-2.5 tracking-[1px]">raid strike <span className="hidden md:block">rate</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="statistics-defensive py-[45px] bg-[#edeef2]">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="xl:col-span-4 col-span-12">
                                    <Sectiontitle name="tackles" className="py-[21px]!" />
                                </div>
                                <div className="lg:col-span-6 xl:col-span-4 col-span-12 z-9 xl:border-r-2 border-[#dbdbdb]">
                                    <div className="grid grid-cols-12 gap-[15px]">
                                        <div className="col-span-12 md:col-span-4 xl:col-span-6">
                                            <h4 className="overall-points mx-auto lg:mt-[30px] max-[767px]:mt-2.5 bg-white text-black text-center leading-[110%] font-[Exo-SemiBold] w-[150px] text-[40px] py-2.5" data-aos="zoom-in">{singlePlayer.no_of_super_tackles}</h4>
                                            <h5 className="overall-desc my-3 leading-[110%] font-[Exo-Regular] text-black uppercase text-center text-[18px] tracking-[1px]">No. of super tackles</h5>
                                        </div>
                                        <div className="col-span-12 md:col-span-4 xl:col-span-6">
                                            <h4 className="overall-points mx-auto lg:mt-[30px] max-[767px]:max-[767px]:mt-2.5 bg-white text-black text-center leading-[110%] font-[Exo-SemiBold] w-[150px] text-[40px] py-2.5" data-aos="zoom-in">{singlePlayer.total_tacle_points}</h4>
                                            <h5 className="overall-desc my-3 leading-[110%] font-[Exo-Regular] text-black uppercase text-center text-[18px] tracking-[1px]">Total tackle points</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 xl:col-span-4 col-span-12">
                                    <div className="grid grid-cols-12 gap-[15px]">
                                        <div className="md:col-span-4 lg:col-span-6 col-span-12">
                                            <div className="circular-progress rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.16),0_2px_10px_rgba(0,0,0,0.12)] h-[230px] w-[230px] my-[2em] mx-auto  relative transition-all duration-300 ease-linear bg-[linear-gradient(90deg,#ff7500_50%,transparent_50%,transparent),linear-gradient(245deg,#121237_50%,#ff7500_50%,#ff7500)] before:content-[''] before:bg-[#fafafa] before:rounded-full before:shadow-[0_2px_5px_rgba(0,0,0,0.16),0_2px_10px_rgba(0,0,0,0.12)] before:text-[rgba(0,0,0,0.54)] before:text-[32px] before:font-bold before:h-[80%] before:w-[80%] before:absolute before:left-1/2 before:top-1/2 before:text-center before:leading-[1.4] before:-translate-x-1/2 before:-translate-y-1/2">
                                                <div className="circular-progress-text text-black font-['Exo-SemiBold'] text-[22px] uppercase text-center w-full leading-[1.4]  tracking-[2px]  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                                    total TACKLE <span className="block text-[55px] leading-none">2</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-4 lg:col-span-6 col-span-12">
                                            <div className="flex flex-col justify-center items-center md:h-[270px]">
                                                <h6 className="text-black font-[Exo-SemiBold] bg-white text-[40px] shadow-[1px_1px_20px_#e8e8e8] w-[70%] text-center -skew-x-10 leading-[110%]">0%</h6>
                                                <p className="font-[Exo-Regular] text-black uppercase text-[18px] leading-[1.4] pt-2.5 tracking-[1px]">TACKLE strike <span className="hidden md:block">rate</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="other-players-section py-[45px]">
                    <h5 className="text-primary-500 font-[Love-Nature] lg:text-[110px] md:text-[80px] text-[45px] leading-[110%] tracking-[7px] uppercase text-center mb-[45px]">other players</h5>
                    <div className="grid grid-cols-12 px-[15px]">
                        <div className="lg:col-span-10 lg:col-start-2 col-span-12">
                            <Slider key={bp} {...settings} className="lg:skew-x-[-5deg]">
                                {allPlayers?.map((p) => (
                                    <div key={p.id}>
                                        <div className="player-box relative bg-black xl:h-[400px] px-[15px] flex items-center xl:border-r xl:border-r-gray-900">
                                            <Link to={`/players/${p.id}`}>
                                                <p className="player-num absolute bg-primary-500 text-white top-0 left-0 py-[18px] px-2.5 font-[Exo-Regular] text-[30px] xl:text-[50px] tracking-[2px]">{p.jersey_no}</p>
                                                <div className="grid grid-cols-12 items-center h-full gap-[15px]">
                                                    <div className="md:col-span-6 col-span-12 lg:skew-x-[5deg] max-[767px]:mt-[100px]">
                                                        <h5 className="name font-[Exo-Bold] text-white text-[34px] m-0 tracking-[4px] text-center leading-[110%]">{p.name}</h5>
                                                        <h5 className="position font-[Exo-Regular] text-primary-500 text-[20px] m-0 tracking-[2px] text-center leading-[110%]">{p.cat_name}</h5>
                                                    </div>
                                                    <div className="md:col-span-6 col-span-12 lg:skew-x-[5deg]">
                                                        <img src={p.profile_image} alt={p.name} />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}