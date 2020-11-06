import React, { Fragment, useState } from 'react'
import style from '../../styles/package/ownpackage'
import Link from 'next/link'
import Dialog from '@material-ui/core/Dialog'
import { useRouter } from 'next/router'
import api from '../../api'
const Ownpackage = () => {
    const handleClick = () => {
        api
        .post('/api/')
    }
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
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '15%', alignItems: 'center' }}>
                            <div style={{
                                border: "1px solid black",
                                height: 90,
                                margin: 5
                            }}>Picture</div>
                        </div>
                        <div style={{ width: '90%', marginLeft: '35px', padding: '4px 0' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: "90%", fontSize: 20, fontWeight: 550 }}>Package Name</div>

                                <div style={{ paddingLeft: '10%' }}>
                                    <button style={{
                                        backgroundColor: "#fdecf4",
                                        border: "none",
                                        cursor: "pointer",
                                        color: "#3D467F",
                                        fontWeight: 600
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
                                                    <button className="ycbutton"
                                                        onClick={() => router.push("/user/instructor/course")}>Yes</button>
                                                    <button className="ycbutton" style={{backgroundColor: '#5b5b5b'}}
                                                        onClick={() => router.push("/user/instructor/course")}>Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog>
                                </div>
                            </div>
                            <div style={{ fontSize: 15, fontWeight: 500, paddingTop: 4 }}>฿<span>price</span></div>
                            <div>
                                <div style={{ fontSize: 15, fontWeight: 500, paddingTop: 4 }}>Category</div>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <button onClick={() => console.log('Clicked')} className="pebutton"><i className="fas fa-globe"></i>publish</button>
                                    <Link href="/user/instructor/course/edit">
                                        <button onClick={() => console.log('Clicked')} className="pebutton"><i className="fas fa-pen"></i>edit</button></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

                                    


            <style jsx>{style}</style>

        </Fragment>
    )
}
export default Ownpackage
