/**
 * Created by melalex on 4/21/17.
 */

import React from 'react'
import GalleryItem from '../components/interface/GalleryItem'
import {Col, Row} from "reactstrap";

export default class extends React.Component {

    render() {
        let galleryItems = [];
        for (let i = 0; i < 12; i++) {
            galleryItems.push(<GalleryItem key={i} src="http://placehold.it/400x300"/>);
        }
        return (
            <Row className="big-margin-bot">
                <Col lg={{size: 12}}>
                    <h1 className="page-header">Thumbnail Gallery</h1>
                </Col>
                {galleryItems}
            </Row>
        )
    }
}
