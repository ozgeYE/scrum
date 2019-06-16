import React from 'react';
import {Table, Row, Button} from 'react-bootstrap';
import StoryTable from "./StoryTable";
import StoryPoint from "./StoryPoint";

class ScrumMaster extends React.Component{
    render() {
        return (
            <div className="scrum-master-container col-md-12">
                <div className="col-md-6">
                    <StoryTable/>
                </div>
                <div className="col-md-3">
                    <StoryPoint/>
                </div>
            </div>
        )
    }
}

export default ScrumMaster;