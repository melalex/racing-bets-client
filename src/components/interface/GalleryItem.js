/**
 * Created by melalex on 4/21/17.
 */


import React, {Component, PropTypes} from 'react'
import {Card, CardImg, Col} from "reactstrap";

export default class GalleryItem extends Component {

    render() {
        return (
            <Col lg={{size: 3}} md={{size: 4}} xs={{size: 6}}>
                <Card className="elem-margin">
                    <CardImg top width="100%" className="img-thumbnail" src={this.props.src} alt="Card image cap" />
                </Card>
            </Col>
        )
    }
}

GalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
};