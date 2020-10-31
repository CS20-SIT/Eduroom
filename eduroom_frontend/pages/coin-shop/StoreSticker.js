import React, { Fragment } from 'react';
import Product_Sticker from '../../components/FolderCoin/Sticker_Store';
import Styles from '../../styles/CoinStyles/coin-shop.module.css';
import General from '../../components/template/general';
import Link from 'next/link';
const Temp = () => {
    return (
        <Fragment>
            <General>
                <div className={Styles.animation2}>
                    <div className={Styles.img3}>
                        <div>
                            <Product_Sticker></Product_Sticker>
                        </div>
                    </div>
                    
                </div>
            </General>
            <Link href='/coin-shop/test'>
                <a className={Styles.test}>a</a>
            </Link>
        </Fragment>
    );
};
export default Temp;
