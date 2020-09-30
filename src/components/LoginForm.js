import React, { useState, useEffect } from 'react';
import { Main, Box, Button, Form, FormField, TextInput } from 'grommet';
import { View, Hide, Sign } from 'grommet-icons';
import axios from 'axios'

const LoginForm = props => {
	const [value, setValue] = useState('');
	const [reveal, setReveal] = useState(false);
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	// const handleLogin = e => {
	// 	e.preventDefault();
	// 	axios
	// 		.post('http://localhost:8000/current_user/', {
	// 			username: username,
	// 			password: password,
	// 		}, { isAuthenticated: true })
	// 		.then(res => {
	// 			const token = res.data.key
	// 			if (local)
	// 		})
	// 		.catch(err =>
	// 			console.log(err, "You've hit an error in the axios call for users")
	// 		);
	// };
	return (
		<div>
			<Main pad='large' align='center' justify='center'>
				<Box fill align='center' justify='center' >
					<Box width='medium'>
						<Form
							// onSubmit={(e) => handleLogin(e)}
						>
							<FormField
								reverse
								icon={<Sign />}
								label='Username'
								name='username'
								onChange={(e) => setUsername(e.target.value)}
								required
								validate={{ regexp: /^[a-z]/i }}
							/>
							<FormField
								label='Password'
								name='password'
								type='password'
								onChange={(e) => setPassword(e.target.value)}
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
			</Main>
		</div>
	);
};

export default LoginForm;
