import React, {Fragment} from 'react'
import EditProfile from './editProfile'
import EditPassword from './editPassword'
const EditSection = ({type,open,handleToggle}) => {
    return (
        <Fragment>
            <div>
                <div>
            <div>{type}</div>
            <div onClick={()=>{handleToggle(type)}}><i className="fas fa-angle-down"/></div></div>
            {
                open ? (type == 'profile' ? (
                    <EditProfile/>
                ) : (
                    <EditPassword/>
                )) : null
            }
            </div>
        </Fragment>
    )
}
export default EditSection
