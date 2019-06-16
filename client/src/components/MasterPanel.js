import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import axios from 'axios';

class MasterPanel extends React.Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios.get(`http://localhost:3001/user`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    }

    render() {
        const userList = this.state.users && this.state.users.length > 0 ? (
            this.state.users.map(u => {
                return (
                    <Row key={u.id}>
                        <Col xs={6}>{u.username}</Col>
                        <Col xs={6}>5</Col>
                    </Row>
                )
            })
        ) : (
            <div>No user</div>
        );
        return (
            <div className="master-panel-container">
                <Row>
                    <Col xs={12}>Story name</Col>
                </Row>
                {userList}
                <Row>
                    <Col xs={6}>Scrum Master</Col>
                    <Col xs={6}>5</Col>
                </Row>
                <Row>
                    <Col xs={12}>Final Score</Col>
                    <Col xs={12}>35</Col>
                </Row>
                <Row>
                    <Button>Finish Session</Button>
                </Row>
            </div>

        )
    }
}

export default MasterPanel;