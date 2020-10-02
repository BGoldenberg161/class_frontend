import React, {useEffect, useState} from 'react';
import AssignmentCard from '../components/Assignments/AssignmentCard';
import AddAssignmentModal from '../components/Assignments/AddAssignmentModal';
import { Box, ResponsiveContext, Grid } from 'grommet';
import axios from 'axios'

const Assignment = props => {

	const [assignments, setAssignments] = useState([])

	const authorizationHeader = {
		headers: {'Authorization': `Bearer ${props.token}`}
	}

	const fetchAssignments = () => {
		axios
		  .get('http://localhost:8000/api/assignments/', authorizationHeader)
		  .then(res => {
			setAssignments(res.data)
			console.log('Here is the class data: ', res.data)
		  })
		  .catch(err =>
			console.log(err, "You've hit an error in the axios call for assignments")
		  )
	}

	useEffect(() => {
		axios
		  .get('http://localhost:8000/api/assignments/', authorizationHeader)
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
								{assignments.map((a, i) => {
										return <AssignmentCard key={i} assignment={a} currentUser={props.currentUser} token={props.token} fetchAssignments={fetchAssignments}/>
									})}
							</Grid>
						);
					} else if (size === 'medium') {
						return (
							<Grid columns={['auto', 'auto']}>
								{assignments.map((a, i) => {
										return <AssignmentCard key={i} assignment={a} currentUser={props.currentUser} token={props.token} fetchAssignments={fetchAssignments}/>
									})}
							</Grid>
						);
					} else {
						return (
							<Grid columns={['auto', 'auto', 'auto']}>
								{assignments.map((a, i) => {
										return <AssignmentCard key={i} assignment={a} currentUser={props.currentUser} token={props.token} fetchAssignments={fetchAssignments}/>
									})}
							</Grid>
						);
					}
				}}
			</ResponsiveContext>
		</>
	);
};

export default Assignment;
