import React from 'react';
import AssignmentCard from '../components/AssignmentCard';
import { ResponsiveContext, Grid } from 'grommet';

const Assignment = props => {
	return (
		<div>
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
		</div>
	);
};

export default Assignment;
