import {URI} from "./utils/constants"

export const fetchPlayers = async () => {
    try {
        const res = await fetch(URI, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            },
        })
        return res.json()
    } catch (e) {
        console.error(e)
    }
}