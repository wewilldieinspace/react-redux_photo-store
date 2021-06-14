import { types } from '../actionTypes'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { IItem } from '../../types'


export const getItems = (items: [IItem]) => ({
    type: types.GET_ITEMS,
    payload: items
})

export const fetchItems = (
    category: number | null,
    type: number | null
    ): ThunkAction<any, any, any, Action> => async dispatch => {

    const response = await fetch(`http://localhost:8000/items/?category=${category !== null ? category : 0}${type ? `&type=${type}` : ''}`)

    const result = await response.json() 

    dispatch(getItems(result))
}      