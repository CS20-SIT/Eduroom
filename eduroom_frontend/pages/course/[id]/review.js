import React, { Fragment } from 'react'
import Review from '../../../components/course/review'
import GeneralNoNav from '../../../components/template/generalnonav'
import style from "../../../styles/course/review";
const review = () => {
    return(
    <Fragment>  
        <GeneralNoNav>
            <div className="bg">
                <Review/>
            </div>
        </GeneralNoNav>     
        <style jsx>{style}</style>
    </Fragment>
    )
}
export default review