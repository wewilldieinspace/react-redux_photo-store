import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Pages
import {
	Main, Item, Catalog, Basket,
} from './pages'
// Components
import { MainNav } from './components'


export const App = () => {
	return (
		<Router>
			<MainNav />
			<div className='container'>
			<Route exact path='/'>
				<Main />
			</Route>
			<Route exact path='/item/:id'>
				<Item />
			</Route>
			<Route exact path='/catalog'>
				<Catalog />
			</Route>
			<Route exact path='/basket'>
				<Basket />
			</Route>
			</div>
		</Router>
	)
}