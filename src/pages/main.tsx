import React, { useEffect } from 'react'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getItemsList } from '../redux/actions/items'
// Components
import {
    MainItem
} from '../components'
import { IItem } from '../types'


export const Main = () => {
    const items = useSelector((state: any) => state.items)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getItemsList(null, null))
    }, [])
    return (
        <div>
            {items.items.length && items.items.map((item: IItem) => {
                const { id, name, model, description, price, images_500 } = item
                return <MainItem 
                    key={item.id}
                    id={id}
                    name={name}
                    model={model}
                    description={description}
                    price={price}
                    image={images_500[0]}
                />
            })}
        </div>
    )
}
