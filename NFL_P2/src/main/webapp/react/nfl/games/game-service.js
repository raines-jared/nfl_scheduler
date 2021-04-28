const GAMES_URL = "http://localhost:8080/api/games"

export const findAllGames = () =>
    fetch(GAMES_URL)
        .then(response => response.json())

export const findGameById = (id) =>
    fetch(`${GAMES_URL}/${id}`)
        .then(response => response.json())

export const deleteGame = (id) =>
    fetch(`${GAMES_URL}/${id}`, {
        method: "DELETE"
    })

export const createGame = (game) =>
    fetch(GAMES_URL, {
        method: 'POST',
        body: JSON.stringify(game),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateGame = (id, game) =>
    fetch(`${GAMES_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(game),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllGames,
    findGameById,
    deleteGame,
    createGame,
    updateGame
}
