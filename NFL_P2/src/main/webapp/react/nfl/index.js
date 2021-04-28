import PlayerList from "./players/player-list";
import PlayerEditor from "./players/player-editor";
import GameList from "./games/game-list";
import GameEditor from "./games/game-editor";
import StatList from "./stats/stat-list";
import StatEditor from "./stats/stat-editor";
import StatGameEditor from "./stats/stat-game-editor";

const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <h1>NFL</h1>
            <HashRouter>
                <Route path={["/players", "/"]} exact={true}>
                    <PlayerList/>
                </Route>
                <Route path="/players/:id" exact={true}>
                    <PlayerEditor/>
                </Route>
                <Route path={["/games", "/"]} exact={true}>
                    <GameList/>
                </Route>
                <Route path="/games/:gameId" exact={true}>
                    <GameEditor/>
                </Route>
                <Route path={["/stats", "/"]} exact={true}>
                    <StatList/>
                </Route>
                <Route path="/stats/:playId" exact={true}>
                    <StatEditor/>
                </Route>
                <Route path="/games/:gameId/stats" exact={true}>
                    <StatGameEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
