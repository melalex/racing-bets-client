/**
 * Created by melalex on 4/11/17.
 */

import React, {PropTypes, Component} from 'react'

export default class Filter extends Component {
    render() {
        return (
            null
        )
    }
}

Filter.propTypes = {
    params: PropTypes.object.isRequired,
    onFilter: PropTypes.func.isRequired,
};