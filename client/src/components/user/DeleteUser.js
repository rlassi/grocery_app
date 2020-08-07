import React from 'react';
import Styled from './styles';
import UI from '../styled-components/UI/styles';

const DeleteUser = ({ deleteAccount, closeModal, closeSideDrawer }) => {
    const handleClick = () => {
        deleteAccount();
        closeModal();
        closeSideDrawer();
    }

    return (
        <Styled.DeleteCard>
            <h2>Delete Account?</h2>
            <UI.ButtonSecondary
                onClick={closeModal}
                margin=".5rem 0"
            >
                Cancel
            </UI.ButtonSecondary>
            <UI.ButtonWarning
                onClick={handleClick}
                margin=".5rem 0"
            >
                Confirm Delete Account
            </UI.ButtonWarning>
        </Styled.DeleteCard>
    )
}

export default DeleteUser;