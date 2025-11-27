import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleGallery, fetchGalleryGateways } from "../redux/action/season.action";
import bannerDesktop from "../assets/gallery-banner.jpg"
import bannerMobile from "../assets/puneri-gallery-mob-banner-s12.jpg"
import bannertitle from "../assets/banner-title.png"
import bannerPlayer from "../assets/puneri-gallery-desk-banner-s12.png"

export default function SingleGallery() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { singleGallery, galleryGateways, loading, error } = useSelector((state) => state.season);

    useEffect(() => {
        dispatch(fetchGalleryGateways());
        if (id) dispatch(fetchSingleGallery(id));
    }, [id, dispatch]);

    useEffect(() => {
        if (!singleGallery) return;

        const lightbox = GLightbox({
            selector: ".glightbox",
            touchNavigation: true,
            loop: false,
            zoomable: true,
        });

        return () => lightbox.destroy();
    }, [singleGallery]);

    return (
        <>
            <section className="gallery-wrapper">
                <div className="bg-no-repeat bg-center banner-section relative  hidden md:block" style={{ backgroundImage: `url(${bannerDesktop})` }} >
                    <div className="px-[15px]">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="lg:col-span-5 lg:col-start-3 col-span-12">
                                <div className="flex flex-col md:h-[500px]:] lg:h-[700px] justify-center items-center text-center">
                                    <img src={bannertitle} alt="Title Banner BG" data-aos="fade-up" />
                                    <h1 className="font-[Love-Nature] text-white md:text-[50px]  lg:text-[80px] lg:top-[40%] lg:left-[18%]  tracking-[10px] [text-shadow:-2px_0_24px_#000] absolute" data-aos="fade-down">Gallery</h1>
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

                <div className="pt-[45px]">
                    {loading && <p className="text-lg font-semibold mt-6 text-center">Loading....</p>}
                    {error && <p className="text-lg text-red-600 font-semibold mt-6">{error}</p>}
                </div>

                {singleGallery && (
                    <>
                        <div className="py-[45px] px-[15px] mx-auto min-[1200px]:w-[1170px] min-[992px]:w-[970px] min-[768px]:w-[750px]">
                            <div key={singleGallery.id} id={singleGallery.id}>
                                <h1 className="font-[Love-Nature] text-[30px] md:text-[40px] lg:text-[50px] text-[#f40] uppercase text-center tracking-[2px] pb-[30px] leading-[110%]">
                                    {singleGallery.name}
                                </h1>

                                <div className="grid grid-cols-12 gap-[15px]">
                                    {singleGallery.match_images?.map((img, index) => (
                                        <div key={index} className="col-span-12 md:col-span-4" data-aos="zoom-in">
                                            <a href={img} className="glightbox">
                                                <img src={img} alt="image" className="h-[250px] w-full object-cover object-top-left" />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="md:flex md:flex-nowrap">
                            {galleryGateways?.map((item) => (
                                <div key={item.id} className="md:w-1/2">
                                    <Link
                                        to={`/gallery/${item.id}`}
                                        className="h-[300px] flex items-center justify-center bg-cover bg-no-repeat relative 
                before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/50"
                                        style={{ backgroundImage: `url(${item.main_image})` }}
                                    >
                                        <h3 className="text-white font-[Exo-Regular] tracking-[1px] uppercase z-[999] text-[20px] md:text-[26px] relative leading-[110%] text-center">
                                            {item.name}
                                        </h3>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </>
                )}

            </section>
        </>
    )
}