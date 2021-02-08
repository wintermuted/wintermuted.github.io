import {faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

export default function MainNavbar() {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    Jameson Nyeholt
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/" exact={true}>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>
                                About
                            </Nav.Link>
                        </LinkContainer>
                        {/*<LinkContainer to="/projects">*/}
                        {/*    <Nav.Link>*/}
                        {/*        Projects*/}
                        {/*    </Nav.Link>*/}
                        {/*</LinkContainer>*/}
                        <Nav.Link href="http://jamesonnyeholt.com/blog">
                            {/*<FontAwesomeIcon icon={faRss}*/}
                            {/*                 className="header-icon"/>*/}
                            Weblog
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://twitter.com/jwnyeholt">
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
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}


