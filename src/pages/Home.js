import React from 'react';
import { Main, Heading, Paragraph, Box, Image } from 'grommet';
import Homebox from '../assets/homebox.png';

const Home = props => {
	return (
		<div>
			<Main pad='large' align='center' justify='center'>
				<Heading>Welcome, to c<span style={{color: '#6FFFB0'}}>ℓ</span>ass</Heading>
				<Box
					responsive={true}
					elevation='large'
					border={{
						color: 'brand',
						size: 'large',
						style: 'inset',
						side: 'all',
					}}
				>
					<Image responsive={true} fit='cover' src={Homebox} />
				</Box>
				<Paragraph>
					An investment in knowledge, pays the best interest.
				</Paragraph>
			</Main>
		</div>
	);
};

export default Home;
