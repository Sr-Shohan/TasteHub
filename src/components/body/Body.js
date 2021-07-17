import React from 'react'
import Menu from './Menu';
import Home from './Home'
import Contact from './Contact';
import About from './About'
import Error from './Error'
import Login from './Login';
import { Route, Redirect, Switch } from 'react-router-dom';

const Body = () => {
    const isLoggedIn = true;
    return (
        <div>

            <Switch>

                <Route path='/' exact component={Home} />
                <Route path='/menu' exact component={Menu} />
                <Route path='/contact' exact component={Contact} />
                {/* passing props */}
                <Route path='/about' exact>
                    <About number="5" />
                </Route>
                {/* <Route exact path='/login' component={Login}></Route> */}
                <Route exact path='/login'>
                    {(isLoggedIn) ? <Redirect to='/menu' /> : <Home />}
                </Route>
                <Redirect from='/' exact to='/home' />
                <Route component={Error}></Route>

            </Switch>




        </div >
    )
}

export default Body;