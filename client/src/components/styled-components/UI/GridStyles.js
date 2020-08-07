import styled, { css } from 'styled-components';
import { breakpoints } from './helpers';

// props = fullWidth
const Container = styled.div`
    max-width: 1200px;
    padding: ${props => props.padding ? props.padding : '0 1rem'};
    margin: auto;

    ${({fullWidth}) => fullWidth && css`
        max-width: 100%;
        margin-left: 2rem;
        margin-right: 2rem;
    `};

    @media only screen and (max-width: 800px) {
        margin-left: 0;
        margin-right: 0;
    }

`;

// props = numColsSm, numColsMd, numColsLg, noGutters, justify, align, direction, mb
const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction && direction};
    flex: 1 1 auto;
    flex-wrap: wrap;
    height: ${({height}) => height && height};
    justify-content: ${({ justify }) => justify && justify};
    align-items: ${({ align }) => align && align};
    margin-bottom: ${({mb}) => mb && mb};
    padding: ${props => props.padding && props.padding};
    
    ${({noGutters}) => noGutters && css`
        margin-left: 0;
        margin-right: 0;
    `}

    ${({numColsSm, theme}) => numColsSm && 
        breakpoints(theme, numColsSm, 'smUp')
    }
    ${({numColsMd, theme}) => numColsMd && 
        breakpoints(theme, numColsMd, 'mdUp')
    }
    ${({numColsLg, theme}) => numColsLg && 
        breakpoints(theme, numColsLg, 'lgUp')
    }
`;

const Col = styled.div`
    color: ${({color}) => color && color};
    ${({direction}) => direction && css`
        display: flex;
        flex-direction: ${direction};
    `}
    height: ${({height}) => height && height};
    width: ${({width}) => width && width};
    max-width: 100%;
    align-self: ${({alignSelf}) => alignSelf && alignSelf};
    margin: 0;
    padding: 0;
`;

export default {
    Container,
    Flex,
    Col
}