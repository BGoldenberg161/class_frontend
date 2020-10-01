import React from 'react';
import AssignmentCard from '../components/AssignmentCard';
import AddAssignmentModal from '../components/AddAssignmentModal';
import { Box, ResponsiveContext, Grid } from 'grommet';

const Assignment = props => {
	return (
		<>
			<Box direction='row' justify='center' margin={{ top: 'large' }}>
				<AddAssignmentModal />
			</Box>
			<ResponsiveContext>
				{size => {
					if (size === 'small') {
						return (
							<Grid columns={['auto']}>
								<AssignmentCard />
								<AssignmentCard />
								<AssignmentCard />
								<AssignmentCard />
								<AssignmentCard />
								<AssignmentCard />
							</Grid>
						);
					} else if (size === 'medium') {
						return (
							<Grid columns={['auto', 'auto']}>
								<AssignmentCard />
								<AssignmentCard />
								<AssignmentCard />
								<AssignmentCard />
								<AssignmentCard />
								<AssignmentCard />
							</Grid>
						);
					} else {
						return (
							<Grid columns={['auto', 'auto', 'auto']}>
								<AssignmentCard />
								<AssignmentCard />
								<AssignmentCard />
								<AssignmentCard />
								<AssignmentCard />
								<AssignmentCard />
							</Grid>
						);
					}
				}}
			</ResponsiveContext>
		</>
	);
};

export default Assignment;
