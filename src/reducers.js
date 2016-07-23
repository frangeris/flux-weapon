import {
    TOKENIZE,
    AUTH,
    INSTANCE,
    LOGOUT,
 } from './actions'

export function overall(state = {}, action) {
    let mutate = state
    switch (action.type) {
        case TOKENIZE:
            return Object.assign({}, state, { accessToken: action.token })

        // @deprecated
        case AUTH:
            return Object.assign({}, state, { user: action.user })

        case LOGOUT:
            delete mutate.User
            return Object.assign({}, mutate)

        case INSTANCE:
            mutate[action.key] = action.instance
            return Object.assign({}, state, mutate)

        default:
            return state
    }
}