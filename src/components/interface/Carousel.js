/**
 * Created by melalex on 4/21/17.
 */

import React from 'react'
import 'react-slick/'
import Carousel from "nuka-carousel";
import img1 from '../../media/img/img1.jpg'
import img2 from '../../media/img/img2.jpg'
import img3 from '../../media/img/img3.jpg'
import img4 from '../../media/img/img4.jpg'

export default class extends React.Component {
    render() {
        return (
            <Carousel>
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
                <img src={img4}/>
            </Carousel>
        )
    }
}