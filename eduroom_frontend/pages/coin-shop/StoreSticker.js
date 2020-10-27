import React, { Fragment} from 'react';
import Product_Sticker from '../../components/FolderCoin/Sticker_Store';
import Styles from '../../styles/CoinStyles/coin-shop.module.css';
const Temp = () => {
    return (
        <Fragment>
            <div className={Styles.animation2}>
                <div>
                    <div>
                        This is coin-shop
                        <span
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                width: '100vw'
                            }}
                        >
                            Coin : 10000000000000
                        </span>
                    </div>
                    <h1>All sticker</h1>
                    <Product_Sticker></Product_Sticker>
                </div>
            </div>
        </Fragment>
    );
};
export default Temp;
