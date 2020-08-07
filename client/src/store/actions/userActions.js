import { client } from './helpers';

//async actions

export const fetchCreateUser = user => {
    return dispatch => {
        return client('/users', 'POST', user)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data.token);
            dispatch(loginUser({email: data.user.email, name: data.user.name}))
        }).catch(e => console.log(e));
    };
};

export const fetchLoginUser = loginObj => {
    const { email, password, closeModal } = loginObj;
    const body = {email, password};
    return dispatch => {
        return client('/users/login', 'POST', body)
        .then(res => res.json())
        .then(data => {
            try {
                if(data.user) {
                    localStorage.setItem('token', data.token);
                    dispatch(loginUser(data.user));
                    dispatch(closeModal());
                } else {
                    throw (data.error);
                }
            } catch(e) {
                dispatch(setLoginError(e))
            }
        })
    }
};

// Also validates user session
export const fetchProfile = () => {
    return dispatch => {
        return client('/users/me', 'GET', null, true)
        .then(res => res.json())
        .then((data) => {
            try{
                if(data.message) {
                    dispatch(authenticateUser(!!data.message));
                } else {
                    throw(data.error)
                }
            }catch(e) {
                localStorage.removeItem('token');
                dispatch(authenticateUser(false));
            }
        })
    };
};

export const fetchUpdateUser = (updates) => {
    const body = updates;
    return dispatch => {
        return client('/users/me', 'PATCH', body, true)
        .then(res => res.json())
        .then(res => {
            try{
                if(res.status === 'error') {
                    throw(res.error);
                } else if(res.status === 'ok'){
                    dispatch(updateUser(res.data));
                }
            }catch(e){
                dispatch(setUpdateUserError(e));
            }
        })
    }
}

export const fetchLogout = () => {
    return dispatch => {
        return client('/users/logout', 'POST', null, true)
        .then(() => {
            dispatch(logoutUser())
            localStorage.removeItem('token');
        }).catch(e => console.log(e));
    };
};

export const fetchDeleteAccount = () => {
    return dispatch => {
        return client('/users/me', 'DELETE', null, true)
        .then(() => {
            dispatch(deleteUser())
            localStorage.removeItem('token');
        }).catch(e => console.log(e));
    };
};

export const fetchLogoutAll = () => {
    return dispatch => {
        return client('/users/logoutAll', 'POST', null, true)
        .then(() => {
            dispatch(logoutUser())
            localStorage.removeItem('token');
        }).catch(e => console.log(e));
    };
};

// actions
const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
});

const logoutUser = () => ({
    type: 'LOGOUT_USER'
});

const authenticateUser = data => ({
    type: 'AUTHENTICATE_USER',
    payload: {
        isAuthenticated: data
    }
});

const updateUser = data => ({
    type: 'UPDATE_USER',
    payload: data
})

const deleteUser = () => ({
    type: 'DELETE_USER'
})

//errors
const setLoginError = e => ({
    type: 'SET_LOGIN_ERROR',
    error: e
})

const setUpdateUserError = e => ({
    type: 'SET_UPDATE_USER_ERROR',
    error: e
})