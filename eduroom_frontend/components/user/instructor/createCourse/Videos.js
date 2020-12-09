import { Fragment } from 'react'
import Video from './Video'

const Videos = ({ videos,changeVideos }) => {
	const handleVideos = (video, idx) => {
    videos[idx] = video
    changeVideos(videos);
	}
	const renderVideos = () => {
		const arr = videos.map((video, idx) => {
			return <Video video={video} idx={idx} key={idx} handleVideos={handleVideos}></Video>
		})
		return arr
	}
	return (
		<Fragment>
      <div style={{marginTop:'30px'}}>
				{renderVideos()}
			</div>
			<style jsx>{``}</style>
		</Fragment>
	)
}

export default Videos
