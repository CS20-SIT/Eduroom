import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Styles from '../../styles/CoinStyles/coin-shop.module.css';
import General from '../../components/template/general';

const Temp = () => {
    const router = useRouter();
    const [divClass, setDivClass] = useState('');
    const click = () => {
        setDivClass(Styles.animation);
        setTimeout(() => {
            router.push('/coin-shop/StoreSticker');
        }, 500);
    };
    return (
        <Fragment>
            <General>
            <div className={divClass}>
            
            
                <div className={Styles.img}>
                    <span className={Styles.text}>
                        Welcome to Sticker Store!
                    </span>
                    <span className={Styles.detail}>
                        This is Store for exchange coin to the sticker
                        <br />Sticker that's Prize for the people who has Ambition
                    </span>
                    
                    <div className={Styles.posball2}>
                        <div className={Styles.balloon}></div>
                    </div>
                    <div className={Styles.posball}>
                        <div className={Styles.balloon2}></div>
                    </div>
                    <div>
                        <button onClick={() => click()} className={Styles.btn}>
                            Shopping
                        </button>
                    </div>
                </div>
                
            </div>
            </General>
        </Fragment>
    );
};
export default Temp;
