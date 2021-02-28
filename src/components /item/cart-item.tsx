import React from 'react'
import { IItem } from '../../types'
import { Clear as ClearIcon } from '@material-ui/icons'


export const CartItem = ({ name, model, price, images, id }: IItem) => {
    return (
        <li className="cart-items-list__element">
            <div className="cart-items-list__element__info">
                <h3>{ `${ name } ${ model }` }</h3>
                <p className="cart-items-list__element__info__price">
                    { price }
                </p>
                <div
                    className="cart-items-list__element__info--img"
                    style={{ backgroundImage: `url(${ images[0]} )` }}
                />
            </div>
            <ClearIcon
                className="cart-items-list__element__delete-button"
            />
        </li>
    )
}
