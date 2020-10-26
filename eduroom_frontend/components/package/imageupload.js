import React, { Fragment } from 'react'
import style from '../../styles/package/createpackage'

const Upload = () => {
    return (
        <Fragment>
            <div className="imageupload">
                <span><i className="fas fa-camera"></i>
                    <br></br> Click here to add a photo</span>
            </div>
            <style jsx>{style}</style>
        </Fragment>
    )
}
export default Upload
