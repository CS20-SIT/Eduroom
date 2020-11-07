import React, { Fragment } from 'react'
import Review from '../../../components/course/review'
import GeneralNoNav from '../../../components/template/generalnonav'
const review = () => {
    return(
    <Fragment>  
        <GeneralNoNav>
        <Review/>
        </GeneralNoNav>     
    </Fragment>
    )
}
export default review