import React from 'react';
import Styled from './styles';

const Hamburger = ({show, handleClick}) => {
    return (
        <Styled.HamContainer>
            <Styled.HamburgerButton onClick={handleClick}>
                <Styled.HamSpan show={show}></Styled.HamSpan>
                <Styled.HamSpan show={show}></Styled.HamSpan>
                <Styled.HamSpan show={show}></Styled.HamSpan>
            </Styled.HamburgerButton>
        </Styled.HamContainer>
    );
};

export default Hamburger;