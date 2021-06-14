import React, { useEffect, useState, Fragment } from 'react'
// Redux 
import { useSelector, useDispatch } from 'react-redux'
import { getItem } from '../redux/actions/items'


export const ItemPage = () => {
    const [image, setImage] = useState(0)
    const item = useSelector((state: any) => state.items.item)
    console.log(item);
    
    const dispatch = useDispatch()
    useEffect(() => {
        const id = parseInt(location.pathname.slice(6))
        console.log(id);
        
        dispatch(getItem(id))
    }, [])
    useEffect(() => {
        document.title = item ? `${item.model} | Photo Store` : `Photo Store`
    }, [item])
    const changeMainImage = (index: number) => {
        setImage(index)
    }
    return (
        <div>
            {
            item ? (
                <Fragment>
                    <h1 className="item-page__name">
                        {item.name} {item.model}
                    </h1>
                    <div className="item-page__add-to-cart">
                        <div className="item-page__item-main">
                        <div className="item-page__main-img">
                            <img
                            className="item-page__img-list__main-img"
                            src={item.images_500[image]}
                            alt={item.name}
                            />
                            <ul className="item-page__img-list">
                            {item.images_55.length &&
                                item.images_55.map((image: string, index: number) => {
                                return (
                                    <li
                                    key={`${item.name}_${index}`}
                                    className="item-page__img-list-item"
                                    style={{ backgroundImage: `url(${image})` }}
                                    onClick={() => changeMainImage(index)}
                                    >
                                    </li>
                                )
                                })}
                            </ul>
                        </div>
                        <div className="add-to-cart">
                            <p className="item-page__price">${item.price}</p>
                            <button
                            className="item-page__add-to-cart-button"
                            >
                            Add to Cart
                            </button>
                        </div>
                        </div>
                        <div className="item-page__description">
                        <div className="description">
                            <div className="description__features">
                            <h3 className="description__features__title">Features</h3>
                            <ul className="description__features-list">
                                {item.features &&
                                item.features.map((feature: string, index: number) => {
                                    return (
                                    <li
                                        className="description__features__list__element"
                                        key={`${feature}_${index}`}
                                    >
                                        {feature}
                                    </li>
                                    )
                                })}
                            </ul>
                            <p className="description__main">{item.description}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </Fragment>
            ) : (
                <h1>Bal bla bla</h1>
            )

            }
 
        </div>
    )
}
