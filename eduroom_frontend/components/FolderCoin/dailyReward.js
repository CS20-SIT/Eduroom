import Styles from '../../styles/CoinStyles/dailyReward.module.css'
import { useState, useEffect } from 'react'
import api from '../../api'

const temp = (props) => {
	const [data, setData] = useState(false)
	useEffect(() => {
		const fetchData = async () => {
			const res = await api.get('/api/coin/dailyReward')
			// const get = await api.post('/api/coin/dailyReward')
			setData(res.data.canGet)
			console.log(res.data.canGet)
			if (res.data.canGet === false) {
				setDisbale(true)
			} else {
				setDisbale(false)
			}
		}
		fetchData()
	}, [])
	const [myStyle, setMyStyle] = useState({})
	const [disable, setDisbale] = useState(true)
	const [change, setChange] = useState(false)
	const [next, setNext] = useState(true)
	const [deg, setDeg] = useState([])
	const [num, setNum] = useState(0)
	const [time, setTime] = useState({ hour: null, min: null, second: null })
	const startDeg = 360
	const cal = () => {
		const today = new Date()
		const tomorrow = new Date(today)
		tomorrow.setDate(tomorrow.getDate() + 1)
		tomorrow.setHours(0)
		tomorrow.setMinutes(0)
		tomorrow.setSeconds(0)
		tomorrow.setMilliseconds(0)
		let diff = tomorrow.getTime() - today.getTime()
		let hour = Math.floor(diff / 1000 / 60 / 60)
		diff = diff % 3600000
		let min = Math.floor(diff / 1000 / 60)
		diff = diff % 60000
		let second = Math.floor(diff / 1000)
		setTime({ hour, min, second })
	}
	useEffect(() => {
		//setInterval

		setInterval(() => {
			cal()
		}, 1000)

		let temp = []
		for (let i = 0; i < 6; i++) {
			temp.push(startDeg + (i + 1) * 30)
		}
		setDeg(temp)
	}, [])

	const click = async () => {
		if (disable) return
		console.log(data)
		console.log(deg)
		const randDeg = Math.floor(Math.random() * (6 + 1))
		let getNum = (randDeg + 2) % 6
		if (getNum == 0) getNum = 6
		console.log(getNum)
		setTimeout(() => {
			setNum(getNum)
		}, 4000)
		setTimeout(() => {
			setNext(false)
		}, 4000)
		setDisbale(true)
		setMyStyle({
			width: '100%',
			height: '100%',
			transform: `rotate(${deg[randDeg]}deg)`,
			transition: 'all 6s cubic-bezier(0, 0.99, 0.44, 0.99)',
		})
		const res = await api.post('/api/coin/dailyReward/', { params: { getNum } })
		console.log(res.data)
	}
	const renderText = () => {
		if (change === true || data === false) {
			return (
				<div className={Styles.time}>
					<h1 className={Styles.test3}>COUNT DOWN!!!</h1>
					<h1 className={Styles.test4}>
						{time.hour} HOURS {time.min} MIN {time.second} Sec
					</h1>
					<button
						className={Styles.btn2}
						onClick={(e) => {
							props.onClose()
							e.stopPropagation()
						}}
					>
						Back
					</button>
				</div>
			)
		} else {
			return (
				<div className={Styles.time}>
					<h1 className={Styles.test3}>YOUR GOT!</h1>
					<h2 className={Styles.test3}>
						<img className={Styles.coin} src="../../images/Coin-image/icon_coin_back.svg" /> {num} Coins
					</h2>
					<button className={next ? Styles.disbtn : Styles.btn} onClick={() => setChange(true)} disabled={next}>
						GOT IT!!!
					</button>
				</div>
			)
		}
	}
	return (
		<div className={Styles.bigbox}>
			<div className={Styles.test}>
				WELCOME TO <br />
				DAILY REWARDS!
			</div>
			<div className={Styles.wrapper}>
				<div className={Styles.wheel}>
					<div style={myStyle}>
						<div style={myStyle}>
							{/* <div className={Styles.innerWheel}> */}
							<div className={Styles.sec}>
								<span className={Styles.fa}>6</span>
							</div>
							<div className={Styles.sec5}>
								<span className={Styles.fa}>5</span>
							</div>
							<div className={Styles.sec}>
								<span className={Styles.fa}>4</span>
							</div>
							<div className={Styles.sec3}>
								<span className={Styles.fa}>3</span>
							</div>
							<div className={Styles.sec}>
								<span className={Styles.fa}>2</span>
							</div>
							<div className={Styles.sec6}>
								<span className={Styles.fa}>1</span>
							</div>
						</div>
					</div>

					<div onClick={() => click()} className={disable ? Styles.disSpin : Styles.spin}>
						<div className={Styles.innerSpin}>
							<img className={Styles.coinImg} src="../../images/Coin-image/icon_coin_back.svg" />
						</div>
					</div>

					<div className={Styles.shine}></div>
				</div>
			</div>

			{/* <h4 className={disable ? Styles.false : Styles.true}>Hello</h4> */}
			{renderText()}
		</div>
	)
}

export default temp
