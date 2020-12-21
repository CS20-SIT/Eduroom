import { Fragment } from 'react'
import style from '../../styles/course/cartStyle'
const Cart = ({ data, type, handleRemove }) => {
	return (
		<Fragment>
			<div className="box">
				<div className="left">
					<img src={data.picture} width="120px" height="100px"></img>
					<div className="detail">
						<h3 style={{ margin: '0' }}>{data.name}</h3>
						<p style={{ color: '#5B5B5B', marginTop: '3px' }}>
							{data.firstname} {data.lastname}
						</p>
					</div>
				</div>
				<div className="mid">
					<div className="remove" onClick={() => handleRemove(type, data.id)}>
						Remove
					</div>
				</div>
				<div className="right">
					<p className="price">
						{'฿'} {data.price}
					</p>
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default Cart
