import React from 'react';
import {IMAGES, TEXTS} from "../utils/constants";

const PlayerImage = ({player}) => {
    const onError = (e) => {
        e.target.src = IMAGES.imageNotFound
    }

    return (
        <div className="image__container">
            <img src={player.picture} alt={TEXTS.PLAYER_IMAGE_ALT} onError={onError}/>
        </div>
    )
}

export default PlayerImage