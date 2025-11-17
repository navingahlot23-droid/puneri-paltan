
export default function PlayerCard({imgSRC, playerName, playerPosition}) {
    return (
        <>
            <div className="player-box text-center">
                <div className="player-img">
                    <img src={imgSRC} alt={playerName} />
                </div>
                <div className="player-details">
                    <p className="name font-[Exo-Bold] text-black lg:text-[25px] xl:text-[35px] tracking-[4px] capitalize mb-0">{playerName}</p>
                    <p className="position mb-0 font-[Exo-Regular] text-primary-500 text-[20px] mt-2.5 tracking-[2px]">{playerPosition}</p>
                </div>
            </div>
        </>
    )
}