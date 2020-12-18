import Styles from '../../styles/course/cShop'
import BestSell from '../../components/package/bestSeller'
import { useState, Fragment } from 'react'

const Name = (props) => {
	const [state, setState] = useState(false)
	return (
		<Fragment>
			{/* <Link href={`/course/${props.courseid}`}> */}
			<div className="cardContainer">
			<img  src={props.image}></img>
				<div>
					<div className="container">
					<h1 className="text">{props.title}</h1>
					<div className="text">{props.infname}  {props.inlname}</div>
						<div>
							<div className="text"> ${props.price}</div>
							{/* <div className="BS"><BestSell/></div> */}
						</div>
					</div>
				</div>
			</div>
			{/* </Link> */}
			<style jsx>{Styles}</style>
		</Fragment>
	)
}

export default Name
