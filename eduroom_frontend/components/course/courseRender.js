import Styles from '../../styles/course/cShop'
import BestSell from '../../components/package/bestSeller'
import { useState, Fragment } from 'react'

const Name = (props) => {
	const [state, setState] = useState(false)
	return (
		<Fragment>
			<div className="cardContainer">
				<img src="/images/package/javaPic.svg"></img>
				<div>
					<div className="container">
					<h1 className="text">{props.title}</h1>
					<p className="textInst">{props.instructor}</p>
						<div>
							<div className="text"> ${props.price}</div>
							<div className="BS"><BestSell/></div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{Styles}</style>
		</Fragment>
	)
}

export default Name
