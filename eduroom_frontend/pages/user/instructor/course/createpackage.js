import React, { Fragment } from 'react'
import GeneralNoNav from '../../../../components/template/generalnonav'
import Upload from '../../../../components/package/imageupload'
import Courses from '../../../../components/package/courses'
import style from '../../../../styles/package/createpackage'

const CreatePackage = () => {
    return (
        <Fragment>
            <GeneralNoNav>
            <div className="package-header">Create New Package</div>
            <div className="container">
                <div className="typebox">
                    <div><input type="text" placeholder="Package Name" id="name" name="name"></input></div>
                    <div style={{ width: '50%' }}><input type="text" placeholder="Package Price" id="price" name="price"></input></div>
                    <div style={{ width: '50%' }}>
                        <select name="categories">
                            <option value="default" disabled selected >Categories</option>
                            <option value="business">Business</option>
                            <option value="development">Development</option>
                            <option value="software">IT+Software</option>
                            <option value="design">Design</option>
                            <option value="computer">Computer</option>
                        </select>
                    </div>
                    <div><Upload/></div>
                    <div className="text">Package Detail</div>
                    <div><textarea id="detail" name="detail" rows="4" style={{ resize: 'none' }} className="pdetail"></textarea></div>
                    <div className="text">Select Courses</div>
                    <div className="coursebox" style={{overflow: 'auto', height: '400px'}}>
                        <div className="text subtitle">Your Courses</div>
                        <Courses/>
                    </div>
                    <div className="center">
                        <button onClick={() => console.log('Clicked')} className="createbutton">Create</button>
                    </div>
                </div>

            </div>
            <style jsx>{style}</style>
            </GeneralNoNav>
        </Fragment>
    )
}
export default CreatePackage