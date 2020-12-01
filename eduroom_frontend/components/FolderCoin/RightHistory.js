// import Styles from '../../styles/CoinStyles/RenderHistory';
import Styles from '../../styles/CoinStyles/Pop-up.module.css';
const temp = props => {
    console.log(props);
    const listPicture = [
        {src: '../../images/Coin-image/Icon_Avocado.svg' },
        {src: '../../images/Coin-image/Icon_Coconut_2.svg' },
        {src: '../../images/Coin-image/Icon_Garnet.svg' },
        {src: '../../images/Coin-image/Icon_Peach.svg' },
        {src: '../../images/Coin-image/Icon_Lemon.svg' },
        {src: '../../images/Coin-image/Icon_Orange.svg' },
        {src: '../../images/Coin-image/Icon_Pear.svg' },
        {src: '../../images/Coin-image/Icon_Red Apple.svg' }
]
    return (
        <div className={Styles.right}>
            {/* <div className='right'>
                <span className='detail'>
                    <h1>Detail</h1>
                    <h1>{props.title}</h1>
                    <h1>No Expiration Date</h1>
                    <h1>
                        {props.price}${' '}
                        <img
                            className='coin'
                            src='../../images/Coin-image/icon_coin_back.svg'
                        />
                    </h1>
                </span>
                <hr className='mid' />
            </div> */}
            <div className={Styles.box}>
            <div className={Styles.setPayment}>
                <div className={Styles.setPhotoMoney}>
                    <img
                        className={Styles.showPhoto}
                        src='../../images/Coin-image/Icon_Peach.svg'
                    />
                    <div className={Styles.setMoney}>
                        <img
                            className={Styles.coinPhoto}
                            src='../../images/Coin-image/icon_coin_back.svg'
                        />
                        <h3 className={Styles.priceView}>{props.price} $</h3>
                    </div>
                </div>
                <div className={Styles.title}>
                    <h1>{props.title}</h1>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci
                    </p>
                    <h3>No expiration Date</h3>

                    <h3>My coins: 99 $</h3>
                    <button className={Styles.btn}>Purchase</button>
                </div>
            </div>
            <div className={Styles.line}></div>
            <div className={Styles.listSticker}>
                {listPicture.map(picture => (
                    <img className={Styles.picture} src={picture.src} />
                ))}
            </div>
            </div>

        </div>
    );
};
export default temp;
