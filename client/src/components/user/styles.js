import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid #ECECEC;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 500px;
    min-width: 500px;
    max-width: 550px;
    padding: 4rem;

    @media only screen and (max-width: 599px) {
        min-height: 100vh;
        min-width: 100vw;
        align-items: center;
        padding: 5rem 3rem 3rem;
    }
`;

const DeleteCard = styled(Card)`
    min-height: 200px;
    min-width: 350px;
    align-items: center;
    padding: 2rem;
    background-color: ${props => props.theme.colors.primaryMain};

    & h2 {
        color: white;
    }

    & button {
        align-self: center;
    }

    @media only screen and (max-width: 599px){
        justify-content: center;
    }
`;

const ButtonPlain = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: .75rem;
`;

export default {
    Card,
    DeleteCard,
    ButtonPlain
}