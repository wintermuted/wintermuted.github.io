import {Col, Container, Row} from "react-bootstrap";
import HomepageContent from "../components/HomepageContent";
import {Profile} from "../components/Profile";

export default function Home() {
    return (
        <Container>
            <Row>
                <Col sm={12} md={4} lg={3}>
                    <Profile />
                </Col>
                <Col sm={12} md={8} lg={9}>
                    <HomepageContent />
                </Col>
            </Row>
        </Container>
    )
}
