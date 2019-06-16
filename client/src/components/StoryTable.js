import React from 'react';
import {Table} from 'react-bootstrap';

class StoryTable extends React.Component {
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Story</th>
                    <th>Story Point</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>

        )
    }
}

export default StoryTable;