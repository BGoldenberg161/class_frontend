import React, {useState} from 'react';
import { Main, Box, Button, Form, FormField, TextInput } from 'grommet';
import { View, Hide, Sign } from 'grommet-icons';
import axios from 'axios'

const MakeClassForm = props => {
	
	const [className, setClassName] = useState('')
	const [gradeLevel, setGradeLevel] = useState(0)
	const [teacher, setTeacher] = useState('')

	const handleSubmit = e => {
		axios
			.post('http://localhost:8000/api/classrooms/', {
				name: className,
				gradeLevel: gradeLevel,
				teacher: teacher,
			})
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
			.catch(err =>
				console.log(err, "You've hit an error in the axios call for users")
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
								icon={<Sign />}
								label='Class Name'
								name='name'
								value={className}
								onChange={e => setClassName(e.target.value)}
								required
								validate={{ regexp: /^[a-z]/i }}
							/>
							<FormField
								icon={<Sign />}
								label='Grade Level'
								name='gradeLevel'
								type='text'
								value={gradeLevel}
								onChange={e => setGradeLevel(e.target.value)}
								required
								validate={{ regexp: /^[0-9]/i }}
							/>
							<FormField
								icon={<Sign />}
								label='Teacher'
								name='teacher'
								type='text'
								value={teacher}
								onChange={e => setTeacher(e.target.value)}
								required
								validate={{ regexp: /^[a-z]/i }}
							/>
							<Box direction='row' justify='center' margin={{ top: 'large' }}>
								<Button type='submit' label='Make new class' primary />
							</Box>
						</Form>
					</Box>
				</Box>
			</Main>
		</div>
	);
};

export default MakeClassForm;
