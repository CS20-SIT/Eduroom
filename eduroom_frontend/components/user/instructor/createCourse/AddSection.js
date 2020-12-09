import { Fragment } from 'react'

const AddSection = (props) => {
	return (
		<Fragment>
      <div className="container" onClick={props.addSection}>
				<div className="circle">
					<div className="plus">+</div>
				</div>
				<div>
					<p style={{ margin: '5px 0 0 0', color: '#3d467f' }}>Add your section</p>
				</div>
			</div>

			<style jsx>{`
				.container {
					background: #ffffff;
					box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
					border-radius: 10px;
					padding: 20px 10px;
					margin-bottom: 20px;
					height: 150px;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					transition: 0.3s;
				}
				.container:hover {
					opacity: 0.7;
					transition: 0.3s;
					cursor: pointer;
				}
				.plus {
					font-size: 40px;
					padding: 0 0 10px 0;
					color: #3d467f;
				}
				.circle {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding: 10px;
					width: 45px;
					height: 45px;
					border: 1px solid #3d467f;
					box-sizing: border-box;
					border-radius: 100px;
				}
			`}</style>
		</Fragment>
	)
}

export default AddSection
