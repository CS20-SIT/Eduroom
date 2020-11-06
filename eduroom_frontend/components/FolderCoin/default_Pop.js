import Styles from '../../styles/CoinStyles/default_popup.module.css';

const temp = (props) => {
    return (
        <div
            className={Styles.div}
            onClick={e => {
                props.onClose();
                e.stopPropagation();
            }}
        >
            <div onClick={e => e.stopPropagation()} className={Styles.white}>

            </div>
        </div>
    );
};
export default temp;
