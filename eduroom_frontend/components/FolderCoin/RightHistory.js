// import Styles from '../../styles/CoinStyles/RenderHistory';
import Styles from '../../styles/CoinStyles/Pop-up.module.css'
const temp = (props) => {
	console.log(props.item)
	// const listPicture = [
	// 	{ src: '../../images/Coin-image/Icon_Avocado.svg' },
	// 	{ src: '../../images/Coin-image/Icon_Coconut_2.svg' },
	// 	{ src: '../../images/Coin-image/Icon_Garnet.svg' },
	// 	{ src: '../../images/Coin-image/Icon_Peach.svg' },
	// 	{ src: '../../images/Coin-image/Icon_Lemon.svg' },
	// 	{ src: '../../images/Coin-image/Icon_Orange.svg' },
	// 	{ src: '../../images/Coin-image/Icon_Pear.svg' },
	// 	{ src: '../../images/Coin-image/Icon_Red Apple.svg' },
	// ]
	const detail = ()=>{
		if(props.item.stickername === 'Chirstmas'){
			return 'This Sticker for the christmas Event in December. This Sticker was limited edition on Chirstmas Only. Just buy it before this sticker cant buy'
		}else if(props.item.stickername==='Animals'){
			return 'This sticker was about the animals in zoo.There was a lot of animals in this sticker. Its have over 50 animals in this sticker. just buy it!! '
		}else if(props.item.stickername === 'Text'){
			return 'This sticker was about the word that popular in chat.For people who lazy to type that word just use those sticker to ask about it. Let buy it!!'
		}else if(props.item.stickername ==='Emoji'){
			return 'This sticker was about the emoji face the describe your feeling right now to your people chat on. So this emoji will let the people in chat know your face right now'
		}else if(props.item.stickername==='Newyear'){
			return 'This sticker for the Happy new year or it could describe the party that your want to invited on chat'
		}else if(props.item.stickername ==='Chess'){
			return 'This sticker for the people who loved watched the Queen Gambit series and want to have the sticker chess. There is have for poeple love those. So buy it if you are fan Queen gambit'
		}
	}
	return (
		<div className={Styles.right}>
			{/* <div className='right'>
                <span className='detail'>
                    <h1>Detail</h1>
                    <h1>{props.title}</h1>
                    <h1>No Expiration Date</h1>
                    <h1>
                        {props.price}${' '}
                        <img
                            className='coin'
                            src='../../images/Coin-image/icon_coin_back.svg'
                        />
                    </h1>
                </span>
                <hr className='mid' />
            </div> */}
			<div className={Styles.box}>
				<div className={Styles.setPayment}>
					<div className={Styles.setPhotoMoney}>
						<img className={Styles.showPhoto} src={props.item.stickerimg} />
						{/* <div className={Styles.setMoney}>
							<img className={Styles.coinPhoto} src="../../images/Coin-image/icon_coin_back.svg" />
							<h3 className={Styles.priceView}>{props.item.stickerprice} $</h3>
						</div> */}
					</div>
					<div className={Styles.title}>
						<h1>{props.item.stickername}</h1>
						<p>{detail()}</p>
						<h3>No expiration Date</h3>
					</div>
				</div>
				<div className={Styles.line1}></div>
				<div className={Styles.listSticker}>
					{props.item.stickers.map((picture) => (
						<img className={Styles.picture} src={picture.stickerimg} />
					))}
				</div>
			</div>
		</div>
	)
}
export default temp
