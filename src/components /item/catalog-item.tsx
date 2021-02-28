import React from 'react'
import { Link } from 'react-router-dom'
import { IItem } from '../../types'


export const CatalogItem = ({ name, model, price, images, id }: IItem) => {
    return (
        <div 
            className='catalog-item'>
            <div 
                className="catalog-item__image"
                style={{ backgroundImage: `url(${ images[0] })` }}
            />
            <div className="catalog-item__info">
                <h2 className='catalog-item__title'>{ `${name} ${model}` }</h2>
                <p className='catalog-item__price'>{ price }$</p>
                <Link to={`/item/${ id }`}>
                    <button className='catalog-item__learn-button'>learn more</button>
                </Link>
            </div>
        </div>
    )
}
