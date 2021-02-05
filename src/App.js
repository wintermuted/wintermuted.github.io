import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MainNavbar from "./components/MainNavbar";

import Home from "./pages/Home";

export default function App() {
    return (
        <Router>
            <MainNavbar />
            <br/>
            <Switch>
                <Route path="/about">
                    <span>About</span>
                </Route>
                <Route path="/projects">
                    <span>Projects</span>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
