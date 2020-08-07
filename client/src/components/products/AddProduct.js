import React from 'react';
import { connect } from 'react-redux';
import { fetchAddProduct } from '../../store/actions/productActions';
import { closeSideDrawer } from '../../store/actions/overlaysActions';
import ProductForm from './ProductForm';

const AddProduct = ({ addProduct, categories, closeSideDrawer }) => {
    const handleAddProduct = (product) => {
        addProduct(product);
        closeSideDrawer();
    };

    return (
        <ProductForm closeSideDrawer={closeSideDrawer} categories={categories} onSubmit={handleAddProduct} />
    )
};
const mapState = state => ({
    categories: state.products.categories
})
const mapDispatch = dispatch => ({
    addProduct: (product) => dispatch(fetchAddProduct(product)),
    closeSideDrawer: () => dispatch(closeSideDrawer())
})
export default connect(mapState, mapDispatch)(AddProduct);