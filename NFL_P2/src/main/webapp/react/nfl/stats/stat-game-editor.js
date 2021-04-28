import statService from "./stat-service"

const {useState, useEffect} = React;
const {useParams, Link} = window.ReactRouterDOM;

const StatGameEditor = () => {
    const {gameId} = useParams()
    //const [stat, setStat] = useState({})

    const [stats, setStats] = useState([])
    useEffect(() => {
        findStatsForGame(gameId)
    }, [])
    const findStatsForGame = (gameId) =>
        statService.findStatsForGame(gameId)
            .then(stats => setStats(stats))
    return(
        <div>
            <h2>Statistics</h2>
            <ul>
                {
                    stats.map(stat =>
                        <li key={stat.id}>
                            <Link to={`/stats/${stat.id}`}> {stat.text}
                                {stat.playToGame},
                                {stat.playNumber},
                                {stat.runningYards},
                                {stat.touchdown},
                                {stat.flags}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )

}

export default StatGameEditor;