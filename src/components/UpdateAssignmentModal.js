import React from 'react';
import UpdateAssignmentForm from './UpdateAssignmentForm';
import { Button, Layer, Anchor } from 'grommet';

const UpdateAssignmentModal = props => {
	const [show, setShow] = React.useState();
	return (
		<div>
			<Anchor  label='Update Assignment' onClick={() => setShow(true)} />
			{show && (
				<Layer
					onEsc={() => setShow(false)}
					onClickOutside={() => setShow(false)}
				>
					<UpdateAssignmentForm {...props} assignmentId={props.assignmentId} currentUser={props.currentUser} token={props.token} assignment={props.assignment} fetchAssignments={props.fetchAssignments} />
					<Button label='close' onClick={() => setShow(false)} />
				</Layer>
			)}
		</div>
	);
};

export default UpdateAssignmentModal;