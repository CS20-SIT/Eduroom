import React, { Fragment} from 'react';
import Product_Sticker from '../../components/FolderCoin/Sticker_Store';
import Styles from '../../styles/CoinStyles/coin-shop.module.css';
import Pop from '../../components/FolderCoin/Pop_up';
import Main from '../../components/FolderCoin/Main_Store';
import General from '../../components/template/generalnonav';
const Temp = () => {
    return (
        <Fragment>
            <General/>
            <div className={Styles.img3}>
            <div className={Styles.animation2}>
                <div>
                    <h1>All sticker</h1>
                    <Product_Sticker></Product_Sticker>
                    
                </div>
            </div>
            </div>

        </Fragment>
    );
};
export default Temp;
