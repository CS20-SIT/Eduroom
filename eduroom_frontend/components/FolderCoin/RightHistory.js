import Styles from '../../styles/CoinStyles/RenderHistory';
const temp = props => {
    console.log(props);
    return (
        <div>
            <div className='right'>
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
            </div>
            <style jsx>{Styles}</style>
        </div>
    );
};
export default temp;
