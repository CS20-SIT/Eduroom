import { Fragment, useState, useEffect, useRef, useContext } from 'react'
import NavContext from '../contexts/landing/navContext'

const Container = (props) => {
	const navContext = useContext(NavContext)
	const { updateY } = navContext
	const prevScrollY = useRef(0)
	const [goingUp, setGoingUp] = useState(false)
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			if (prevScrollY.current < currentScrollY && goingUp) {
				setGoingUp(false)
			}
			if (prevScrollY.current > currentScrollY && !goingUp) {
				setGoingUp(true)
			}
			prevScrollY.current = currentScrollY
			updateY(currentScrollY)
		}

		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => window.removeEventListener('scroll', handleScroll)
	}, [goingUp])
	return <Fragment>{props.children}</Fragment>
}

export default Container
