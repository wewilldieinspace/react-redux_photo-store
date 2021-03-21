import React from 'react'
// Components
import { SortPopup } from './sort-popup'
// Types
import { ISortItems } from '../../types'


// interface IItem {
//     name: string,
//     type: string,
//     elements: Array<string>
// }



const sortItems: any = [
    { name: 'Category', type: 'category', elements: ['Popular', 'New'] },
    { name: 'Type', type: 'type', elements: ['Mirror', 'Mirrorless'] }
    // { name: 'Brand', type: 'brand', elements: ['Nokin', 'Canon', 'Sony'] }
]


export const Sort = () => {
    return (
        <div className="sort">
            <ul className="sort-list">
                {
                    sortItems.length && sortItems.map((el: ISortItems, i: number) => {
                        const { name, type, elements } = el
                        return (
                            <SortPopup
                                key={`${name}_${i}`}
                                name={name}
                                type={type}
                                elements={elements}
                             />
                        )
                    })
                }
            </ul>
        </div>
    )
}