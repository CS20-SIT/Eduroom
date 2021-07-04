import { Fragment } from 'react'
import WaitingRoom from '../../../components/edqiz/waitingRoom'
import GeneralNoSide from '../../../components/template/generalnoside'
const Content = (id) => {
	return (
		<Fragment>
			<GeneralNoSide>
				<WaitingRoom id={id} />
			</GeneralNoSide>
		</Fragment>
	)
}
export default Content
export async function getServerSideProps(ctx) {
	try {
		const id = ctx.query.id
		return { props: { id } }
	} catch (err) {
		return { props: { id: '' } }
	}
}
