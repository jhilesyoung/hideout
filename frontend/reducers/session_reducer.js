const { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } = require("../actions/session_actions");

const sessionReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[id]: action.currentUser.id})
        case LOGOUT_CURRENT_USER:
            return Object.assign({}, state, {id: null})
        default:
            return state;
    }
}

export default sessionReducer;