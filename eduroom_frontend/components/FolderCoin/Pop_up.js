import { Container } from '@material-ui/core';
import Styles from '../../styles/CoinStyles/Pop-up.module.css';
import { useState,useEffect } from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import EnsurePay from '../FolderCoin/ensurePayment';
import api from '../../api';
const temp = (props) => {
    const [state, setState] = useState(false);
    const [data, setData] = useState([]);
    const [coins,setCoin] = useState();
    const [id,setId] = useState();
    const [status,setStatus] = useState();
const getClass= () =>{
    if(status === 'not avaliable'){
        return Styles.btn
    }else{
        return Styles.disbtn
    }
}
const text = () =>{
    if(status ==='not avaliable'){
        return 'puchase'
    }else{
        return 'Your already own'
    }
}
    const PopPurchase = () => {
        if(status==='not avaliable'){
            setState(true)
        }else{
            setState(false);
        }
        
    };
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await api.get(`/api/coin/stickers/${props.id}`);
            const check = await api.get('/api/coin/checkStickerOwner/',{params:{stickerid:props.id}});
            console.log(check.data)
            console.log(res.data);
            console.log(props.id);
            setData(res.data.stickers);
            setCoin(res.data.mycoins)
            setId(props.id);
            setStatus(check.data.sticker)
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
                        <button className={getClass()} onClick={PopPurchase}>{text()}</button>

                        <Dialog open={state} onClose={() => setState(false)}>
                            <DialogContent style={{ width: '400px', height: '300px', padding: '0px' }}><EnsurePay item={id} closeEnsure={() => { props.closePopup(); setState(false) }} close={() => setState(false)} /></DialogContent>
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