import React, { Fragment } from 'react'
import style from '../../styles/course/review'
const post = () => {
	return (
		<Fragment>
			<div
				className="postedBox"
				style={{
					boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0)',
					background: '#F2ECFE',
					borderRadius: '20px',
					position: 'absolute',
					width: '1015px',
					height: '194px',
					marginTop: '40%',
					marginLeft: '7.5%',
					marginRight: 'auto',
					display: 'flex',
					justifyContent: 'start',
					paddingTop: '37px',
					fontSize: 24,
				}}
			>
				<img
					src="https://pbs.twimg.com/profile_images/1186321683184943104/QA-oZKAI_400x400.jpg"
					className="myimgInPost"
					style={{ marginLeft: '4%', marginRight: '20px' }}
				></img>
				<div
					className="col"
					style={{
						width: 800,
						height: 100,
						fontSize: 24,
					}}
				>
					<b>Hidetoshi Dekisugi </b>
					<div
						style={{
							fontSize: 14,
							color: '#9593A0',
						}}
					><div className='starForPost' >
						<span className="fa fa-star" style={{color: '#FB9CCB'}}></span>
<span className="fa fa-star" style={{color: '#FB9CCB'}}></span>
<span className="fa fa-star" style={{color: '#FB9CCB'}}></span>
<span className="fa fa-star" style={{color: '#FB9CCB'}}></span>
<span className="fa fa-star" style={{color: '#FB9CCB'}}></span>
</div>
					</div>
					<div style={{ fontSize: 18 }}>
						Use this random sentence generator to create random sentences that can help you brainstorm, come up with new
						story ideas, or song lyrics. The tool chooses nouns, verbs and adjectives from a hand-picked list of
						thousands of the most evocative words and generates a random sentence to help inspire you.
					</div>
				</div>
			</div>

			<style jsx>{style}</style>
		</Fragment>
	)
}
export default post
