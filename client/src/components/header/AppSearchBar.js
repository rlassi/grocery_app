import React, { useState, useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { 
    fetchProducts,
    fetchAddCategory, 
    updateQueryName, 
    updateQueryCategory 
} from '../../store/actions/productActions';
import useDebounce from './hooks/useDebounce';
import Styled from './styles';
import UI from '../styled-components/UI/styles';

const AppSearchBar = ({ 
    categories, 
    addCategory, 
    getProducts,
}) => {
    const inputRef = useRef();
    const [selectState, setSelectState] = useState('');
    const [show, setShow] = useState(false);
    const [queryName, setQueryName] = useState('');
    const [category, setCategory] = useState('');
    const debouncedName = useDebounce(queryName, 500);

    useEffect(() => {
        getProducts({ name: debouncedName, category: selectState});
    }, [debouncedName, selectState]);

    useEffect(() => {
        if(show){
            inputRef.current.focus();
        }
    }, [show]);

    const handleSelectChange = (e) => {
        if(e.target.value === 'add') {
            setShow(true);
        } else {
            setShow(false);
            setSelectState(e.target.value);
        }
    }

    const addCategoryKeyPress = (e) => {
        if(e.key === 'Enter') {
            if(category){
                addCategory( { name: category });
                setShow(false);
            } else {
                setSelectState('');
                setShow(false);
            }
        }
    }

    return (
        <Styled.SearchBar>
            <UI.Select 
                tr="0" 
                br="0"
                fontSize=".85rem"
                value={selectState}
                onChange={handleSelectChange}
            >
                <option value="">Categories</option>
                {categories && categories.map(c => {
                    return (<option key={c.name} value={c._id}>{c.name}</option>)
                })}
                <option value="add">Add Category</option>
            </UI.Select>
            <UI.InputMd
                value={queryName}
                onChange={(e) => setQueryName(e.target.value)}
                maxWidth="100%"
                height="2rem"
                tl="0"
                bl="0"
                type="text"
            />
            <Styled.AddCategory show={show}>
                <UI.InputSm 
                    ref={inputRef}
                    value={category} 
                    placeholder="type category and press enter"
                    onChange={(e) => setCategory(e.target.value)}
                    onKeyPress={addCategoryKeyPress}
                />
            </Styled.AddCategory>
        </Styled.SearchBar>   
    );
};
const mapState = state => ({
    categories: state.products.categories,
})
const mapDispatch = dispatch => ({
    getProducts: (obj) => dispatch(fetchProducts(obj)),
    addCategory: (category) => dispatch(fetchAddCategory(category)),
    updateQueryCategory: (category) => dispatch(updateQueryCategory(category)),
    updateQueryName: (name) => dispatch(updateQueryName(name))
})
export default connect(mapState, mapDispatch)(AppSearchBar);