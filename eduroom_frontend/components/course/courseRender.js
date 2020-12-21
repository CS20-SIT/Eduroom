import Styles from '../../styles/course/cShop'
import BestSell from '../../components/package/bestSeller'
import { useState, Fragment } from 'react'
import Link from 'next/link';

const Name = (props) => {
	const [state, setState] = useState(false)
	console.log(props)
	return (
		<Fragment>
			<Link href={`/course/${props.id}`}>
			<div className="cardContainer">
			<img  src={props.image}></img>
				<div>
					<div className="container">
					<h1 className="text">{props.title}</h1>
					<div className="text2">{props.infname}  {props.inlname}</div>
						<div>
							<div className="text"> ${props.price}</div>
							{/* <div className="BS"><BestSell/></div> */}
						</div>
					</div>
				</div>
			</div>
			</Link>
			<style jsx>{Styles}</style>
		</Fragment>
	)
}

export default Name
