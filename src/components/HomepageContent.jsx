import {Badge} from "react-bootstrap";

export default function HomepageContent() {
    return (
        <div>
            <h4>Status</h4>
            <p className="lead">
                I'm currently leading a team at <a href="https://www.xandr.com">Xandr</a> that builds workflows for digital advertising publishers.
            </p>
            <p className="lead">
                During the COVID-19 pandemic I've been focused on a few different programming, music, and woodworking projects.
            </p>
            <hr />
            <h4>Current projects</h4>
            <Badge variant="dark">Alpha</Badge>{' '}
            <strong>
                <a href="https://github.com/Super-Cascadia/trimet-arrivals">Trimet Arrivals</a>
            </strong>
            <span> - An app for querying public transit information in the Portland, OR metro area.</span>
            <br/>

            <Badge variant="dark">Alpha</Badge>{' '}
            <strong>
                <a href="https://github.com/Super-Cascadia/super-cascadia-rpg">Super Cascadia RPG</a>
            </strong>
            <span> - A platform for building browser-based JRPG's.</span>
        </div>
    )
}
