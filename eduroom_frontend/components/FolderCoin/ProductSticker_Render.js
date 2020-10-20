import Link from 'next/link';
import Styles from '../../styles/CoinStyles/ProductSticker_Render.module.css';
const Name = props => {

    return (
        <div className={Styles.cardContainer}>
            <div style={{ padding: '20px' }}>
                <div className={Styles.container}>
                    <h1 className={Styles.text}>
                        Name Sticker : {props.title}
                    </h1>
                    <h1 className={Styles.text}>
                        Price of Sticker :{props.price} Coin
                    </h1>
                    <Link href={`/coin-shop/payment/${props.id}`}>
                        <a className={Styles.btn}>Buy!</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Name;
