import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchUpdateProduct, fetchDeleteProduct } from '../../store/actions/productActions';
import { openModal, closeSideDrawer } from '../../store/actions/overlaysActions';
import ProductForm from './ProductForm';
import Styled from './styles';
import CloseButton from '../styled-components/UI/CloseButton';
import UI from '../styled-components/UI/styles';

const EditProduct = ({ 
    product: p, 
    updateProduct, 
    deleteProduct, 
    categories,
    isAuthenticated,
    openModal,
    closeSideDrawer
}) => {
    const [edit, setEdit] = useState(false);
    const onSubmit = (product) => {
        updateProduct(product);
    }

    const handleDelete = () => {
        isAuthenticated ? deleteProduct(p._id) : openModal({type: 'SIGN_IN', show: true})
        closeSideDrawer();
    }
    return (
        <React.Fragment>
            <Styled.EditProduct show={!edit}>
                <CloseButton onClick={closeSideDrawer} top="2rem"/>
                {!edit && p && (
                    <React.Fragment>
                        <h1>{p.name}</h1>
                        <img src={p.image} alt={p.name} />
                        <ul>
                            <li><strong>Category: </strong>{p.category.name}</li>
                            <li><strong>Description: </strong>{p.description}</li>
                            <li><strong>Price: </strong>{p.price}</li>
                            <li><strong>Stock: </strong>{p.stock}</li>
                        </ul>
                        <UI.ButtonPrimary 
                            onClick={() => isAuthenticated ? 
                                setEdit(!edit) : openModal({
                                    type: 'SIGN_IN', show: true
                            })}
                            margin="0 .5rem 0 0"
                        >
                            Edit Product
                        </UI.ButtonPrimary>
                        <UI.ButtonPrimary 
                            onClick={handleDelete}
                        >
                            Delete Product
                        </UI.ButtonPrimary>
                    </React.Fragment>
                )}
            </Styled.EditProduct>
            {edit && 
                <ProductForm 
                    closeSideDrawer={closeSideDrawer} 
                    product={p} 
                    categories={categories} 
                    onSubmit={onSubmit}
                    setEdit={setEdit}
                />
            }
        </React.Fragment>
    )
};
const mapState = state => ({
    categories: state.products.categories,
    isAuthenticated: state.user.isAuthenticated
})
const mapDispatch = dispatch => ({
    updateProduct: (product) => dispatch(fetchUpdateProduct(product)),
    deleteProduct: (id) => dispatch(fetchDeleteProduct(id)),
    openModal: (obj) => dispatch(openModal(obj)),
    closeSideDrawer: () => dispatch(closeSideDrawer())
})
export default connect(mapState, mapDispatch)(EditProduct);