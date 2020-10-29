import React, { Fragment } from 'react'
import GeneralNoNav from '../../../../components/template/generalnonav'
import Upload from '../../../../components/package/imageupload'
import Courses from '../../../../components/package/courses'
import style from '../../../../styles/package/createpackage'
import Link from 'next/link'

const CreatePackage = () => {
    return (
        <Fragment>
            <GeneralNoNav>
                <div style={{ backgroundColor: "#f4f5f7" }}>
                    <div className="package-header">Create New Package</div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className="container">
                            <div style={{ padding: "4% 25%" }}>
                                <div className="subtitle">Package Information</div>
                                <div><Upload /></div>
                                <div><input type="text" placeholder="Package Name" name="name" id="name"></input></div>
                                <div><select name="price" defaultValue="default">
                                    <option disabled value="default" >Price</option>
                                    <option value="399">399</option>
                                    <option value="499">499</option>
                                    <option value="599">599</option>
                                    <option value="699">699</option>
                                    <option value="799">799</option>
                                </select></div>
                                <div>
                                    <select name="category" defaultValue="default">
                                        <option disabled value="default" >Category</option>
                                        <option value="business">Business</option>
                                        <option value="development">Development</option>
                                        <option value="software">IT+Software</option>
                                        <option value="design">Design</option>
                                        <option value="computer">Computer</option>
                                    </select>
                                </div>
                                <div><textarea placeholder="Package Detail" name="detail" id="pdetail" rows="6" style={{ resize: 'none' }} className="pdetail"></textarea></div>
                                <div className="subtitle">Courses</div>
                                <div className="coursebox" style={{ overflow: 'auto', height: '400px' }}>
                                    <div><Courses /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Link href="/user/instructor/course/confirm">
                            <button onClick={() => console.log('Clicked')} className="createbutton">Create</button></Link>
                    </div>
                </div>
                <style jsx>{style}</style>
            </GeneralNoNav>

        </Fragment>
    )
}
export default CreatePackage