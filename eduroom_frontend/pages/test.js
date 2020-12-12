import React, { Fragment, useState } from 'react'
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import General from '../components/template/general'
const Test = () => {
	return (
		<Fragment>
			<General>
				<AutoRotatingCarousel label="Get started" open={true} style={{ position: 'absolute' }}>
					<Slide
						media={<img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />}
						mediaBackgroundStyle={{ backgroundColor: 'red' }}
						style={{ backgroundColor: 'red' }}
						title="This is a very cool feature"
						subtitle="Just using this will blow your mind."
					/>
					<Slide
						media={<img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />}
						mediaBackgroundStyle={{ backgroundColor: 'blue' }}
						style={{ backgroundColor: 'blue' }}
						title="Ever wanted to be popular?"
						subtitle="Well just mix two colors and your are good to go!"
					/>
					<Slide
						media={<img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />}
						mediaBackgroundStyle={{ backgroundColor: 'green' }}
						style={{ backgroundColor: 'green' }}
						title="May the force be with you"
						subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
					/>
				</AutoRotatingCarousel>
			</General>
		</Fragment>
	)
}
export default Test
