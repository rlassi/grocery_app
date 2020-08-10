import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchLoginUser } from '../../store/actions/userActions';
import { openModal, closeModal } from '../../store/actions/overlaysActions';
import Styled from './styles';
import CloseButton from '../styled-components/UI/CloseButton';
import UI from '../styled-components/UI/styles';
import Grid from '../styled-components/UI/GridStyles';

const Login = ({ closeModal, openModal, loginUser, error }) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleGuest = () => {
        closeModal();
    };
    
    const handleCreate = () => {
        closeModal();
        openModal({type: 'CREATE_USER', show: true});
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        loginUser({email, password, closeModal});
    };

    return (
        <Styled.Card>
            <CloseButton bgColor="black" onClick={closeModal} />
            <Grid.Flex numColsSm="1">
                <h2>Sign In</h2>
                {error && <span style={{ color: 'red' }}>{error}</span>}
                <UI.Form onSubmit={handleOnSubmit}>
                    <label>Email</label>
                    <UI.InputSignIn
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <UI.InputSignIn
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <UI.ButtonPrimary margin="2rem 0 0 !important" alignSelf="flex-start">
                        Sign In
                    </UI.ButtonPrimary>
                </UI.Form>
                <Grid.Flex justify="space-between">
                    <Styled.ButtonPlain onClick={handleCreate}>   
                        Create an Account
                    </Styled.ButtonPlain>
                    <Styled.ButtonPlain onClick={handleGuest}>   
                        Continue as Guest
                    </Styled.ButtonPlain>
                </Grid.Flex>
            </Grid.Flex>
        </Styled.Card>
    )
};

const mapState = state => ({
    error: state.error.error
})

const mapDispatch = dispatch => ({
    loginUser: (user) => dispatch(fetchLoginUser(user)),
    openModal: (obj) => dispatch(openModal(obj)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapState, mapDispatch)(Login);