import React from 'react';
import { Box, Footer, Text } from 'grommet';
import { FormNext } from 'grommet-icons';

const FooterBar = props => {
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
				style={{
					zIndex: '1',
					position: 'absolute',
					bottom: '0',
					width: '100vw',
				}}
			>
				<Footer>
					<FormNext color='black' />
					<Text alignSelf='center' weight='bold'>
						c<span style={{ color: 'green' }}>ℓ</span>ass
					</Text>
					<Text textAlign='center' size='small' color='green'>
						© 2020
					</Text>
				</Footer>
			</Box>
		</div>
	);
};

export default FooterBar;
