import { Link } from "react-router-dom"
export default function PlayerCard({id, imgSRC, playerName, playerPosition, className, aos }) {
   
    return (
        <>
            <div className={`player-box text-center ${className}`} data-aos={aos}>
                <Link to={`/players/${id}`}>
                    <div className="player-img">
                        <img src={imgSRC} alt={playerName} />
                    </div>
                    <div className="player-details">
                        <p className="name font-[Exo-Bold] text-black text-[20px] md:text-[25px] xl:text-[35px] tracking-[4px] capitalize mb-0">{playerName}</p>
                        <p className="position mb-0 font-[Exo-Regular] text-primary-500 text-[16px] md:text-[20px] mt-2.5 tracking-[2px]">{playerPosition}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}