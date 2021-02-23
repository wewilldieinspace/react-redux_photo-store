import React from 'react'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
// Components
import { Nav } from './components '


export const App = () => {
    return (
        <div 
            className='container'
        >
            <Router>
            <Nav />

            </Router>
        </div>
    )
}
