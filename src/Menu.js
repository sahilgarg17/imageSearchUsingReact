import React from 'react';
import { NavLink } from 'react-router-dom';
const Menu = () => {
    return (
        <>
        <div className = "main_style">
            <NavLink exact activeClassName="active_class" to="/"> About Us </NavLink>
            <NavLink activeClassName="active_class" to="/user/sahil/garg"> User </NavLink>
            <NavLink activeClassName="active_class" to="/search"> Search </NavLink>
            <NavLink exact activeClassName="active_class" to="/services"> Services </NavLink>
            <NavLink exact activeClassName="active_class" to="/services" to="/contact"> Contact Us </NavLink>
        </div>
        </>
    )
};
export default Menu;