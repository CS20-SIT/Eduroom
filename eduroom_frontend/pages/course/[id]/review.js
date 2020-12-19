import React, { Fragment } from 'react'
import Review from '../../../components/course/review'
import GeneralNoNav from '../../../components/template/generalnonav'
import style from "../../../styles/course/review";
const review = (props) => {
    return(
    <Fragment>  
        <GeneralNoNav>
            <div className="bg">
                <Review type = "course" id={props.id}/>

            </div>
        </GeneralNoNav>     
        <style jsx>{style}</style>
    </Fragment>
    )
}
export async function getServerSideProps(ctx) {
	try {
		const id = ctx.query.id
		return { props: { id } }
	} catch (err) {
		return { props: { id: '' } }
	}
}
export default review