import { Fragment, useState } from 'react'
import Link from 'next/link'
const Page1 = () => {
	return (
		<Fragment>
			<div>
				<Link href="/edqiz/create">
					<button className="card">
						<div className="addSign">+</div>
						<div style={{ marginTop: '10px' }}>add new quiz</div>
					</button>
				</Link>
			</div>
			<style jsx>{`
				.addSign {
					border-radius: 100%;
					width: 4vw;
					height: 4vw;
					background-color: white;
					border: 2px solid;
					font-size: 25px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.card {
					display: flex;
					justify-content: center;
					align-items: center;
					background: white;
					padding: 0px;
					transition: 0.3s;
					width: 40vw;
					color: #b3abbc;
					height: 30vh;
					border-radius: 2vh;
					border: 3.5px dotted #b3abbc;
					padding: 0 20px 10px 0;
					flex-direction: column;
					outline: none;
					font-weight: 600;
					margin: 20px;
				}
				.card:hover {
					color: black;
					border: 3.5px dotted black;
				}
			`}</style>
		</Fragment>
	)
}
export default Page1
