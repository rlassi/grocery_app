const initialState = {
    products: [],
    categories: [],
    productQueries: {}
}

const products = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_PRODUCTS':
            return {
                categories: [...state.categories],
                products: action.payload,
                productQueries: {...state.productQueries}
            };
        case 'ADD_PRODUCT':
            const updated = state.products.slice();
            updated.push(action.payload);
            return {
                ...state,
                products: updated
            }
        case 'UPDATE_PRODUCT':
            const newState = state.products.slice();
            const update = newState.findIndex(p => p._id === action.payload._id);
            newState[update] = action.payload;
            return { 
                ...state, 
                products: newState 
            };
        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(p => p._id !== action.payload) 
            };
        case 'LOAD_CATEGORIES':
            return { 
                ...state,
                categories: action.payload
            }
        case 'ADD_CATEGORY':
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case 'CHANGE_QUERY_CATEGORY':
            return {
                ...state,
                productQueries: {
                    ...state.productQueries,
                    category: action.payload
                }
            }
        case 'CHANGE_QUERY_NAME':
            return {
                ...state,
                productQueries: {
                    ...state.productQueries,
                    name: action.payload
                }
            }
        default:
            return state
    }
}

export default products;