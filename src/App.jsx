import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MainFooter from "./components/MainFooter";
import MainNavbar from "./components/MainNavbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
    return (
        <Router>
            <MainNavbar />
            <br/>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects/>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <br/>
            <Container>
                <MainFooter />
            </Container>
        </Router>
    );
}
