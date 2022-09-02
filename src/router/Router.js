import React from 'react';
// ROUTER
import {Route,Switch} from 'react-router-dom';
//COMPONENTS
import Product from '../Product';
import Products from '../Products';
import NotFound from '../NotFound';

const Router = () => {
    return (
        <div>
        <Switch>
          <Route exact path='/'       component={Products} />
          <Route path='/products/:id' component={Product } />
          <Route                      component={NotFound} />
        </Switch>
        </div>
    )
}

export default Router;
