import React, { useEffect } from 'react'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems } from '../redux/actions/items'
// Components
import {
    MainItem
} from '../components'
import { IItem } from '../types'


export const Main = () => {
    const items = useSelector((state: any) => state.items)
    console.log('items: ', items);
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchItems(null, null))
    }, [])
    return (
        <div>
            {items.items.length && items.items.map((item: IItem) => {
                const { name, model, description, price, images_500 } = item
                console.log(item);
                
                return <MainItem 
                    key={item.id}
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
