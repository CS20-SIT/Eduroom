import React, { Fragment, useState } from 'react'
import style from '../../styles/package/ownpackage'
import Link from 'next/link'
import Dialog from '@material-ui/core/Dialog'
import { useRouter } from 'next/router'
import api from '../../api'
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
            <div className="center pdt-20">
                <div className="package">
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '15%' }}>
                            <div className="picture">Picture</div>
                        </div>
                        <div className="block2">
                            <div style={{ display: 'flex' }}>
                                <div className="name">Package Name</div>

                                <div style={{ paddingLeft: '10%' }}>
                                    <button className="Xbutton" onClick={handleOpenDialog}>X</button>
                                    <Dialog open={open}>
                                        <div className="dialog">
                                            <div className="indialog">
                                                <div className="dialog-content">Do you want to remove this package?</div>
                                                <div>
                                                    <img
                                                        src="/images/package/remove.svg"
                                                        style={{ width: 200, height: 180 }}
                                                    />
                                                </div>
                                                <div>
                                                    <button className="ycbutton"
                                                        onClick={() => router.push("/user/instructor/course")}>Yes</button>
                                                    <button className="ycbutton" style={{ backgroundColor: '#5b5b5b' }}
                                                        onClick={handleCloseDialog}>Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog>
                                </div>
                            </div>
                            <div className="pri-cat">฿<span>price</span></div>
                            <div>
                                <div className="pri-cat">Category</div>
                                <div className="right">
                                    <button onClick={() => console.log('Clicked')} className="pebutton"><i className="fas fa-globe"></i>publish</button>
                                    <Link href="/user/instructor/course/editpackage">
                                        <button onClick={() => console.log('Clicked')} className="pebutton"><i className="fas fa-pen"></i>edit</button>
                                    </Link>
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
