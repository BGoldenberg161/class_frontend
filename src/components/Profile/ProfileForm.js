import React, { useState } from 'react'
import axios from 'axios'
import { Main, Box, Button, Form, FormField, TextInput } from 'grommet'
import { View, Hide, MailOption, ContactInfo, Sign } from 'grommet-icons'

const ProfileForm = props => {

	const [password, setPassword] = useState('')
	const [reveal, setReveal] = useState(false)
	const [firstName, setFirstName] = useState(props.user.first_name)
	const [lastName, setLastName] = useState(props.user.last_name)
	const [email, setEmail] = useState(props.user.email)
	const [username, setUsername] = useState(props.user.username)

    const authorizationHeader = {
		headers: {'Authorization': `Bearer ${props.token}`}
    }
    
	const handleSubmit = e => {
		e.preventDefault()
        axios
			.put(`/api/user/${props.user.id}/`, {
				username: username,
				password: password,
				first_name: firstName,
				last_name: lastName,
				email: email,
			}, authorizationHeader)
			.then(res => {
				console.log(res)
				console.log(res.data)
				props.renderProfile()
			})
			.catch(err =>
				console.log(err, "You've hit an error in the axios call for users")
			)
	}


	return (
		<div>
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

export default ProfileForm
