import React from 'react';
import ClassCard from '../components/ClassCard';
import { Box, ResponsiveContext, Grid } from 'grommet';
import AddClassModal from '../components/AddClassModal';

const Class = props => {
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
