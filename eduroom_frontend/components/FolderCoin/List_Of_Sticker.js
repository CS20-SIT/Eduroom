import ProductSticker_Render from './ProductSticker_Render'
import Styles from '../../styles/CoinStyles/List_Of_Sticker.module.css'
import { useEffect, useState } from 'react'

const ListSticker = (props) => {
	const [page, setPage] = useState(1)
	const [max, setMax] = useState(1)

	useEffect(() => {
		console.log(max, page)
	}, [max, page])
	useEffect(() => {
		if (props.item.length > 0) {
			const mx = Math.ceil(props.item.length / 3)
			setMax(mx)
		}
	}, [props.item])
	const getLeftClass = () => {
		if (page === 1) {
			return Styles.disable
		} else {
			return Styles.btn
		}
	}
	const getRightClass = () => {
		if (page === max) {
			return Styles.disable
		} else {
			return Styles.btn
		}
	}

	const renderSlide = () => {
		const nowSlide = props.item.slice(page * 3 - 3, page * 3)
		const arr = nowSlide.map((item, index) => {
			return (
				<ProductSticker_Render
					title={item.title}
					price={item.price}
					index={index}
					id={item.id}
					key={item.id}
				></ProductSticker_Render>
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
	const renderList = () => {
		const stickers = props.item.map((item, index) => {
			return (
				<div key={item.id} className={Styles.text}>
					<ProductSticker_Render
						title={item.title}
						price={item.price}
						index={index}
						id={item.id}
						key={item.id}
					></ProductSticker_Render>
				</div>
			)
		})
		return stickers
	}

	return (
		<div>
			<div className={Styles.box}>{renderSlide()}</div>
			<div className={Styles.div}>{renderList()}</div>
		</div>
	)
}
export default ListSticker
