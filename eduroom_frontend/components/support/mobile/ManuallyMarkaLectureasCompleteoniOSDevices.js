import Head from 'next/head'
import { Fragment, useState, useEffect, useContext } from 'react'
import {
	Container,
	Button,
	TextField,
	Grid,
	Typography,
	CssBaseline,
	makeStyles,
	Select,
	MenuItem,
	Paper,
	createMuiTheme,
	ThemeProvider,
	Link,
	fade,
} from '@material-ui/core'
import Studentnav from '../studentsidenav'

const ManuallyMarkaLectureasCompleteoniOSDevices = () => {
	const theme = createMuiTheme()
	return (
		<Fragment>
			<Grid container style={{ marginTop: '30px' }}>
				<Grid container>
					<Typography style={{ marginLeft: '20px' }}>
						{' '}
						<h1>Manually Mark a Lecture as Complete on iOS Devices</h1>
					</Typography>
					<Grid item xs={9} style={{ paddingRight: '100px' }}>
						<Paper
							style={{
								padding: '20px',

								backgroundColor: fade('#ffffff', 0.6),
							}}
						>
							<Typography>
								{' '}
								<p>
									Video lectures will be automatically marked as complete once you have watched every minute of the
									lecture, but, if you need to manually mark the lecture as complete, you can easily do so. To learn how
									to mark or unmark a lecture as complete, please read below.
								</p>
								<p>
									Please note: text and PDF based lectures are automatically marked as complete seconds after the
									lecture loads.
								</p>
								<h3>How to Mark the Lecture as Complete</h3>
								<p>To mark a video lecture as complete please follow the steps below:</p>
								<ol>
									<li>Tap the options icon in the upper right-hand corner of the screen</li>
									<li>Select Mark as Complete</li>
								</ol>
								<h3>How to Mark a Lecture as Incomplete</h3>
								<p>If you wish to unmark a lecture as incomplete please follow the steps below:</p>
								<ol>
									<li>Tap the options icon in the upper right-hand corner of the screen</li>
									<li>Select Mark as Incomplete</li>
								</ol>
								<p style={{ marginLeft: '630px', marginTop: '50px' }}>
									<Link href="/support/Mobile">Mobile</Link>
								</p>
							</Typography>
						</Paper>
					</Grid>

					<Grid item xs={3}>
						<div style={{ marginBottom: theme.spacing(3) }}>
							<Studentnav />
						</div>

						<Button
							variant="contained"
							style={{
								backgroundColor: '#FB9CCB',
								marginBottom: theme.spacing(10),
								marginLeft: theme.spacing(8.5),
								marginTop: theme.spacing(1),
							}}
							href="/support/create"
						>
							<label style={{ color: '#ffffff' }}>CONTACT US</label>
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Fragment>
	)
}
export default ManuallyMarkaLectureasCompleteoniOSDevices
