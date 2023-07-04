import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const ProtectedRoute = ({ comp: Component, userData }) => {
    const { username } = useParams();

    console.log("username", username);
    console.log("userData", userData.login);


    if (userData.login === username) {
      // User is logged in and the username matches, render the component
      return <Component userData={userData} />;
    } else {
      // User is logged in, but the username doesn't match, navigate to 404 page
      return <Navigate to="/404" replace />;
    }
};

export default ProtectedRoute;
