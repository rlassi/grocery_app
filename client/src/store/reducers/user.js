const initialState = {
    name: '',
    email: '',
    role: '',
    isAuthenticated: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return { 
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                role: action.payload.role,
                isAuthenticated: true,
                isGuest: false
            };
        case 'LOGOUT_USER':
            return {
                ...state,
                ...initialState
            };
        case 'AUTHENTICATE_USER':
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated
            };
        case 'UPDATE_USER':
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            }
        case 'DELETE_USER':
            return {
                ...initialState
            }
        default:
            return state;
    }
}