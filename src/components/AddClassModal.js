import React from 'react';
import ClassForm from './ClassForm';
import { Box, Button, Layer } from 'grommet'

const AddClassModal = props => {
  const [show, setShow] = React.useState();
	return (
		<div>
			<Box>
				<Button label='Add A Class' onClick={() => setShow(true)} />
				{show && (
					<Layer
						onEsc={() => setShow(false)}
						onClickOutside={() => setShow(false)}
					>
						<ClassForm {...props} currentUser={props.currentUser} token={props.token} fetchClasses={props.fetchClasses}/>
						<Button label='close' onClick={() => setShow(false)} />
					</Layer>
				)}
			</Box>
		</div>
	);
};

export default AddClassModal;