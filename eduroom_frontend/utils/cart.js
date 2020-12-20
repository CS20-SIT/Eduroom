const getItems = (type) => {
	const store = localStorage.getItem(type)
	if (!store) return []
	return store.split(',')
}

const isInCart = (type, id) => {
	let store = localStorage.getItem(type)
	if (!store) return false
	const items = store.split(',')
	return items.includes(id)
}

const addToCart = (type, id) => {
	let store = localStorage.getItem(type)
	if (isInCart(type, id)) {
		return
	}
	if (!store) {
		localStorage.setItem(type, [id])
	} else {
		const items = localStorage.getItem('course').split(',')
		const newItems = [...items, id]
		localStorage.setItem(type, newItems)
	}
	const answer = localStorage.getItem(type).split(',')
	console.log(answer)
}

const removeFromCart = (type, id) => {
	if (!isInCart(type, id)) return
	const store = localStorage.getItem(type)
	const items = store.split(',')
	const idx = items.indexOf(id)
	items.splice(idx, 1)
	localStorage.setItem(type, items)
}

const clearCart = () => {
	localStorage.removeItem('course')
	localStorage.removeItem('package')
}

const getNumOfElements = (type) => {
	const store = localStorage.getItem(type)
	if (!store) return 0
	const items = store.split(',')
	return items.length
}

module.exports = { getItems, isInCart, addToCart, removeFromCart, clearCart, getNumOfElements }
