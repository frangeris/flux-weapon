module.exports = {
    INSTANCE(state, mutation) {
        state[mutation.key] = mutation.instance
    }
}