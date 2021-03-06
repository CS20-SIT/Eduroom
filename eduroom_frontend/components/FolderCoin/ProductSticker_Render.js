import Card from '@material-ui/core/Card';
import Styles from '../../styles/CoinStyles/ProductSticker_Render.module.css';
import CardContent from '@material-ui/core/CardContent';
import Pop from '../../components/FolderCoin/Pop_up'
import { useState } from 'react';
import {Dialog, DialogContent} from '@material-ui/core'
const Name = props => {
    const[state,setState] = useState(false);
    // state={
    //     seen: false

    // };
    const togglePop = () => {
        setState(true)
      };
    return (
        <div className={Styles.cardContainer}>
            <Card>
                <CardContent>
                    <div >
                        <div className={Styles.container}>
                            <h1 className={Styles.text2}>
                                Name Sticker : {props.title}
                            </h1>
                            <div >
                                <img className={Styles.picture} src={props.img}/>
                                </div>
                            <div>
                            <button
                                className={Styles.btn} onClick={togglePop}
                            >
                                Buy!
                            </button>
                            <Dialog open={state} onClose={()=>setState(false)}>
                                <DialogContent style={{width:'500px',height:'500px',padding: '0px'}}>
                                    <Pop id={props.id} img={props.img} title={props.title} price={props.price}  closePopup={()=>setState(false)}/>
                                </DialogContent>
                            </Dialog>
                            </div>
                            <h1 className={Styles.text}>
                                <img
                                    className={Styles.coin}
                                    src='../../images/Coin-image/icon_coin_back.svg'
                                />
                                : {props.price} $
                            </h1>
                        </div>
                    </div>
                    
                </CardContent>
            </Card>
        </div>
    );
};
export default Name;
