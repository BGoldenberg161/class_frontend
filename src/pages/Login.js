import React from 'react';
import { Box, Button, Form, FormField, TextInput } from 'grommet';
import { View, Hide, Sign } from 'grommet-icons';

const Login = props => {
	const [value, setValue] = React.useState('');
	const [reveal, setReveal] = React.useState(false);
	return (
		<div>
			<Box fill align='center' justify='center'>
				<Box width='medium'>
					<Form
						onChange={value => console.log('onChange', value)}
						onSubmit={event =>
							console.log('onSubmit', event.value, event.touched)
						}
					>
						<FormField
							reverse
							icon={<Sign />}
							label='Username'
							name='username'
							required
							validate={{ regexp: /^[a-z]/i }}
						/>
						<FormField
							label='Password'
							name='password'
							type='password'
							required
						>
							<Box direction='row' justify='end'>
								<TextInput
									plain
									type={reveal ? 'text' : 'password'}
									value={value}
									onChange={event => setValue(event.target.value)}
								/>
								<Button
									icon={
										reveal ? <View size='medium' /> : <Hide size='medium' />
									}
									onClick={() => setReveal(!reveal)}
								/>
							</Box>
						</FormField>
						<Box direction='row' justify='center' margin={{ top: 'large' }}>
							<Button type='submit' label='Let me in, Professor..' primary />
						</Box>
					</Form>
				</Box>
			</Box>
		</div>
	);
};

export default Login;
