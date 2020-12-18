import { Container } from '@material-ui/core';
import Styles from '../../styles/CoinStyles/Pop-up.module.css';
import { useState,useEffect } from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import EnsurePay from '../FolderCoin/ensurePayment';
import Card from '@material-ui/core/Card';
import api from '../../api';
const temp = (props) => {
    const [state, setState] = useState(false);
    const [data, setData] = useState([]);
    const [coins,setCoin] = useState();
    const [name,setName] = useState();
    const PopPurchase = () => {
        setState(true)
    };
    useEffect(()=>{
        const fetchData = async ()=>{
            console.log(props.id);
            const res = await api.get(`/api/coin/stickers/${props.id}`);
            setData(res.data.stickers);
            setCoin(res.data.mycoins)
            console.log();
        };
        fetchData();
        
    },[]);
  
    return (
        <Container>
            <div className={Styles.setPayment}>
                <div className={Styles.setPhotoMoney}>
                    <img className={Styles.showPhoto} src={props.img} />
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

                    <h3>My coins:{coins}  $</h3>
                    <div>
                        <button className={Styles.btn} onClick={PopPurchase}>Purchase</button>

                        <Dialog open={state} onClose={() => setState(false)}>
                            <DialogContent style={{ width: '400px', height: '300px', padding: '0px' }}><EnsurePay closeEnsure={() => { props.closePopup(); setState(false) }} close={() => setState(false)} /></DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
            <div className={Styles.line}></div>
            <div className={Styles.listSticker}>
                {data.map(picture => (
                    <img className={Styles.picture} src={picture.stickerimg} />
                ))}
            </div>
        </Container>
    );
}
export default temp;