import { formatMs } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useState } from 'react';
import Styles from '../../styles/CoinStyles/ensurePayment.module.css';
const successPopup = (props) => {
    const[close,setState]=useState(false);
    const onClose=()=>{
        setState(true)
    }
    return (

        <div className={Styles.setMiddle}>
            <h1>
                PURCHASED !
            </h1>
            <img className={Styles.photoPurchase} src='../../images/Coin-image/paypal 1.svg' />
            <button className={Styles.btn} onClick={props.close}>Go to Sticker Store</button>
        </div>
    );
}
export default successPopup;