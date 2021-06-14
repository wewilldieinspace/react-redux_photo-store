import React, { useEffect } from 'react'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems } from '../redux/actions/items'
// Components
import {
    MainItem
} from '../components'

export const Main = () => {
    const items = useSelector((state: any) => state.items)
    console.log('items: ', items);
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchItems(null, null))
    }, [])
    return (
        <div>
            Main page
        </div>
    )
}
