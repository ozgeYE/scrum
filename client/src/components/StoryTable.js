import React from 'react';
import {Table, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getStories} from "../actions/storyAction";
import axios from "axios/index";

class StoryTable extends React.Component {
    state = {
        stories: []
    };

    componentDidMount() {
        axios.get(`http://localhost:3001/story`)
            .then(res => {
                const stories = res.data;
                this.setState({stories});
            })
    }

    render() {
        const storyTable = this.state.stories && this.state.stories.length > 0 ? (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Story</th>
                    <th>Story Point</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.stories.map(s => {
                        console.log(s.status);
                        return (
                            <tr key={s.id}>
                                <td>{s.storyName}</td>
                                <td>{s.storyPoint}</td>
                                <td>{s.status === false ? 'Not Voted' : 'Active'}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        ) : (
            <div>No data</div>
        );
        return (
            <div>
                {storyTable}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stories: state.storyR
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStories: () => dispatch(getStories())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryTable);