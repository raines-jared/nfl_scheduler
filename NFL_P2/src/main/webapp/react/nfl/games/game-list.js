const {Link, useHistory} = window.ReactRouterDOM;


import gameService from "./game-service"
const { useState, useEffect } = React;
const GameList = () => {
    const history = useHistory()
    const [games, setGames] = useState([])
    useEffect(() => {
        findAllGames()
    }, [])
    const findAllGames = () =>
        gameService.findAllGames()
            .then(games => setGames(games))
    return(
        <div>
            <h2>Games</h2>
            <button onClick={() => history.push("/games/new")}>
                Add Game
            </button>
            <ul>
                {
                    games.map(game =>
                        <li key={game.id}> {game.text}
                            <Link to={`/games/${game.id}`}>
                                {game.gameDate},
                                {game.gameTime},
                                {game.opponent},
                                {game.injuredPlayers}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )

}

export default GameList;