/**
 * Created by melalex on 4/11/17.
 */

import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getRaces} from "../actions/Race";
import {goToBettingPage} from "../actions/Bet";
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
        this.props.getRaces({page: 1, status: this.props.params.status})
    }

    componentWillReceiveProps(nextProps) {
        if (!RaceList.isParamsEquals(nextProps.params, this.props.params)) {
            this.props.getRaces(nextProps.params)
        }
    }

    // /api/race?status=%s&racecourse=%d&horse=%d&trainer=%d&jockey=%d&name=%s&date=%d&page=%d

    static isParamsEquals(param1, param2) {
        return param1.status === param2.status
            && param1.racecourse === param2.racecourse
            && param1.jockey === param2.jockey
            && param1.horse === param2.horse
            && param1.trainer === param2.trainer
            && param1.name === param2.name
            && param1.date === param2.date
            && param1.page === param2.page
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
        let {content, params, limit, count, goToBettingPage} = this.props;

        let rows = content.map((entity, i) => <Race key={i}
                                                    entity={entity}
                                                    onGetByParticipant={this.onGetByParticipant}
                                                    onFilter={this.onFilter}
                                                    onBetting={goToBettingPage}/>);
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
        language: state.app.language,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getRaces: bindActionCreators(getRaces, dispatch),
        goToBettingPage: bindActionCreators(goToBettingPage, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RaceList)