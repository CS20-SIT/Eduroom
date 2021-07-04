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

const InstructorsEduroomsPricingTiersForCourses = () => {
	const theme = createMuiTheme()
	return (
		<Fragment>
			<Grid container style={{ marginTop: '30px' }}>
				<Grid container>
					<Typography style={{ marginLeft: '20px' }}>
						{' '}
						<h1>Instructors Edurooms Pricing Tiers For Courses</h1>
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
									The global price tier matrix includes the minimum and maximum list prices supported on Udemy, and also
									outlines the price points in each currency Udemy supports.
								</p>
								<h3>List vs. base price</h3>
								<p>
									Instructors set a base price for each course, which is used as the course's list price for instructors
									who are not opted into the Udemy Deals Program. For instructors who opt in to the Udemy Deals Program,
									Udemy will generate and display a market-specific list price that is different from the base price
									(except in Japan).
								</p>
								<p>
									Instructions on how instructors can set or change the base price of their courses are available in
									this article.
								</p>
								<h3>The global price matrix</h3>
								<p>
									When instructors set their course base price in a given currency, they’re setting the base price at a
									particular tier. The list price that students will see in other currencies is calculated using the
									price tier matrix, based on the tier that it corresponds with.
								</p>
								<p>
									The price points on the tier matrix are not calculated using only strict currency conversions. Since
									Udemy is a global marketplace, the prices are also based on market conditions in different countries
									and will be adjusted regularly.
								</p>
								<p>
									Charm pricing options, where the price is set and displayed as ending in “.99”, are available in the
									following currencies: USD, SGD, AUD, TRY, GBP, BR, ILS, EUR, CAD and PLN.
								</p>
								<p>
									Please note: courses that you charge for on Udemy cannot be offered for free off of Udemy (e.g.
									YouTube, your own site, other sites).
								</p>
								<p style={{ marginLeft: '630px', marginTop: '50px' }}>
									<Link href="/support/Selling&Promotion">Selling & Promotion</Link>
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
export default InstructorsEduroomsPricingTiersForCourses
