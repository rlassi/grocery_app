import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import useWindowWidth from './hooks/useWindowWidth';
import {useTransition, animated} from 'react-spring';
import Styled from './styles';
import AccountContainer from '../user/account/AccountContainer';
import AddProduct from '../products/AddProduct';
import EditProduct from '../products/EditProduct';


const SideDrawer = ({
    sideDrawer: { sideDrawerProps, show, type },
    user,
    productsArr
}) => {
    // rehydrates product state for edit component
    let product = sideDrawerProps ? sideDrawerProps : null;
    if(productsArr.length > 0 && product){
        product = productsArr.find(item => item._id === product._id)
    }

    let windowWidth = useWindowWidth();
    let width, content;

    switch(type) {
        case 'ACCOUNT_OVERVIEW':
            content = <AccountContainer user={user} />
            width = windowWidth >= 599 ? '550px' : `${windowWidth}px`;
            break
        case 'ADD_PRODUCT':
            content = <AddProduct />;
            width = windowWidth >= 599 ? '550px' : `${windowWidth}px`;
            break
        case 'EDIT_PRODUCT':
            content = <EditProduct product={product && product} />;
            width = windowWidth >= 599 ? '550px' : `${windowWidth}px`;
            break
        default:
            content = <AddProduct />;
            width = '550px';
    }


    const transitions = useTransition(show, null, {
        from: { position: 'fixed', top: '0', right: '0', transform: `translate(${width})` },
        enter: { transform: 'translate(0)'},
        leave: { transform: `translate(${width})`},
    });
    const portal = transitions.map(({ item, key, props }) => {
        return item && (
            <animated.div key={key} style={props}>
                <Styled.SideDrawer width={width}>
                    {content}
                </Styled.SideDrawer>
            </animated.div>
    )});
    return ReactDOM.createPortal(portal, document.getElementById('sidedrawer'));
};

const mapState = state => ({
    productsArr: state.products.products,
    user: state.user
})
export default connect(mapState)(SideDrawer);