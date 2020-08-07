import styled, { css } from 'styled-components';

const BackDrop = styled.div`
    display: none;

    ${props => props.show && css`
        display: block;
        position: fixed;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
    `}
`;

export default BackDrop;