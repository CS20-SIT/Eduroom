import { Fragment } from 'react'
import style from '../../../../styles/graderSubmit/contests/contestPage/overview/contestOverviewList'
import { compareAsc, format } from 'date-fns'

const ContestOverviewList = (props) => {
	return (
		<Fragment>
			{props.starttime ? (
				<div className="flex-container">
					<div className="flex-item" style={{ flexBasis: '25%' }}>
						{format(Date.parse(props.starttime), 'P') + ' ' + format(Date.parse(props.starttime), 'pp')}
					</div>
					<div className="flex-item" style={{ flexBasis: '25%' }}>
						{format(Date.parse(props.endtime), 'P') + ' ' + format(Date.parse(props.endtime), 'pp')}
					</div>
					<div className="flex-item" style={{ flexBasis: '25%' }}>
						{props.conruletype.toUpperCase()}
					</div>
					<div className="flex-item" style={{ flexBasis: '25%' }}>
						{props.creator}
					</div>
				</div>
			) : null}

			<style jsx>{style}</style>
		</Fragment>
	)
}

export async function getServerSideProps(ctx) {
	try {
		const id = ctx.query.id
		return { props: { id } }
	} catch (err) {
		return { props: { id: '' } }
	}
}

export default ContestOverviewList
