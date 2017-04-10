/**
 * Created by melalex on 4/10/17.
 */

import getContent from './getContent'

function getRaces(params) {
    return getContent('/api/race', params)
}

export default {getRaces}