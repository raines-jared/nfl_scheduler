const PLAYERS_URL = "http://localhost:8080/api/players"

export const findAllPlayers = () =>
    fetch(PLAYERS_URL)
        .then(response => response.json())

export const findPlayerById = (id) =>
    fetch(`${PLAYERS_URL}/${id}`)
        .then(response => response.json())

export const deletePlayer = (id) =>
    fetch(`${PLAYERS_URL}/${id}`, {
        method: "DELETE"
    })

export const createPlayer = (player) =>
    fetch(PLAYERS_URL, {
        method: 'POST',
        body: JSON.stringify(player),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updatePlayer = (id, player) =>
    fetch(`${PLAYERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(player),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllPlayers,
    findPlayerById,
    deletePlayer,
    createPlayer,
    updatePlayer
}
