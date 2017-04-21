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

class About extends React.Component {
    render() {
        let {setRaceStatus, toggleMenu, isAuthenticated} = this.props;

        return (
            <div className="wrapper">
                <Sidebar setRaceStatus={setRaceStatus}
                         isAuthenticated={isAuthenticated}
                         close={() => toggleMenu({isOpen: false})}/>

                <Header/>
                <Carousel/>

                <div className="container big-margin-top big-margin-bot content">
                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">First featurette heading.</h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                                porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl
                                consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5">
                            <img className="featurette-image img-fluid mx-auto"
                                 data-src="holder.js/500x500/auto"
                                 alt="500x500"
                                 style={{width: '500px', height: '500px'}}
                                 src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15b8f27e7d9%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15b8f27e7d9%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22187%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                 data-holder-rendered="true"/>
                        </div>
                        <hr/>
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
        isAuthenticated: state.client.isAuthenticated
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setRaceStatus: bindActionCreators(setRaceStatus, dispatch),
        toggleMenu: bindActionCreators(toggleMenu, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
