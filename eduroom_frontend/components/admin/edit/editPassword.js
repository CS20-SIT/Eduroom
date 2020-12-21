import React, {Fragment} from 'react'
const EditPassword =() => {
    return (
        <Fragment>
            <div>
                <div><input placeholder="Old Password"/></div>
                <div><input placeholder="New Password"/></div>
                <div><button>Change</button></div>
            </div>
        </Fragment>
    )
}
export default EditPassword