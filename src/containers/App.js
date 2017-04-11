import React, {Component} from 'react';
import Footer from '../components/Footer'
import Header from './Header'
import Notifications from '../components/Notifications'
import Progress from 'react-progress-2'
import {connect} from "react-redux";
import Sidebar from '../components/Sidebar'
import {bindActionCreators} from "redux";
import {setRaceStatus} from '../actions/Race'

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Progress.Component/>

                <Sidebar setRaceStatus={this.props.setRaceStatus} isAuthenticated={this.props.isAuthenticated}/>

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