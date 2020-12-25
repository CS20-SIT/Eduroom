import { Container } from '@material-ui/core'
import Styles from '../../styles/CoinStyles/Pop-up.module.css'
import { useState, useEffect } from 'react'
import { Dialog, DialogContent } from '@material-ui/core'
import EnsurePay from '../FolderCoin/ensurePayment'
import api from '../../api'
const temp = (props) => {
	const [state, setState] = useState(false)
	const [data, setData] = useState([])
	const [coins, setCoin] = useState()
	const [id, setId] = useState()
	const [status, setStatus] = useState()
	const getClass = () => {
		if (status === 'not avaliable') {
			if (coins >= 20) {
				return Styles.btn
			} else {
				return Styles.disbtn
			}
		} else {
			return Styles.disbtn
		}
	}
	const text = () => {
		console.log(coins)
		if (status === 'not avaliable') {
			if (coins >= 20) {
				return 'puchase'
			} else {
				return 'Not Enough Coin'
			}
		} else {
			return 'Your already own'
		}
	}
	const detail = () => {
		if (props.title === 'Chirstmas') {
			return 'This Sticker for the christmas Event in December. This Sticker was limited edition on Chirstmas Only. Just buy it before this sticker cant buy'
		} else if (props.title === 'Animals') {
			return 'This sticker was about the animals in zoo.There was a lot of animals in this sticker. Its have over 50 animals in this sticker. just buy it!! '
		} else if (props.title === 'Text') {
			return 'This sticker was about the word that popular in chat.For people who lazy to type that word just use those sticker to ask about it. Let buy it!!'
		} else if (props.title === 'Emoji') {
			return 'This sticker was about the emoji face the describe your feeling right now to your people chat on. So this emoji will let the people in chat know your face right now'
		} else if (props.title === 'Newyear') {
			return 'This sticker for the Happy new year or it could describe the party that your want to invited on chat'
		} else if (props.title === 'Chess') {
			return 'This sticker for the people who loved watched the Queen Gambit series and want to have the sticker chess. There is have for poeple love those. So buy it if you are fan Queen gambit'
		}
	}
	const PopPurchase = () => {
		if (status === 'not avaliable') {
			if (coins >= 20) {
				setState(true)
			} else {
				setState(false)
			}
		} else {
			setState(false)
		}
	}
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await api.get(`/api/coin/stickers/${props.id}`)
				const check = await api.get('/api/coin/checkStickerOwner/', { params: { stickerid: props.id } })
				setData(res.data.stickers)
				setCoin(res.data.mycoins)
				setId(props.id)
				setStatus(check.data.sticker)
			} catch (err) {}
		}
		fetchData()
	}, [])

	return (
		<Container>
			<div className={Styles.setPayment}>
				<div className={Styles.setPhotoMoney}>
					<img className={Styles.showPhoto} src={props.img} />
					<div className={Styles.setMoney}>
						<img className={Styles.coinPhoto} src="../../images/Coin-image/icon_coin_back.svg" />
						<h3 className={Styles.priceView}>{props.price} $</h3>
					</div>
				</div>
				<div className={Styles.title}>
					<h1>{props.title}</h1>
					<p>{detail()}</p>
					<h3>No expiration Date</h3>

					<h3>My coins:{coins} $</h3>
					<div>
						<button className={getClass()} onClick={PopPurchase}>
							{text()}
						</button>

						<Dialog open={state} onClose={() => setState(false)}>
							<DialogContent style={{ width: '400px', height: '300px', padding: '0px' }}>
								<EnsurePay
									item={id}
									closeEnsure={() => {
										props.closePopup()
										setState(false)
									}}
									close={() => setState(false)}
								/>
							</DialogContent>
						</Dialog>
					</div>
				</div>
			</div>
			<div className={Styles.line}></div>
			<div className={Styles.listSticker}>
				{data.map((picture) => (
					<img className={Styles.picture} src={picture.stickerimg} />
				))}
			</div>
		</Container>
	)
}
export default temp
