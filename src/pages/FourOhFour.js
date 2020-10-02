import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Main, Box, Image, Paragraph } from 'grommet';
import { Home } from 'grommet-icons';

const FourOhFour = props => {
	return (
		<div>
			<Main pad='large' align='center' justify='center'>
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
					<Image
						responsive={true}
						fit='cover'
						src='https://38.media.tumblr.com/546c0cd48d71f210f9b67a389003790d/tumblr_neq0yw9rMA1tm16jjo1_500.gif'
					/>
				</Box>
				<Paragraph>404, Page not found..</Paragraph>
				<Anchor as={Link} to='/' color='#6FFFB0' icon={<Home />} hoverIndicator />
			</Main>
		</div>
	);
};

export default FourOhFour;
