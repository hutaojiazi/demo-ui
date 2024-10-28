import React, { Component } from 'react';
import {
  Table,
} from 'reactstrap';
import TrailService from '../service/TrailService.js';

class TrailListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trails: [],
            isLoading: true,
            errorMessage: null
        }
    }

    componentDidMount() {
        this.getTrails();
    }

    getTrails() {
        this.setState({isLoading: true});
        TrailService.getAll()
            .then(
                response => {
                    console.log("received response->" + JSON.stringify(response.data.content));
                    this.setState({ 
                        trails: response.data.content,
                        isLoading: false,
                        errorMessage: null 
                    })
                }
            )
    }

    render() {
        const {trails, isLoading, errorMessage} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>FID</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {trails.map(p =>
                    <tr>
                        <td>{p.fid}</td>
                        <td>{p.address}</td>
                    </tr>
                )}
                {!trails || trails.length === 0 ? <p>No Trails Found!</p> : null}
                </tbody>
            </Table>
        )
    }
}

export default TrailListComponent