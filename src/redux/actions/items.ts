import { types } from '../actionTypes'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { IItem } from '../../types'


export const getItem = (
    id: number
    ): ThunkAction<any, any, any, Action> => async dispatch => {
    
    const item = await response(`http://localhost:8000/items/?id=${id}`)
    
    dispatch({
        type: types.GET_ONE_ITEM,
        payload: item
    })
}

export const getItemsList = (
    category: number | null,
    type: number | null
    ): ThunkAction<any, any, any, Action> => async dispatch => {

    const items = await response(`http://localhost:8000/items/?category=${category !== null ? category : 0}${type ? `&type=${type}` : ''}`)

    dispatch({
        type: types.GET_ITEMS,
        payload: items
    })
}     

const response = async (url: string) => {
    const request = await fetch(url)
    return await request.json()
}