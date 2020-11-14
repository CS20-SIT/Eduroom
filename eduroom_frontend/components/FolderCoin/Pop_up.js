import { Container } from '@material-ui/core';
import Styles from '../../styles/CoinStyles/Pop-up.module.css';
import { useState } from 'react';
import {Dialog, DialogContent} from '@material-ui/core';
import EnsurePay from '../FolderCoin/ensurePayment';
import Card from '@material-ui/core/Card';
const temp = (props) => {
    const [state, setState] = useState(false);
    const PopPurchase = () => {
        setState(true)
    };
    const listPicture = [
        { src: '../../images/Coin-image/Icon_Avocado.svg' },
        { src: '../../images/Coin-image/Icon_Coconut_2.svg' },
        { src: '../../images/Coin-image/Icon_Garnet.svg' },
        { src: '../../images/Coin-image/Icon_Peach.svg' },
        { src: '../../images/Coin-image/Icon_Lemon.svg' },
        { src: '../../images/Coin-image/Icon_Orange.svg' },
        { src: '../../images/Coin-image/Icon_Pear.svg' },
        { src: '../../images/Coin-image/Icon_Red Apple.svg' }
    ]
    return (
        <Container>
            <div className={Styles.setPayment}>
                <div className={Styles.setPhotoMoney}>
                    <img className={Styles.showPhoto} src='../../images/Coin-image/Icon_Peach.svg' />
                    <div className={Styles.setMoney}>
                        <img className={Styles.coinPhoto} src='../../images/Coin-image/icon_coin_back.svg' />
                        <h3 className={Styles.priceView}>{props.price} $</h3>
                    </div>
                </div>
                <div className={Styles.title}>

                    <h1 >
                        {props.title}
                    </h1>
                    <p>Neque porro quisquam est qui dolorem ipsum
                quia dolor sit amet, consectetur, adipisci</p>
                    <h3>No expiration Date</h3>

                    <h3>My coins: 99 $</h3>
                    <div>
                        <button className={Styles.btn} onClick={PopPurchase}>Purchase</button>
                        
                        <Dialog open={state} onClose={() => setState(false)}>
                            <DialogContent style={{ width: '400px', height: '300px', padding: '0px' }}><EnsurePay /></DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
            <div className={Styles.line}></div>
            <div className={Styles.listSticker}>
                {listPicture.map(picture => (
                    <img className={Styles.picture} src={picture.src} />
                ))}
            </div>
        </Container>
    );
}
export default temp;