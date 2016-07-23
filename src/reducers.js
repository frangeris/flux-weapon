let Actions = require('./actions')

module.exports = function overall(state = {}, action) {
    let mutate = state
    switch (action.type) {
        case Actions.TOKENIZE:
            return Object.assign({}, state, { accessToken: action.token })

        // @deprecated
        case Actions.AUTH:
            return Object.assign({}, state, { user: action.user })

        case Actions.LOGOUT:
            delete mutate.User
            return Object.assign({}, mutate)

        case Actions.INSTANCE:
            mutate[action.key] = action.instance
            return Object.assign({}, state, mutate)

        default:
            return state
    }
}