import React, {Component} from 'react';
import Footer from '../components/interface/Footer'
import Header from './Header'
import Notifications from '../components/interface/Notifications'
import Progress from 'react-progress-2'
import {connect} from "react-redux";
import Sidebar from '../components/interface/Sidebar'
import {bindActionCreators} from "redux";
import {setRaceStatus} from '../actions/Race'

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Sidebar setRaceStatus={this.props.setRaceStatus} isAuthenticated={this.props.isAuthenticated}/>

                <Header/>
                <Progress.Component/>


                <div className="container big-margin-top content">
                    <Notifications errors={this.props.errors} info={this.props.info}/>

                    {this.props.children}
                </div>

                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        errors: state.app.errors,
        info: state.app.info,
        language: state.app.language,
        isAuthenticated: state.client.isAuthenticated
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setRaceStatus: bindActionCreators(setRaceStatus, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)