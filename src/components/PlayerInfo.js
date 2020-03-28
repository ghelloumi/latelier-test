import React from 'react';

const PlayerInfo = ({player}) => {
    return (
        <div className="player__info">
            <p>{player.firstname} {player.lastname}</p>
        </div>
    )
}

export default PlayerInfo