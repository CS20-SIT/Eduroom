import React, { Fragment } from 'react'
import Cart from '../../components/payment/cart'
import GeneralNoNav from '../../components/template/generalnonav'
import style from "../../styles/course/cartStyle"
const checkout = () => {
    return(
    <Fragment>  
        <GeneralNoNav>
            <div className="bg" >
                 <Cart />
            </div>
        </GeneralNoNav>  
        <style jsx>{style}</style>   
    </Fragment>
    )
}
export default checkout