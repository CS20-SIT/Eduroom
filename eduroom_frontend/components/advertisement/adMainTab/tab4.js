import { Fragment, useState } from 'react'
import style from '../../../styles/advertisement/ads'
import { useRouter } from 'next/router'
import { Link, Typography, InputBase, Paper, Grid } from '@material-ui/core'

const Content = () => {
	const router = useRouter()
	return (
		<Fragment>
			<Grid containner spacing={3}>
				<Grid item xs={7}>
					<div style={{ marginTop: '100px', marginLeft: '150px' }}>
						<div className="ad-tab1-header">Set a budget that works</div>
						<div className="ad-tab1-header" style={{ marginTop: '-10px' }}>
							for your business{' '}
						</div>

						<div className="ad-tab1-description">
							Put your business in front of the people you want to reach.<br></br>
							Spend $500 per 1 ads
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
			<div className="ntab4"></div>
			<div className="tab4" style={{ marginTop: '-40%', marginLeft: '50%', marginBottom: '1.5%' }}></div>

			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Content
