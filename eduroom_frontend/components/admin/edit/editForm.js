import React, {Fragment,useState} from 'react'
import EditSection from './editSection'
const EditForm = () => {
    const [open,setOpen] = useState('')
    const handleToggle = (type) => {
        if(open == type){
            setOpen('')
        } else{
            setOpen(type)
        }
    } 
    return (
        <Fragment>
            <EditSection type="profile" open={open=='profile'} handleToggle = {handleToggle}/>
            <EditSection type="password" open={open=='password'} handleToggle = {handleToggle}/>
        </Fragment>
    )
}
export default EditForm