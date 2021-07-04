import Head from 'next/head'
import { Fragment, useState, useEffect, useContext } from 'react'
import {
	Container,
	Button,
	TextField,
	Grid,
	Typography,
	CssBaseline,
	makeStyles,
	Select,
	MenuItem,
	Paper,
	createMuiTheme,
	ThemeProvider,
	Link,
	fade,
} from '@material-ui/core'
import Instructornav from '../instructorsidenav'

const VideoStandardsandChoosingaCamera = () => {
	const theme = createMuiTheme()
	return (
		<Fragment>
			<Grid container style={{ marginTop: '30px' }}>
				<Grid container>
					<Typography style={{ marginLeft: '20px' }}>
						{' '}
						<h1>Audio Standards and Choosing a Microphone</h1>
					</Typography>
					<Grid item xs={9} style={{ paddingRight: '100px' }}>
						<Paper
							style={{
								padding: '20px',

								backgroundColor: fade('#ffffff', 0.6),
							}}
						>
							<Typography>
								{' '}
								<h3>What are Udemy’s minimum standards around video quality?</h3>
								<p>
									In order to publish your course, you must have at least 30 minutes of video content in your course.
									Additionally, Udemy requires that video content is HD quality, with a resolution of at least 720p.
								</p>
								<p>
									You can read more about our requirements and recommendations for course videos in our Course Quality
									Checklist linked here.
								</p>
								<h3>What kind of camera should I use to record my course?</h3>
								<p>
									If you’re filming video for your course, here are several different types of cameras that have been
									used to record published Udemy courses:
								</p>
								<ul>
									<li>Your iPhone (iPhone 4 models and above)</li>
									<li>Your iPad (iPad 2 models and above)</li>
									<li>Many webcams</li>
									<li>HD Flip cameras</li>
									<li>Go Pro cameras</li>
									<li>Most DSLR cameras</li>
								</ul>
								<p>
									If you have a camera already, check your system preferences or do a quick internet search to check
									that your camera can shoot in 720 HD or higher. Simply search for the name of the product and the
									resolution it shoots. If it can shoot in 720p HD or higher, it will produce video that meets our video
									quality standards. If you have any questions about your video quality, our Test Video service can
									provide personalized assistance and feedback before you start working on our course (read more here).
								</p>
								<h3>What software do I need to produce videos for my course?</h3>
								<p>
									If you’re making screencast recordings for your course, or if you’re looking for a tool to edit and
									export your videos, here is a list of tools that instructors have used to produce published Udemy
									courses:
								</p>
								<ul>
									<li>PC or Mac</li>
									<ul>
										<li>Camtasia, Screenr, Snagit</li>
									</ul>
									<li>Mac only</li>
									<ul>
										<li>Quicktime, iMovie, Screenflow</li>
									</ul>

									<li>PC only</li>
									<ul>
										<li>CamStudio, Microsoft Expression</li>
									</ul>
								</ul>
								<h3>
									What are the required/recommended export settings for video files (codec settings and video file
									types)?
								</h3>
								<p>
									When using video editing software you’ll need to export your recordings to a video file. Udemy strives
									to support as many video and audio settings and codecs, but for the most seamless upload experience,
									we recommend these settings:
								</p>
								<p>Quality: Best (if available)</p>
								<p>Codec: H.264, HEVC, ProRes</p>
								<p>Resolution: 1920x1080 or better</p>
								<p>Minimum Resolution: 1280x720 (*Resolutions below this are rejected)</p>
								<p>Aspect Ratio: 16:9</p>
								<p>Picture Orientation: Landscape (not Portrait</p>
								<p>Framerate: 25 to 60 fps (*Currently all outputs are resampled to 30 fps)</p>
								<p>Bitrate Recommendations:</p>
								<p>H.264</p>
								<ul>
									<li>1920x1080 @ 10 Mb/s</li>
									<li>1280x720 @ 5 Mb/s</li>
								</ul>
								<p>HEVC</p>
								<ul>
									<li>1920x1080 @ 3 Mb/s</li>
									<li>1280x720 @ 6 Mb/s</li>
								</ul>
								<p>ProRes</p>
								<ul>
									<li>Automatic</li>
								</ul>
								<p>Audio Track: Required (*If no audio track is found, video is rejected)</p>
								<p>Audio Codec: AAC (256 kb/s or better) or PCM</p>
								<p>Audio Channels: 2 (Stereo)</p>
								<p>Multimedia Container: MP4 or MOV</p>
								<p>Maximum File Size: 4 GB</p>
								<p>Maximum Duration: 4 Hours</p>
								<p>
									Using the site uploader you can upload files as large as 1.5 GB. If you need to load bigger files, or
									want to upload multiple files to your course at a time, however, use the bulk uploader.
								</p>
								<p>
									Files smaller than 4 GB can be uploaded using the bulk uploader. When a file is uploaded using the
									bulk uploader, it will appear in your library.
								</p>
								<p style={{ marginLeft: '630px', marginTop: '50px' }}>
									<Link href="/support/Selling&Promotion">Selling & Promotion</Link>
								</p>
							</Typography>
						</Paper>
					</Grid>

					<Grid item xs={3}>
						<div style={{ marginBottom: theme.spacing(3) }}>
							<Instructornav />
						</div>

						<Button
							variant="contained"
							style={{
								backgroundColor: '#FB9CCB',
								marginBottom: theme.spacing(10),
								marginLeft: theme.spacing(8.5),
								marginTop: theme.spacing(1),
							}}
							href="/support/create"
						>
							<label style={{ color: '#ffffff' }}>CONTACT US</label>
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Fragment>
	)
}
export default VideoStandardsandChoosingaCamera
