import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faHeart, faPaperclip, faRss} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card,
    Col,
    Container,
    Image,
    Jumbotron,
    Nav,
    Navbar,
    Row,
} from "react-bootstrap";
import './App.css';
import image from './images/headshot.jpg'

export default function App() {
    return (
        <div>
            <Container>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Jameson Nyeholt
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" active>Home</Nav.Link>
                        <Nav.Link href="http://jamesonnyeholt.com/blog">
                            About Me
                        </Nav.Link>
                        <Nav.Link href="http://jamesonnyeholt.com/blog">
                            Projects
                        </Nav.Link>
                        <Nav.Link href="http://jamesonnyeholt.com/blog">
                            <FontAwesomeIcon icon={faRss}
                                             className="header-icon"/>
                            Weblog
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="http://jamesonnyeholt.com/blog">
                            <FontAwesomeIcon icon={faPaperclip}
                                             className="header-icon"/>
                            CV
                        </Nav.Link>
                        <Nav.Link href="https://github.com/wintermuted">
                            <FontAwesomeIcon icon={faTwitter}
                                             className="header-icon"/>
                            Twitter
                        </Nav.Link>
                        <Nav.Link href="https://github.com/wintermuted">
                            <FontAwesomeIcon icon={faGithub}
                                             className="header-icon"/>
                            Github
                        </Nav.Link>
                    </Nav>

                </Navbar>
            </Container>
            <br/>
            <Container>
                <Row>
                    <Col md={3}>
                        <Card>
                            <Card.Img variant="top" src={image} rounded />
                            <Card.Body>
                                <Card.Title>Jameson Nyeholt</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Senior Software Engineer</Card.Subtitle>
                                <Card.Text>
                                    <p>
                                    Portland, Oregon, USA
                                    pronouns: he / him
                                    </p>
                                    <a href="mailto:jnyeholt@hey.com">jnyeholt@hey.com</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={9}>
                        <p className="lead">
                            I'm currently leading a team at <a href="https://www.xandr.com">Xandr</a> that builds workflows for digital advertising publishers.
                        </p>
                        <p className="lead">
                            During the pandemic I've been focused on a few different programming, music, and woodworking projects.
                        </p>
                        <hr />
                        <h2>Current Projects</h2>
                        <ul>
                            <li><strong>Trimet Arrivals</strong> - An application for querying public transit information in the Portland, Oregon metro area.</li>
                            <li>Super Cascadia RPG - A platform</li>
                        </ul>
                        <h2>News</h2>
                        <p></p>
                    </Col>
                </Row>
            </Container>
            <br/>
            <Container>
                <Navbar bg="light">
                  <span
                      className="text-muted">Proudly built in the Cascadia Bioregion.  Technologies and tools.</span>
                </Navbar>
            </Container>
        </div>
    );
}
