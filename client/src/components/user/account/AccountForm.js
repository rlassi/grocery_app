import React, { useState } from 'react';
import UI from '../../styled-components/UI/styles';
import Grid from '../../styled-components/UI/GridStyles';
import isLength from 'validator/lib/isLength';
import { FieldRequired, passwordTooShort, passwordsNotEqual, mongoErrorMessage } from './helpers';

const AccountForm = ({ 
    user, 
    onSubmit, 
    mongoError,
    openModal,
    closeModal,
    deleteAccount,
    closeSideDrawer,
    setEdit
}) => {
    const [name, setName] = useState(user.name || '');
    const [email, setEmail] = useState(user.email || '');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState(false);

    const updates = {
        name,
        email,
        password,
    }

    const handleDelete = () => {
        openModal({
            type: 'CONFIRM_DELETE_ACCOUNT',
            show: true,
            modalProps: { 
                deleteAccount,
                closeModal,
                closeSideDrawer
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!updates.password) delete updates.password;
        for(let key in updates){
            if(!updates[key]){
                setError(true);
                return
            }
        }
        if(updates.password && password !== confirm){
            setError(true);
            return
        } else if(updates.password && !isLength(password, {min: 7})){
            setError(true);
            return
        }
        onSubmit(updates)
    }
    
    return (
        <React.Fragment>
            <UI.Form 
                onSubmit={handleSubmit} 
                margin="1rem 0 3rem"
                padding="0 0 1rem"
                borderBottom="2px dashed #F44336"
            >
                <label>Name</label>
                {error && !name && <FieldRequired />}
                <UI.InputMd
                    type="text"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Email</label>
                {error && !email && <FieldRequired />}
                {mongoErrorMessage(mongoError)}
                <UI.InputMd
                    type="text"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Set New Password</label>
                {passwordTooShort(error, password, isLength)}
                <UI.InputMd
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Confirm New Password</label>
                {passwordsNotEqual(error, password, confirm)}
                <UI.InputMd 
                    type="password"
                    autoComplete="new-password"
                    value={confirm} 
                    onChange={(e) => setConfirm(e.target.value)}
                />
                <Grid.Flex>
                    <UI.ButtonPrimary
                        margin=".5rem 0 2rem"
                        alignSelf="flex-start"
                    >
                        Save
                    </UI.ButtonPrimary>
                    <UI.ButtonPrimary
                        margin=".5rem .5rem 2rem"
                        alignSelf="flex-start"
                        onClick={() => setEdit(false)}
                    >
                        Cancel
                    </UI.ButtonPrimary>
                </Grid.Flex>
            </UI.Form>
            <h2 style={{color: '#F44336'}}>Danger Zone</h2>
            <UI.ButtonWarning
                onClick={handleDelete}
                margin=".5rem 0 2rem"
            >
                Delete Account
            </UI.ButtonWarning>
        </React.Fragment>
    )
}

export default AccountForm;