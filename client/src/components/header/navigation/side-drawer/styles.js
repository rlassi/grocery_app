import styled, { css } from 'styled-components';

const MenuList = styled.ul`
    list-style: none;
    padding: 0;

    & a:visited {
        color: white;
    }
`;

const MenuListItem = styled.li`
    list-style: none;
    padding: 0;
    & > button:focus {
        outline: none;
    }
`;

const SubList = styled.ul`
    list-style: none;
    padding: 0;

    & li {
        padding: 0 1rem;
        background-color: transparent;
        max-height: 0;
        overflow: hidden;
        transition: all .25s ease-in;
    }

    & li:hover {
        background-color: ${props => props.theme.colors.secondaryDark}
    }

    ${props => props.showSub && css`
        & li {
            max-height: 36px;
            padding: 1rem;
        }
    `}
`;

const HamContainer = styled.div`
    display: none;
    margin: .5rem;

    @media only screen and (max-width: 1000px) {
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
    }
`;
const HamburgerButton = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

const HamSpan = styled.span`
    background-color: white;
    height: 2px;
    width: 25px;
    margin: 3px 0;
    transition: transform 0.25s ease-in;
    transform-origin: 1px;

    &:nth-child(1) {
        transform: ${({ show }) => show ? 'rotate(45deg)' : 'rotate(0)'};

    }

    &:nth-child(2) {
        opacity: ${({ show }) => show ? 0 : 1};
    }

    &:nth-child(3) {
        transform: ${({ show }) => show ? 'rotate(-45deg)' : 'rotate(0)'};
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
    width: ${props => props.width && props.width};
`;

export default {
    MenuList,
    MenuListItem,
    SubList,
    HamburgerButton,
    HamContainer,
    HamSpan,
    SideDrawer
}