import React, { Fragment } from 'react'
import style from '../../styles/CoinStyles/balloon'
const Balloon = () => {
    const randomNumber = (start,end) => {
        let width = end - start;
        return Math.floor(Math.random() * 100) % width + start;
	}
	const randomColor = (color)=>{
		return Math.floor(Math.random()*color)
	}
	const r = randomColor(255);
	const g = randomColor(255);
	const b = randomColor(255);
	return (
		<Fragment>
			<div className="box">
			<div className="balloon" style={{left:randomNumber(0,90)+'vw',backgroundColor:'rgb('+`${r},${g},${b}`+')',boxShadow:'inset -7px -3px 10px'+' rgb('+`${r},${g},${b}`+')' , top:randomNumber(20,90)+'vh',animationDuration: randomNumber(5,25)+'s',animationTimingFunction: `${randomNumber(1,2) % 2 == 0 ? 'ease-in' : 'ease-out'}`}}></div>
			</div>
			<style jsx>
				{style}
			</style>
		</Fragment>
	)
}
export default Balloon;

// const temp = () => {
// 	function random(num) {
// 		return Math.floor(Math.random() * num)
// 	}
// 	function getRandomStyles() {
// 		var r = random(255)
// 		var g = random(255)
// 		var b = random(255)
// 		var mt = random(200)
// 		var ml = random(50)
// 		var dur = random(5) + 5
// 		console.log(dur)
// 		return `
//         background-color: rgba(${r},${g},${b},0.7);
//         color: rgba(${r},${g},${b},0.7);
//         box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
//         margin: ${mt}px 0 0 ${ml}px;
//         animation: float ${dur}s ease-in infinite;
//         `
// 	}

// 	return <div className={getRandomStyles()}></div>
// }
// export default temp
