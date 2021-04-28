const {Link, useHistory} = window.ReactRouterDOM;


import playerService from "./player-service"
const { useState, useEffect } = React;
const PlayerList = () => {
    const history = useHistory()
    const [players, setPlayers] = useState([])
    useEffect(() => {
        findAllPlayers()
    }, [])
    const findAllPlayers = () =>
        playerService.findAllPlayers()
            .then(players => setPlayers(players))
    return(
        <div>
            <h2>Players</h2>
            <button onClick={() => history.push("/players/new")}>
                Add Player
            </button>
            <ul>
                {
                    players.map(player =>
                        <li key={player.id}>
                            <Link to={`/players/${player.id}`}>
                                {player.firstName},
                                {player.lastName},
                                {player.username},
                                {player.password},
                                {player.email},
                                {player.dateOfBirth},
                                {player.team},
                                {player.position},
                                {player.jerseyNumber}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )

}

export default PlayerList;