import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Box, Heading } from 'grommet';
import { Home } from 'grommet-icons';

const AppBar = props => {
	return (
		<div>
			<Box
				tag='header'
				direction='row'
				align='center'
				justify='between'
				background='brand'
				pad={{ left: 'small', right: 'small', vertical: 'small' }}
				elevation='medium'
				style={{ zIndex: '1' }}
			>
				<Heading level='3' margin='none'>
					c<span style={{ color: 'green' }}>ℓ</span>ass
				</Heading>

				<Anchor
					href='/'
					label='Home'
					color='#20A464'
					icon={<Home />}
					hoverIndicator
				/>
				<Anchor
					href='/about'
					label='About'
					color='#20A464'
					icon={<Home />}
					hoverIndicator
				/>
				<Anchor
					href='/profile'
					label='Profile'
					color='#20A464'
					icon={<Home />}
					hoverIndicator
				/>
				<Anchor
					href='/assignment'
					label='Assignment'
					color='#20A464'
					icon={<Home />}
					hoverIndicator
				/>
				<Anchor
					href='/grade'
					label='Grades'
					color='#20A464'
					icon={<Home />}
					hoverIndicator
				/>
				<Anchor
					href='/class'
					label='Class'
					color='#20A464'
					icon={<Home />}
					hoverIndicator
				/>
				<Anchor
					href='/signup'
					label='Signup'
					color='#20A464'
					icon={<Home />}
					hoverIndicator
				/>
				<Anchor
					href='/login'
					label='Login'
					color='#20A464'
					icon={<Home />}
					hoverIndicator
				/>
			</Box>
		</div>
	);
};

export default AppBar;
