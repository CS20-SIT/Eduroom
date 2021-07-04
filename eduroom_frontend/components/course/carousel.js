import { Fragment } from 'react'
import style from '../../styles/course/carousel'
const carousel = () => {
	return (
		<Fragment>
			<div id="slider">
				<figure>
					<img src="/images/package/pic1.svg"></img>
					<img src="/images/package/pic2.svg"></img>
					{/* <img src="/images/package/pic3.svg"></img> */}
				</figure>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default carousel
