import { Fragment } from 'react'
import style from '../../../../styles/graderSubmit/contests/contestPage/announcement/contestAnnouncementList'
import { compareAsc, format } from 'date-fns'

const ContestAnnouncementList = (props) => {
	return (
		<Fragment>
			{props.time ? (
				<div className="flex-container">
					<div className="flex-item" style={{ flexBasis: '20%' }}>
						{props.name}
					</div>
					<div className="flex-item" style={{ flexBasis: '20%' }}>
						{props.title}
					</div>
					<div className="flex-item" style={{ flexBasis: '40%' }}>
						{props.description.length >= 45 ? props.description.slice(0, 45) + '...' : props.description}
					</div>
					<div className="flex-item" style={{ flexBasis: '20%' }}>
						{format(Date.parse(props.time), 'P') + ' ' + format(Date.parse(props.time), 'pp')}
					</div>
				</div>
			) : null}

			<style jsx>{style}</style>
		</Fragment>
	)
}

export default ContestAnnouncementList
