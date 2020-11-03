import React, { Fragment } from 'react'
import GeneralNoNav from '../../../components/template/generalnonav'
const InstructorRegister = () => {
    return <Fragment>
    <GeneralNoNav>
        <div>
            <h1>Instructor   Profile</h1><input type="text" id="Degree" placeholder="Degree" /><br />
            <input type="text" id="Expert" placeholder="Expert" /><br />
            <textarea rows="4" cols="50" name="Bio" form="profile" placeholder="Bio">
            </textarea><br />
            <input type="submit" value="SUBMIT" />

        </div></GeneralNoNav>
        </Fragment>

    
}
export default InstructorRegister