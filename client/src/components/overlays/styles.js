import styled, { css } from 'styled-components';

const SideDrawerContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;

const ModalContent = styled.div`
    background: white;
    height: auto;

    @media only screen and (max-width: 599px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const SideDrawer = styled.div`
    background-color: ${props => props.theme.colors.secondaryMain};
    /* box-shadow: 2px 2px 6px black; */
    color: white;
    overflow: scroll;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: ${props => props.width ? props.width : '550px'};
`;

const MobileSearchOverlay = styled.div`
    display: none;
    @media only screen and (max-width: 599px){
        /* box-shadow: 2px 2px 6px #BFBFBF; */
        display: block;
        position: sticky;
        top: 65px;
        width: 100%;
        height: 100%;
    }
`;

const MobileSearchOverlayContents = styled.div`
    background-color: white;
    padding: 1rem 1rem;
`;

export default {
    ModalContent,
    SideDrawerContainer,
    SideDrawer,
    MobileSearchOverlay,
    MobileSearchOverlayContents
}