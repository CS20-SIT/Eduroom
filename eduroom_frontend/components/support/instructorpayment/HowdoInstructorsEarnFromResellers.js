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
import Instructornav from '../instructorsidenav'

const HowdoInstructorsEarnFromResellers = () => {
	const theme = createMuiTheme()
	return (
		<Fragment>
			<Grid container style={{ marginTop: '30px' }}>
				<Grid container>
					<Typography style={{ marginLeft: '20px' }}>
						{' '}
						<h1>How do Instructors Earn From Resellers?</h1>
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
									Udemy partners with a variety of trusted ecommerce brands to sell courses directly on other platforms
									or websites. This helps reach students who might not otherwise discover Udemy, and also lets students
									use payment methods not yet supported on Udemy.com to make their purchase. For courses that are
									selected for this type of distribution, this can provide exposure to new audiences and an additional
									revenue stream.
								</p>
								<h3>What is a Udemy Reseller?</h3>
								<p>
									Resellers are commerce sites or platforms that have an official partnership with Udemy to sell certain
									Udemy courses directly on their platform. Students who purchase a Udemy course via a reseller make
									their payment to that entity rather than to Udemy. They then access any courses they purchase directly
									on the Udemy platform.
								</p>
								<h3>How do students enroll in courses purchased from resellers?</h3>
								<p>
									When a student purchases a Udemy course through a reseller, they receive a unique, personal enrollment
									link to the email address they provide. Once the student has used this link to enroll, they will
									appear in the course's student list and on the instructor revenue report like any other student.
								</p>
								<h3>Is my course automatically offered via resellers?</h3>
								<p>
									Not every course is selected for reseller distribution. Udemy works with resellers to identify courses
									with relevance to their unique audience. Additionally, only courses by instructors who are opted into
									the Marketing Boost program are eligible for reseller distribution.
								</p>
								<h3>How is instructor pay calculated for reseller purchases?</h3>
								<p>
									Any enrollments facilitated by a reseller will be categorized as "External Partner" on the instructor
									revenue report. The "sale details" on the transaction-level summary will display the sale amount in US
									dollars, the revenue share, and the final instructor pay. Because reseller partnerships are a part of
									the Marketing Boost program, the instructor revenue share for a course purchased via a reseller is
									25%. 
								</p>
								<h3>What should instructors do with questions about representations made by resellers?</h3>
								<p>
									If you have questions about a listing on a reseller site, or you'd like to confirm that an external
									listing is an official reseller partnership, please reach out to policy@udemy.com.
								</p>
								<p style={{ marginLeft: '630px', marginTop: '50px' }}>
									<Link href="/support/Instructor-Payment">Instuctor Payment</Link>
								</p>
							</Typography>
						</Paper>
					</Grid>

					<Grid item xs={3}>
						<div style={{ marginBottom: theme.spacing(3) }}>
							<Instructornav />
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
export default HowdoInstructorsEarnFromResellers
