// register a token
const TOKENIZE = 'TOKENIZE'
function tokenize(token) {
    return {
        type: TOKENIZE,
        token
    }
}

// keep reference of the user logged
const AUTH = 'AUTH'
function auth(user) {
    return {
        type: AUTH,
        user
    }
}

// loggout the user
const LOGOUT = 'LOGOUT'
function logout() {
    return {
        type: LOGOUT
    }
}

// keep reference of instances
const INSTANCE = 'INSTANCE'
function instance(instance, name = null) {
    return {
        type: INSTANCE,
        key: name || instance.constructor.name,
        instance
    }
}

export {
    TOKENIZE, tokenize,
    AUTH, auth,
    INSTANCE, instance,
    LOGOUT, logout,
}