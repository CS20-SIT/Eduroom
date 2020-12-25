import Styles from '../../styles/CoinStyles/RenderHistory'
import General from '../../components/template/general'
import RenderHistory from '../../components/FolderCoin/Render_History'
import RightHistory from '../../components/FolderCoin/RightHistory'
import { useState, useEffect } from 'react'
import api from '../../api'
const temp = () => {
	const [id, setId] = useState(0)
	const [data, setData] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await api.get('/api/coin/stickerOwner')
				setData(res.data)
			} catch (err) {}
		}
		fetchData()
	}, [])
	const renderDetail = () => {
		return data.length > 0 ? <RightHistory item={data[id]}></RightHistory> : <h1>There has nothing in History</h1>
	}
	const handleChoose = (idx) => {
		console.log(idx)
		setId(idx)
	}
	return (
		<General>
			<div className="background">
				<div className="list">
					<RenderHistory item={data} choose={handleChoose}></RenderHistory>
				</div>
				{renderDetail()}
			</div>

			<style jsx>{Styles}</style>
		</General>
	)
}
export default temp
