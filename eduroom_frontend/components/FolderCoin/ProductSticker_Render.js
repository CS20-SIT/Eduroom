import React, {Fragment} from 'react'
import Link from 'next/link';
import style from '../../styles/CoinStyles/product_sticker_render';
const Name = props => {
    return (
        <Fragment>
        <div className="cardContainer">
            <div style={{ padding: '20px' }}>
                <div className="container">
                    <h1 className="text">
                        Name Sticker : {props.title}
                    </h1>
                    <h1 className="text">
                        Price of Sticker :{props.price} Coin
                    </h1>
                    <Link href={`/coin-shop/payment/${props.id}`}>
                        <a className="btn">Buy!</a>
                    </Link>
                </div>
            </div>
        </div>
        <style jsx>
            {
                style
            }
        </style>
        </Fragment>
    );
};
export default Name;
