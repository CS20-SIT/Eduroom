import { Fragment } from 'react'
const Course = ({ mainColor, subColor }) => {
	return (
		<Fragment>
			<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7.14795 8.05581L12.5002 10.1966L17.8524 8.05581L12.5002 5.91504L7.14795 8.05581Z" fill={subColor} />
				<path
					d="M8.83789 10.3107V12.0009L12.5 13.4658L16.1621 12.0009V10.3105L12.5 11.7756L8.83789 10.3107Z"
					fill={subColor}
				/>
				<path
					d="M0 0V19.043H25V0H0ZM20.5566 14.6484H19.0918V9.13809L17.627 9.72412V12.9918L12.5 15.0432L7.37305 12.9918V9.72437L3.20381 8.05664L12.5 4.33804L20.5566 7.56099V14.6484Z"
					fill={mainColor}
				/>
				<path
					d="M15.4694 20.5566H9.53062L9.04229 22.0215H5.9082V23.4863H19.0918V22.0215H15.9577L15.4694 20.5566Z"
					fill={mainColor}
				/>
			</svg>
		</Fragment>
	)
}
export default Course
