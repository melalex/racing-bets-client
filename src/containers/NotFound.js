/**
 * Created by melalex on 4/10/17.
 */

import React from 'react';
import {Link} from "react-router";
import {connect} from "react-redux";
import {I18n} from 'react-redux-i18n'

class NotFound extends React.Component {
    // TODO: i18n this
    render() {
        return (
            <div className="nb-error">
                <div className="error-code">404</div>
                <h3 className="font-bold">{I18n.t('header404')}</h3>

                <div className="error-desc">
                    {I18n.t('text404')}

                    <ul className="list-inline text-center text-sm">
                        <li className="list-inline-item">
                            <Link to="/" className="text-muted">
                                {I18n.t('home404')}
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/login" className="text-muted">
                                {I18n.t('auth')}
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/register" className="text-muted">
                                {I18n.t('register')}
                            </Link>
                        </li>
                    </ul>
                    <div className="text-center">
                        <span className="text-muted">&copy; Melashchenko, 2017</span>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        language: state.app.language
    }
}

export default connect(mapStateToProps)(NotFound);