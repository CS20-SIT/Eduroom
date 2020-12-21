import React, {Fragment} from 'react'
const EditProfile = () => {
    return (
        <Fragment>
            <div>
                <div>
                    img
                </div>
                <div style={{display:'flex'}}>
                    <div><input placeholder="Firstname"/></div>
                    <div><input placeholder="Firstname"/></div>
                </div>
                    <div><input placeholder="Display Name"/></div>

                    <div><button>SAVE</button></div>
            </div>
        </Fragment>
    )
}
export default EditProfile