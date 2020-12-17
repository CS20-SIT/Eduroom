import { Fragment } from 'react'
const Choice = ({ idx, choice, correct,chnageCorrec }) => {
	console.log(choice, correct)
	const renderCheck = () => {
		if (correct === idx) {
			return <i style={{ color: '#27AE60' }} className="fas fa-check"></i>
		} else {
			return <i style={{ color: '#DB524E' }} className="fa fa-times" aria-hidden="true"></i>
		}
	}
	return (
		<Fragment>
			<div className="choice">
				<div className="check">{renderCheck()}</div>
        <input name="choice" className="textfield" placeholder={`Choice ${idx+1}`} type="text"></input>
			</div>
			<style jsx>{`
				.choice {
					width: 48%;
					margin-bottom: 10px;
					display: flex;
				}
				.check {
					background: #eff0f6;
					border-radius: 10px;
					padding: 20px;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-right: 10px;
          width: 60px;
				}
        .check:hover{
          cursor: pointer;
        }
				.textfield {
					background: #eff0f6;
					border-radius: 10px;
					width: 100%;
					border: none;
					font-size: 1.1em;
					color: #3d467f;
					padding: 14px;
				}
				.textfield ::placeholder {
					color: #3d467f;
					opacity: 0.75;
				}
			`}</style>
		</Fragment>
	)
}

export default Choice
