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

const LearningWithCodingExercises = () => {
	const theme = createMuiTheme()
	return (
		<Fragment>
			<Grid container style={{ marginTop: '30px' }}>
				<Grid container>
					<Typography style={{ marginLeft: '20px' }}>
						{' '}
						<h1>Learning With Coding Exercises</h1>
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
									If you want to learn more about programming and are hoping to get practical coding experience, you’ll
									be happy to know that Udemy now supports coding exercises. Coding exercises are an interactive,
									compelling way to test what you’ve learned in your programming courses.
								</p>
								<h3>What are Coding Exercises?</h3>
								<p>
									Coding exercises are an interactive tool that instructors can add to their courses. You enter code
									directly onto the page and can run the function without switching programs or screens. The exercises
									also provide hints when you’ve made an entry error, so you can correct the mistake and proceed with
									your coding.
								</p>
								<h3>Which Udemy Courses Offer Coding Exercises?</h3>
								<p>
									You can check to see whether a programming course includes coding exercises by looking at the course
									landing page. If it does offer coding exercises, you will see coding exercises posted below the course
									information.
								</p>
								<p>For tips on how to search for courses in the Udemy marketplace, please click here.</p>
								<h3>Which Programming Languages are Supported for the Coding Exercises?</h3>
								<p>
									Instructors can create coding exercises in various languages, some of which include C++, C#, HTML &
									Javascript, Java, Python, Ruby, Swift and PHP, among others.
								</p>
								<h3>Who Should I Contact if I Have a Question About a Coding Exercise? </h3>
								<p>
									If you’re unable to complete the coding exercise, or have any questions regarding it, the best way to
									find answers is to use the Q&A. If you enter an incorrect solution, then you will see a prompt on the
									bottom left hand of the page, asking you if you’d like to ask a question in the Q&A.
								</p>
								<p>
									Other students may have asked the same question already, and if so, the instructor likely posted an
									answer. If no one else has asked your question, however, you can quickly post it in the Q&A for the
									instructor to see.
								</p>
								<p>
									If you don’t receive a response in the Q&A you can also reach out to the instructors directly. They
									are the experts when it comes to the content in their courses, and are the best people to ask any
									questions regarding it. This article outlines how you contact the instructor of a course.
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
export default LearningWithCodingExercises
