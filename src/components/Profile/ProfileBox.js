import React from 'react';
import { Box, Heading, Text } from 'grommet';
import { FormNext, Terminal } from 'grommet-icons';
import ProfileModal from './ProfileModal';

const ProfileBox = props => {
	return (
		<Box
			pad='small'
			margin={{ vertical: 'xlarge' }}
			align='center'
			alignContent='center'
			alignSelf='center'
			border={{ color: 'brand', size: 'large', style: 'inset', side: 'all' }}
		>
			<Heading level='3' margin={{ vertical: 'medium' }}>
				Welcome, {props.user.username}
				{<br />}
				{props.user.is_teacher ? (
					<img src='https://img.shields.io/badge/-Teacher-000000?style=flat-square&logo=Apple&logoColor=ff0800' />
				) : (
					<img src='https://img.shields.io/badge/-Student-000000?style=flat-square&logo=Swarm&logoColor=C7951F' />
				)}
				{<br />}
			</Heading>
			<Box>
				<Text>
					<FormNext size='small' color='#6FFFB0' />
					First Name_ {props.user.first_name}
				</Text>
				<Text>
					<FormNext size='small' color='#6FFFB0' />
					Last Name_ {props.user.last_name}
				</Text>
				<Text>
					<FormNext size='small' color='#6FFFB0' />
					Username_ {props.user.username}
				</Text>
				<Text>
					<FormNext size='small' color='#6FFFB0' />
					Email_ {props.user.email}
				</Text>
			</Box>
			{<br />}
			<Box alignSelf='end'>
				<ProfileModal
					{...props}
					renderProfile={props.renderProfile}
					user={props.user}
					currentUser={props.currentUser}
					token={props.token}
				/>
			</Box>
		</Box>
	);
};

export default ProfileBox;
