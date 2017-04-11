/**
 * Created by melalex on 4/10/17.
 */

import React from 'react';
import {Link} from "react-router";
import {connect} from "react-redux";

class NotFound extends React.Component {
    // TODO: i18n this
    render() {
        return (
            <div className="nb-error">
                <div className="error-code">404</div>
                <h3 className="font-bold">We couldn't find the page..</h3>

                <div className="error-desc">
                    Sorry, but the page you are looking for was either not found or does not exist. <br/>
                    Try refreshing the page or click the button below to go back to the Homepage.

                    <ul className="list-inline text-center text-sm">
                        <li className="list-inline-item">
                            <Link to="/" className="text-muted">
                                Go to App
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/login" className="text-muted">
                                Login
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/register" className="text-muted">
                                Register
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