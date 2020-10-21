
import Card from '@material-ui/core/Card';
import Styles from '../../styles/CoinStyles/ProductSticker_Render.module.css';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
const Name = props => {
    return (

        <Card className={Styles.cardContainer}>
        <CardContent >
            <div style={{ padding: '20px' }}>
                <div className={Styles.container}>
                    <h1 className={Styles.text}>
                        Name Sticker : {props.title}
                    </h1>
                    <h1 className={Styles.text}>
                        Price of Sticker :{props.price} Coin
                    </h1>
                    <Button href={`/coin-shop/payment/${props.id}`} variant='contained' color='primary'>
                        Buy!
                    </Button>
                </div>
            </div>
        </CardContent>
        </Card>

    );
};
export default Name;
