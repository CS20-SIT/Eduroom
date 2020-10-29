import React, { Fragment,useState } from 'react';
import { useRouter } from 'next/router';
import Styles from '../../styles/CoinStyles/coin-shop.module.css';
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
            <div className={divClass}>
          <h1>HomePage</h1>
          <button onClick={()=>click()}>Go to Store</button>
          </div>
        </Fragment>
    );
};
export default Temp;
