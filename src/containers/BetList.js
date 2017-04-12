/**
 * Created by melalex on 4/11/17.
 */

import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getBets} from "../actions/Bet";
import {Table} from "reactstrap";
import Pager from "../components/interface/Pager";
import {I18n} from 'react-redux-i18n'
import Bet from "../components/bet/Bet";
import {CONTENT_TYPE_BET} from "../constants/Content";

class BetList extends React.Component {

    componentDidMount() {
        this.props.getBets(1)
    }

    render() {
        let {content, page, limit, count, contentType} = this.props;
        let rows = content.map((entity, i) => <Bet key={i} entity={entity}/>);
        return (
            rows.length === 0 || contentType !== CONTENT_TYPE_BET
                ?
                <h1 className="text-center no-result-text">{I18n.t('noResult')}</h1>
                :
                <div className="table-margin big-margin-bot">
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
        contentType: state.content.contentType,
        page: state.content.params.page,
        count: state.content.count,
        limit: state.content.limit,
        fetching: state.content.fetching,
        language: state.app.language
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getBets: bindActionCreators(getBets, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BetList)