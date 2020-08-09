import React, {useState} from 'react';
import Styled from './styles';
import UI from '../styled-components/UI/styles';
import Grid from '../styled-components/UI/GridStyles';
import CloseButton from '../styled-components/UI/CloseButton';

const ProductForm = ({ 
    onSubmit, 
    categories, 
    product: p, 
    closeSideDrawer,
    setEdit,
}) => {
    const [name, setName] = useState(p ? p.name : '');
    const [description, setDescription] = useState(p ? p.description : '');
    const [selected, setSelected] = useState(p ? p.category.name : 'choose');
    const [stock, setStock] = useState(p ? p.stock : '');
    const [price, setPrice] = useState(p ? p.price : '');
    const [image, setImage] = useState(p ? p.image : '');
    const [error, setError] = useState(false);
    const product = {
        name,
        description,
        stock,
        price,
        image,
        category: selected === 'choose' ? undefined : categories.find(c => c.name === selected)._id,
        _id: p ? p._id : ''
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // delete properties that aren't required
        if(!p) delete product._id;
        if(!image) delete product.image;
        for (let key in product) {
            if(!product[key]) {
                setError(true)
                return
            }
        }
        onSubmit(product)
        if(p) setEdit(false);
    }

    const errorMessage = <span style={{color: 'black', fontSize: '.85rem'}}>***This field is required!***</span>

    return (
        <Styled.ProductFormContainer>
            <CloseButton onClick={closeSideDrawer} top="2rem"/>
            <h1>{p ? 'Edit Product' : 'Add Product'}</h1>
            <UI.Form onSubmit={handleSubmit} margin="1rem 0">
                <label>Product Name</label>
                {error && !name && errorMessage}
                <UI.InputMd
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Product Description</label>
                {error && !description && errorMessage}
                <UI.TextArea
                    as="textarea"
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="categories">Category</label>
                {error && !product.category && errorMessage}
                <UI.Select 
                    width="10rem" 
                    value={selected} 
                    name="categories" 
                    onChange={(e) => setSelected(e.target.value)}
                >
                    <option value="choose">Categories</option>
                    {categories && categories.map(c => {
                        return (<option key={c.name} value={c.name}>{c.name}</option>)
                    })}
                </UI.Select>
                <Grid.Flex numColsSm="3" align="center">
                    <Grid.Col direction="column">
                        <label>Stock</label>
                        <span style={{ fontSize: '.75rem' }}>(amount available)</span>
                        {error && !stock && errorMessage}
                        <UI.InputXS
                            margin="1rem 0 0"
                            value={stock} 
                            onChange={(e) => setStock(e.target.value)}
                        />
                    </Grid.Col>
                    <Grid.Col direction="column">
                        <label>Product Price</label>
                        {error && !price && errorMessage}
                        <UI.InputXS
                            margin="1rem 0 0"
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Grid.Col>
                </Grid.Flex>
                <label>Product Image (URL)</label>
                <UI.InputMd 
                    value={image} 
                    onChange={(e) => setImage(e.target.value)}
                />
                <UI.ButtonPrimary alignSelf="flex-start">
                    {p ? 'Update Product' : 'Add Product'}
                </UI.ButtonPrimary>
            </UI.Form>
        </Styled.ProductFormContainer>
    )
}

export default ProductForm;