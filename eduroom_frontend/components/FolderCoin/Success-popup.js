import Card from '@material-ui/core/Card';
import Styles from '../../styles/CoinStyles/ensurePayment.module.css';
const successPopup = () => {
    return (

        <div className={Styles.setMiddle}>
            <h1>
                PURCHASED !
            </h1>
            <img className={Styles.photoPurchase} src='../../images/Coin-image/paypal 1.svg' />
            <button className={Styles.btn}>Go to Sticker Store</button>
        </div>
    );
}
export default successPopup;