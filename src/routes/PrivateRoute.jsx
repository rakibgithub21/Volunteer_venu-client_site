import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return<Loading></Loading>
    }
    if (user) {
        return children
    } else {
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }

};

export default PrivateRoute;