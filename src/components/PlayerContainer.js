import React from 'react';
import PlayerImage from "./PlayerImage";
import PlayerInfo from "./PlayerInfo";
import {Link} from 'react-router-dom'

const PlayerContainer = ({player, handleClick}) => {
    return (
        <div className="player__container">
            <Link to={{
                pathname: `player/${player.id}`,
                state: {id: player.id}
            }}>
                <PlayerImage player={player}/>
                <PlayerInfo player={player}/>
            </Link>
        </div>
    )
}

export default PlayerContainer