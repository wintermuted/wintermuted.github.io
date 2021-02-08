import {faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

export default function MainNavbar() {
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    Jameson Nyeholt
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
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
                        <LinkContainer to="http://jamesonnyeholt.com/blog">
                            <Nav.Link>
                                {/*<FontAwesomeIcon icon={faRss}*/}
                                {/*                 className="header-icon"/>*/}
                                Weblog
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    {/*<LinkContainer to="/cv">*/}
                    {/*    <Nav.Link>*/}
                    {/*        <FontAwesomeIcon icon={faPaperclip}*/}
                    {/*                         className="header-icon"/>*/}
                    {/*        CV*/}
                    {/*    </Nav.Link>*/}
                    {/*</LinkContainer>*/}
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
            </Navbar>
        </Container>
    )
}


