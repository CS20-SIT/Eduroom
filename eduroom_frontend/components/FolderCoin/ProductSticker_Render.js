import Card from '@material-ui/core/Card';
import Styles from '../../styles/CoinStyles/ProductSticker_Render.module.css';
import CardContent from '@material-ui/core/CardContent';


const Name = props => {
    return (
        <div className={Styles.cardContainer}>
            <Card>
                <CardContent>
                    <div style={{ padding: '20px' }}>
                        <div className={Styles.container}>
                            <h1 className={Styles.text}>
                                Name Sticker : {props.title}
                            </h1>
                            <button
                                className={Styles.btn}
                            >
                                Buy!
                            </button>
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
