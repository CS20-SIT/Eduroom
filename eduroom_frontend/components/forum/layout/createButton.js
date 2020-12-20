import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
const CreateButton = () => {
	const router = useRouter()
	return (
		<Fragment>
			<button
				className="createButton"
				onClick={() => {
					router.push(`/forum/create`)
				}}
			>
				<span className="createButtonText">
					<i className="fas fa-plus" />
					<span className="createText">ADD FORUM</span>
				</span>
			</button>
			<style jsx>
				{`
					.createButton {
						background: #fe75b7;
						border-radius: 25px;
						padding: 0.5rem 1.5rem;
						border: none;
						outline: none;
						cursor: pointer;
						transition: 0.25s;
						margin-left: 1.5rem;
					}
					.createButtonText {
						color: white;
						font-weight: 600;
						font-size: 1rem;
					}
					.createText {
						margin-left: 0.5rem;
					}
				`}
			</style>
		</Fragment>
	)
}
export default CreateButton
