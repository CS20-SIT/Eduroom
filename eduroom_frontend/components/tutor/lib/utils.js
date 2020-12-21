const { month, days } = require('../data/month')
export const timeFormatter = (time) => {
	let tmp = time
	let ampm = ' AM'
	if (time > 12) {
		tmp = time - 12
		ampm = ' PM'
	}
	if (time == 12) ampm = ' PM'
	return tmp >= 10 ? tmp + ':00' + ampm : '0' + tmp + ':00' + ampm
}

export const monthConverter = (m) => {
	return month[m]
}

export const dateFormatter = (date) => {
	const y = Math.floor(date / 10000)
	const m = Math.floor((date % 10000) / 100) - 1
	const d = Math.floor(date % 100)
	return d + ' ' + monthConverter(m).substring(0, 3) + ' ' + y
}

export const dayFormatter = (day) => {
	return days[day]
}
