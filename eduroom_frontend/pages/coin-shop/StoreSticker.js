import React, { Fragment, useState } from 'react';
import Product_Sticker from '../../components/FolderCoin/Sticker_Store';
import Styles from '../../styles/CoinStyles/coin-shop.module.css';
import General from '../../components/template/general';
import PopUp from '../../components/FolderCoin/default_Pop';
import { useRouter } from 'next/router';
const Temp = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [div, setDivClass] = useState('');
  const click = () => {
    setDivClass(Styles.History);
    setTimeout(() => {
      router.push('/coin-shop/History');
    }, 500);
  };
  const renderPopup = () => {
    if (show) {
      return <PopUp onClose={() => setShow(false)}></PopUp>;
    }
  };

  return (
    <Fragment>
      {renderPopup()}
      <General>
        <div className={div}>
          <div className={Styles.animation2}>
            <div className={Styles.img3}>
              <div className={Styles.top}>
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
            <div className={Styles.btnHistory}>
              <button onClick={() => click()} className={Styles.btnHistory2}>
                History
              </button>
            </div>
          </div>
        </div>
      </General>
    </Fragment>
  );
};
export default Temp;
