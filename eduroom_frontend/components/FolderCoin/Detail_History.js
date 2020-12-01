import Styles from '../../styles/CoinStyles/DetailHistory.module.css';
const temp = props => {
    return (
        <div className={Styles.container}>
            <div className={Styles.card}>
            <img className={Styles.pic} src='../../images/Coin-image/Icon_Peach.svg' />
                <h1 className={Styles.title}>{props.title}</h1>
                <button className={Styles.btn} onClick={() => props.choose(props.index)}>View</button>
            </div> 
        </div>
    );
};
export default temp;
