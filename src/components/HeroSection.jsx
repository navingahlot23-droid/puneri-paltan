import heroDesktop from '../assets/home-banner-new-design-s12.webp'
import heromobile from '../assets/homepage-mobile-banner-s12.webp'

export default function Herosection() {
    return (
        <>
            <div className="w-full">
                {/* Mobile banner */}
                <img
                    src={heromobile}
                    alt="Mobile Banner"
                    className="block md:hidden w-full h-auto"
                />

                {/* Desktop banner */}
                <img
                    src={heroDesktop}
                    alt="Desktop Banner"
                    className="hidden md:block w-full h-auto"
                />
            </div>
        </>
    )
}