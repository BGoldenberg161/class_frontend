import React, { useState } from 'react'
import { Main, Box, Button, Form, FormField } from 'grommet'
import {  Attraction, Cubes } from 'grommet-icons'
import axios from 'axios'

const UpdateClassForm = props => {
	
	const [className, setClassName] = useState(props.classroom.name)
	const [gradeLevel, setGradeLevel] = useState(props.classroom.gradeLevel)

	const authorizationHeader = {
		headers: {'Authorization': `Bearer ${props.token}`}
	  }

	const handleSubmit = e => {
		e.preventDefault()
		console.log(props)
		axios
			.put(`/api/classroom/${props.classroom.id}/`, {
				name: className,
				gradeLevel: gradeLevel
			}, 
			authorizationHeader)
			.then(res => {
				console.log(res.data)
				props.fetchClasses()
			})
			.catch(err =>
				console.log(err, "You've hit an error in the axios call for updateClass")
			);
	};

	return (
		<div>
			<Main pad='large' align='center' justify='center'>
				<Box fill align='center' justify='center' >
					<Box width='medium'>
						<Form
							onSubmit={e => {
								handleSubmit(e);
							}}
						>
							<FormField
								reverse
								icon={<Attraction />}
								label='Class Name'
								name='name'
								value={className}
								onChange={e => setClassName(e.target.value)}
								required
								validate={{ regexp: /^[a-z]/i }}
							/>
							<FormField
								reverse
								icon={<Cubes />}
								label='Grade Level'
								name='gradeLevel'
								type='text'
								value={gradeLevel}
								onChange={e => setGradeLevel(e.target.value)}
								required
								validate={{ regexp: /^[0-9]/i }}
							/>
							<Box direction='row' justify='center' margin={{ top: 'large' }}>
								<Button type='submit' label='Update Class' primary />
							</Box>
						</Form>
					</Box>
				</Box>
			</Main>
		</div>
	)
}

export default UpdateClassForm
