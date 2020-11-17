export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const login = (user) => dispatch => {
    return SessionApiUtil.login(user)
        .then((user) => dispatch(login(user)))
}

export const logout = () => dispatch => {
    return SessionApiUtil.logout()
        .then((session) => dispatch(logout(session)))
}

export const signup = (user) => dispatch => {
    return SessionApiUtil.signup(user)
        .then((user) => dispatch(signup(user)))
}

export const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const receiveErrors = ([errors]) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}