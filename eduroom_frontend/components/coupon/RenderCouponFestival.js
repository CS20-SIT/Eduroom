import Styles from '../../styles/coupon/RenderCouponFestival';
const temp = (props) =>{
    return(<div>
        <div className="card">
            <img className="box" src="../../images/Coupon/Group 218.svg"/>
            <h1 className="title">{props.title}</h1>
            <p>{props.owner}</p>
            <div>
                <h3>$ {props.price}</h3> 
                
                <button className="coupon"><img className="tag" src="../../images/Coupon/Tag.svg" /> GET COUPON</button>
            </div>
        </div>
        <style jsx>{Styles}</style>
    </div>)
};
export default temp;