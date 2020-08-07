import styled from 'styled-components';

const ProductsNav = styled.div`
    display: flex;
    margin-bottom: 1rem;
    & > * {
        margin-right: 1rem;
    }
`;
const ProductCard = styled.div`
    border: 1px solid #ECECEC;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-between;
    min-width: 250px;
    margin: .25rem;
    padding: 0;

    &:hover {
        box-shadow: 2px 2px 4px #DCDCDC;
    }

    & a {
        color: black;
    }

    & img {
        height: 175px;
        max-width: 100%;
    }

    @media only screen and (max-width: 599px){
        height: 400px;
        max-width: 400px;
        margin: 2rem 0;
        & img {
            max-width: 400px;
            height: 250px;
        }
    }
`;

const ProductPrice = styled.h4`
    padding: .25rem;
`;

const ProductName = styled.h4`
    align-self: center;
`;

const ProductStock = styled.h4`
    align-self: center;
`;

const EditProduct = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    padding-top: 3rem;
    padding-left: 2rem;

    & ul { /** item details */
        list-style: none;
        padding: 0;
    }
    
    & img {
        width: 300px;
    }
`;

const ProductFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem;
`;

export default {
    ProductsNav,
    ProductCard,
    ProductPrice,
    ProductName,
    ProductStock,
    ProductFormContainer,
    EditProduct
}