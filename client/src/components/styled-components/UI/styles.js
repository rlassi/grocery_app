import styled, { css } from 'styled-components';

const Select = styled.select`
    background-color: #E8F0FE;
    border: ${props => props.border || 'none'};
    border-radius: ${props => props.borderRadius || '3px'};
    border-top-right-radius: ${props => props.tr && props.tr};
    border-top-left-radius: ${props => props.tl && props.tl};
    border-bottom-right-radius: ${props => props.br && props.br};
    border-bottom-left-radius: ${props => props.bl && props.bl};
    font-size: ${props => props.fontSize && props.fontSize};
    height: ${props => props.height ? props.height : '2rem'};
    margin: ${props => props.margin && props.margin};
    padding: ${props => props.padding ? props.padding : '0 0 0 .5rem'};
    width: ${props => props.width && props.width};
    
    -webkit-border-top-right-radius: ${props => props.tr && props.tr};
    -webkit-border-top-left-radius: ${props => props.tl && props.tl};
    -webkit-border-bottom-right-radius: ${props => props.br && props.br};
    -webkit-border-bottom-left-radius: ${props => props.bl && props.bl};
`;

// Buttons
const ButtonPrimary = styled.button`
    ${({theme, margin, padding, alignSelf}) => theme && css`
        align-self: ${alignSelf ? alignSelf : 'inherit'};
        background-color: ${theme.colors.primaryMain};
        border: none;
        border-radius: 3px;
        cursor: pointer;
        font-size: 1rem;
        color: white;
        margin: ${margin ? margin : '.5rem .5rem 2rem'};
        padding: ${padding ? padding : '1rem'};

        &:hover {
            background-color: ${theme.colors.primaryDark};
        }
    `};
`;

const ButtonSecondary = styled(ButtonPrimary)`
    ${({ theme }) => theme && css`
        background-color: ${theme.colors.secondaryLight};
        
        &:hover {
            background-color: ${theme.colors.secondaryMain}
        }
    `}
`;

const ButtonWarning = styled(ButtonPrimary)`
    background-color: ${props => props.theme.colors.warningMain};
    
    &:hover {
        background-color: ${props => props.theme.colors.warningDark};
    }
`;

const ButtonBadge = styled(ButtonPrimary)`
    color: white;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondaryMain};
    font-size: 1.75rem;
    margin: 0;
    padding: 1px 1px 0 0;

    @media only screen and (max-width: 599px){
        padding: 0 0 5px 0;
    }

    ${({ diameter }) => diameter && css`
        border-radius: ${diameter / 2}px;
        height: ${diameter}px;
        width: ${diameter}px;
    `};
`;

const ButtonNavLink = styled(ButtonPrimary)`
    border: 1px solid white;
    margin: .5rem;
    padding: .75rem;

    &:hover {
        background-color: ${props => props.theme.colors.secondaryMain};
    }
`;

// Inputs

const InputMd = styled.input`
    background-color: #E8F0FE;
    border: none;
    border-radius: 3px;
    border-top-right-radius: ${props => props.tr && props.tr};
    border-top-left-radius: ${props => props.tl && props.tl};
    border-bottom-right-radius: ${props => props.br && props.br};
    border-bottom-left-radius: ${props => props.bl && props.bl};
    font-size: 1rem;
    height: ${props => props.height ? props.height : '3rem'};
    margin: ${props => props.margin && props.margin};
    padding: 0 0 0 .5rem;
    width: 100%;
    max-width: ${props => props.maxWidth ? props.maxWidth : '20rem'};
`;

const InputSm = styled(InputMd)`
    width: 10rem;
    font-size: ${({fontSize}) => fontSize && fontSize};
`;

const InputXS = styled(InputMd)`
    width: 5rem;
`;

const InputSignIn = styled(InputMd)`
    font-size: .85rem;
    max-width: 100%;
`;

const TextArea = styled(InputMd)`
    ${props => props.as === 'textarea' && css`
        max-width: 30rem;
        height: 10rem;
        padding: .5rem .5rem
    `}
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: ${props => props.margin && props.margin};
    padding: ${props => props.padding && props.padding};
    width: ${props => props.width && props.width};
    border-bottom: ${props => props.borderBottom && props.borderBottom};

    & > * {
        margin: ${props => props.childMargin ? props.childMargin : '.5rem 0'};
    }
`;

export default {
    Select,
    ButtonPrimary,
    ButtonSecondary,
    ButtonWarning,
    ButtonBadge,
    ButtonNavLink,
    InputMd,
    InputSm,
    InputXS,
    InputSignIn,
    TextArea,
    Form
}