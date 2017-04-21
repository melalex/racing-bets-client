/**
 * Created by melalex on 4/21/17.
 */

import React from 'react'
import 'react-slick/'
import Slider from "react-slick";

export default class extends React.Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            null

        // <Slider {...settings}>
        //     <div><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/></div>
        //     <div><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/></div>
        //     <div><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/></div>
        //     <div><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/></div>
        //     <div><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/></div>
        // </Slider>
        // <div className="col-xs-5 card prod-img">
        //     <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        //         <ol className="carousel-indicators">
        //             <li data-target="#carousel-example-generic" data-slide-to="0" className="active"/>
        //             <li data-target="#carousel-example-generic" data-slide-to="1"/>
        //             <li data-target="#carousel-example-generic" data-slide-to="2"/>
        //         </ol>
        //         <div className="carousel-inner" role="listbox">
        //             <div className="carousel-item active">
        //                 <img src="../../assets/animals/rat.png" alt="First slide"/>
        //             </div>
        //             <div className="carousel-item">
        //                 <img src="../../assets/animals/cat.png" alt="Second slide"/>
        //             </div>
        //             <div className="carousel-item">
        //                 <img src="../../assets/animals/dog.png" alt="Third slide"/>
        //             </div>
        //         </div>
        //         <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        //             <span className="icon-prev" aria-hidden="true"/>
        //             <span className="sr-only">Previous</span>
        //         </a>
        //         <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        //             <span className="icon-next" aria-hidden="true"/>
        //             <span className="sr-only">Next</span>
        //         </a>
        //     </div>
        // </div>

        // <Carousel>
        //     <CarouselItem>
        //         <img width={900} height={500} alt="900x500" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="/>
        //         {/*<Carousel.Caption>*/}
        //             {/*<h3>First slide label</h3>*/}
        //             {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
        //         {/*</Carousel.Caption>*/}
        //     </CarouselItem>
        //     <CarouselItem>
        //         <img width={900} height={500} alt="900x500" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="/>
        //         {/*<Carousel.Caption>*/}
        //             {/*<h3>Second slide label</h3>*/}
        //             {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
        //         {/*</Carousel.Caption>*/}
        //     </CarouselItem>
        //     <CarouselItem>
        //         <img width={900} height={500} alt="900x500" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="/>
        //         {/*<Carousel.Caption>*/}
        //             {/*<h3>Third slide label</h3>*/}
        //             {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
        //         {/*</Carousel.Caption>*/}
        //     </CarouselItem>
        // </Carousel>

        // <div className="carousel-inner" role="listbox">
        //         <div className="carousel-item">
        //             <img className="first-slide"
        //                  src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
        //                  alt="First slide"/>
        //             <div className="container">
        //                 <div className="carousel-caption d-none d-md-block text-left">
        //                     <h1>Example headline.</h1>
        //                     <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
        //                         porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
        //                         elit.</p>
        //                     <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="carousel-item active">
        //             <img className="second-slide"
        //                  src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
        //                  alt="Second slide"/>
        //             <div className="container">
        //                 <div className="carousel-caption d-none d-md-block">
        //                     <h1>Another example headline.</h1>
        //                     <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
        //                         porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
        //                         elit.</p>
        //                     <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="carousel-item">
        //             <img className="third-slide"
        //                  src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
        //                  alt="Third slide"/>
        //             <div className="container">
        //                 <div className="carousel-caption d-none d-md-block text-right">
        //                     <h1>One more for good measure.</h1>
        //                     <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
        //                         porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
        //                         elit.</p>
        //                     <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        )
    }
}