import RenderCoupon from '../coupon/RenderCouponCoin'
import Styles from '../../styles/coupon/Allcoupon.module.css';
import { useState, useEffect } from 'react'
const temp = (props) => {
	const [page, setPage] = useState(1)
	const [max, setMax] = useState(1)
	useEffect(() => {
        if(props.item.length>0){
		const mx = Math.ceil(props.item.length / 3)
        setMax(mx)
        }
	}, [props.item])
	const getLeftClass = () => {
		if (page === 1) {
			return Styles.disable
		} else {
			return Styles.arrow
		}
	}
	const getRightClass = () => {
		if (page === max) {
			return Styles.disable
		} else {
			return Styles.arrow
		}
	}

	const renderSlide = () => {
		const nowSlide = props.item.slice(page * 3 - 3, page * 3)
		const arr = nowSlide.map((item, index) => {
			return (
				<div>
				<RenderCoupon
					title={item.ccname}
					price={item.coin_use}
					index={index}
					id={item.ccid}
					description={item.description}
					owner={item.owner}
					picture={item.picture}
					key={item.id}
				></RenderCoupon>
				</div>
			)
		})
		return (
			<div
				style={{
					display: 'flex',
					position: 'relative',
					marginLeft: 40,
				}}
			>
				<button className={getLeftClass()} onClick={() => setPage(page - 1)} disabled={page === 1}>
					{' < '}
				</button>
				<div style={{ width: '90%' }}>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'auto auto auto',
						}}
					>
						{arr}
					</div>
				</div>
				<button className={getRightClass()} onClick={() => setPage(page + 1)} disabled={page === max}>
					{' > '}
				</button>
			</div>
		)
	}
	return (
		<div className={Styles.container}>
			{renderSlide()}

		</div>
	)
}
export default temp
