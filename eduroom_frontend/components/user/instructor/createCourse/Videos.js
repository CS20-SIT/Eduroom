import { Fragment } from 'react'
import Video from './Video'

const Videos = ({ videos, changeVideos, sectionIndex }) => {
	const handleVideos = (video, idx) => {
		videos[idx] = video
		changeVideos(videos)
	}
	const addVideo = () => {
		videos.push({ name: 'Video ' + (videos.length + 1), data: '' })
		changeVideos(videos)
	}
	const renderVideos = () => {
		const arr = videos.map((video, idx) => {
			return (
				<Video
					video={video}
					sectionIndex={sectionIndex}
					idx={idx}
					key={idx}
					handleVideos={handleVideos}
					addVideo={addVideo}
				></Video>
			)
		})
		return arr
	}
	return (
		<Fragment>
			<div style={{ marginTop: '30px' }}>{renderVideos()}</div>
			<style jsx>{``}</style>
		</Fragment>
	)
}

export default Videos
