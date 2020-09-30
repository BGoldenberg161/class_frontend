import React from 'react';
import { Video, Box } from 'grommet';

const VideoPlayer = props => {
	return (
		<div>
			<Box align='center' pad='large'>
				<Video controls='over' preLoad>
					<source
						key='video'
						src='https://v2.grommet.io/assets/small.mp4'
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
