import React from 'react';
import { Box, Heading } from 'grommet'
import { FormNext } from 'grommet-icons';
import ProfileModal from './ProfileModal'

const ProfileBox = props => {



    return(
        <Box align='center' alignContent='center'>
            <Heading level='3' margin={{ vertical: 'medium' }}>
                {props.user.is_teacher ? <img src="https://img.shields.io/badge/-Teacher-000000?style=flat-square&logo=Apple&logoColor=ff0800" /> : <img src="https://img.shields.io/badge/-Student-000000?style=flat-square&logo=Swarm&logoColor=C7951F" />}
                {<br/>}
                Welcome, {props.user.username}
            </Heading>
            <Box>
                First Name <FormNext color='#6FFFB0' /> {props.user.first_name}
                Last Name <FormNext color='#6FFFB0' /> {props.user.last_name}
                Username <FormNext color='#6FFFB0' /> {props.user.username}
                Email <FormNext color='#6FFFB0' /> {props.user.email}
            </Box>
            <Box>
                <ProfileModal {...props} renderProfile={props.renderProfile} user={props.user} currentUser={props.currentUser} token={props.token}/>
            </Box>

        </Box>
    )

}

export default ProfileBox