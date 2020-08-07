export const openModal = (obj) => ({
    type: 'OPEN_MODAL',
    payload: obj
})

export const closeModal = () => ({
    type: 'CLOSE_MODAL'
})

export const openSideDrawer = (obj) => {
    return {
        type: 'OPEN_SIDEDRAWER',
        payload: obj
    }
}

export const closeSideDrawer = () => ({
    type: 'CLOSE_SIDEDRAWER'
})

export const openMobileSearch = () => ({
    type: 'OPEN_MOBILE_SEARCH'
})

export const closeMobileSearch = () => ({
    type: 'CLOSE_MOBILE_SEARCH'
})
