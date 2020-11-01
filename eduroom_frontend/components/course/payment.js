import React, { Fragment } from 'react'
import style from '../../styles/course/paymentPage';
import Grid from '@material-ui/core/Grid';
const checkout = () => {
    return (
        <Fragment>
            <div className="bg">
                <div className="CheckoutBar"> checkout</div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card">
                        <Grid container  className="test"> 
                            <Grid item xs={6}  className="divleft">
                                <div>
                                    <div style={{marginLeft: 50, marginTop: 20}}>
                                    <h1 className="billDiv">Billing Address</h1>
                                    <div className="col-6">
                                        <select name="country" style={{ width: '200px' }} className="country">
                                            <option value="default" disabled selected>Country</option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="Lao">Lao</option>
                                            <option value="Vietnam">Vietnam</option>
                                        </select>

                                        <div>
                                            <input type="radio" name="credit"></input>
                                            <label for="credit" style={{ fontWeight: 550, fontSize: 18 }}>Credit or Debit</label>
                                        </div>
                                        <div style={{ marginBottom: 20 }}>
                                            <input type="radio" name="Paypal"></input>
                                            <label for="credit" style={{ fontWeight: 550, fontSize: 18 }}>Paypal</label>
                                        </div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <div className="purplebox" >
                                            <div className="inner-purple">
                                                <div className="input-name">  <input type="text" className="input-text" placeholder="Your name on card" /></div>
                                                <div className="input-name">  <input type="text" className="input-text" placeholder="Your card number" /></div>
                                                <div className="input-name">
                                                    <div style={{ width: '25%', marginRight: '1.5%' }}>
                                                        <select className="input-text">
                                                            <option>MM</option>
                                                            <option>MM</option>
                                                            <option>MM</option>
                                                            <option>MM</option></select></div>
                                                    <div style={{ width: '25%', margin: '0% 1.5%' }}>
                                                        {/* <input type="text" className="input-text"/> */}
                                                        <select className="input-text">
                                                            <option>YYYY</option>
                                                            <option>YYYY</option>
                                                            <option>YYYY</option>
                                                            <option>YYYY</option></select>
                                                    </div>
                                                    <div style={{ width: '50%', marginLeft: '1.5%' }}><input type="text" className="input-text" placeholder="Security Code" /></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item xs={6} style={{paddingTop:30}}>
                                <div style={{display: 'flex', justifyContent: 'center' }}>
                                    <div className="whitebox" >
                                        <h1 style={{fontSize: 24, marginLeft : 20}}>Summary</h1>

                                        <Grid container>
                                        <Grid item xs={6} style={{paddingLeft: 20, paddingBottom: 10}}>
                                            Original Price:
                                        </Grid>
                                        
                                        <Grid item xs={6} style={{paddingLeft: 50}}>
                                           ฿900
                                        </Grid>
                                        </Grid>

                                        <Grid container>
                                        <Grid item xs={6} style={{paddingLeft: 20, paddingBottom: 10}}>
                                            Coupon Discount:
                                        </Grid>
                                        
                                        <Grid item xs={6} style={{paddingLeft: 45}}>
                                            -฿850
                                        </Grid>
                                        
                                        </Grid>
                                        <hr></hr>

                                        <Grid container style={{paddingTop: 20}}>
                                        <Grid item xs={6} style={{paddingLeft: 20 ,paddingBottom: 10}}>
                                            Total:
                                        </Grid>
                                        
                                        <Grid item xs={6} style={{paddingLeft: 50}}>
                                            ฿50
                                        </Grid>
                                        
                                        </Grid>
                                        <div className="text">
                                        Eduroom is required by law to collect applicable transaction taxes 
                                        for purchases made in certain tax jurisdictions. By completing 
                                        your purchase you agree to these Terms of Service
                                        </div>
                                    </div>
                                </div>



                            </Grid>

                        </Grid>
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
export default checkout;