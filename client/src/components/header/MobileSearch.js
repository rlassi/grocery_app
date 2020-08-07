import React from 'react';
import { connect } from 'react-redux';
import { openMobileSearch, closeMobileSearch } from '../../store/actions/overlaysActions';
import Styled from './styles';

const MobileSearch = ({ show, openMobileSearch, closeMobileSearch }) => {
    const handleClick = () => {
        if(!show) openMobileSearch();
        else closeMobileSearch();
    }
    return (
        <Styled.MobileSearch>
            <Styled.SearchIcon 
                className="material-icons"
                onClick={handleClick}
                id="search-icon"
            >
                search
            </Styled.SearchIcon>
        </Styled.MobileSearch>
    )
}

const mapState = state => ({
    show: state.overlays.mobileSearch.show
})
const mapDispatch = dispatch => ({
    openMobileSearch: () => dispatch(openMobileSearch()),
    closeMobileSearch: () => dispatch(closeMobileSearch())
})

export default connect(mapState, mapDispatch)(MobileSearch);