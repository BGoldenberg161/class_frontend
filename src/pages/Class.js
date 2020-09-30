import React from 'react';
import ClassCard from '../components/ClassCard';
import { ResponsiveContext, Grid } from 'grommet';

const Class = props => {
	return (
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
	);
};

export default Class;
