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

const HowtoAccessResourcesonTheEduroomiOSApp = () => {
	const theme = createMuiTheme()
	return (
		<Fragment>
			<Grid container style={{ marginTop: '30px' }}>
				<Grid container>
					<Typography style={{ marginLeft: '20px' }}>
						{' '}
						<h1>How to Access Resources on The Eduroom iOS App</h1>
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
								<p>These resources can quickly be accessed and viewed on the Udemy iOS app. </p>
								<h3>How to Access Resources on The iOS App</h3>
								<p>
									Lectures that include supplementary resources will have Resources posted under the lecture title, on
									the course curriculum page. 
								</p>
								<p>
									To access the resources, tap on the lecture title and hold for a moment or two. An options menu will
									appear. Tap on Resources for Lectures.
								</p>
								<p>A list of the available resources will come up.</p>
								<p>Tap on the resource(s) you would like to review.</p>
								<p>
									If you're having trouble accessing the file, or if something doesn't look right, please contact the
									instructor or our support team.
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
export default HowtoAccessResourcesonTheEduroomiOSApp
