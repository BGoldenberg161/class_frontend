import React, {useState, useEffect} from 'react';
import ClassCard from '../components/ClassCard';
import { Box, ResponsiveContext, Grid } from 'grommet';
import AddClassModal from '../components/AddClassModal';
import axios from 'axios'

const Class = props => {

	const [classes, setClasses] = useState([{name: 'DummyData', gradeLevel: 5}])

	const authorizationHeader = {
		headers: {'Authorization': `Bearer ${props.token}`}
	  }

	useEffect(() => {
		console.log(props.token)
		axios
		  .get('http://localhost:8000/api/classrooms/', authorizationHeader)
		  .then(res => {
			setClasses(res.data)
			console.log('Here is the class data: ', res.data)
		  })
		  .catch(err =>
			console.log(err, "You've hit an error in the axios call for classes")
		  )
	  }, [props.token, props.currentUser])

	

	return (
		<>
			<Box direction='row' justify='center' margin={{ top: 'large' }}>
				<AddClassModal {...props} currentUser={props.currentUser} token={props.token} />
			</Box>

			<Box direction='row' justify='center' margin={{ top: 'large' }}>
				<ResponsiveContext>
					{size => {
						if (size === 'small') {
							return (
								<Grid columns={['auto']}>
									{classes.map((c, i) => {
										return <ClassCard key={i} class={c} />
									})}
								</Grid>
							);
						} else if (size === 'medium') {
							return (
								<Grid columns={['auto', 'auto']}>
									{classes.map((c, i) => {
										return <ClassCard key={i} class={c} />
									})}
								</Grid>
							);
						} else {
							return (
								<Grid columns={['auto', 'auto', 'auto']}>
									{classes.map((c, i) => {
										return <ClassCard key={i} class={c} />
									})}
								</Grid>
							);
						}
					}}
				</ResponsiveContext>
			</Box>
		</>
	);
};

export default Class;
