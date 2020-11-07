import React, { Fragment, useState } from 'react'
import style from '../../styles/package/createpackage'
import Selected from './selectedcourse'
import Dialog from '@material-ui/core/Dialog'
import { useRouter } from 'next/router'

const ConfirmPackage = (props) => {
    const [open, setOpen] = useState(false)
    const router = useRouter();
    const [type] = useState("created");
    const handleOpenDialog = (e) => {
        e.preventDefault()
        setOpen(true)
        handleSubmit();
    }
    const handleCloseDialog = (e) => {
        e.preventDefault()
        setOpen(false)
    }
    const handleSubmit = () => {
        console.log(type);

    }
    return (
        <Fragment>
            
                <div style={{ backgroundColor: "#f4f5f7" }}>
                    <div className="package-header">Confirm Create</div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className="container">
                            <div style={{ padding: "4% 25%" }}>
                                <div style={{
                                    border: "1px solid black",
                                    padding: "30px 35px",
                                    width: "100%",
                                    height: "250px",
                                    marginBottom: "30px"
                                }}>image</div>
                                <div className="subtitle">Name</div>
                                <div style={{ fontSize: "16px", fontWeight: "500", paddingBottom: "20px", color: "#5b5b5b" }}>
                                    ฿<span>Price</span></div>
                                <div style={{ fontSize: "16px", fontWeight: "500", paddingBottom: "25px", color: "#5b5b5b" }}>Category</div>
                                <div className="subtitle">Package Detail</div>
                                <div style={{ border: "1px solid white", marginBottom: "25px" }}>
                                    <div>
                                        Non dolore minim et dolore ea qui cillum nisi cupidatat ea consectetur laborum. Esse aliquip tempor aliqua fugiat incididunt aliquip ut. Ea pariatur Lorem cillum officia excepteur laborum magna. Pariatur dolore voluptate magna exercitation adipisicing aliquip enim eiusmod sint consectetur aute commodo culpa. Velit mollit id nulla sunt fugiat elit et sunt enim irure nisi sint tempor. Consequat quis dolore aliquip sunt et ipsum commodo laborum eiusmod.
                                    </div>
                                </div>
                                <div className="subtitle">Selected Courses</div>
                                <div className="coursebox" style={{ overflow: 'auto', height: '400px' }}>
                                    <div><Selected /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                    <button onClick={()=>props.changePage(1)} style=
                    {{
                        border: 'none',
                        backgroundColor: '#f4f5f7',
                        padding: 0
                    }}><i className="fas fa-arrow-left"></i>
                    </button>
                    <button className="createbutton" onClick={handleOpenDialog}>Confirm and Create</button>
                        

                        <Dialog open={open} onClose={handleCloseDialog} >
                            <div className="dialog">
                                <div className="indialog">
                                    <div style={{ display: "flex", justifyContent: "flex-end", width: "108%" }}>
                                        <button style={{ 
                                            backgroundColor: "white", 
                                            border: "none", 
                                            cursor: "pointer", 
                                            color: "#3D467F" 
                                            }} 
                                            onClick={() => router.push("/user/instructor/course")}>X</button>
                                    </div>
                                    <div><img
                                        src="/images/package/createsuccess.svg"
                                        style={{ width: 200, height: 200 }}
                                    />
                                    </div>

                                    <div style={{ fontSize: "28px", color: "#3D467F", paddingBottom: "15px" }}>Create Package Successful !</div>
                                </div>
                            </div>
                        </Dialog>
                    </div>
                </div>
                <style jsx>{style}</style>
            

        </Fragment >
    )
}
export default ConfirmPackage