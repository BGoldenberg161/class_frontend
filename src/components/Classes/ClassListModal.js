import React, {useState} from 'react';
import ClassList from './ClassList';
import { Anchor, Button, Layer } from 'grommet';

const ClassListModal = props => {
	const [show, setShow] = useState();
	return (
		<div>
                <Anchor  label='Add Students' onClick={() => setShow(true)} />
				{show && (
					<Layer
						onEsc={() => setShow(false)}
						onClickOutside={() => setShow(false)}
					>
						<ClassList
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

export default ClassListModal;
