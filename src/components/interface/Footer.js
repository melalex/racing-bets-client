/**
 * Created by melalex on 4/11/17.
 */

import React from 'react'
import Share from './Share'
import {Col, Row} from "reactstrap";

export default class extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <Row>
                        <Col md={{size: 8}}>
                            <span className="text-muted">&copy; Melashchenko, 2017</span>
                        </Col>
                        <Col md={{size: 4}}>
                            <Share/>
                        </Col>
                    </Row>
                </div>
            </footer>
        )
    }
}