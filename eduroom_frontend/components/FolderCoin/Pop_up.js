import Styles from '../../styles/CoinStyles/Pop-up.module.css';
const temp = (props) => {
    // handleClick = ()=>{
    //     this.props.toggle();
    // };
    return (
        
        <div className={Styles.modal}>
        <h1>
            Name Sticker : {props.title}
            Price : {props.price}
        </h1>
        </div>
    
    );
}
export default temp;