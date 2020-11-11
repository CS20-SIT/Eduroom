import Styles from '../../styles/CoinStyles/Pop-up.module.css';
const temp = (props) => {
    // handleClick = ()=>{
    //     this.props.toggle();
    // };
    return (

        <div className={Styles.setPayment}>
            <div>
                <img className={Styles.showPhoto} src='../../images/Coin-image/Icon_Peach.svg' />
                <div className={Styles.setMoney}>
                <img className={Styles.coinPhoto} src='../../images/Coin-image/icon_coin_back.svg' />
                <p className={Styles.priceView}>{props.price}</p>
                </div>
            </div>
            <div className={Styles.title}>

                <p >
                    {props.title}
                </p>
                <p>Neque porro quisquam est qui dolorem ipsum
                quia dolor sit amet, consectetur, adipisci</p>
                <p>No expiration Date</p>
                <p>
                    Price : {props.price}
                </p>
                <p>My coins: 99</p>
            </div>
        </div>

    );
}
export default temp;