import React from 'react';
import { Box, Footer, Text } from 'grommet';
import { FormNext } from 'grommet-icons';

const FooterBar = props => {
	return (
		<div>
			<Footer
				background='brand'
        pad={{ horizontal: 'large', vertical: 'small' }}
        style={{position: 'absolute', bottom: '0', width: '100%'}}
			>
				<Box direction='row' gap='small'>
					<FormNext color='black' />
					<Text alignSelf='center' weight='bold'>
						c<span style={{ color: 'green' }}>ℓ</span>ass
					</Text>
				</Box>
				<Text textAlign='center' size='small' color="green">
					© 2020
				</Text>
			</Footer>
		</div>
	);
};

export default FooterBar;
