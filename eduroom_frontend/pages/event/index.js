import { Fragment } from 'react'
import General from '../../components/template/general'
import EventComp from '../../components/event/createEvent'
import style from '../../styles/event/event'

const Event = () => {
	return (
		<Fragment>
			<General>
				<div className="BG">
					<EventComp />
				</div>
				<style jsx>{style}</style>
			</General>
		</Fragment>
	)
}
export default Event
