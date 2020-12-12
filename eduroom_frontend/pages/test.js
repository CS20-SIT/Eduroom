import React, {Fragment, useState} from 'react'
import AuthDialog from '../components/landing/authDialog'
import General from '../components/template/general'
const Test =  () => {
    const [dialog,setDialog] = useState(false)
    return (
        <Fragment>
            <General>
                <button onClick={()=>{setDialog(!dialog)}}>click</button>
                {
                    dialog ? (
                        <AuthDialog handleClick={()=>{setDialog(false)}}/>
                    ) :null
                }
            </General>
        </Fragment>
    )
}
export default Test;