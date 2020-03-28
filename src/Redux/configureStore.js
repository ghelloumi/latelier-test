import {createLogger} from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import headToHeadData from '../data/headtohead.json';
import {fetchPlayers} from "../players.service";

fetchPlayers().then(e => console.log(e))

const initialState = {data: JSON.parse(JSON.stringify(headToHeadData))}

export default function configureStore(preloadedStore = initialState.data ? initialState : undefined) {
    return createStore(
        reducers,
        preloadedStore,
        applyMiddleware(createLogger({predicate: () => process.env.NODE_ENV === 'development'})),
    )
}
