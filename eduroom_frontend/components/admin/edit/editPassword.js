import React, {Fragment, useState} from 'react'
import TextField from './textfield'
const EditPassword =() => {
    const field = [{
        placeholder: 'Old Password',
        name: 'oldPassword',
    },{
        placeholder: 'New Password',
        name: 'newPassword'
    }]
    const handleChange = (e) => {
        setEditValue({...editValue,[e.target.name]:e.target.value})
    }
    const handleSubmit = () => {
        console.log(editValue)
    }
    const [editValue,setEditValue] = useState({
        oldPassword: '',
        newPassword: '',
    })
    return (
        <Fragment>
            <div className="editpassword-form">
                    {
                        field.map(el=>{
                            return (
                                <TextField placeholder={el.placeholder} name={el.name} value={editValue[el.name]} type="password" handleChange={handleChange} />
                            )
                        })
                    }
                    <div className="editpassword-btn-div"><button className="editpassword-btn" onClick={handleSubmit}>Change</button>
                    </div>
            </div>
            <style jsx>
                {
                    `
                    .editpassword-form {
                        width: 100%;
                        display:flex;
                        flex-flow:column;
                        justify-content:center;
                        padding-top: 1rem;
                    }
                    .editpassword-btn-div {
                        display:flex;
                        justify-content:center;
                        padding: .5rem;
                    }
                    .editpassword-btn {
                        padding: .5rem 2rem;
                        font-size: 1.2em;
                        font-weight: bold;
                        color: white;
                        background: #FB9CCB;
                        text-transform: uppercase;
                        border-radius: 25px;
                        border: none;
                        outline: none;
                    }`
                }
            </style>
        </Fragment>
    )
}
export default EditPassword