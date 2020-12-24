import React, { Fragment, useEffect, useState } from 'react'
import Box from '../../../../../components/graderSubmit/Box'
import Layout from '../../../../../components/graderSubmit/Layout'
import style from '../../../../../styles/graderSubmit/problems/problemSolvePage'
import ProblemLayout from '../../../../../components/graderSubmit/problems/ProblemLayout'

const ProblemID = ({ id, page }) => {
	return (
		<Fragment>
			<Layout page="problem">
				<div className="main">
					<div className="size">
						<Box>
							<ProblemLayout page="description" pageId={page} id={id} />
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
		const id = ctx.query.id
		const page = ctx.query.page
		return { props: { id, page } }
	} catch (err) {
		return { props: { id: '', page: '' } }
	}
}

export default ProblemID
