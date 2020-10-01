import React, {useState} from 'react';
import { Main, Box, Button, Form, FormField } from 'grommet';
import { Book, Yoga, Article  } from 'grommet-icons';
import axios from 'axios'

const UpdateAssignmentForm = props => {
	return (
		<div>
			<Main pad='large' align='center' justify='center'>
				<Box fill align='center' justify='center' >
					<Box width='medium'>
						<Form
							// onSubmit={e => {
							// 	handleSubmit(e);
							// }}
						>
							<FormField
								reverse
								icon={<Book />}
								label='Assignment Name'
								name='name'
								// value={}
								// onChange={}
								required
								validate={{ regexp: /^[a-z]/i }}
							/>
							<FormField
								reverse
								icon={<Yoga />}
								label='Teacher name'
								name=''
								type='text'
								// value={}
								// onChange={}
								required
								validate={{ regexp: /^[0-9]/i }}
							/>
							<FormField
								reverse
								icon={<Article />}
								label='Assignment Desc.'
								name=''
								type='text'
								// value={}
								// onChange={}
								required
								validate={{ regexp: /^[a-z]/i }}
							/>
							<Box direction='row' justify='center' margin={{ top: 'large' }}>
								<Button type='submit' label='Add New Assignment' primary />
							</Box>
						</Form>
					</Box>
				</Box>
			</Main>
		</div>
	);
};

export default UpdateAssignmentForm;