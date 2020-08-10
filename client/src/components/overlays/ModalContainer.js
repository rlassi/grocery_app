import React from 'react';
import ReactDOM from 'react-dom';
import { useTransition, animated } from 'react-spring';

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

    const transitions = useTransition(modal.show, null, {
        from: { position: 'fixed', opacity: '0', top: '60%', left: '50%', transform: `translate(-50%, -50%)` },
        enter: { opacity: '1', top: '50%' },
        leave: { top: '60%', opacity: '0' },
    });
    const portal = transitions.map(({ item, key, props }) => {
        return item && (
            <animated.div key={key} style={props}>
                <Styled.ModalContent>
                    {content}
                </Styled.ModalContent>
            </animated.div>
    )});

    return ReactDOM.createPortal(portal, document.getElementById('login-modal'));
};

export default ModalContainer;