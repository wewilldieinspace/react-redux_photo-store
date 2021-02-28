import React from 'react'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
// Components
import { Nav, MainItem, CatalogItem } from './components '
import { IItem } from './types'
// Pages
import { Main,
    Catalog,
    ItemPage,
    Cart,
} from './pages'


export const App = () => {
    return (
        <div 
            className='container'
        >
            <Router>
            <Nav />
                <main>
                    <Route exact path='/'>
                        <Main />
                    </Route>
                    <Route exact path='/catalog'>
                        <Catalog />
                    </Route>
                    <Route exact path='/item/:id'>
                        <ItemPage />
                    </Route>
                    <Route exact path='/cart'>
                        <Cart />
                    </Route>
                </main>
            </Router>
        </div>
    )
}
