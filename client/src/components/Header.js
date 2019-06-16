import React from 'react';
import {Row} from 'react-bootstrap';

class Header extends React.Component{
    render() {
        return (
            <div className="header-container">
                <Row>
                    <div className="icon"></div>
                </Row>
            </div>

        )
    }
}

export default Header;