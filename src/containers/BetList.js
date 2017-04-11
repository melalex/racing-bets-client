/**
 * Created by melalex on 4/11/17.
 */

import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getBets} from "../actions/Bet";
import {Table} from "reactstrap";
import Pager from "../components/Pager";
import {I18n} from 'react-redux-i18n'

class RaceList extends React.Component {

    componentDidMount() {
        this.props.getBets(1)
    }

    render() {
        let {entities, page, limit, count} = this.props;
        let rows = entities.map((entity, i) => <Bet key={i} entity={entity}/>);
        return (
            rows.length === 0
                ?
                <h1 className="text-center no-result-text">{I18n.t('noResult')}</h1>
                :
                <div className="table-margin">
                    <Table hover>
                        <thead>
                        <tr>
                            <td>Id</td>
                            <td>{I18n.t('raceId')}</td>
                            <td>{I18n.t('betType')}</td>
                            <td>{I18n.t('betStatus')}</td>
                            <td>{I18n.t('betSize')}</td>
                            <td>{I18n.t('participants')}</td>
                        </tr>
                        </thead>
                        <tbody>
                        {rows}
                        </tbody>
                    </Table>
                    <Pager page={page} count={count} limit={limit} changePage={this.props.getBets}/>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        content: state.content.content,
        page: state.content.page,
        count: state.content.count,
        limit: state.content.limit,
        fetching: state.content.fetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getBets: bindActionCreators(getBets, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RaceList)