import React from 'react'
import { NavLink } from 'react-router-dom'


export const MainNav = () => {
    return (
        <header 
            className="nav">
            <nav>
                <ul 
                    className="nav__main">
                    <li 
                        className='nav__button'>
                        <NavLink 
                            to='/'
                        >Home</NavLink>
                    </li>
                    <li 
                        className='nav__button'>
                        <NavLink 
                            to='/catalog' activeClassName='nav--btn__active'
                        >Catalog</NavLink>
                    </li>
                    <li 
                        className='nav__button'>
                        <NavLink 
                            to='/basket' activeClassName='nav--btn__active'
                        >Basket</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}