import React, {useEffect} from 'react';
import ClassCard from '../components/ClassCard';
import { Box, ResponsiveContext, Grid } from 'grommet';
import AddClassModal from '../components/AddClassModal';
import axios from 'axios'

const Class = props => {
	const authorizationHeader = {
		headers: {'Authorization': `Bearer ${props.token}`}
	  }

	useEffect(() => {
		console.log(props.token)
		axios
		  .get('http://localhost:8000/api/classrooms/', authorizationHeader)
		  .then(res => {
			console.log('Here is the class data: ', res.data)
		  })
		  .catch(err =>
			console.log(err, "You've hit an error in the axios call for classes")
		  )
	  }, [props.token, props.currentUser])

	return (
		<>
			<Box direction='row' justify='center' margin={{ top: 'large' }}>
				<AddClassModal />
			</Box>

			<Box direction='row' justify='center' margin={{ top: 'large' }}>
				<ResponsiveContext>
					{size => {
						if (size === 'small') {
							return (
								<Grid columns={['auto']}>
									<ClassCard />
									<ClassCard />
									<ClassCard />
									<ClassCard />
									<ClassCard />
									<ClassCard />
								</Grid>
							);
						} else if (size === 'medium') {
							return (
								<Grid columns={['auto', 'auto']}>
									<ClassCard />
									<ClassCard />
									<ClassCard />
									<ClassCard />
									<ClassCard />
									<ClassCard />
								</Grid>
							);
						} else {
							return (
								<Grid columns={['auto', 'auto', 'auto']}>
									<ClassCard />
									<ClassCard />
									<ClassCard />
									<ClassCard />
									<ClassCard />
									<ClassCard />
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
