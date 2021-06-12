import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


export const App = () => {
    useEffect(() => {
        document.title = 'Asshole'
    }, [])
    return (
        <div className='container'>
            <Router>
                <Route exact path='/'>
                    <h1>SHIT!SHIT!SHIT!</h1>
                </Route>
            </Router>
        </div>
    )
}