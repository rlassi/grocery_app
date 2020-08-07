import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../store/actions/productActions';
import { openSideDrawer, openModal } from '../../store/actions/overlaysActions';
import ProductCard from './ProductCard';
import UI from '../styled-components/UI/styles';
import Grid from '../styled-components/UI/GridStyles';
import Styled from './styles';

const ProductsContainer = ({ 
    products,
    openSideDrawer,
    isAuthenticated,
    openModal,
    getCategories,
}) => {
    useEffect(() => {
        getCategories();
    }, []);

    return (
        <Grid.Container 
            fullWidth 
            noGutters
            padding="1rem"
        >
            <Styled.ProductsNav>
                <h1>Products</h1>
                <UI.ButtonBadge
                    onClick={() => isAuthenticated ? openSideDrawer({
                            type: 'ADD_PRODUCT',
                            show: true
                        }) : openModal({type: 'SIGN_IN', show: true})
                    }
                    diameter="40"
                >
                    +
                </UI.ButtonBadge>
            </Styled.ProductsNav>
            
            <Grid.Flex justify="center" numColsSm="1" numColsMd="3" numColsLg="5">
                {products.map(p => {
                    return (
                        <ProductCard p={p} key={p.name} openSideDrawer={openSideDrawer} />
                    )
                })}
            </Grid.Flex>
        </Grid.Container>
    )
};

const mapStateToProps = state => ({
    products: state.products.products,
    isAuthenticated: state.user.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(fetchCategories()),
    openSideDrawer: (obj) => dispatch(openSideDrawer(obj)),
    openModal: (obj) => dispatch(openModal(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);