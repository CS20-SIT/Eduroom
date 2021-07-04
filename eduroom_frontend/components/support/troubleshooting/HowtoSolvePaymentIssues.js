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

const HowtoSolvePaymentIssues = () => {
	const theme = createMuiTheme()
	return (
		<Fragment>
			<Grid container style={{ marginTop: '30px' }}>
				<Grid container>
					<Typography style={{ marginLeft: '20px' }}>
						{' '}
						<h1>How to Solve Payment Issues</h1>
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
									If you've incurred an error while attempting to make a payment, this article explains how to solve
									common reasons for payment issues. If you encountered a payment error message which told you to
									contact support directly, however, please click here. Otherwise, please try the troubleshooting steps
									outlined below.
								</p>
								<ul>
									{' '}
									<li>
										If you’re encountering issues with one payment method, please note we support several different
										payment methods that you can try.
									</li>
									<li>
										{' '}
										For information regarding how Udemy courses are priced, or what to do if you see a different price,
										please click here.
									</li>
									<li>
										If you purchased a course at Udemy.com but are unable to find it in your account, click here. If you
										purchased a course on the Udemy mobile app but can't locate it in your account, then please review
										this article.{' '}
									</li>
								</ul>
								<p style={{ marginLeft: '630px', marginTop: '50px' }}>
									<Link href="/support/Troubleshooting">Troubleshooting</Link>
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
export default HowtoSolvePaymentIssues
