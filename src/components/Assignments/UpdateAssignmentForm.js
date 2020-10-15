import React, {useState} from 'react'
import { Main, Box, Button, Form, FormField } from 'grommet'
import { Book, Aggregate, Article  } from 'grommet-icons'
import axios from 'axios'

const UpdateAssignmentForm = props => {

	const [assignmentName, setAssignmentName] = useState(props.assignment.name)
	const [url, setUrl] = useState(props.assignment.url)
	const [description, setDescription] = useState(props.assignment.description)

	const authorizationHeader = {
		headers: {'Authorization': `Bearer ${props.token}`}
	  }

	const handleSubmit = e => {
		e.preventDefault()
		console.log(authorizationHeader)
		axios
			.put(`/api/assignment/${props.assignmentId}/`, {
				name: assignmentName,
				url: url,
				description: description
			}, 
			authorizationHeader)
			.then(res => {
				console.log(res.data)
				props.fetchAssignments()
			})
			.catch(err =>
				console.log(err, "You've hit an error in the axios call for updateClass")
			)
	}

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
								icon={<Book />}
								label='Assignment Name'
								name='name'
								value={assignmentName}
								onChange={e => setAssignmentName(e.target.value)}
								required
								validate={{ regexp: /^[a-z]/i }}
							/>
							<FormField
								reverse
								icon={<Aggregate />}
								label='Url'
								name='url'
								type='text'
								value={url}
								onChange={e => setUrl(e.target.value)}
								required
							/>
							<FormField
								reverse
								icon={<Article />}
								label='Assignment Desc.'
								name='description'
								type='text'
								value={description}
								onChange={e => setDescription(e.target.value)}
								required
								validate={{ regexp: /^[a-z]/i }}
							/>
							<Box direction='row' justify='center' margin={{ top: 'large' }}>
								<Button type='submit' label='Update Assignment' primary />
							</Box>
						</Form>
					</Box>
				</Box>
			</Main>
		</div>
	)
}

export default UpdateAssignmentForm