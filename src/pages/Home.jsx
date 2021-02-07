import {Col, Container, Row} from "react-bootstrap";
import HomepageContent from "../components/HomepageContent";
import {Profile} from "../components/Profile";

export default function Home() {
    return (
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
    )
}
