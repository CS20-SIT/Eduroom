import { Fragment } from 'react'
import style from '../../styles/edqiz/edquizText'
import { word } from './text'
const CreateText = ({ type }) => {
	return (
		<Fragment>
			<div className="text-box">
				<span className="text-title">
					{word[type].map((el, index) => {
						return (
							<span key={index} className={`${el.color}-text`}>
								{el.value}
							</span>
						)
					})}
				</span>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default CreateText
