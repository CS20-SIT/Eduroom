import React, { Fragment, useState } from 'react'
import General from '../../../../components/template/general'
import style from '../../../../styles/package/createpackage'
import Selected from '../../../../components/package/selectedcourse'
import Dialog from '@material-ui/core/Dialog'
import { useRouter } from 'next/router'

const Confirm = () => {
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
            <General>
                <div style={{ backgroundColor: "#f4f5f7" }}>
                    <div className="package-header">Confirm Edit</div>
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
                        <button className="createbutton" onClick={handleOpenDialog}>Confirm and Update</button>

                        <Dialog open={open} onClose={handleCloseDialog} >
                            <div className="dialog">
                                <div className="indialog">
                                    <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                                        <button style={{ backgroundColor: "white", border: "none", cursor: "pointer", color: "#3D467F" }} onClick={() => router.push("/user/instructor/course")}>X</button>
                                    </div>
                                    <div><img
                                        src="/images/package/edited.svg"
                                        style={{ width: 200, height: 200 }}
                                    />
                                    </div>

                                    <div style={{ fontSize: "28px", color: "#3D467F", paddingBottom: "15px" }}>Your package is already updated !</div>
                                </div>
                            </div>
                        </Dialog>
                    </div>
                </div>
                <style jsx>{style}</style>
            </General >

        </Fragment >
    )
}
export default Confirm