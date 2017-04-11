import React, {Component} from 'react';
import Footer from '../components/Footer'
import Header from './Header'
import Notifications from '../components/Notifications'
import Progress from 'react-progress-2'
import {connect} from "react-redux";
import Sidebar from '../components/Sidebar'

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Progress.Component/>

                <Sidebar/>

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
        language: state.app.language
    }
}

export default connect(mapStateToProps)(App)