import React from 'react';
import {useSelector} from "react-redux";
import PlayerContainer from "../components/PlayerContainer";

const Players = ({location}) => {
    const {players} = useSelector(state => state.data)

    return (
        <div className="score__container">
            {players.sort((a, b) => a.data.points > b.data.points ? -1 : 1).map(e => (
                <PlayerContainer key={e.id} player={e}/>
            ))}
        </div>
    )
}

export default Players