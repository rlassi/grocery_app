import React from 'react';
import ReactDOM from 'react-dom';

import SignIn from '../user/SignIn';
import CreateUser from '../user/CreateUser';
import DeleteUser from '../user/DeleteUser';
import Styled from './styles';

const ModalContainer = ({ modal }) => {
    let content;
    const { modalProps } = modal;
    switch(modal.type){
        case 'SIGN_IN':
            content = <SignIn />;
            break;
        case 'CREATE_USER':
            content = <CreateUser />;
            break;
        case 'CONFIRM_DELETE_ACCOUNT':
            content = 
                <DeleteUser 
                    deleteAccount={modalProps.deleteAccount}
                    closeSideDrawer={modalProps.closeSideDrawer}
                    closeModal={modalProps.closeModal}
                />
    }

    const portal = (
        <Styled.ModalContent>
            {content}
        </Styled.ModalContent>
    )

    return ReactDOM.createPortal(portal, document.getElementById('login-modal'));
};

export default ModalContainer;