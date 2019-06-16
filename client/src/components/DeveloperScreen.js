import React from 'react';
import {Row, Col} from 'react-bootstrap';
import StoryTable from "./StoryTable";
import StoryPoint from "./StoryPoint";

class DeveloperScreen extends React.Component {
    render() {
        return (
            <Row className="scrum-master-container">
                <Col xs="8">
                    <StoryTable/>
                </Col>
                <Col xs="4">
                    <StoryPoint/>
                </Col>
            </Row>

        )
    }
}

export default DeveloperScreen;