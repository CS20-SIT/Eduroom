import Styles from '../../styles/coupon/RenderCouponCoin'
const temp = (props) => {
	return (
		<div>
			<div className="card">
				<img src="../../images/Coupon/Vector.svg"  />
				<h1 className="title">{props.title}</h1>
				<p>{props.owner}</p>
				<div>
					<h3>{props.price}<img className="coin" src="../../images/Coupon/copyright_24px.svg"/></h3> 
					
					<button className="coupon"><img className="tag" src="../../images/Coupon/Tag.svg" /> GET COUPON</button>
				</div>
			</div>
			<style jsx>{Styles}</style>
		</div>
	)
}
export default temp
