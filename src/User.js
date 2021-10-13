import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

const User = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    return (
        <>
        <h1> User {fname} {lname} Page</h1>
        <p> Current location is {location.pathname} </p>
        {
            location.pathname === "/user/sahil/garg" ? (<button onClick={() => history.goBack()}> Click me </button>):null
        }
        </>
    )
};

export default User;