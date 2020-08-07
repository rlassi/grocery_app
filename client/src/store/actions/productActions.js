import { client } from './helpers';

// async actions

export const fetchProducts = (queries) => {
    let url;
    if(!queries){
        url = '/products'
    } else {
        let category = queries.category ? `category=${queries.category}` : '';
        let and = queries.category ? '&' : '';
        let name = queries.name ? `${and}name=${queries.name}` : '';
        url = `/products?${category}${name}`
    }
    
    return dispatch => {
        return fetch(url)
        .then(res => res.json())
        .then(data => {
            dispatch(loadProducts(data.products));
        }).catch((e) => console.log(e));
    };
};

export const fetchCategories = () => {
    return dispatch => {
        return fetch('/products/category')
        .then(res => res.json())
        .then(data => {
            dispatch(loadCategories(data.categories));
        }).catch((e) => console.log(e));
    };
};

export const fetchAddProduct = product => {
    const body = product;

    return dispatch => {
        return client('/products', 'POST', body, true)
        .then(res => res.json())
        .then(product => {
            dispatch(addProduct(product))
        }).catch((e) => console.log(e));
    }
};

export const fetchAddCategory = category => {
    const body = category;
    return dispatch => {
        return client('/products/category', 'POST', body, true)
        .then(res => res.json())
        .then(category => {
            dispatch(addCategory(category))
        }).catch((e) => console.log(e));
    }
};

export const fetchUpdateProduct = product => {
    const body = product;
    return dispatch => {
        return client('/products', 'PUT', body, true)
        .then(res => res.json())
        .then(product => {
            dispatch(updateProduct(product))
        }).catch((e) => console.log(e));
    }
};

export const fetchDeleteProduct = _id => {
    const body = { _id };

    return dispatch => {
        return client('/products', 'DELETE', body, true)
        .then(dispatch(deleteProduct(_id)))
        .catch(e => console.log(e))
    }
}

// actions

const loadProducts = products => ({
    type: 'LOAD_PRODUCTS',
    payload: products
});

const addProduct = product => ({
    type: 'ADD_PRODUCT',
    payload: product
})

const updateProduct = product => ({
    type: 'UPDATE_PRODUCT',
    payload: product
})

const deleteProduct = _id => ({
    type: 'DELETE_PRODUCT',
    payload: _id
})

const loadCategories = categories => ({
    type: 'LOAD_CATEGORIES',
    payload: categories
})

const addCategory = category => ({
    type: 'ADD_CATEGORY',
    payload: category
})

export const updateQueryCategory = category => ({
    type: 'CHANGE_QUERY_CATEGORY',
    payload: category
})

export const updateQueryName = name => ({
    type: 'CHANGE_QUERY_NAME',
    payload: name
})