import React from 'react';

export const passwordTooShort = (error, password, isLength) => {
    return error && password && !isLength(password, {min: 7}) ?
        (<span style={{color: 'black', fontSize: '.85rem'}}>
            ***Password must be at least 7 characters***
        </span>)
        :
        null;
}

export const passwordsNotEqual = (error, password, confirm) => {
    return error && confirm !== password ?
        (<span style={{color: 'black', fontSize: '.85rem'}}>
            ***Please confirm passwords match***
        </span>)
        :
        null;
}

export const mongoErrorMessage = (mongoError) => {
    return mongoError && mongoError.code === 11000 ? 
        (<span style={{color: 'black', fontSize: '.85rem'}}>
            ***Please choose a different email address***
        </span>)
        :
        null
}

export const FieldRequired = () => {
    return (
        <span style={{color: 'black', fontSize: '.85rem'}}>
            ***This field is required!***
        </span>
    )
}