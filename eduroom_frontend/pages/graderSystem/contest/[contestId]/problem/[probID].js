import React, { Fragment, useEffect, useState } from 'react'
import Box from '../../../../../components/graderSubmit/Box'
import Layout from '../../../../../components/graderSubmit/Layout'
import style from '../../../../../styles/graderSubmit/problems/problemSolvePage'
import ProblemLayout from '../../../../../components/graderSubmit/problems/ProblemLayout'
import { useRouter } from 'next/router'

const Temp = ({ probID, contestId }) => {
	const [id, setId] = useState(null)

	return (
		<Fragment>
			<Layout page="contest">
				<div className="main">
					<div className="size">
						<Box>
							<ProblemLayout page="description" id={probID} contestID={contestId} />
						</Box>
					</div>
				</div>
			</Layout>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export async function getServerSideProps(ctx) {
	try {
		const probID = ctx.query.probID
		const contestId = ctx.query.contestId
		return { props: { probID, contestId } }
	} catch (err) {
		return { props: { probID: '', contestId: '' } }
	}
}
export default Temp
