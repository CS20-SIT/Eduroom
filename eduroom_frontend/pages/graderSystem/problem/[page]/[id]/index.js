import React, { Fragment, useEffect, useState } from 'react'
import Box from '../../../../../components/graderSubmit/Box'
import Layout from '../../../../../components/graderSubmit/Layout'
import style from '../../../../../styles/graderSubmit/problems/problemSolvePage'
import ProblemLayout from '../../../../../components/graderSubmit/problems/ProblemLayout'
import { useRouter } from 'next/router'

const ProblemID = () => {
	const [id, setId] = useState(null)
	const router = useRouter()
	useEffect(() => {
		const ID = router.query.id
		setId(ID)
	}, [])
	return (
		<Fragment>
			<Layout page="problem">
				<div className="main">
					<div className="size">
						<Box>
							<ProblemLayout page="description" id={id} />
						</Box>
					</div>
				</div>
			</Layout>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default ProblemID
