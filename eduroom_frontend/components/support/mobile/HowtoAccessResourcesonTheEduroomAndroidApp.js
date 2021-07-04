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

const HowtoAccessResourcesonTheEduroomAndroidApp = () => {
	const theme = createMuiTheme()
	return (
		<Fragment>
			<Grid container style={{ marginTop: '30px' }}>
				<Grid container>
					<Typography style={{ marginLeft: '20px' }}>
						{' '}
						<h1>How to Access Resources on The Eduroom Android App</h1>
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
									Many instructors add supplemental resources to their lectures as a means to enhance the learning
									experience of the course.{' '}
								</p>
								<p>These resources can quickly be accessed and viewed on the Udemy Android app.</p>
								<h3>How to Access Resources on The Android App</h3>
								<p>Please follow these steps to access the resource files on your Android mobile device:</p>
								<ol>
									{' '}
									<li>Navigate to the course dashboard</li>
									<li>Swipe to the More tab</li>
									<li>Tap the Resources section </li>
									<li>
										You will see a list of the resources files that are available to view. If the resources are PDF
										files, you can go to step 5 to learn how to download them to your mobile device.
									</li>
									<li>Tap the vertical ellipses in the upper right side of the screen </li>
									<li>Tap Download</li>
								</ol>
								<p>
									To access the downloaded PDF file outside of the app, please go to Internal storage &gt; Download and
									open it with your reader program.
								</p>
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
export default HowtoAccessResourcesonTheEduroomAndroidApp
