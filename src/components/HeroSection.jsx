

export default function Herosection({imgSRCDesktop, imgSRCMobile, children}) {
    return (
        <>
            <div className="w-full">
                {/* Mobile banner */}
                <img
                    src={imgSRCMobile}
                    alt="Mobile Banner"
                    className="block md:hidden w-full h-auto"
                />

                {/* Desktop banner */}
                <img
                    src={imgSRCDesktop}
                    alt="Desktop Banner"
                    className="hidden md:block w-full h-auto"
                />
              
              {/* Children content */}
            {children}
            </div>
        </>
    )
}