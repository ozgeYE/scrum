import React from 'react';
import {Row, Container, Button} from 'react-bootstrap';

class StoryPoint extends React.Component{
    render() {
        return (
            <Container>
                <Row>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>5</Button>
                </Row>
                <Row>
                    <Button>8</Button>
                    <Button>13</Button>
                    <Button>21</Button>
                    <Button>34</Button>
                </Row>
                <Row>
                    <Button>55</Button>
                    <Button>89</Button>
                    <Button>134</Button>
                    <Button>?</Button>
                </Row>
            </Container>

        )
    }
}

export default StoryPoint;