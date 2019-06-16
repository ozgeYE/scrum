import React from 'react';
import './App.css';
import {Container, Row, Button} from 'react-bootstrap';
import axios from 'axios';
import {addUser} from './actions/userAction';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import StoryList from "./components/StoryList";
import ScrumMaster from "./components/ScrumMaster";

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
                    <Route path="/story-list" component={StoryList}/>
                    <Route path="/scrum-master" component={ScrumMaster}/>
                </Container>
            </BrowserRouter>
        )

        // return (
        //     <Container className="App">
        //         <div>
        //             <Row>
        //                 App
        //                 <Button onClick={() => this.props.addUser()}>Add User</Button>
        //             </Row>
        //
        //         </div>
        //     </Container>
        // )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addUser: () => dispatch(addUser({username: 'ayse'}))
    }
};

export default connect(null, mapDispatchToProps)(App);
