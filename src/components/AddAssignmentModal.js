import React from 'react';
import AssignmentForm from './AssignmentForm';
import { Box, Button, Layer } from 'grommet'

const AddClassModal = props => {
  const [show, setShow] = React.useState();
	return (
		<div>
			<Box>
				<Button label='Add A Assignment' onClick={() => setShow(true)} />
				{show && (
					<Layer
						onEsc={() => setShow(false)}
						onClickOutside={() => setShow(false)}
					>
						<AssignmentForm />
						<Button label='close' onClick={() => setShow(false)} />
					</Layer>
				)}
			</Box>
		</div>
	);
};

export default AddClassModal;