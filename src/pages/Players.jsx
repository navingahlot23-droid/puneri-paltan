import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayers } from "../redux/action/player.action";
import PlayerCard from "../components/PlayerCard";

export default function Players() {
    const dispatch = useDispatch();
    const { playersByCategory, error } = useSelector((state) => state.players);

    useEffect(() => {
        dispatch(fetchPlayers(1));
        dispatch(fetchPlayers(2));
        dispatch(fetchPlayers(3));
    }, []);


    return (
        <>
            {error && <p className="text-lg text-red-600">{error}</p>}

            {/* Category 1 */}
            <section>
                <h2 className="text-xl font-bold mb-3">Category 1</h2>
                {playersByCategory[1]?.map(p => (
                    <PlayerCard key={p.id} imgSRC={p.profile_image} playerName={p.name} playerPosition={p.cat_name} />
                ))}
            </section>

            {/* Category 2 */}
            <section>
                <h2 className="text-xl font-bold mb-3">Category 2</h2>
                {playersByCategory[2]?.map(p => (
                    <PlayerCard key={p.id} imgSRC={p.profile_image} playerName={p.name} playerPosition={p.cat_name} />
                ))}
            </section>

            {/* Category 3 */}
            <section>
                <h2 className="text-xl font-bold mb-3">Category 3</h2>
                {playersByCategory[3]?.map(p => (
                    <PlayerCard key={p.id} imgSRC={p.profile_image} playerName={p.name} playerPosition={p.cat_name} />
                ))}
            </section>
        </>
    );
}
