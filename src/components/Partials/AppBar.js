import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Box, Heading } from 'grommet';
import {
	Home,
	Cli,
	User,
	Catalog,
	Achievement,
	Workshop,
	FingerPrint,
	Login,
	Logout,
} from 'grommet-icons';

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
					c<span style={{ color: '#6FFFB0' }}>ℓ</span>ass
				</Heading>

				<Anchor
					as={Link}
					to='/'
					label='Home'
					icon={<Home />}
					hoverIndicator
				/>
				<Anchor
					as={Link}
					to='/about'
					label='About'
					icon={<Cli />}
					hoverIndicator
				/>
				<Anchor
					as={Link}
					to='/profile'
					label='Profile'
					icon={<User />}
					hoverIndicator
				/>
				<Anchor
					as={Link}
					to='/assignment'
					label='Assignment'
					icon={<Catalog />}
					hoverIndicator
				/>
				<Anchor
					as={Link}
					to='/grade'
					label='Grades'
					icon={<Achievement />}
					hoverIndicator
				/>
				<Anchor
					as={Link}
					to='/class'
					label='Class'
					icon={<Workshop />}
					hoverIndicator
				/>
				<Anchor
					as={Link}
					to='/signup'
					label='Signup'
					icon={<FingerPrint />}
					hoverIndicator
				/>
				<Anchor
					as={Link}
					to='/login'
					label='Login'
					icon={<Login />}
					hoverIndicator
				/>
				<Anchor
					onClick={() => props.logoutFunction()}
					as={Link}
					to='/'
					label='Logout'
					icon={<Logout />}
					hoverIndicator
				/>
			</Box>
		</div>
	);
};

export default AppBar;
