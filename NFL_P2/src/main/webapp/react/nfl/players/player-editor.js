
import playerService from "./player-service"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const PlayerEditor = () => {
    const {id} = useParams()
    const [player, setPlayer] = useState({schedule:[]})
    useEffect(() => {
        if(id !== "new") {
            fetch(`http://localhost:8080/api/players/${id}/games`)
                .then(response => response.json())
                .then(schedule => setPlayer((prevPlayer) => ({...prevPlayer, schedule: schedule})))
            findPlayerById(id)
        }
    }, []);
    const findPlayerById = (id) =>
        playerService.findPlayerById(id)
            .then(player => setPlayer(player))
    const deletePlayer = (id) =>
        playerService.deletePlayer(id)
            .then(() => history.go(-1))
    const createPlayer = (player) =>
        playerService.createPlayer(player)
            .then(() => history.go(-1))
    const updatePlayer = (id, newPlayer) =>
        playerService.updatePlayer(id, newPlayer)
            .then(() => history.go(-1))
    return (
        <div>
            <h2>Player Editor</h2>
            <label>ID</label>
            <input readOnly = {true} value={player.id}/><br/>
            <label>First Name</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, firstName: e.target.value}))}
                value={player.firstName}/><br/>
            <label>Last Name</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, lastName: e.target.value}))}
                value={player.lastName}/><br/>
            <label>Username</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, username: e.target.value}))}
                value={player.username}/><br/>
            <label>Password</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, password: e.target.value}))}
                value={player.password}/><br/>
            <label>Email</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, email: e.target.value}))}
                value={player.email}/><br/>
            <label>Date of Birth</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, dateOfBirth: e.target.value}))}
                value={player.dateOfBirth}/><br/>
            <label>Team</label>
            <select
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, team: e.target.value}))}>
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
            <label>Position</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, position: e.target.value}))}
                value={player.position}/><br/>
            <label>Jersey Number</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, jerseyNumber: e.target.value}))}
                value={player.jerseyNumber}/><br/>
            <button
                onClick={() => {
                    history.go(-1)}}>
                Cancel
            </button>
            <button
                onClick={() => deletePlayer(player.id)}>
                Delete
            </button>
            <button
                onClick={() => createPlayer(player)}>
                Create
            </button>
            <button
                onClick={() => updatePlayer(player.id, player)}>
                Save
            </button>
            {console.log(player.schedule)}
            <ul>
                {
                    player.schedule.map((s) => {
                        return(
                            <li><Link to={`/games/${s.id}`}>
                                {s.gameDate},
                                {s.gameTime},
                                {s.opponent}
                            </Link>
                            </li>
                        )
                    })
                }
            </ul>
            {console.log(player.schedule)}
            {/*{JSON.stringify(player)}*/}
        </div>
    )
}

export default PlayerEditor