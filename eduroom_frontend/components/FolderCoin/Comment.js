import Styles from '../../styles/CoinStyles/comment.module.css'

const temp = () => {
	return (
		<div className={Styles.box}>
			<div className={Styles.row}>
				<div className={Styles.circle}> <p className={Styles.text} >CA</p></div>
				<div className={Styles.title}>
					<p className={Styles.name}>Mr. Chonlameth Arpnikanondt</p>
					<p className={Styles.date}>2 Week ago</p>
					<p className={Styles.comment}>
						It is a long established fact that a reader will be distracted by the readable content<br/> of a page when
						looking at its layout.
					</p>
				</div>
			</div>
		</div>
	)
}
export default temp
