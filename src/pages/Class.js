import React from 'react';
import ClassCard from '../components/ClassCard';
import { ResponsiveContext, Grid } from 'grommet';
import UpdateClassForm from '../components/UpdateClassForm'

const Class = props => {
	return (
		<ResponsiveContext>
			{size => {
				if (size === 'small') {
					return (
						<Grid columns={['auto']}>
							<UpdateClassForm />
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
							<UpdateClassForm />
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
							<UpdateClassForm />
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
