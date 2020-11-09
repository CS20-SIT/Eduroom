import Card from '@material-ui/core/Card';
import Styles from '../../styles/CoinStyles/ProductSticker_Render.module.css';
import CardContent from '@material-ui/core/CardContent';
import Pop from '../../components/FolderCoin/Pop_up'
import { useState } from 'react';

const Name = props => {
    const[state,setState] = useState(false);
    // state={
    //     seen: false

    // };
    const togglePop = () => {
        setState(true)
        // this.setState({
        //   seen: !this.state.seen
        // });
      };
    return (
        <div className={Styles.cardContainer}>
            <Card>
                <CardContent>
                    <div style={{ padding: '20px' }}>
                        <div className={Styles.container}>
                            <h1 className={Styles.text}>
                                Name Sticker : {props.title}
                            </h1>
                            <div>
                            <button
                                className={Styles.btn} onClick={togglePop}
                            >
                                Buy!
                            </button>
                            <Pop toggle={state}/>
                            {/* {this.state.seen ? <Pop toggle={this.togglePop} /> : null} */}
                            </div>
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
