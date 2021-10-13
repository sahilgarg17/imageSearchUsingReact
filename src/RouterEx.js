import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import Search from './Search';
import Services from './Services';
import Sresult from './Sresult';
import User from './User';
const RouterEx = () => {
    return (
        <>
        <Menu />
            <Switch>
                <Route exact path = "/" component={About} />
                <Route exact path = "/contact" component={Contact} />
                <Route exact path = "/search" component={Search} />
                <Route path = "/user/:fname/:lname" component={User} />
                <Route exact path = "/services" component={() => <Services name="services" /> } />
                {/* <Route component={Error} /> */}
                <Redirect to = "/" />
            </Switch>
        </>
    )
}
export default RouterEx;