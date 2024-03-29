import React from 'react';
import StoryTable from "./StoryTable";
import StoryPoint from "./StoryPoint";
import {Row, Col} from 'react-bootstrap';
import MasterPanel from "./MasterPanel";

class ScrumMaster extends React.Component{
    render() {
        return (
            <Row className="scrum-master-container">
                <Col xs="6">
                    <StoryTable/>
                </Col>
                <Col xs="3">
                    <StoryPoint/>
                </Col>
                <Col xs="3">
                    <MasterPanel/>
                </Col>
            </Row>
        )
    }
}

export default ScrumMaster;