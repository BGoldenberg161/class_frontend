import React, {useState} from 'react'
import AssignmentForm from './AssignmentForm'
import { Box, Button, Layer } from 'grommet'

const AddClassModal = props => {

  const [show, setShow] = useState()

	return (
		<div>
			<Box>
				<Button label='Add A Assignment' onClick={() => setShow(true)} />
				{show && (
					<Layer
						onEsc={() => setShow(false)}
						onClickOutside={() => setShow(false)}
					>
						<AssignmentForm {...props} currentUser={props.currentUser} token={props.token} fetchAssignments={props.fetchAssignments}/>
						<Button label='close' onClick={() => setShow(false)} />
					</Layer>
				)}
			</Box>
		</div>
	)
}

export default AddClassModal