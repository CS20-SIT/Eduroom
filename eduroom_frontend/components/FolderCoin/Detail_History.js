import Styles from '../../styles/CoinStyles/DetailHistory.module.css';
const temp = props => {
    return (
        <div className={Styles.container}>
            <div className={Styles.card}>
                <h1>Name Sticker : {props.title}</h1>
                <h2>
                    Price : {props.price}{' '}
                    <img
                        className={Styles.coin}
                        src='../../images/Coin-image/icon_coin_back.svg'
                    />
                </h2>
                <button onClick={() => props.choose(props.index)}>View</button>
            </div>
        </div>
    );
};
export default temp;
