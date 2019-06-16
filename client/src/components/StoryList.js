import React from 'react';
import {Row, Form, Button, Alert} from 'react-bootstrap';
import {addStory} from '../actions/storyAction';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class StoryList extends React.Component {
    state = {
        voterCount: 0,
        sessionName: '',
        storyList: '',
        showAlert: true
    };

    componentWillUpdate(){
        let alert = null;
        if (this.state.voterCount === null || this.state.voterCount === 0) {
            this.setState({
                showAlert: true
            });

            console.log(this.state);

            alert = this.state.showAlert ? (
                <div>
                    <Alert variant="danger">
                        This is a  alert with
                    </Alert>
                </div>
            ) : (
                <div></div>
            );

        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    startSession = (e) => {
        e.preventDefault();
        console.log(this.state);

        // const storyList = this.state.storyList.split('\n');
        // for (let i = 0; i < storyList.length; i++) {
        //     axios.post('http://localhost:3001/story', {
        //         storyName: storyList[i]
        //     }).then((response) => {
        //         console.log(response);
        //         this.props.history.push('/scrum-master');
        //     }).catch(err => console.log(err))
        // }

    };

    render() {
        return (
            <div className="story-list-container">
                {alert}
                <Row>
                    <Form>
                        <Form.Row>
                            <div className="col-md-6">
                                <Form.Label>Session Name</Form.Label>
                                <Form.Control placeholder="Session Name" id="sessionName"
                                              onChange={(e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="col-md-6">
                                <Form.Label>Number of Voters</Form.Label>
                                <Form.Control placeholder="Number of Voters" type="number" id="voterCount"
                                              onChange={(e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="col-md-12">
                                <Form.Group>
                                    <Form.Label>Paste your story list</Form.Label>
                                    <Form.Control as="textarea" rows="3" id="storyList"
                                                  onChange={(e) => this.onChangeHandler(e)}/>
                                </Form.Group>
                            </div>
                            <div className="col-md-12">
                                <Button onClick={(e) => this.startSession(e)}>Start Session</Button>
                            </div>
                        </Form.Row>
                    </Form>
                </Row>
            </div>
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addStory: (story) => dispatch(addStory(story))
    }
};

export default connect(null, mapDispatchToProps)(withRouter(StoryList));