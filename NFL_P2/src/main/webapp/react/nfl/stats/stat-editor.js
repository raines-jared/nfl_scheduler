import statService from "./stat-service"
import {findGameById} from "../games/game-service";
import {getPlayToGame} from "/src/main/java/com.example.springtemplate/nfl/models/Stat";
import gameService from "../games/game-service"


const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const StatEditor = () => {
    const {playId} = useParams()
    //const [gameId, setGameId] = useState({})
    const [stat, setStat] = useState({});
    const [game, setGame] = useState({});
    useEffect(() => {
        if(playId !== "new") {
            findStatById(playId)
            findGameById(stat.playToGame)
        }
    }, []);
    const history = useHistory();

    const findStatById = (playId) =>
        statService.findStatById(playId)
            .then(stat => setStat(stat))

    //const game = gameService.findGameById(stat.playToGame);

    const findGameById = (gameId) =>
        gameService.findGameById(gameId)
            .then(game => setGame(game))
    const deleteStat = (playId) =>
        statService.deleteStat(playId)
            .then(() => history.go(-1))
    const createStat = (stat) =>
        statService.createStat(stat)
            .then(() => history.go(-1))
    const updateStat = (playId, newStat) =>
        statService.updateStat(playId, newStat)
            .then(() => history.go(-1))
    return (
        <div>
            <h2>Stat Editor</h2>
            <label>ID</label>
            <input readOnly = {true} value={stat.id}/><br/>
            <label>Game ID</label>
            <input
                onChange={(e) =>
                    setStat(stat =>
                        ({...stat, playToGame: e.target.value}))}
                value={stat.playToGame}/><br/>
            <label>Play Number</label>
            <input
                onChange={(e) =>
                    setStat(stat =>
                        ({...stat, playNumber: e.target.value}))}
                value={stat.playNumber}/><br/>
            <label>Running Yards</label>
            <input
                onChange={(e) =>
                    setStat(stat =>
                        ({...stat, runningYards: e.target.value}))}
                value={stat.runningYards}/><br/>
            <label>Touchdown</label>
            <input
                onChange={(e) =>
                    setStat(stat =>
                        ({...stat, touchdown: e.target.value}))}
                value={stat.touchdown}/><br/>
            <label>Flags</label>
            <input
                onChange={(e) =>
                    setStat(stat =>
                        ({...stat, flags: e.target.value}))}
                value={stat.flags}/><br/>
            <button
                onClick={() => {
                    history.go(-1)}}>
                Cancel
            </button>
            <button
                onClick={() => deleteStat(stat.id)}>
                Delete
            </button>
            <button
                onClick={() => createStat(stat)}>
                Create
            </button>
            <button
                onClick={() => updateStat(stat.id, stat)}>
                Save
            </button><br/>
            {console.log(game)}
            {console.log(gameId)}
                <Link to={`/games/${stat.playToGame}`}>
                    {game.gameDate},
                    {game.gameTime},
                    {game.touchdown},
                    {game.flags}
                </Link>
        </div>
    )
}

export default StatEditor