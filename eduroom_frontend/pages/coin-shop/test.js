import { useEffect } from 'react'
import Styles from '../../styles/CoinStyles/test.module.css'

const temp = (props) => {
	// useEffect(() => {
	// 	createBalloons(100)
	// }, [])
	// function createBalloons(num) {
	// 	var balloonContainer = document.getElementById('balloon-container')
	// 	console.log(balloonContainer)
	// 	for (var i = num; i > 0; i--) {
	// 		var balloon = document.createElement('div')
	// 		balloon.className = Styles.balloon
	// 		balloon.style.cssText = getRandomStyles()
	// 		balloonContainer.append(balloon)
	// 	}
	// 	console.log(balloonContainer)
	// }

	return (
		<div>
			<div>
				<div id="balloon-container"></div>
			</div>
			<style jsx>{`
				#balloon-container {
					height: 100vh;
					padding: 1em;
					box-sizing: border-box;
					display: flex;
					flex-wrap: wrap;
					overflow: hidden;

					@keyframes float {
						0% {
							transform: translateY(100vh);
							opacity: 1;
						}
						100% {
							transform: translateY(-300vh);
							opacity: 0;
						}
					}
				}
			`}</style>
		</div>
	)
}
export default temp
