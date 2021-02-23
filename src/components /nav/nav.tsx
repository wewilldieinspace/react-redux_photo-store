import React from 'react'
import { NavLink } from 'react-router-dom'


export const Nav = () => {
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
                            to='/cart' activeClassName='nav--btn__active'
                        >Cart</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}