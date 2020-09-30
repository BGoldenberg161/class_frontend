import React from 'react';
import {
	Anchor,
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	Collapsible,
	Heading,
	Paragraph,
	Text,
} from 'grommet';
import { FormUp, FormDown, Favorite } from 'grommet-icons';

const AssignmentCard = props => {
	const [open, setOpen] = React.useState(false);
	const [favorite, setFavorite] = React.useState(false);

	const ExpandButton = ({ ...rest }) => {
		const Icon = open ? FormUp : FormDown;
		return (
			<Button
				hoverIndicator='light-4'
				icon={<Icon color='brand' />}
				{...rest}
			/>
		);
	};
	return (
		<Box pad='medium' align='start'>
			<Card elevation='large' width='medium'>
				<CardBody height='small'>
        <Box pad={{ horizontal: 'medium' }} responsive={false}>
        <Heading align='center' level='3' margin={{ vertical: 'medium' }}>
						Assignment Name
					</Heading>
          </Box>
				</CardBody>
				<Box pad={{ horizontal: 'medium' }} responsive={false}>
					<Heading level='3' margin={{ vertical: 'medium' }}>
						Class Name
					</Heading>
					<Paragraph margin={{ top: 'none' }}>Teacher Name</Paragraph>
				</Box>
				<CardFooter>
					<Box direction='row' align='center' gap='small'>
						<Button
							icon={<Favorite color={favorite ? 'red' : undefined} />}
							hoverIndicator
							onClick={() => {
								setFavorite(!favorite);
							}}
						/>
						<Anchor
							href='https://www.collinsdictionary.com/us/dictionary/english/bridge'
							label='Learn More'
						/>
					</Box>
					<Text size='medium' color='brand'>
						Assignment Desc.
					</Text>
					<ExpandButton onClick={() => setOpen(!open)} hoverIndicator />
				</CardFooter>
				<Collapsible open={open}>
					<Paragraph margin='medium' color='dark-3'>
						Here are some Tips/Hints~
					</Paragraph>
				</Collapsible>
			</Card>
		</Box>
	);
};

export default AssignmentCard;