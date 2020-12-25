import { useState, useEffect } from 'react'
import { Dialog, DialogContent } from '@material-ui/core'
import Styles from '../../styles/coupon/popup'
import EnsurePay from './ConfirmPayment'
import api from '../../api'

const temp = (props) => {
	const [state, setState] = useState(false)
	const [show, setShow] = useState(false)
	const [buy, setBuy] = useState(false)
	const [data, setData] = useState([])
	const [userData, setUserData] = useState('')
	const [respond, setRespond] = useState('')
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res1 = await api.get('/api/auth/profile')
				const res2 = await api.get('/api/coupon/getCodeById', { params: { id: props.item.id } })
				setUserData(res1.data.userid)
				setData(res2.data)
			} catch (err) {}
		}
		fetchData()
	}, [])

	const PopPurchase = () => {
		setBuy(true)

		const submit = () => {
			if (userData != '') {
				const res = api.post('/api/coin/buyCoupon', { params: { ccid: props.item.id, userId: userData } })
				setRespond(res.data)
			}
		}
		submit()
	}

	const renderCondition = () => {
		if (show) {
			return (
				<div>
					<h1 className="text">Condition for using Coupon</h1>
					<h4>{props.item.description}</h4>
					<button onClick={() => setShow(false)} className="condition">
						{' '}
						V{' '}
					</button>
					<style jsx>{Styles}</style>
				</div>
			)
		} else {
			return (
				<div>
					<button onClick={() => setShow(true)} className="condition">
						{' '}
					</button>
					<style jsx>{Styles}</style>
				</div>
			)
		}
	}
	console.log(userData)
	console.log(props.item.id)
	console.log(respond)
	return (
		<div>
			<Dialog open={state} onClose={() => setState(false)}>
				<DialogContent></DialogContent>
			</Dialog>
			<div className="white">
				<div>
					<h1 className="desc">{props.item.description}</h1>
					<center>
						<img className="" src={props.item.picture} style={{ width: '200px', height: '200px' }} />
					</center>
					<div className="con">
						<h3 className="desc">
							{props.item.price} <img className="coin" src="../../images/Coupon/copyright_24px.svg" />
						</h3>
						{props.item.free ? (
							<center>
								<div className="code-free">Code: {data.pcode}</div>
							</center>
						) : (
							<button className="btn" onClick={PopPurchase}>
								Buy
							</button>
						)}
						<Dialog open={buy} onClose={() => setBuy(false)}>
							<DialogContent style={{ width: '400px', height: '300px', padding: '0px' }}>
								<EnsurePay
									closeEnsure={() => {
										props.closePopup()
										setBuy(false)
									}}
									close={() => setBuy(false)}
								/>
							</DialogContent>
						</Dialog>
					</div>
					{renderCondition()}
				</div>
			</div>
			<style jsx>{Styles}</style>
		</div>
	)
}
export default temp
