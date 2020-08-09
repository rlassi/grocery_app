import React from 'react';
import Styled from './styles';

const ProductCard = ({ p, openSideDrawer }) => {
    return (
        <Styled.ProductCard 
            onClick={() => openSideDrawer({
                type: 'EDIT_PRODUCT', 
                show: true, 
                sideDrawerProps: p
            })}
        >
            <img src={p.image} alt={p.name} />
            <Styled.ProductPrice>
                {p.price}
            </Styled.ProductPrice>
            <Styled.ProductName>
                {p.name}
            </Styled.ProductName>
            <Styled.ProductName>
                Category: {p.category.name}
            </Styled.ProductName>
            <Styled.ProductStock>
                Stock: {p.stock}
            </Styled.ProductStock>
        </Styled.ProductCard>
    )
}

export default ProductCard;