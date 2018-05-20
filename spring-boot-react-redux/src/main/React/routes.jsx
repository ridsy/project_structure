import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {PageWithLeftBarLayout} from 'pages/PageWithLeftBarLayout'

import {SomePage} from 'pages/SomePage'
import {ProductsList, EditProduct, EditProduct2 , FindProduct} from 'pages/products'

export default (
    <Route name="app" component={PageWithLeftBarLayout} path="/">
        <IndexRoute component={SomePage}/>
        <Route path="products" component={ProductsList}/>
        <Route path="products/new" component={EditProduct}/>
        <Route path="products/edit/:id" component={EditProduct2}/>
        <Route path="products/find" component={FindProduct}/>
    </Route>
)
