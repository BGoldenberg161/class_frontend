import React from 'react'
import UpdateClassForm from './UpdateClassForm'
import { Button, Layer, Anchor } from 'grommet'

const UpdateClassModal = props => {

	const [show, setShow] = React.useState()

	return (
		<div>
			<Anchor  label='Update Class' onClick={() => setShow(true)} />
			{show && (
				<Layer
					onEsc={() => setShow(false)}
					onClickOutside={() => setShow(false)}
				>
					<UpdateClassForm {...props} classroom={props.classroom} currentUser={props.currentUser} token={props.token} fetchClasses={props.fetchClasses}/>
					<Button label='close' onClick={() => setShow(false)} />
				</Layer>
			)}
		</div>
	)
}

export default UpdateClassModal
