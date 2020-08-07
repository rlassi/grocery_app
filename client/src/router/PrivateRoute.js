import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProfile } from '../store/actions/userActions';

const PrivateRoute = ({component: Component, ...rest}) => {
    useEffect(() => {
        rest.validate();
    }, [])
    return (
        <Route {...rest} render={props => (
             rest.user.isAuthenticated ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    validate: () => dispatch(fetchProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);