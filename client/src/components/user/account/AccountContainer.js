import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { closeSideDrawer, openModal, closeModal } from '../../../store/actions/overlaysActions'
import { fetchUpdateUser, fetchLogoutAll, fetchDeleteAccount } from '../../../store/actions/userActions';
import AccountForm from './AccountForm';
import Styled from './styles';
import UI from '../../styled-components/UI/styles';
import CloseButton from '../../styled-components/UI/CloseButton';


const AccountContainer = ({ 
    user, 
    openModal,
    closeSideDrawer,
    closeModal,
    updateUser,
    logoutAll,
    error,
    deleteAccount
}) => {
    const { name, email } = user;
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        if(error) setEdit(true)
    }, [error])

    const handleSubmit = (updates) => {
        updateUser(updates);
        setEdit(false)
    }

    const handleLogoutAll = () => {
        logoutAll();
        closeSideDrawer();
    }

    return (
        <Styled.AccountContainer>
            <CloseButton onClick={() => closeSideDrawer()} />
            <h1>Account Details</h1>
            {!edit && 
                <React.Fragment>
                    <label>Name</label>
                    <h3>{name}</h3>
                    <label>Email</label>
                    <h4>{email}</h4>
                    <UI.ButtonPrimary
                        onClick={() => setEdit(!edit)}
                        margin=".5rem .5rem 0 0"
                    >
                        Edit Account Details
                    </UI.ButtonPrimary>
                    <UI.ButtonPrimary
                        onClick={handleLogoutAll}
                    >
                        Sign Out All Sessions
                    </UI.ButtonPrimary>
                </React.Fragment>
            }
            {edit && 
                <AccountForm
                    setEdit={setEdit}
                    user={user} 
                    onSubmit={handleSubmit} 
                    mongoError={error} 
                    deleteAccount={deleteAccount}
                    closeSideDrawer={closeSideDrawer}
                    openModal={openModal}
                    closeModal={closeModal}
                />
            }
        </Styled.AccountContainer>
    );
};

const mapState = state => ({
    error: state.error.error
})
const mapDispatch = dispatch => ({
    closeSideDrawer: () => dispatch(closeSideDrawer()),
    updateUser: (updates) => dispatch(fetchUpdateUser(updates)),
    logoutAll: () => dispatch(fetchLogoutAll()),
    deleteAccount: () => dispatch(fetchDeleteAccount()),
    openModal: (obj) => dispatch(openModal(obj)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapState, mapDispatch)(AccountContainer);