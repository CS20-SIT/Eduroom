import Grid from '@material-ui/core/Grid'
import LogTable from './LogTable'
import { sBig, sBigTitle } from '../materialUIStyle'
const Log = () => {
	return (
		<div style={sBig}>
			<Grid>
				<Grid>
					<span style={sBigTitle}>Admin Log</span>
					<div style={{ height: 20 }}></div>
				</Grid>
				<div style={{ height: 20 }}></div>
				<Grid item xl={12} md={12}>
					<LogTable />
					<div style={{ height: 100 }}></div>
				</Grid>
			</Grid>
		</div>
	)
}
export default Log
