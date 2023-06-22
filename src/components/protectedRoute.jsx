import React from 'react';
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ( { user, children, redirectTo='/index' } ) => {

    if(!user){
        return <Navigate to={redirectTo}/>
    }

    return (
        children
    );
}

export default ProtectedRoute;
