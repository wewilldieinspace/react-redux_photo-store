import React from 'react'
import { Link } from 'react-router-dom'
// Types
import { IItem } from '../../types'


export const MainItem = ({ name, model, shortDescription, price, images, id }: IItem) => {
    return (
        <div 
            className='main-item'>
                <div className="main-item__info">
                    <h3 className='main-item__info__name'>{ name } { model }</h3>
                    <p className="main-item__info__description">{ shortDescription }</p>
                    <p className='main-item__info__price'>{ price }$</p>
                    <Link to={`/item/${ id }`}>
                        <button className="main-item__info__learn-more-button">learn more</button>
                    </Link>
                </div>
                <div 
                    className="item__image main-item__image"
                    style={{ backgroundImage: `url(${ images[0] })` }}
                />
        </div>
    )
}
