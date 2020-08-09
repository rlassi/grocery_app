import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchCreateUser } from '../../store/actions/userActions';
import { openModal, closeModal } from '../../store/actions/overlaysActions';
import Styled from './styles';
import CloseButton from '../styled-components/UI/CloseButton';
import UI from '../styled-components/UI/styles';
import Grid from '../styled-components/UI/GridStyles';

const CreateUser = ({ createUser, openModal, closeModal }) => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ error, setError ] = useState(false)
    const errorStyles = { color: 'red', fontSize: '1rem' }

    const handleCreateUser = () => {
        createUser({email, password, name});
        closeModal();
    };

    const handleGuest = () => {
        setError(false);
        closeModal();
    };

    const handleLogin = () => {
        closeModal();
        openModal({type: 'SIGN_IN', show: true})
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError(true);
        } else {
            handleCreateUser(closeModal);
        };
    };

    return (
        <Styled.Card>
            <CloseButton bgColor="black" onClick={closeModal} />
            <Grid.Flex numColsSm="1">
                <h2>Create Account</h2>
                <UI.Form onSubmit={handleOnSubmit} margin="1rem 0">
                    <label>Name</label>
                    <UI.InputSignIn
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <label>Confirm Password</label>
                    <UI.InputSignIn
                        type="password"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    { error && <div style={errorStyles}>Please make sure password is typed correctly!</div>}
                    <UI.ButtonPrimary margin="2rem 0 0 !important" alignSelf="flex-start">
                        Create User
                    </UI.ButtonPrimary>
                </UI.Form>
                <Grid.Flex justify="space-between">
                    <Styled.ButtonPlain onClick={handleLogin}>   
                        Sign In
                    </Styled.ButtonPlain>
                    <Styled.ButtonPlain onClick={handleGuest}>   
                        Continue as Guest
                    </Styled.ButtonPlain>
                </Grid.Flex>
            </Grid.Flex>
        </Styled.Card>
    );
};

const mapDispatchToProps = dispatch => ({
    createUser: (user) => dispatch(fetchCreateUser(user)),
    openModal: (obj) => dispatch(openModal(obj)),
    closeModal: () => dispatch(closeModal())
})

export default connect(null, mapDispatchToProps)(CreateUser);