import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import style from '../../styles/learningPathStyles/quiz'

const Quizs = ({ id, nodeID }) => {
	const [quiz, setQuiz] = useState()
	const router = useRouter()
	useEffect(() => {}, [])
	return (
		<Fragment>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<div className="container">
					<div className="card">
						<div className="back" onClick={() => router.push('/learningpath')}>
							<i className="fas fa-chevron-left"></i>
							{'  Back'}
						</div>
						<div style={{ margin: '30px' }}>
							<h1 className="blue" style={{ margin: '0' }}>
								Path
							</h1>
							<h3 style={{ margin: '0' }}>Name</h3>
							<h4>Question: Somethings</h4>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default Quizs
