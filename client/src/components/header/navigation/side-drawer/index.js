import React from 'react';
import { connect } from 'react-redux';
import { fetchLogout } from '../../../../store/actions/userActions';
import { openModal, openSideDrawer } from '../../../../store/actions/overlaysActions';
import Styled from './styles';
import Grid from '../../../styled-components/UI/GridStyles';
import UI from '../../../styled-components/UI/styles';

const NavSideDrawer = ({
    isAuthenticated,
    userName,
    openSideDrawer,
    setShow,
    logout,
    openModal
}) => {
    const handleLogin = () => {
        setShow(false);
        openModal({type: 'SIGN_IN', show: true})
    };
    const handleAccountClick = () => {
        setShow(false);
        openSideDrawer({
            type: 'ACCOUNT_OVERVIEW',
            show: true
        }); 
    }
    return (
        <Grid.Flex direction="column" height="100%" padding="3rem 2rem">
            <h2>Welcome{userName ? `, ${userName}!` : '!'}</h2>
            <Styled.MenuList>
                {isAuthenticated &&
                    <Styled.MenuListItem>
                        <UI.ButtonNavLink
                            onClick={handleAccountClick}
                        >
                            Account
                        </UI.ButtonNavLink>
                    </Styled.MenuListItem>
                }
                <Styled.MenuListItem>
                    <UI.ButtonNavLink 
                        onClick={isAuthenticated ? logout : handleLogin}
                    >
                        {isAuthenticated ? 'Sign Out' : 'SIGN IN'}
                    </UI.ButtonNavLink>
                </Styled.MenuListItem>
            </Styled.MenuList>
        </Grid.Flex>
    );
};

const mapState = state => ({
    isAuthenticated: state.user.isAuthenticated,
    userName: state.user.name
});

const mapDispatch = dispatch => ({
    logout: () => dispatch(fetchLogout()),
    openSideDrawer: (obj) => dispatch(openSideDrawer(obj)),
    openModal: (obj) => dispatch(openModal(obj))
});

export default connect(mapState, mapDispatch)(NavSideDrawer);