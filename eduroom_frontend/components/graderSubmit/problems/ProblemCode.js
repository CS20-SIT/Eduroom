import { Fragment, useState, useEffect } from 'react'
import style from '../../../styles/graderSubmit/problems/problemCode'
import api from '../../../api'

const ProblemCode = (props) => {
	const [data, setData] = useState([])
	const [resultData, setResultData] = useState('')
	const [code, setCode] = useState('')
	const [loading, setLoading] = useState(false)
	const [user, setUser] = useState(true)

	const handleSubmit = async () => {
		try {
			setLoading(true)
			const base64Code = stringToBase64(code)
			console.log(base64Code)
			const body = {
				source_code: base64Code,
				language: 'Java',
				problem_id: props.id,
			}
			const res = await api.post('/api/grader/submission', body)
			setData(res.data)

			try {
				const result = await api.get('/api/grader/submission', {
					params: {
						tokens: res.data.tokens,
						attemptId: res.data.attemptId,
					},
				})
				setResultData(result.data)
				setLoading(false)
			} catch (e) {
				console.log('error is ', e.data)
			}
		} catch (e) {
			return console.log(e.data)
		}
	}

	const colorize = (resultData) => {
		if (resultData != '') {
			switch (resultData.status.toLowerCase()) {
				case 'accepted':
					return 'a'
				case 'partial accepted':
					return 'pa'
				case 'wrong answer':
					return 'wa'
				case 'compilation error':
					return 'ce'
				case 'time limit exceed':
					return 'tle'
				case 'memory limit exceed':
					return 'mle'
				case 'runtime error':
					return 're'
				default:
					return 'pending'
			}
		} else {
			return null
		}
	}

	const handleKeyDown = (evt) => {
		let value = code,
			selStartPos = evt.currentTarget.selectionStart

		// handle 4-space indent on
		if (evt.key === 'Tab') {
			value = value.substring(0, selStartPos) + '    ' + value.substring(selStartPos, value.length)
			evt.currentTarget.selectionStart = selStartPos + 3
			evt.currentTarget.selectionEnd = selStartPos + 4
			evt.preventDefault()

			setCode(value)
		}
	}

	useEffect(() => {
		const GetData = async () => {
			try {
				const result = await api.get('/api/auth/profile')

				if (result.data != null) {
					setUser(false)
				}
			} catch (e) {
				return console.log(e.data)
			}
		}
		GetData()
	}, [user])

	return (
		<Fragment>
			<div className="box">
				<textarea
					className="code"
					value={code}
					onChange={(e) => {
						setCode(e.target.value)
					}}
					onKeyDown={handleKeyDown}
				></textarea>
			</div>
			<div className="lower-panel">
				{resultData != null ? (
					loading ? (
						<div className="container">
							<div className="item"></div>
							<div className="item"></div>
							<div className="item"></div>
							<div className="item"></div>
						</div>
					) : (
						<div className={`status ${colorize(resultData)}`}>{resultData.status}</div>
					)
				) : (
					<div className={`static`}></div>
				)}
				<button
					onClick={
						code != ''
							? handleSubmit
							: () => {
									alert('PlEaSe InPuT yOuR cOdE bEfOrE sUbMiT!')
							  }
					}
					className={user === true ? 'block' : 'butt'}
					disabled={user}
				>
					Submit
				</button>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export const stringToBase64 = (string) => {
	const buff = Buffer.from(string, 'utf-8')
	const base64 = buff.toString('base64')
	return base64
}

export const base64ToString = (base64) => {
	const buff = Buffer.from(base64, 'base64')
	const string = buff.toString('utf-8')
	return String
}

export default ProblemCode
