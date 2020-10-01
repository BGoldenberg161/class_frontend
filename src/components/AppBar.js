import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Box, Heading } from 'grommet';
import { Home, Cli, User, Catalog, Achievement, Workshop, FingerPrint, Login } from 'grommet-icons';

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
					as={Link}
					to='/'
					label='Home'
					color='#20A464'
					icon={<Home />}
					hoverIndicator
				/>
				<Anchor
					as={Link}
					to='/about'
					label='About'
					color='#20A464'
					icon={<Cli />}
					hoverIndicator
				/>
				<Anchor
					as={Link}
					to='/profile'
					label='Profile'
					color='#20A464'
					icon={<User />}
					hoverIndicator
				/>
				<Anchor
					as={Link}
					to='/assignment'
					label='Assignment'
					color='#20A464'
					icon={<Catalog />}
					hoverIndicator
				/>
				<Anchor
					as={Link}
					to='/grade'
					label='Grades'
					color='#20A464'
					icon={<Achievement />}
					hoverIndicator
				/>
				<Anchor
					as={Link}
					to='/class'
					label='Class'
					color='#20A464'
					icon={<Workshop />}
					hoverIndicator
				/>
				<Anchor
					as={Link}
					to='/signup'
					label='Signup'
					color='#20A464'
					icon={<FingerPrint />}
					hoverIndicator
				/>
				<Anchor
					as={Link}
					to='/login'
					label='Login'
					color='#20A464'
					icon={<Login />}
					hoverIndicator
				/>
			</Box>
		</div>
	);
};

export default AppBar;
