import { Fragment } from 'react'
import ContestNav from './ContestNav'

const ContestLayout = (props) => {
	return (
		<Fragment>
			<ContestNav page={props.page} id={props.id} />
			{props.children}
		</Fragment>
	)
}

export default ContestLayout
