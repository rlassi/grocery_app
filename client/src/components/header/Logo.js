import React from 'react';
import { Link } from 'react-router-dom';

import Styled from './styles';

const Logo = () => {
    return (
        <Styled.Logo>
            <Link to="/">
                <h1>People's Market</h1>
            </Link>
        </Styled.Logo>
    );
};

export default Logo;