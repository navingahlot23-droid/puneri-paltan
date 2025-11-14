import Herosection from "../components/HeroSection"
import wrapperBG from "../assets/description-bg-new.jpg"
export default function Home() {
    return (
        <>
            <Herosection />
            <section className="wrapper relative bg-top bg-no-repeat bg-cover" style={{ backgroundImage: `url(${wrapperBG})` }}>
                <div className="intro text-center">
                    <div className="grid grid-cols-1">
                        <div className="absolute h-[210px] w-0.5  bg-white z-9 max-[767px]:h-[120px] max-[767px]:top-[10%] md:h-[200px] md:top-[70px] lg:top-[15%]  left-[50%] top-[17%] transform -translate-x-1/2"></div>

                        <div className="absolute max-[767px]:left-[56.8%] max-[767px]:top-[15%] max-[767px]:tracking-[36px] max-[767px]:text-[18px] md:left-[54%] md:top-[26%] lg:left-[53%] lg: top[30%] xl:top-[19%] xl:left-[52%] transform -translate-x-1/2 text-white tracking-[65px] uppercase 
                    text-[20px] font-[Exo] font-light mt-[7.5px] mb-1.5 w-max">scroll</div>

                        <div className="table  text-center h-[600px] xl:h-screen w-full">
                            <div className="table-cell align-bottom ">
                                <p className="mx-auto bg-cover text-primary-500 max-[767px]:text-[24px] md:text-[30px] lg:text-[35px] xl:text-[50px] text-justify py-[30px] px-10 xl:max-w-[1170px] lg:max-w-[970px] md:max-w-[750px] font-[Exo] font-bold leading-[1.3] max-[767px]:text-center max-[767px]:px-[30px]">Puneri Paltan is currently one of the top performing teams in the Pro Kabaddi League. With a mix of unstoppable energy, honed-out skills and steely nerves, here's a force that consistently looks forward to perform better, challenge its opponents and make a difference.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}