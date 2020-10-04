import React, {useState} from 'react';
import StudentList from './StudentList';
import { Anchor, Button, Layer } from 'grommet';

const StudentListModal = props => {
	const [show, setShow] = useState();
	return (
		<div>
                <Anchor  label='See Assignments' onClick={() => setShow(true)} />
				{show && (
					<Layer
						onEsc={() => setShow(false)}
						onClickOutside={() => setShow(false)}
					>
						<StudentList
							{...props}
							currentUser={props.currentUser}
							token={props.token}
							classroom={props.classroom}
						/>
						<Button label='close' style={{border: 'none', padding: '3vh 0'}} onClick={() => setShow(false)} />
					</Layer>
				)}
		</div>
	);
};

export default StudentListModal;
