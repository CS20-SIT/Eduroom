import style from '../../../styles/universityEmail/Uregister'
import { Grid } from '@material-ui/core'
import { ActionOpacity } from 'material-ui/svg-icons'
import { useRouter } from 'next/router'

const Content = () => {
	const router = useRouter()
	return (
		<div>
			<div className="Term-header">
				<Grid
					container
					spacing={3}
					direction="column"
					alignItems="Left"
					justify="Left"
					style={{ marginTop: '30px', marginBottom: '10px', marginLeft: '50px' }}
				>
					TERM OF CONDITION
				</Grid>
			</div>
			<div className="Term-description">
				<Grid container spacing={3} alignItems="Left" justify="Left" style={{ marginLeft: '50px' }}>
					1. Customers must fully comply with all advertising policies. <br></br>
					2. Content in the form of advertisements must not contain any written or expressive <br></br>Discriminate
					genders, allude to religion, personal beliefs or create divisions in society.<br></br>
					3. Your ad will have an expiration date. And need to be<br></br> renewed for publicity purposes Continuously
					<br></br>
					4. If you violate any of these terms, Eduroom will reserve <br></br>the right to advertise your particular
					advertisement until modified.<br></br>
				</Grid>
				<div
					className="tab3"
					style={{ marginLeft: '65%', marginTop: '-80px', marginBottom: '-150px', opacity: '50%' }}
				></div>
			</div>

			<style jsx>{style}</style>
		</div>
	)
}
export default Content
