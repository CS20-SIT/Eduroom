import React, { Fragment } from 'react'
import GeneralNoNav from '../../../../components/template/generalnonav'
import Upload from '../../../../components/package/imageupload'
import Courses from '../../../../components/package/courses'
import style from '../../../../styles/package/createpackage'

const CreatePackage = () => {
    return (
        <Fragment>
            <GeneralNoNav>
                <div style={{ backgroundColor: "#f4f5f7" }}>
                    <div className="package-header">Confirm Create</div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className="container">
                            <div style={{ padding: "4% 25%" }}>
                                <div className="subtitle">Package Information</div>
                                <div><Upload /></div>
                                <div>Name</div>
                                <div>Price</div>
                                <div>Category</div>
                                <div><textarea placeholder="Package Detail" name="detail" id="pdetail" rows="6" style={{ resize: 'none' }} className="pdetail"></textarea></div>
                                <div className="subtitle">Select Courses</div>
                                <div className="coursebox" style={{ overflow: 'auto', height: '400px' }}>
                                    <div><Courses /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button onClick={() => console.log('Clicked')} className="createbutton">Confirm and Create</button>
                    </div>
                </div>
                <style jsx>{style}</style>
            </GeneralNoNav>

        </Fragment>
    )
}
export default CreatePackage