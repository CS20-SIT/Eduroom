import { Fragment } from 'react'
import Contests from './ContestList'
import style from '../../../styles/graderSubmit/contests/contestBox'

const ContestBox = (props) => {
	return (
		<div>
			<div className="box">
				<Contests
					id={props.id}
					title={props.title}
					description={props.description}
					rule={props.rule}
					starttime={props.starttime}
					endtime={props.endtime}
				/>
			</div>
			<style jsx>{style}</style>
		</div>
	)
}
export default ContestBox
