import Styles from '../../styles/package/pShop'
import { useState, Fragment } from 'react'
import Link from 'next/link';

const temp = (props) => {
	const [state, setState] = useState(false)
	return (
		<Fragment>
            <Link href={`/package/${props.packageid}`}>
			<div className="cardContainer">
				<img  src={props.image}></img>
				<div>
					<div className="container">
						<h1 className="text">{props.title}</h1>
						<div className="text">{props.infname}  {props.inlname}</div>
						<div className="text">${props.price}</div>
					</div>
				</div>
			</div>
            </Link>
			<style jsx>{Styles}</style>
		</Fragment>
	)
}

export default temp
