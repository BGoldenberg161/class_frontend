import React, { useState } from 'react'
import axios from 'axios'
import { Main, Box, Button, Form, FormField, TextInput, Select } from 'grommet'
import { View, Hide, MailOption, ContactInfo, Sign } from 'grommet-icons'
import { Redirect } from 'react-router-dom'

const SignupForm = () => {

	const [password, setPassword] = useState('')
	const [reveal, setReveal] = useState(false)
	const [passwordTwo, setPasswordTwo] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [isTeacher, setIsTeacher] = useState(false)
	// handle mismatch password modal for stretch goal
	// const [mismatchPassword, setMismatchPassword] = useState(false)
	const [successfulRegister, setSuccessfulRegister] = useState(false)


	const handleSubmit = e => {
		e.preventDefault()
		if (password !== passwordTwo) {
			// setMismatchPassword(true)
			return
		}
		axios
			.post('/signup/', {
				username: username,
				password: password,
				first_name: firstName,
				last_name: lastName,
				is_teacher: isTeacher,
				email: email,
			})
			.then(res => {
				console.log(res)
				console.log(res.data)
				setSuccessfulRegister(true)
			})
			.catch(err =>
				console.log(err, "You've hit an error in the axios call for users")
			);
	};


	return (
		<div>
			{successfulRegister ? <Redirect to={{pathname: `/get-in/`}} /> : ''}
			<Main pad='large' align='center' justify='center'>
				<Box fill align='center' justify='center' pad='large'>
					<Box width='medium'>
						<Form onSubmit={e => { handleSubmit(e) }} >
							<FormField
								reverse
								icon={<ContactInfo />}
								label='First Name'
								name='first_name'
								value={firstName}
								onChange={e => setFirstName(e.target.value)}
								required
								validate={{ regexp: /^[a-z]/i }}
							/>
							<FormField
								reverse
								icon={<ContactInfo />}
								label='Last Name'
								name='last_name'
								value={lastName}
								onChange={e => setLastName(e.target.value)}
								required
								validate={{ regexp: /^[a-z]/i }}
							/>
							<FormField
								reverse
								icon={<MailOption />}
								label='Email'
								name='email'
								type='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
								required
							/>
							<FormField
								reverse
								icon={<Sign />}
								label='Username'
								name='username'
								value={username}
								onChange={e => setUsername(e.target.value)}
								required
								validate={{ regexp: /^[a-z]/i }}
							/>
							<FormField
								label='Password'
								name='password'
								type='password'
								value={password}
							>
								<Box direction='row' justify='end'>
									<TextInput
										plain
										type={reveal ? 'text' : 'password'}
										value={password}
										onChange={e => setPassword(e.target.value)}
										required
									/>
									<Button
										icon={
											reveal ? <View size='medium' /> : <Hide size='medium' />
										}
										onClick={() => setReveal(!reveal)}
									/>
								</Box>
							</FormField>
							<FormField
								label='Confirm Password'
								name='password2'
								type='password'
								value={passwordTwo}
							>
								<Box direction='row' justify='end'>
									<TextInput
										plain
										type={reveal ? 'text' : 'password'}
										value={passwordTwo}
										onChange={e => setPasswordTwo(e.target.value)}
										required
									/>
									<Button
										icon={
											reveal ? <View size='medium' /> : <Hide size='medium' />
										}
										onClick={() => setReveal(!reveal)}
									/>
								</Box>
							</FormField>
							<FormField
								label='Are you a Teacher?'
								name='is_teacher'
								component={Select}
								value={isTeacher ? 'Yes' : 'No'}
								onChange={e => setIsTeacher(e.option === 'Yes' ? true : false)}
								options={['Yes', 'No']}
							/>
							<Box direction='row' justify='center' margin={{ top: 'large' }}>
								<Button type='submit' label='Submit' primary />
							</Box>
						</Form>
					</Box>
				</Box>
			</Main>
		</div>
	)
}

export default SignupForm
