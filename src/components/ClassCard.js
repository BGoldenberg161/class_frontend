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
	Image,
	Paragraph,
	Text,
} from 'grommet';
import { FormUp, FormDown, Favorite } from 'grommet-icons';

const ClassCard = props => {
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
					<Image
						fit='cover'
						src='//v2.grommet.io/assets/IMG_4245.jpg'
						a11yTitle='bridge'
					/>
				</CardBody>
				<Box pad={{ horizontal: 'medium' }} responsive={false}>
					<Heading level='3' margin={{ vertical: 'medium' }}>
						English &amp; Language Arts
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
						Class Desc.
					</Text>
					<ExpandButton onClick={() => setOpen(!open)} hoverIndicator />
				</CardFooter>
				<Collapsible open={open}>
					<Paragraph margin='medium' color='dark-3'>
						English and Language Arts high school classes provide an important
						foundation for college success – regardless of what you plan to
						study or what career path you’d like to take, you’ll need strong
						reading comprehension and the ability to communicate clearly through
						your writing.
					</Paragraph>
				</Collapsible>
			</Card>
		</Box>
	);
};

export default ClassCard;
