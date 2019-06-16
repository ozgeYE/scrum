import React from 'react';
import './App.css';
import {Container, Row, Button} from 'react-bootstrap';
import axios from 'axios';
import {addUser} from './actions/userAction';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import StoryList from "./components/StoryList";
import ScrumMaster from "./components/ScrumMaster";
import DeveloperScreen from "./components/DeveloperScreen";

class App extends React.Component {
    render() {
        axios.get('http://localhost:3001/user').then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });

        return (
            <BrowserRouter>
                <Container>
                    <div>App</div>
                    <Button onClick={() => this.props.addUser()}>Add User</Button>
                    <Route exact path="/" component={StoryList}/>
                    <Route path="/story-list" component={StoryList}/>
                    <Route path="/scrum-master" component={ScrumMaster}/>
                    <Route path="/developer-screen" component={DeveloperScreen}/>
                </Container>
            </BrowserRouter>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addUser: () => dispatch(addUser({username: 'ayse'}))
    }
};

export default connect(null, mapDispatchToProps)(App);
