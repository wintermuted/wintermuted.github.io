import {Card} from "react-bootstrap";
import image from "../images/headshot.jpg";

export function Profile() {
    return (
        <Card>
            <Card.Img variant="top" src={image} rounded />
            <Card.Body>
                <Card.Title>Jameson Nyeholt</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Senior Software Engineer</Card.Subtitle>
                <Card.Text>
                    <p>
                        Portland, Oregon, USA
                        pronouns: <a href="http://pronoun.is/he">he / him</a>
                    </p>
                    <a href="mailto:jnyeholt@hey.com">jnyeholt@hey.com</a>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
