import gameService from "./game-service"

const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const GameEditor = () => {
    const {gameId} = useParams()
    const [game, setGame] = useState({lineup:[]})
    //const history = useHistory();
    useEffect(() => {
        if(gameId !== "new") {
            // fetch(`http://localhost:8080/api/games/${gameId}/players`)
            //     .then(response => response.json())
            //     .then(lineup => setGame((prevGame) => ({...prevGame, lineup: lineup})))
            findGameById(gameId)
        }
    }, []);
    const findGameById = (gameId) =>
        gameService.findGameById(gameId)
            .then(game => setGame(game))
    const deleteGame = (gameId) =>
        gameService.deleteGame(gameId)
            .then(() => history.go(-1))
    const createGame = (game) =>
        gameService.createGame(game)
            .then(() => history.go(-1))
    const updateGame = (gameId, newGame) =>
        gameService.updateGame(gameId, newGame)
            .then(() => history.go(-1))
    return (
        <div>
            <h2>Game Editor</h2>
            <label>ID</label>
            <input readOnly = {true} value={game.id}/><br/>
            <label>Game Date</label>
            <input
                onChange={(e) =>
                    setGame(game =>
                        ({...game, gameDate: e.target.value}))}
                value={game.gameDate}/><br/>
            <label>Game Time</label>
            <input
                onChange={(e) =>
                    setGame(game =>
                        ({...game, gameTime: e.target.value}))}
                value={game.gameTime}/><br/>
            <label>Opponent</label>
            <select
                onChange={(e) =>
                    setGame(game =>
                        ({...game, opponent: e.target.value}))}>
                <option>Dolphins</option>
                <option>Patriots</option>
                <option>Jets</option>
                <option>Bills</option>
                <option>Cowboys</option>
                <option>Washington</option>
                <option>Giants</option>
                <option>Eagles</option>
                <option>Texans</option>
                <option>Titans</option>
                <option>Colts</option>
                <option>Jaguars</option>
                <option>Buccaneers</option>
                <option>Saints</option>
                <option>Panthers</option>
                <option>Falcons</option>
                <option>Ravens</option>
                <option>Steelers</option>
                <option>Browns</option>
                <option>Bengals</option>
                <option>Packers</option>
                <option>Bears</option>
                <option>Vikings</option>
                <option>Lions</option>
                <option>Seahawks</option>
                <option>FortyNiners</option>
                <option>Cardinals</option>
                <option>Rams</option>
                <option>Chiefs</option>
                <option>Chargers</option>
                <option>Raiders</option>
                <option>Broncos</option>
            </select>
            <br/>
            <label>Injured Players</label>
            <input
                onChange={(e) =>
                    setGame(game =>
                        ({...game, injuredPlayers: e.target.value}))}
                value={game.injuredPlayers}/><br/>
            <button
                onClick={() => {
                    history.go(-1)}}>
                Cancel
            </button>
            <button
                onClick={() => deleteGame(game.id)}>
                Delete
            </button>
            <button
                onClick={() => createGame(game)}>
                Create
            </button>
            <button
                onClick={() => updateGame(game.id, game)}>
                Save
            </button>
            <button
                onClick={() => history.push(`/games/${game.id}/stats`)}>
                Stats
            </button>
            {console.log(game.lineup)}
            {/*<ul>*/}
            {/*    {*/}
            {/*        game.lineup.map((s) => {*/}
            {/*            return(*/}
            {/*                <li><Link to={`/players/${s.id}`}>*/}
            {/*                    {s.firstName},*/}
            {/*                    {s.lastName},*/}
            {/*                    {s.jerseyNumber}*/}
            {/*                </Link>*/}
            {/*                </li>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</ul>*/}
            {console.log(game.lineup)}
            {/*{JSON.stringify(game)}*/}
        </div>
    )
}

export default GameEditor