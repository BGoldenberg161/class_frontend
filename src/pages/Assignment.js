import React, {useEffect, useState} from 'react'
import AssignmentCard from '../components/Assignments/AssignmentCard'
import AddAssignmentModal from '../components/Assignments/AddAssignmentModal'
import { Box, ResponsiveContext, Grid } from 'grommet'
import axios from 'axios'

const Assignment = props => {

	const [assignments, setAssignments] = useState([])

	const authorizationHeader = {
		headers: {'Authorization': `Bearer ${props.token}`}
	}

	const fetchAssignments = () => {
		axios
		  .get('/api/assignments/', authorizationHeader)
		  .then(res => {
			setAssignments(res.data)
			console.log('Here is the class data: ', res.data)
		  })
		  .catch(err =>
			console.log(err, "You've hit an error in the axios call for assignments")
		  )
	}

	useEffect(() => {

		const authorizationHeader = {
			headers: {'Authorization': `Bearer ${props.token}`}
		}

		axios
		  .get('/api/assignments/', authorizationHeader)
		  .then(res => {
			setAssignments(res.data)
			console.log('Here is the class data: ', res.data)
		  })
		  .catch(err =>
			console.log(err, "You've hit an error in the axios call for assignments")
		  )
	  }, [props.token, props.currentUser])

	return (
		<> 
			<Box direction='row' justify='center' margin={{ top: 'large' }}>
				<AddAssignmentModal {...props} currentUser={props.currentUser} token={props.token} fetchAssignments={fetchAssignments}/>
			</Box>
			<ResponsiveContext>
				{size => {
					if (size === 'small') {
						return (
							<Grid columns={['auto']}>
								{props.user.is_teacher ? 
								assignments.map((a, i) => {
										return <AssignmentCard key={i} assignment={a} currentUser={props.currentUser} token={props.token} fetchAssignments={fetchAssignments}/>
									}) : <h1>You can see your assignments via the classes tab</h1>}
							</Grid>
						)
					} else if (size === 'medium') {
						return (
							<Grid columns={['auto', 'auto']}>
								{props.user.is_teacher ? 
								assignments.map((a, i) => {
										return <AssignmentCard key={i} assignment={a} currentUser={props.currentUser} token={props.token} fetchAssignments={fetchAssignments}/>
									}) : <h1>You can see your assignments via the classes tab</h1>}
							</Grid>
						)
					} else {
						return (
							<Grid columns={['auto', 'auto', 'auto']}>
								{props.user.is_teacher ? 
								assignments.map((a, i) => {
										return <AssignmentCard key={i} assignment={a} currentUser={props.currentUser} token={props.token} fetchAssignments={fetchAssignments}/>
									}) : <h1>As a student, you can see your assignments via the classes tab.</h1>}
							</Grid>
						)
					}
				}}
			</ResponsiveContext>
		</>
	)
}

export default Assignment
