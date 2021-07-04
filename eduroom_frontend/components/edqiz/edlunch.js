import { Fragment, useState, useEffect } from 'react'
import Page1 from './list'
import Page3 from './edqizLunching'
import api from '../../api'

const Content = () => {
	const [room, setRoom] = useState(null)
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await api.get('/api/kahoot/rooms')
				setRoom(res.data)
			} catch (err) {}
		}
		fetchData()
	}, [])

	//query data from id quiz 1

	const [current, setCurrent] = useState(1)
	const [questionNumber, setquestionNumber] = useState(0)

	const handleQuestionNumber = (val) => {
		setquestionNumber(val)
	}

	const goto = (val) => {
		setCurrent(val)
	}

	const renderPage = () => {
		switch (current) {
			case 1:
				return (
					<Page1 data={room} goto={goto} handleQuestionNumber={handleQuestionNumber} questionNumber={questionNumber} />
				)
			case 2:
				return (
					<Page3
						data={room}
						question={question}
						goto={goto}
						handleQuestionNumber={handleQuestionNumber}
						questionNumber={questionNumber}
					/>
				)
		}
	}

	return (
		<Fragment>
			<div className="landing">
				<div>
					<div className="card">{renderPage()}</div>
				</div>
			</div>
			<style jsx>{``}</style>
		</Fragment>
	)
}
export default Content
