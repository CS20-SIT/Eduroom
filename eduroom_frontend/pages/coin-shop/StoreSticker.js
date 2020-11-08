import React, { Fragment, useState, useEffect } from 'react';
import Product_Sticker from '../../components/FolderCoin/Sticker_Store';
import Styles from '../../styles/CoinStyles/coin-shop.module.css';
import General from '../../components/template/general';
import PopUp from '../../components/FolderCoin/default_Pop';
const Temp = () => {
    const [show, setShow] = useState(false);
    const renderPopup = () => {
        if (show) {
            return <PopUp onClose={() => setShow(false)}></PopUp>;
        }
    };

    return (
        <Fragment>
            {renderPopup()}
            <General>
                <div className={Styles.animation2}>
                    <div className={Styles.img3}>
                        <div>
                            <Product_Sticker></Product_Sticker>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            setShow(true);
                        }}
                        className={Styles.btnPop}
                    >
                        TestPopup
                    </button>
                </div>
            </General>
        </Fragment>
    );
};
export default Temp;
