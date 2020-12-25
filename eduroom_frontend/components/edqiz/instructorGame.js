import React, { Fragment, useState, useEffect } from 'react'
import Page1 from './gamePage1'
import Page2 from './gamePage2'
import Page3 from './showRank'
import api from '../../api'
import socketIOClient from 'socket.io-client'
import { useRouter } from 'next/router'

const Content = ({ id }) => {
	const router = useRouter()
	const [current, setCurrent] = useState(1)
	const [endTime, setEndTime] = useState(null)
	const [questionNumber, setquestionNumber] = useState(0)
	const [messages, setMessages] = useState([])
	const [answerAll, setAnswerAll] = useState([])

	const [questionList, setQuestionList] = useState([])
	const [correct, setCorrrect] = useState([])
	const handleChangeQuestionNumber = (val) => {
		if (questionNumber == questionList.length - 1) {
			goto(3)
		}
		setquestionNumber(val)
	}

	const [sessionid, setSesstionID] = useState(null)
	const [data1, setData] = useState([])
	useEffect(() => {
		const fetchSession = async () => {
			try {
				let pin = router.query.id
				const res = await api.get(`/api/kahoot/sessionidAfterStart/${pin}`)
				setSesstionID(res.data.sessionid)
			} catch (err) {}
		}
		fetchSession()
	}, [])
	useEffect(() => {
		const fetchQuestion = async () => {

      try{
			const question = await api.get(`/api/kahoot/question/${sessionid}`)
			setData(question.data.question.rows)
			answerAll.push(question.data.answerAll)
			correct.push(question.data.correct)

      } catch(err){}
		}
		if (sessionid != null) fetchQuestion()
	}, [sessionid])
	useEffect(() => {
		if (answerAll[0]) {
			for (let i = 0; i < data1.length; i++) {
				let questionTemplate = {
					question: '',
					time: '',
					point: '',
					ans: ['', '', '', ''],
					correct: 0,
					image: null,
				}
				questionTemplate.question = data1[i].text
				questionTemplate.time = data1[i].time
				questionTemplate.point = data1[i].point
				questionTemplate.ans[0] = answerAll[0][i][0].text
				questionTemplate.ans[1] = answerAll[0][i][1].text
				questionTemplate.ans[2] = answerAll[0][i][2].text
				questionTemplate.ans[3] = answerAll[0][i][3].text
				questionTemplate.correct = correct[0][i]
				questionTemplate.image = data1[i].picturepath
				questionList.push(questionTemplate)
			}
			setQuestionList([...questionList])
		}
	}, [data1, answerAll])
	useEffect(() => {
		console.log('questionList', questionList)
	}, [questionList])

	const response = () => {
		const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
			path: '/kahoot',
		})

		const temp = messages.slice()
		socket.on('new-message', (newMessage, pin) => {
			temp.push([newMessage, pin])
			setMessages(temp.slice())
		})
	}
	const responseTime = () => {
		const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
			path: '/kahoot',
		})
		socket.on('sent-end-time', (pin, time) => {
			setEndTime(time)
		})
	}
	const setTimeSocket = () => {
		const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
			path: '/kahoot',
		})
		socket.emit('start-game', id.id)
	}

	const sentMessage = () => {
		const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
			path: '/kahoot',
		})

		socket.emit('sent-message', data[questionNumber], id.id)
	}

	const setNextQuestion = () => {
		const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
			path: '/kahoot',
		})
		socket.emit('start-game', id.id)
		socket.on('sent-end-time', (time) => {
			setEndTime(time)
		})
	}

	const renderMessage = () => {
		const arr = messages.map((msg, index) => {
			if (messages[index][1] == id.id) {
				return <div key={index}>{msg}ha</div>
			}
		})
		return ''
	}

	useEffect(() => {}, [])
	const goto = (val) => {
		setCurrent(val)
	}

	const renderPage = () => {
		switch (current) {
			case 1:
				return (
					<Page1
						id={id}
						goto={goto}
						// time={data[questionNumber].time}
						endTime={endTime}
						data={questionList}
						questionNumber={questionNumber}
						sentMessage={sentMessage}
						response={response}
						setquestionNumber={handleChangeQuestionNumber}
					/>
				)
			case 2:
				return (
					<Page2
						goto={goto}
						data={questionList}
						questionNumber={questionNumber}
						ChangeQuestionNumber={handleChangeQuestionNumber}
						setNextQuestion={setNextQuestion}
						// setTime={setTime}
						setTimeSocket={setTimeSocket}
						id={id.id}
					/>
				)
			case 3:
				return (
					<Page3
						goto={goto}
						data={questionList}
						questionNumber={questionNumber}
						ChangeQuestionNumber={handleChangeQuestionNumber}
						setNextQuestion={setNextQuestion}
						// setTime={setTime}
						setTimeSocket={setTimeSocket}
						pin={id.id}
					/>
				)
		}
	}
	return (
		<Fragment>
			<div className="landing">
				<div>
					<div className="card">{renderPage()}</div>
					{renderMessage()}
				</div>
			</div>
			<style jsx>{`
				.content {
					width: 100vw;
					padding: 3% 5%;
					height: 90vh;
				}
				.landing {
					justify-content: center;
					width: 100vw;
					height: 100vh;
					background-image: url('/images/edqiz/create-bg.svg');
					background-repeat: no-repeat;
					background-size: cover;
					overflow: auto;
				}
				.card {
					background: white;
					border-radius: 2vh;
					transition: 0.3s;
					width: 100%;
					height: 100vh;
					text-align: center;
					display: flex;
					flex-wrap: wrap;
					flex-flow: column;
					justify-content: space-around;
				}
			`}</style>
		</Fragment>
	)
}
export default Content
