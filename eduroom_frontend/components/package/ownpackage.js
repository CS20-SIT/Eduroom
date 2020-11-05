import React, { Fragment, useState } from 'react'
import style from '../../styles/package/ownpackage'
import Link from 'next/link'
import Dialog from '@material-ui/core/Dialog'
import { useRouter } from 'next/router'
const Ownpackage = () => {
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

            <div style={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}>
                <div className="package">
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'start' }}>
                            <div style={{ width: 300, height: 85, marginRight: 40, border: "1px solid black" }}>Picture</div>

                            <div style={{ width: '100%' }}>
                                <div style={{ fontSize: 20, fontWeight: 550 }}>Package Name</div>
                                <div style={{ fontSize: 15, fontWeight: 500, paddingTop: 4 }}>฿<span>price</span></div>
                                <div style={{ fontSize: 15, fontWeight: 500, paddingTop: 4 }}>Category</div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-end", width: "108%" }}>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <button style={{
                                        backgroundColor: "#fdecf4",
                                        border: "none",
                                        cursor: "pointer",
                                        color: "#3D467F"
                                    }} onClick={handleOpenDialog}>X</button>
                                    <Dialog open={open} onClose={handleCloseDialog} >
                                        <div className="dialog">
                                            <div className="indialog">
                                                <div style={{ fontSize: "28px", color: "#3D467F" }}>Do you want to remove this package?</div>
                                                <div><img
                                                    src="/images/package/remove.svg"
                                                    style={{ width: 200, height: 180 }}
                                                />
                                                </div>
                                                <div>
                                                    <button style={{ cursor: "pointer", color: "#3D467F" }}
                                                        onClick={() => router.push("/user/instructor/course")}>yes</button>
                                                    <button style={{ cursor: "pointer", color: "#3D467F" }}
                                                        onClick={() => router.push("/user/instructor/course")}>cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingLeft: '90%' }}>
                            <button onClick={() => console.log('Clicked')} className="publishbutton">Publish</button>
                            <Link href="/user/instructor/course/edit">
                                <button onClick={() => console.log('Clicked')} className="editbutton">Edit</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{style}</style>

        </Fragment>
    )
}
export default Ownpackage
