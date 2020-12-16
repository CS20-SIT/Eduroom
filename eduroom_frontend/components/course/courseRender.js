import Styles from '../../styles/course/cShop';
import { useState, Fragment } from 'react';

const Name = (props) => {
    const[state,setState] = useState(false);
    return (
        <Fragment>
        <div className="cardContainer">
            <img src="/images/package/javaPic.svg"></img>
                    <div >
                        <div className="container">

                            <h1 className="text">
                                {props.title}
                            </h1>
                            <div className="text">
                                {props.price} $
                            </div>
                            <div className="text">
                                {props.instructor}
                            </div>                           
                        </div>
                    </div>
        </div>
    <style jsx>{Styles}</style>
    </Fragment>
    )
}

export default Name
