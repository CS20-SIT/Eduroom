import { Fragment, useState } from 'react'
import style from '../../../styles/advertisement/ads'
import { useRouter } from 'next/router'
import { Link, Typography, InputBase, Paper, Grid } from '@material-ui/core'

const Content = () => {
	const router = useRouter()
	return (
		<Fragment>
			<Grid containner spacing={3}>
				<Grid item xs={6}>
					<div style={{ marginTop: '100px', marginLeft: '150px' }}>
						<div className="ad-tab1-header">It's easy to advertise</div>
						<div className="ad-tab1-header" style={{ marginTop: '-10px' }}>
							your business{' '}
						</div>

						<div className="ad-tab1-description">
							It’s easier to attract your next customer if they<br></br>
							know what makes you unique. Introduce your <br></br>
							business with advertising on EDUROOM.
						</div>
						<button
							style={{ marginTop: '10px' }}
							className="ad-tab1-button"
							onClick={() => router.push('/advertisement/adinform')}
						>
							<a className="ad-button-text">Start Now</a>
						</button>
					</div>
				</Grid>
			</Grid>
			<div className="tab2"></div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Content
