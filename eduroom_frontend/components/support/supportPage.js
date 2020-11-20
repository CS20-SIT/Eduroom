import Head from 'next/head'
import React, { Fragment, useState } from 'react'
import { Button, Grid, makeStyles, Link } from '@material-ui/core'
import General from '../../components/template/general'
import StudentSupport from '../support/studentSupport'
import InstructorSupport from '../support/InstructorSupport'
import create from '../../pages/support/getstart'

const SupportPage = () => {
	const ResultsStudent = () => (
		<div id="results" className="search-results">
			Student Result
		</div>
	)
	const ResultsInstructor = () => (
		<div id="results" className="search-results">
			Instuctor Result
		</div>
	)
	const [showResultsStudent, setShowResultsStudent] = useState(false)
	const onClickStudent = () => {
		setShowResultsStudent(true)
		setShowResultsInstructor(false)
	}
	const [showResultsInstructor, setShowResultsInstructor] = useState(false)
	const onClickInstructor = () => {
		setShowResultsInstructor(true)
		setShowResultsStudent(false)
	}
	return (
		<Fragment>
			<General>
				<Head>Help and Support</Head>

				<img src="/images/whatcanwe2.svg" style={{ width: '100%' }}></img>
				<div>
					<Grid container spacing={2}>
						<Grid item sm={12}>
							<Grid container justify="center" spacing={4}>
								<Grid item>
									<Button value="Search" onClick={onClickStudent} style={{ width: '200px', height: '60px' }}>
										<h2>Student</h2>
									</Button>
								</Grid>
								<Grid item>
									<Button value="Search" onClick={onClickInstructor} style={{ width: '200px', height: '60px' }}>
										<h2>Instructor</h2>
									</Button>
								</Grid>
							</Grid>
							{showResultsInstructor ? <InstructorSupport /> : <StudentSupport />}
						</Grid>
						<Link href="/support/create">
							<Button variant="outlined">Contact us</Button>
						</Link>
					</Grid>
				</div>
			</General>
		</Fragment>
	)
}

export default SupportPage
