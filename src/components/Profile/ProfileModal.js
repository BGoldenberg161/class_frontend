import React, { useState } from 'react'
import ProfileForm from './ProfileForm'
import { Button, Layer, Anchor } from 'grommet'

const ProfileModal = props => {

    const [show, setShow] = useState()
    
	return (
		<div>
			<Anchor  label='Edit Profile' onClick={() => setShow(true)} />
			{show && (
				<Layer
					onEsc={() => setShow(false)}
					onClickOutside={() => setShow(false)}
				>
					<ProfileForm {...props} renderProfile={props.renderProfile} user={props.user} currentUser={props.currentUser} token={props.token}/>
					<Button label='close' onClick={() => setShow(false)} />
				</Layer>
			)}
		</div>
	)
}

export default ProfileModal
