import React, { Fragment } from 'react'
import Cart from '../../../components/course/cart'
import GeneralNoNav from '../../../components/template/generalnonav'
const checkout = () => {
    return(
    <Fragment>  
        <GeneralNoNav>
        <Cart />
        </GeneralNoNav>     
    </Fragment>
    )
}
export default checkout