import React, { Fragment, useState, useContext, useEffect } from 'react'
import style from '../../styles/course/paymentPage'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import OrderDetail from './orderDetail'
import CreditBox from './creditBox'
import PaypalBox from './paypalBox'
import {useRouter} from 'next/router'

const Checkout = () => {
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

    return (
        <Fragment>
            

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="card">
                        <Grid container className="test">
                            <Grid item xs={6} className="divleft">
                                <div style={{ paddingLeft: 40 }}>
                                    <div style={{ marginLeft: 15, marginTop: 20 }}>
                                        <h1 className="billDiv">Billing Address</h1>


                                        <div className="col-6">
                                            <select name="country" style={{ width: '250px', backgroundColor: '#FDECF4', border: '0px solid', cursor: 'pointer' }} className="country">
                                                <option value="default" disabled selected >Country</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Lao">Lao</option>
                                                <option value="Vietnam">Vietnam</option>
                                            </select>
                                            <div onChange={(event) => setType(event.target.value)}>
                                                <div >

                                                    <input type="radio" name="Transaction" value="credit" checked={type === 'credit'} style={{ cursor: 'pointer', height: 18, width: 18 }}></input>
                                                    <label for="credit" style={{ fontWeight: 550, fontSize: 18, paddingBottom: 20 }}>Credit or Debit
                                                    <img
                                                            src="/images/package/vesa.svg"
                                                            className="vesa"
                                                            
                                                            style={{ width: 50, height: 50, paddingTop: 30, marginLeft: 10 }}
                                                        />
                                                        <img
                                                            src="/images/package/masterCard.svg"
                                                            className="masterCard"
                                                            style={{ width: 50, height: 50, marginLeft: 5, paddingTop: 30 }}
                                                        />
                                                    </label>

                                                </div>
                                                <div style={{ marginBottom: 20 }}>

                                                    <input type="radio" name="Transaction" value="paypal" checked={type == "paypal"} style={{ cursor: 'pointer', height: 18, width: 18 }} />
                                                    <label for="paypal" style={{ fontWeight: 550, fontSize: 18, marginRight: 20 }}>Paypal
                                                    <img
                                                            src="/images/package/paypal.svg"
                                                            className="paypal"
                                                            style={{ width: 80, height: 20, marginLeft: 10 }}
                                                        />
                                                    </label>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        {
                                            type == 'credit' ? (<CreditBox />) : (<PaypalBox />)
                                        }
                                    </div>

                                </div>

                            </Grid>

                            <Grid item xs={6} style={{ paddingTop: 30 }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>

                                    <div className="whitebox" >
                                        <h1 style={{ fontSize: 20, marginLeft: 20 }}>Summary</h1>

                                        <Grid container>
                                            <Grid item xs={6} style={{ paddingLeft: 20, paddingBottom: 10 }}>
                                                Original Price:
                                        </Grid>

                                            <Grid item xs={6} style={{ paddingLeft: 50 }}>
                                                ฿900
                                        </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={6} style={{ paddingLeft: 20, paddingBottom: 10 }}>
                                                Coupon Discount:
                                        </Grid>

                                            <Grid item xs={6} style={{ paddingLeft: 45, color: '#9593A0' }}>
                                                -฿850
                                        </Grid>

                                        </Grid>
                                        <hr style={{width: 300}}></hr>

                                        <Grid container style={{ paddingTop: 20 }}>
                                            <Grid item xs={6} style={{ paddingLeft: 20, paddingBottom: 10 }}>
                                                Total:
                                        </Grid>

                                            <Grid item xs={6} style={{ paddingLeft: 50 }}>
                                                ฿50
                                        </Grid>

                                        </Grid>
                                        <div className="text">
                                            Eduroom is required by law to collect applicable transaction taxes
                                            for purchases made in certain tax jurisdictions.
                                        </div>
                                        <div className="compay">
                                            <Button variant="contained" style={{ backgroundColor: '#FB9CCB', color: 'white', borderRadius: 24 }}
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
                                                            <Link href="/edqiz/create"><Button variant="contained" style={{ backgroundColor: '#FB9CCB', color: 'white', borderRadius: 24, width: 200, height: 40 }}
                                                                onClick={handleOpenDialog}>Go to course</Button></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Dialog>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        <OrderDetail />
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
export default Checkout;