import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBarComponent from './NavBarComponent';
import TrailListComponent from './TrailListComponent';

class TrailApp extends Component {
    render() {
        return (
            <>
                <Router>
                    <>
                        <NavBarComponent />
                        <div class="row">
                            <TrailListComponent/>
                        </div>
                    </>
                </Router>
            </>
        )
    }
}

export default TrailApp