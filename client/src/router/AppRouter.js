import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from '../router/PrivateRoute';
import PublicRoute from '../router/PublicRoute';
import ProductsContainer from '../components/products/ProductsContainer';
import AccountContainer from '../components/user/account/AccountContainer';
import Header from '../components/header/index';
import MobileSearchOverlay from '../components/overlays/MobileSearchOverlay';
import { closeMobileSearch } from '../store/actions/overlaysActions';

const AppRouter = ({ children, show, closeMobileSearch }) => {
    return (
        <Router>
            <Header />
            <MobileSearchOverlay 
                show={show}
                close={closeMobileSearch}
            />
            <Switch>
                <PublicRoute path='/' component={ProductsContainer} />
                <PrivateRoute path='/account' component={AccountContainer} />
            </Switch>
            {children}
        </Router>
    );
};
const mapState = state => ({
    show: state.overlays.mobileSearch.show
})
const mapDispatch = dispatch => ({
    closeMobileSearch: () => dispatch(closeMobileSearch())
})
export default connect(mapState, mapDispatch)(AppRouter);