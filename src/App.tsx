import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Pages
import {
    Main, ItemPage, Catalog, Basket,
} from './pages'
// Components
import { MainNav } from './components'


export const App = () => {
    return (
        <div className='container'>
            <Router>
                <MainNav />
                <Route exact path='/'>
                    <Main />
                </Route>
                <Route exact path='/item/:id'>
                    <Basket />
                </Route>
                <Route exact path='/catalog'>
                    <Catalog />
                </Route>
                <Route exact path='/basket'>
                    <Basket />
                </Route>
            </Router>
        </div>
    )
}