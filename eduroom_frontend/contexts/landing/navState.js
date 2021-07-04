import { useReducer } from 'react'
import navReducer from './navReducer'
import NavContext from './navContext'

import { UPDATE_Y } from './types'

const navState = (props) => {
	const initialState = { y: 0 }
	const [state, dispatch] = useReducer(navReducer, initialState)

	const updateY = (y) => {
		dispatch({ type: UPDATE_Y, payload: y })
	}

	return (
		<NavContext.Provider
			value={{
				y: state.y,
				updateY,
			}}
		>
			{props.children}
		</NavContext.Provider>
	)
}

export default navState
