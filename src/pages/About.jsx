import {Col, Container, Row} from "react-bootstrap";

export default function About() {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 id="about">About</h2>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={8} lg={9}>
                    {/*<h3 id="background">Background</h3>*/}
                    <p>
                        I am a Senior Software Engineer at Xandr, an
                        advertising & analytics division of WarnerMedia. I
                        lead a team focused on building products for businesses
                        managing advertising for publishers.
                    </p>
                    <p>I live and work in Portland, Oregon, where I have been
                        located since 2013. Prior to relocating to the Pacific
                        Northwest, I lived in southern California.</p>
                    <h3>Mission</h3>
                    <p>I see my primary mission as attempting to leave things in
                        a
                        better state than I found them, and to do so in a way
                        uplifts all those involved. I am an average person with
                        average means, and though I know I won't necessarily
                        change the world, I think it's important to have a
                        positive impact upon my community and those in it.</p>
                    <p>In my professional life, this mission sees action in the
                        way I approach problem solving and collaborating with
                        others in shared endeavors.</p>
                    <h3 id="philosophy">Philosophy</h3>
                    <h5 id="golden-mean">The Golden Mean - Don't let perfect be
                        the enemy of good</h5>
                    <p>Achieving perfection is often impossible with any complex
                        task, and effort beyond what is actually necessary in
                        achieving its main purpose
                        results in diminishing returns. The best and most
                        efficient way to accomplish to goal is to accept that it
                        only needs to be "good" enough to fulfill the purpose it
                        was meant to serve. This does not mean that we shouldn't
                        strive for the best outcome or the highest quality; but
                        that we shouldn't let that impede our ability to
                        initially benefit from the fruits of our labour.<br/>
                        <a href="https://en.wikipedia.org/wiki/Perfect_is_the_enemy_of_good">Wikipedia</a>
                    </p>
                    <h5 id="kaizen"><i>Kaizen</i> ~ Continuous Improvement</h5>
                    <p><i>Kaizen</i> is a concept referring to the process of
                        continuous, incremental improvements to a system. I see
                        Kaizen as necessary a colophon to `Don't let perfect be
                        the enemy of good.' Any process, design, or thing can
                        always be improved if desired. Improving it is most
                        effective when
                        it is an iterative process that depends upon reflection
                        and constructive analysis of the choices and
                        circumstances that led to its current state.<br/>
                        <a href="https://en.wikipedia.org/wiki/Kaizen">Wikipedia</a>
                    </p>
                    <h5 id="sustainable-design">Sustainable Design &
                        Development</h5>
                    <p>
                        In it's simplest definition, sustainability is the
                        ability of something to exist constantly. Sustainability
                        is an important part of my personal & professional
                        outlook. It drives my motivation to eliminate waste &
                        inefficiency, and build with eye towards the long term
                        results of an endeavor.
                        <br/>
                        <a href="https://en.wikipedia.org/wiki/Sustainable_design">Wikipedia</a>
                    </p>
                    {/*<h5 id="golden-rule">The Golden Rule - Be Kind</h5>*/}
                    {/*<p></p>*/}
                </Col>
                <Col sm={12} md={4} lg={3}>
                    <ul class="list-unstyled">
                        {/*<li><a href="#background">Background</a></li>*/}
                        <li><a href="#mission">Mission</a></li>
                        <li>
                            <a href="philosophy">
                                Philosophy
                            </a>
                            <ul>
                                <li><a href="#golden-mean">The Golden Mean</a>
                                </li>
                                <li><a href="#kaizen">Kaizen</a></li>
                                <li><a href="#sustainable-design">Sustainable
                                    Design</a></li>
                                {/*<li><a href="#golden-rule">The Golden Rule</a></li>*/}
                            </ul>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
