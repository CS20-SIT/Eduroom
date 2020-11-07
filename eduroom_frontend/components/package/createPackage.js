import React, { Fragment } from 'react'
import Upload from './imageupload'
import Courses from './courses'
import style from '../../styles/package/createpackage'

const CreatePackage = (props) => {
    return (
        <Fragment>
            <div style={{ backgroundColor: "#f4f5f7" }}>
                <div className="package-header">Create New Package</div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="container">
                        <div style={{ padding: "4% 15%" }}>
                        <div className="subtitle">Package Information</div>
                            <div style={{display: 'flex'}}>
                                
                                <div style={{ width: '50%', marginRight: '5%' }}>
                                    <div><Upload index={0} /></div>
                                </div>
                                <div style={{ width: '60%'}}>
                                    <div><input type="text" placeholder="Package Name" name="name" id="name"></input></div>
                                    <div>
                                        <select name="discount" defaultValue="default">
                                            <option disabled value="default" >Discount</option>
                                            <option value="5">5%</option>
                                            <option value="10">10%</option>
                                            <option value="20">20%</option>
                                            <option value="30">30%</option>
                                            <option value="40">40%</option>
                                            <option value="50">50%</option>
                                            <option value="60">60%</option>
                                            <option value="70">70%</option>
                                        </select>
                                    </div>
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
                                    <div><textarea placeholder="Package Detail" name="detail" id="pdetail" rows="4" style={{ resize: 'none' }} className="pdetail"></textarea></div>
                                </div>
                            </div>
                            <div>
                                <div className="subtitle">Courses</div>
                                <div className="coursebox" style={{ overflow: 'auto', height: '400px' }}>
                                    <div><Courses /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center",marginBottom: '5%' }}>

                    <button onClick={() => props.changePage(2)} className="createbutton">Create</button>
                </div>
            </div>
            <style jsx>{style}</style>


        </Fragment>
    )
}
export default CreatePackage