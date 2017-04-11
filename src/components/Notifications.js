/**
 * Created by melalex on 4/11/17.
 */

import React, {PropTypes, Component} from 'react'
import {UncontrolledAlert} from "reactstrap";

export default class Notifications extends Component {
    render() {
        let {errors, info} = this.props;
        return (
            <div>
                {
                    errors && errors.length > 0
                        ?
                        errors.map((e, i) =>
                            <UncontrolledAlert key={i} color="danger">
                                <strong>{e.message}</strong>
                            </UncontrolledAlert>
                        )
                        : null
                }
                {
                    info ? (<UncontrolledAlert color="success"><strong>{info}</strong></UncontrolledAlert>) : null
                }
            </div>
        )
    }
}

Notifications.propTypes = {
    errors: PropTypes.array,
    info: PropTypes.string
};