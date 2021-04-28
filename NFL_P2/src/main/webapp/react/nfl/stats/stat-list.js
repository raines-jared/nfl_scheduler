const {Link, useHistory} = window.ReactRouterDOM;


import statService from "./stat-service"
const { useState, useEffect } = React;
const StatList = () => {
    const history = useHistory()
    const [stats, setStats] = useState([])
    useEffect(() => {
        findAllStats()
    }, [])
    const findAllStats = () =>
        statService.findAllStats()
            .then(stats => setStats(stats))
    return(
        <div>
            <h2>Statistics</h2>
            <button onClick={() => history.push("/stats/new")}>
                Add Stat
            </button>
            <ul>
                {
                    stats.map(stat =>
                        <li key={stat.id}> {stat.text}
                            <Link to={`/stats/${stat.id}`}>
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

export default StatList;