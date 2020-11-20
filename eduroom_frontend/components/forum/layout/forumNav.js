import React, {Fragment} from 'react'
import Navbar from '../../layouts/navbar'
import CustomNav from './customNav'
const ForumNav = () => {
    return (
        <Fragment>
            <Navbar>
                <CustomNav/>
            </Navbar>
        </Fragment>
    )
}
export default ForumNav;