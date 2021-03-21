import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
// Components
import { Sort } from '../components '


export const Catalog = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Catalog | Magin Shop</title>
            </Helmet>
            <Sort></Sort>
            <h1>catalog</h1>
        </Fragment>
    )
}