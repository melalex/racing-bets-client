import React, {Component} from 'react';
import Footer from '../components/interface/Footer'
import Header from './Header'
import Notifications from '../components/interface/Notifications'
import Progress from 'react-progress-2'
import {connect} from "react-redux";
import Sidebar from '../components/interface/Sidebar'
import {bindActionCreators} from "redux";
import {setRaceStatus} from '../actions/Race'
import {action as toggleMenu} from 'redux-burger-menu';
import {requestBalance} from "../actions/Bet";
import Carousel from "../components/interface/Carousel";

class App extends Component {

    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.requestBalance(this.props.id)
        }
    }

    render() {
        let {setRaceStatus, toggleMenu, isAuthenticated, errors, info} = this.props;
         return (
            <div className="wrapper">
                <Sidebar setRaceStatus={setRaceStatus}
                         isAuthenticated={isAuthenticated}
                         close={() => toggleMenu({isOpen: false})}/>

                <Header/>
                <Progress.Component/>


                <div className="container big-margin-top content">
                    <Carousel/>

                    <Notifications errors={errors} info={info}/>

                    {this.props.children}
                </div>

                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        id: state.client.id,
        errors: state.app.errors,
        info: state.app.info,
        language: state.app.language,
        isAuthenticated: state.client.isAuthenticated
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setRaceStatus: bindActionCreators(setRaceStatus, dispatch),
        toggleMenu: bindActionCreators(toggleMenu, dispatch),
        requestBalance: bindActionCreators(requestBalance, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)