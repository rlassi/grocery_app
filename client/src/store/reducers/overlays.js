const initialState = {
    modal: {
        type: null,
        show: false,
        modalProps: {}
    },
    sideDrawer: {
        type: '',
        show: false,
        sideDrawerProps: {}
    },
    mobileSearch: { show: false },
};

const overlaysReducer = (state = initialState, action) => {
    switch(action.type){
        case 'OPEN_MODAL':
            return {
                sideDrawer: {...state.sideDrawer},
                modal: {...action.payload},
                mobileSearch: {...state.mobileSearch}
            }
        case 'CLOSE_MODAL':
            return {
                sideDrawer: {...state.sideDrawer},
                modal: {...initialState.modal},
                mobileSearch: {...state.mobileSearch}
            }
        case 'OPEN_SIDEDRAWER':
            return {
                modal: {...state.modal},
                sideDrawer: action.payload,
                mobileSearch: {...state.mobileSearch}
            }
        case 'CLOSE_SIDEDRAWER':
            return {
                modal: {...state.modal},
                sideDrawer: {
                    ...state.sideDrawer,
                    show: false,
                    isHamburgerClick: false
                },
                mobileSearch: {...state.mobileSearch}
            }
        case 'OPEN_MOBILE_SEARCH':
            return {
                modal: {...state.modal},
                sideDrawer: {...state.sideDrawer},
                mobileSearch: { show: true }
            }
        case 'CLOSE_MOBILE_SEARCH':
            return {
                modal: {...state.modal},
                sideDrawer: {...state.sideDrawer},
                mobileSearch: { show: false }
            }
        default:
            return state
    }
};

export default overlaysReducer;