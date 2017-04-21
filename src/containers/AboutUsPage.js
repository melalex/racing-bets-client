/**
 * Created by melalex on 4/21/17.
 */

import React from 'react'
import Carousel from "../components/interface/Carousel";
import Sidebar from "../components/interface/Sidebar";
import Header from "./Header";
import Footer from "../components/interface/Footer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {action as toggleMenu} from 'redux-burger-menu';
import {setRaceStatus} from '../actions/Race'
import GoogleMap from 'google-map-react';
import img4 from '../media/img/img4.jpg'

class Marker extends React.Component {
    render() {
        return (
            <div className="tooltip tooltip-top marker">
                <div className="tooltip-inner">
                    We are here
                </div>
            </div>
        )
    }
}

class About extends React.Component {

    componentDidMount() {
        if (this.props.isOpen) {
            this.props.toggleMenu(false)
        }
    }

    static defaultProps = {
        center: {lat: 50.449744, lng: 30.44995},
        apiKey: 'AIzaSyDuFF-9TY8VFcE6uXOhhQT1KtWgNhwMoSc',
        zoom: 12,
        placeCoords: {lat: 50.449744, lng: 30.44995}
    };

    render() {
        let {setRaceStatus, toggleMenu, isAuthenticated} = this.props;
        return (
            <div className="wrapper">
                <Sidebar setRaceStatus={setRaceStatus}
                         isAuthenticated={isAuthenticated}
                         close={() => toggleMenu(false)}/>

                <Header/>
                <Carousel/>

                <div className="container big-margin-top big-margin-bot content">
                    <hr/>
                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2>About</h2>
                            <p className="lead">
                                Horse racing is an equestrian performance sport, typically involving two or more horses
                                ridden by jockeys or driven over a set distance for competition. It is one of the most
                                ancient of all sports and its basic premise – to identify which of two or more horses is
                                the fastest over a set course or distance – has remained unchanged since the earliest
                                times.
                            </p>
                        </div>
                        <div className="col-md-5">
                            <img className="img-fluid m-md-auto"
                                 alt="500x500"
                                 src={img4}
                                 data-holder-rendered="true"/>
                        </div>
                    </div>
                    <hr/>

                    <h1>Video about betting</h1>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe width="560"
                                height="315"
                                src="https://www.youtube.com/embed/tRgIt7Zi3os"/>
                    </div>
                    <hr/>

                    <h1>Our location</h1>
                    <div className="map">
                        <GoogleMap
                            bootstrapURLKeys={{key: this.props.apiKey}}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}>
                            <Marker {...this.props.placeCoords}/>
                        </GoogleMap>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        language: state.app.language,
        isAuthenticated: state.client.isAuthenticated,
        isOpen: state.burgerMenu.isOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setRaceStatus: bindActionCreators(setRaceStatus, dispatch),
        toggleMenu: bindActionCreators(toggleMenu, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
