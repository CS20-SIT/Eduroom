import { Fragment } from 'react'
const Pagination = (props) => {
	return (
		<Fragment>
			<div className="container">
				<div className={`circle ${props.currentPage === 1 ? 'active' : ''}`}>
					<div className="text">1</div>
				</div>
				<div className="line"></div>
				<div className={`circle ${props.currentPage === 2 ? 'active' : ''}`}>
					<div className="text">2</div>
				</div>
				<div className="line"></div>
				<div className={`circle ${props.currentPage === 3 ? 'active' : ''}`}>
					<div className="text">3</div>
				</div>
			</div>
			<style jsx>{`
				.container {
					display: flex;
					justify-content: center;
				}
				.circle {
					width: 35px;
					height: 35px;
					border-radius: 20px;
					background: #5b5b5b;
					padding: 8px 14px;
				}
				.active {
					background: #f39ac4;
				}
				.line {
					width: 40px;
					height: 1px;
					margin: 17px 0;
					background-color: #ced4da;
				}
				.text {
					color: white;
				}
			`}</style>
		</Fragment>
	)
}

export default Pagination
