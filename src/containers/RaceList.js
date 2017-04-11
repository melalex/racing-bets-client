/**
 * Created by melalex on 4/11/17.
 */

import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getRaces} from "../actions/Race";
import {I18n} from 'react-redux-i18n'
import Pager from "../components/interface/Pager";
import Race from "../components/race/Race";
import Filter from "../components/race/Filter";
import {FINISHED} from "../constants/Race"

class RaceList extends React.Component {
    constructor(props) {
        super(props);

        this.onFilter = this.onFilter.bind(this);
        this.onGetPage = this.onGetPage.bind(this);
        this.onGetByParticipant = this.onGetByParticipant.bind(this);
    }

    componentDidMount() {
        this.props.getRaces({page: 1, status: this.props.raceStatus})
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.raceStatus !== this.props.raceStatus) {
            this.props.getRaces({page: 1, status: this.props.raceStatus})
        }
    }

    onFilter(params) {
        this.props.getRaces({...params, page: 1, status: this.props.raceStatus});
    }

    onGetPage(page) {
        this.props.getRaces({...this.props.params, page: page})
    }

    onGetByParticipant(params) {
        this.props.getRaces({...params, page: 1, status: FINISHED})
    }

    render() {
        let {content, params, limit, count} = this.props;

        let rows = content.map((entity, i) => <Race key={i}
                                                    entity={entity}
                                                    onGetByParticipant={this.onGetByParticipant}
                                                    onFilter={this.onFilter}/>);
        return (
            <div className="table-margin">
                <Filter params={params} onFilter={this.onFilter}/>

                {
                    rows.length === 0 ? (
                        <h1 className="text-center no-result-text">{I18n.t('noResult')}</h1>
                    ) : (
                        <div>
                            {rows}
                            <Pager page={params.page} count={count} limit={limit} changePage={this.onGetPage}/>
                        </div>
                    )
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        content: state.content.content,
        params: state.content.params,
        count: state.content.count,
        limit: state.content.limit,
        fetching: state.content.fetching,
        raceStatus: state.app.raceStatus,
        language: state.app.language,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getRaces: bindActionCreators(getRaces, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RaceList)