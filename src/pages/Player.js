import React from 'react';
import {useSelector} from "react-redux";
import PlayerImage from "../components/PlayerImage";
import {IMAGES, TEXTS} from "../utils/constants";

const Player = ({location}) => {

    const {id} = location.state
    const {players} = useSelector(state => state.data)
    const player = players.filter(e => e.id === id)[0]

    const onError = (e) => {
        e.target.src = IMAGES.imageNotFound
    }

    return (
        <div className="player__page">
            <PlayerImage player={player}/>
            <div className="player__page__info">
                <span><strong>{TEXTS.FULL_NAME}:</strong> {player.firstname} {player.lastname}</span>
                <span><strong>{TEXTS.SHORTNAME}:</strong> {player.shortname}</span>
                <span><strong>{TEXTS.SEX}:</strong> {player.sex}</span>
                <span><strong>{TEXTS.COUNTRY}:</strong>
                    <img src={player.country.picture} alt={TEXTS.COUNTRY_IMAGE_ALT} onError={onError}/>
                    <span>{player.country.code}</span>
                </span>
                <span><strong>{TEXTS.RANK}:</strong> {player.data.rank}</span>
                <span><strong>{TEXTS.POINTS}:</strong> {player.data.points}</span>
                <span><strong>{TEXTS.WEIGHT}:</strong> {player.data.weight}</span>
                <span><strong>{TEXTS.AGE}:</strong> {player.data.age}</span>
                <span><strong>{TEXTS.LAST}:</strong> {player.data.last.join(", ")}</span>
            </div>
        </div>
    )
}

export default Player