import React, { Fragment, useEffect, useState } from 'react'
import Box from '../../../../../components/graderSubmit/Box'
import Layout from '../../../../../components/graderSubmit/Layout'
import style from '../../../../../styles/graderSubmit/problems/problemSolvePage'
import ProblemLayout from '../../../../../components/graderSubmit/problems/ProblemLayout'
import { useRouter } from 'next/router'

const ProblemID = ({ id }) => {
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

export async function getServerSideProps(ctx) {
	try {
		const id = ctx.query.page
		return { props: { id } }
	} catch (err) {
		return { props: { id: '' } }
	}
}

export default ProblemID
