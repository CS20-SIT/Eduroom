import React, { Fragment, useEffect, useState } from "react";
import style from '../../styles/course/paymentPage'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import { useRouter } from 'next/router'

const creditBox = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false)
    const [type, setType] = useState("credit");
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
    useEffect(() => {
        console.log(type);

    }, [type])

    const [createForm, setForm] = useState({
        name: "",
        cardNum: "",
        secure: "",
    });
    const handleChange = (e) => {
        e.preventDefault();
        setForm({ ...createForm, [e.target.name]: e.target.value });
    };

    return (
        <Fragment>
            <div className="purplebox">
                <div className="inner-purple">
                    <div className="input-name">  <input type="text" className="input-text" placeholder="Your name on card"
                        style={{ borderRadius: 10, border: 'none' }}
                        name="name"
                        type={"text"}
                        value={createForm.name}
                        onChange={handleChange}
                    /></div>
                    <div className="input-name">  <input type="text" className="input-text" placeholder="Your card number"
                        style={{ borderRadius: 10, border: 'none' }}
                        name="cardNum"
                        type={"text"}
                        value={createForm.cardNum}
                        onChange={handleChange}
                    /></div>
                    <div className="input-name">
                        <div style={{ width: '25%', marginRight: '1.5%' }}>
                            <select className="input-text" style={{ cursor: 'pointer' }}>
                                <option>MM</option>
                                <option>MM</option>
                                <option>MM</option>
                                <option>MM</option></select></div>
                        <div style={{ width: '25%', margin: '0% 1.5%' }}>

                            <select className="input-text" style={{ cursor: 'pointer' }}>
                                <option>YYYY</option>
                                <option>YYYY</option>
                                <option>YYYY</option>
                                <option>YYYY</option></select>
                        </div>
                        <div style={{ width: '50%', marginLeft: '1.5%' }}>
                            <input type="text" className="input-text"
                            placeholder="Security Code"
                            style={{ borderRadius: 10, border: 'none' }}
                            name="secure"
                            type={"text"}
                            value={createForm.secure}
                            onChange={handleChange}
                        />
                        </div></div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-start', paddingRight: 150,flexDirection:'row' }}>
                    <img
                        src="/images/package/newLock.svg"
                        className="google-logo"
                        style={{ width: 35, height: 35, marginRight: 2, marginLeft:30 }}
                    />
                        <div style={{ color: '#5B5B5B'}} className="col-6">Secure<br></br>Connection</div>

                        <div className="col-6" style={{marginLeft:70}}>
                        <div className="compay">
                            <Button variant="contained" style={{ backgroundColor: '#FB9CCB', color: 'white', borderRadius: 24,width:180,height:30}}
                                onClick={handleOpenDialog}>Complete Payment</Button>

                            <Dialog open={open} onClose={handleCloseDialog} >
                                <div >
                                    <div style={{ backgroundColor: 'white', border: '5px solid #F2ECFE' }}>
                                        <DialogTitle style={{ textAlign: 'center' }}>
                                            <div style={{ fontSize: '2em', color: '#A880F7', fontWeight: 700, marginTop: 20 }}>PURECHASED!</div>
                                        </DialogTitle>

                                        <DialogContent style={{ width: '450px', height: '400px', display: 'flex', justifyContent: 'center' }}>

                                            <img
                                                src="/images/package/purchesed.svg"
                                                className="google-logo"
                                                style={{ width: 350, height: 350 }}
                                            />

                                        </DialogContent>

                                        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 30 }}>
                                            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 30 }}>
                                                <Button variant="contained" style={{ backgroundColor: '#FB9CCB', color: 'white', borderRadius: 24, width: 200, height: 40 }}
                                                    onClick={() => router.push("/course")}>Go to course</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dialog>
                        </div>
                    
                    </div>
                </div>
            </div>

            <style jsx>
                {
                    style
                }
            </style>
        </Fragment>
    )
}
export default creditBox;
