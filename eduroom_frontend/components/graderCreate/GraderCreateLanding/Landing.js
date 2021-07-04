import { Fragment } from 'react'
import { useRouter } from 'next/router'
import style from '../../../styles/graderCreate/glanding'
const Content = () => {
	const router = useRouter()
	return (
		<Fragment>
			<div className="landing">
				<div className="landing-content">
					<div className="landing-header">
						WELCOME BACK! <br />
						<span style={{ fontSize: '1.0em', fontWeight: '500' }}>TO EDUROOM GRADER</span>
					</div>
					<div className="landing-description">
						Don’t stop when you’re tired, <br />
						Stop when you’re done.
					</div>
					<button className="landing-button" onClick={() => router.push('/admin/grader/announcement')}>
						<a className="landing-button-text">START MANAGE</a>
					</button>
				</div>
				<img
					className="landing-img"
					alt="landing-img"
					src="/images/graderCreate/landing.svg"
					width="800"
					height="800"
				/>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Content
