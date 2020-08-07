import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProfile } from '../store/actions/userActions';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    useEffect(() => {
        rest.validate();
    }, [])
   return (
        <Route {...rest} render={props => (
             rest.user.isAuthenticated && restricted ?
                <Redirect to="/products" />
            : <Component {...props} />
        )} />
    );
};

const mapDispatchToProps = dispatch => ({
    validate: () => dispatch(fetchProfile())
})

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoute);