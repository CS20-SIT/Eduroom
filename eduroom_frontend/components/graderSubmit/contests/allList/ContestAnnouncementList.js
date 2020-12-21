import { Fragment } from 'react'
import style from '../../../../styles/graderSubmit/contests/contestPage/announcement/contestAnnouncementList'
import { format } from 'date-fns'
import { useRouter } from 'next/router'

const ContestAnnouncementList = (props) => {
	const router = useRouter()
	return (
		<Fragment>
			{props.time ? (
				<div
					className="flex-container"
					onClick={(e) => {
						router.push(`/graderSystem/contest/${props.contestID}/announcement/${props.id}`)
					}}
				>
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
