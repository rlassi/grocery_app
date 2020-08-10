import styled from 'styled-components';

const NavLink = styled.li`
    margin: ${props => props.margin ? props.margin : '.5rem'};

    &:hover {
        background-color: ${props => props.theme.colors.secondaryMain};
    }
    /** navlink colors **/
    & > a {
        padding: .75rem;
    }
    
    & > a {
        color: white;
        background-color: ${({mainNav}) => mainNav && 'transparent'};
        border: 1px solid white;
        border-radius: 3px;
        font-size: 1rem;

        :hover {
            background-color: ${props => props.theme.colors.secondaryMain};
        }
    }

    & > a:hover {
        background-color: ${({theme, mainNav}) => mainNav && theme.colors.secondaryDark};
    }

    & a:visited {
        color: white;
    }
`;

const NavLinks = styled.ul`
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
    padding: 0;
    
    /** dropdown sub-menu styling**/
    & ul {
        position: absolute;
        z-index: 1;
        opacity: 0;
        transition: all .25s ease-in-out;
        visibility: hidden;
    }

    & > li:hover > ul {
        opacity: 1;
        visibility: visible;
    }

    @media only screen and (max-width: 1000px) {
        display: none
    }
`

const SubMenu = styled.ul`
    background-color: white;
    border: 1px solid #ECECEC;
    border-radius: 4px;
    margin: 1.25rem 0 0;
    padding: 0;
    list-style: none;

    &:hover {
        cursor: pointer;
    }
    & a {
        color: black;
    }
    & a:visited {
        color: black;
    }
    & > li {
        padding: 1.25rem;
        list-style: none;
    }
    & > li:hover {
        background-color: #F8F8F8;
    }
`;

export default {
    NavLink,
    NavLinks,
    SubMenu
}