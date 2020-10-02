import React from 'react';
import AssignmentList from './AssignmentList';
import { Box, Button, Layer } from 'grommet';

const AssignmentListModal = props => {
	const [show, setShow] = React.useState();
	return (
		<div>
				<Button label='Add A Assignment' onClick={() => setShow(true)} />
				{show && (
					<Layer
						onEsc={() => setShow(false)}
						onClickOutside={() => setShow(false)}
					>
						<AssignmentList />
						<Button label='close' onClick={() => setShow(false)} />
					</Layer>
				)}
		</div>
	);
};

export default AssignmentListModal;
