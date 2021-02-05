import {Col, Container, Row} from "react-bootstrap";
import HomepageContent from "../components/HomepageContent";
import MainFooter from "../components/MainFooter";
import {Profile} from "../components/Profile";

export default function Home() {
    return (
        <div>

            <Container>
                <Row>
                    <Col md={3}>
                        <Profile />
                    </Col>
                    <Col md={9}>
                        <HomepageContent />
                    </Col>
                </Row>
            </Container>
            <br/>
            <Container>
                <MainFooter />
            </Container>
        </div>
    )
}
