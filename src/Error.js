import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
    <>
    <h1> Error 404!! not found </h1>
    <p> This page does not exist!!</p>
    <NavLink to = "/"> Go Back! </NavLink>
    </>
    )
}

export default Error;