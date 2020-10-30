import React, { Fragment, useEffect, useState } from "react";
import style from '../../styles/course/paymentPage'

const creditBox = () => {
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
            <div className="purplebox" >
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
                        <div style={{ width: '25%', marginRight: '1.5%'}}>
                            <select className="input-text" style={{cursor: 'pointer'}}>
                                <option>MM</option>
                                <option>MM</option>
                                <option>MM</option>
                                <option>MM</option></select></div>
                        <div style={{ width: '25%', margin: '0% 1.5%' }}>

                            <select className="input-text" style={{cursor: 'pointer'}}>
                                <option>YYYY</option>
                                <option>YYYY</option>
                                <option>YYYY</option>
                                <option>YYYY</option></select>
                        </div>
                        <div style={{ width: '50%', marginLeft: '1.5%' }}><input type="text" className="input-text" 
                        placeholder="Security Code" 
                        style={{ borderRadius: 10, border: 'none' }} 
                        name="secure"
                        type={"text"}
                        value={createForm.secure}
                        onChange={handleChange}
                        /></div></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 30 }}>
                    <img
                        src="/images/package/lock.svg"
                        className="google-logo"
                        style={{ width: 35, height: 35, marginRight: 10 }}
                    />
                    <div style={{ color: 'white' }}>Secure  <br></br>Connection</div>

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
