import React from 'react';
import AssignmentList from './AssignmentList';
import { Box, Button, Layer } from 'grommet';

const AssignmentListModal = props => {
	const [show, setShow] = React.useState();
	return (
		<div>
				<Button label='Assign to Class' onClick={() => setShow(true)} />
				{show && (
					<Layer
						onEsc={() => setShow(false)}
						onClickOutside={() => setShow(false)}
					>
						<AssignmentList
							{...props}
							currentUser={props.currentUser}
							token={props.token}
							assignment={props.assignment}
						/>
						<Button label='close' style={{border: 'none', padding: '3vh 0'}} onClick={() => setShow(false)} />
					</Layer>
				)}
		</div>
	);
};

export default AssignmentListModal;
