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

const DownloadingCourseResources = () => {
	const theme = createMuiTheme()
	return (
		<Fragment>
			<Grid container style={{ marginTop: '30px' }}>
				<Grid container>
					<Typography style={{ marginLeft: '20px' }}>
						{' '}
						<h1>Downloading Course Resources</h1>
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
									Many instructors add supplemental resources to their lectures, like PDFs, design templates or source
									code, as a means to enhance the learning experience of the course. These resources can quickly be
									downloaded to your computer and viewed. 
								</p>
								<p>
									If you’re looking for steps on how to access resources on the Udemy mobile app, they can be viewed in
									the following articles:
								</p>
								<ul>
									{' '}
									<li>iOS</li>
									<li>Android</li>
								</ul>
								<h3>How to download course resources</h3>
								<ol>
									{' '}
									<li>
										When a lecture has resources available for download it will be indicated by a folder icon on the
										right-hand side of the course player.
									</li>
									<li>If you click on the folder icon the title of downloadable resource will appear.</li>
									<li> To download and open the file on your device, clicking on the resource's title.</li>
								</ol>
								<h3>Trouble finding a resource? Or is there an issue with it?</h3>
								<p>
									If you’re having trouble finding a resource or there’s an issue with it, we recommend inquiring about
									the resource in the Q&A or contacting the instructor. Since instructors own and manage their course
									content, they are in the best position to offer you assistance.
								</p>
								<p style={{ marginLeft: '630px', marginTop: '50px' }}>
									<Link href="/support/Course-Taking">Course Taking</Link>
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
export default DownloadingCourseResources
