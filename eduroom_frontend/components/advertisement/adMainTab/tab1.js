import { Fragment, useState } from 'react'
import style from '../../../styles/advertisement/ads'
import { useRouter } from 'next/router'

const Content = () => {
	const router = useRouter()
	return (
		<div className="tab1">
			<div style={{ paddingTop: '100px' }}>
				<div className="ad-tab1-header">Be seen where </div>
				<div className="ad-tab1-header" style={{ marginTop: '-10px' }}>
					everyone is watching{' '}
				</div>
				<div className="ad-tab1-description">
					With EDUROOM ads, reach potential customers <br></br>
					and have them take action when they watch <br></br>
					or search for videos on YouTube – and only <br></br>
					pay when they show interest.
				</div>
				<div className="ad-question" style={{ marginTop: '-30px' }}>
					Already have a ADs?
				</div>
				<button
					style={{ marginTop: '10px' }}
					className="ad-tab1-button"
					onClick={() => router.push('/advertisement/adinform')}
				>
					<a className="ad-button-text">Start Now</a>
				</button>
			</div>
			<style jsx>{style}</style>
		</div>
	)
}
export default Content
