import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLogout } from '../../../store/actions/userActions';
import { openModal, closeModal, openSideDrawer } from '../../../store/actions/overlaysActions';
import Styled from './styles';
import UI from '../../styled-components/UI/styles';

const AppNavLinks = ({ 
    isAuthenticated, 
    logout,
    openModal,
    closeModal,
    openSideDrawer
}) => {
    const handleLogout = () => {
        logout();
        closeModal();
    };
    return (
        <Styled.NavLinks>
            <Styled.NavLink>
                <Link to="/products">
                    Products
                </Link>
            </Styled.NavLink>
            { isAuthenticated && 
                <UI.ButtonNavLink
                    onClick={() => openSideDrawer({
                        type: 'ACCOUNT_OVERVIEW',
                        show: true
                    })}
                >
                    Account
                </UI.ButtonNavLink>
            }
            <UI.ButtonNavLink 
                onClick={isAuthenticated ? handleLogout : (() => openModal({type: 'SIGN_IN', show: true}))}
            >
                {isAuthenticated ? 'Sign Out' : 'SIGN IN'}
            </UI.ButtonNavLink>
        </Styled.NavLinks>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(fetchLogout()),
    openModal: (obj) => dispatch(openModal(obj)),
    closeModal: () => dispatch(closeModal()),
    openSideDrawer: (obj) => dispatch(openSideDrawer(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavLinks);