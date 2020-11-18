import { useEffect } from 'react'
import Styles from '../../styles/CoinStyles/test.module.css'

const temp = (props) => {
	useEffect(() => {
		createBalloons(100)
	}, [])
	function random(num) {
		return Math.floor(Math.random() * num)
	}
	function createBalloons(num) {
		var balloonContainer = document.getElementById('balloon-container')
		console.log(balloonContainer)
		for (var i = num; i > 0; i--) {
			var balloon = document.createElement('div')
			balloon.className = Styles.balloon
			balloon.style.cssText = getRandomStyles()
			balloonContainer.append(balloon)
		}
		console.log(balloonContainer)
	}
	function getRandomStyles() {
		var r = random(255)
		var g = random(255)
		var b = random(255)
		var mt = random(200)
		var ml = random(50)
		var dur = random(5) + 5
		console.log(dur)
		return `
                background-color: rgba(${r},${g},${b},0.7);
                color: rgba(${r},${g},${b},0.7); 
                box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
                margin: ${mt}px 0 0 ${ml}px;
                animation: float ${dur}s ease-in infinite;
                `
	}

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
