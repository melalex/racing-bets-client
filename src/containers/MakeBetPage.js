/**
 * Created by melalex on 4/12/17.
 */

import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {makeBet, getOdds, clearOdds} from "../actions/Bet";
import {Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import ShowBet from '../components/bet/ShowBet'
import classnames from "classnames";


class MakeBetPage extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.props.clearOdds();
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        let {race, makeBet, getOdds, odds, id} = this.props;
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '1'})}
                                 onClick={() => { this.toggle('1'); }}>
                            Show
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '2'})}
                                 onClick={() => { this.toggle('2'); }}>
                            Place
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '3'})}
                                 onClick={() => { this.toggle('3'); }}>
                            Win
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '4'})}
                                 onClick={() => { this.toggle('4'); }}>
                            Quinella
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '5'})}
                                 onClick={() => { this.toggle('5'); }}>
                            Exacta
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '6'})}
                                 onClick={() => { this.toggle('6'); }}>
                            Trifecta
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '7'})}
                                 onClick={() => { this.toggle('7'); }}>
                            Superfecta
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <ShowBet race={race} getOdds={getOdds} makeBet={makeBet} odds={odds} id={id}/>
                    </TabPane>
                    <TabPane tabId="2">

                    </TabPane>
                    <TabPane tabId="3">

                    </TabPane>
                    <TabPane tabId="4">

                    </TabPane>
                    <TabPane tabId="5">

                    </TabPane>
                    <TabPane tabId="6">

                    </TabPane>
                    <TabPane tabId="7">

                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        race: state.bet.targetRace,
        odds: state.bet.odds,
        id: state.client.id,
        language: state.app.language
    }
}

function mapDispatchToProps(dispatch) {
    return {
        makeBet: bindActionCreators(makeBet, dispatch),
        getOdds: bindActionCreators(getOdds, dispatch),
        clearOdds: bindActionCreators(clearOdds, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeBetPage)