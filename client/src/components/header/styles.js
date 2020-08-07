import styled, {css} from 'styled-components';

const Header = styled.div`
    background-color: ${({theme}) => theme.colors.primaryMain};
    position: sticky;
    top: 0;
    /* box-shadow: 2px 2px 6px #BFBFBF; */
    min-height: 65px;
`;

const Logo = styled.div`
    flex-grow: 1;
    min-width: 0;
    & h2 {
        color: white;
        margin: 0;
    }
`;

const SearchBar = styled.div`
    flex-grow: 2;
    display: flex;
    margin: 0;
    padding: 0;
`;

const DesktopSearch = styled.div`
    display: contents;

    @media only screen and (max-width: 599px){
        display: none;
    }
`;

const MobileSearch = styled.div`
    display: none;

    @media only screen and (max-width: 599px){
        display: flex;
        flex-grow: 50;
        justify-content: flex-end;
    }
`;

const SearchIcon = styled.div`
    color: white;
    cursor: pointer;
`;

const AddCategory = styled.div`
    visibility: hidden;
    opacity: 0;
    top: 3.5rem;
    position: absolute;
    background-color: white;
    border: 1px solid #ECECEC;
    border-radius: 4px;
    padding: .5rem;
    transition: opacity .25s ease-in-out;
    ${props => props.show && css`
        opacity: 1;
        visibility: visible;
    `}

    & input {
        font-size: .7rem;
    }
    @media only screen and (max-width: 599px){
        top: 7.5rem;
    }
`;

export default {
    Header,
    Logo,
    SearchBar,
    AddCategory,
    MobileSearch,
    DesktopSearch,
    SearchIcon
}