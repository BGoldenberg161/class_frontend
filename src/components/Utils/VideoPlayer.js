import React from 'react';
import { Video, Box } from 'grommet';
import Promo from '../../assets/Video/classVideo.mp4'

const VideoPlayer = props => {
	return (
		<div>
			<Box align='center' pad='large'>
				<Video controls='over' preLoad>
					<source
						key='video'
						src={Promo}
						type='video/mp4'
					/>
					<track
						key='cc'
						label='English'
						kind='subtitles'
						srcLang='en'
						src='https://v2.grommet.io/assets/small-en.vtt'
						default={true}
					/>
				</Video>
			</Box>
		</div>
	);
};

export default VideoPlayer;
