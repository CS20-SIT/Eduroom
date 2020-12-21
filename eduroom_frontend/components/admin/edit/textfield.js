import React, {Fragment} from 'react'
const TextField = ({placeholder,value,handleChange,name,type="text"}) => {
    return (
        <Fragment>
            <input className="edit-textfield" type={type} value={value} onChange={handleChange} name={name} placeholder={placeholder}/>
            <style jsx>
                {
                    `.edit-textfield{
                        background: #EFF0F6;
                        border-radius: 5px;
                        color: #828282;
                        font-size: 1.1em;
                        padding: .75rem;
                        border: none;
                        outline: none;
                        margin-bottom: .75rem;
                    }`
                }
            </style>
        </Fragment>
    )
}
export default TextField