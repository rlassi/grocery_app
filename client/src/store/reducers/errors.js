const initialState = {
    error: null
}

const errorReducer = (state = initialState, action) => {
    const { error } = action;
    if(error){
        return {
            error: error
        }
    }
    return initialState;
}

export default errorReducer;